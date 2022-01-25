const fs = require('fs');
const path = require('path');

const settings = {
    verrify_and_create_folder: true,
    txt_default: true
};

const folder_exist = (dir)=>{
    try {
        return fs.lstatSync(dir).isDirectory();
    }catch(err){
        return false;
    };
};

const write_file = function(data){
    let folder_path = path.join(__dirname, '..', '..', 'files');
    if(settings.verrify_and_create_folder && !folder_exist(folder_path)){
        fs.mkdirSync(folder_path, {recursive:true});
    };
    if(settings.txt_default || !data.extension || data.extension==""){
        data.extension = "txt";
    };
    if(!data.file_name || data.file_name==""){
        data.file_name = "default_name";
    };
    try{
        fs.writeFileSync(path.join(folder_path, `${data.file_name}.${data.extension}`), data.content)
        return {
            "status": 200,
            "message": 'The file was created successfully'
        };
    }catch(err){
        return {
            "status": 500,
            "message": `${err}`
        };
    };
};

module.exports = write_file;