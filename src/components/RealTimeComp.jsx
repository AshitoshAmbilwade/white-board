import { useSyncDemo } from '@tldraw/sync';
import React from 'react';
import { useParams } from 'react-router';
import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';

function RealTimeComp() {
  let {roomId} = useParams()
  const store = useSyncDemo({ roomId: roomId })
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw store={store}  />
		</div>
  )
}

export default RealTimeComp