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
                    <a href="index.html" data-type="index-link">teamxgroup-projects documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-93c7812b6313b1af1b560b7705d08fd774f525b375374d3ceb19c196eebea6a488c081a2d05dc0d39654b1ffe44650a977fcdb769f8f3efc5ec1b02789aa4a61"' : 'data-bs-target="#xs-injectables-links-module-AppModule-93c7812b6313b1af1b560b7705d08fd774f525b375374d3ceb19c196eebea6a488c081a2d05dc0d39654b1ffe44650a977fcdb769f8f3efc5ec1b02789aa4a61"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-93c7812b6313b1af1b560b7705d08fd774f525b375374d3ceb19c196eebea6a488c081a2d05dc0d39654b1ffe44650a977fcdb769f8f3efc5ec1b02789aa4a61"' :
                                        'id="xs-injectables-links-module-AppModule-93c7812b6313b1af1b560b7705d08fd774f525b375374d3ceb19c196eebea6a488c081a2d05dc0d39654b1ffe44650a977fcdb769f8f3efc5ec1b02789aa4a61"' }>
                                        <li class="link">
                                            <a href="injectables/CloudinaryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CloudinaryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UploadService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabaseModule-dfa01b228819ef75e547a97786d48dc7f7a27a2862b6ae65027b07e70ab7fac1be1b51e2711a0296bf7a1a5c33063e77637b11576f7f416cdbf0cf5955d6b47c"' : 'data-bs-target="#xs-injectables-links-module-DatabaseModule-dfa01b228819ef75e547a97786d48dc7f7a27a2862b6ae65027b07e70ab7fac1be1b51e2711a0296bf7a1a5c33063e77637b11576f7f416cdbf0cf5955d6b47c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-dfa01b228819ef75e547a97786d48dc7f7a27a2862b6ae65027b07e70ab7fac1be1b51e2711a0296bf7a1a5c33063e77637b11576f7f416cdbf0cf5955d6b47c"' :
                                        'id="xs-injectables-links-module-DatabaseModule-dfa01b228819ef75e547a97786d48dc7f7a27a2862b6ae65027b07e70ab7fac1be1b51e2711a0296bf7a1a5c33063e77637b11576f7f416cdbf0cf5955d6b47c"' }>
                                        <li class="link">
                                            <a href="injectables/DatabaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MongoConfig.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MongoConfig</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductModule-78616072f99a36c14de6a9afa1533ba2c9fc6f2b43525cc89a19181ee406af43a7645c3b89217dcefa1c08b6594bbc7e69717872ee0b61db5e802c3704a6930f"' : 'data-bs-target="#xs-controllers-links-module-ProductModule-78616072f99a36c14de6a9afa1533ba2c9fc6f2b43525cc89a19181ee406af43a7645c3b89217dcefa1c08b6594bbc7e69717872ee0b61db5e802c3704a6930f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-78616072f99a36c14de6a9afa1533ba2c9fc6f2b43525cc89a19181ee406af43a7645c3b89217dcefa1c08b6594bbc7e69717872ee0b61db5e802c3704a6930f"' :
                                            'id="xs-controllers-links-module-ProductModule-78616072f99a36c14de6a9afa1533ba2c9fc6f2b43525cc89a19181ee406af43a7645c3b89217dcefa1c08b6594bbc7e69717872ee0b61db5e802c3704a6930f"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductModule-78616072f99a36c14de6a9afa1533ba2c9fc6f2b43525cc89a19181ee406af43a7645c3b89217dcefa1c08b6594bbc7e69717872ee0b61db5e802c3704a6930f"' : 'data-bs-target="#xs-injectables-links-module-ProductModule-78616072f99a36c14de6a9afa1533ba2c9fc6f2b43525cc89a19181ee406af43a7645c3b89217dcefa1c08b6594bbc7e69717872ee0b61db5e802c3704a6930f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-78616072f99a36c14de6a9afa1533ba2c9fc6f2b43525cc89a19181ee406af43a7645c3b89217dcefa1c08b6594bbc7e69717872ee0b61db5e802c3704a6930f"' :
                                        'id="xs-injectables-links-module-ProductModule-78616072f99a36c14de6a9afa1533ba2c9fc6f2b43525cc89a19181ee406af43a7645c3b89217dcefa1c08b6594bbc7e69717872ee0b61db5e802c3704a6930f"' }>
                                        <li class="link">
                                            <a href="injectables/ExceptionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExceptionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResponseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResponseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UploadModule.html" data-type="entity-link" >UploadModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-770de6363cb57072e84c9e285cd89c72d29d363506cc40dd6d7419ab1c1c8bbc5fa7ed125f1fee76b4c1a8ea54f48f42dd873624c19b91a856741a9fbbe8c1c8"' : 'data-bs-target="#xs-controllers-links-module-UserModule-770de6363cb57072e84c9e285cd89c72d29d363506cc40dd6d7419ab1c1c8bbc5fa7ed125f1fee76b4c1a8ea54f48f42dd873624c19b91a856741a9fbbe8c1c8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-770de6363cb57072e84c9e285cd89c72d29d363506cc40dd6d7419ab1c1c8bbc5fa7ed125f1fee76b4c1a8ea54f48f42dd873624c19b91a856741a9fbbe8c1c8"' :
                                            'id="xs-controllers-links-module-UserModule-770de6363cb57072e84c9e285cd89c72d29d363506cc40dd6d7419ab1c1c8bbc5fa7ed125f1fee76b4c1a8ea54f48f42dd873624c19b91a856741a9fbbe8c1c8"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-770de6363cb57072e84c9e285cd89c72d29d363506cc40dd6d7419ab1c1c8bbc5fa7ed125f1fee76b4c1a8ea54f48f42dd873624c19b91a856741a9fbbe8c1c8"' : 'data-bs-target="#xs-injectables-links-module-UserModule-770de6363cb57072e84c9e285cd89c72d29d363506cc40dd6d7419ab1c1c8bbc5fa7ed125f1fee76b4c1a8ea54f48f42dd873624c19b91a856741a9fbbe8c1c8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-770de6363cb57072e84c9e285cd89c72d29d363506cc40dd6d7419ab1c1c8bbc5fa7ed125f1fee76b4c1a8ea54f48f42dd873624c19b91a856741a9fbbe8c1c8"' :
                                        'id="xs-injectables-links-module-UserModule-770de6363cb57072e84c9e285cd89c72d29d363506cc40dd6d7419ab1c1c8bbc5fa7ed125f1fee76b4c1a8ea54f48f42dd873624c19b91a856741a9fbbe8c1c8"' }>
                                        <li class="link">
                                            <a href="injectables/ExceptionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExceptionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResponseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResponseService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ValidationModule.html" data-type="entity-link" >ValidationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ValidationModule-42e043581ce5cdcb4f6db80cb65dc25d0705c6f1842a666dab5136a0bc279988eed12cff7ca879f285ab43f8e0635ad850ce54a82fb62df8ac0de01c49c43d9d"' : 'data-bs-target="#xs-injectables-links-module-ValidationModule-42e043581ce5cdcb4f6db80cb65dc25d0705c6f1842a666dab5136a0bc279988eed12cff7ca879f285ab43f8e0635ad850ce54a82fb62df8ac0de01c49c43d9d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ValidationModule-42e043581ce5cdcb4f6db80cb65dc25d0705c6f1842a666dab5136a0bc279988eed12cff7ca879f285ab43f8e0635ad850ce54a82fb62df8ac0de01c49c43d9d"' :
                                        'id="xs-injectables-links-module-ValidationModule-42e043581ce5cdcb4f6db80cb65dc25d0705c6f1842a666dab5136a0bc279988eed12cff7ca879f285ab43f8e0635ad850ce54a82fb62df8ac0de01c49c43d9d"' }>
                                        <li class="link">
                                            <a href="injectables/ExceptionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExceptionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResponseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResponseService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ValidationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BaseController.html" data-type="entity-link" >BaseController</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseEntity.html" data-type="entity-link" >BaseEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindProductDto.html" data-type="entity-link" >FindProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindUserDto.html" data-type="entity-link" >FindUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationDto.html" data-type="entity-link" >PaginationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseService.html" data-type="entity-link" >BaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MongoConnection.html" data-type="entity-link" >MongoConnection</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MongooseRepository.html" data-type="entity-link" >MongooseRepository</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DatabaseConfig.html" data-type="entity-link" >DatabaseConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseConnection.html" data-type="entity-link" >DatabaseConnection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileStorageService.html" data-type="entity-link" >FileStorageService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileUploadResult.html" data-type="entity-link" >FileUploadResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBaseRepository.html" data-type="entity-link" >IBaseRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationParams.html" data-type="entity-link" >PaginationParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});