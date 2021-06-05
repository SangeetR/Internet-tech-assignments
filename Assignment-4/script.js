var data = {}

// ? Press Any key to focus text field
document.onkeypress = ()=>{ document.getElementById("command").focus() }

function driver (fun, key, value=undefined, path=undefined){
    if (path != undefined)
    {
        path = path.split("/")
        path = path.filter( path => {
            return path != ""
        })     
    }
    if(fun.toLowerCase()== "add")
    {
        add(data, key, value, path) 
    }
    else if(fun.toLowerCase() == 'rm')
    {
        remove(data, key, path)
    }
    else
    {
        return "Invalid Command"
    }

    return "Operation Successful"
}

const add = ( db, key, value=undefined, path=undefined )=> {
    if( path == undefined || path.length == 0 )
    {
        value == undefined 
        ? db[key] = { }
        : db[key] = value
        return "Successfully Added"
    }
    else 
    {
        if(!(path[0] in db)) { db[path[0]] = {} }
            x = db[path[0]]
            path = path.slice( 1, )
            add(x, key, value, path)
    }
}

const remove = (db, key, path=undefined) => {
    console.log("PATH  ", path)
    if ( path == undefined || path.length == 0 )
    {
        delete db[key]
    }
    else if(path[0] in db)
    {
        x = db[path[0]]
        path = path.slice( 1, )
        remove( x, key, path)
    }
    else
    {
        return "REMOVED"
    }
}