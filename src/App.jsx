import {
  CallbackHookApp,
  CounterApp,
  CounterAppCustomHook,
  FocusInputApp,
  MemoHookApp,
  MemorizeApp,
  MultipleCustomHooksApp,
  SimpleFormApp,
  SimpleFormAppCustomHook,
  TodoApp,
} from './components';

// import './hooks/intro-reducer';

function App() {
  return (
    <main className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold">Hooks App (spanglish)</h1>
      <hr className="mb-5" />
      <TodoApp />
      <CounterApp />
      <CounterAppCustomHook />
      <SimpleFormApp />
      <SimpleFormAppCustomHook />
      <MultipleCustomHooksApp />
      <FocusInputApp />
      <MemorizeApp />
      <MemoHookApp />
      <CallbackHookApp />
    </main>
  );
}

export default App;
