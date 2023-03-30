        SaveFileDialog saveFileDialog1 = new SaveFileDialog();
        private void button3_Click(object sender, EventArgs e)
        {
            
            //richTextBox1.SaveFile("txtName", RichTextBoxStreamType.PlainText);
            if (this.richTextBox1.Text == "")
                return;
            //saveFileDialog1.DefaultExt = "txt";
            saveFileDialog1.Filter = "Text files (*.txt)|*.txt|All files (*.*)|*.*";
            if (this.saveFileDialog1.ShowDialog() == DialogResult.Cancel)
                return;
            string FileName = this.saveFileDialog1.FileName;

            if (saveFileDialog1.ShowDialog() == DialogResult.OK && FileName.Length > 0)
            {
                // Save the contents of the RichTextBox into the file.
                richTextBox1.SaveFile(saveFileDialog1.FileName, RichTextBoxStreamType.PlainText);
                MessageBox.Show("文件已成功保存");
            }
        }