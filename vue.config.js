module.exports = {
  configureWebpack: {
    devServer: {
      port: 8080,
      open: true,
      before(app) {
        // app.get('',(req,res)=>{
        //   res.json({

        //   });
        // })
        let userpoor = [{
            username: 'wuxu',
            password: '123456'
          },
          {
            username: 'late',
            password: '777'
          }
        ]
        app.get('/api/register', (req, res) => {
          const {
            username,
            password
          } = req.query
          const userlength = userpoor.filter(v => v.username === username).length;
          if (userlength > 0) {
            res.json({
              success: false,
              message: '用户名已存在'
            })
          } else {
            res.json({
              success: true,
              message: '注册成功'
            })
          }
        })
        let tokenkey = 'wuxuclass'
        app.get('/api/login', (req, res) => {
          const {
            username,
            password
          } = req.query;
          const loginlength = userpoor.filter(v => v.username === username && v.password === password).length;
          if (loginlength > 0) {
            res.json({
              code: 0,
              message: '登陆成功',
              token: tokenkey + '-' + 'username' + '-' + (new Date().getTime() + 60 * 60 * 1000)
            })
          } else {
            res.json({
              code: 1,
              message: '登陆失败',
            })
          }
        })
        app.get('/api/banner', (req, res) => {
            res.json({
              data: [{
                  url: 'http://www.didichuxing.com/',
                  image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                },
                {
                  url: 'http://www.didichuxing.com/',
                  image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                },
                {
                  url: 'http://www.didichuxing.com/',
                  image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                }
              ]
            })
          }),
          app.get('/api/rollinglist', (req, res) => {
            res.json({
              data: [
                [{
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                    label: '分类1'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                    label: '分类1'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                    label: '分类1'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                    label: '分类1'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                    label: '分类1'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                    label: '分类1'
                  }, {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                    label: '分类1'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                    label: '分类1'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                    label: '分类1'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                    label: '分类1'
                  }
                ],
                [{
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                    label: '分类2'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                    label: '分类2'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                    label: '分类2'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                    label: '分类2'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                    label: '分类2'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                    label: '分类2'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                    label: '分类2'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                    label: '分类2'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                    label: '分类2'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                    label: '分类2'
                  }
                ]
              ]
            })
          })
        app.get('/api/classify', (req, res) => {
          switch (req.query.type) {
            case '0':
              res.json({
                data: [{
                    label: '荣耀',
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                  },
                  {
                    label: '华为',
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                  },
                  {
                    label: '小米',
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                  }
                ]
              })
              break;
            case '1':
              res.json({
                data: [{
                    label: '魅族',
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                  },
                  {
                    label: '苹果',
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                  },
                  {
                    label: '香蕉',
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                  },
                ]
              })
              break;
            case '2':
              res.json({
                data: [{
                    label: '手机电器',
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                  },
                  {
                    label: '手机电器',
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                  },
                  {
                    label: '手机电器',
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                  },
                ]
              })
              break;
            default:
              res.json({
                data: [{
                    label: '所有',
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                  },
                  {
                    label: '所有',
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                  },
                  {
                    label: '所有',
                    url: 'http://www.didichuxing.com/',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                  },
                ]
              })
              break;
          }
        })
        app.get('/api/menu', (req,res) => {
          res.json({
            data:[
              {label:'商品收藏'},
              {label:'我的足迹'},
              {label:'店铺收藏'},
              {label:'我的订单'},
              {label:'退出',type:'exit'}
            ]
          })
        })
      }
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
