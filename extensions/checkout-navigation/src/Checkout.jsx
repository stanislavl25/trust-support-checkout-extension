import {  
  reactExtension,
  Image,
  useSettings
} from '@shopify/ui-extensions-react/checkout';


export default reactExtension(
  'purchase.checkout.header.render-after',
  () => <Extension />,
);

function Extension() {

  const {image_url} = useSettings();
  return (
    <>
    {image_url?<Image source={image_url} />:null}
    </>
  );
}