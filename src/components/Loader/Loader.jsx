import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height={70}
      width={70}
      color="#FF00FF"
      wrapperStyle={{}}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#FF00FF"
      strokeWidth={3}
      strokeWidthSecondary={3}
      wrapperClass="LoaderWrapper"
    />
  );
};
