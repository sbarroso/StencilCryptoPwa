import { Component, State } from '@stencil/core';
 
interface Holding {
  crypto: string,
  currency: string,
  amount: number,
  value?: number
}
 
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
 
  @State() holdings: Holding[] = [];
 
  componentWillLoad(){
 
    // just set up some dummy data for now
    this.holdings = [
      {
        crypto: 'BTC',
        currency: 'USD',
        amount: 0.1,
        value: 11588.32892
      },
      {
        crypto: 'ETH',
        currency: 'USD',
        amount: 2,
        value: 1032.23421
      },
      {
        crypto: 'LTC',
        currency: 'USD',
        amount: 4,
        value: 153.2343242
      }
    ]
 
  }
 
  renderWelcomeMessage(){
 
    return (
 
      <div>
        {!this.holdings.length ? (
          <div class="message"><p><strong>cryptoPWA</strong> is a <strong>P</strong>rogressive <strong>W</strong>eb <strong>A</strong>pplication that allows you to keep track of the approximate worth of your cryptocurency portfolio.</p>
 
            <p>A PWA is like a normal application from the app store, but you can access it directly through the web. You may also add this page to your home screen to launch it like your other applications.</p>
 
            <p>No account required, just hit the button below to start tracking your coins in whatever currency you wish!</p>
 
            <stencil-route-link url='/add-holding'><ion-button color="primary">Add Coins</ion-button></stencil-route-link>
 
          </div>
        ) : (
          null
        )}
      </div>
    );
 
  }
 
  render() {
 
    return (
      <ion-page>
 
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>
              cryptoPWA
            </ion-title>
          </ion-toolbar>
        </ion-header>
 
        <ion-content>
 
          {this.renderWelcomeMessage()}
 
          <ion-list no-lines>
 
            {this.holdings.map((holding) =>
 
                <ion-item-sliding>
 
                  <ion-item class="holding">
                    <p><strong>{holding.crypto}/{holding.currency}</strong></p>
                    <p class="amount"><strong>Coins:</strong> {holding.amount} <strong>Value:</strong> {holding.value}</p>
                    <p class="value">{holding.amount * holding.value}</p>
                  </ion-item>
 
                  <ion-item-options>
                    <ion-button class="delete-button" icon-only color="danger"><ion-icon name="trash"></ion-icon></ion-button>
                  </ion-item-options>
 
                </ion-item-sliding>
 
            )}
 
          </ion-list>
 
        </ion-content>
 
        <ion-footer>
 
          <p><strong>Disclaimer:</strong> Do not use this application to make investment decisions. Displayed prices may not reflect actual prices.</p>
 
        </ion-footer>
 
      </ion-page>
    );
  }
 
}