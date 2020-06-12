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

//修改后上传过程
  git status，查看修改的内容，然后git add XX 或其他git add （-A/./-u), 之后git commit -m "注释"，最后git push origin master.