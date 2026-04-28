import { useEffect, useRef } from 'react'

/**
 * Cross-tab sync via BroadcastChannel API. When the user has the app open
 * in multiple tabs, completing an exercise in one should refresh state in
 * the others.
 *
 *   useBroadcastSync('progress', (msg) => { refetch() })
 *
 * To send: const send = useBroadcastSync(channel, handler)
 *          send({ type: 'progress-updated' })
 */
export function useBroadcastSync(channelName, onMessage) {
  const channelRef = useRef(null)
  const onMessageRef = useRef(onMessage)

  // Keep handler ref fresh so we don't have to re-create the channel
  useEffect(() => { onMessageRef.current = onMessage }, [onMessage])

  useEffect(() => {
    if (typeof window === 'undefined' || !('BroadcastChannel' in window)) return

    const channel = new BroadcastChannel(channelName)
    channelRef.current = channel

    const handler = (event) => onMessageRef.current?.(event.data)
    channel.addEventListener('message', handler)

    return () => {
      channel.removeEventListener('message', handler)
      channel.close()
      channelRef.current = null
    }
  }, [channelName])

  // Returns a sender; safe to call before channel is ready (no-op)
  return (data) => channelRef.current?.postMessage(data)
}
