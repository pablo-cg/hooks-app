import { useCounter, useFetch } from '../hooks';
import { CharacterCard } from './CharacterCard';
import { Loading } from './Loading';

export const MultipleCustomHooksApp = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`,
  );

  return (
    <section className="border rounded p-3 flex flex-col gap-4">
      <h1 className="text-lg font-semibold">Multiple Custom Hooks App</h1>
      <h2 className="text-base font-semibold">Rick and Morty Characters</h2>

      {/* 🤮 */}
      {isLoading ? (
        <Loading />
      ) : (
        <CharacterCard {...data} changeCharacter={() => increment()} />
      )}
    </section>
  );
};
