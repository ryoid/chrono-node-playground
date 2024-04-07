import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import './app.css';

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Suspense>{props.children}</Suspense>
          <footer>
            Using{' '}
            <a href="https://github.com/wanasit/chrono" target="_blank">
              <code>chrono-node</code>
            </a>
          </footer>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
