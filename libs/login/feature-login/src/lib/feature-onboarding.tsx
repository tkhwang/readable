import { useDataAccessOnboarding } from '@readable/home/data-access-home';
import { LegacyRef, useRef } from 'react';

export const FeatureOnboarding = () => {
  const { setNickName } = useDataAccessOnboarding();

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="h-screen bg-indigo-700">
      <div className="flex flex-col justify-center h-full">
        <div className="max-w-6xl m-auto md:p-10 sm:p-7 p-5 bg-white text-black">
          <div>사용자 이름 만들기</div>
          <div>새 계정에 사용할 사용자 이름을 선택하세요. 나중에 언제든지 변경할 수 있습니다.</div>
          {/* 리액트 form으로 변경 필요 */}
          <input type="text" ref={inputRef} />
          <button onClick={() => setNickName(inputRef?.current?.value ?? '')}>입력</button>
        </div>
      </div>
    </div>
  );
};
