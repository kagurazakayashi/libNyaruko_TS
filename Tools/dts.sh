cd ..
npm i tern
npm i dtsmake
for file in `ls *.ts`
do
    echo $file
    tsc $file
done
for file in `ls *.js`
do
    echo $file
    dtsmake -s $file
    rm -f $file
done
cd Tools