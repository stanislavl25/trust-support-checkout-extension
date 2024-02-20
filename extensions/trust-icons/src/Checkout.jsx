import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  InlineLayout,
  BlockStack,
  Image,
  Text,
  Divider,
  useSettings,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();
  const { block_title1, block_subtitle1, image_url1, block_title2, block_subtitle2, image_url2 } = useSettings();

  return (
    <BlockStack spacing="base">
      <Divider/>
      <InlineLayout   columns={['16%', 'fill']} blockAlignment="center" spacing="base">
        { image_url1? <Image source={image_url1}/>:null}
        <BlockStack>
          <Text size="large">{ block_title1 }</Text>
          <Text size="small">{ block_subtitle1 }</Text>
        </BlockStack>
      </InlineLayout >
      <InlineLayout   columns={['16%', 'fill']} blockAlignment="center" spacing="base">
      { image_url2? <Image source={image_url2}/>:null}
        <BlockStack>
          <Text size="large">{ block_title2 }</Text>
          <Text size="small">{ block_subtitle2 }</Text>
        </BlockStack>
      </InlineLayout >
    </BlockStack>
  );
}