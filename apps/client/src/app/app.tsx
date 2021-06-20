import { GetUsersViewController } from './components/GetUsersViewController';
import { useGetUsersViewModel } from './components/useGetUsersViewModel.query';

export function App() {
  const viewModel = useGetUsersViewModel();

  return (
    <>
      Readable, coming soon...
      <GetUsersViewController viewModel={viewModel} />
    </>
  );
}

export default App;
