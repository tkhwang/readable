import { useMeViewModel } from '@readable/shared/data-access-me';
import { Profile } from '@readable/ui';
import { useRouter } from 'next/router';

export const HomeProfile = () => {
  const { me, loading, error } = useMeViewModel();
  const router = useRouter();

  if (loading) {
    console.log('TCL: HomeProfile -> loading', loading);
  }

  if (error) {
    console.log('TCL: HomeProfile -> error', error);
    router.push('/login');
  }

  return <Profile provider={me?.provider ?? ''} name={me?.name ?? ''} avatarUrl={me?.avatarUrl ?? ''} />;
};
