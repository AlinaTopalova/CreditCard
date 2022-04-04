import { ThreeDots } from  'react-loader-spinner';

export default function Loader(): JSX.Element {
  return (
    <div style={{margin: '100px 250px'}}>
      <ThreeDots color="grey" height={100} width={100} />
    </div>
  );
}