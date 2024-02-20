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
  useSettings
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();
  const { block_title, block_subtitle, image_url } = useSettings();

  return (
    <BlockStack>
      <Divider/>
      <InlineLayout   columns={['24%', 'fill']} blockAlignment="center" spacing="base">
        { image_url? <Image source={image_url}/>:null  }
        <BlockStack>
          <Text size="large">{ block_title }</Text>
          <Text size="small">{ block_subtitle }</Text>
        </BlockStack>
      </InlineLayout >
    </BlockStack>
  );
}