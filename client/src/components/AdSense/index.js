import React from 'react';

class AdSenseComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-8814263255628634'
          enable_page_level_ads='true'
        //   data-ad-slot='12121212'
          data-ad-format='auto'
        />
    );
  }
}
export default AdSenseComponent;