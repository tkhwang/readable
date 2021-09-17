import { useAuth } from '@readable/shared/util-auth';
import { useMeViewModel } from '@readable/shared/data-access-me';
import { Profile } from '@readable/ui';
import { useRouter } from 'next/router';

export const HomeProfile = () => {
  const { me, loading, error } = useMeViewModel();
  const { user } = useAuth();

  const router = useRouter();

  // TODO(zlrlo): loading UI 개선 필요
  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Please log in</div>;
  }

  return <Profile provider={me?.provider ?? ''} name={me?.name ?? ''} avatarUrl={me?.avatarUrl ?? ''} />;
};
