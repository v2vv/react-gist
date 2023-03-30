        public string GetAllFileName()
        {

            string binpath;
            string rootPath = System.IO.Directory.GetCurrentDirectory(); //设置目录

            string[] files = Directory.GetFiles(rootPath, "*.bin"); //查找并获取文件路径

            if (files.Length == 0) { 
                MessageBox.Show("未找到固件");
            return null;
            }
            binpath = files[0];

            this.FilePath = binpath;

            //richTextBox_Path.Text = binpath;
            richTextBox_Log.SelectionColor = Color.Green;
            Console.WriteLine("固件名称："+ binpath);
            //richTextBox_Log.SelectionColor = Color.Green;
            Console.WriteLine();

            return binpath;
        }