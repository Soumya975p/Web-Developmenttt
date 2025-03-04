// function loadscript(src,callback)
// {
//     let script=document.createElement('script')
//     script.src=src
// }

const callback=(arg) => {
  console.log(arg)
}

const loadscript=(src,callback) => {
    let sc=document.createElement("script");
    sc.src=src
    sc.onload=callback("Rohan")
    document.head.append.sc
}
