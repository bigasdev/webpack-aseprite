var atlas = [{
    src: Image,
    images: [{
        name: "imageName",
        x: 0,
        y: 0,
        width: 16,
        height: 16
    }]
}];

export function asepriteConfig(atlasImgs=[], json=[]){
    var i = 0;
    for (let index = 0; index < atlasImgs.length - 1; index++) {
        atlas.push({src:null, images:[{}]});
    }
    atlasImgs.forEach(a => {
        var img = new Image();
        img.src = a;
        atlas[i].src = img;
        try {
            json[i].meta.slices.forEach(s => {
                var img = {
                    name: s.name,
                    x: s.keys[0].bounds.x,
                    y: s.keys[0].bounds.y,
                    width: s.keys[0].bounds.w,
                    height: s.keys[0].bounds.h
                }
                atlas[i].images.push(img);
            })
        } catch (error) {
            console.log(error);
        }
        i++;
    })
}

export const createAsset = (info, ctx, callback) =>{
    var a = atlas[info.atlas].images.find((e)=>e.name === info.name);
    if(a){
        ctx.drawImage(atlas[info.atlas].src, a.x,a.y,a.width,a.height,info.x,info.y,a.width*info.size,a.height*info.size);
        callback(info, a);
    }
}