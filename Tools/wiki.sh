cd ..
mkdir wiki
for file in `ls *.ts`
do
    echo $file
    python3 Tools/nyawiki.py $file >wiki/$file.md
done
cd Tools