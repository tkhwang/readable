import { GetUsersViewController } from './components/GetUsersViewController';
import { useGetUsersViewModel } from './components/useGetUsersViewModel.query';

export function App() {
  const viewModel = useGetUsersViewModel();

  return (
    <>
      <img src="https://user-images.githubusercontent.com/365500/122947722-572c6280-d3b5-11eb-9b18-f8e0e2f79e3b.png" alt="symbol" />
      <GetUsersViewController viewModel={viewModel} />
    </>
  );
}

export default App;
