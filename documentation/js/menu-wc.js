'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">project-bachelor-software documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e1a19f7f09b337c21dc9fbd7a3a2a87e493001aae7bc168d9ab3e3122f59af0c1553c1a6ab5e7c302624968ac889eb4d53997aed57d4120491fe5b7356ee7914"' : 'data-target="#xs-components-links-module-AppModule-e1a19f7f09b337c21dc9fbd7a3a2a87e493001aae7bc168d9ab3e3122f59af0c1553c1a6ab5e7c302624968ac889eb4d53997aed57d4120491fe5b7356ee7914"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e1a19f7f09b337c21dc9fbd7a3a2a87e493001aae7bc168d9ab3e3122f59af0c1553c1a6ab5e7c302624968ac889eb4d53997aed57d4120491fe5b7356ee7914"' :
                                            'id="xs-components-links-module-AppModule-e1a19f7f09b337c21dc9fbd7a3a2a87e493001aae7bc168d9ab3e3122f59af0c1553c1a6ab5e7c302624968ac889eb4d53997aed57d4120491fe5b7356ee7914"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BooleDetailModule.html" data-type="entity-link" >BooleDetailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BooleDetailModule-0027dfba6368ece454cbb3568b4eac72f93bc72e04abb9447e4e6327c894973a0ef4ef1836e771acb7e4f84342298094f92431bc580131b177c0903c0aff9124"' : 'data-target="#xs-components-links-module-BooleDetailModule-0027dfba6368ece454cbb3568b4eac72f93bc72e04abb9447e4e6327c894973a0ef4ef1836e771acb7e4f84342298094f92431bc580131b177c0903c0aff9124"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BooleDetailModule-0027dfba6368ece454cbb3568b4eac72f93bc72e04abb9447e4e6327c894973a0ef4ef1836e771acb7e4f84342298094f92431bc580131b177c0903c0aff9124"' :
                                            'id="xs-components-links-module-BooleDetailModule-0027dfba6368ece454cbb3568b4eac72f93bc72e04abb9447e4e6327c894973a0ef4ef1836e771acb7e4f84342298094f92431bc580131b177c0903c0aff9124"' }>
                                            <li class="link">
                                                <a href="components/BooleDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooleDetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BooleDetailRoutingModule.html" data-type="entity-link" >BooleDetailRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BooleInfoModule.html" data-type="entity-link" >BooleInfoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BooleInfoModule-3c47ffcb2a24a8f100933163f341987576577e478ac0f0c29e5411cb9c2ba2770be7f9e17d9d900698ae963f564392451fbd626cad18526bc4b62ba60ac69c8c"' : 'data-target="#xs-components-links-module-BooleInfoModule-3c47ffcb2a24a8f100933163f341987576577e478ac0f0c29e5411cb9c2ba2770be7f9e17d9d900698ae963f564392451fbd626cad18526bc4b62ba60ac69c8c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BooleInfoModule-3c47ffcb2a24a8f100933163f341987576577e478ac0f0c29e5411cb9c2ba2770be7f9e17d9d900698ae963f564392451fbd626cad18526bc4b62ba60ac69c8c"' :
                                            'id="xs-components-links-module-BooleInfoModule-3c47ffcb2a24a8f100933163f341987576577e478ac0f0c29e5411cb9c2ba2770be7f9e17d9d900698ae963f564392451fbd626cad18526bc4b62ba60ac69c8c"' }>
                                            <li class="link">
                                                <a href="components/BooleInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooleInfoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CalculatorErrorHandlerModule.html" data-type="entity-link" >CalculatorErrorHandlerModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CalculatorModule.html" data-type="entity-link" >CalculatorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CalculatorModule-95da3ecf462c1262e643b6c461caf4b58e68269db9d03b0562ea6037700921787e4c5d16042d3dda1e342e49155e15f56dfd38a720b0edae5bcd8df93f72d97a"' : 'data-target="#xs-components-links-module-CalculatorModule-95da3ecf462c1262e643b6c461caf4b58e68269db9d03b0562ea6037700921787e4c5d16042d3dda1e342e49155e15f56dfd38a720b0edae5bcd8df93f72d97a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CalculatorModule-95da3ecf462c1262e643b6c461caf4b58e68269db9d03b0562ea6037700921787e4c5d16042d3dda1e342e49155e15f56dfd38a720b0edae5bcd8df93f72d97a"' :
                                            'id="xs-components-links-module-CalculatorModule-95da3ecf462c1262e643b6c461caf4b58e68269db9d03b0562ea6037700921787e4c5d16042d3dda1e342e49155e15f56dfd38a720b0edae5bcd8df93f72d97a"' }>
                                            <li class="link">
                                                <a href="components/CalculatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalculatorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FooterModule.html" data-type="entity-link" >FooterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FooterModule-27dd4f627b95022358d5977e352d3e5c5535515b4cc92a833c1353ecd811ee17c7f5f4e8a65144bca667b07affb3ae4d61362882164d854fae624a4cb45d5911"' : 'data-target="#xs-components-links-module-FooterModule-27dd4f627b95022358d5977e352d3e5c5535515b4cc92a833c1353ecd811ee17c7f5f4e8a65144bca667b07affb3ae4d61362882164d854fae624a4cb45d5911"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FooterModule-27dd4f627b95022358d5977e352d3e5c5535515b4cc92a833c1353ecd811ee17c7f5f4e8a65144bca667b07affb3ae4d61362882164d854fae624a4cb45d5911"' :
                                            'id="xs-components-links-module-FooterModule-27dd4f627b95022358d5977e352d3e5c5535515b4cc92a833c1353ecd811ee17c7f5f4e8a65144bca667b07affb3ae4d61362882164d854fae624a4cb45d5911"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderModule.html" data-type="entity-link" >HeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeaderModule-c9ac20a80025d1793a19e881b2c8cc6f1cb697b68b31797435be27927d3b15d3fe8567dde8afc876b4de58cb431bbed763aa5f33fd61e0916b36ccf878927d33"' : 'data-target="#xs-components-links-module-HeaderModule-c9ac20a80025d1793a19e881b2c8cc6f1cb697b68b31797435be27927d3b15d3fe8567dde8afc876b4de58cb431bbed763aa5f33fd61e0916b36ccf878927d33"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderModule-c9ac20a80025d1793a19e881b2c8cc6f1cb697b68b31797435be27927d3b15d3fe8567dde8afc876b4de58cb431bbed763aa5f33fd61e0916b36ccf878927d33"' :
                                            'id="xs-components-links-module-HeaderModule-c9ac20a80025d1793a19e881b2c8cc6f1cb697b68b31797435be27927d3b15d3fe8567dde8afc876b4de58cb431bbed763aa5f33fd61e0916b36ccf878927d33"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-66f4fcc16a2175100914546d9fd88a0aea86a79258f9b094095c9da32c849951c15e371140cd2926727158563a89e66966efd817abebef062d72eb463ec73c87"' : 'data-target="#xs-components-links-module-HomeModule-66f4fcc16a2175100914546d9fd88a0aea86a79258f9b094095c9da32c849951c15e371140cd2926727158563a89e66966efd817abebef062d72eb463ec73c87"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-66f4fcc16a2175100914546d9fd88a0aea86a79258f9b094095c9da32c849951c15e371140cd2926727158563a89e66966efd817abebef062d72eb463ec73c87"' :
                                            'id="xs-components-links-module-HomeModule-66f4fcc16a2175100914546d9fd88a0aea86a79258f9b094095c9da32c849951c15e371140cd2926727158563a89e66966efd817abebef062d72eb463ec73c87"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PropositionDetailModule.html" data-type="entity-link" >PropositionDetailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PropositionDetailModule-9dd0ed9d26e257e42d09d0964bbfad1b6271a5c7198dd4f4abfff86dca35258e4b26745deb064983730adbb2f6c7f1fe90a5be96829c57c555f2422a18715083"' : 'data-target="#xs-components-links-module-PropositionDetailModule-9dd0ed9d26e257e42d09d0964bbfad1b6271a5c7198dd4f4abfff86dca35258e4b26745deb064983730adbb2f6c7f1fe90a5be96829c57c555f2422a18715083"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PropositionDetailModule-9dd0ed9d26e257e42d09d0964bbfad1b6271a5c7198dd4f4abfff86dca35258e4b26745deb064983730adbb2f6c7f1fe90a5be96829c57c555f2422a18715083"' :
                                            'id="xs-components-links-module-PropositionDetailModule-9dd0ed9d26e257e42d09d0964bbfad1b6271a5c7198dd4f4abfff86dca35258e4b26745deb064983730adbb2f6c7f1fe90a5be96829c57c555f2422a18715083"' }>
                                            <li class="link">
                                                <a href="components/PropositionDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PropositionDetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PropositionDetailRoutingModule.html" data-type="entity-link" >PropositionDetailRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PropositionInfoModule.html" data-type="entity-link" >PropositionInfoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PropositionInfoModule-5f99992041d9870000664318b93fba9d46f99d1f6f135868fac35c0e093288b5babbabe734eceb05a3c90cc9e2653954e557ac70a3a6d85f39b4a3c50442771f"' : 'data-target="#xs-components-links-module-PropositionInfoModule-5f99992041d9870000664318b93fba9d46f99d1f6f135868fac35c0e093288b5babbabe734eceb05a3c90cc9e2653954e557ac70a3a6d85f39b4a3c50442771f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PropositionInfoModule-5f99992041d9870000664318b93fba9d46f99d1f6f135868fac35c0e093288b5babbabe734eceb05a3c90cc9e2653954e557ac70a3a6d85f39b4a3c50442771f"' :
                                            'id="xs-components-links-module-PropositionInfoModule-5f99992041d9870000664318b93fba9d46f99d1f6f135868fac35c0e093288b5babbabe734eceb05a3c90cc9e2653954e557ac70a3a6d85f39b4a3c50442771f"' }>
                                            <li class="link">
                                                <a href="components/PropositionInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PropositionInfoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResultModule.html" data-type="entity-link" >ResultModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResultModule-e356eafc95b4c0edab15860bbf63badf79bd5dafada8c4a71f3e6cbdef35d085b44a1b8d8af7cba59fc67684c65adb75d4f1b9b10b8205eef3fc8b1991a4c7b8"' : 'data-target="#xs-components-links-module-ResultModule-e356eafc95b4c0edab15860bbf63badf79bd5dafada8c4a71f3e6cbdef35d085b44a1b8d8af7cba59fc67684c65adb75d4f1b9b10b8205eef3fc8b1991a4c7b8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResultModule-e356eafc95b4c0edab15860bbf63badf79bd5dafada8c4a71f3e6cbdef35d085b44a1b8d8af7cba59fc67684c65adb75d4f1b9b10b8205eef3fc8b1991a4c7b8"' :
                                            'id="xs-components-links-module-ResultModule-e356eafc95b4c0edab15860bbf63badf79bd5dafada8c4a71f3e6cbdef35d085b44a1b8d8af7cba59fc67684c65adb75d4f1b9b10b8205eef3fc8b1991a4c7b8"' }>
                                            <li class="link">
                                                <a href="components/ResultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResultComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResultRoutingModule.html" data-type="entity-link" >ResultRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TableModule.html" data-type="entity-link" >TableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TableModule-6b117b7a5edd641b004b8acfdf960a51e6949debbe8d152cb05808c7bdff2297a73279fa6d48dae7ad047c194e3fe98889e814b51b0e27c733340513971b6a4f"' : 'data-target="#xs-components-links-module-TableModule-6b117b7a5edd641b004b8acfdf960a51e6949debbe8d152cb05808c7bdff2297a73279fa6d48dae7ad047c194e3fe98889e814b51b0e27c733340513971b6a4f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TableModule-6b117b7a5edd641b004b8acfdf960a51e6949debbe8d152cb05808c7bdff2297a73279fa6d48dae7ad047c194e3fe98889e814b51b0e27c733340513971b6a4f"' :
                                            'id="xs-components-links-module-TableModule-6b117b7a5edd641b004b8acfdf960a51e6949debbe8d152cb05808c7bdff2297a73279fa6d48dae7ad047c194e3fe98889e814b51b0e27c733340513971b6a4f"' }>
                                            <li class="link">
                                                <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CalculatorErrorHandler.html" data-type="entity-link" >CalculatorErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CalculatorService.html" data-type="entity-link" >CalculatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConversionService.html" data-type="entity-link" >ConversionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LanguageService.html" data-type="entity-link" >LanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavigationService.html" data-type="entity-link" >NavigationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilService.html" data-type="entity-link" >UtilService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});