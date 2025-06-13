'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { increment, decrement, incrementByAmount } from '@/lib/redux/features/counterSlice';

export default function HomePage() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Counter: {count}</h1>
      <div className="mt-4 space-x-2">
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
        <button onClick={() => dispatch(incrementByAmount(5))} className="px-4 py-2 bg-blue-500 text-white rounded">+5</button>
      </div>
    </main>
  );
}
