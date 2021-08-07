import { ViewModel } from './ViewModel';

export type ViewController<T extends ViewModel<any>> = React.FC<{
  viewModel: T;
}>;
