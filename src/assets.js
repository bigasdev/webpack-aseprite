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

export class Asset{
    constructor(atlas = 0, name = "item", x = 0, y = 0, size = 1){
        this.atlas = atlas;
        this.name = name;
        this.x = x;
        this.y = y;
        this.size = size;
        let source;
    }
    getInfo(){
        return {name:this.name, position:{x:this.x, y:this.y}, radius:{width:this.source.width, height:this.source.height}};
    }
}

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
    console.log(atlas);
}

export const createAsset = (asset, ctx) =>{
    var a = atlas[asset.atlas].images.find((e)=>e.name === asset.name);
    if(a){
        ctx.drawImage(atlas[asset.atlas].src, a.x,a.y,a.width,a.height,asset.x,asset.y,a.width*asset.size,a.height*asset.size);
        asset.source = a;
    }
    return asset;
}