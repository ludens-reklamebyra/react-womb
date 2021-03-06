import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Layout, { LayoutProvider } from '../src/index';

storiesOf('Layout', module).add('Basic usage', () => (
  <Layout container>
    <Layout item>Content here</Layout>
  </Layout>
));

storiesOf('Layout', module).add('Item sizes', () => (
  <Layout container>
    <Layout item xs={{ basis: 4 }}>
      Content here
    </Layout>
    <Layout item xs={{ basis: 4 }}>
      Content here
    </Layout>
    <Layout item xs={{ basis: 4 }}>
      Content here
    </Layout>
  </Layout>
));

storiesOf('Layout', module).add('With custom settings', () => {
  const settings = {
    mediaQueries: {
      xs: 50,
      sm: 300
    }
  };

  return (
    <LayoutProvider settings={settings}>
      <Layout container>
        <Layout item xs={{ basis: 4 }}>
          Content here
        </Layout>
        <Layout item xs={{ basis: 4 }}>
          Content here
        </Layout>
        <Layout item xs={{ basis: 4 }}>
          Content here
        </Layout>
      </Layout>
    </LayoutProvider>
  );
});
