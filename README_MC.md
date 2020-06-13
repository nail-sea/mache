//创建demo，打开cmd，进入目录,创建并运行项目：
  npx create-react-app my-app
  cd my-app
  npm start

//GitHub上新建仓库然后上传。
  GitHub上新建仓库 mache, 然后打开git bash命令行工具，cd到项目目录，/d/demo/react/mache，
  然后 git init，把这个目录变成git可以管理的仓库，目录下会多一个 .git 的目录，千万别修改它，如果看不到，可以显示隐藏文件。
  git add README.md （当然也可以add 任何想上传的文件或文件夹）
  git commit -m "first commit"
  git remote add origin https://github.com/nail-sea/mache.git
  git push -u origin master
  至此，就是开通仓库和上传README.md的过程。
  注意：如果因为路径弄混了，导致错误：fatal：remote origin already exists.  需要执行：git remote rm origin.

//修改后上传过程,其余git操作查看文档，此处只记录关键步骤和问题
  git status，查看修改的内容，然后git add XX 或其他git add （-A/./-u), 之后git commit -m "注释"，最后git push origin master.

//从远程克隆代码操作
  git clone git@github.com:nail-sea/mache.git  或 git clone https://github.com/nail-sea/mache.git

//本地修改后为上传本地，无法切换到其他分支。如果切换到其他分支，直接刷新页面不会显示更新，需要重新启动，即 yarn start  

//如果要合并远程分支，最好在本地先 git pull 解决冲突后，再切换到master，  执行 git merge dev ，将dev合并到master
  如果合并另一个分支，出现冲突后，解决冲突，然后git add -A 和 git commit -m “” ，但是另一个分支内容不会改变
  如果讲主分支合并到其他分支，则需要再次 git commit -m ""来确认
  每次合并分支，都是需要解决冲突的
  总结：1、如果要在本地合并到远程，需要（待验证）
        2、如果是本地dev分支，合并到主分支master，则最好在dev上合并master，即 git merge master，等到解决冲突后，运行一下，如果没有问题，则切换回master分支，执行 git merge dev操作，这样可以保证，如果合并时出现异常操作，保证不影响master，注意在master合并dev之前，切勿进行其他操作。

//小技巧
1、git log 之后如何退出？ 在英文状态下 输入 Q ，即可退出。查看简写模式： git log --pretty=oneline
2、注意格式，没有钩子函数，会顺序执行，即执行setInterval(tick, 1000);这和RN 需要写进构造函数或周期函数里 有所不同。
3、出现 warning: LF will be replaced by CRLF in XXXXXXXXXXXXXX.时，原因是路径中存在 / 的符号转义问题，false就是不转换符号默认是 true，相当于把路径的 / 符号进行转义，这样添加的时候就有问题，此时，git bash 命令行输入下面代码即可。
  git config core.autocrlf false  暂时禁
  git config --global core.autocrlf false 永久禁 
4、撤销操作 Ctrl+z ,取消撤销 Ctrl+Shit+z
