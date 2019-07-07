import React from 'react';

class AdSense extends React.Component {
  componentDidMount() {
    // (window.adsbygoogle = window.adsbygoogle || []).push({});
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className="adsense-container">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-8814263255628634"
          enable_page_level_ads="true"
          data-ad-slot=""
          data-ad-format="auto"
        />
      </div>
    );
  }
}
export default AdSense;
