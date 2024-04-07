import * as chrono from 'chrono-node';
import { createSignal } from 'solid-js';

export default function Home() {
  const [result, setResult] = createSignal<chrono.ParsedResult[]>();

  return (
    <main>
      <h1>Chrono Playground</h1>
      <p>Natural language date parser.</p>

      <input
        type="text"
        placeholder="last 3 months from today"
        onInput={(e) => {
          setResult(chrono.parse(e.currentTarget.value));
        }}
        required
      />

      <div>
        <pre>{JSON.stringify(result() ?? 'Result', null, 2)}</pre>
      </div>
    </main>
  );
}
