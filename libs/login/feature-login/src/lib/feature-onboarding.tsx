import { useDataAccessOnboarding } from '@readable/home/data-access-home';
import { LoginLayout } from './login-layout';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { MinusCircleIcon } from '@heroicons/react/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useState } from 'react';

type FormInputs = {
  nickname: string;
};

enum OnboardingStep {
  Nickname,
  Tag,
}

export const FeatureOnboarding = () => {
  const { setNickName } = useDataAccessOnboarding();

  const [onboardingStep, setOnboardingStep] = useState(OnboardingStep.Nickname);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = () => {
    const { nickname } = getValues();
    setNickName(nickname);
  };

  const onNextStepButtonClick = () => {
    if (onboardingStep === OnboardingStep.Tag) {
      onSubmit();
    }
    setOnboardingStep(OnboardingStep.Tag);
  };

  const onPrevStepButtonClick = () => {
    setOnboardingStep(OnboardingStep.Nickname);
  };

  return (
    <LoginLayout>
      <div className="text-black">
        <div className="space-y-3">
          <div className="lg:text-5xl sm:text-4xl text-2xl font-bold">
            {onboardingStep === OnboardingStep.Nickname && '사용자 이름 만들기'}
            {onboardingStep === OnboardingStep.Tag && 'Pick your interests'}
          </div>
          <div className="text-gray-400 sm:text-xl text-sm">
            {onboardingStep === OnboardingStep.Nickname &&
              '새 계정에 사용할 사용자 이름을 선택하세요. 나중에 언제든지 변경할 수 있습니다.'}
            {onboardingStep === OnboardingStep.Tag && 'Select 3-5 different topic'}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="sm:mt-16 mt-9 sm:mb-44 mb-20">
            <input
              type="text"
              {...register('nickname', { required: 'Please enter your nickname.' })}
              placeholder="사용자 이름"
              className="sm:py-6 sm:px-5 max-w-sm w-full"
            />

            <ErrorMessage
              errors={errors}
              name="nickname"
              render={({ message }) => (
                <div className="text-red-600 mt-3 flex space-x-2">
                  <div className="w-5 h-5">
                    <MinusCircleIcon />
                  </div>
                  <p className="">{message}</p>
                </div>
              )}
            />
          </div>

          <div className="ml-auto space-x-2 flex items-center">
            <button
              onClick={onPrevStepButtonClick}
              className="sm:w-24 w-14 sm:h-24 h-14 rounded-full bg-gray-200 disabled:opacity-50"
              disabled={onboardingStep === OnboardingStep.Nickname ? true : false}
            >
              <div className="sm:w-11 w-8 sm:h-11 h-8 mx-auto">
                <ChevronLeftIcon />
              </div>
            </button>
            <button onClick={onNextStepButtonClick} className="sm:w-24 w-14 sm:h-24 h-14 rounded-full bg-gray-200">
              <div className="sm:w-11 w-8 sm:h-11 h-8 mx-auto">
                <ChevronRightIcon />
              </div>
            </button>
          </div>
        </form>
      </div>
    </LoginLayout>
  );
};
