webpackJsonp([1],{"9M+g":function(e,t){},CKCB:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-bottom":"20px"}},[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[a("b-navbar-brand",{attrs:{href:"#"}},[e._v("Roadmountain")]),e._v(" "),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e._v(" "),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"#"}},[e._v(e._s(e.$t("nav.title")))])],1),e._v(" "),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{attrs:{text:e.$t("nav.language"),right:""}},e._l(e.options,function(t){return a("b-dropdown-item",{key:t.value,on:{click:function(a){return e.changeLanguage(t.value)}}},[e._v("\n            "+e._s(t.text)+"\n          ")])}),1)],1)],1)],1)],1)},staticRenderFns:[]},i={name:"Footer",data:function(){return{year:(new Date).getFullYear()}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("footer",{staticClass:"my-5 pt-5 text-muted text-center text-small"},[t("p",{staticClass:"mb-1"},[this._v("© 2018-"+this._s(this.year)+" Roadmountain")]),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"list-inline"},[t("li",{staticClass:"list-inline-item"},[t("a",{attrs:{href:"/static/private_policy.pdf"}},[this._v("Privacy")])]),this._v(" "),t("li",{staticClass:"list-inline-item"},[t("a",{attrs:{href:"#"}},[this._v("Terms")])]),this._v(" "),t("li",{staticClass:"list-inline-item"},[t("a",{attrs:{href:"#"}},[this._v("Support")])])])}]},o={name:"App",components:{Navbar:a("VU/8")({name:"Navbar",data:function(){return{options:[{value:"ja",text:"日本語"},{value:"en",text:"English"}],selected:"jp"}},methods:{changeLanguage:function(e){this.$i18n.locale=e}}},r,!1,null,null,null).exports,Footer:a("VU/8")(i,l,!1,null,null,null).exports}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("router-view"),this._v(" "),t("Footer")],1)},staticRenderFns:[]};var d=a("VU/8")(o,n,!1,function(e){a("UBQt")},null,null).exports,m=a("/ocq"),c=a("+cKO"),p=a("ESwS"),u=a.n(p),f={mixins:[p.validationMixin],data:function(){return{form:{suffix:"MR",firstName:"",middleName:"",lastName:"",simNo:"",passportNo:"",passportExpiry:"",passportCountry:"JP",address:"",dateOfBirth:"",email:"",brand:"Optus",plan:"40"},suffixes:["MR","MRS","MISS"],countries:{JP:"Japan"},show:!0,read:!0,accepted:!1}},created:function(){this.getCountries()},validations:{form:{suffix:{required:c.required},firstName:{required:c.required,alpha:c.alpha},middleName:{alpha:c.alpha},lastName:{required:c.required,alpha:c.alpha},simNo:{required:c.required,numeric:c.numeric,minLength:Object(c.minLength)(13),maxLength:Object(c.maxLength)(13)},passportNo:{required:c.required,alphaNum:c.alphaNum},passportExpiry:{required:c.required},passportCountry:{required:c.required},address:{required:c.required},dateOfBirth:{required:c.required},email:{email:c.email,required:c.required},brand:{required:c.required},plan:{required:c.required}}},methods:{getCountries:function(){var e=this;this.axios.get("/countries").then(function(t){e.countries=t.data})},validateState:function(e){var t=this.$v.form[e],a=t.$dirty,s=t.$error;return a?!s:null},showModal:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.$refs["modal-check"].show()},onSubmit:function(e){var t=this;e.preventDefault(),this.axios.post("/registers",this.form).then(function(e){t.resetForm(),t.$refs["modal-check"].hide(),t.makeToast("success",t.$t("register.successfulMessage"))}).catch(function(e){t.makeToast("danger",t.$t("register.errorMessage"))})},makeToast:function(e,t){this.$bvToast.toast(t,{noAutoHide:!0,variant:e})},resetForm:function(){var e=this;this.$v.form.$reset(),this.form.suffix="MR",this.form.firstName="",this.form.middleName="",this.form.lastName="",this.form.simNo="",this.form.passportNo="",this.form.passportExpiry="",this.form.passportCountry="JP",this.form.address="",this.form.dateOfBirth="",this.form.email="",this.form.brand="Optus",this.form.plan="40",this.accepted=!1,this.show=!1,this.$nextTick(function(){e.show=!0})},onReset:function(e){e.preventDefault(),this.resetForm()}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("b-modal",{ref:"modal-check",attrs:{scrollable:"",size:"sm",title:e.$t("register.modalTitle")},on:{ok:e.onSubmit}},[a("p",[e._v(e._s(e.$t("register.brand"))+" : "+e._s(e.form.brand))]),e._v(" "),a("p",[e._v(e._s(e.$t("register.plan"))+" : "+e._s(e.form.plan))]),e._v(" "),a("p",[e._v(e._s(e.$t("register.simNo"))+" : "+e._s(e.form.simNo))]),e._v(" "),a("p",[e._v(e._s(e.$t("register.suffix"))+" : "+e._s(e.form.suffix))]),e._v(" "),a("p",[e._v(e._s(e.$t("register.firstName"))+" : "+e._s(e.form.firstName))]),e._v(" "),a("p",[e._v(e._s(e.$t("register.middleName"))+" : "+e._s(e.form.middleName))]),e._v(" "),a("p",[e._v(e._s(e.$t("register.lastName"))+" : "+e._s(e.form.lastName))]),e._v(" "),a("p",[e._v(e._s(e.$t("register.birthday"))+" : "+e._s(e.form.dateOfBirth))]),e._v(" "),a("p",[e._v(e._s(e.$t("register.passportNo"))+" : "+e._s(e.form.passportNo))]),e._v(" "),a("p",[e._v(e._s(e.$t("register.passportExpiry"))+" : "+e._s(e.form.passportExpiry))]),e._v(" "),a("p",[e._v(e._s(e.$t("register.passportCountry"))+" : "+e._s(e.countries[e.form.passportCountry]))]),e._v(" "),a("p",[e._v(e._s(e.$t("register.address"))+" : "+e._s(e.form.address))]),e._v(" "),a("p",[e._v(e._s(e.$t("register.email"))+" : "+e._s(e.form.email))]),e._v(" "),a("p",{domProps:{innerHTML:e._s(e.$t("register.modalContent"))}})]),e._v(" "),a("div",{staticClass:"py-5 text-center"},[a("img",{staticClass:"d-block mx-auto mb-4",attrs:{src:"/static/favicon.ico",alt:"",width:"72",height:"72"}}),e._v(" "),a("h3",[e._v(e._s(e.$t("register.title")))]),e._v(" "),a("p",{staticClass:"lead",staticStyle:{"font-size":"0.9rem","text-align":"left"},domProps:{innerHTML:e._s(e.$t("register.pageInstruction"))}})]),e._v(" "),e.show?a("b-form",{ref:"form",attrs:{id:"form"},on:{reset:e.onReset}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 order-md-2 mb-4"},[a("h4",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[a("span",{staticClass:"text-muted"},[e._v(e._s(e.$t("register.brandAndPlan")))])]),e._v(" "),a("ul",{staticClass:"list-group mb-3"},[a("li",{staticClass:"list-group-item d-flex justify-content-between bg-light"},[a("div",{staticClass:"text-success"},[a("h6",{staticClass:"my-0"},[e._v("Optus")])]),e._v(" "),a("span",{staticClass:"text-success"},[e._v("$40")])])])]),e._v(" "),a("div",{staticClass:"col-md-8 order-md-1"},[a("h4",{staticClass:"mb-3"},[e._v(e._s(e.$t("register.simCardInfo")))]),e._v(" "),a("div",{staticClass:"mb-3"},[a("b-button",{staticStyle:{width:"17px",height:"17px","vertical-align":"text-top",padding:"0px","font-size":"0.8em","font-weight":"bold"},attrs:{id:"tooltip-sim",pill:"",variant:"success"}},[e._v("?")]),e._v(" "),a("b-tooltip",{attrs:{target:"tooltip-sim",title:e.$t("register.simNoTooltip")}}),e._v(" "),a("label",{attrs:{for:"input-sim-num"}},[e._v(e._s(e.$t("register.simNo")))]),e._v(" "),a("b-form-input",{attrs:{id:"input-sim-num",placeholder:e.$t("register.simNoPlaceHolder"),state:e.validateState("simNo"),"aria-describedby":"input-sim-num-feedback"},model:{value:e.$v.form.simNo.$model,callback:function(t){e.$set(e.$v.form.simNo,"$model",t)},expression:"$v.form.simNo.$model"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"input-sim-num-feedback"}},[e._v("\n            "+e._s(e.$t("register.simNoInvalidFeedback"))+"\n          ")])],1),e._v(" "),a("hr",{staticClass:"mb-4"}),e._v(" "),a("h4",{staticClass:"mb-3"},[e._v(e._s(e.$t("register.customerInfo")))]),e._v(" "),a("div",{staticClass:"mb-3"},[a("b-button",{staticStyle:{width:"17px",height:"17px","vertical-align":"text-top",padding:"0px","font-size":"0.8em","font-weight":"bold"},attrs:{id:"tooltip-suffix",pill:"",variant:"success"}},[e._v("?")]),e._v(" "),a("b-tooltip",{attrs:{target:"tooltip-suffix"}},[a("span",{domProps:{innerHTML:e._s(e.$t("register.suffixTooltip"))}})]),e._v(" "),a("label",{attrs:{for:"input-suffix"}},[e._v(e._s(e.$t("register.suffix")))]),e._v(" "),a("b-form-select",{attrs:{id:"input-suffix",options:e.suffixes,state:e.validateState("suffix")},model:{value:e.$v.form.suffix.$model,callback:function(t){e.$set(e.$v.form.suffix,"$model",t)},expression:"$v.form.suffix.$model"}})],1),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 mb-3"},[a("label",{attrs:{for:"input-firstname"}},[e._v(e._s(e.$t("register.firstName")))]),e._v(" "),a("b-form-input",{attrs:{id:"input-firstname",placeholder:e.$t("register.firstNamePlaceHolder"),state:e.validateState("firstName"),"aria-describedby":"input-firstname-feedback"},model:{value:e.$v.form.firstName.$model,callback:function(t){e.$set(e.$v.form.firstName,"$model",t)},expression:"$v.form.firstName.$model"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"input-firstname-feedback"}},[e._v("\n              "+e._s(e.$t("register.firstNameInvalidFeedback"))+"\n            ")])],1),e._v(" "),a("div",{staticClass:"col-md-4 mb-3"},[a("label",{staticStyle:{"font-size":"0.9rem"},attrs:{for:"input-middlename"}},[e._v("\n              "+e._s(e.$t("register.middleName"))+"\n              "),a("small",{staticClass:"text-muted",staticStyle:{"font-size":"0.5rem"}},[e._v("\n                ("+e._s(e.$t("register.optional"))+")\n              ")])]),e._v(" "),a("b-form-input",{attrs:{id:"input-middlename",placeholder:e.$t("register.middleNamePlaceHolder"),state:e.validateState("middleName"),"aria-describedby":"input-middlename-feedback"},model:{value:e.$v.form.middleName.$model,callback:function(t){e.$set(e.$v.form.middleName,"$model",t)},expression:"$v.form.middleName.$model"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"input-middlename-feedback"}},[e._v("\n              "+e._s(e.$t("register.middleNameInvalidFeedback"))+"\n            ")])],1),e._v(" "),a("div",{staticClass:"col-md-4 mb-3"},[a("label",{attrs:{for:"input-lastname"}},[e._v(e._s(e.$t("register.lastName")))]),e._v(" "),a("b-form-input",{attrs:{id:"input-lastname",placeholder:e.$t("register.lastNamePlaceHolder"),state:e.validateState("lastName"),"aria-describedby":"input-lastname-feedback"},model:{value:e.$v.form.lastName.$model,callback:function(t){e.$set(e.$v.form.lastName,"$model",t)},expression:"$v.form.lastName.$model"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"input-lastname-feedback"}},[e._v("\n              "+e._s(e.$t("register.lastNameInvalidFeedback"))+"\n            ")])],1)]),e._v(" "),a("div",{staticClass:"mb-3"},[a("label",{attrs:{for:"input-birthday"}},[e._v(e._s(e.$t("register.birthday")))]),e._v(" "),a("b-form-input",{attrs:{id:"input-birthday",type:"date",state:e.validateState("dateOfBirth"),"aria-describedby":"input-birthday-feedback"},model:{value:e.$v.form.dateOfBirth.$model,callback:function(t){e.$set(e.$v.form.dateOfBirth,"$model",t)},expression:"$v.form.dateOfBirth.$model"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"input-birthday-feedback"}},[e._v("\n            "+e._s(e.$t("register.birthdayInvalidFeedback"))+"\n          ")])],1),e._v(" "),a("div",{staticClass:"mb-3"},[a("label",{attrs:{for:"input-passport-num"}},[e._v(e._s(e.$t("register.passportNo")))]),e._v(" "),a("b-form-input",{attrs:{id:"input-passport-num",placeholder:e.$t("register.passportNoPlaceHolder"),state:e.validateState("passportNo"),"aria-describedby":"input-passport-num-feedback"},model:{value:e.$v.form.passportNo.$model,callback:function(t){e.$set(e.$v.form.passportNo,"$model",t)},expression:"$v.form.passportNo.$model"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"input-passport-num-feedback"}},[e._v("\n            "+e._s(e.$t("register.passportNoInvalidFeedback"))+"\n          ")])],1),e._v(" "),a("div",{staticClass:"mb-3"},[a("label",{attrs:{for:"input-expiry"}},[e._v(e._s(e.$t("register.passportExpiry")))]),e._v(" "),a("b-form-input",{attrs:{id:"input-expiry",type:"date",state:e.validateState("passportExpiry"),"aria-describedby":"input-expiry-feedback"},model:{value:e.$v.form.passportExpiry.$model,callback:function(t){e.$set(e.$v.form.passportExpiry,"$model",t)},expression:"$v.form.passportExpiry.$model"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"input-expiry-feedback"}},[e._v("\n            "+e._s(e.$t("register.passportExpiryInvalidFeedback"))+"\n          ")])],1),e._v(" "),a("div",{staticClass:"mb-3"},[a("label",{attrs:{for:"input-country"}},[e._v(e._s(e.$t("register.passportCountry")))]),e._v(" "),a("b-form-select",{attrs:{id:"input-country",state:e.validateState("passportCountry"),"aria-describedby":"input-country-feedback"},model:{value:e.$v.form.passportCountry.$model,callback:function(t){e.$set(e.$v.form.passportCountry,"$model",t)},expression:"$v.form.passportCountry.$model"}},e._l(e.countries,function(t,s){return a("b-form-select-option",{key:s,attrs:{value:s}},[e._v("\n              "+e._s(t)+"\n            ")])}),1),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"input-country-feedback"}},[e._v("\n            "+e._s(e.$t("register.passportCountryInvalidFeedback"))+"\n          ")])],1),e._v(" "),a("hr",{staticClass:"mb-4"}),e._v(" "),a("h4",{staticClass:"mb-3"},[e._v(e._s(e.$t("register.contactInfo")))]),e._v(" "),a("div",{staticClass:"mb-3"},[a("label",{attrs:{for:"input-address"}},[e._v(e._s(e.$t("register.address")))]),e._v(" "),a("b-form-input",{attrs:{id:"input-address",placeholder:e.$t("register.addressPlaceHolder"),state:e.validateState("address"),"aria-describedby":"input-address-feedback"},model:{value:e.$v.form.address.$model,callback:function(t){e.$set(e.$v.form.address,"$model",t)},expression:"$v.form.address.$model"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"input-address-feedback"}},[e._v("\n            "+e._s(e.$t("register.addressInvalidFeedback"))+"\n          ")])],1),e._v(" "),a("div",{staticClass:"mb-3"},[a("label",{attrs:{for:"input-email"}},[e._v(e._s(e.$t("register.email")))]),e._v(" "),a("b-form-input",{attrs:{id:"input-email",type:"email",state:e.validateState("email"),placeholder:e.$t("register.emailPlaceHolder"),"aria-describedby":"input-email-feedback"},model:{value:e.$v.form.email.$model,callback:function(t){e.$set(e.$v.form.email,"$model",t)},expression:"$v.form.email.$model"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"input-email-feedback"}},[e._v("\n            "+e._s(e.$t("register.emailInvalidFeedback"))+"\n          ")])],1),e._v(" "),a("div",{attrs:{hidden:""}},[a("b-form-group",{attrs:{id:"input-group-13",label:e.$t("register.brand"),"label-for":"input-brand","label-cols-sm":"4","label-cols-lg":"3","label-align-sm":"right"}},[a("b-form-input",{attrs:{id:"input-brand",state:e.validateState("brand"),"aria-describedby":"input-brand-feedback",disabled:""},model:{value:e.$v.form.brand.$model,callback:function(t){e.$set(e.$v.form.brand,"$model",t)},expression:"$v.form.brand.$model"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"input-brand-feedback"}})],1),e._v(" "),a("b-form-group",{attrs:{id:"input-group-14",label:e.$t("register.plan"),"label-for":"input-plan","label-cols-sm":"4","label-cols-lg":"3","label-align-sm":"right"}},[a("b-form-input",{attrs:{id:"input-plan",state:e.validateState("plan"),"aria-describedby":"input-plan-feedback",disabled:""},model:{value:e.$v.form.plan.$model,callback:function(t){e.$set(e.$v.form.plan,"$model",t)},expression:"$v.form.plan.$model"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"input-plan-feedback"}})],1)],1),e._v(" "),a("b-form-checkbox",{attrs:{value:e.read,"unchecked-value":!e.read},model:{value:e.accepted,callback:function(t){e.accepted=t},expression:"accepted"}},[e._v("\n          "+e._s(e.$t("register.accept"))+"\n          "),a("a",{attrs:{href:"/static/private_policy.pdf",target:"_blank"}},[e._v("\n            "+e._s(e.$t("register.privatePolicy"))+"\n          ")])]),e._v(" "),a("hr",{staticClass:"mb-4"}),e._v(" "),a("b-button",{staticClass:"btn-block",attrs:{variant:"primary",disabled:!e.accepted},on:{click:e.showModal}},[e._v("\n          "+e._s(e.$t("register.submit"))+"\n        ")]),e._v(" "),a("b-button",{staticClass:"btn-block",attrs:{type:"reset",variant:"danger"}},[e._v("\n          "+e._s(e.$t("register.reset"))+"\n        ")])],1)])]):e._e()],1)},staticRenderFns:[]};var b=a("VU/8")(f,v,!1,function(e){a("CKCB")},null,null).exports;s.default.use(m.a);var _=new m.a({routes:[{path:"/",name:"HelloWorld",component:b}]}),$=a("TXmL");s.default.use($.a);var h=new $.a({locale:"ja",messages:{en:{register:{title:"Register SIM Card",simCardInfo:"SIM Card Information",pageInstruction:"According to Australian law, the traveller must offer name, passport number, address in Australia, etc to open SIM card. <br> The SIM card will be opened after 3 days of the registration date (excluding weekends and holidays in Australia).",brandAndPlan:"Brand and Plan",customerInfo:"Customer Information",contactInfo:"Contact Information",suffix:"Suffix",suffixTooltip:"MR: Male <br> MRS: Married Woman <br> MISS: Unmarried Woman",firstName:"First Name",firstNamePlaceHolder:"Enter first name.",firstNameInvalidFeedback:"First name is a required field and only accepts alphabet.",middleName:"Middle Name",optional:"Optional",middleNamePlaceHolder:"Enter middle name.",middleNameInvalidFeedback:"Middle name only accepts alphabet.",lastName:"Last Name",lastNamePlaceHolder:"Enter last name.",lastNameInvalidFeedback:"Last name is a required field only accepts alphabet.",simNo:"SIM No",simNoPlaceHolder:"Enter SIM card number.",simNoInvalidFeedback:"SIM card number is a required field and only accepts 13-digit numerics.",simNoTooltip:"A 13-digit SIM number is written on the back of the purchased card.",passportNo:"Passport No",passportNoPlaceHolder:"Enter passport number.",passportNoInvalidFeedback:"Passport number is a required field and only accepts alphanumerics.",passportExpiry:"Passport Expiry",passportExpiryInvalidFeedback:"Passport expiry is a required field.",passportCountry:"Passport Country",passportCountryInvalidFeedback:"Passport country is a required field.",address:"Address in Australia",addressPlaceHolder:"Enter address in Australia.",addressInvalidFeedback:"Address is a required field.",birthday:"Date of Birth",birthdayInvalidFeedback:"Date of birth is a required field.",email:"Email Address",emailPlaceHolder:"Enter email address.",emailInvalidFeedback:"Email address is a required field.",brand:"Brand",plan:"Plan($)",accept:"Accept",privatePolicy:"Private Policy",submit:"Submit",reset:"Reset",modalTitle:"Please check your information",modalContent:"If all of the information is correct, please click ok to submit.",successfulMessage:"Register successfully! We will send e-mail to you. If you don't receive the mail, please contact us.",errorMessage:"System error! Please contact us."},nav:{title:"Register SIM Card",language:"Language",languageJapanese:"Japanese",languageEnglish:"English"}},ja:{register:{title:"SIMカード開通専用ページ",simCardInfo:"SIMカード情報",pageInstruction:"オーストラリア当局の法律に基づき、渡航者の氏名、パスポート番号、住所等を以下の欄にご記入下さい。<br>また、カードの開通日は、登録日の3日後となります。(オーストラリアの土日祝日を除く)",brandAndPlan:"商品名と通信プラン",customerInfo:"渡航者情報",contactInfo:"連絡先",suffix:"敬称",suffixTooltip:"MR: 男性 <br> MRS: 既婚女性  <br> MISS: 未婚女性",firstName:"名前(名)",firstNamePlaceHolder:"名前(名)をご記入下さい。",firstNameInvalidFeedback:"名前(名)は必須項目で、半角英字のみでご記入下さい。",middleName:"ミドルネーム",middleNamePlaceHolder:"ミドルネームをご記入下さい。",middleNameInvalidFeedback:"ミドルネームは省略可能で、半角英字のみでご記入下さい。",optional:"省略可",lastName:"苗字(姓)",lastNamePlaceHolder:"苗字(姓)をご記入下さい。",lastNameInvalidFeedback:"苗字(姓)は必須項目で、半角英字のみでご記入下さい。",simNo:"SIMカードナンバー",simNoPlaceHolder:"SIMカードナンバーをご記入下さい。",simNoInvalidFeedback:"SIMカードナンバーは必須項目で、半角数字のみ13桁でご記入下さい。",simNoTooltip:"購入したカード裏面に13桁のSIMナンバーが記載されています。",passportNo:"旅券番号",passportNoPlaceHolder:"旅券番号をご記入下さい。",passportNoInvalidFeedback:"旅券番号は必須項目で、半角英数字のみでご記入下さい。",passportExpiry:"旅券有効期限",passportExpiryInvalidFeedback:"旅券有効期限は必須項目です。",passportCountry:"国籍",passportCountryInvalidFeedback:"国籍は必須項目です。",address:"オーストラリアの宿泊先",addressPlaceHolder:"オーストラリアの宿泊先は英語でご記入下さい。",addressInvalidFeedback:"オーストラリアの宿泊先は必須項目です。",birthday:"生年月日",birthdayInvalidFeedback:"生年月日は必須項目です。",email:"メールアドレス",emailPlaceHolder:"メールアドレスをご記入下さい。",emailInvalidFeedback:"メールアドレスをご記入下さい。",brand:"通信会社",plan:"プラン($)",accept:"同意する",privatePolicy:"プライバシーポリシー",submit:"送信",reset:"リセット",modalTitle:"入力内容をご確認下さい。",modalContent:"入力内容をご確認の上、よろしければ「OK」ボタンを押してください。<br>入力をやり直す場合は、「Cancel」ボタンを押して入力画面に戻り、再度入力してください。",successfulMessage:"登録が完了致しました。ご記入頂いたメールアドレス宛に、確認メールをお送りしておりますのでご確認下さい。なお、メールが届かない場合は、恐れ入りますが、購入サイト経由でご連絡頂きますようお願い申し上げます。",errorMessage:"登録エラーです。恐れ入りますが、購入サイト経由でご連絡頂きますようお願い申し上げます。"},nav:{title:"SIMカード開通専用ページ",language:"言語",languageJapanese:"日本語",languageEnglish:"英語"}}}}),g=a("mtWM"),y=a.n(g),k=a("Rf8U"),N=a.n(k),x=a("Tqaz");a("Jmt5"),a("9M+g");s.default.config.productionTip=!1,s.default.use(x.a),s.default.use(x.b),s.default.use(N.a,y.a),s.default.use(u.a),new s.default({el:"#app",i18n:h,router:_,components:{App:d},template:"<App/>"})},UBQt:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.efbb6a2a2629b4aed750.js.map