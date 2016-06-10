webpackJsonp([2,0],[function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var s=i(1),a=o(s),n=i(14),l=o(n),r=i(13),c=o(r),d=i(3),u=o(d);i(9),a["default"].use(u["default"]),a["default"].use(l["default"]),new a["default"]({el:"body",components:{App:c["default"]}})},,function(e,t){},,function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(5),a=o(s),n=i(1),l=o(n),r=i(3),c=/\/.+/i;l["default"].filter("title",function(e){return e.replace(";","")}),l["default"].filter("location",function(e){return"馆藏地址："+e}),l["default"].filter("lendDate",function(e){return"借："+e}),l["default"].filter("lendTitle",function(e){return e.replace(c,"》")}),l["default"].filter("remain",function(e){return e+"天"}),l["default"].filter("lendTime",function(e){return"借阅日期："+e}),t["default"]={data:function(){return{stuId:"",password:"",isLogin:!1,operate:"",showOperate:!1,showAdd:!1,showDel:!1,showSave:!1,showMail:!1,user:{},books:[],booksLength:0,addBook:"",selected:"借阅",lend:[],search:{title:"",page:1,result:[],loading:!0}}},computed:{addBookState:function(){return this.addBook.length?10===this.addBook.length?"success":"error":""},emailState:function(){var e=/@./i;return""===this.user.email?"":e.test(this.user.email)?"success":"error"},showHeader:function(){return"搜索"!==this.selected}},methods:{login:function(e){var t=this;this.$http.get("/api/users/"+this.stuId).then(function(e){return e.data}).then(function(e){t.user=e,t.lendInfo(),t.booksInfo(e.books),r.Indicator.open("正在加载借阅信息，请稍等")})["catch"](function(){(0,r.Toast)({message:"您的输入不合法，请重新输入！"})})},lendInfo:function(){var e=this;this.$http.post("/api/users/login",(0,a["default"])({username:this.stuId,password:this.password||"123456"})).then(function(e){return e.data}).then(function(t){e.isLogin=!0,e.lend=t,e.$nextTick(function(){e.fixHeight()}),r.Indicator.close()})["catch"](function(t){console.log(t),(0,r.Toast)({message:t.data.message}),e.isLogin=!1,r.Indicator.close()})},fixHeight:function(){var e=document.getElementsByClassName("mint-tabbar")[0],t=document.getElementsByClassName("fix-fixed")[0];t.style.height=e.scrollHeight+"px"},booksInfo:function(e){var t=this;this.user.books=e,this.$http.post("/api/lib",(0,a["default"])(e)).then(function(e){return e.data}).then(function(e){t.books=e,t.showOperate=!0})},searchBook:function(){var e=this;return this.search?(this.search.page=1,r.Indicator.open("正在搜索"),void this.$http.post("/api/search",(0,a["default"])({title:this.search.title,page:this.search.page})).then(function(e){return e.data}).then(function(t){e.search.result=t,t.length||(0,r.Toast)({message:"未找到你要的图书"}),r.Indicator.close()})["catch"](function(e){console.log(e),r.Indicator.close()})):!1},addSubBook:function(e){this.addBook=e,this.operate="add",this.save()},loadMore:function(){var e=this;this.search.page+=1,this.search.loading=!0,this.$http.post("/api/search",(0,a["default"])({title:this.search.title,page:this.search.page})).then(function(e){return e.data}).then(function(t){e.search.result=e.search.result.concat(t),e.search.loading=!1})["catch"](function(e){console.log(e),r.Indicator.close()})},reLend:function(e){console.log(e)},addSub:function(){this.showAdd=!0,this.showSave=!0,this.operate="add"},delSub:function(){this.showDel=!0,this.showSave=!0,this.operate="del",this.booksLength=this.books.length},delBook:function(e){this.books.splice(e,1),this.user.books.splice(e,1)},addMail:function(){this.showSave=!0,this.showMail=!0,this.operate="mail"},save:function(e){function t(e){e.$http.post("/api/users/"+e.stuId+"/books",(0,a["default"])(e.user.books)).then(function(e){return e.data}).then(function(){(0,r.Toast)({message:"保存成功"}),e.showDel=!1,e.showSave=!1,e.operate="",r.Indicator.close()})["catch"](function(e){return console.log(e)})}function i(e){e.$http.post("/api/users/"+e.stuId+"/email",(0,a["default"])({email:e.user.email})).then(function(e){return e.data}).then(function(){(0,r.Toast)({message:"保存邮箱成功"}),e.showMail=!1,e.showSave=!1,e.operate="",r.Indicator.close()})}var o=this;if("add"===this.operate){if(!this.addBook)return this.showAdd=!1,this.showSave=!1,!1;if(10!==this.addBook.length)return(0,r.Toast)({message:"书籍号有误，请检查重试"}),!1;r.Indicator.open("正在保存"),this.$http.post("/api/lib",(0,a["default"])([this.addBook])).then(function(e){return e.data}).then(function(e){e.includes("Error")?((0,r.Toast)({message:"书籍号有误，请检查重试"}),r.Indicator.close()):(o.user.books.push(o.addBook),t(o),o.showAdd=!1,o.books.push(e[0]),o.addBook="")})}else if("mail"===this.operate)r.Indicator.open("正在保存"),i(this);else{if(this.booksLength===this.books.length)return;t(this)}}}}},,,,function(e,t){},function(e,t){},function(e,t){},,function(e,t){e.exports='<div id=app> <mt-header title=图书馆订阅系统 style="font-size: 20px" v-if=showHeader> </mt-header> <div class=login v-if=!isLogin> <mt-field label=学号 placeholder=请输入学号 type=text :value.sync=stuId></mt-field> <mt-field label=密码 placeholder=请输入密码/默认为123456 type=password :value.sync=password></mt-field> <mt-button class=login-button size=large type=primary @click=login(this.value)> 登陆 </mt-button> </div> <mt-tab-container :active.sync=selected> <mt-tab-container-item id=借阅> <mt-cell v-for="ele in lend" :title="ele.title | lendTitle" :label="ele.lend | lendTime"> <span v-if="ele.remain > 7" style="color: #4caf50"> {{ele.remain | remain}} </span> <span v-if="ele.remain > 0 && ele.remain <= 7" style="color: #FF5722"> {{ele.remain | remain}} </span> <span v-if="ele.remain < 0" style="color: red"> 超期：{{ele.remain | remain}} </span> </mt-cell> </mt-tab-container-item> <mt-tab-container-item id=订阅> <div class=book-cell> <mt-cell v-for="ele in books" :title="ele.title | title" :label="ele.location | location"> <span style="color: green" v-if=ele.canBorrowNum> 可借: {{ele.canBorrowNum}} </span> <span v-else=!ele.canBorrowNum> 可借: {{ele.canBorrowNum}} </span> <span class="mint-field-state is-error" v-if=showDel @click=delBook($index)> <i class="mintui mintui-field-error"></i> </span> </mt-cell> </div> <div class=book-add v-if=showAdd> <mt-field label=书籍号 placeholder="eg: 0000805778" :state=addBookState :value.sync=addBook> </mt-field> </div> <div class=set-mail v-if=showMail> <mt-field label=邮箱 placeholder=用于提醒你有书可借 type=text :state=emailState :value.sync=user.email> </mt-field> </div> <div class=operate v-if=showOperate> <mt-button type=primary size=normal v-if=!showSave @click=addSub>增加订阅</mt-button> <mt-button type=danger size=normal v-if=!showSave @click=delSub>删除订阅</mt-button> <mt-button style=width:91% type=primary plain v-if=!showSave @click=addMail> 设置邮箱 </mt-button> <mt-button style="background-color: #4CAF50; width:92%" type=primary v-if=showSave @click=save> 保存 </mt-button> </div> </mt-tab-container-item> <mt-tab-container-item id=搜索> <mt-search :value.sync=search.title :result.sync=search.result @keyup.enter=searchBook> <div v-infinite-scroll=loadMore() infinite-scroll-distance=10> <mt-cell v-for="ele in search.result" :title=ele.title :label=ele.location> <span v-if="ele.canBorrowNum > 0" style="color: green"> 可借：{{ele.canBorrowNum}} </span> <span v-else> 可借：{{ele.canBorrowNum}} </span> <span class="mint-field-state is-success sub-add" @click=addSubBook(ele.marc_no)> <i class="iconfont icon-add"></i> </span> </mt-cell> <div class=search-spinner> <mt-spinner type=snake v-if=search.loading></mt-spinner> </div> </div> </mt-search> </mt-tab-container-item> </mt-tab-container> <mt-tabbar :selected.sync=selected fixed v-if=isLogin> <mt-tab-item class=tab-item id=借阅> <i class="iconfont icon-book"></i> 借阅 </mt-tab-item> <mt-tab-item class=tab-item id=订阅> <i class="iconfont icon-news"></i> 订阅 </mt-tab-item> <mt-tab-item class=tab-item id=搜索> <i class="iconfont icon-search"></i> 搜索 </mt-tab-item> </mt-tabbar> <div class=fix-fixed></div> </div>'},function(e,t,i){var o,s;i(10),o=i(4),s=i(12),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}]);
//# sourceMappingURL=app.6b5369fd52e127c8da80.js.map