import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Toolbar} from 'react-onsenui';

export default class SettingsPage extends React.Component {
  render() {

      let onShow = () => {
          console.log('onShow', this);
      };

      let onInit = () => {
          console.log('onInit', this);
      };

      let onHide = () => {
          console.log('onHide', this);
      };

    return (
      <Page
          onShow={onShow}
          onInit={onInit}
          onHide={onHide}
        renderToolbar={() =>
          <Toolbar>
            <div className='center'>Title</div>
          </Toolbar>
        }
      >
        <div>
          Settings Page
        </div>
      </Page>
    );
  }
}