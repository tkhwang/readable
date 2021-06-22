import { GetUsersViewController } from './components/GetUsersViewController';
import { useGetUsersViewModel } from './components/useGetUsersViewModel.query';

export function App() {
  const viewModel = useGetUsersViewModel();

  return (
    <>
      <img src="https://user-images.githubusercontent.com/365500/122930877-51c81b80-d3a7-11eb-8a7e-9b1de95cda77.png" alt="symbol" />
      <GetUsersViewController viewModel={viewModel} />
    </>
  );
}

export default App;
