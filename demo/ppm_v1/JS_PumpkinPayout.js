(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 550,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"imagespp/Collar.png", id:"Collar"},
		{src:"imagespp/head1pngcopy.png", id:"head1pngcopy"},
		{src:"imagespp/head3pngcopy.png", id:"head3pngcopy"},
		{src:"imagespp/head4pngcopy.png", id:"head4pngcopy"},
		{src:"imagespp/pp_bg.png", id:"pp_bg"},
		{src:"imagespp/shadow.png", id:"shadow"},
		{src:"imagespp/suit.png", id:"suit"},
		{src:"imagespp/suit1.png", id:"suit1"}
	]
};



// symbols:



(lib.Collar = function() {
	this.initialize(img.Collar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,373,199);


(lib.head1pngcopy = function() {
	this.initialize(img.head1pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,166);


(lib.head3pngcopy = function() {
	this.initialize(img.head3pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,82);


(lib.head4pngcopy = function() {
	this.initialize(img.head4pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,82);


(lib.pp_bg = function() {
	this.initialize(img.pp_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,550);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,64);


(lib.suit = function() {
	this.initialize(img.suit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,475,423);


(lib.suit1 = function() {
	this.initialize(img.suit1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,475,423);


(lib.Tween6Fox = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#A2D223","#415312"],[0.157,1],-5.2,5.8,0,-5.2,5.8,33.9).s().p("AiMgsQA1g/AwgSQA2gWB9AlQApAMAnAPQAiANgDABQiZAUhKAbQhwAniiB1QA0huA6hEg");
	this.shape.setTransform(-41.2,-76.8,1.692,1.231);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#A2D223","#415312"],[0.157,1],-3.6,5.8,0,-3.6,5.8,36.6).s().p("AgniJQgkggg5gLIgygDQBog2B5gIQBfgHAMALQBYBIiRDXQhIBshYBeQCMkahwhng");
	this.shape_1.setTransform(31.1,-62.7,1.692,1.231);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#2B380B","#39490F","#4D6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.475,0.51,0.573,0.643,0.725,0.824,1],-42.8,6.4,0,-42.8,6.4,72.9).s().p("AiMgrQBDhUAvgSQA2gVB9AkQApAMAnAPQAiAOgDAAQiEARhsAyQhwAyivB9QA1hvBGhVg");
	this.shape_2.setTransform(-43.4,-74.4,1.692,1.231);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#2B380B","#39490F","#4D6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.475,0.51,0.573,0.643,0.725,0.824,1],-19.3,8.5,0,-19.3,8.5,49.1).s().p("AgyiJQghgkg0gOIgvgIQBpg1B5gJQBegGANALQBYBIidDiQhOByheBkQCMkbhkhyg");
	this.shape_3.setTransform(31,-61.3,1.692,1.231);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAFQgDgCAAgDQAAgGAGAAQAHAAAAAGQAAAHgHAAQgBAAgCgCg");
	this.shape_4.setTransform(-193.2,87.7,1.692,1.231);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAKQgFgEAAgGQAAgFAFgEQAEgFAEAAQAFAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgFAAQgEAAgEgFg");
	this.shape_5.setTransform(-188.1,86.9,1.692,1.231);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],-1.9,5.3,0,-0.7,2.6,10.8).s().p("AgoAsQgRgSAAgaQAAgYARgUQARgSAXAAQAYAAARASQARATAAAZQAAAagRASQgRATgYAAQgXAAgRgTg");
	this.shape_6.setTransform(-189.9,90.2,1.692,1.231);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2381D").s().p("AguAzQgUgWAAgdQAAgdAUgVQAUgVAaAAQAcAAATAVQAUAVAAAdQAAAdgUAWQgTAVgcAAQgaAAgUgVg");
	this.shape_7.setTransform(-190.2,91.1,1.692,1.231);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgDQADgDACAAQADAAADADQACADAAADQAAAEgCADQgDADgDAAQgCAAgDgDg");
	this.shape_8.setTransform(-167,47.2,1.692,1.231);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAPQgFgHAAgIQAAgHAFgGQAFgHAGAAQAHAAAFAHQAFAGAAAHQAAAIgFAHQgFAGgHAAQgGAAgFgGg");
	this.shape_9.setTransform(-160.6,46.1,1.692,1.231);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],-2.2,7.3,0,-0.8,3.5,14.6).s().p("AgyA9QgVgZgBgkQABgjAVgZQAVgaAdAAQAdAAAWAaQAVAZABAjQgBAkgVAZQgWAagdAAQgdAAgVgag");
	this.shape_10.setTransform(-162.9,50.5,1.692,1.231);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2381D").s().p("Ag6BGQgYgdAAgpQAAgoAYgdQAZgdAhAAQAiAAAYAdQAZAdAAAoQAAApgZAdQgYAdgiAAQghAAgZgdg");
	this.shape_11.setTransform(-163.3,51.8,1.692,1.231);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAPQgEgHAAgIQAAgIAEgGQAFgGAFAAQAGAAAFAGQAEAGAAAIQAAAIgEAHQgFAGgGAAQgFAAgFgGg");
	this.shape_12.setTransform(-216.6,24.1,1.692,1.231);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAeQgJgNAAgRQAAgQAJgNQAJgNAMAAQANAAAJANQAJANAAAQQAAARgJANQgJANgNAAQgMAAgJgNg");
	this.shape_13.setTransform(-205.3,21.8,1.692,1.231);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],0,15.1,0,0,15.1,26.7).s().p("AhaCjQgmg0AAhJQAAhNBLhaQBEhUAtAAQAbAAAWBaQAUBTAABOQAABJgmA0QgmAzg1AAQg0AAgmgzg");
	this.shape_14.setTransform(-209.3,26.2,1.692,1.231);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F23E1B").s().p("AhnCyQgsg7AAhUQAAhYBPheQBIhZA9AAQAfgBAbBfQAZBaAABXQAABUgsA7QgrA7g9ABQg8gBgrg7g");
	this.shape_15.setTransform(-210,29.1,1.692,1.231);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-5.9,-13.5,0,-7.5,61.9,174.7).s().p("AkgFQQiVhbAZjJQAWizB/iGQB+iECNAAQCKAAB1CGQBwCAAlC3QAqDQiWBZQhoA9jAAAQi2AAhuhCg");
	this.shape_16.setTransform(-0.3,-10.2,1.692,1.231);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBEFB1").s().p("AExgtQiOhvijAAQiiAAiOBvQiKBohYC6QBTjhCLiBQCPiHClAAQCmAACPCHQCLCBBTDhQhYi6iKhog");
	this.shape_17.setTransform(0,-49.7,1.692,1.231);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FB7228").s().p("AjkB/QhgiMg2kAQA8DEBfBpQBjBwB8AAQB7AABjhxQBghrA9jHQg3EChhCOQhkCXh/AAQiAAAhkiVg");
	this.shape_18.setTransform(0,171,1.692,1.231);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FB7228").s().p("Al/B/QigiMhbkAQBnDLCdBzQCrCBDLAAQDJAACtiCQCch2BpjNQhcECihCOQipCXjVAAQjXAAioiVg");
	this.shape_19.setTransform(-0.1,171,1.692,1.231);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-11.1,-139.3,0,-9.5,-23.6,150.5).s().p("AoXNNQjElCABn7QgBjxA6jeQA3jXBmimQBmilCChbQCIhfCUAAQCVAACIBfQCCBbBmClQBmCmA3DXQA6DegBDxQAAH4jIFFQhhCgiGBWQiKBYiiABQlNAAjKlPg");
	this.shape_20.setTransform(0,59.8,1.692,1.231);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],17.5,-8.3,0,5.8,46.8,135.5).s().p("Ak2EZQihhMAbioQAYiWCJhwQCHhvCYAAQCVAAB+BwQB5BsAnCZQAtCuihBKQhwA0jPAAQjEAAh2g4g");
	this.shape_21.setTransform(84.5,-27.1,1.692,1.231);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FBEFB1").s().p("ACogTQigg+i6AAQiaAAhlBcQBkifCvAAQC5AACcBRQCSBLBpCNQhyhviYg5g");
	this.shape_22.setTransform(84.1,-67.6,1.692,1.231);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FC861E").s().p("Ak5hCQBZCrCEAAQB6AABqhTQBlhMBNiSQhGC+hkBlQhoBth6AAQiRABhWkLg");
	this.shape_23.setTransform(88.8,174.2,1.692,1.231);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FC861E").s().p("AmACBQhkhDhJiAQCdCrDsAAQDZAAC9hTQC0hMCIiSQh9C+iwBlQi6BtjaAAQiEAAhphHg");
	this.shape_24.setTransform(88.8,174.2,1.692,1.231);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-2.2,-129.3,0,-0.7,-18,144.8).s().p("ApnM3QiKk2AAoBQAAoZBokdQB/lcEhAAQDLAAC2BdQCxBbCJCkQCICjBLDSQBNDYAADpQAADshCDWQhBDUh5ChQh8ClinBaQivBdjKAAQknABialdg");
	this.shape_25.setTransform(91.9,54.6,1.692,1.231);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-15.9,-10.3,0,-10,38.9,143.6).s().p("Ak2EZQihhMAbioQAYiWCJhwQCHhvCYAAQCUAAB+BwQB5BsAoCZQAtCuihBKQhxA0jOAAQjEAAh2g4g");
	this.shape_26.setTransform(-83.9,-24.2,1.692,1.231);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FBEFB1").s().p("Ai1hDQCbhRC5AAQCvAABkCfQhlhciaAAQi6AAigA+QiYA5hyBvQBpiNCThLg");
	this.shape_27.setTransform(-85.7,-67.6,1.692,1.231);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FC861E").s().p("AiCBfQhhhthIjCQBNCeBjBWQBmBcBrAAQCBAABVi1QhTEGiLAAQhrAAhlhyg");
	this.shape_28.setTransform(-87.6,174.2,1.692,1.231);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FC861E").s().p("AjuBfQizhsiDjDQCMCeC1BWQC7BcDGAAQDsAACbi1QhJB9hiBDQhoBGiCAAQjFAAi5hyg");
	this.shape_29.setTransform(-87.6,174.2,1.692,1.231);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-6.2,-139.7,0,-4.7,-24.6,149.7).s().p("Ai4Q8QikhbiBilQiCimhHjTQhLjbAAjoQAAjtBDjVQBEjXB+ihQCDioCzhaQC8hfDjAAQEhAACAFhQBoEfAAIbQAAICiKE6QiaFgknAAQi0AAirhgg");
	this.shape_30.setTransform(-91.4,54.6,1.692,1.231);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7B9D24").s().p("AgXAeQgIgNAAgTQAAgSAKgMQAJgMAMAAQAOAAAJAMQAJANAAATQAAASgJANQgJAPgOAAQgOgBgJgPg");
	this.shape_31.setTransform(-67.1,-193.1,1.692,1.231);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8DB428").s().p("AgrA4QgOgZAAgjQAAggARgXQARgXAXAAQAaAAARAYQAPAWAAAjQAAAigPAYQgRAagaAAQgbAAgQgbg");
	this.shape_32.setTransform(-67.1,-193.1,1.692,1.231);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#A7DE25","#719020","#80A224"],[0,0.584,1],-23.5,0,23.6,0).s().p("ACGCMQAPjggTiCQgbi9iqgtQg2gOg+ACIgzAFIAAgZQFKgdA6ElQATBiAECEQABAhgCC3QAAB0AKA0QAMBGAlAPIi4ABQBDhBAQkXg");
	this.shape_33.setTransform(-21.6,-134.1,1.692,1.231);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#9FD423","#9FD423","#628412"],[0,0.51,1],-2.7,-44.8,3.3,60.8).s().p("AAfB7QAhjOgSh9Qgai8ibgmQgxgMg5AEIguAHIAAgyQCYgVBmA8QB2BGAkCsQAVBcAKB/IAODHQALBmAXA8QAeBKA7AnImLADQBjhrAmkGg");
	this.shape_34.setTransform(-12.5,-134.9,1.692,1.231);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#648612","#647F1C","#4E6215"],[0,0.51,1],-3,-52.2,2.3,47.1).s().p("AhvHhQBvhxArj6QAhi9gSh/Qgai8icgWQgxgHg5ALIguAMIAAhTQCZgVBlA8QB2BGAlCsQAUBaAJB3IAOC/QAJBkATA7QAZBKAwAqg");
	this.shape_35.setTransform(-20.1,-136.2,1.692,1.231);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#648612","#647F1C","#4E6215"],[0,0.51,1],-2.9,-50.9,2.4,48.4).s().p("AhVHyQBfh0Anj5QAgjGgSh0Qgdi9ipgmQg2gMg+AFIgyAHIAAhUQCfgUB2BMQCABSApCxQAVBZAKB3IAPC/QAKBlAVA6QAbBLA1Aqg");
	this.shape_36.setTransform(-10.2,-138.2,1.692,1.231);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#506515").s().p("ACwHoQhyg2hLjUQghhahKk1QgzjSiEhlQCNBeA8DWIBDDjQAnCGAnBTQBpDeCcACg");
	this.shape_37.setTransform(37.5,-137.1,1.692,1.231);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#506515").s().p("AjGG0QDQgyBskEQAphjAOhlQANhegOgyQgfhyg+g3Qgvgrg7gFQBDgFAuAeQBFAuAkCEQAOAygLBgQgMBogmBlQhlELjPAyg");
	this.shape_38.setTransform(-47.7,-130.6,1.692,1.231);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#4B620B","#8FC11F","#628412"],[0,0.51,1],-27.4,-48.4,-2.4,42.3).s().p("An2IIQDSgyBskEQAphjAOhnQANhcgOgyQgzi3h8gdQgmgKgqAIIghAJIAAinQCqgoCHBUQCRBcBADdIBCDkQApCFAoBUQBpDdCbADg");
	this.shape_39.setTransform(3.7,-140.9,1.692,1.231);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#2B380B","#33410C","#4F6610","#678514","#7A9E19","#89B21D","#94C01F","#9AC821","#9CCA21"],[0.333,0.349,0.408,0.471,0.541,0.616,0.702,0.812,1],-0.5,10.5,0,-1,-8.8,50.8).s().p("Ag2EQIgbhSQglhchlgWQizhAhvgYQjFgvi4AiQEVhaCYApQAjAJArAPQAgAFAggcQAXgVgkgiQgagZhIgqQhVgvgmgYQhDgpgVgcQAlAOCrAbQCeAaBLAkQBTAcA8AoQAdAVAOAOQAvgVBbgbICdgvQDAg8BDhDQgIAdg0ArQgMAKhcBEQhAAwgXAcQgfAnAWAaQAWAYAygOQAJgCBxgtQDWhVDLAYQjMASjLBqQi8BwhDAZQhwAZg/BMQgrAzgdBhQgUgegQgyg");
	this.shape_40.setTransform(2.9,-91.7,1.692,1.231);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#192106","#202A08","#38480F","#4C6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.51,0.522,0.573,0.627,0.69,0.761,0.847,1],-0.5,10.5,0,-1,-8.8,50.8).s().p("Ag5EXQgVgxgKgRQgqhEhngYQgsgNhZgmQhjgsgzgRQjDhDizAhQEXhaCGA4QAfAOAlAWQAbAKAfgcQAngliGhlQhNg3gjgbQg+gvgVgbQAlAOCrAbQCeAaBLAkQBTAcA8AoQAdAVAOAOQAvgVBbgbICdgvQDAg8BDhDQgIAlg0AwQgYAXhPA+QhCAygVAbQggAnAXAaQAVAYAzgRIB5g2QDUhgDNAYQjLASjMB8Qi7CChDAZQh1Aag7A5QguAtgaBVQgTgcgUgtg");
	this.shape_41.setTransform(2.9,-91.7,1.692,1.231);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],20.5,-13.8,0,6.4,43.2,131.3).s().p("AlqEFQijhHAbicQAYiKCLhpQCJhnCdAAQCVABCOBOQCJBMBYB8QAzBGgqBFQgkA8hkAyQhYAshzAbQhrAahPAAQjKAAh3g0g");
	this.shape_42.setTransform(111.6,-49.9,1.692,1.231);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FB781D").s().p("AlEGcQiVhZh0iiQhzihhAjRQgriOgOiYQAQCFApB9QBADBBzCTQB0CVCVBSQCcBUCoAAQCqAACahUQCWhSB0iVQB0iTA/jBQAph9AQiFQgOCYgrCOQg/DRh0ChQh0CiiWBZQiaBciqAAQioAAichcg");
	this.shape_43.setTransform(134.4,121.2,1.692,1.231);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FBEFB1").s().p("ADygSQijg7iyAAQkYAAiTBiQBBhQBpgpQBvgrCigBQCxAACgBOQCbBJB2CKQh/hrieg4g");
	this.shape_44.setTransform(122.6,-84.1,1.692,1.231);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],2.2,-103,0,0.5,-6.6,125.3).s().p("AlEQ2QiVhZh0iiQhziihAjSQhCjZAAjuQAAlgAGhmQANjoA0iMQBAioCFhTQCVhcD8ABQDOgBC8BcQC0BZCJCiQCJChBLDTQBNDYgBDuQABDuhCDZQg/DSh0CiQh0CiiWBZQiaBbiqABQiogBichbg");
	this.shape_45.setTransform(134.4,39.3,1.692,1.231);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-18.7,-10.2,0,-10.1,32.8,128.4).s().p("AknDuQjGhDA5iMQAxh4CVhiQCVhgCIAAQCGAABzBeQBtBcAkCAQApCTiSA/QhmAsi7AAQjKgBiMgug");
	this.shape_46.setTransform(-127.9,-50.7,1.692,1.231);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FB781D").s().p("AlDGaQiWhYh0iiQh0igg/jSQgqiNgPiWQAQCHApB/QA/DFB0CWQB0CYCWBTQCaBXCpAAQCpAACchXQCVhTB0iYQBziWBAjFQAph/AQiHQgPCWgqCNQhADShzCgQh0CiiVBYQicBcipAAQipAAiahcg");
	this.shape_47.setTransform(-134.4,121.4,1.692,1.231);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FBEFB1").s().p("AkXhXQCwhqDGAAQC2AAB4A9QBuA3A/BtQhHhIhuglQh2gnikABQjFgBiyBUQirBOiDCTQB5i2Cqhig");
	this.shape_48.setTransform(-127.7,-77.8,1.692,1.231);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-3.7,-103,0,-2,-6.6,125.3).s().p("AlDQ2QiWhZh0iiQh0iig/jSQhCjZAAjuQAAjuBNjYQBLjTCIihQCKiiC0hZQC8hcDOABQD8gBCVBcQCFBTBACoQA0CMANDoQAGBmAAFgQAADuhCDZQhADShzCiQh0CiiVBZQicBbipABQipgBiahbg");
	this.shape_49.setTransform(-134.4,39.3,1.692,1.231);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],22.9,-58.6,0,5.4,5,140).s().p("AkkSDQiHhfhpiuQhoiug6jgQg6jpAAj/QAAj9A6jpQA6jhBoiuQBpiuCHhfQCMhiCYAAQCZAACMBiQCHBfBpCuQBoCuA6DhQA6DpAAD9QAAD/g6DpQg6DhhoCtQhpCuiHBfQiMBiiZAAQiYAAiMhig");
	this.shape_50.setTransform(92.4,37.3,1.692,1.231);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-33.9,-70.8,0,-3.1,-9.7,118.6).s().p("AkkR4QiIhehoisQhoisg6jeQg7jnAAj9QAAj7A7jnQA6jfBoisQBoisCIheQCMhiCYAAQCZAACMBiQCHBeBpCsQBoCsA5DfQA8DnAAD7QAAD9g8DnQg5DehoCsQhpCsiHBeQiMBiiZAAQiYAAiMhig");
	this.shape_51.setTransform(-91.4,35.9,1.692,1.231);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["rgba(0,0,0,0)","rgba(252,147,32,0)","#FC9320","#FC911F","#FB6B1B","#FB541A","#FB4B19"],[0,0.808,0.808,0.808,0.875,0.925,0.961],0.9,12.1,0,-0.7,16.8,157).s().p("AkMSrQh9hjhgizQhgi0g0jpQg3jxAAkHQAAkGA3jxQA0jpBgizQBgi0B9hjQCAhlCMAAQCMAACBBlQB9BjBgC0QBgCzA0DpQA3DwAAEHQAAEIg3DwQg0DphgC0QhgCzh9BjQiBBliMAAQiMAAiAhlg");
	this.shape_52.setTransform(0,39.3,1.692,1.231);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB625","#FBA022","#FB841E","#FB611B","#FB4E19","#FB561A","#FB711C","#FC841E","#FC8F1F","#FC9320","rgba(252,147,32,0)","rgba(0,0,0,0)"],[0,0.169,0.286,0.392,0.482,0.573,0.655,0.69,0.698,0.722,0.749,0.776,0.808,0.808,1],0.9,12.1,0,-0.7,16.8,157).s().p("AkMSrQh9hjhgizQhgi0g0jpQg3jxAAkHQAAkGA3jxQA0jpBgizQBgi0B9hjQCAhlCMAAQCMAACBBlQB9BjBgC0QBgCzA0DpQA3DwAAEHQAAEIg3DwQg0DphgC0QhgCzh9BjQiBBliMAAQiMAAiAhlg");
	this.shape_53.setTransform(0,39.3,1.692,1.231);

	this.addChild(this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-275.6,-205,551.3,410.2);


(lib.Tween5Fox = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(252,196,38,0.984)").s().p("AiaGjQhQgjg+g/Qg9g/gihRIgahVQgJgsAAgwQAOgeAQggIBMiOQAag4AHguIAPgOQBJg/BggjQBkgjBuAAQCGAABQAjQBHAhAhBBIACAEQhQAvg9BQQhXBwAAB3QAABjAaBWQAQA0AXAkIgLAvIgGAcQgbAQgdANQhTAjhaAAQhZAAhTgjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.7,-45.4,85.6,90.9);


(lib.Tween4Fox = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#352B39").s().p("AuuLkQl3hoCflrQImnXPCl9QEwluFSgDIDTFcQjNPlnVBPQlCEIn4DQIg7ABQlsAAjijRg");
	this.shape.setTransform(-5.6,-64.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.3,-159,241.5,190);


(lib.Tween3Fox = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#352B39").s().p("AEbPMQpwqBoUp/Qh0kPECkyQJ+kREeH2IJyNBQDPFCkJE4QieCrjWAAQgzAAg3gKg");
	this.shape.setTransform(-29.2,-27);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120.2,-125.3,182.1,196.6);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#A2D223","#415312"],[0.157,1],-5.2,5.8,0,-5.2,5.8,33.9).s().p("AiMgsQA1g/AwgSQA2gWB9AlQApAMAnAPQAiANgDABQiZAUhKAbQhwAniiB1QA0huA6hEg");
	this.shape.setTransform(-10.3,-19.2,0.424,0.309);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#A2D223","#415312"],[0.157,1],-3.6,5.8,0,-3.6,5.8,36.6).s().p("AgniJQgkggg5gLIgygDQBog2B5gIQBfgHAMALQBYBIiRDXQhIBshYBeQCMkahwhng");
	this.shape_1.setTransform(7.8,-15.7,0.424,0.309);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#2B380B","#39490F","#4D6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.475,0.51,0.573,0.643,0.725,0.824,1],-42.8,6.4,0,-42.8,6.4,72.9).s().p("AiMgrQBDhUAvgSQA2gVB9AkQApAMAnAPQAiAOgDAAQiEARhsAyQhwAyivB9QA1hvBGhVg");
	this.shape_2.setTransform(-10.9,-18.6,0.424,0.309);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#2B380B","#39490F","#4D6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.475,0.51,0.573,0.643,0.725,0.824,1],-19.3,8.5,0,-19.3,8.5,49.1).s().p("AgyiJQghgkg0gOIgvgIQBpg1B5gJQBegGANALQBYBIidDiQhOByheBkQCMkbhkhyg");
	this.shape_3.setTransform(7.8,-15.4,0.424,0.309);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAFQgDgCAAgDQAAgGAGAAQAHAAAAAGQAAAHgHAAQgBAAgCgCg");
	this.shape_4.setTransform(-48.4,22,0.424,0.309);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAKQgFgEAAgGQAAgFAFgEQAEgFAEAAQAFAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgFAAQgEAAgEgFg");
	this.shape_5.setTransform(-47.1,21.8,0.424,0.309);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],-1.9,5.3,0,-0.7,2.6,10.8).s().p("AgoAsQgRgSAAgaQAAgYARgUQARgSAXAAQAYAAARASQARATAAAZQAAAagRASQgRATgYAAQgXAAgRgTg");
	this.shape_6.setTransform(-47.6,22.6,0.424,0.309);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2381D").s().p("AguAzQgUgWAAgdQAAgdAUgVQAUgVAaAAQAcAAATAVQAUAVAAAdQAAAdgUAWQgTAVgcAAQgaAAgUgVg");
	this.shape_7.setTransform(-47.7,22.8,0.424,0.309);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgDQADgDACAAQADAAADADQACADAAADQAAAEgCADQgDADgDAAQgCAAgDgDg");
	this.shape_8.setTransform(-41.8,11.8,0.424,0.309);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAPQgFgHAAgIQAAgHAFgGQAFgHAGAAQAHAAAFAHQAFAGAAAHQAAAIgFAHQgFAGgHAAQgGAAgFgGg");
	this.shape_9.setTransform(-40.2,11.5,0.424,0.309);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],-2.2,7.3,0,-0.8,3.5,14.6).s().p("AgyA9QgVgZgBgkQABgjAVgZQAVgaAdAAQAdAAAWAaQAVAZABAjQgBAkgVAZQgWAagdAAQgdAAgVgag");
	this.shape_10.setTransform(-40.8,12.7,0.424,0.309);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2381D").s().p("Ag6BGQgYgdAAgpQAAgoAYgdQAZgdAhAAQAiAAAYAdQAZAdAAAoQAAApgZAdQgYAdgiAAQghAAgZgdg");
	this.shape_11.setTransform(-40.9,13,0.424,0.309);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAPQgEgHAAgIQAAgIAEgGQAFgGAFAAQAGAAAFAGQAEAGAAAIQAAAIgEAHQgFAGgGAAQgFAAgFgGg");
	this.shape_12.setTransform(-54.2,6,0.424,0.309);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAeQgJgNAAgRQAAgQAJgNQAJgNAMAAQANAAAJANQAJANAAAQQAAARgJANQgJANgNAAQgMAAgJgNg");
	this.shape_13.setTransform(-51.4,5.5,0.424,0.309);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],0,15.1,0,0,15.1,26.7).s().p("AhaCjQgmg0AAhJQAAhNBLhaQBEhUAtAAQAbAAAWBaQAUBTAABOQAABJgmA0QgmAzg1AAQg0AAgmgzg");
	this.shape_14.setTransform(-52.4,6.6,0.424,0.309);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F23E1B").s().p("AhnCyQgsg7AAhUQAAhYBPheQBIhZA9AAQAfgBAbBfQAZBaAABXQAABUgsA7QgrA7g9ABQg8gBgrg7g");
	this.shape_15.setTransform(-52.6,7.3,0.424,0.309);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-5.9,-13.5,0,-7.5,61.9,174.7).s().p("AkgFQQiVhbAZjJQAWizB/iGQB+iECNAAQCKAAB1CGQBwCAAlC3QAqDQiWBZQhoA9jAAAQi2AAhuhCg");
	this.shape_16.setTransform(-0.1,-2.6,0.424,0.309);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBEFB1").s().p("AExgtQiOhvijAAQiiAAiOBvQiKBohYC6QBTjhCLiBQCPiHClAAQCmAACPCHQCLCBBTDhQhYi6iKhog");
	this.shape_17.setTransform(0,-12.4,0.424,0.309);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FB7228").s().p("AjkB/QhgiMg2kAQA8DEBfBpQBjBwB8AAQB7AABjhxQBghrA9jHQg3EChhCOQhkCXh/AAQiAAAhkiVg");
	this.shape_18.setTransform(0,42.9,0.424,0.309);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FB7228").s().p("Al/B/QigiMhbkAQBnDLCdBzQCrCBDLAAQDJAACtiCQCch2BpjNQhcECihCOQipCXjVAAQjXAAioiVg");
	this.shape_19.setTransform(0,42.9,0.424,0.309);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-11.1,-139.3,0,-9.5,-23.6,150.5).s().p("AoXNNQjElCABn7QgBjxA6jeQA3jXBmimQBmilCChbQCIhfCUAAQCVAACIBfQCCBbBmClQBmCmA3DXQA6DegBDxQAAH4jIFFQhhCgiGBWQiKBYiiABQlNAAjKlPg");
	this.shape_20.setTransform(0,15,0.424,0.309);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],17.5,-8.3,0,5.8,46.8,135.5).s().p("Ak2EZQihhMAbioQAYiWCJhwQCHhvCYAAQCVAAB+BwQB5BsAnCZQAtCuihBKQhwA0jPAAQjEAAh2g4g");
	this.shape_21.setTransform(21.2,-6.8,0.424,0.309);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FBEFB1").s().p("ACogTQigg+i6AAQiaAAhlBcQBkifCvAAQC5AACcBRQCSBLBpCNQhyhviYg5g");
	this.shape_22.setTransform(21.1,-16.9,0.424,0.309);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FC861E").s().p("Ak5hCQBZCrCEAAQB6AABqhTQBlhMBNiSQhGC+hkBlQhoBth6AAQiRABhWkLg");
	this.shape_23.setTransform(22.2,43.7,0.424,0.309);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FC861E").s().p("AmACBQhkhDhJiAQCdCrDsAAQDZAAC9hTQC0hMCIiSQh9C+iwBlQi6BtjaAAQiEAAhphHg");
	this.shape_24.setTransform(22.2,43.7,0.424,0.309);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-2.2,-129.3,0,-0.7,-18,144.8).s().p("ApnM3QiKk2AAoBQAAoZBokdQB/lcEhAAQDLAAC2BdQCxBbCJCkQCICjBLDSQBNDYAADpQAADshCDWQhBDUh5ChQh8ClinBaQivBdjKAAQknABialdg");
	this.shape_25.setTransform(23,13.7,0.424,0.309);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-15.9,-10.3,0,-10,38.9,143.6).s().p("Ak2EZQihhMAbioQAYiWCJhwQCHhvCYAAQCUAAB+BwQB5BsAoCZQAtCuihBKQhxA0jOAAQjEAAh2g4g");
	this.shape_26.setTransform(-21,-6.1,0.424,0.309);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FBEFB1").s().p("Ai1hDQCbhRC5AAQCvAABkCfQhlhciaAAQi6AAigA+QiYA5hyBvQBpiNCThLg");
	this.shape_27.setTransform(-21.5,-16.9,0.424,0.309);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FC861E").s().p("AiCBfQhhhthIjCQBNCeBjBWQBmBcBrAAQCBAABVi1QhTEGiLAAQhrAAhlhyg");
	this.shape_28.setTransform(-21.9,43.6,0.424,0.309);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FC861E").s().p("AjuBfQizhsiDjDQCMCeC1BWQC7BcDGAAQDsAACbi1QhJB9hiBDQhoBGiCAAQjFAAi5hyg");
	this.shape_29.setTransform(-21.9,43.6,0.424,0.309);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-6.2,-139.7,0,-4.7,-24.6,149.7).s().p("Ai4Q8QikhbiBilQiCimhHjTQhLjbAAjoQAAjtBDjVQBEjXB+ihQCDioCzhaQC8hfDjAAQEhAACAFhQBoEfAAIbQAAICiKE6QiaFgknAAQi0AAirhgg");
	this.shape_30.setTransform(-22.9,13.7,0.424,0.309);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7B9D24").s().p("AgXAeQgIgNAAgTQAAgSAKgMQAJgMAMAAQAOAAAJAMQAJANAAATQAAASgJANQgJAPgOAAQgOgBgJgPg");
	this.shape_31.setTransform(-16.8,-48.4,0.424,0.309);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8DB428").s().p("AgrA4QgOgZAAgjQAAggARgXQARgXAXAAQAaAAARAYQAPAWAAAjQAAAigPAYQgRAagaAAQgbAAgQgbg");
	this.shape_32.setTransform(-16.8,-48.4,0.424,0.309);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#A7DE25","#719020","#80A224"],[0,0.584,1],-23.5,0,23.6,0).s().p("ACGCMQAPjggTiCQgbi9iqgtQg2gOg+ACIgzAFIAAgZQFKgdA6ElQATBiAECEQABAhgCC3QAAB0AKA0QAMBGAlAPIi4ABQBDhBAQkXg");
	this.shape_33.setTransform(-5.4,-33.6,0.424,0.309);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#9FD423","#9FD423","#628412"],[0,0.51,1],-2.7,-44.8,3.3,60.8).s().p("AAfB7QAhjOgSh9Qgai8ibgmQgxgMg5AEIguAHIAAgyQCYgVBmA8QB2BGAkCsQAVBcAKB/IAODHQALBmAXA8QAeBKA7AnImLADQBjhrAmkGg");
	this.shape_34.setTransform(-3.1,-33.8,0.424,0.309);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#648612","#647F1C","#4E6215"],[0,0.51,1],-3,-52.2,2.3,47.1).s().p("AhvHhQBvhxArj6QAhi9gSh/Qgai8icgWQgxgHg5ALIguAMIAAhTQCZgVBlA8QB2BGAlCsQAUBaAJB3IAOC/QAJBkATA7QAZBKAwAqg");
	this.shape_35.setTransform(-5,-34.1,0.424,0.309);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#648612","#647F1C","#4E6215"],[0,0.51,1],-2.9,-50.9,2.4,48.4).s().p("AhVHyQBfh0Anj5QAgjGgSh0Qgdi9ipgmQg2gMg+AFIgyAHIAAhUQCfgUB2BMQCABSApCxQAVBZAKB3IAPC/QAKBlAVA6QAbBLA1Aqg");
	this.shape_36.setTransform(-2.6,-34.6,0.424,0.309);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#506515").s().p("ACwHoQhyg2hLjUQghhahKk1QgzjSiEhlQCNBeA8DWIBDDjQAnCGAnBTQBpDeCcACg");
	this.shape_37.setTransform(9.4,-34.3,0.424,0.309);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#506515").s().p("AjGG0QDQgyBskEQAphjAOhlQANhegOgyQgfhyg+g3Qgvgrg7gFQBDgFAuAeQBFAuAkCEQAOAygLBgQgMBogmBlQhlELjPAyg");
	this.shape_38.setTransform(-12,-32.7,0.424,0.309);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#4B620B","#8FC11F","#628412"],[0,0.51,1],-27.4,-48.4,-2.4,42.3).s().p("An2IIQDSgyBskEQAphjAOhnQANhcgOgyQgzi3h8gdQgmgKgqAIIghAJIAAinQCqgoCHBUQCRBcBADdIBCDkQApCFAoBUQBpDdCbADg");
	this.shape_39.setTransform(0.9,-35.3,0.424,0.309);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#2B380B","#33410C","#4F6610","#678514","#7A9E19","#89B21D","#94C01F","#9AC821","#9CCA21"],[0.333,0.349,0.408,0.471,0.541,0.616,0.702,0.812,1],-0.5,10.5,0,-1,-8.8,50.8).s().p("Ag2EQIgbhSQglhchlgWQizhAhvgYQjFgvi4AiQEVhaCYApQAjAJArAPQAgAFAggcQAXgVgkgiQgagZhIgqQhVgvgmgYQhDgpgVgcQAlAOCrAbQCeAaBLAkQBTAcA8AoQAdAVAOAOQAvgVBbgbICdgvQDAg8BDhDQgIAdg0ArQgMAKhcBEQhAAwgXAcQgfAnAWAaQAWAYAygOQAJgCBxgtQDWhVDLAYQjMASjLBqQi8BwhDAZQhwAZg/BMQgrAzgdBhQgUgegQgyg");
	this.shape_40.setTransform(0.7,-23,0.424,0.309);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#192106","#202A08","#38480F","#4C6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.51,0.522,0.573,0.627,0.69,0.761,0.847,1],-0.5,10.5,0,-1,-8.8,50.8).s().p("Ag5EXQgVgxgKgRQgqhEhngYQgsgNhZgmQhjgsgzgRQjDhDizAhQEXhaCGA4QAfAOAlAWQAbAKAfgcQAngliGhlQhNg3gjgbQg+gvgVgbQAlAOCrAbQCeAaBLAkQBTAcA8AoQAdAVAOAOQAvgVBbgbICdgvQDAg8BDhDQgIAlg0AwQgYAXhPA+QhCAygVAbQggAnAXAaQAVAYAzgRIB5g2QDUhgDNAYQjLASjMB8Qi7CChDAZQh1Aag7A5QguAtgaBVQgTgcgUgtg");
	this.shape_41.setTransform(0.7,-23,0.424,0.309);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],20.5,-13.8,0,6.4,43.2,131.3).s().p("AlqEFQijhHAbicQAYiKCLhpQCJhnCdAAQCVABCOBOQCJBMBYB8QAzBGgqBFQgkA8hkAyQhYAshzAbQhrAahPAAQjKAAh3g0g");
	this.shape_42.setTransform(27.9,-12.5,0.424,0.309);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FB781D").s().p("AlEGcQiVhZh0iiQhzihhAjRQgriOgOiYQAQCFApB9QBADBBzCTQB0CVCVBSQCcBUCoAAQCqAACahUQCWhSB0iVQB0iTA/jBQAph9AQiFQgOCYgrCOQg/DRh0ChQh0CiiWBZQiaBciqAAQioAAichcg");
	this.shape_43.setTransform(33.7,30.4,0.424,0.309);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FBEFB1").s().p("ADygSQijg7iyAAQkYAAiTBiQBBhQBpgpQBvgrCigBQCxAACgBOQCbBJB2CKQh/hrieg4g");
	this.shape_44.setTransform(30.7,-21.1,0.424,0.309);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],2.2,-103,0,0.5,-6.6,125.3).s().p("AlEQ2QiVhZh0iiQhziihAjSQhCjZAAjuQAAlgAGhmQANjoA0iMQBAioCFhTQCVhcD8ABQDOgBC8BcQC0BZCJCiQCJChBLDTQBNDYgBDuQABDuhCDZQg/DSh0CiQh0CiiWBZQiaBbiqABQiogBichbg");
	this.shape_45.setTransform(33.7,9.8,0.424,0.309);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-18.7,-10.2,0,-10.1,32.8,128.4).s().p("AknDuQjGhDA5iMQAxh4CVhiQCVhgCIAAQCGAABzBeQBtBcAkCAQApCTiSA/QhmAsi7AAQjKgBiMgug");
	this.shape_46.setTransform(-32.1,-12.7,0.424,0.309);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FB781D").s().p("AlDGaQiWhYh0iiQh0igg/jSQgqiNgPiWQAQCHApB/QA/DFB0CWQB0CYCWBTQCaBXCpAAQCpAACchXQCVhTB0iYQBziWBAjFQAph/AQiHQgPCWgqCNQhADShzCgQh0CiiVBYQicBcipAAQipAAiahcg");
	this.shape_47.setTransform(-33.7,30.4,0.424,0.309);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FBEFB1").s().p("AkXhXQCwhqDGAAQC2AAB4A9QBuA3A/BtQhHhIhuglQh2gnikABQjFgBiyBUQirBOiDCTQB5i2Cqhig");
	this.shape_48.setTransform(-32,-19.5,0.424,0.309);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-3.7,-103,0,-2,-6.6,125.3).s().p("AlDQ2QiWhZh0iiQh0iig/jSQhCjZAAjuQAAjuBNjYQBLjTCIihQCKiiC0hZQC8hcDOABQD8gBCVBcQCFBTBACoQA0CMANDoQAGBmAAFgQAADuhCDZQhADShzCiQh0CiiVBZQicBbipABQipgBiahbg");
	this.shape_49.setTransform(-33.7,9.8,0.424,0.309);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],22.9,-58.6,0,5.4,5,140).s().p("AkkSDQiHhfhpiuQhoiug6jgQg6jpAAj/QAAj9A6jpQA6jhBoiuQBpiuCHhfQCMhiCYAAQCZAACMBiQCHBfBpCuQBoCuA6DhQA6DpAAD9QAAD/g6DpQg6DhhoCtQhpCuiHBfQiMBiiZAAQiYAAiMhig");
	this.shape_50.setTransform(23.1,9.4,0.424,0.309);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-33.9,-70.8,0,-3.1,-9.7,118.6).s().p("AkkR4QiIhehoisQhoisg6jeQg7jnAAj9QAAj7A7jnQA6jfBoisQBoisCIheQCMhiCYAAQCZAACMBiQCHBeBpCsQBoCsA5DfQA8DnAAD7QAAD9g8DnQg5DehoCsQhpCsiHBeQiMBiiZAAQiYAAiMhig");
	this.shape_51.setTransform(-22.9,9,0.424,0.309);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["rgba(0,0,0,0)","rgba(252,147,32,0)","#FC9320","#FC911F","#FB6B1B","#FB541A","#FB4B19"],[0,0.808,0.808,0.808,0.875,0.925,0.961],0.9,12.1,0,-0.7,16.8,157).s().p("AkMSrQh9hjhgizQhgi0g0jpQg3jxAAkHQAAkGA3jxQA0jpBgizQBgi0B9hjQCAhlCMAAQCMAACBBlQB9BjBgC0QBgCzA0DpQA3DwAAEHQAAEIg3DwQg0DphgC0QhgCzh9BjQiBBliMAAQiMAAiAhlg");
	this.shape_52.setTransform(0,9.8,0.424,0.309);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB625","#FBA022","#FB841E","#FB611B","#FB4E19","#FB561A","#FB711C","#FC841E","#FC8F1F","#FC9320","rgba(252,147,32,0)","rgba(0,0,0,0)"],[0,0.169,0.286,0.392,0.482,0.573,0.655,0.69,0.698,0.722,0.749,0.776,0.808,0.808,1],0.9,12.1,0,-0.7,16.8,157).s().p("AkMSrQh9hjhgizQhgi0g0jpQg3jxAAkHQAAkGA3jxQA0jpBgizQBgi0B9hjQCAhlCMAAQCMAACBBlQB9BjBgC0QBgCzA0DpQA3DwAAEHQAAEIg3DwQg0DphgC0QhgCzh9BjQiBBliMAAQiMAAiAhlg");
	this.shape_53.setTransform(0,9.8,0.424,0.309);

	this.addChild(this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69,-51.3,138.1,102.8);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#A2D223","#415312"],[0.157,1],-5.2,5.8,0,-5.2,5.8,33.9).s().p("AiMgsQA1g/AwgSQA2gWB9AlQApAMAnAPQAiANgDABQiZAUhKAbQhwAniiB1QA0huA6hEg");
	this.shape.setTransform(-10.3,-19.3,0.424,0.309);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#A2D223","#415312"],[0.157,1],-3.6,5.8,0,-3.6,5.8,36.6).s().p("AgniJQgkggg5gLIgygDQBog2B5gIQBfgHAMALQBYBIiRDXQhIBshYBeQCMkahwhng");
	this.shape_1.setTransform(7.8,-15.8,0.424,0.309);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#2B380B","#39490F","#4D6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.475,0.51,0.573,0.643,0.725,0.824,1],-42.8,6.4,0,-42.8,6.4,72.9).s().p("AiMgrQBDhUAvgSQA2gVB9AkQApAMAnAPQAiAOgDAAQiEARhsAyQhwAyivB9QA1hvBGhVg");
	this.shape_2.setTransform(-10.9,-18.7,0.424,0.309);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#2B380B","#39490F","#4D6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.475,0.51,0.573,0.643,0.725,0.824,1],-19.3,8.5,0,-19.3,8.5,49.1).s().p("AgyiJQghgkg0gOIgvgIQBpg1B5gJQBegGANALQBYBIidDiQhOByheBkQCMkbhkhyg");
	this.shape_3.setTransform(7.8,-15.4,0.424,0.309);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAFQgDgCAAgDQAAgGAGAAQAHAAAAAGQAAAHgHAAQgBAAgCgCg");
	this.shape_4.setTransform(-48.4,21.9,0.424,0.309);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAKQgFgEAAgGQAAgFAFgEQAEgFAEAAQAFAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgFAAQgEAAgEgFg");
	this.shape_5.setTransform(-47.1,21.7,0.424,0.309);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],-1.9,5.3,0,-0.7,2.6,10.8).s().p("AgoAsQgRgSAAgaQAAgYARgUQARgSAXAAQAYAAARASQARATAAAZQAAAagRASQgRATgYAAQgXAAgRgTg");
	this.shape_6.setTransform(-47.6,22.5,0.424,0.309);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2381D").s().p("AguAzQgUgWAAgdQAAgdAUgVQAUgVAaAAQAcAAATAVQAUAVAAAdQAAAdgUAWQgTAVgcAAQgaAAgUgVg");
	this.shape_7.setTransform(-47.7,22.8,0.424,0.309);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgDQADgDACAAQADAAADADQACADAAADQAAAEgCADQgDADgDAAQgCAAgDgDg");
	this.shape_8.setTransform(-41.8,11.8,0.424,0.309);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAPQgFgHAAgIQAAgHAFgGQAFgHAGAAQAHAAAFAHQAFAGAAAHQAAAIgFAHQgFAGgHAAQgGAAgFgGg");
	this.shape_9.setTransform(-40.2,11.5,0.424,0.309);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],-2.2,7.3,0,-0.8,3.5,14.6).s().p("AgyA9QgVgZgBgkQABgjAVgZQAVgaAdAAQAdAAAWAaQAVAZABAjQgBAkgVAZQgWAagdAAQgdAAgVgag");
	this.shape_10.setTransform(-40.8,12.6,0.424,0.309);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2381D").s().p("Ag6BGQgYgdAAgpQAAgoAYgdQAZgdAhAAQAiAAAYAdQAZAdAAAoQAAApgZAdQgYAdgiAAQghAAgZgdg");
	this.shape_11.setTransform(-40.9,12.9,0.424,0.309);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAPQgEgHAAgIQAAgIAEgGQAFgGAFAAQAGAAAFAGQAEAGAAAIQAAAIgEAHQgFAGgGAAQgFAAgFgGg");
	this.shape_12.setTransform(-54.2,6,0.424,0.309);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAeQgJgNAAgRQAAgQAJgNQAJgNAMAAQANAAAJANQAJANAAAQQAAARgJANQgJANgNAAQgMAAgJgNg");
	this.shape_13.setTransform(-51.4,5.4,0.424,0.309);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],0,15.1,0,0,15.1,26.7).s().p("AhaCjQgmg0AAhJQAAhNBLhaQBEhUAtAAQAbAAAWBaQAUBTAABOQAABJgmA0QgmAzg1AAQg0AAgmgzg");
	this.shape_14.setTransform(-52.4,6.5,0.424,0.309);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F23E1B").s().p("AhnCyQgsg7AAhUQAAhYBPheQBIhZA9AAQAfgBAbBfQAZBaAABXQAABUgsA7QgrA7g9ABQg8gBgrg7g");
	this.shape_15.setTransform(-52.6,7.2,0.424,0.309);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-5.9,-13.5,0,-7.5,61.9,174.7).s().p("AkgFQQiVhbAZjJQAWizB/iGQB+iECNAAQCKAAB1CGQBwCAAlC3QAqDQiWBZQhoA9jAAAQi2AAhuhCg");
	this.shape_16.setTransform(-0.1,-2.6,0.424,0.309);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBEFB1").s().p("AExgtQiOhvijAAQiiAAiOBvQiKBohYC6QBTjhCLiBQCPiHClAAQCmAACPCHQCLCBBTDhQhYi6iKhog");
	this.shape_17.setTransform(0,-12.5,0.424,0.309);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FB7228").s().p("AjkB/QhgiMg2kAQA8DEBfBpQBjBwB8AAQB7AABjhxQBghrA9jHQg3EChhCOQhkCXh/AAQiAAAhkiVg");
	this.shape_18.setTransform(0,42.8,0.424,0.309);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FB7228").s().p("Al/B/QigiMhbkAQBnDLCdBzQCrCBDLAAQDJAACtiCQCch2BpjNQhcECihCOQipCXjVAAQjXAAioiVg");
	this.shape_19.setTransform(0,42.8,0.424,0.309);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-11.1,-139.3,0,-9.5,-23.6,150.5).s().p("AoXNNQjElCABn7QgBjxA6jeQA3jXBmimQBmilCChbQCIhfCUAAQCVAACIBfQCCBbBmClQBmCmA3DXQA6DegBDxQAAH4jIFFQhhCgiGBWQiKBYiiABQlNAAjKlPg");
	this.shape_20.setTransform(0,14.9,0.424,0.309);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],17.5,-8.3,0,5.8,46.8,135.5).s().p("Ak2EZQihhMAbioQAYiWCJhwQCHhvCYAAQCVAAB+BwQB5BsAnCZQAtCuihBKQhwA0jPAAQjEAAh2g4g");
	this.shape_21.setTransform(21.2,-6.8,0.424,0.309);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FBEFB1").s().p("ACogTQigg+i6AAQiaAAhlBcQBkifCvAAQC5AACcBRQCSBLBpCNQhyhviYg5g");
	this.shape_22.setTransform(21.1,-17,0.424,0.309);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FC861E").s().p("Ak5hCQBZCrCEAAQB6AABqhTQBlhMBNiSQhGC+hkBlQhoBth6AAQiRABhWkLg");
	this.shape_23.setTransform(22.2,43.6,0.424,0.309);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FC861E").s().p("AmACBQhkhDhJiAQCdCrDsAAQDZAAC9hTQC0hMCIiSQh9C+iwBlQi6BtjaAAQiEAAhphHg");
	this.shape_24.setTransform(22.2,43.6,0.424,0.309);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-2.2,-129.3,0,-0.7,-18,144.8).s().p("ApnM3QiKk2AAoBQAAoZBokdQB/lcEhAAQDLAAC2BdQCxBbCJCkQCICjBLDSQBNDYAADpQAADshCDWQhBDUh5ChQh8ClinBaQivBdjKAAQknABialdg");
	this.shape_25.setTransform(23,13.6,0.424,0.309);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-15.9,-10.3,0,-10,38.9,143.6).s().p("Ak2EZQihhMAbioQAYiWCJhwQCHhvCYAAQCUAAB+BwQB5BsAoCZQAtCuihBKQhxA0jOAAQjEAAh2g4g");
	this.shape_26.setTransform(-21,-6.1,0.424,0.309);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FBEFB1").s().p("Ai1hDQCbhRC5AAQCvAABkCfQhlhciaAAQi6AAigA+QiYA5hyBvQBpiNCThLg");
	this.shape_27.setTransform(-21.5,-17,0.424,0.309);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FC861E").s().p("AiCBfQhhhthIjCQBNCeBjBWQBmBcBrAAQCBAABVi1QhTEGiLAAQhrAAhlhyg");
	this.shape_28.setTransform(-21.9,43.6,0.424,0.309);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FC861E").s().p("AjuBfQizhsiDjDQCMCeC1BWQC7BcDGAAQDsAACbi1QhJB9hiBDQhoBGiCAAQjFAAi5hyg");
	this.shape_29.setTransform(-21.9,43.6,0.424,0.309);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-6.2,-139.7,0,-4.7,-24.6,149.7).s().p("Ai4Q8QikhbiBilQiCimhHjTQhLjbAAjoQAAjtBDjVQBEjXB+ihQCDioCzhaQC8hfDjAAQEhAACAFhQBoEfAAIbQAAICiKE6QiaFgknAAQi0AAirhgg");
	this.shape_30.setTransform(-22.9,13.6,0.424,0.309);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7B9D24").s().p("AgXAeQgIgNAAgTQAAgSAKgMQAJgMAMAAQAOAAAJAMQAJANAAATQAAASgJANQgJAPgOAAQgOgBgJgPg");
	this.shape_31.setTransform(-16.8,-48.4,0.424,0.309);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8DB428").s().p("AgrA4QgOgZAAgjQAAggARgXQARgXAXAAQAaAAARAYQAPAWAAAjQAAAigPAYQgRAagaAAQgbAAgQgbg");
	this.shape_32.setTransform(-16.8,-48.4,0.424,0.309);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#A7DE25","#719020","#80A224"],[0,0.584,1],-23.5,0,23.6,0).s().p("ACGCMQAPjggTiCQgbi9iqgtQg2gOg+ACIgzAFIAAgZQFKgdA6ElQATBiAECEQABAhgCC3QAAB0AKA0QAMBGAlAPIi4ABQBDhBAQkXg");
	this.shape_33.setTransform(-5.4,-33.6,0.424,0.309);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#9FD423","#9FD423","#628412"],[0,0.51,1],-2.7,-44.8,3.3,60.8).s().p("AAfB7QAhjOgSh9Qgai8ibgmQgxgMg5AEIguAHIAAgyQCYgVBmA8QB2BGAkCsQAVBcAKB/IAODHQALBmAXA8QAeBKA7AnImLADQBjhrAmkGg");
	this.shape_34.setTransform(-3.1,-33.9,0.424,0.309);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#648612","#647F1C","#4E6215"],[0,0.51,1],-3,-52.2,2.3,47.1).s().p("AhvHhQBvhxArj6QAhi9gSh/Qgai8icgWQgxgHg5ALIguAMIAAhTQCZgVBlA8QB2BGAlCsQAUBaAJB3IAOC/QAJBkATA7QAZBKAwAqg");
	this.shape_35.setTransform(-5,-34.2,0.424,0.309);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#648612","#647F1C","#4E6215"],[0,0.51,1],-2.9,-50.9,2.4,48.4).s().p("AhVHyQBfh0Anj5QAgjGgSh0Qgdi9ipgmQg2gMg+AFIgyAHIAAhUQCfgUB2BMQCABSApCxQAVBZAKB3IAPC/QAKBlAVA6QAbBLA1Aqg");
	this.shape_36.setTransform(-2.6,-34.7,0.424,0.309);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#506515").s().p("ACwHoQhyg2hLjUQghhahKk1QgzjSiEhlQCNBeA8DWIBDDjQAnCGAnBTQBpDeCcACg");
	this.shape_37.setTransform(9.4,-34.4,0.424,0.309);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#506515").s().p("AjGG0QDQgyBskEQAphjAOhlQANhegOgyQgfhyg+g3Qgvgrg7gFQBDgFAuAeQBFAuAkCEQAOAygLBgQgMBogmBlQhlELjPAyg");
	this.shape_38.setTransform(-12,-32.8,0.424,0.309);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#4B620B","#8FC11F","#628412"],[0,0.51,1],-27.4,-48.4,-2.4,42.3).s().p("An2IIQDSgyBskEQAphjAOhnQANhcgOgyQgzi3h8gdQgmgKgqAIIghAJIAAinQCqgoCHBUQCRBcBADdIBCDkQApCFAoBUQBpDdCbADg");
	this.shape_39.setTransform(0.9,-35.4,0.424,0.309);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#2B380B","#33410C","#4F6610","#678514","#7A9E19","#89B21D","#94C01F","#9AC821","#9CCA21"],[0.333,0.349,0.408,0.471,0.541,0.616,0.702,0.812,1],-0.5,10.5,0,-1,-8.8,50.8).s().p("Ag2EQIgbhSQglhchlgWQizhAhvgYQjFgvi4AiQEVhaCYApQAjAJArAPQAgAFAggcQAXgVgkgiQgagZhIgqQhVgvgmgYQhDgpgVgcQAlAOCrAbQCeAaBLAkQBTAcA8AoQAdAVAOAOQAvgVBbgbICdgvQDAg8BDhDQgIAdg0ArQgMAKhcBEQhAAwgXAcQgfAnAWAaQAWAYAygOQAJgCBxgtQDWhVDLAYQjMASjLBqQi8BwhDAZQhwAZg/BMQgrAzgdBhQgUgegQgyg");
	this.shape_40.setTransform(0.7,-23,0.424,0.309);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#192106","#202A08","#38480F","#4C6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.51,0.522,0.573,0.627,0.69,0.761,0.847,1],-0.5,10.5,0,-1,-8.8,50.8).s().p("Ag5EXQgVgxgKgRQgqhEhngYQgsgNhZgmQhjgsgzgRQjDhDizAhQEXhaCGA4QAfAOAlAWQAbAKAfgcQAngliGhlQhNg3gjgbQg+gvgVgbQAlAOCrAbQCeAaBLAkQBTAcA8AoQAdAVAOAOQAvgVBbgbICdgvQDAg8BDhDQgIAlg0AwQgYAXhPA+QhCAygVAbQggAnAXAaQAVAYAzgRIB5g2QDUhgDNAYQjLASjMB8Qi7CChDAZQh1Aag7A5QguAtgaBVQgTgcgUgtg");
	this.shape_41.setTransform(0.7,-23,0.424,0.309);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],20.5,-13.8,0,6.4,43.2,131.3).s().p("AlqEFQijhHAbicQAYiKCLhpQCJhnCdAAQCVABCOBOQCJBMBYB8QAzBGgqBFQgkA8hkAyQhYAshzAbQhrAahPAAQjKAAh3g0g");
	this.shape_42.setTransform(27.9,-12.6,0.424,0.309);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FB781D").s().p("AlEGcQiVhZh0iiQhzihhAjRQgriOgOiYQAQCFApB9QBADBBzCTQB0CVCVBSQCcBUCoAAQCqAACahUQCWhSB0iVQB0iTA/jBQAph9AQiFQgOCYgrCOQg/DRh0ChQh0CiiWBZQiaBciqAAQioAAichcg");
	this.shape_43.setTransform(33.7,30.3,0.424,0.309);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FBEFB1").s().p("ADygSQijg7iyAAQkYAAiTBiQBBhQBpgpQBvgrCigBQCxAACgBOQCbBJB2CKQh/hrieg4g");
	this.shape_44.setTransform(30.7,-21.1,0.424,0.309);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],2.2,-103,0,0.5,-6.6,125.3).s().p("AlEQ2QiVhZh0iiQhziihAjSQhCjZAAjuQAAlgAGhmQANjoA0iMQBAioCFhTQCVhcD8ABQDOgBC8BcQC0BZCJCiQCJChBLDTQBNDYgBDuQABDuhCDZQg/DSh0CiQh0CiiWBZQiaBbiqABQiogBichbg");
	this.shape_45.setTransform(33.7,9.8,0.424,0.309);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-18.7,-10.2,0,-10.1,32.8,128.4).s().p("AknDuQjGhDA5iMQAxh4CVhiQCVhgCIAAQCGAABzBeQBtBcAkCAQApCTiSA/QhmAsi7AAQjKgBiMgug");
	this.shape_46.setTransform(-32.1,-12.7,0.424,0.309);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FB781D").s().p("AlDGaQiWhYh0iiQh0igg/jSQgqiNgPiWQAQCHApB/QA/DFB0CWQB0CYCWBTQCaBXCpAAQCpAACchXQCVhTB0iYQBziWBAjFQAph/AQiHQgPCWgqCNQhADShzCgQh0CiiVBYQicBcipAAQipAAiahcg");
	this.shape_47.setTransform(-33.7,30.4,0.424,0.309);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FBEFB1").s().p("AkXhXQCwhqDGAAQC2AAB4A9QBuA3A/BtQhHhIhuglQh2gnikABQjFgBiyBUQirBOiDCTQB5i2Cqhig");
	this.shape_48.setTransform(-32,-19.5,0.424,0.309);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-3.7,-103,0,-2,-6.6,125.3).s().p("AlDQ2QiWhZh0iiQh0iig/jSQhCjZAAjuQAAjuBNjYQBLjTCIihQCKiiC0hZQC8hcDOABQD8gBCVBcQCFBTBACoQA0CMANDoQAGBmAAFgQAADuhCDZQhADShzCiQh0CiiVBZQicBbipABQipgBiahbg");
	this.shape_49.setTransform(-33.7,9.8,0.424,0.309);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],22.9,-58.6,0,5.4,5,140).s().p("AkkSDQiHhfhpiuQhoiug6jgQg6jpAAj/QAAj9A6jpQA6jhBoiuQBpiuCHhfQCMhiCYAAQCZAACMBiQCHBfBpCuQBoCuA6DhQA6DpAAD9QAAD/g6DpQg6DhhoCtQhpCuiHBfQiMBiiZAAQiYAAiMhig");
	this.shape_50.setTransform(23.1,9.3,0.424,0.309);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-33.9,-70.8,0,-3.1,-9.7,118.6).s().p("AkkR4QiIhehoisQhoisg6jeQg7jnAAj9QAAj7A7jnQA6jfBoisQBoisCIheQCMhiCYAAQCZAACMBiQCHBeBpCsQBoCsA5DfQA8DnAAD7QAAD9g8DnQg5DehoCsQhpCsiHBeQiMBiiZAAQiYAAiMhig");
	this.shape_51.setTransform(-22.9,9,0.424,0.309);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["rgba(0,0,0,0)","rgba(252,147,32,0)","#FC9320","#FC911F","#FB6B1B","#FB541A","#FB4B19"],[0,0.808,0.808,0.808,0.875,0.925,0.961],0.9,12.1,0,-0.7,16.8,157).s().p("AkMSrQh9hjhgizQhgi0g0jpQg3jxAAkHQAAkGA3jxQA0jpBgizQBgi0B9hjQCAhlCMAAQCMAACBBlQB9BjBgC0QBgCzA0DpQA3DwAAEHQAAEIg3DwQg0DphgC0QhgCzh9BjQiBBliMAAQiMAAiAhlg");
	this.shape_52.setTransform(0,9.8,0.424,0.309);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB625","#FBA022","#FB841E","#FB611B","#FB4E19","#FB561A","#FB711C","#FC841E","#FC8F1F","#FC9320","rgba(252,147,32,0)","rgba(0,0,0,0)"],[0,0.169,0.286,0.392,0.482,0.573,0.655,0.69,0.698,0.722,0.749,0.776,0.808,0.808,1],0.9,12.1,0,-0.7,16.8,157).s().p("AkMSrQh9hjhgizQhgi0g0jpQg3jxAAkHQAAkGA3jxQA0jpBgizQBgi0B9hjQCAhlCMAAQCMAACBBlQB9BjBgC0QBgCzA0DpQA3DwAAEHQAAEIg3DwQg0DphgC0QhgCzh9BjQiBBliMAAQiMAAiAhlg");
	this.shape_53.setTransform(0,9.8,0.424,0.309);

	this.addChild(this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69,-51.4,138.1,102.8);


(lib.text1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C01580").ss(2,1,1).p("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");
	this.shape.setTransform(-12.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,0,0.984)").s().p("Ab1EgIAABWIhcAAIAAjDIgcAHIgNheQBmgYBKAAQAzAAAmATQAwAYAAAuQAABLhLAjIA3BQIhWAugAb1CkIAAA9QBMgLAAgfQAAgMgTgFQgOgEgQAAIgbACgAejBnIBYgkIA9CQIA9iQIBYAkIiVEfgEgmPAFbQglgnAAg7QAAgeALiRIBeAHQgLCNAAAbQAAAsAnAAQAkAAAAgoQAAgcgLiOIBdgIQAMCSAAAgQAAA7gkAlQgkAmg6AAQg6AAgmgogEAqwAFYQgqgoAAg/QAAhJA3gyQA1gyBJAAQAzAAAfAMIgRBiQghgIgRAAQgoAAgaASQgfAVAAAnQAAAYAQANQAQANAZAAQAeAAAcgaQgWAAgwAEIgEhGICpgOQAFANAAAOQAABFgxAwQgxAwhFAAQg/AAgqgogAYgFWIhYACIgRAoIhXgkICUkfICVEfIhXAkgAXeEkIAsgBIgWgzgAR/FYQgqgoAAg/QAAhJA2gyQA1gyBJAAQA0AAAfAMIgSBiQghgIgQAAQgpAAgaASQgeAVAAAnQAAAVAOANQANAOAWAAQAyAAAng1IAkBUQgxA5hNAAQhAAAgpgogA8TF3IgEjFQgRAFgPAFIgMhcQBCgfB1AAQA3AAAmAXQAtAcAAA0QAAA4g4AnQgyAig7AAIgSgoIAAB3gA65CjIAABCQAbgEAUgJQAegOAAgUQAAgVgqAAIgjACgEgrTAF3IgDjFQgSAFgPAFIgMhcQBDgfB1AAQA3AAAlAXQAtAcAAA0QAAA4g4AnQgyAig7AAIgSgoIAAB3gEgp5ACjIAABCQAcgEAUgJQAegOAAgUQAAgVgrAAIgjACgA2PEYIgBBXIhXAAIgIkcIBigEIgBBaIBahbIA5AvIhTBlIBYBiIg2AygEAvmAFtQgUgLAAgTQAAgSAUgLQARgJAUAAQAUAAARAJQAVALAAASQAAATgVALQgRAJgUAAQgUAAgRgJgEAjWAD5QAAhDAFhlIBcADQgHBcAABMQAABKACArIhZADQgDg4AAhDgAzkD5QAAhDAGhlIBbADQgGBcAABMQAABKACArIhZADQgEg4AAhDgEghBADkQABAuAGBcIhXgEQgFg/AAhEIABiRIBlgEIA8B+IA9h+IBlAEIABCRQAABEgGA/IhWAEQAEgrAChfIhNCOgEAlZAFsQgGg+AAhFIABiSIBwgEIBTCYIAFiTIBYADIgFETIhpgBIhUiLIACBIQABAoAEAfgAxgFsQgHg+AAhFIABiSIBxgEIBSCYIAGiTIBYADIgGETIhpgBIhUiLIACBIQACAoADAfgEAvjAERQAFg+gBiBIBagCIABBSQAAAtgDBFgEgnjgBdQglgnAAg7QAAgeALiRIBeAHQgLCNAAAbQAAAsAnAAQAkAAAAgoQAAgcgLiOIBdgIQAMCSAAAgQAAA7gkAlQgkAmg6AAQg6AAgmgogEAqWgCgIAABWIhdAAIAAjDIgcAHIgMheQBmgYBKAAQAzAAAmATQAwAYAAAuQAABLhMAjIA4BQIhWAugEAqWgEcIAAA9QBMgLAAgfQAAgMgUgFQgNgEgRAAIgaACgAchiIIA2hFQASAUAXAOQAcARAWAAQAWAAAAgMQAAgKgrgRQg7gVgWgPQgrgcAAgnQAAgsAqgcQAlgYAtAAQAnAAAmAQQAoAQAXAdIg1BCQgmgigrAAQgaAAAAALQAAAJAnAQQA0AWAVAOQAnAbAAAhQAAAvgkAeQgiAbgwAAQhFAAhEhJgEgjAgBnQgqgnAAhAQAAhIA2gzQA1gxBJAAQA0AAAfAMIgSBiQghgJgQAAQgpAAgaATQgeAVAAAnQAAAVAOANQANANAWAAQAyAAAng0IAkBUQgxA4hNAAQhAAAgpgogEAnAgBqIhYACIgQAoIhYgkICVkfICVEfIhYAkgEAl/gCcIAsgBIgWgzgEAurgBFIgCjWIhSACIAChTID3gCIADBPIhJACIgGDYgEAiHgBFIgDjWIhSACIAChTID3gCIADBPIhIACIgHDYgAV3h1QgrguAAhBQAAhAArgvQAsgvBAAAQBAAAArAvQAsAvAABAQAABBgrAuQgsAwhAAAQhAAAgsgwgAW3kVQgQAWAAAbQAAAcAQAWQARAYAbAAQAbAAARgYQAQgWAAgcQAAgbgQgWQgRgZgbAAQgbAAgRAZgASghFIgCjWIhSACIAChTID3gCIADBPIhJACIgGDYgA21hFIgDjWIhSACIAChTID3gCIADBPIhIACIgHDYgEgsngB1QgrguAAhBQAAhAAsgvQArgvBAAAQBAAAAsAvQArAvAABAQAABBgrAuQgsAwhAAAQhAAAgsgwgEgrngEVQgQAWAAAbQAAAcAQAWQASAYAaAAQAbAAARgYQAQgWAAgcQAAgbgQgWQgRgZgbAAQgaAAgSAZgEgv9gBFIgDjWIhSACIAChTID3gCIADBPIhIACIgHDYgAulhOIgrAAQgGhMAAg8QAAg9AEhYIDfgDIABBXIiGAFIgBAOICIgBIACBGIiJAEIABAQICLgGIADBdQhKAGhkAAIgOAAgAxRhOIgBg5IhFADIAAA2IhYAAIgIkcIBjgEIgCChIBEAAIgCihIBiAEIgIEcgA8ZhOIAAg5IhFADIgBA2IhXAAIgIkcIBigEIgBChIBDAAIgCihIBjAEIgIEcg");
	this.shape_1.setTransform(-12.6,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-329.1,-40.4,633.1,80.8);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#75242C").s().p("Ao0EqIgDjHIgcAIIgGACIgLheQBDgdB2AAQAzAAAjARIAJAEQAfAVALAgQADAMAAAQQAAA6g5AnIgOAJQgsAag1AAIgSgqIAAB5gAnZBTIAABDQAcgEAVgJQAegOAAgUQAAgSgcgDIgPgBIgkACgAFdDVIgCgBQgdgeAAguQAAgXAJhvIBIAFQgJBsAAAVQABAIACAGQAEAUAYAAQAbAAAAgfQAAgVgIhuIBHgFIAEAyQAFBEAAASQAAAugbAdQgcAcgsAAQgsAAgcgdgAi5DPIhDADIgNAeIhDgbIBzjcIByDcIhDAbgAjqCpIAhAAIgQgogAJTDsIgCilIg/ACIABhAIC+gBIACA9Ig3ABIgFCngABzDNIgGgGQghgjAAgyQAAgxAhglQAighAxgBQAcAAAWAKQARAJAQAPQALANAIAOQANAbAAAgQAAAZgIAWQgJAVgPARQgiAmgxAAQgtgBgggfgACeBNQgNAQAAAVQABAUAKAQIACACQANATAVAAQAUAAANgTQANgQAAgWQAAgVgNgQQgLgQgPgDIgHAAQgVgBgNAUgAhDDQIAAgfQgPgFgNgKIgJgJQgIgHgFgKQgRgdAAgjQAAgtABgbIBIAHQgBAXAAAqQAAAJABAGQAGAUAWAAQAcAAAAgfQAAgtgCgZIBGgGIABAgIABAsQAAAegMAYIgEAHQgRAeggAKIAAAzIhCABIgBgVgAr8AOIgDjFIgcAIIgFACIgMheQBDgfB2AAQAzAAAjATIAJAFQAZAPALAXQAJASAAAYQAAAcgOAYQgOAZgdATQgyAkg9gBIgSgoIAAB2gAqhjHIAABDQAdgEATgJQAfgNAAgWQAAgQgcgDIgPgBIgkABgAm6g2IgCgBQgdgfAAguQAAgXAIhyIBKAGQgJBuAAAVQABAIACAGQAFAUAXAAQAcABAAggQAAgVgJhwIBJgGIAAAAQAKBygBAZQABAYgIATQgHASgNAOQgcAeguAAQgsAAgdgegAAzgiIgDiaIgZAIIgJhIQAzgYBcAAQAkAAAaANIALAFQAPAJAIANQAMARgBAXQABAVgKATQgLATgXAQQgnAbgvAAIgNggIAABdgAB6jHIAAAzQAVgDAQgHQAXgLAAgPQAAgQgdAAIgEAAIgbABgAFjhsIgBBEIhEABIgHjfIBOgCIgBBFIBGhGIAtAkIhCBPIBGBNIgrAngAHrg4QgCgkAAgoQAAg0AFhPIBHACQgFBIAAA7IAAANQAAAyABAdIhFACIgBgUgAi2iUIABAhIADBLIhDgEIgCgSQgDgoAAgsIABhyIBPgCIAvBiIAwhiIBNACIABA6IAAA4QAAA2gDAwIhDAEIACgWQACggABg2Ig9BvgAJQgqIgBgSQgEgoAAgsIAAhzIBYgDIBBB3IAFhzIBEADIgDDXIhTgCIhChsIABAbIABAeQABAfACAYg");
	this.shape.setTransform(171,53.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(89.6,23.8,162.8,59.9);


(lib.PumpkinSpinningAni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#A2D223","#415312"],[0.157,1],-5.2,5.8,0,-5.2,5.8,33.9).s().p("AiMgsQA1g/AwgSQA2gWB9AlQApAMAnAPQAiANgDABQiZAUhKAbQhwAniiB1QA0huA6hEg");
	this.shape.setTransform(371.1,203,2.679,1.949);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#A2D223","#415312"],[0.157,1],-3.6,5.8,0,-3.6,5.8,36.6).s().p("AgniJQgkggg5gLIgygDQBog2B5gIQBfgHAMALQBYBIiRDXQhIBshYBeQCMkahwhng");
	this.shape_1.setTransform(485.6,225.2,2.679,1.949);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#2B380B","#39490F","#4D6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.475,0.51,0.573,0.643,0.725,0.824,1],-42.8,6.4,0,-42.8,6.4,72.9).s().p("AiMgrQBDhUAvgSQA2gVB9AkQApAMAnAPQAiAOgDAAQiEARhsAyQhwAyivB9QA1hvBGhVg");
	this.shape_2.setTransform(367.6,206.8,2.679,1.949);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#2B380B","#39490F","#4D6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.475,0.51,0.573,0.643,0.725,0.824,1],-19.3,8.5,0,-19.3,8.5,49.1).s().p("AgyiJQghgkg0gOIgvgIQBpg1B5gJQBegGANALQBYBIidDiQhOByheBkQCMkbhkhyg");
	this.shape_3.setTransform(485.4,227.5,2.679,1.949);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAFQgDgCAAgDQAAgGAGAAQAHAAAAAGQAAAHgHAAQgBAAgCgCg");
	this.shape_4.setTransform(130.5,463.3,2.679,1.949);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAKQgFgEAAgGQAAgFAFgEQAEgFAEAAQAFAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgFAAQgEAAgEgFg");
	this.shape_5.setTransform(138.6,462.1,2.679,1.949);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],-1.9,5.3,0,-0.7,2.6,10.8).s().p("AgoAsQgRgSAAgaQAAgYARgUQARgSAXAAQAYAAARASQARATAAAZQAAAagRASQgRATgYAAQgXAAgRgTg");
	this.shape_6.setTransform(135.7,467.3,2.679,1.949);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2381D").s().p("AguAzQgUgWAAgdQAAgdAUgVQAUgVAaAAQAcAAATAVQAUAVAAAdQAAAdgUAWQgTAVgcAAQgaAAgUgVg");
	this.shape_7.setTransform(135.2,468.7,2.679,1.949);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgDQADgDACAAQADAAADADQACADAAADQAAAEgCADQgDADgDAAQgCAAgDgDg");
	this.shape_8.setTransform(172,399.2,2.679,1.949);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAPQgFgHAAgIQAAgHAFgGQAFgHAGAAQAHAAAFAHQAFAGAAAHQAAAIgFAHQgFAGgHAAQgGAAgFgGg");
	this.shape_9.setTransform(182.1,397.5,2.679,1.949);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],-2.2,7.3,0,-0.8,3.5,14.6).s().p("AgyA9QgVgZgBgkQABgjAVgZQAVgaAdAAQAdAAAWAaQAVAZABAjQgBAkgVAZQgWAagdAAQgdAAgVgag");
	this.shape_10.setTransform(178.5,404.6,2.679,1.949);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2381D").s().p("Ag6BGQgYgdAAgpQAAgoAYgdQAZgdAhAAQAiAAAYAdQAZAdAAAoQAAApgZAdQgYAdgiAAQghAAgZgdg");
	this.shape_11.setTransform(177.9,406.6,2.679,1.949);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAPQgEgHAAgIQAAgIAEgGQAFgGAFAAQAGAAAFAGQAEAGAAAIQAAAIgEAHQgFAGgGAAQgFAAgFgGg");
	this.shape_12.setTransform(93.6,362.7,2.679,1.949);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAeQgJgNAAgRQAAgQAJgNQAJgNAMAAQANAAAJANQAJANAAAQQAAARgJANQgJANgNAAQgMAAgJgNg");
	this.shape_13.setTransform(111.3,359,2.679,1.949);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],0,15.1,0,0,15.1,26.7).s().p("AhaCjQgmg0AAhJQAAhNBLhaQBEhUAtAAQAbAAAWBaQAUBTAABOQAABJgmA0QgmAzg1AAQg0AAgmgzg");
	this.shape_14.setTransform(105,366.1,2.679,1.949);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F23E1B").s().p("AhnCyQgsg7AAhUQAAhYBPheQBIhZA9AAQAfgBAbBfQAZBaAABXQAABUgsA7QgrA7g9ABQg8gBgrg7g");
	this.shape_15.setTransform(103.9,370.6,2.679,1.949);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-5.9,-13.5,0,-7.5,61.9,174.7).s().p("AkgFQQiVhbAZjJQAWizB/iGQB+iECNAAQCKAAB1CGQBwCAAlC3QAqDQiWBZQhoA9jAAAQi2AAhuhCg");
	this.shape_16.setTransform(436,308.4,2.679,1.949);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBEFB1").s().p("AExgtQiOhvijAAQiiAAiOBvQiKBohYC6QBTjhCLiBQCPiHClAAQCmAACPCHQCLCBBTDhQhYi6iKhog");
	this.shape_17.setTransform(436.4,245.9,2.679,1.949);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FB7228").s().p("AjkB/QhgiMg2kAQA8DEBfBpQBjBwB8AAQB7AABjhxQBghrA9jHQg3EChhCOQhkCXh/AAQiAAAhkiVg");
	this.shape_18.setTransform(436.3,595.3,2.679,1.949);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FB7228").s().p("Al/B/QigiMhbkAQBnDLCdBzQCrCBDLAAQDJAACtiCQCch2BpjNQhcECihCOQipCXjVAAQjXAAioiVg");
	this.shape_19.setTransform(436.2,595.3,2.679,1.949);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-11.1,-139.3,0,-9.5,-23.6,150.5).s().p("AoXNNQjElCABn7QgBjxA6jeQA3jXBmimQBmilCChbQCIhfCUAAQCVAACIBfQCCBbBmClQBmCmA3DXQA6DegBDxQAAH4jIFFQhhCgiGBWQiKBYiiABQlNAAjKlPg");
	this.shape_20.setTransform(436.4,419.2,2.679,1.949);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],17.5,-8.3,0,5.8,46.8,135.5).s().p("Ak2EZQihhMAbioQAYiWCJhwQCHhvCYAAQCVAAB+BwQB5BsAnCZQAtCuihBKQhwA0jPAAQjEAAh2g4g");
	this.shape_21.setTransform(570.1,281.7,2.679,1.949);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FBEFB1").s().p("ACogTQigg+i6AAQiaAAhlBcQBkifCvAAQC5AACcBRQCSBLBpCNQhyhviYg5g");
	this.shape_22.setTransform(569.4,217.5,2.679,1.949);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FC861E").s().p("Ak5hCQBZCrCEAAQB6AABqhTQBlhMBNiSQhGC+hkBlQhoBth6AAQiRABhWkLg");
	this.shape_23.setTransform(576.9,600.3,2.679,1.949);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FC861E").s().p("AmACBQhkhDhJiAQCdCrDsAAQDZAAC9hTQC0hMCIiSQh9C+iwBlQi6BtjaAAQiEAAhphHg");
	this.shape_24.setTransform(576.9,600.3,2.679,1.949);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-2.2,-129.3,0,-0.7,-18,144.8).s().p("ApnM3QiKk2AAoBQAAoZBokdQB/lcEhAAQDLAAC2BdQCxBbCJCkQCICjBLDSQBNDYAADpQAADshCDWQhBDUh5ChQh8ClinBaQivBdjKAAQknABialdg");
	this.shape_25.setTransform(581.9,411,2.679,1.949);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-15.9,-10.3,0,-10,38.9,143.6).s().p("Ak2EZQihhMAbioQAYiWCJhwQCHhvCYAAQCUAAB+BwQB5BsAoCZQAtCuihBKQhxA0jOAAQjEAAh2g4g");
	this.shape_26.setTransform(303.5,286.2,2.679,1.949);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FBEFB1").s().p("Ai1hDQCbhRC5AAQCvAABkCfQhlhciaAAQi6AAigA+QiYA5hyBvQBpiNCThLg");
	this.shape_27.setTransform(300.8,217.5,2.679,1.949);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FC861E").s().p("AiCBfQhhhthIjCQBNCeBjBWQBmBcBrAAQCBAABVi1QhTEGiLAAQhrAAhlhyg");
	this.shape_28.setTransform(297.7,600.2,2.679,1.949);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FC861E").s().p("AjuBfQizhsiDjDQCMCeC1BWQC7BcDGAAQDsAACbi1QhJB9hiBDQhoBGiCAAQjFAAi5hyg");
	this.shape_29.setTransform(297.7,600.2,2.679,1.949);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-6.2,-139.7,0,-4.7,-24.6,149.7).s().p("Ai4Q8QikhbiBilQiCimhHjTQhLjbAAjoQAAjtBDjVQBEjXB+ihQCDioCzhaQC8hfDjAAQEhAACAFhQBoEfAAIbQAAICiKE6QiaFgknAAQi0AAirhgg");
	this.shape_30.setTransform(291.6,411,2.679,1.949);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7B9D24").s().p("AgXAeQgIgNAAgTQAAgSAKgMQAJgMAMAAQAOAAAJAMQAJANAAATQAAASgJANQgJAPgOAAQgOgBgJgPg");
	this.shape_31.setTransform(330.1,18.8,2.679,1.949);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8DB428").s().p("AgrA4QgOgZAAgjQAAggARgXQARgXAXAAQAaAAARAYQAPAWAAAjQAAAigPAYQgRAagaAAQgbAAgQgbg");
	this.shape_32.setTransform(330.1,18.8,2.679,1.949);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#A7DE25","#719020","#80A224"],[0,0.584,1],-23.5,0,23.6,0).s().p("ACGCMQAPjggTiCQgbi9iqgtQg2gOg+ACIgzAFIAAgZQFKgdA6ElQATBiAECEQABAhgCC3QAAB0AKA0QAMBGAlAPIi4ABQBDhBAQkXg");
	this.shape_33.setTransform(402.2,112.3,2.679,1.949);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#9FD423","#9FD423","#628412"],[0,0.51,1],-2.7,-44.8,3.3,60.8).s().p("AAfB7QAhjOgSh9Qgai8ibgmQgxgMg5AEIguAHIAAgyQCYgVBmA8QB2BGAkCsQAVBcAKB/IAODHQALBmAXA8QAeBKA7AnImLADQBjhrAmkGg");
	this.shape_34.setTransform(416.5,111,2.679,1.949);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#648612","#647F1C","#4E6215"],[0,0.51,1],-3,-52.2,2.3,47.1).s().p("AhvHhQBvhxArj6QAhi9gSh/Qgai8icgWQgxgHg5ALIguAMIAAhTQCZgVBlA8QB2BGAlCsQAUBaAJB3IAOC/QAJBkATA7QAZBKAwAqg");
	this.shape_35.setTransform(404.5,109,2.679,1.949);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#648612","#647F1C","#4E6215"],[0,0.51,1],-2.9,-50.9,2.4,48.4).s().p("AhVHyQBfh0Anj5QAgjGgSh0Qgdi9ipgmQg2gMg+AFIgyAHIAAhUQCfgUB2BMQCABSApCxQAVBZAKB3IAPC/QAKBlAVA6QAbBLA1Aqg");
	this.shape_36.setTransform(420.2,105.8,2.679,1.949);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#506515").s().p("ACwHoQhyg2hLjUQghhahKk1QgzjSiEhlQCNBeA8DWIBDDjQAnCGAnBTQBpDeCcACg");
	this.shape_37.setTransform(495.7,107.6,2.679,1.949);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#506515").s().p("AjGG0QDQgyBskEQAphjAOhlQANhegOgyQgfhyg+g3Qgvgrg7gFQBDgFAuAeQBFAuAkCEQAOAygLBgQgMBogmBlQhlELjPAyg");
	this.shape_38.setTransform(360.8,117.7,2.679,1.949);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#4B620B","#8FC11F","#628412"],[0,0.51,1],-27.4,-48.4,-2.4,42.3).s().p("An2IIQDSgyBskEQAphjAOhnQANhcgOgyQgzi3h8gdQgmgKgqAIIghAJIAAinQCqgoCHBUQCRBcBADdIBCDkQApCFAoBUQBpDdCbADg");
	this.shape_39.setTransform(442.2,101.4,2.679,1.949);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#2B380B","#33410C","#4F6610","#678514","#7A9E19","#89B21D","#94C01F","#9AC821","#9CCA21"],[0.333,0.349,0.408,0.471,0.541,0.616,0.702,0.812,1],-0.5,10.5,0,-1,-8.8,50.8).s().p("Ag2EQIgbhSQglhchlgWQizhAhvgYQjFgvi4AiQEVhaCYApQAjAJArAPQAgAFAggcQAXgVgkgiQgagZhIgqQhVgvgmgYQhDgpgVgcQAlAOCrAbQCeAaBLAkQBTAcA8AoQAdAVAOAOQAvgVBbgbICdgvQDAg8BDhDQgIAdg0ArQgMAKhcBEQhAAwgXAcQgfAnAWAaQAWAYAygOQAJgCBxgtQDWhVDLAYQjMASjLBqQi8BwhDAZQhwAZg/BMQgrAzgdBhQgUgegQgyg");
	this.shape_40.setTransform(441,179.5,2.679,1.949);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#192106","#202A08","#38480F","#4C6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.51,0.522,0.573,0.627,0.69,0.761,0.847,1],-0.5,10.5,0,-1,-8.8,50.8).s().p("Ag5EXQgVgxgKgRQgqhEhngYQgsgNhZgmQhjgsgzgRQjDhDizAhQEXhaCGA4QAfAOAlAWQAbAKAfgcQAngliGhlQhNg3gjgbQg+gvgVgbQAlAOCrAbQCeAaBLAkQBTAcA8AoQAdAVAOAOQAvgVBbgbICdgvQDAg8BDhDQgIAlg0AwQgYAXhPA+QhCAygVAbQggAnAXAaQAVAYAzgRIB5g2QDUhgDNAYQjLASjMB8Qi7CChDAZQh1Aag7A5QguAtgaBVQgTgcgUgtg");
	this.shape_41.setTransform(441,179.5,2.679,1.949);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],20.5,-13.8,0,6.4,43.2,131.3).s().p("AlqEFQijhHAbicQAYiKCLhpQCJhnCdAAQCVABCOBOQCJBMBYB8QAzBGgqBFQgkA8hkAyQhYAshzAbQhrAahPAAQjKAAh3g0g");
	this.shape_42.setTransform(613,245.5,2.679,1.949);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FB781D").s().p("AlEGcQiVhZh0iiQhzihhAjRQgriOgOiYQAQCFApB9QBADBBzCTQB0CVCVBSQCcBUCoAAQCqAACahUQCWhSB0iVQB0iTA/jBQAph9AQiFQgOCYgrCOQg/DRh0ChQh0CiiWBZQiaBciqAAQioAAichcg");
	this.shape_43.setTransform(649.1,516.5,2.679,1.949);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FBEFB1").s().p("ADygSQijg7iyAAQkYAAiTBiQBBhQBpgpQBvgrCigBQCxAACgBOQCbBJB2CKQh/hrieg4g");
	this.shape_44.setTransform(630.4,191.4,2.679,1.949);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],2.2,-103,0,0.5,-6.6,125.3).s().p("AlEQ2QiVhZh0iiQhziihAjSQhCjZAAjuQAAlgAGhmQANjoA0iMQBAioCFhTQCVhcD8ABQDOgBC8BcQC0BZCJCiQCJChBLDTQBNDYgBDuQABDuhCDZQg/DSh0CiQh0CiiWBZQiaBbiqABQiogBichbg");
	this.shape_45.setTransform(649.1,386.7,2.679,1.949);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-18.7,-10.2,0,-10.1,32.8,128.4).s().p("AknDuQjGhDA5iMQAxh4CVhiQCVhgCIAAQCGAABzBeQBtBcAkCAQApCTiSA/QhmAsi7AAQjKgBiMgug");
	this.shape_46.setTransform(233.8,244.3,2.679,1.949);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FB781D").s().p("AlDGaQiWhYh0iiQh0igg/jSQgqiNgPiWQAQCHApB/QA/DFB0CWQB0CYCWBTQCaBXCpAAQCpAACchXQCVhTB0iYQBziWBAjFQAph/AQiHQgPCWgqCNQhADShzCgQh0CiiVBYQicBcipAAQipAAiahcg");
	this.shape_47.setTransform(223.7,516.8,2.679,1.949);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FBEFB1").s().p("AkXhXQCwhqDGAAQC2AAB4A9QBuA3A/BtQhHhIhuglQh2gnikABQjFgBiyBUQirBOiDCTQB5i2Cqhig");
	this.shape_48.setTransform(234.3,201.4,2.679,1.949);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-3.7,-103,0,-2,-6.6,125.3).s().p("AlDQ2QiWhZh0iiQh0iig/jSQhCjZAAjuQAAjuBNjYQBLjTCIihQCKiiC0hZQC8hcDOABQD8gBCVBcQCFBTBACoQA0CMANDoQAGBmAAFgQAADuhCDZQhADShzCiQh0CiiVBZQicBbipABQipgBiahbg");
	this.shape_49.setTransform(223.7,386.7,2.679,1.949);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],22.9,-58.6,0,5.4,5,140).s().p("AkkSDQiHhfhpiuQhoiug6jgQg6jpAAj/QAAj9A6jpQA6jhBoiuQBpiuCHhfQCMhiCYAAQCZAACMBiQCHBfBpCuQBoCuA6DhQA6DpAAD9QAAD/g6DpQg6DhhoCtQhpCuiHBfQiMBiiZAAQiYAAiMhig");
	this.shape_50.setTransform(582.6,383.6,2.679,1.949);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-33.9,-70.8,0,-3.1,-9.7,118.6).s().p("AkkR4QiIhehoisQhoisg6jeQg7jnAAj9QAAj7A7jnQA6jfBoisQBoisCIheQCMhiCYAAQCZAACMBiQCHBeBpCsQBoCsA5DfQA8DnAAD7QAAD9g8DnQg5DehoCsQhpCsiHBeQiMBiiZAAQiYAAiMhig");
	this.shape_51.setTransform(291.6,381.4,2.679,1.949);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["rgba(0,0,0,0)","rgba(252,147,32,0)","#FC9320","#FC911F","#FB6B1B","#FB541A","#FB4B19"],[0,0.808,0.808,0.808,0.875,0.925,0.961],0.9,12.1,0,-0.7,16.8,157).s().p("AkMSrQh9hjhgizQhgi0g0jpQg3jxAAkHQAAkGA3jxQA0jpBgizQBgi0B9hjQCAhlCMAAQCMAACBBlQB9BjBgC0QBgCzA0DpQA3DwAAEHQAAEIg3DwQg0DphgC0QhgCzh9BjQiBBliMAAQiMAAiAhlg");
	this.shape_52.setTransform(436.4,386.7,2.679,1.949);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB625","#FBA022","#FB841E","#FB611B","#FB4E19","#FB561A","#FB711C","#FC841E","#FC8F1F","#FC9320","rgba(252,147,32,0)","rgba(0,0,0,0)"],[0,0.169,0.286,0.392,0.482,0.573,0.655,0.69,0.698,0.722,0.749,0.776,0.808,0.808,1],0.9,12.1,0,-0.7,16.8,157).s().p("AkMSrQh9hjhgizQhgi0g0jpQg3jxAAkHQAAkGA3jxQA0jpBgizQBgi0B9hjQCAhlCMAAQCMAACBBlQB9BjBgC0QBgCzA0DpQA3DwAAEHQAAEIg3DwQg0DphgC0QhgCzh9BjQiBBliMAAQiMAAiAhlg");
	this.shape_53.setTransform(436.4,386.7,2.679,1.949);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53,p:{skewY:0,x:436.4}},{t:this.shape_52,p:{skewY:0,x:436.4}},{t:this.shape_51,p:{skewY:0,x:291.6}},{t:this.shape_50,p:{skewY:0,x:582.6}},{t:this.shape_49,p:{skewY:0,x:223.7}},{t:this.shape_48,p:{skewY:0,x:234.3}},{t:this.shape_47,p:{skewY:0,x:223.7}},{t:this.shape_46,p:{skewY:0,x:233.8}},{t:this.shape_45,p:{skewY:0,x:649.1}},{t:this.shape_44,p:{skewY:0,x:630.4}},{t:this.shape_43,p:{skewY:0,x:649.1}},{t:this.shape_42,p:{skewY:0,x:613}},{t:this.shape_41,p:{scaleX:2.679,skewY:0,x:441}},{t:this.shape_40,p:{scaleX:2.679,skewY:0,x:441}},{t:this.shape_39,p:{scaleX:2.679,skewY:0,x:442.2}},{t:this.shape_38,p:{scaleX:2.679,skewY:0,x:360.8}},{t:this.shape_37,p:{scaleX:2.679,skewY:0,x:495.7}},{t:this.shape_36,p:{scaleX:2.679,skewY:0,x:420.2}},{t:this.shape_35,p:{scaleX:2.679,skewY:0,x:404.5}},{t:this.shape_34,p:{scaleX:2.679,skewY:0,x:416.5}},{t:this.shape_33,p:{scaleX:2.679,skewY:0,x:402.2}},{t:this.shape_32,p:{scaleX:2.679,skewY:0,x:330.1}},{t:this.shape_31,p:{scaleX:2.679,skewY:0,x:330.1}},{t:this.shape_30,p:{skewY:0,x:291.6}},{t:this.shape_29,p:{skewY:0,x:297.7}},{t:this.shape_28,p:{skewY:0,x:297.7}},{t:this.shape_27,p:{skewY:0,x:300.8}},{t:this.shape_26,p:{skewY:0,x:303.5}},{t:this.shape_25,p:{skewY:0,x:581.9}},{t:this.shape_24,p:{skewY:0,x:576.9}},{t:this.shape_23,p:{skewY:0,x:576.9}},{t:this.shape_22,p:{skewY:0,x:569.4}},{t:this.shape_21,p:{skewY:0,x:570.1}},{t:this.shape_20,p:{skewY:0,x:436.4}},{t:this.shape_19,p:{skewY:0,x:436.2}},{t:this.shape_18,p:{skewY:0,x:436.3}},{t:this.shape_17,p:{skewY:0,x:436.4}},{t:this.shape_16,p:{skewY:0,x:436}},{t:this.shape_15,p:{skewY:0,x:103.9,y:370.6}},{t:this.shape_14,p:{skewY:0,x:105,y:366.1}},{t:this.shape_13,p:{skewY:0,x:111.3,y:359}},{t:this.shape_12,p:{skewY:0,x:93.6,y:362.7}},{t:this.shape_11,p:{skewY:0,x:177.9,y:406.6}},{t:this.shape_10,p:{skewY:0,x:178.5,y:404.6}},{t:this.shape_9,p:{skewY:0,x:182.1,y:397.5}},{t:this.shape_8,p:{skewY:0,x:172,y:399.2}},{t:this.shape_7,p:{skewY:0,x:135.2,y:468.7}},{t:this.shape_6,p:{skewY:0,x:135.7,y:467.3}},{t:this.shape_5,p:{skewY:0,x:138.6,y:462.1}},{t:this.shape_4,p:{skewY:0,x:130.5,y:463.3}},{t:this.shape_3,p:{skewY:0,x:485.4}},{t:this.shape_2,p:{skewY:0,x:367.6}},{t:this.shape_1,p:{skewY:0,x:485.6}},{t:this.shape,p:{skewY:0,x:371.1}}]}).to({state:[{t:this.shape_53,p:{skewY:180,x:436.3}},{t:this.shape_52,p:{skewY:180,x:436.3}},{t:this.shape_51,p:{skewY:180,x:581.1}},{t:this.shape_50,p:{skewY:180,x:290.1}},{t:this.shape_49,p:{skewY:180,x:649}},{t:this.shape_48,p:{skewY:180,x:638.4}},{t:this.shape_47,p:{skewY:180,x:649}},{t:this.shape_46,p:{skewY:180,x:638.9}},{t:this.shape_45,p:{skewY:180,x:223.6}},{t:this.shape_44,p:{skewY:180,x:242.3}},{t:this.shape_43,p:{skewY:180,x:223.6}},{t:this.shape_42,p:{skewY:180,x:259.7}},{t:this.shape_41,p:{scaleX:1.518,skewY:180,x:431.7}},{t:this.shape_40,p:{scaleX:1.518,skewY:180,x:431.7}},{t:this.shape_39,p:{scaleX:1.518,skewY:180,x:431}},{t:this.shape_38,p:{scaleX:1.518,skewY:180,x:477.2}},{t:this.shape_37,p:{scaleX:1.518,skewY:180,x:400.7}},{t:this.shape_36,p:{scaleX:1.518,skewY:180,x:443.5}},{t:this.shape_35,p:{scaleX:1.518,skewY:180,x:452.4}},{t:this.shape_34,p:{scaleX:1.518,skewY:180,x:445.6}},{t:this.shape_33,p:{scaleX:1.518,skewY:180,x:453.7}},{t:this.shape_32,p:{scaleX:1.518,skewY:180,x:494.6}},{t:this.shape_31,p:{scaleX:1.518,skewY:180,x:494.6}},{t:this.shape_30,p:{skewY:180,x:581.1}},{t:this.shape_29,p:{skewY:180,x:575}},{t:this.shape_28,p:{skewY:180,x:575}},{t:this.shape_27,p:{skewY:180,x:571.9}},{t:this.shape_26,p:{skewY:180,x:569.2}},{t:this.shape_25,p:{skewY:180,x:290.8}},{t:this.shape_24,p:{skewY:180,x:295.8}},{t:this.shape_23,p:{skewY:180,x:295.8}},{t:this.shape_22,p:{skewY:180,x:303.3}},{t:this.shape_21,p:{skewY:180,x:302.6}},{t:this.shape_20,p:{skewY:180,x:436.3}},{t:this.shape_19,p:{skewY:180,x:436.5}},{t:this.shape_18,p:{skewY:180,x:436.4}},{t:this.shape_17,p:{skewY:180,x:436.3}},{t:this.shape_16,p:{skewY:180,x:436.7}},{t:this.shape_15,p:{skewY:180,x:454.3,y:422.8}},{t:this.shape_14,p:{skewY:180,x:453.1,y:418.3}},{t:this.shape_13,p:{skewY:180,x:446.8,y:411.2}},{t:this.shape_12,p:{skewY:180,x:464.6,y:414.9}},{t:this.shape_11,p:{skewY:180,x:380.3,y:458.8}},{t:this.shape_10,p:{skewY:180,x:379.6,y:456.8}},{t:this.shape_9,p:{skewY:180,x:376.1,y:449.7}},{t:this.shape_8,p:{skewY:180,x:386.2,y:451.4}},{t:this.shape_7,p:{skewY:180,x:422.9,y:520.9}},{t:this.shape_6,p:{skewY:180,x:422.4,y:519.5}},{t:this.shape_5,p:{skewY:180,x:419.5,y:514.3}},{t:this.shape_4,p:{skewY:180,x:427.6,y:515.5}},{t:this.shape_3,p:{skewY:180,x:387.3}},{t:this.shape_2,p:{skewY:180,x:505.1}},{t:this.shape_1,p:{skewY:180,x:387.1}},{t:this.shape,p:{skewY:180,x:501.6}}]},1).to({state:[{t:this.shape_53,p:{skewY:180,x:436.3}},{t:this.shape_52,p:{skewY:180,x:436.3}},{t:this.shape_51,p:{skewY:180,x:581.1}},{t:this.shape_50,p:{skewY:180,x:290.1}},{t:this.shape_49,p:{skewY:180,x:649}},{t:this.shape_48,p:{skewY:180,x:638.4}},{t:this.shape_47,p:{skewY:180,x:649}},{t:this.shape_46,p:{skewY:180,x:638.9}},{t:this.shape_45,p:{skewY:180,x:223.6}},{t:this.shape_44,p:{skewY:180,x:242.3}},{t:this.shape_43,p:{skewY:180,x:223.6}},{t:this.shape_42,p:{skewY:180,x:259.7}},{t:this.shape_41,p:{scaleX:2.679,skewY:180,x:431.7}},{t:this.shape_40,p:{scaleX:2.679,skewY:180,x:431.7}},{t:this.shape_39,p:{scaleX:2.679,skewY:180,x:430.5}},{t:this.shape_38,p:{scaleX:2.679,skewY:180,x:511.9}},{t:this.shape_37,p:{scaleX:2.679,skewY:180,x:377}},{t:this.shape_36,p:{scaleX:2.679,skewY:180,x:452.5}},{t:this.shape_35,p:{scaleX:2.679,skewY:180,x:468.2}},{t:this.shape_34,p:{scaleX:2.679,skewY:180,x:456.2}},{t:this.shape_33,p:{scaleX:2.679,skewY:180,x:470.5}},{t:this.shape_32,p:{scaleX:2.679,skewY:180,x:542.6}},{t:this.shape_31,p:{scaleX:2.679,skewY:180,x:542.6}},{t:this.shape_30,p:{skewY:180,x:581.1}},{t:this.shape_29,p:{skewY:180,x:575}},{t:this.shape_28,p:{skewY:180,x:575}},{t:this.shape_27,p:{skewY:180,x:571.9}},{t:this.shape_26,p:{skewY:180,x:569.2}},{t:this.shape_25,p:{skewY:180,x:290.8}},{t:this.shape_24,p:{skewY:180,x:295.8}},{t:this.shape_23,p:{skewY:180,x:295.8}},{t:this.shape_22,p:{skewY:180,x:303.3}},{t:this.shape_21,p:{skewY:180,x:302.6}},{t:this.shape_20,p:{skewY:180,x:436.3}},{t:this.shape_19,p:{skewY:180,x:436.5}},{t:this.shape_18,p:{skewY:180,x:436.4}},{t:this.shape_17,p:{skewY:180,x:436.3}},{t:this.shape_16,p:{skewY:180,x:436.7}},{t:this.shape_15,p:{skewY:180,x:768.8,y:370.6}},{t:this.shape_14,p:{skewY:180,x:767.7,y:366.1}},{t:this.shape_13,p:{skewY:180,x:761.4,y:359}},{t:this.shape_12,p:{skewY:180,x:779.1,y:362.7}},{t:this.shape_11,p:{skewY:180,x:694.8,y:406.6}},{t:this.shape_10,p:{skewY:180,x:694.2,y:404.6}},{t:this.shape_9,p:{skewY:180,x:690.6,y:397.5}},{t:this.shape_8,p:{skewY:180,x:700.7,y:399.2}},{t:this.shape_7,p:{skewY:180,x:737.5,y:468.7}},{t:this.shape_6,p:{skewY:180,x:737,y:467.3}},{t:this.shape_5,p:{skewY:180,x:734.1,y:462.1}},{t:this.shape_4,p:{skewY:180,x:742.2,y:463.3}},{t:this.shape_3,p:{skewY:180,x:387.3}},{t:this.shape_2,p:{skewY:180,x:505.1}},{t:this.shape_1,p:{skewY:180,x:387.1}},{t:this.shape,p:{skewY:180,x:501.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,872.7,649.2);


(lib.pronoTextAnim = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C01580").ss(1,1,1).p("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");
	this.shape.setTransform(104.3,52.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("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");
	this.shape_1.setTransform(104.3,52.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_2.setTransform(103.3,54.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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");
	this.shape_3.setTransform(103.3,54.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,8.5,207.3,89.9);


(lib.foxAnimatedNoHead = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#352B39").s().p("AGvE6QjPm8EEi3IAxCAIAhDiIg2DAIgzBRgAnvE6IgmhQIggjEIA4jeIA8h7QCsDbi6GSg");
	this.shape.setTransform(51.1,123.8);

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqMBxIBPnKIErhiIBwAUQDbBSCZheIBugbIFNCgIgDELIAAHwI0RADg");
	mask.setTransform(49.5,109.1);

	// Layer 2
	this.instance = new lib.head1pngcopy();
	this.instance.setTransform(-3,-4);

	this.instance.mask = mask;

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.6,0,124.9,158.1);


(lib.foxAnimated = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#352B39").s().p("AGvE6QjPm8EEi3IAxCAIAhDiIg2DAIgzBRgAnvE6IgmhQIggjEIA4jeIA8h7QCsDbi6GSg");
	this.shape.setTransform(51.1,123.8);

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqMGtIBPnKIErhhIhPnDIANjKILZABQAfALABDLIhlGiIFNCeIgDEMIAAHyI0RACg");
	mask.setTransform(49.5,77.5);

	// Layer 2
	this.instance = new lib.head1pngcopy();
	this.instance.setTransform(-3,-4);

	this.instance.mask = mask;

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.6,-0.6,113.4,156.1);


(lib.Path_14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDD75F","#DDAC5E","#C88C58","#784834"],[0,0.345,0.675,1],0,0,0,0,0,109.2).s().p("A25A2IDSAAIi4glIBhh8QMjgbHagRQD8gGJ+ALQE/AGENAGIAhBTQhRAKhuAGQjaAMiKgOQj0gaEFAiQDIAaB4ACQBzABA7AHQAeAEAGADIgKA5IBaAAIAKA4IpkgLQqsgLlnACQloACo0AXQkaALjSALg");
	this.shape.setTransform(153.7,15.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,307.4,30.9);


(lib.Path_13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDD75F","#DDAC5E","#C88C58","#784834"],[0,0.345,0.675,1],-0.6,-23,0,-0.6,-23,253).s().p("EgqcABXID1hQIibgXIBziMQDMgDFIACQKQAEJuAWQIGAQJ7ADIN1ABQEaAAHQgZQDpgMCwgNICqCRIj1AcIEEAeIBpBaUgk9AAZgORAAAQuTAA1aAFg");
	this.shape.setTransform(278.3,16.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,556.5,32.5);


(lib.Path_12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDD75F","#DDAC5E","#C88C58","#784834"],[0,0.345,0.675,1],-0.5,-24.7,0,-0.5,-24.7,222.1).s().p("AMMCuQr1gEpPgbQnfgWrjgVQlxgLkSgGIAQgyIF8gmIlugPIBQhkQAzgFEOAAQCLAAIagUQIbgUByAAQB1AAIBgGQH5gFDZAGQC4AFFMgDQE1gCB4AFQCZAGENgFQCHgCBngEICHC8IkwA3IESAAIAkAoIiBAHQi0ALkBAWQkCAWpuAAIjMgBg");
	this.shape.setTransform(243,17.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,486,35.1);


(lib.Path_11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDD75F","#DDAC5E","#C88C58","#784834"],[0,0.345,0.675,1],0,0,0,0,0,154.8).s().p("EghfACqINpglItzADQgNAABkh0IHFg+ImdARIA4hrQBUAIByAFQDmAKCcgNQEOgVC4gJQEhgOCnALQCMAJDegWQESgcB9gCQCZgEEmgSQEFgMDKAbQDOAbE0gEQCZgCBxgIIBhCgIh4A0ICjAUIA+CLQusAKo/AAQk5AAoWADIq4ACQlyAAudAeg");
	this.shape.setTransform(217.8,22.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,435.5,45);


(lib.Path_10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDD75F","#DDAC5E","#C88C58","#784834"],[0,0.345,0.675,1],0,0,0,0,0,132).s().p("A8kCTIHwgoIimgkIAGglIFbg3IpRA0IAGgtIIChTInJAGIANg/QRIgvLSAKQLaAKMJAEIBrCWIjwA9IE2AyIAQA5IhWADIm8gSQnfgRjjACQleADvZAlIx0Arg");
	this.shape.setTransform(185.7,19.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,371.4,38.8);


(lib.Path_9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDD75F","#DDAC5E","#C88C58","#784834"],[0,0.345,0.675,1],0,0,0,0,0,168.8).s().p("EglEgAIQCcACCzABQFlABBxgKIoIgdIA8hHQPtAkJOAJQGEAHHSgHQDEgDK6gQQKAgPEngFIBzBFIomA7QISATAZAAQAPABgDAgQgCARgFAPMhKWAALg");
	this.shape.setTransform(238.4,11.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476.8,23);


(lib.Path_8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDD75F","#DDAC5E","#C88C58","#784834"],[0,0.345,0.675,1],0,0,0,0,0,153.1).s().p("AHyCQQoNgGl5gQQo/gZx0gjIAAgeQNJgPAOgFQAQgFuPgcIAahGQEDAMfRggQPqgQO2gTIBRCRI98AwQEAAPVGAKIAUA3QgeAFhWAFQirAKkWAAQn7AAksgDg");
	this.shape.setTransform(216,14.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,432,29.5);


(lib.Path_7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDD75F","#DDAC5E","#C88C58","#784834"],[0,0.345,0.675,1],0,0,0,0,0,133.3).s().p("AnNCeQlYgSo6gFQkdgDjYABIAKhLQBygWCGgYQENgtBngHIoSAPIAFgyIG1gMQHmgLD3ADQDzADFOgZQCygOERgYQDFgNEFABQEvABDbAVQDFATCSAFQBKADAhgCIAUBuQjFAAj1gDQnrgGjtgQQCeAcG3AoQGjAoBjAAIAABBQmyANn2AJQniAIlKAAQlkAAizgKg");
	this.shape.setTransform(187.8,16.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,375.5,33.7);


(lib.Path_6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDD75F","#DDAC5E","#C88C58","#784834"],[0,0.345,0.675,1],-0.3,-19.1,0,-0.3,-19.1,134.2).s().p("AG7B2QvqgNj4AGQmdAKjFADIglhTIJSgYQhggLh2gHQjsgThuAGIBWhuIN7gFQO2gDEwAIQHJAHCWgEIAkBXIplAXIIjA0QANBWgKAEg");
	this.shape.setTransform(145.5,13.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,291,26.3);


(lib.Path_5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDD75F","#DDAC5E","#C88C58","#784834"],[0,0.345,0.675,1],-0.2,-16.3,0,-0.2,-16.3,105.4).s().p("AGEBjQsWgMkZAEQmqAHgLADIgRhGIG4geImkgmIAUg4IB1ADQPwgXElADQEmADGTAHIgDA1IomAHIEYAaQEsAcBdAOIgOBTIrggMg");
	this.shape.setTransform(113.9,11.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,227.7,22.4);


(lib.Path_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDD75F","#DDAC5E","#C88C58","#784834","#5F3725"],[0,0.29,0.541,0.824,1],-122.4,-71,0,-122.4,-71,353.4).s().p("Ao1BPQjsgagBgpQAAgoDqggQDrghFNgGQFLgFDrAaQDsAZABAqQABAnjrAhQjrAhlNAFIhvABQkFAAjCgVg");
	this.shape.setTransform(80.3,10.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160.7,20.2);


(lib.Path_1_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDD75F","#DDAC5E","#C88C58","#784834","#5F3725"],[0,0.29,0.541,0.824,1],-73.3,-42.5,0,-73.3,-42.5,211.6).s().p("AlSAvQiNgPgBgZQAAgXCNgUQCNgTDGgDQDFgECOAQQCNAQABAYQAAAXiNATQiMAUjHAEIg9AAQifAAh3gNg");
	this.shape.setTransform(48.1,6.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96.2,12.1);


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDD75F","#DDAC5E","#C88C58","#784834","#5F3725"],[0,0.29,0.541,0.824,1],-61,-60.9,0,-61,-60.9,204.6).s().p("AgMAjQmHgzAAgcQAAgcFogIQCxgDC0ABIBaB5IgbAsQjDgVjCgbg");
	this.shape.setTransform(40.4,8.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.8,16.7);


(lib.Path_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDD75F","#DDAC5E","#C88C58","#784834","#5F3725"],[0,0.29,0.541,0.824,1],-42.2,-24.5,0,-42.2,-24.5,122).s().p("AjCAbQhSgJAAgOQAAgMBRgMQBRgLBygCQBygCBRAJQBSAJAAAOQAAANhRALQhRALhzACIgeAAQhfAAhFgHg");
	this.shape.setTransform(27.7,3.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55.5,7);


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDD75F","#DDAC5E","#C88C58","#784834","#5F3725"],[0,0.29,0.541,0.824,1],-29.9,-26.9,0,-29.9,-26.9,97.4).s().p("AACAfQjDgNgEgdQgEgfC0AJQBYAEBbALIAoA3QhiAAhigGg");
	this.shape.setTransform(19.8,3.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39.7,7.4);


(lib.Group_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C3828").s().p("AFpAHQgGABgCgBIABgBIgDABIAAAAIg4AAIABgBQgQgBgHABIAAgBIgXAAIAAgBIgDABQgOgCgFABIABAAQgUABgJgCIABAAIgIAAIABgBQgGABgIgBQgJgBgEABIgDAAQABACgIgBIABAAQgHABgNgBQgNgCgGABIgBAAIgTAAQglgCgRABIAAAAIgUAAQgNAAgHABQgTgBgZABIAAgBQgCABgDAAIgHAAIAAgBQgPABgIgBIABgBIgGABIABgBQg+ACgegBQAAAAABAAQAAAAAAAAQAAAAABAAQAAgBAAAAIgDABIAAgBIgKAAIAAAAQgHAAgDAAIAAAAIgIACQgigDgZACQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDAAIgTABQgGAAgBgBQgFAAgOAAIABAAQgFABgLgBIgJAAIgKABIgWgBIgBAAIgGAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgDAAgCAAQgHAAgDgBQABABgGAAIgZAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBAAIgCAAIgDAAQgEgBgDAAIgBgCIgBABIgCgBIABgCQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIAEAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABABAAIAAAAQAAAAAAABQAAAAABAAQAAAAABABQAAAAABAAQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIABgBQAAAAAAAAQAAABABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAIAAAAQACACAEgCQAFgBACABIgBAAIASABQAMACAGgBQAMABAXAAIAkAAQA0gEAaAEQAGABAPgBQAQgBAHABQAKABAXgBIAhgBIAfABIAgABIAAAAIBNAAIAgAAQAWAAALAAIAaAAIgBAAQAWAABGAAIArABQAZABARACIAEgBQAIABAHgBIASABQAKABAGgBIBAACIAEgBQACABAGAAIASAAIABABQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAIAAABIACAAQgUgBgLABIAAgBQgYABgXgBQAAABABAAQAAAAAAAAQgBAAAAABQAAAAgBAAIgGgBg");
	this.shape.setTransform(367,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C3828").s().p("AHQAJIAAgBQAAgBAAAAQAAAAAAgBQgBAAgBAAQAAAAgBAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAIgCABQAAgBAAAAQAAAAAAAAQgBgBAAAAQgBAAgBABIAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAgBABIgDAAQgCgBgEAAQgFABgCgBIAAABIgTgDQgLgCgHABQgNgCgYAAIglAAQg4ABgZgDQgHgBgQABQgQAAgHgBIgjABQgXABgLgBQgLAAgWgBIghgBIhRgBQgKABgXgBQgWAAgMABIAAAAIgbAAIAAAAQgXAChJAAQg7ABgegBIgEABIgPABIAAgBQgZgBgKACIhDAAIgEABQgIAAgBgBIgTABQABAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgCABIgCAAIABgBQgIACgEgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAhAAAIAAIABAAIAwgBQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAHAAQAGgBACABQgBAAABAAIADgBIgBABIA7gDIgBABIAMgBQAIABAEgBIAAABIAYgCIAAABIADAAIAAAAIAUgBIgCABIAPgBQAKAAAFABIAAAAQADABAFgBIAAAAQAFgBAKABQAIABAFgCIACABQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAFgBIgBABQAHgBANAAQAOABAHgBIAAAAIAVAAIAcAAQASABAJgBIAAAAIAWAAIAUgBQAfABAQgBIAAABQABgCAEABIAHAAIAAABIAYAAIgBABIAGgBIgBAAQAgABBAgBIgCABIADgBIAAABQAEgBAHABIAAAAIAKACIAIgEIAAABQAnAFAXgDQAAACAGgBIATAAQAHABABABQAEgBAPAAIAAABIAQABQADgBAHAAIAKAAIAXACIABAAQABAAAFAAQAEAAABAAQACAAADAAQADAAACAAIgBAAQAJAAACACQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAEAAIAaABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABIAAAAQAEABACgBIAHADIABABIABgBQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIgBACQAAABgGAAQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAgBAAgAC3gHIAAAAIAAAAg");
	this.shape_1.setTransform(278.9,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C3828").s().p("AgBABIADgBIAAAAIgCAAIAAABIgBAAg");
	this.shape_2.setTransform(231,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C3828").s().p("AMFAQQABgBABAAQAAAAABAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgCgGAAQgGAAAAgBIgEAAQABAAgBAAQAAgBAAAAQgBAAgBAAQgBAAgBAAIgBABQgBgBgEABQgFABgCgBIABAAQgCgBgIAAQgIABgEgBIABAAQgJAAgXgDQgTgCgLAAQgXgDgmgBIg/gBIhDgBQgngBgdgEQgLgCgaABIgngBQgVgCglAAIg6AAIg3gBQgigBgUABIAAAAIiIAIIgbACIgdABIhmABIABgBQgjADgtAAIhRgBQhjAAgxgBIgHABIgZAAIABAAIgfAAQgTgBgKACIhwACIgGABQgNAAgCgBIgPABIgQABQAAgBAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAIgDAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAgBAAIABgBIgKABIgKAAQAAAAABAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAzAAATgDQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIBRgDIABgBIAMAAQAKAAAEAAIgCABIAGgBIgCAAQBMAAAVAAIABAAIAUAAQAMAAAHAAIAAAAIAoAAIAAAAIAFAAIAAAAIAhAAIgCAAIAZAAQAQgBAJABIgBAAQAGAAAIAAIgBAAQAJAAAQAAQAOAAAIAAIAEAAQAAAAAAAAQABAAAAAAQABAAABAAQABAAABAAIAIgBIgCABQALgBAYABQAWAAAMgBIAAABIAjgBQBNgBAPgBIAAAAIAkgCQAWgCAMgCIBPgFIAAABQAEgDAQABIABABIgBAAIAnAAIAKgBIgCABIBQgBIBOACIgBABIAFgBIAAABQAHgBALABIgBABIASABIANgDQBCAHAlgCQAAACAKgBIAhABQAKABACACQAJgBAXABIABAAQAKgBAQADQAFgBALABIAQAAIAoABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAABAAQACgBAIABQAHABABgBQAEABAEAAQAFgBAEABIgBABQANAAAFADQAAgBAAAAQAAAAAAAAQAAAAABAAQABAAAAAAIAHAAIArACQAEgBACABIABABQAHABADgBIAMADIABABIACgBQABAAAAABQABAAAAAAQAAAAAAABQABAAgBAAIgCACIgDABIgGAAg");
	this.shape_3.setTransform(343.8,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C3828").s().p("AvgAUIgCgBIgBACQgBAAgBAAQgBgBAAAAQgBAAAAAAQAAAAAAgBIACgCQgCgCAOAAQgBAAgBAAQgBABAAAAQAAAAAAAAQAAAAAAAAQABABgBAAQABABAHAAQAIgBAAABIADAAIACgBIACAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAABAAIAAgBQACABAFgCQAGgCACAAIgBAAQAEABAJgBQAKgCAFAAIgBAAIApgCQAZAAANgCQAagBA1gEQA0gDAbAAQBzgLA5ABIAwgCQAigDAQABQAZAAAxgDIBJgDQAXgBAvACIBFABIAAAAICvADQAWAAAxADIBIACIAAAAQATAAAnADIgCAAQAsABA6ADIBnAFIBfAGIAvACQAYAAAXACIAIgBQARABAPgBIAoABQAXABANgBICOABIAIgBIAUABIAogCQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAGABACgBIgBAAIAMAAIAOgBQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABQhHAAgSABQABAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIhnABIAAABIgCAAIgPAAQgNAAgEgBIABAAIgGABIABgBIh9AAIABAAQgigBgQABIABgBIg0gCIAAAAIgHAAIABgBQgggCgKABIACgBIgggBQgUAAgMgCIACAAQgEgBgOAAIABgBQgLABgUgDQgSgBgLAAIgFAAQACACgSgCIACAAQgPAAgdgBQgegCgNAAIgBgBIgsgCQhQgFgmAAIAAAAQgOAAgfgBQgegCgOABQg4gCgtABQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAgBAAQgDABgHAAIgQAAIAAgBIABAAQgiAAgRgBIABAAIgNABIACgBIjKAGIACgBIgFAAIgBAAQgEABgIgBIgLABIABgBIgWAAIAAgBIgRAFIAAgBQhGgBg9AHQAAgBgGABIgHAAIgqACQgNAAgDAAQgHAAgiACIACAAQgJABgbAAQgFACgOABIgVACIgzACIgBgBQgDACgKAAQgJABgBABQgFgBgFABIgKAAIgBAAIAAAAQgQACgHgCQADABgOABIg3AFQABgBAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIgFABIgBAAQgJAAgEABQgHgBgJAAg");
	this.shape_4.setTransform(322.6,8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C3828").s().p("AnMAbIgeAAIABAAIgZgCQgEACgLgCIgPAAIgkgEIgBAAQgCAAgHAAIgHAAQgEgCgEABQgEAAgEgBIABAAQgNgCgEgDQADACgLgBIgogEIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIAAgBIgKgBQgFgDgFgBIgCgBIgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIABgCQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABABIAFAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAABAAIAAABQAAABAFAAQAGABAAABQABABAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQABABABAAQAAAAABAAQAAAAABABQAAAAAAAAIABgBQAAAAAAAAQABABAAAAQABAAABgBQABAAABAAIAGAAIgBAAQACACAHAAIALABIAAgBIAdAEQARADAKAAQAWAEAiABIA6ACIA+gBQAVgBApACQALABAYgDQAZgCAKABQASAAAkgEIA1gDIAygCQAhgBARgBIAAABIB9gHQAQgCAjgBIA0gDIAAABIAUgBIAVgBIAAAAQAggEApgBIBKgDIBEgCQAqgCAaABIAGgCIAXgCIAAABIAdgBQARAAAJgCIBmgEIAGgCIAIABQAFgBABACQAGgCAXgBQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgcABgMACQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQgiADgoABQAAABAAAAQABAAgBAAQAAAAAAABQgBAAgBAAIgKAAIgNAAIABAAIgEABIABgBIhaAGIABAAQgZAAgMABIABgBIglADIAAgBIgFABIAAgBIgeACIACgBIgYACQgOABgIgBIABgBIgNACIABgBIgXABQgNAAgIACIgDgBQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAgBABIgIAAIACAAQgLABgVAAQgWABgJABIgBgBIgfACIgrAAQgaABgRACIABAAIghACQgVABgLACQgqABgeADQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQgCABgFAAQgHAAgEABIgBgBIABAAIgSABIgTABIABgBIgJABIACAAQhjAHgvACIABgBIgEAAIAAAAQgDABgGgBIgIABIABgBIgQAAIAAAAIgMAFIAAgBIgwABQgbAAgUACQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgFAAIgeABQgKgBgCgBg");
	this.shape_5.setTransform(201.5,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C3828").s().p("Aj3AOIgfABQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgDAAQgQAAgEABQgHgBgBgCIgUABIABgBQgIAAgJgCQgDABgGAAIgKAAIgZgDQABAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgCABgEgBQgBAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgCgCgDABQgDAAgCAAIAAAAIgLgDQACABgHgBIgagCQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQgBAAAAAAIAAgBIgGAAQgEgBgEAAIgBgBIAAABQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIABgBQAAgBAAAAQABAAAAAAQAAAAABAAQAAgBABAAIADABQAAAAgBAAQAAAAAAAAQgBAAABABQAAAAAAAAIAAABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABABQABAAABAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIABAAIACAAIAAAAIAEAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAIgBAAQACAAAEAAQAFAAACAAIAAAAQAGAAANACQAMACAGAAQAOACAYABIAmACIApgBIApACIAXAAQARgDAGAAQAMAAAXgEQAXgDAMAAQAXgBAsgBIAAABQAugEAkgBIAigBQAXAAALgCIAAAAIAcAAIgBAAQAdgDBFABIAtAAIAtABIAEgBIAPgBIAAABIATAAQAMAAAGgBIBDAAIAEgCIAFACIAFAAQAEgBAPAAIAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAEABAJgBIgBAAIABABQgggBgLABIgBgBIgxACQABAAAAAAQAAAAAAAAQAAAAgBAAQAAABgBAAIgHAAQgGAAgCAAIABgBIgDABIAAAAQgmABgVAAIAAAAQgQgBgIABIABgBIgZABIAAAAIgDAAIAAAAQgPAAgFABIABgBIgPABIgPgBIAAAAQgDgBgFABIAAgBQgFABgKgBQgIAAgFABIgDAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgFABIABgBQgHABgOgBQgPAAgGABIAAgBIgVABIgdAAIgcACIAAgBIgVACQgPAAgGACQgVAAgaABIAAAAQgCAAgDAAIgIAAQAAAAAAAAQAAAAgBAAQAAAAABAAQAAAAAAAAIgYAAIABAAIgGABIABgBIgxAFIgvAFIABgBIgDABIgLABIAAgBIgLAAIABAAIgIAFIgggBg");
	this.shape_6.setTransform(172.4,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C3828").s().p("ADCAkQABAAAAAAQAAAAABgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgBABQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAgBABIAAAAIgDABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAIAAAAQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBABQgFABgBgBIAAAAIgPgCQgKgCgFABQgKgCgTgBIgegCIghABQgSgBgOgDQgFgCgLAAQgNAAgGgCQgIgBgTAAQgTgBgJgCIgagEIgagDIAAgBIghgGQgWgDgKgGQgDgBgCgDIgBgBIAAgDQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQAEgDAJgCIAcgGIAVgBIAAAAQARgDAVAAIAnACIAkABQAVAAANACIADgBIAMAAIAAAAIAPACQAJABAEgBIAbABIAbABIADgBIAHACIAQAAIAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIgBAAIABAAIAAAAQACABAHAAIAAAAIAAABQgWgDgMACIAAgBIgngBQABAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQgIABgEgBIABgBIgDABIABgBIgvAAQgNgCgEACIAAgBIgTAAIAAgBIgDABIABgBQgMgBgEABIABAAQgRABgHgCIAAgBIgHABIABgBIgMAAQgHAAgEABIgCgBQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAIgEAAIABgBQgFABgMAAQgLgBgFACIAAgBIgRACIgWACQgPABgGAFIAAgBIgDADIAAABIAAACIAFAFQAJAFAHAAQARAFAVABIgBAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIAFABIAAACIASACIAFAAIgBABQAaADAyAEIgBABIACgBIABABQADgBAFACIAIABIAAABIAHgDQAbAHAUgDQAAABAFAAIAQAAIADABIADACQAFgBAKABIAAAAQAHgBAGACQACgBAFABIAIAAIATABIABABQABAAAEAAIADgBQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAAAIAAAAIAJADQAAAAgBAAQAAgBABAAQAAAAAAAAQAAAAABAAIADAAIAVAAQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAABgBIABABQADABACgBIAFADIABABIABgBQAAAAAAAAQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgDAAg");
	this.shape_7.setTransform(441.6,43.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C3828").s().p("AFMBUQgkAAgrgDQABAAAAABQAAAAAAAAQAAAAgBAAQgBAAgBAAQgRAAgHgCIgDAAQhFgEgagEIAAAAQgagEgMAAIAAgBIgngEIAAgBIgFAAIABAAQgZgEgIAAIACAAQgggDgPgEIACAAIgOgCIABgBQgJAAgPgDQgOgDgIAAIgDgBQABACgOgDIACAAQgMgBgWgFQgWgFgKAAIgBgBIghgGQg8gOgdgFIAAgBQgOgCgUgEIgggLQgMgFgGgFIgCgDIgCgEIAAgCIACgDQACgDAHgDQANgFAagFIAAABQACgCAGgBIALgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABIAngFIgBABIAKgCIgCAAQBxgKAqgBIgBABIAEgBIABAAQAGgBAMABIgBAAIARAAQgBAAABABIANgFIAAABQBAABAjgFQAAACAJgBIAhgCIAMACQAGgCAZgBIAAABQALgBAQABQAEgCALAAIAQAAIAnAAIABABQACgBAIAAQAHAAAAgBQAEABAFgBQAEgBAEABIgBABQAPAAAEABQgBAAAAAAQAAgBAAAAQABAAAAAAQABAAABAAIAGAAIAqgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIAEAAIABAAIAKAAIALACIACABIABgBQABAAABAAQAAABABAAQAAAAAAAAQAAAAAAABIgCACIgDABIgGAAQABgBABAAQAAAAABAAQAAAAAAAAQAAAAgBAAQgBgBABAAQAAgCgGABQgGAAAAgBIgEABQABgBgBAAQAAAAAAAAQgBgBgBAAQgBAAgBABIAAAAIgGABQgEACgCgBIABAAQgDgCgHABIgMABIABAAIgfAAQgUgBgKABQgWgCgmACIg+ABQhdAHglgCQgLgBgaACQgbADgLgBQgVAAgjADIg5AEQhGAEgkAGIAAgBIgyAKQgMAEgEADIgBACIAAABIAAACIABACIAGAFQAHAEAIADQANAGASAFIA1ALQAgAIAXADIArAJIgBAAQA1AHBmARQAuAIBgAMIAHAAIAYACIAeAEQASACAKgBIA3AEIA2ADIAGgBIAIABIAHABQAKgCAVABIAAAAIADABIguABQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_8.setTransform(417.5,43.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C3828").s().p("AK8B9IAEAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQABAAAAAAQAAgCgLAAQgKAAAAgCIgGAAQABAAgJgBIgBABQgCgBgHABQgIABgEgBIACAAQgEgBgNAAIgVgBIABABQgQAAgmgEQgigEgSAAQglgDhFgEQhKgDgigDIh0gGQhAgDg0gHQgSgCgtgDQgugCgUgDIhkgJQhAgEgjgFQgmgDg3gIIhdgNIAAAAQhLgKgtgJQhOgOgjgPQgMgGgJgGQgGgFgCgFQgDgGAGgGQAEgGARgIIAXgHQAYgGBJgLIAAAAIBMgIIAAABQA/gIBKgDQAsgDBfgDICAgDQBLgCAyAAIAMgBIArgBIA1AAQAgABARgCIDBgBIALgBQAHABATAAQARgCAlABQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAJAAIAAAAQALABAYgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQACAAgBAAQhegBgaABQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIiLABQABAAAAAAQAAAAAAABQAAAAgBAAQgBAAgCAAQgEgBgQABIgXAAIACAAIgJAAIACAAIinAEIgBAAQgsAAgWABIACAAIhGABIAAAAIgJAAIABAAQgsABgNABIADgBQg7AFgbgCIACAAIgZABIACgBQgOACgcAAQgZABgOACIgHAAQACABgJAAIgOABIADgBQgSACgqADQgmABgUADIgBgBIg7AHQg3AFgZAFQgWAEgRAEQgYAHgNAHIAAAAQgHAEgCAGQgCAGAGAHQAJAIARAHQAbALAeAFQA8AOBNAKIgCAAIABABQAJgCAaAHQADAAgEAAIBEAJIgCAAIASABIgDAAQA4AIBRAIICIALIgEABIAHAAIABABQAMAAAUACIgCABIAeAEIAXgCQBjANBLABQABABAHAAIAJACIA5ACIAMABIAKACQAKAAAtACIgCAAIAwAEQAIgBATACQAUACAIgBIBEAFQAAAAAAAAQAAAAAAAAQAAAAABABQAAAAABAAIARAAQANABABgBQAGACAIAAQAIgBAHABIgCAAQAaACAHACQgBAAAAAAQAAAAAAAAQABAAABAAQABgBABAAIALABIBKADQAAAAAAAAQAAABAAAAQABAAAAAAQABAAABAAQAFgBACABIACAAQAMABAFAAIAVACIADACIACgBQABAAABABQABAAABAAQAAAAABABQAAAAgBAAIgCACQAAABgHAAIgJgBg");
	this.shape_9.setTransform(396.2,44.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C3828").s().p("AlWAWQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAYgBAGgCIABABIAjgEIABgBQACABAJgBIgBAAIACAAIAqgEIAJAAIAJgBIgBABIASgCIAAABIACgBIAPgBIgBABIALgBQAHgBAEABIgBAAIAHAAIgBAAQAEgBAHABQAGAAAEgBIACAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAEgBIgBABQAFgCAKABQALAAAEgBIAAABIAQgCIAogCIAAAAIAQAAQAKAAAEgBIAigDQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQACgCAHABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIARgBIAAAAIAEgBIAAABQAXgBAugFIgBABIACAAIAAAAQADgBAFABIAAAAIAIABIAGgEQAaACASgEQAAAAABABQAAAAABAAQAAAAABAAQABAAABAAIAOgCQAFABABABQADgCALgBIgBABIANgBQACgBAEAAIAIgBIARAAIAAABQABAAAAgBQAAAAABAAQAAAAABAAQABAAABAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIgBABQAHAAACABQAAAAgBAAQAAgBABAAQAAAAAAAAQAAAAABAAIACAAIATgCQAAABABgBIACAAIAAAAIAEAAIAGACIABABIAAgBQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQgBABgBAAQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQgBAAAAABQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAIgCABQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAgBABIAAAAIgCABQgBAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBABIgFAAIAAABIgOgBQgJAAgEABQgKgBgRABIgbACQgqAGgSgCQgFgBgLACQgMACgFgBQgJAAgQACQgSACgIAAIgXABIgYABIAAgBIg7ACQgIACgRAAIgYACIgUABIAAAAQgPADgUABIgjAAQgrADgWgBIgDACQgFgBgGACIAAgBIgNABQgJAAgEABQghADgQAAIgCACQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDAAIgHABIgHAAIAAAAIgBAAIgCABIABgBIgHABIgCAAgAlLAVIAAAAgAhUAGIAAAAIAAAAg");
	this.shape_10.setTransform(216.5,36.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C3828").s().p("AAAABIABgBIAAAAIgBAAIAAABIAAAAg");
	this.shape_11.setTransform(181.5,39);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C3828").s().p("AnYAWQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAVgBQAMAAAJgCIABABIAwgEIABgBIAHAAIAIAAIAAAAIADAAIgBAAIAdgCIAdgCIAMAAIAMgBIAAABIAYgCIAAABIAEgBIATgBIgBABIAPgBQAKgBAFABIAAAAIAIAAIAAAAQAFgBAKABQAIAAAFgBIADAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAIAFgBIgBABQAHgCAOABQAOAAAGgBIABABIAVgCIAcAAQARgBALgBIAAAAIAVAAQAOAAAGgBIAwgDIgBABQACgBADAAIAIAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABIAMgBIANAAIgBAAIAGgBIgBAAQAQAAAggCIAwgDIgBABIACAAIABAAQAEgBAHABIgBAAIALABIAIgEQAkACAagEQAAACAGgBIAUgCIAHACQAEgCAQgBIgBABIARgBQACgBAHAAIAKgBIAYAAIABABQABgBAFAAQABAAABAAQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAABQABAAABAAQAAAAABAAQABgBAAAAQADgBADABIgBABQAJAAACABQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIADAAIAbgCQgBABABgBIADAAIAAAAIAEABIADgBIAHACIABABIABgBQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAACQAAACgGAAQABgBAAAAQAAAAAAAAQABAAAAgBQgBAAAAAAIAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQgBAAgBABQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAIgDABQAAgBAAAAQAAAAAAAAQAAgBgBAAQgBAAAAABIgBAAIgDABQAAAAgBABQgBAAAAAAQgBAAAAAAQAAAAgBAAIABAAQgCgBgEABIgIAAIABABIgTgBQgMAAgGABQgOgBgYABIgmACIgoAEQgXACgSgCQgHgBgQACQgQACgHgBQgMAAgXACQgYACgLAAIghABIghABIAAgBIhRACQgLACgXAAIgiACIgbABIAAAAQgVADgbABIgxAAQg8ADgdgBIgEACQgIgBgHACIAAgBIgTABQgLAAgGABQgtADgWAAIgEACQgIAAgBgBQgGABgNAAQABAAgCAAIgBAAIgCABIAAgBIgKABIgCAAg");
	this.shape_12.setTransform(145.8,62.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C3828").s().p("AgBABIACgBIABAAIgCAAIAAABIgBAAg");
	this.shape_13.setTransform(97.7,65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C3828").s().p("Aw8AbIACgCQgBgBAGgBIAHgBQgBAAgBAAQgBAAAAABQAAAAAAAAQAAAAABABQABAAgBAAQABACAIgCQAIgBAAABQAFAAAAgCIADABIADAAIABgBQACAAAFgCIAJgCIgBAAQAEABAKgCQALgDAFAAIgBAAIAsgFQAbgCAOgDIBVgHQA4gHAfgCQBzgOBHABQAMABApgCQAjgCASACQAUABAUAAIAoADIBQAEIBLAFQAyADAaAAIAAABIC+AFQAYgBA1ACIBPAAIAAABIA9ABQAvgBA/ABIBwABIBnABIBnACIArgBIArABQAaAAAOgBICaABIAJgBIAMAAQAHAAACABQAJgBAiAAIABABQAFAAADAAQAJABATgBQgCAAABAAIABABQhHgBgaABQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIhwABQABAAAAABQAAAAAAAAQAAAAgBAAQgBAAgBAAQgZABgJgBIgBAAIgGAAIACAAIiGAAQgmgBgRABIABgBIg4ABIAAgBIgIAAIABAAQgjgBgLABIADgBQgwACgWgDIACAAQgIgBgMABIACAAIgjgBQgTgBgMABIgFgBQACADgTgBIACgBQgQABgggBQgggBgPAAIgBAAIgwAAQhXgCgpABIAAgBQgQABghgBIgwAAIhugDQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgEACgHgBIgRgBIgBAAIABgBQglAAgSgBIACgBIgPABIADgBIhvgFIg4gEIg0gDIACgBIgGAAIgBAAIgNAAIgMgBIABAAIgYgCIgTAEQhGgEhHAIIgGAAIgIAAIguAFQgPAAgCgBQgIACgkAEIABgBQgLACgbACQgGACgPABIgXABIg3AFIgBAAQgDABgLABQgKABgBABQgFgBgGACQgGACgGgBIABAAQgRADgJgCQAFABgQACQgjAFgYAEQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgGABIgBAAQgIAAgGACIAAABIgRAAIgDgBIgBABQgCAAAAAAQgBAAgBAAQAAAAAAAAQgBgBABAAg");
	this.shape_14.setTransform(232.1,56.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4C3828").s().p("AwzAkIgDgBIgBABQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAIACgDQgBAAAGgCIAIgBQgBABgBAAQgBAAAAAAQgBABAAAAQAAAAABAAQACABgCgBQABACAIgBQAIgBABABQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIADABIAEAAIAAgBQACABAGgCIAJgCIgBAAQADABAKgCQALgDAGAAIgBAAIArgDQAbgCAPgDQAegCA3gFQA8gIAaAAQCBgPA5gBQAOAAAmgEQAlgEARAAQAWgBA6gEQAzgEAcAAIBMgBIBLAAIAAABQA7gCCDAFQAaAAAzABIBPADIAAABQAUAAAqACQAwABA9ACIBvAHIBnAFIBmAGIAKAAIAiABIArABQAZABAOAAICbAGQABgBAIAAQAFABAPABQAOgBAdABIABABQAGAAACAAQAJABATgBQgCAAABABIABAAQhIgCgYABQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIhvgEQAAABAAAAQAAAAAAAAQAAAAgBABQgBAAgBAAIgQgBIgTgBIgEAAIiGgEQglgCgSABIABgBIg3gCIAAgBIgIABIABgBQgjgCgLABIADgBIgjgBQgVgBgOgCIADAAQgIgBgNAAIACAAIgigCQgUgCgLACIgGgBQABAAgHAAIgLABIACgBQgQAAgggCQgggDgPAAIAAAAIgwgCQhXgEgpAAIAAgBIgxgBQgfgBgRABQhJgDglABQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQgDACgIgBIgQAAIgBgBIABAAQglABgSgBIABAAIgOAAIADAAQhNABiOAJQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIgFABIgBAAIgNABIgMAAIABAAIgYAAIgTAFQhWADg3AIIgGAAIgIAAIgtAFIgSAAQgMAAggADIABAAQgPACgXABQgGADgPABIgXACIg2AFIgCgBQgDACgKABQgLABAAAAQgGgBgGACQgGACgGgBIACAAQgUACgGgCQADACgOACIg8AGQgFACgDAAIgBgBQgKABgEACgAhugeIAAAAIAAAAg");
	this.shape_15.setTransform(212.7,50.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4C3828").s().p("AiKAEQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgCAAIgKABIgDgBQgDABgHAAIAAgBQgCACgGgCQgCACgDgBIgFAAIgMAAIgBgBQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgEAAgBgBQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgNAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIgBAAIgDAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAAgCIAAABIgBgCQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIACAAIgBABIAAABQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIABgBIABABIABAAIAAgBIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIAAAAIAJAAQAHABACgBQAHABAMAAIATAAIAUgBQAMgBAJABQADABAIgBQAJAAADAAIASAAQAMAAAFAAIARAAIARAAIAAAAIAoAAQAFgBALABIASgBIAOAAIAAAAQAKgCAOAAIAYABIAXABIAWABIACgBIAIgBIAJABQAGAAADgBIAiAAIABgCQACACAEAAQACgBAHAAIAAAAIABAAIABAAIgBAAQACACAFgCIAAABQgPgBgHACIAAgBIgYACIAAAAIgEAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAIAAAAIgBAAQgUABgKAAIAAgBIgFABQgFgBgCABIAAgBIgMABIAAgBIgBABIAAgBQgIAAgDABIABgBQgKACgFgCIABAAIgFAAIAAAAQgDAAgEAAQgEAAgDAAIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAIgDAAIAAgBQgDABgHAAQgHgBgDABIAAgBIgZAAQgIAAgGABIAAgBIgKABQgIgBgDACIgXABIAAgBQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgDAAIAAgBQgIABgEgBIAAAAIgDABIAAgBIgXABIgZAAIABAAIgBAAIAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAIgDAAIAAgBIgFAAIAAgBIgFADQgSgDgMADg");
	this.shape_16.setTransform(126.3,42.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4C3828").s().p("AlHAHQgEABgQAAQgFABgMgBIgKABIgLAAIgZAAIAAgCQgCABgFAAQgFAAAAABQgCgBgDABQgDAAgDgBQgIAAgDgCQACACgHAAIgcAAQABAAAAAAQAAgBgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAIgBAAIgHAAQgDgCgEAAIgBgCIgBABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIABgCIADgBIADAAIgBABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAABAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAgBIADABIAAgBQABABAAAAQAAAAABAAQAAAAABAAQAAgBABAAIAEgBIgBAAQACABAFgBQAFgBACABIAAAAQAGAAAOABQANABAGgBQAPACAZgBIAngBQA8gDAaACQAHACASgCQARgBAHABQANABAYgCQAZgBAMABIAjAAQAVABANgBIAAAAIBWgCQAMAAAYAAIAkAAIAdgBIgBABQAZgDBOAAIAvgBIAvABIAEgBIAQgBIAAABIAUAAQAMABAGgCIBHgBIAEgCIAFABIAFABQAGgCAOAAIAAABQABAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAEAAAIgBQgBAAABABIAAAAQghAAgLACIgBgBIgzACIgBABIgHAAIgJAAIABAAIgEAAIABAAQgpADgVAAIABAAQgSgBgIABIABAAIgaAAIAAAAIgEAAIABAAIgLAAIgKAAIABAAQgWAAgKAAIABAAQgEAAgFAAIAAAAQgFAAgKAAQgJgBgGABIgCAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIgFABIABgBQgHABgPgBQgPAAgHABIAAgBIgWABQgogBgTACIAAgBQgHACgQgBIgWACIgxABIAAgBQgCABgDAAIgIAAIAAgBQgRACgIgBIAAgBIgGABIABAAQhEACgiABQABgBAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIgDABIAAAAQgIgCgEACIABgBIgMgBQABAAAAgBIgJAFIAAgBQglgDgcADQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBABIgDgBIgWACQgGgBgCgBg");
	this.shape_17.setTransform(135.7,78.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4C3828").s().p("AjlAPIgQAAIAAgBIgEABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAIAAgBQgFAAgCgCQAAABAAAAQAAAAAAAAQgBABAAAAQgBAAgBAAIgRAAQABgBgBABQgBABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBIAAAAIgEAAQgBAAAAgBQgBAAAAAAQgBAAgBgBQAAAAgBAAIgBgBIAAABQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBABgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIACAAIgBABIABABQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAABABQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIABgBIACgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAAAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABgBQABAAAAAAQABAAAAAAQABABAAAAIAAgBIAMABQAHACAEgBQAJABAPgBIAYAAIAagDQAOgBALADQAEABALgCQAKgBAFABQAIABAOgCIAWgBQAOgBAbABIAzgCIAWgCQAOAAAHgCIARAAIAAAAQANgBARAAIAfgBIAdgBIAcgBIACgBQAGAAAEgBIAAAAIAMAAQAHgBADgBIArgEIACgCIADABQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQACgBAKgBIAAABQgMABgFACIAAgBIgfAEQAAABABAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgHACgDgBIABAAIgCABIAAgBIglAFIAAgBQgKAAgFABIAAAAIgPAAIAAAAIgCAAIAAAAQgJAAgDABIAAgBQgNADgGgCIABgBIgGABIABgBQgEABgGAAQgFgBgDACIgCgBQABADgGgBIABAAQgEABgJAAQgJgBgEABIAAAAIgOAAIgRABQgLAAgHABIAAAAIgNABQgJAAgFACQgSAAgKABIAAgBQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgFAAIAAgBQgKACgFgBIAAAAIgEABIABgBIgfACIgeABIABgBIgCABIAAgBIgHAAIAAAAIgGgBIAAAAIgFADQgXgDgQAEQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCAAIgNABQgEgBgBgBIgMACIAAgBQgDABgHgBQgCACgGAAIgEgBgAEjgOIAEAAIAEgBIAAABIgJABIABgBg");
	this.shape_18.setTransform(101.7,87.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4C3828").s().p("AiHAEIgHACIAAgBIgBABIAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgCAAIAAgBQAIABAEgCIABABIAPgBIABgBIACAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAABIAAAAIAAAAIATgCIAAAAIAEAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIAAAAIAIAAIAAAAIABAAIAAAAIADAAIADAAIAAAAIAEAAQABAAABAAQABAAAAAAQABAAAAAAQABAAAAAAIAAABQAAAAABAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAAABQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABQABAAAAAAQABAAABAAQAAAAABAAQAAgBAAAAIABABIABgBIABAAIAAAAQADAAADAAQAFABACgBIAAAAIAHAAIAJAAQAFAAADAAIAAAAIAHAAQAEAAABgBQAIABAHgCIAAABQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACAAIAAABIAIAAIgBAAIACgBIAAABIAfgCIgBABIABgBIAAABQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAIAAAAIADABIAAAAIADgDQAMAEAHgEQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIAHgBIACACQACgCAEAAIAAABQABgCAEACQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIADgBIAIABIAAABIACgBIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAABQAAAAAAAAIAAABIACAAIACABIABgBIAIgBQAAAAAAABQAAAAAAAAQAAAAABAAQAAgBAAAAIABABIABgBIACACIABABIAAgBIABACIgCACIgBgBQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCgBIAAABIgBgBIAAAAIgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgCAAIAAAAIgGAAQgDgBgCABQgFgBgHAAIgMAAQgRAEgIgDQgDAAgEAAQgFAAgDAAQgDAAgIAAIgLABIgKAAIgLgBIAAAAIgYABQgDABgHAAIgLABIgIAAIAAgBQgGADgJgBIgPgBQgTABgJgCIgCABIgEABIAAgBIgGAAQgDgBgCACQgOACgIgCIgBACQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg");
	this.shape_19.setTransform(199,89.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4C3828").s().p("ADgACQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgBABQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAAAIgCABQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAgBgBAAIABABIgKgBQgFgBgDAAQgGAAgMAAIgSAAQgZAEgOgEQgDAAgIAAQgIACgDgCQgFAAgLABIgRAAIgQAAIgQgBIAAAAIgmAAIgQABQgLAAgGABIAAgBIgMAAQgLACgNAAIgXgCQgcABgPgCIgCABIgHAAIAAAAIgJgBQgFAAgDABIghAAIgCACIgBgBIgCgBQgDABgGAAIgBAAIAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIgGAAIAAgBQAOABAGgCIAAABIAYgBIAAAAIADAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIgBAAIACAAIgBAAIAOAAIAPgBIgBABIAGgBQADABACgBIAAABIAMgBIAAABIACgBIAAABIAJgBIAAABIAHAAQAEgBADABIgBAAIAFAAIAAAAIAGAAQAEAAADAAIABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIADgBIAAABQADgBAHABQAHAAADAAIAAAAIAKAAIANAAQAIAAAFAAIAAAAIALAAIAIgBQAMABALgCQAAAAAAABQgBAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIADAAIAAABIAMAAIADAAIgBAAIAXAAIAXgBIAAABIABgBIAAABQACgBAEABIgBAAIAFABIAAAAIAEgDIAAAAQASADAMgCQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAIAKgCQABAAABABQAAAAABAAQAAABABAAQAAAAAAABIAJgCIAAAAQADgBAFACQADgCAGAAIAMABIAAABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIgBABQAEAAACABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIACgBIAMAAQAAABAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIABAAIADAAIAAAAIADABIABAAIAAAAIAAADQAAAAAAABQAAAAAAAAQgBAAAAAAQgBAAgBAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBgBAAg");
	this.shape_20.setTransform(252.1,83.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4C3828").s().p("ApMAPIgBAAQgFgBgDABQgEgCgFAAIgCgBIAAABQgBAAgBAAQAAAAAAAAQAAAAgBgBQAAAAABAAIABgCQgBgCAIAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAQABAAgBAAQABACAEgBQAFAAAAABQABABAAAAQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAIACAAIABAAIAEgBQADgCACABIgBAAQACABAGgBIAJgBIAAAAIAZAAQAPABAIgBQASABAegCIAxgCIA1gEQAdgCAXACQAJABAVgCQAUgBAKAAQAPAAAeAAQAfgDAOAAIArAAIAqgBIAAAAIBqgDIArgCQAeAAAPgCIAjAAIgBAAQAfgCBeABIA6AAQAjgBAXACIAFgBIAUgBIAAAAIAYABQAOAAAIgBIBXgBIAFgBIAGABQAFAAABABQAFgBATAAIABAAIACAAIACAAIAAAAIAHAAIAJAAIgBABIABAAQgpgBgOACIgBgBQgeABggAAQAAABAAAAQAAAAAAAAQgBAAAAABQAAAAgBAAQgOABgFgCIABAAIgFABIABgBQgxACgaAAIgBAAQgVgBgJABIAAgBIgfABIAAAAIgEAAIAAAAQgUgBgGACIACgBQgbACgMgCIABAAIgMAAIABgBQgGABgNgBQgLAAgGABIgDAAQABACgLgBIABAAQgJABgSgBQgSgBgIABIgBAAIgbAAIhIACIAAAAIgbABQgTABgJABQghAAgcACIABgBQgCACgFgBIgJAAIgBAAIABAAIAAAAIAAAAQgVABgKAAIABgBIgIABIABAAIg/ABQgnACgVAAIABgBIgEABQgKgBgEABIAAAAIgNgBIAAAAIgLAEQgvgDghAFQgGAAgBgBQgUABgGACQgJgBgBgBQgFABgUABIABAAQgJABgNgBQgDABgJAAIgNABIgfABIAAgCQgCACgGAAQgGAAAAABQgDgCgEABQgDABgDgBQgLAAgDgBQABABgIAAIgiACQAAAAAAAAQAAgBAAAAQAAAAAAABQgBAAAAAAIgCABIgBgBg");
	this.shape_21.setTransform(361.9,80.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4C3828").s().p("AsTALQgHABgbAAIAAgBIgEAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIABgBQgOABgIgBQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQA3ABAUgBQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIBYgCQgBAAAAAAQAAAAAAAAQABgBAAAAQABAAABAAIAMAAQALgBAEABIgBABIAFgBIgBAAIBpgEIAWgBIAVgBIgBABIAsgCIAAABIAGAAIgBAAIATAAIARgBIgCABIAcgCQAQAAAKAAIgBABIAQgBIgCABQAKgBARAAQAQABAIgBIAFAAQgBAAABAAQAAAAAAAAQABAAABAAQABAAABAAIAIAAIgBAAQANgBAZABQAZAAAMgBIAAAAIAmgBIAyAAQAfAAATgCIAAAAIAngBQAZAAAMgCQAvAAAmgCQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQADgCAGABIANAAQABgBAAABIgBABIAqgBIALgBIgCAAIBXAAIBVAAIgCABIAFgBIABAAQAHgBANACIgCAAQAHAAAMABIABAAIAOgDIAAAAQBHAEAogDIAFABIAGAAIAkgBIAHABIAGABQAMgBAWABIABAAIAdABQAFgBAMAAIASAAIArACIABABQACgBAJAAQAIABAAgBQAEABAFgBQAFAAAFABQANAAAGADQgBgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAHgBIAvACQgBAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABgBABAAQABAAAAAAQABAAAAAAQAAAAABABIABAAIALAAIANACIACAAIABAAQABAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgCACIgEABIgGAAIADgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBgGAAQgHAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBAAQABAAgGAAIAAAAQgBAAgFAAQgFABgCgBIABAAQgDAAgIAAQgJAAgEAAIABAAIgjAAQgVgCgLABQgYgCgrgBIhEgBIhJABQgnABgigDQgMgBgdABQgdABgNgCQgWAAgpABIg/AAIg7gBIg7ABIAAAAIiUADIg8ADQgqAAgUAAIAAAAIgwAAIABAAQgmACgxABIhXACQhsACg1AAIgHABIgbABQgugCgTADIh5ABIgHABQgNAAgDgBg");
	this.shape_22.setTransform(373.6,83.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4C3828").s().p("AiYALIgBAAIgCAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAIAAgBIAAABIgBgDIABgCIABAAIAAABIAAABQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABABQAAAAAAABQABAAAAAAQAAgBAAAAQAAAAAAAAIABABIAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBIABgBQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIACgBIAAAAIAHAAQAEACACgBQAJACAQgDQAUgFAHADQADABAFgCQAGgBACABQAEAAAIgBQAIgCAEAAIALAAQAHABAEgBIAAAAIAaAAQADgBAJAAIALgCIAJAAIAAAAQAHgCAJAAIAQAAIAPgBQAKAAAGABIABgBIAFgBIAGAAQAEAAACgBIAWgCIACgBIACABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQACgBAFAAIAAABIAAAAQgHAAgCACIAAgBIgRACIAAABIgDAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBIAAABIAAgBIgTADIAAAAIgFAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIAAgBIgIABIAAgBIAAABQgGgBgCABIABgBIgFACQgDAAgCgBIAAAAIgDAAIABAAQgCABgEgBQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABIgBgBQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAIABgBQgCABgFAAQgFgBgCABIAAAAIgHAAQgNAAgGAAIAAAAIgHAAQgFABgCABQgGAAgIABIAAgBQgBABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgCAAIAAgBQgFABgDgBIAAAAIgCABIAAgBQgVAEgKAAIAAgBIgBAAIAAAAIgCAAIgCAAIAAgBIgDAAIAAgBIgDAEQgMgDgJAEQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAIgHACQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgHACIAAgBIgFAAIgDABIgDABIgIAAIgBgCQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIAAgBQAAABgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgJABIgBABIAAgBgACagKIAAAAIAAAAgACbgLQAAABAAAAQABAAAAAAQABAAAAgBQABAAAAAAIABABIgFAAIABgBg");
	this.shape_23.setTransform(477.4,105.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4C3828").s().p("AjkAMIgPACIAAgBQgDABgJgBQgCABgFgBIgHABIgSgBIgBgBQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBgBIgEABQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBIAAAAQgGAAgCgCQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAgCAAIgTAAQAAgBAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgBgBIgFAAIAAABIgEgDIgCgCIAAACIgBgCIAAgCQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAIACAAIgBABIAAABQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIACABIAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIADAAIAAAAQAAAAABABQAAAAABAAQAAAAABAAQABAAABgBQAEgBABABIgBAAIAPACQAJABAEAAQALABARAAIAcABIAegDQARgBANACQAFABAMgBQANgCAEABQAJAAARgCQASgDAIAAQAQgDAgAAIAAAAIAtgEIAPgBQAQgCAigBIAVgCIgBABQAPgCAVgBIAkABIAhAAIAhABIADgBIALgBIAOABQAIAAAFgBIAxAAIAEgCIADABIADABQAFgBAJgBIABABIACAAIgBAAIAFAAIAFAAIAAABQgaAAgFABIgBgBIgkACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgJABgDgBIAAgBIgCABIABgBQgjADgJAAIAAgBQgMgBgFACIAAgBIgSABIAAgBIgDABIABAAQgMgBgDABIABgBQgPACgIgBIABgBIgHABIACgBQgFABgHgBQgHgBgDACIgBgBQAAAAAAABQgBAAAAAAQAAAAAAAAQgBABAAAAIgEAAIAAgBQgEABgLAAQgLgBgEABIAAAAIgQABQgcAAgNABIAAAAIgQABQgKABgFACQgUAAgOACIAAgBQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgGAAIAAAAQgLACgHAAIABgBIgEABIAAAAIgjAFIgTACIgRABIABgBIgCAAIgIAAIAAAAIgIgBIgFADQgegCgRADQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgCAAIgPABQgFAAAAgCgAE/gLIAAAAIAAAAg");
	this.shape_24.setTransform(443.5,89.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4C3828").s().p("ADjAGQgMgBgGABIAAgBIgSABIAAgBIgCABIAAgBQgLAAgEABIABgBIgLABIgLgBIAAgBIgGABIAAgBIgLAAQgGgBgEABIgCAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgDABIABgBQgGABgKgBQgKgBgFABIAAgBIgQABQgcgCgOABIABAAIgQABQgLgBgFACIgiAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgFAAIAAgBIgSAAIABgBIgFABIABAAQgwABgXgBIAAgBIgCAAIAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIgEAAIAAgBIgIgBIABAAIgGADIgBAAQgcgFgSAEQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIgCAAIgPABQgEAAgBgCQgEABgLAAIABAAQgEABgJgCQgCABgFAAIgHAAIgSgBIAAgBQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAIgDAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIAAgBQgGAAgCgBQAAAAAAAAQAAAAAAAAQgBAAgBAAQgBAAgBAAIgTABQAAgBgBAAIgCABIAAgBIgFAAIAAABIgFgBIgBgBIAAABIgCgCIABgCIAEgBIgBABIABABQAAAAAAABQAAAAAAAAQABAAAAAAQABABAAAAQABgBABAAQAAAAABABQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIAAABIACAAIAAgBIACAAQABgBAAAAQABgBAAAAQAAAAABAAQAAAAAAABIAAAAQAAAAAAAAQABAAAAAAQABABABgBQAAAAABAAQAEgBACABIgBAAIAOABQAJABAFAAQAKAAASAAQAUAAAIAAQAogCAUACQAFABAMgBQANAAAFAAQAJABARgBIAaAAIAYABIAYABIAAAAQAhgBAcABQAIgBARABIAZgBIAAAAIAUAAIAAABQARgCA3ACIAhAAQAVAAAMACIADgBIAMgBIANABQAJABAEgCIAyAAIADgBIAEABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQADgBALAAIAAAAIACAAIABAAIgBAAQADABAHgBIAAABQgXgBgJACQAAgBABAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgkABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIgFAAIgGAAIAAAAIgCAAIAAAAIgrABgAgiAGIAAAAIAAAAg");
	this.shape_25.setTransform(365.9,87.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4C3828").s().p("AQIAYQABAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIh0gCQABAAAAAAQAAAAAAAAQgBAAgBAAQgBABgBAAIgRgBIgTgBIABgBIgHABIACgBQhrgCgjgBIACAAQgogDgSABIABgBIg6gBIAAgCIgIABIABgBQgkgCgMABIADgBQgyABgWgDIACAAIgVgBIABAAQgNAAgXgCQgUgCgMACIgFgCQABADgTgBIACgBQgRAAghgCQgiAAgPAAIgBAAIgygBQhagFgsgBIABAAIg0gBQghgBgRAAIhzgCQABgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgEABgIAAIgRgBIgBAAIABgBQgmAAgUgCIACAAIgPAAIADAAQhagCgaAAIhwgBIABgBIgGABIgBgBIgbAAIACAAQgRgBgIAAIAAAAIgUADQhWgFg+ADQAAgBgGABIgIgBIgwABQgNAAgFgCQgLABgjABQgNAAgagBIgWABIgYAAIg6AAQABgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgDABgMAAIgLAAQgFgCgHACQgHABgFgBIABgBIgOAAQgJAAgEgCQAEABgQABIg/ABQABgBAAAAQAAAAAAAAQgBAAAAAAQgBAAgBABIgGAAIgBAAQgJgBgGABIAAAAQgIgCgJAAIgDgBIgCABQgBgBgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIACgCQgBgBAOgBQgBABgBAAQgBAAAAAAQgBAAAAABQAAAAABAAIABAAQAAACAJAAQAIAAAAABQAFAAABgBIAGABIABAAQABABAHgDQAGgBADAAIgBABQADABALgBQAMgBAGABIgCgBIAuABQAdACAPgCQAgACA5AAIBagBQB5gFBKAGQAQABAngBQAngBARABQAbABA5AAQA4gBAbABIBPACIBOADIAAAAIDGAGQAagBA3ADIBSACIAAAAIBBADIgBAAQAzAABAADIB0AEIBsAEIBqAFIAuABIAtACQAaACAPgCIChAHQACgBAHAAQAGABAQABIAtAAQACABgBAAQAGABACgBQAKABATAAQgCABABgBIABABQhDgDgiAAg");
	this.shape_26.setTransform(329.6,93.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4C3828").s().p("AEYAIIgBgBIgfgCQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgFgBIgFgBIABAAIgCAAIAAAAIgmgCIAAgBIgIAAIgIAAIABgBIgQAAIAAAAIgCAAIAAAAQgKgBgDABIABgBIgKAAQgGAAgEgBIABAAIgGgBIABAAQgEAAgGgBQgGgBgDABIgBgBQAAADgFgBIAAgBQgEABgJgBQgJgBgFABIAAgBIgNAAQgZgDgMACIAAgBIgOABQgJgBgEACQgUgBgKABIAAgBQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgFAAIAAgBIgPAAIgEAAIABAAIggAAQgPACgQAAIABgBIgCAAIAAAAIgHAAIAAgBIgHAAIABgBIgGAEQgZgEgPAEQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgCgBIgNACQgEgBgBgBQgEACgIAAIgLAAIgGABIgGAAIgQAAIAAgBQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAgBQgEABgDgCQAAAAAAAAQAAABAAAAQAAAAgBAAQgBAAgBAAIgRABQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBAAIgEAAIAAAAQgCgBgDAAIAAgBIgBABQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBIABgBIACAAIgBABIAAABQABAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIABgBIACABIAAgBIACAAQAAgBABAAQAAAAAAAAQABgBAAABQAAAAAAAAQABAAAAAAQAAABABAAQAAAAABgBQABAAAAAAIAFgBIgBAAIANABQAIAAAEgBQAJABAPgBIAZgBIAagDQAPgBAMACQAEABAKgBQALgCAFABQAIABAPgBQAPgCAHABIAVAAIAWABIAAAAQAcgBAYABIAWAAQAPABAHgBIASABIAAAAQAWgCApAFIAdACQASACALABIADAAQAFAAAEAAIAAAAIANAAQAHACAEgBIArAFIADAAIADABIADABIAMAAIAAABIABAAIACAAIgBAAQADACAFgBIAAABQgWgDgFAAg");
	this.shape_27.setTransform(280.6,102.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4C3828").s().p("ALrAyQABAAAAAAQABAAAAAAQABAAAAAAQAAAAgBAAIAAgBQAAgCgGAAQgFgBgBgCIgDABQAAgBAAAAQAAAAgBAAQAAAAgBgBQgBAAgBAAIgBABQgBgBgEABQgFAAgCgBIABAAQgCgCgHAAQgIAAgEgBIABAAQgJgBgVgFQgTgEgKAAQgWgFglgEIg8gIQhbgHgngGQgLgDgagBQgagCgLgCQgUgDgkgCIg4gFIg1gFIg0gEIAAgBIhEgEIhAgEQgXAAgfgDQgcgBgbAAIgsgCIABgBIhNAAIhPgDIhIgBQgtAAgagBIgHABIgYABQgpgCgRADIhsAEIgGACQgMAAgDgBIgeADQABAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIgDABIgDAAIABAAIgKAAIgKABQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAtgBAWgEQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIBOgFIACgBIALAAIANAAIgBAAIAFAAIAugCIAwgCIgBABQANgBAaAAIgBABIAngBIAAABIAFgBIAAABIAggBIgCABIAZAAQAOgBAKACIgCAAQAGABAIgBIgBABIAYAAQAOACAIgCIAEABQAAAAAAgBQAAAAABAAQAAAAABAAQABAAABAAIAIAAIgCAAQAMgBAWACQAXACAKgBIAAABIAiABIAtACIAtACIAAAAIAiABQAWACAKgBIBOAFQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAQACgBAGABIALABQABAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAIAmACIgBABIAKAAIgCAAICZANIgBABIAFgBIAAABQAGgBAMADIgBAAIARADIgBAAIANgCIABAAQBGAKAdAAQAAABAJABIAgACQAKADACABQAJAAAWADQAJAAARAEQAEgBALACQALACAFgBIAmAHIAAABQADgBAHABIAIABQADACAEgBQAFAAAEACIgBAAQAMACAFACQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAGABIApAGQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIABABQAFACAEgBIAMAEIABACIABgBQABAAABABQAAAAABAAQAAAAAAABQAAAAAAAAIgCACQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgIgCg");
	this.shape_28.setTransform(177.1,101.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4C3828").s().p("AmYAQQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABgFAAQgFgBAAABQgDgBgCABQgDABgDgBIABgBQgKAAgCgCIAAAAIAAAAQABACgGAAIgcAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCABIgBgBIgHABQgDgCgEAAIgBgCIgBABQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIABgCQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABAAIADAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABABAAIAAAAQAAABAAAAQAAAAABAAQAAABABAAQABAAABAAQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAIABABIACAAIAAgBIAEAAQAAgBABAAQAAAAABAAQAAgBABAAQAAABABAAIgBAAQACABAFgBIAHAAIAAgBIAUABQAMACAHgBQAOABAZgBIAoAAQA2gFAgADQAHABARgCQARgBAHAAQANABAYgCQAZgCAMABIAigBQAXABAMgBIAAAAQAxgCAlAAQAMgCAXAAIAkgBIAdAAIgBAAQAWgDAdgBIAzgBIAvgBQAegCARABIAFgBIAPgBIAUAAQAMAAAGgCIBHgCIAEgCIAKABIAUgBIAAABIADAAIAAAAQAFABAIgCIAAABIAAAAQgkAAgIACIgBgBIgzADIgBABIgHAAQgGABgDgBQABAAAAAAIgDABIAAgBIg+AEIABAAQgSAAgHACIAAgBIgZACIgBgBIgDAAQgQAAgFABIABgBIgQACQgJABgGgBIABgBIgKABIABAAQgFABgLgBQgJAAgFABIgCAAQABAAgJAAIABAAQgIABgOgBQgPAAgHABIAAAAIgWABQgoAAgTACIAAgBIgWACQgPAAgHACQghAAgRABQAAAAAAAAQABAAAAAAQAAgBgBAAQAAAAAAAAQgBACgEAAIgHAAIAAgBQgRABgJAAIABgBIgGABIgyACIgyABIABgBIgDABIAAAAIgMAAIABgBIgLAAIAAgBIgJAEQglgDgcAEQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgDgBIgVACIgIgCQgHABgOAAIgRAAIgJABIgLAAg");
	this.shape_29.setTransform(119.5,105.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4C3828").s().p("ADuAHQgNgBgGABIAAgBIgTABIAAgBIgCABIAAgBQgMgBgEABIABgBIgMABIgLgBIABAAIgHAAIAAgBQgEABgHgBQgHgBgEACIgCgBQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgEABIABgBQgFABgLgBQgLgBgFABIAAgBIgQAAQgegCgOACIAAgBIgRABQgLgBgFACIgkgBIAAgBQAAABgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgFgBIAAgBIgTAAIABAAIgFABIABgBQgyABgZgBIABgBIgCABIgJgBIAAAAIgIgBIgGADIAAAAQgfgEgRADQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgDAAIgPABQgFgBgBgCQgEACgLAAIgNgBQgCABgFAAIgIAAIgTgBIAAgBQgBAAAAAAQAAAAgBAAQgBABAAAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIAAAAQgHAAgCAAQAAAAAAAAQAAAAAAAAQgBAAgBAAQgBAAgBAAIgUAAQAAAAgBAAIgCAAIAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAAAQgCgBgDAAIgBgBIgBABIgBgCIABgCIABgBIADAAIgBABIAAABQAAABAAAAQAAAAABAAQAAAAABABQAAAAABAAQABgBAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIAAABIACAAIAAgBIADAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABABIgBAAQAAAAABAAQAAAAABAAQAAABABgBQABAAABAAQAEgBABABIAAAAIAPABQAJACAFgBQALABASAAIAeAAQAsgDATADQAFAAANAAQAMAAAGAAQAJAAASAAIAbAAIAaAAIAZAAIAAABIA/AAIAbAAQARABAJgBIAVAAQASgBA5ACIAjABIAjACIADgBIAMgBIAAABIAOABQAJAAAFgBIA0AAIADgBQACABAFAAIAPAAIAAAAIACAAIABAAIAAAAIAEAAIAFAAIAAABQgYgBgJACQAAgBAAAAQABAAgBAAQAAAAAAAAQAAAAAAAAIgmABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQgIABgEgCIABAAIgCABIAAgBIguABg");
	this.shape_30.setTransform(439.6,178.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4C3828").s().p("AR/AKQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIiCgEQABAAAAAAQAAAAAAABQgBAAgBAAQAAAAgCAAIgSgBIgWgBIgFAAIhOgCIhPgBIABgBQgsAAgUAAIABAAIhAABIgBAAIgIAAIABAAQgpABgNABIADgBIgpACQgYABgPgCIACAAQgKgBgOABIACAAQgPABgZgBQgXgCgMABIgHAAQABABgIAAIgNAAIADgBQgUABgkgCQgngBgQAAIAAAAIg4AAQhlgFgwABIAAgBIg6gBQgkgBgUABQhUgDgrAAQABAAgBgBQgEACgJgBIgTgBIgBAAIABAAIhAgBIACgBIgRABIADAAQiqADhUAAIABgBIgIAAIgdAAIABAAIgcgBIABAAIgXADQhggDhFAEQAAgBgHAAIgIAAIg2ACQgSgBgCgBIgyACQgTABgagBQgHABgSAAIgaABIhAAAIgCgBQgDABgNAAQgLAAgBABQgGgBgIABQgHABgHgBQgWAAgGgBIgEAAIgKABIhGABQAAAAAAAAQABAAgBAAQAAAAgBAAQAAAAgBAAIgGABIgCgBIgQABIgBAAQgJgCgKAAIgDgBIgCABQgBAAgBAAQgBgBgBAAQAAAAAAAAQgBAAABgBIACgCQgBgBAQAAQgBAAgBAAQgBAAgBAAQAAABAAAAQAAAAABAAQACABgCAAQABABAJAAQAKAAAAABIAEAAIACgBQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIAEAAIABgBQACABAHgCQAHgBADAAIgBAAQAEACAMgCQANgBAGABIgBgBIAzABQAgABARgBQAjABBAgCIBlgCQCLgFBOADQASABArgCQArgBATABQAhAAA9gBIBdgCQArAACEACIAAAAQA5AAA4ACIBsADIBaACIBbACIAAAAIBJACIgCABICAABICDAAIB3AAQBJgCAuACIALgBIAoABIAyAAQAeABAQAAQB5AEA6ADIALAAQAGABASABQARAAAhACIABAAIAJABIAAAAQAKACAWgBQAAAAgBABQAAAAAAAAQAAAAAAAAQAAAAABAAIABABQhTgGgeAAg");
	this.shape_31.setTransform(430.2,184.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4C3828").s().p("An5AKQhegEg0ADQgBgBgFAAIgIAAIgvAAQgPgBgDgCQgLACgjAAIACgBQgPABgZgDQgGABgQAAIgXAAIg5gCIgBgBQgDABgLgBIgLAAQgGgBgGABQgHABgFgCIABAAQgTAAgIgBQAFAAgQAAIg+AAQgGAAgCAAIgBgBIgPAAQgIgCgJgBIgDgBIgBABQgCAAAAAAQgBgBgBAAQAAAAAAAAQAAgBAAAAIACgCIAGgBIAIABQgCAAgBAAQgBAAAAAAQAAAAAAAAQAAAAAAABIABAAQAAABAJABQAIAAAAABQAFABAAgCQABAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAIAEABIABgBQABABAGgBQAHgBADAAIgCAAQAEACALgBQALAAAGAAIgCAAIAtACQAcACAPAAQAhAAA3ABIBZACQCAgCBAADQAQACAmgCQAngBAQABQAgABAygCIBSgDIBNAAIBOgDIAAABQA2gCCMgBQAdgBAzAAIBQAAIAAAAIBBABIgCAAQAxgCBBACIByACIBqACIBpACIAKgBIAjAAIAsABQAaABAOgBICfAEQACgBAHAAIAMABIAKAAIAsAAIAAABIABABQAFAAACAAQAKABATgBQgCABACAAIAAAAQhPgDgUACQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIhzgBQABABAAAAQAAAAAAAAQAAAAgBAAQgBAAgBAAQgaABgKgCIACAAIgIAAIiIgBIgBAAQgmgCgRABIABgBIg5AAIgBAAIgHAAIABAAQgkgBgMAAIADAAQgxAAgWAAIACAAQgJgBgMABIACAAIgjgBQgUgBgMABIgGgBQACACgTAAIACgBIgxgBQghgBgQABIAAgBIgxAAQhagCgqACIAAgBIgyABQghAAgRACQhUAAgcABIAAAAQgEAAgIAAIgRAAIgBAAIACAAQgmABgTAAIABgBIgOABIACAAIhyAEQgcAChVACQABgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAIgGABIAAAAIgaAAIABgBIgZAAIAAgBIgTAEg");
	this.shape_32.setTransform(262.8,175.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4C3828").s().p("AN3A0IgBgBIhkgIQABABAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIgPgBIgQgCIABgBIgGABIABgBIh5gIIABgBQgigDgPAAIABgBIgygEIAAgBIgHABIABgBQgfgDgLAAIADgBQgrgBgTgEIACAAIgSgBIABgBQgLAAgTgDQgSgCgKABIgFgBQABABgHgBIgKAAIACgBQgPABgcgDQgdgDgNAAIAAAAIgrgBQhOgHglgBIAAAAIgsgDIgsAAQgugDg0gCQACAAgBAAQgDABgHgBIgPgBIgBAAIABgBQghAAgRgCIgLAAIACAAQgjgChBgCIhggDIABgBIgFAAIgBAAIgMAAIgLgBIACAAIgWgCIgRACIAAAAQhPgGgwABIgGgBQgFAAgCgBIgpAAQgMgBgDgCIgoABIABgBQgNABgWgDQgFABgOAAIgUgBIgygCIgBgCQgDABgJAAQgJgBgBABQgFgBgFAAQgGABgFgBIABgBQgQAAgHgCQAEABgOgBIg2gBQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAABgBAAQgEABgBgBIgBgBQgJgBgEABQgHgCgIgBIgCgBIgCABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBIACgCIAFgBIAHABQgBAAgBAAQgBAAAAAAQAAAAAAAAQAAABAAAAQABAAgBAAQABACAHAAQAHAAABABQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAAAQAFAAAAABIABgBQACABAFgBIAIgBIgBABQADABAJgBQALAAAEABIgBgBQAMAAAcADQAYACANAAQAcACAxACIBOACQB5ABAuAFQAOACAhAAQAiAAAOACQAZACAvAAQAyABAWABIBEAEQArADAZAAIgBABQBlADBFAEQAYABAuADIBGAEIA4AEIgBABQAqAAA5ADIBkAJIBcAIQA4AFAkAFIAIgBIAfADIAmAEQAXACANAAICKANIAIgBIAKACIAJACIATAAIATACQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAHAAIgBABQAJABARABQgCAAABAAIABABQhGgHgRgBg");
	this.shape_33.setTransform(209.4,182.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4C3828").s().p("AH3AOIABAAIgEAAIABAAIhRAAIAAgBQgWgBgLABIABgBIgiAAIAAgBIgEABIAAgBQgVgBgGABIABgBIgVAAQgMAAgIgBIABgBQgFgBgHABIABAAQgHAAgOgBQgLgCgHACIgEgBQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgHAAIABgBQgKABgSgCQgUgBgJAAIAAAAIgdgBIgmgCQgYgBgPAAIAAAAIgdAAQgUAAgJAAQgjgBgeAAIAAgBQgCABgFAAIgKgBIAAAAIABgBQgXABgLgCIABAAIgIAAIABAAQhYgCgrgCIABgBIgEABIAAgBIgPAAIABAAIgPgCIgLADIgrgCQgaAAgQADQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEAAIgcADQgJgBgBgBQgIACgTABIABgBQgGABgRAAQgEACgJAAIgNACIghAAIgBAAQgCABgGAAQgGAAgBABQgDgBgEACQgDABgEgBIABAAQgLABgFgCQADACgJABIgkAFQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAIgBgBQgGAAgDACQgFgBgFAAIgCgBIAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIABgCQgBgCAJAAQgBAAgBAAQAAAAAAABQgBAAABAAQAAAAAAAAQABABgBAAQABABAFgBQAEAAABABIADgCIABABIACAAIABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABgBABAAQADgCACAAIAAAAQACABAGgBQAHgCADAAIgBAAQAIgCATAAQAQAAAIgBIA0gDQAigEARAAIA4gGQAhgBAYACIAfAAQAWgBAKACIAwABIAwABQAOAAAgACIAtACIAAABQBAABAxADQAPAAAfABQAhAAAOAAIAmABIgBAAQAdgBAlACIBDAEIA+ACQAoABAVACIAGgBQALABAKgBIAZACQAQAAAIgBIBdACIAFgBQACABAFAAIAGABIAagCIgBABIABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIADgBIgBABIAIAAIAJgBQAAAAgBABQAAAAAAAAQAAAAAAAAQABABAAAAQgngBgTACIAAgBQgiABghgBQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgKAAIgLgBg");
	this.shape_34.setTransform(65.1,180.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4C3828").s().p("AlyAKIgBgCQgBACgFgBQgBAAgBABQgBAAAAAAQgBAAAAAAQAAAAAAABQgBgBAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgDABgCgCQgIAAgCgBIAAgBIAAABQACABgHAAIgZAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgBgBQgDgBgDABQgDgCgEAAIgBgBIAAABQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIABgCQAAgBAFAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAABQAAAAABAAQAAAAAAABQABAAAAAAQABAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIAAgBQABABAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAgBAAAAQABAAAAABIAAAAQABACAEgCQAFgBACABIAAAAIASABQAMAAAGAAQANABAWgBIAkAAQA0gFAaAEQAGAAAQgBQAPgCAHACQALAAAXgBQAWgCALABIAfAAQAUABAMgBIAAABIBNgCQALgBAWAAIAgAAIAaAAIAAAAQAUgCAaAAIAuAAIArAAQAbgBAQABIAEgBQAHABAHgCIAAABIASgBQALAAAFgBIBAgDIAEgBIAFABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIASgCIAAABQABABAAAAQABAAAAgBQABAAAAAAQAAAAAAgBIAAABQAEABAIgCIgBABIABAAIgUABIgUACIgBgBIguADQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgKABgFAAIABgBIgDABQgkACgTAAIgBAAQgPAAgHAAIAAAAQgPABgIgBIAAAAIgDAAIAAAAQgOAAgFAAIABAAQgTACgKgCIABAAIgIAAIABAAQgFAAgKAAQgIAAgFAAIgCAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgFABIABgCQgHACgNgBQgOgBgGACIAAgBIgUABQgkgCgRADIAAgBQgHABgOABIgUABQgSgBgaACQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgHAAIAAgBQgPACgIgBIABgBIgGABIABAAQg+ACgeAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIgDAAIAAAAQgCABgDgBIgGAAIABgBIgKAAIAAAAIgIADQgigDgZADQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgDgBIgTACQgGgBgBgCQgGACgNAAIABAAQgHABgJgBIgJABIgKABg");
	this.shape_35.setTransform(352.3,124.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4C3828").s().p("AiQAcIABAAIg6AAIABAAIgPAAIADAAIh1gBIhzgCQABAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAIgGAAIgBAAIgbgCIACAAIgagCQABAAAAgBIgUADIhLgGIgmgDIgkgCQAAgBgGAAIgIgBQglgDgLABIgKgBIgIgDQgJABgmgDIACAAIgogBQgHAAgQgBIgYgCIg5gFIgBgBQgDABgMgBQgKgBgBABQgGgCgGAAQgHAAgGgBIACAAQgWgCgGgCQAFACgQgBIg/gDQADgCgLACIgCgBQgKgCgFABQgIgCgJgBIgDgCIgBABQgCAAAAAAQgBAAgBgBQAAAAAAAAQAAAAAAAAIACgCQAAgBAGAAIAIABQgCAAAAAAQgBAAgBAAQAAAAAAAAQAAAAABABQABAAgBAAQAAABAJABQAJABAAAAQAEABABgBIADABIADAAIABAAIAIgBQAHgBADABIgBAAQADACALgBIARABIgBAAIAuAEIAsADQAgAEA5AEIBbAGIBhAEIBiAJQAQADAnABQAnAAARACQA3AEBxAAIBPACQAyABAdgBIAAABIDHgGIBRgCIBSgDIBBgCIgBAAQA9gEA3AAIB1ADIBsACIBrADIAKgBIAkABIAtABQAbAAAPAAICiACQABgBAIAAQAGACAQgBIAtAAQACABgBAAQAFABADgBQAJACAUgCQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAABAAIAAAAQhKgCgbABIgCgBIh0AAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgRAAQgOAAgFgBIABAAIgHABIACgBQhdABgwgCQgogBgSABIABgBIg6AAIAAgBIgIABIABgBQglgBgMABIADgBQgyABgXgCIADAAQgJgCgNACIACgBIgkgBQgUgBgMABIgGgBQABABgHAAIgMACIACgCQgRADghgBQgiAAgPACIgBgBIgyACQhbAAgsADIAAgBIgzACIgzADIhzADQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgEACgIgBIgSABQgBAAABgBg");
	this.shape_36.setTransform(374.1,126.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4C3828").s().p("AgzASIhMgBQgzgBgaABIAAAAIg+gBIACAAQhDACgqgCIhugGIhlgFQg/gDgmgCIgJAAQgRAAgRAAQg5gFgYABIiYgIIgIABQgSgBgDgBIgqgBQAAAAAAAAQABAAgBAAQAAAAAAAAQgBAAAAAAQgCABgGgBIABgBQgFgBgJABIgOAAQABgBAAAAQABAAAAAAQAAAAgBAAQAAgBgBAAQBAAEAfgBQgBAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAnAABHAEQgBAAAAAAQAAgBAAAAQAAAAABAAQABAAABAAIAQABIASABIgBABIAHgBIgCABICGAFIgCABIA3ABIgBAAIA2ABIAAABIAIAAIgBAAIAtACIgCAAIAiABQAVAAANACIgCABIAUAAIgCABQAMgBAWACQATACALgBIAGABQgBgBAHAAIALAAIgDABQAQgBAgABIAuABIAAAAIAvAAIBAACIA/AAIAwAAQAfABARgCIBsgBIgBABQAEgBAIAAIAQAAQAAAAABAAQAAAAAAAAQAAAAgBAAQAAAAgBABIA2gBIgBABIAOgBIgCAAQBJAACQgDIgDABIAGAAIAAAAQAJgBARABIgCABIAYAAIAAABIASgEIAAAAQBbADAxgEQABACAMgBIAugBIARACIArgCIgBAAIAmAAIAVgBIAXAAIA2AAIABABQADgBALAAIAKAAQAFABAGgBQAHgBAFABQASAAAHACQgBAAAAAAQAAgBAAAAQABAAAAAAQABAAACAAIAIAAIA7gBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAEgBACABIABAAIAOAAIAQACIADABIABgBQABAAABAAQABAAAAAAQABABAAAAQAAAAAAABIgCACIgFABIgIAAQABgBABAAQABAAAAAAQABAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAAAABAAQAAgCgJABQgIAAAAgBIgFAAIgCAAIgEgBIgBABIgHABQgGACgDgBIABAAQgDgCgKABIgRABIABAAIgrgBQgagBgPABQgfgBg1ABQg+ABgYAAQh6AFg9gDQgPgBglABQglACgQgCQgbAAg0ABQg2ACgYAAIhKAAIhLAAIAAgBIiYACIgjAAg");
	this.shape_37.setTransform(424.7,140.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4C3828").s().p("Ag5AJIgIAAIABgBQgSABgJgBIABAAIgHABIABgBQhHACgigBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAIgDAAIAAAAIgGAAIgGgBIABAAIgMgBIgJADQgmgFgeADQAAAAAAAAQAAAAgBAAQAAgBgBABQAAAAgBAAIgDgBQgSAAgEABQgHgBgCgBQgDABgRAAIgBAAIgSgBQgDABgHgBIgLABIgagCIgBgBQgBABgFAAQgFgBgBABQgCgBgDABQgDAAgDgBQgIAAgEgCQACABgHAAIgdgBQAAABgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAIAAgBQgEgBgDABIgIgBIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgCQgBgBAHAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIAAABQAAAAABAAQAAABABAAQAAAAABAAQABAAABAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIADAAIAAAAIAEAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAABIAAAAQABABAFAAQAGgBACABIAAgBIAVABQANABAHgBQAOACAaAAIAqABQA+gDAbADQAIACARgBQATgBAHABQANABAagBIAmAAQAYgBAwACIAAABIBagBIAlgBIAlgBIAeAAIgBABQAXgDAeAAIA2AAIAxgBQAeAAATABIAEgBIARAAIAUAAQANAAAGgBIAlgCIAlgCIAEgBQADABAHgBIAVgCIAAABQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIAGgBIAHAAIAAABIAAAAQgfAAgPADIgBgBQgQACglACQABAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAQgMAAgFAAIABAAIgDAAIABAAQgwADgRAAIAAAAQgSgBgIACIABgBIgbABIAAAAIgEAAIABAAQgRAAgFABIABgBIgRABQgKABgGgBIABgBIgKABIABgBQgGABgLgBQgJAAgFACIgDgBQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIgFABIABgBQgIABgPgBQgQAAgHABIAAgBIgXABQgqgCgTACIAAAAIgYABIgXABQgcgBgXABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIgEABIgCAAg");
	this.shape_38.setTransform(446,146.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4C3828").s().p("AX7AgIh8ABIAAgBIgQABIABAAQhOgBgZABIAGgBQhpABgxgCIAFgBIgtAAIADAAQgdABgvgCQgtgBgYABIgMgBQACABgQAAIgYAAIAEAAQgkABhHgDQhIgCggABIgBgBIj7gFQhBgChNABIAAAAQiUAAhFADIj2ACQAAAAAAAAQABAAAAAAQAAAAAAAAQgBgBAAAAQgIACgSAAIgkAAQgBAAgBAAQAAAAAAAAQgBAAABgBQAAAAAAAAIADAAQhmABgVgBIADAAIggAAIAGAAIj4gGIjygLIAGAAIgPgBIgegBIgagCIACAAIg2gDIgoABQimgKiXgDIgOgBIgQgBIhmgBQgdgCgKgCIhjgBIADAAIgugBIgogBQgOABghAAIgzAAIh7gBQAAAAAAgBQAAAAAAAAQAAAAgBAAQgBAAgBgBQgHACgYgBQgWAAgCABQgLgCgOABQgPABgMgBQgoAAgOgDQAHACghAAIiGgBQAAAAAAAAQAAAAAAAAQgBAAgBAAQgBAAgCAAIgMABIgDgBQgUgBgMABQgRgCgUAAIgGgBIgDABQgJgBABgBIAFgCIALgBIARAAQgKABAEAAQAAAAABAAQAAABABAAQAAAAgBAAQAAAAAAAAQAAABASAAQATAAABABQAJABACgBQALAAACABIACgBIARAAQANgCAHABIgDAAQAIABAXgBQAagBALABIgCAAIBiACQA8ABAggBQA/ACCAAAIBgAAIBhACIDQAEQB8AEBUAGQAfADBVACQBRADAnABQA9AEB1AEICyAIID8AGIBUgBIAAABIGpgFQBSgBEJADIAAABIJ3AIIDmABIDjABIAWgBQAnABAlgCIAAAAIBfAAQA5gBAfgCQB0AADkgJIAUgCQAMABAjgBIgmADQABAAAAgBQAAAAgBAAQAAAAgBAAQgBAAgCAAIj4AJQAFABgKABIgkAAQgeABgLgBIADAAIgQABIAEgBIiXAEQhgACg0gBIgDAAQhSgBgmACg");
	this.shape_39.setTransform(271.5,151.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4C3828").s().p("AjAAEIAAAAIgDAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIAAgBIgBABIAAgCIABgBIABAAIAAABIAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAIABgBIABABIAAAAIACgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIgBAAIAIAAQAFAAADAAQAGABAKgBIAQAAQAXgEAMAEQACAAAHgBQAHgBADABQAFABAKgCIAPAAIAOAAIAOABIAAAAQAPgBASABIAOgBIAPgBIAAAAIALAAQAJgBAMAAIAUACIATABQAMABAHAAIACAAIAGAAIAAAAIAIAAQAFAAADAAIAcAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIAEAAIAIAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAIAAAAQgNAAgFABIAAgBIgVAAIAAACQgFABgBgCIAAAAIgBAAIAAAAIgZABIAAgBQgHgBgDACIAAgBIgKAAIAAgBIgCABIABgBQgHAAgCABIAAgBIgGAAQgEABgCgBIAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIABAAIgHAAQgDgBgCABIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAIgCAAIABAAQgDAAgGAAQgGAAgDAAIAAAAIgJAAQgQgBgHABIAAAAIgJAAQgGAAgDAAIgTAAIAAAAQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAIgDgBIAAAAQgHABgDgBIAAAAIgDAAIABAAIgVABIgUAAIABgBIgBABIAAgBIgDAAIgCAAIAAAAIgFAAIgDACQgPgCgLADQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAIgCAAIgIABIgDgCQgCACgGAAQgCABgFgCQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAgBIgEABIgLgBIAAgBIgCABQgBAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIABgBQgEAAgBgBQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgLABQAAgBgBABIgBABIAAgBg");
	this.shape_40.setTransform(280.2,141.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4C3828").s().p("AqEALQAAgBgGAAIgIgBIgwABIgJgBQgGAAgDgCQgHABgnAAIABgBQgSABgWgCQgGABgQgBIgYAAIg5gCIgBgCQgEABgLAAQgKgBgBABQgGgCgGABQgGAAgGgBIABAAIgCAAQgRAAgIgBQADAAgPAAIg/gBQABAAAAAAQAAgBAAAAQgBAAAAAAQgBAAgBABIgGAAIgBgBIgPAAQgIgDgJAAIgDgCIgBABQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAAAAAgBIACgBQAAgBAOAAQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAgBAAQAAAAAAAAQAAABAJAAQAIABABABQAEABABgCQABAAAAABQAAAAABAAQAAAAAAAAQAAAAAAABIAEAAIABAAIAIgBQAGgCADABIgBAAQAEACAKAAQANgBAFABIgBAAQAOAAAfADQAdABAPAAQAjABA2ACIBaACQCHgCA8AFQARACAlgBQApgBAPABQAeABA1gBIBUgBIBOABQAyACAdgBIAAAAIDGgEIBQgCIBSgDIBBgBIgBAAQA/gDCogDIBrgDQBAgCArABIAtgCIAtAAQAbAAAOgBIBRAAQApAAAnACQACgBAIAAIAVACQAPgBAeACIABAAIACABIgPgBQgegCgUABQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIh0AAQABAAAAAAQAAAAAAAAQgBAAAAAAQgBABgCAAQgaABgKgBIACgBIgIABIACAAIiNACIABAAQgnAAgSACIABgBIg6ADIAAgCIgIABQgkAAgLACIADgBQgyADgXgBIADAAIgWAAIACAAQgNABgXAAQgUgBgMACIgFgBQABABgIAAIgLAAIACAAQgRABghAAQgiAAgPACIgBgBIgxACQhbAAgrADIAAAAIgzACIgzADQg4AAg5ABQABAAgCAAQgDABgIAAIgSAAQgBgBABAAIABAAIg4AAIgPABIADgBQiZABhLAAIABgBIgGAAIgBAAQgFAAgJAAIgMAAIABgBIgZgBIgUADQhvgEglABg");
	this.shape_41.setTransform(156,136.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4C3828").s().p("ABMBCQAQgDAFgEIAAABIAYgJIAAgBQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQAAAAABAAIAAAAIABgBIAbgNIAGgDQADgCABgCIABAAQAEgDADgGIABAAIAAgBQADgHgEgCIABAAQgBgDgEgDIgFgDIAAAAIgEgCIABgBIgHgDQgEgDgDAAIgBgBQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAIgCgBIABAAQgEAAgHgDQgGgEgEAAIAAAAIgKgDQgTgGgKAAIAAgBQgDABgIgCQgHgCgEABQgOgEgLAAIAAgBQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgEgBIAAgBQgIAAgEgCIAAAAIgDAAIAAAAIgXgDIgYgDIAAgBIgBABIAAgBIgGAAIAAgBIgFgBIAAgBIgEADQgTgGgNACQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgBAAQgJgBgCABIgCgBIgCgCQgBABgJAAIAAAAQgEAAgEgCQgCABgDAAIgFAAIgNgCIAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAIgDABQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAgBQAAAAgBAAIgFgDQAAAAAAABQAAAAAAAAQgBAAgBAAQAAAAgBAAIgOAAQABgBgBAAIgBABIgBgBQAAAAAAAAQgBgBAAAAQgBAAAAABQAAAAgBAAIgEgCIAAgBIAAAAIgBgDQAAAAABgBQAAAAAAAAQAAAAABAAQABAAAAAAIAAABIAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABABIAAgBIACAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAAAABIAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAIgBgBIAKACQAGACAEgBQAHACAMABIAUACIAVAAQAMAAAJAEQAEABAIAAQAJAAADABQAGACAMAAIASACIAPADQALADAGAAIAAAAQAZAEASAEQAGAAAMACIARAEIAAAAIAOAEIAAAAQAaADAVARQAHAEABAEQADAHgEAGQgFAKgOAFIgBACIgHAEIAAAAIgJAEQgGABgCADIgiALIgCACQgDABgCgBIgJAEIAAgBIgBAAIgBABIAAgBIgDABIgDABIAAgBg");
	this.shape_42.setTransform(224.6,124.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4C3828").s().p("AojAwIgBgBQgugHgigJQABABABAAQAAAAAAAAQAAAAgBAAQgBAAgCAAIgLgDQgJgCgDgDIABAAIgFgBIABAAQgQgHgFgFQgFgGAHgFQACgBAIgEQASgHAegGIgBABQANgEAbgDIgBABIAogGIAAABIAGgBIgBAAIASgCIAPgCIgBABIAZgDQAPgCAKABIgCAAIAPgBIgBABQAJgCAQAAQAPAAAHgCIAEAAQAAAAAAAAQAAAAABgBQABAAABAAQABAAABAAIAIgBIgCABQAMgCAXAAQAYgBAKgBIABAAIAigCIAwgBQAeAAAQgCIAAABIAkgCQAXgBAMgBIBRgCQAAAAgBAAQAAAAAAAAQAAAAABAAQAAABAAAAQACgCAGAAIAMAAQAAAAABAAQAAABAAAAQAAAAAAAAQgBAAAAAAIAmAAIgBAAIAKAAIBPgBQAxgBAeABIgBABIAEgBIAAAAQAHgBAMACIgBAAIAJABIAJAAIgBABIAOgEQBBAFAmgCIAFABIAFAAIAiAAIAHABIAFACQAMgCAUABQAKAAASACQAEgBALABIARAAIAoADIABABQACgBAIABIAIAAQAEACAEgBQAFAAAEABIgBAAQAOAAAFADQAAAAgBAAQAAAAABAAQAAAAAAAAQABAAABAAIAGAAIAsADIABAAQABAAABgBQAAAAABAAQAAAAABAAQAAABAAAAIABAAQAHACAEgBIAMADIABACIABgBQABAAABAAQAAAAABABQAAAAAAAAQAAAAAAABIgCABQABAAgBABQAAAAAAAAQgBAAgBAAQAAAAgCAAIgFAAQAGAAgEgCQAAgCgGAAQgGAAAAgCIgEABQAAAAAAgBQAAAAgBAAQAAAAgBAAQgBAAgBAAIgBAAQgBgBgEABQgFACgCgBIABAAQgDgCgHAAQgJABgDgBIAAAAIgfgDQgUgDgLAAQgXgDgngBIg/gDQhWACgygFQgLgBgbABQgbABgMgCQgZgBghABIg6ABIg3AAIg1gBIAAAAIiLADIg5ADQglAAgUACIAAAAIgWABIgXABIABAAIhQAGIhSAEQg8AFhYALIgGACQgSAEgHACQgWAHgGACQgGAFAEAEQAEAEAHADQASAIAjAIIA3AMIAHAAIAIACIAGACIAfAEQABAAAAAAIADABIADAAIgBAAIAKACIAKABQgBAAABAAIAAABIhFgKgAgcg3IAAAAIAAAAg");
	this.shape_43.setTransform(145.6,125.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4C3828").s().p("AAlA3IgzABIAAgBIgHAAIABAAQgigBgKABIACgBIghAAQgUAAgNgBIACgBQgIgBgLABIACAAQgMAAgVgCQgTgBgKABIgGgBQABABgHAAIgKAAIACgBQgSABgcgDIgsgEIgBgBIgtgGQgigGgagJQgVgJgGgGQgDgDgBgDQAAgCACgEQAEgEAJgFIAAABQAPgIAegGIAtgIQAjgEBHgFQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAQAEgCAHAAIAPgBQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIAagBIAbgCIgCABIAOgBIgCAAIBqgEQA7gCArABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAFgBIABABQAJgBAPABIgBABIAMABIALAAIASgDQBdAIAqACQABABAFAAIAHACQATABAZAGQANAGACAEIAEADIABAEIAAADQAAAFgIAGQgIAEgOAEIABgBQgOAGgWADQgGADgOACIgVAEIg0AGIgCgBQgCACgLABQgJABgBABQgFgBgGACQgGABgFgBIAAAAQgSACgGgBQAFABgPABIg6AFQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgFABIgBAAIgOABIAAAAIgQgBIAAgBIgBABQgBAAgBAAQgBAAgBgBQAAAAAAAAQAAAAAAAAIACgCQgBgBAEgBIAHAAQgBAAgBAAQgBAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAIgBQAIAAAAABQABAAABgBQABAAAAAAQABAAAAAAQABAAAAAAIAGAAIAAAAQACAAAFgCQAGgCADABIgBAAQADABAKgCQALgCAFABIgBgBIApgCQAagCAOgCQAmgDArgHIAogJQAYgFAQgEQAGgDAEgDQAGgEgBgGQgBgEgHgDIgKgEQgOgEgegEIhYgKQgQgCgiAAIgzgBQgdgCgvACIhKABQhgACgwADIAAAAQiAAIg1AKQgVAFgOAFQgMAFgEADQgEADgBADQAAACADADQAJAIAYAJQAQAEAUAEIAAAAQAsAIAPACIgCAAIA1AEIA0ACIBqAFQBCACCAAAIAJgBIAggBIApAAQAYgBAOgCQAzgCBfgJIAJgCQAFABAOgCQANgEAcgDQAAgBAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIADgBIgBABQAJgBASgEQgCAAABAAQABAAAAABIgtAIQgXADgWAEQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQguAHg7AEQAAAAAAAAQAAABAAAAQAAAAgBAAQgBAAgBAAQgXADgKgBIACAAIgHABIACgBQhgAFggABIgBAAQgkgBgQACg");
	this.shape_44.setTransform(168.6,128.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4C3828").s().p("AhCAmQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIgBABIgBAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIABAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAgBAAAAIAAABIgKgDQgGgCgEABQgGgCgNgCQgNgBgHgCQgOgBgHgCQgOgEgFgIIgBgFQABgCADgCQAHgDAFAAIASgFIARgFIASgCIARgDIAAABIAsgHQAGgCAMgBIASgCIAOgCIAAABQAIgDApgCIAYgBQAPgBAJABIACgBIAIgBIAKAAQAGAAADgBIAkgBIACgBQABABAEAAIAKgBIAAABIABgBQABAAAAABQAAAAABAAQAAAAABAAQAAgBABAAIADAAIAAABQgPgBgHACIgBgBIgaACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIgEAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBAAAAIAAAAIgBABIAAgBQgVADgKAAIAAAAQgJgBgEACIAAgBIgMACIAAgBIgCABIAAgBQgIAAgDABIABgBIgIACQgFABgDgBIAAgBIgEABIAAgBQgDABgFAAQgEgBgDACIgBgBQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIAAAAQgDABgIAAQgHgBgBACIgBgBIgLACQgUAAgJADIAAAAIgLACIgLACQgNABgNADIAAgBQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAIAAgBQgIADgFgBIABAAIgEABIABAAIgZAFIgYAFIAAAAIgBAAIAAAAIgGAAIAAAAIgFABIgDAEIgFACQAAAAAAABQAAAAAAAAQAAABABAAQAAABABABQAGAFAIAAQgBAAABAAQAAABAAAAQAAAAABAAQAAABABAAIALABIADADIAKABIAAAAQADAAAFACIAFAAQAEABACgBIAMADIAAABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAIAAAAIAGADQgBgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIACAAIAOAAQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAABgBIAAABQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAEACIABABIAAgBQAAAAAAABQABAAAAAAQAAABgBABQAAAAAAABQAAABAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_45.setTransform(168,127.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4C3828").s().p("AghAOIgCABIgGAAIAAAAIgIgBQgFgBgDABQgXgCgGgCIgCAAQgBgBgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQgFgBgDgFQAAAAAAgBIAAAAIgBAAIAAAAQgBgFACgDQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQgBACAAAEQAAABACADQAFAEAFAAIAAABIAVAEIABgCQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAIADAAIAAABIABgBIAAABIAagBIgBABIAGAAQADAAACgBIgBABIALgBIAAABIABgBIAAABIAFAAIAEgBIgBABIAFgBQAEgBACABIAAABIAEgBIAAABQACgBAEABQAEAAACgCIABABQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIACgBIAAABQADgCAGABQAGAAACgBIABAAIAIgBIAMgBQAIgBAEgCIAAABIAJgDQAGgBACAAIAEgCIgBAAIgJgCIAAAAIgCAAIgDAAIAAgBIgKgBIAAgBIgDABIABgBQgIgBgNABIgVAAIABgBIgBAAIAAAAIgCAAIgDgBIAAAAIgEgBIAAAAIgEADQgPgEgJAEIgBgBIgCAAIgIABIgEgCIgIACIAAgBQgCABgFgBQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEAAIgLAAIAAgBQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABgBgBQAAAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQABAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIgLABQAAAAgBABQAAAAAAAAQAAAAAAAAQAAgBgBAAIAAAAIgCAAIgEgCIAAgBIAAABQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAIABAAIAAABIAAABQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIABgBIABgBQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIgBAAQABAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIADgBIAAAAIAIABQAFABADgBQAGABAKgBIAQAAIASgDQAKAAAGACQACABAIgBQAHgBADABIAPAAQAKgBAFABQAJAAATAEIAAAAQAMABAGAEQAAAAABABQAAAAAAAAQAAABAAAAQAAAAgBABIgCAAIgNAEQgEACgKABIgPADIAAAAIgLABIAAAAQgNAEgdAAIgPAAQgNAAgJgBg");
	this.shape_46.setTransform(170.2,129.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4C3828").s().p("A50AYQBjgDAvgEIADABICpgJIAEgBIAYgBQAUgBAJAAIgDABIALgCIgCABIBmgFQA7gCArgBIAqgBQAagBAPgBIgBABIBVgEIAAABIALgBIgBAAIAlgBIAhgCIgEABIA2gDQAfgBAUAAIgDABIAfgCIgCABQATgCAhAAQAeABARgCIAIAAQgDgCAdAAIgDABQAYgCAxAAQAxAAAXgCIAAABQA0gCAVABIBjAAQA9ABAkgBIAAAAIBKgBQAxAAAZgBQBdABBLgCQgBABgBAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAGgBAMAAIAZAAQABAAAAABQABAAAAAAQgBAAAAAAQgBAAgBAAIBUAAIgCABIAWgBIgEABICpABICkABIgCABIAJgBIABABQAOgBAZABIgDAAIAmACQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAdgDQCCAFBWgCQABABATAAIBGgBIAPABQAIAAAEACIBDgBIgCABQAbgBAgACQAKgBAXABIAiAAIBUACQAAABAAAAQAAAAAAAAQAAAAABABQAAAAABAAQAEgBARAAQAPABABgBQAIABAKAAQAKgBAIABQAaAAAMADQgBAAAAAAQAAAAAAAAQABgBABAAQABAAACAAIANAAIBcABQgBABAAAAQAAAAABAAQAAAAABAAQABAAABAAIAIgBIACABQAQABAGgBIAAAAIAZADIAEABIACgBQAHABgBABIgEABIgHAAIgMAAQAHAAgCAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAABAAQAAgCgNAAQgNAAAAgBIgFAAIgDAAQACgBgLAAIgBABIgLAAQgKACgEgBIABAAQgFgCgPABQgSABgIgBIACAAIhDgCQgpgCgXAAQgvgChSgBIiEgDIiPABQhRAAg9gDQgXgCg4ABQg5ABgZgCQgogBhSABIh6gBIhygCQhKgCgpABIAAAAIkiAAQgnAChPgBIh3ABQg9gBghACIABgBQhIAEhgACIiqADQjSAJhmABIhDACIhBACQgnABgVADQieAHhNADIgOABQgaACgFgBIghACIghACQADgBgEAAQgCABgLAAIACgBQgbADgQAAQAFgBgFgBg");
	this.shape_47.setTransform(282.1,29.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4C3828").s().p("A4tAuQAAAAAAgBQAAAAAAAAQgBAAAAAAQgBAAgBAAQgFABgUgBIgTAAQgJgBgMABQgMABgKgCIADAAQgiAAgMgCQAFABgbgBIhtgCQABAAAAAAQAAAAAAAAQgBAAgBAAQgBAAgBAAIgKAAIgDAAQgRgCgIABIgBAAQgNgCgRgBIgEgBIgDABQgIgBABgBIAEgCQgBgBALAAIAOABQgJAAADABQADAAgCAAQAAACAPAAQAPAAABACQAHAAACgBIALABIABAAIAOgBQALgBAFABIgCAAQAGACATgBQAVgBAJABIgCAAQAXAAA5ADQAwACAbgBQA+ADBcgBICdgBIBVgEIBUgFIBUgHQA1gGAfgBIBegHQBKgFAXAAICRgGQBWgCA7ABQAeAAAmAAIBEAFQA1AEBTgDIAAAAQA8gDB0gHQB0gJA0gDQBCgFBKgEQBggEAugEIAAABQAlgDBMgCIgDABQB/gIBIgBICXgBIA0AAQCoACDKAVIASABQAmAEAYAAIgBABIBOAHQAtAEAaAAQAnADAfABIBGABICLgCIAQgCQAKABAcgBIAmgDIAogCQABAAgCABIACAAIADAAIgaABIhXAGQABAAAAgBQAAAAAAAAQgBAAgBAAQAAAAgCAAQghAChEABIgzAAQgYAAgZAAQABAAABAAQAAAAAAAAQgBAAgBAAQgCAAgDAAIgcAAQgZAAgJgBIADgBIj/gSIADAAQhEgGgggCIACAAIhkgHIgBgBIgNAAIACAAQhAgEgUAAIAFgBIhAgBIg9gBIAEgBIglABIADAAIg+ABQgjgBgVACIgKAAQACABgNAAIgUABIAEgBQgeACg5ABQg7ABgaACIgBAAIhWADIh1AFQhJADgqAEIAAgBIhZAGQg4AEgfAEIjHANQAFgBgFAAQgGACgOAAIgeABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACgBIgyACQgeABgUgBIACAAIgVAAIhkgGIgzgBIgyAAQhXAChrAEIACgBIgKABIgBgBIgYACIgXAAIADAAQgeAAgPABIACAAIgiAFIiCAIQgYABgpAFIg9AHQgUACgEgBIguAEIglACIgSAAIgOgBQgbADgzAAQgdABgpgBQgLABgbAAIgqAAg");
	this.shape_48.setTransform(271.3,69.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4C3828").s().p("EgitAAiIgDgBIgeABIgQgBIgUgBIgFgBIgDABQgJAAABgBIAFgCQgCgBAMgBIARAAQgKABADAAQABAAABABQABAAAAAAQAAAAAAAAQgBAAgBAAQABACARgBQASAAABABIAHAAIADgBQAFAAAAABIAIAAIACgBIAQgBQANgCAGABIgCAAQAHABAWgBIAjgBIgCAAIBdAAQA5AAAggCQBBABB0gDQCFgDAzAAQDwgICdABQAgAABPgDQBPgDAjAAQA8gBBugGICpgFQAzgDBugDQBngDA5gDIgBABQBEgDCKgDIBlgCQA7gBAnABQA4gBBsABQB3ABAwAAIAAAAICFACIgDAAQBkgBCGACIKhAAIAVgCIBIgDIBbgDQA2gCAegCQDUgCB0AGIATgBIAYACIAVABQAeAAA9AEQABAAABAAQAAAAAAAAQABAAgBAAQAAABAAAAIAPABIAAAAQALABASABIAfABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAABABAAIABABQh4gKhVgBQABAAABAAQAAAAAAgBQgBAAgBAAQgBAAgCAAQicgEhRAAQAFAAgKABIgiAAQgcABgLgBIADAAIgPABIADgBQggAAgoADIhHADQhIAEhIACIADgBIg8ACIg5ABIACAAIh2ACIgBgBIgQABIACgBQhKAAgYABIAGgBIhLABQgsAAgcgBIAEAAQgSgBgZABIAEgBIhJAAQgqgCgYACIgMgBQACABgPAAIgXABIAEgBQgiABhDgCQhGgBgeAAIgBAAIhmgBQi5gEhYABIABAAQg0ABg1gBIg0AAIgyACQiEABhmAEQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQgIACgRAAIgjABQAAAAgBAAQAAAAAAAAQgBAAAAAAQABAAAAAAIACgBQhOAEgnABIADgBIgeACIAFAAIjsAIIjkAJIADgBIgNABIgBAAIg2ABIADAAQgjgBgSABIACAAIgoAEQinABiHAFQgXABgFgBIhiADIgUAAQgLAAgGgCQgdAChBABIADAAQgTABg/AAQgNABggAAIgxACIh1ABIgCgBQgHABgXAAQgVAAgCABQgLgBgNABQgOABgMgBIADAAQglABgSgCQAJABghABIiAACQABAAAAAAQAAgBAAAAQgBAAgBAAQgBAAgCABIgKABIgCAAg");
	this.shape_49.setTransform(279.1,116.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4C3828").s().p("EApMAAfIADAAIAKAAIgDABIAiADIAlAFQgCAAAAAAQgBAAAAAAQAAAAAAAAQAAAAABAAIACABIhRgKgEAmsAAVQAAAAAAAAQAAAAgBAAQAAAAgBgBQgBAAgBAAIkXAAQAHABgNAAQg+ABgZgCIAEAAIgSAAIAEAAIlSAAIADAAQhfgBgrABIACgBIiLgBIAAgBIgTAAIACAAQhYgCgbABIAGgBQiAgBgtgDIAFAAIgzgBIAFAAQgeAAg4gDQgxgCgcABIgOgBQACABgSgBIgbAAIAFgBQgqABhOgEQhUgBghAAIgCgBIh3gDQjagJhogBIABgBQgnAAhUgDQhRgCgoAAQiSgGiDgBQAHgBgGAAQgJABgUgBIgpgBIgCAAIADgBIiKgCIADgBIgdAAQiCgDiUABIjOAEIhCACQAGAAAAgBIgOABIgCAAQgMACgVAAIgfACIAEgBIg8ADIAAAAIgvAHIACgBQj5AKhsAHIgiAAIhyADQglAAgHgBIgzACIg5ABQgyACgvgBQgQABglAAIg5ABIiKgCQABAAAAAAQAAAAAAgBQgBAAgBAAQgBAAgBAAQgIABgbgBIgbAAQgMgCgRABQgPAAgNgCIACAAQgqgCgXgCQAGABgjgCQhigKg0ABQABAAAAAAQAAAAAAAAQgBAAgBAAQgBAAgCAAIgOAAIgEAAQgYAAgLABQgTAAgWAEIgHAAIgDACQgLADACgCIAEgEIADgBIAKgDIATgDIgIACQABAAABAAQAAAAAAAAQABAAgBAAQAAAAAAAAQAAABAVgCQAUgCACACIAMgBQANgBACABIACAAIATgBQAPgCAIABIgDABIAiACQAcAAANACIgCgBICiANIA0ABIBqADIChAAIJ2gRQA6gBBJgGQBpgIAdgBQDGgNDKADQB/AAD7AGIgBABIHeAMIDBAFIDFAGICcAFIgEAAQCrADGBAKQA0ACDOADIEXADQAvABAngBIBrABQBBAAAigBIGDACQADgBATAAIAcACIAYACIA2ACIA2AFQgBAAAAAAQAAAAAAAAQABABAAAAQABAAABAAIADABQhbgKhAAAg");
	this.shape_50.setTransform(283.6,169.1);

	this.addChild(this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,556.7,188.8);


(lib.Group = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDD75F","#DDAC5E","#C88C58","#784834","#5F3725"],[0,0.29,0.541,0.824,1],-107.9,-91,0,-107.9,-91,345.1).s().p("AilA/Qo1g8ARg0QAPgxIagRQEqgKGTACIBuCbIgaArIBCAOIAXAjQmDgJnsg0g");
	this.shape.setTransform(71.5,12.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,143,25);


(lib.pulpAni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pulp
	this.instance = new lib.Tween5Fox("synched",0);
	this.instance.setTransform(92.1,58.5,0.537,1.255,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.3,scaleY:0.51,rotation:1080,x:405.7,y:-406.6},12).to({_off:true},1).wait(11).to({_off:false,scaleX:0.54,scaleY:1.25,x:92.1,y:58.5},0).to({scaleX:0.3,scaleY:0.51,rotation:2160,x:405.7,y:-406.6},14).to({_off:true},1).wait(12));

	// pulp
	this.instance_1 = new lib.Tween5Fox("synched",0);
	this.instance_1.setTransform(104.1,44.3,0.934,0.872,0,0,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({scaleX:0.54,scaleY:0.5,rotation:-1080,x:505.2,y:-275.5},14).to({scaleX:0.93,scaleY:0.87,x:104.1,y:44.3},1).to({scaleX:0.54,scaleY:0.5,rotation:-2160,x:505.2,y:-275.5},14).to({_off:true},1).wait(6));

	// pulp
	this.instance_2 = new lib.Tween5Fox("synched",0);
	this.instance_2.setTransform(135.2,-12.4,1.662,1.732,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.52,scaleY:0.54,rotation:-1080,x:511.9,y:-79},14).to({_off:true},1).wait(4).to({_off:false,scaleX:1.66,scaleY:1.73,x:135.2,y:-12.4},0).to({scaleX:0.52,scaleY:0.54,rotation:-2160,x:511.9,y:-79},14).to({scaleX:1.66,scaleY:1.73,x:135.2,y:-12.4},1).to({scaleX:0.52,scaleY:0.54,rotation:-3240,x:511.9,y:-79},9).to({_off:true},1).wait(7));

	// pulp
	this.instance_3 = new lib.Tween5Fox("synched",0);
	this.instance_3.setTransform(34.8,58.5,0.559,1.255);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({scaleX:0.32,scaleY:0.51,rotation:1080,x:-291.9,y:-406.6},14).to({_off:true},1).wait(7).to({_off:false,scaleX:0.56,scaleY:1.25,x:34.8,y:58.5},0).to({scaleX:0.32,scaleY:0.51,rotation:2160,x:-291.9,y:-406.6},13).wait(1));

	// pulp
	this.instance_4 = new lib.Tween5Fox("synched",0);
	this.instance_4.setTransform(22.3,44.3,0.973,0.872);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({scaleX:0.56,scaleY:0.5,rotation:-1080,x:-395.5,y:-275.5},14).to({scaleX:0.97,scaleY:0.87,x:22.3,y:44.3},1).to({scaleX:0.56,scaleY:0.5,rotation:-2160,x:-395.5,y:-275.5},14).to({_off:true},1).wait(16));

	// pulp
	this.instance_5 = new lib.Tween5Fox("synched",0);
	this.instance_5.setTransform(-10.1,-12.4,1.732,1.732);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.54,scaleY:0.54,rotation:-1080,x:-402.5,y:-79},14).to({scaleX:1.73,scaleY:1.73,x:-10.1,y:-12.4},1).to({scaleX:0.54,scaleY:0.54,rotation:-2160,x:-402.5,y:-79},9).to({_off:true},1).wait(5).to({_off:false,scaleX:1.73,scaleY:1.73,x:-10.1,y:-12.4},0).to({scaleX:0.54,scaleY:0.54,rotation:-3240,x:-402.5,y:-79},14).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.1,-91.1,290.3,206.7);


(lib.logoForAnim = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkZg5IAMg5QAKACAKABQAKACALAAQALgDAFgFQAFgGACgHQACgIACgGQgGACgHABQgGABgHAAQgOAAgNgCQgMgBgJgBQgkABgWAKQgWALgJARQgKARAAAUQAAAPAIAHQAIAGAPAAQAAgBgBgCQgBgCgBgEQgBgEAAgHQAAgXAFgNQAEgNAJgFQAIgGAMAAIgqDAIAqAAIAXhrIAqAAIAFgWgAiohKQgSAAgOAIQgNAHgJAMQgJAMgGANQgGAOgCAMQgDANAAAKQAAARAGAKQAGAKALAEQAKAFAOAAQASAAAOgLQAPgKAKgUQAJgTADgZQAPgDAOgGQgDAFgBAFQgGAOgDARIAMAAQAFgWAHgQQAEgIAEgHQABgBACgCIAAgBQABgDACgBQAHgIAGAAQAEAAACAFQADAFACAOIAEAfIg6BCIAVAAIAogxQAEAaAJAMQAJANANgBQAJABAJgFQAKgEALgLQADgDACgDQACALAGAGQAJAJANgBQAIABAJgEQAIgDAKgKIgEAQQgLADgLAGQgKAFgIAJQgHAIAAAMQAAAKAFAGQAEAGAHADQAIADAJAAQAJABALgEQALgEAIgLQAIgLAFgUIAEgVQAKgCAJgGQAKgFAIgLQAJgLAFgTIgLAAQgFAMgFAIQgFAIgHAFQgGAFgJADIAciEIgpAAIgUBcQgEALgGAGQgFAHgIAAQgFAAgCgEQgCgDAAgFQAAgCAAgCQAAgCABgCIAVhgIgqAAIgUBbQgDALgHAHQgHAHgJAAQgHAAgDgFQgEgGgCgOIgDgUQAMgNAJgLQAJgLAEgIQAFgJAAgJQAAgHgCgGQgCgGgDgEQgEgEgGAAQgIAAgDAEQgGADAAAHQAAAHADAFQADAEAGABQABAAABgBQABAAACAAQgBAIgGAKQgFAKgMAOIgCgWQgBgIgDgIQgDgIgHgFQgGgFgMgBQgOABgMAIQgLAJgIANQgCADgBADQgBAAAAAAQgIAEgIADQgIACgHAAQgBAAAAAAQgBAAgBAAQAAgXgJgMQgKgMgSAAgAi+AvQgIAAgDgFQgEgFAAgOQAAgLADgMQAEgNAFgNQAFgNAHgIQAHgJAIAAQAGAAACAEQADAEAAAJQgEABgCAEQgDAEAAAGQAAAFACADQABADAFACQgDAPgFANQgFAOgHAIQgHAIgHAAgADMhZIAWAAIAag3IgeAAgAFqAUQgEADgFAEQgFAEgGADQAAgCABgDQAAgDAAgDQAAgHgBgHQAAgHgBgJQgBgKgBgSQgBgRgCgcIgqAGQgHAVgJAVQgIAWgMATQgGADgFAHQgEAHgBAKQAAAJAFAJQAEAIAKAGQAJAFAPAAQALABANgFQAMgDAJgKQAKgGAMgJQALgIAMgNgAEWAUQAAgEgCgCQgBgDgDgBQAHgMAGgOQAGgNAEgOQABAQABALQABALACAFQAAAHAAAGQABAFAAAGQAAAKgEAGQgDAGgGACQgGADgGAAQgKAAgEgFQgEgFAAgLQABADACAAQACABADAAQAFAAAEgEQADgFAAgFgAA+BwQAAgGAEgEQAEgFAGgDQAHgEAHgDIgBAJQgDANgFAGQgEAHgFAAQgFgBgCgDQgDgDAAgDg");
	this.shape.setTransform(144.9,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C643D9").s().p("ABPCQQgJAAgIgDQgHgDgEgGQgFgGAAgKQABgMAGgIQAIgJAKgFQALgGAMgDIADgQQgKAKgIADQgJAEgIgBQgNABgJgJQgGgGgCgLIgFAGQgLALgKAEQgJAFgIgBQgNABgKgNQgIgMgFgaIgoAxIgVAAIA7hCIgFgfQgCgOgCgFQgDgFgEAAQgFAAgIAIIgDAEIAAABIgDADIgIAPQgGAQgGAWIgMAAQADgRAGgOIAEgKQgOAGgPADQgDAZgJATQgJAUgQAKQgOALgSAAQgOAAgKgFQgKgEgHgKQgFgKAAgRQAAgKACgNQADgMAFgOQAGgNAJgMQAKgMAMgHQAOgIASAAQASAAAKAMQAJAMAAAXIACAAIABAAQAHAAAIgCIAQgHIABAAIADgGQAIgNALgJQAMgIAPgBQALABAHAFQAGAFADAIQADAIABAIIADAWQAMgOAEgKQAGgKAAgIIgCAAIgCABQgGgBgDgEQgDgFAAgHQAAgHAGgDQADgEAJAAQAFAAAEAEQADAEACAGQACAGAAAHQAAAJgEAJQgFAIgJALIgUAYIACAUQACAOAFAGQACAFAHAAQAJAAAHgHQAHgHADgLIAUhbIAqAAIgVBgIAAAEIAAAEQgBAFACADQACAEAFAAQAIAAAFgHQAGgGADgLIAVhcIAqAAIgdCEQAJgDAGgFQAHgFAGgIQAEgIAFgMIALAAQgFATgIALQgJALgKAFQgKAGgJACIgEAVQgEAUgJALQgJALgKAEQgJAEgJAAIgCgBgABNBeQgHADgDAFQgFAEAAAGQAAADADADQADADAEABQAFAAAEgHQAFgGADgNIABgJIgNAHgAi1gvQgGAIgGANQgFANgDANQgDAMgBALQAAAOAEAFQADAFAIAAQAIAAAHgIQAHgIAEgOQAFgNADgPQgEgCgCgDQgCgDAAgFQAAgGADgEQACgEAEgBQAAgJgCgEQgDgEgGAAQgHAAgIAJgAEdBJQgPAAgJgFQgJgGgFgIQgFgJAAgJQABgKAFgHQAEgHAGgDQAMgTAIgWIAQgqIArgGIACAtIACAcIABAQIABAOIAAAGIgBAFIALgHIAKgHIAMAAQgLANgMAIQgLAJgLAGQgJAKgMADQgLAFgLAAIgCgBgAEGAuQAEAFAKAAQAGAAAGgDQAGgCADgGQAEgGAAgKIAAgLIgBgNIgDgQIgCgbQgEAOgGANIgNAaQADABABADQACACAAAEQABAFgEAFQgDAEgGAAIgFgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAALAEAFgAlfBIIAqjAQgMAAgIAGQgJAFgEANQgFANAAAXIABALIACAGIABADQgPAAgIgGQgIgHAAgPQAAgUAKgRQAKgRAVgLQAWgKAkgBIAVACQANACAOAAIANgBIANgDIgEAOQgCAHgFAGQgFAFgLADIgUgCIgVgDIgMA5IArAAIgGAWIgqAAIgXBrgADMhZIASg3IAeAAIgaA3g");
	this.shape_1.setTransform(144.9,27.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ADMhZIAWAAIAag3IgeAAgAFqAUQgEADgFAEQgFAEgGADQAAgCABgDQAAgDAAgDQAAgHgBgHQAAgHgBgJQgBgKgBgSQgBgRgCgcIgqAGQgHAVgJAVQgIAWgMATQgGADgFAHQgEAHgBAKQAAAJAFAJQAEAIAKAGQAJAFAPAAQALABANgFQAMgDAJgKQAKgGAMgJQALgIAMgNgAEWAUQAAgEgCgCQgBgDgDgBQAHgMAGgOQAGgNAEgOQABAQABALQABALACAFQAAAHAAAGQABAFAAAGQAAAKgEAGQgDAGgGACQgGADgGAAQgKAAgEgFQgEgFAAgLQABADACAAQACABADAAQAFAAAEgEQADgFAAgFgAiohKQgSAAgOAIQgNAHgJAMQgJAMgGANQgGAOgCAMQgDANAAAKQAAARAGAKQAGAKALAEQAKAFAOAAQASAAAOgLQAPgKAKgUQAJgTADgZQAPgDAOgGQgDAFgBAFQgGAOgDARIAMAAQAFgWAHgQQAEgIAEgHQABgBACgCIAAgBQABgDACgBQAHgIAGAAQAEAAACAFQADAFACAOIAEAfIg6BCIAVAAIAogxQAEAaAJAMQAJANANgBQAJABAJgFQAKgEALgLQADgDACgDQACALAGAGQAJAJANgBQAIABAJgEQAIgDAKgKIgEAQQgLADgLAGQgKAFgIAJQgHAIAAAMQAAAKAFAGQAEAGAHADQAIADAJAAQAJABALgEQALgEAIgLQAIgLAFgUIAEgVQAKgCAJgGQAKgFAIgLQAJgLAFgTIgLAAQgFAMgFAIQgFAIgHAFQgGAFgJADIAciEIgpAAIgUBcQgEALgGAGQgFAHgIAAQgFAAgCgEQgCgDAAgFQAAgCAAgCQAAgCABgCIAVhgIgqAAIgUBbQgDALgHAHQgHAHgJAAQgHAAgDgFQgEgGgCgOIgDgUQAMgNAJgLQAJgLAEgIQAFgJAAgJQAAgHgCgGQgCgGgDgEQgEgEgGAAQgIAAgDAEQgGADAAAHQAAAHADAFQADAEAGABQABAAABgBQABAAACAAQgBAIgGAKQgFAKgMAOIgCgWQgBgIgDgIQgDgIgHgFQgGgFgMgBQgOABgMAIQgLAJgIANQgCADgBADQgBAAAAAAQgIAEgIADQgIACgHAAQgBAAAAAAQgBAAgBAAQAAgXgJgMQgKgMgSAAgAkZg5IAMg5QAKACAKABQAKACALAAQALgDAFgFQAFgGACgHQACgIACgGQgGACgHABQgGABgHAAQgOAAgNgCQgMgBgJgBQgkABgWAKQgWALgJARQgKARAAAUQAAAPAIAHQAIAGAPAAQAAgBgBgCQgBgCgBgEQgBgEAAgHQAAgXAFgNQAEgNAJgFQAIgGAMAAIgqDAIAqAAIAXhrIAqAAIAFgWgAi+AvQgIAAgDgFQgEgFAAgOQAAgLADgMQAEgNAFgNQAFgNAHgIQAHgJAIAAQAGAAACAEQADAEAAAJQgEABgCAEQgDAEAAAGQAAAFACADQABADAFACQgDAPgFANQgFAOgHAIQgHAIgHAAgAA+BwQAAgGAEgEQAEgFAGgDQAHgEAHgDIgBAJQgDANgFAGQgEAHgFAAQgFgBgCgDQgDgDAAgDg");
	this.shape_2.setTransform(146.3,28.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABPCQQgJAAgHgDQgIgDgEgGQgFgGAAgKQAAgMAIgIQAHgJALgFQAKgGALgDIAEgQQgJAKgJADQgJAEgIgBQgNABgJgJQgGgGgCgLIgFAGQgKALgLAEQgJAFgJgBQgNABgIgNQgKgMgEgaIgoAxIgVAAIA7hCIgFgfQgCgOgCgFQgDgFgEAAQgGAAgHAIIgDAEIAAABIgDADIgIAPQgGAQgGAWIgMAAQAEgRAFgOIAEgKQgOAGgPADQgCAZgKATQgKAUgOAKQgPALgSAAQgOAAgKgFQgLgEgFgKQgHgKABgRQgBgKADgNQACgMAGgOQAGgNAJgMQAJgMANgHQAOgIASAAQATAAAJAMQAJAMAAAXIACAAIABAAQAHAAAIgCIAQgHIABAAIADgGQAIgNALgJQAMgIAOgBQAMABAGAFQAHAFADAIQADAIABAIIADAWQAMgOAEgKQAGgKABgIIgDAAIgDABQgFgBgDgEQgDgFAAgHQAAgHAGgDQADgEAJAAQAFAAAEAEQAEAEABAGQACAGAAAHQAAAJgFAJQgEAIgJALIgVAYIADAUQACAOAEAGQADAFAHAAQAJAAAHgHQAHgHADgLIAVhbIApAAIgVBgIAAAEIAAAEQgBAFACADQACAEAFAAQAIAAAFgHQAHgGACgLIAVhcIApAAIgcCEQAJgDAHgFQAGgFAFgIQAFgIAFgMIALAAQgFATgIALQgJALgKAFQgJAGgJACIgFAVQgFAUgIALQgIALgLAEQgJAEgJAAIgCgBgABMBeQgFADgFAFQgDAEgBAGQAAADADADQADADAEABQAFAAAFgHQAEgGADgNIACgJIgPAHgAi1gvQgGAIgGANQgFANgEANQgCAMAAALQgBAOAEAFQADAFAIAAQAHAAAIgIQAGgIAFgOQAFgNADgPQgFgCgBgDQgCgDAAgFQABgGACgEQACgEAEgBQAAgJgCgEQgDgEgGAAQgHAAgIAJgAEdBJQgOAAgKgFQgKgGgEgIQgFgJABgJQAAgKAEgHQAFgHAGgDQAMgTAJgWIAPgqIAqgGIADAtIACAcIACAQIAAAOIAAAGIgBAFIALgHIAKgHIAMAAQgMANgLAIQgMAJgKAGQgJAKgMADQgLAFgLAAIgCgBgAEGAuQAFAFAJAAQAHAAAFgDQAGgCAEgGQADgGAAgKIgBgLIAAgNIgCgQIgDgbQgEAOgGANIgNAaQADABABADQACACABAEQAAAFgEAFQgEAEgFAAIgEgBQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAALAEAFgAlfBIIAqjAQgLAAgJAGQgIAFgFANQgFANAAAXIABALIACAGIABADQgPAAgIgGQgHgHgBgPQAAgUAKgRQAKgRAVgLQAXgKAjgBIAVACQAOACANAAIAOgBIAMgDIgDAOQgDAHgFAGQgFAFgLADIgUgCIgVgDIgMA5IArAAIgGAWIgpAAIgYBrgADMhZIASg3IAeAAIgaA3g");
	this.shape_3.setTransform(146.3,28.9);

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(187.8,79.9,1.073,1.073,-8.5,0,0,159.8,48.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#A2D223","#415312"],[0.157,1],-5.2,5.8,0,-5.2,5.8,33.9).s().p("AiMgsQA1g/AwgSQA2gWB9AlQApAMAnAPQAiANgDABQiZAUhKAbQhwAniiB1QA0huA6hEg");
	this.shape_4.setTransform(180.2,42,0.616,0.409,0,-9.4,-7.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#A2D223","#415312"],[0.157,1],-3.6,5.8,0,-3.6,5.8,36.6).s().p("AgniJQgkggg5gLIgygDQBog2B5gIQBfgHAMALQBYBIiRDXQhIBshYBeQCMkahwhng");
	this.shape_5.setTransform(207,43,0.616,0.409,0,-9.4,-7.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#2B380B","#39490F","#4D6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.475,0.51,0.573,0.643,0.725,0.824,1],-42.8,6.4,0,-42.8,6.4,72.9).s().p("AiMgrQBDhUAvgSQA2gVB9AkQApAMAnAPQAiAOgDAAQiEARhsAyQhwAyivB9QA1hvBGhVg");
	this.shape_6.setTransform(179.5,42.9,0.616,0.409,0,-9.4,-7.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#2B380B","#39490F","#4D6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.475,0.51,0.573,0.643,0.725,0.824,1],-19.3,8.5,0,-19.3,8.5,49.1).s().p("AgyiJQghgkg0gOIgvgIQBpg1B5gJQBegGANALQBYBIidDiQhOByheBkQCMkbhkhyg");
	this.shape_7.setTransform(207.1,43.5,0.616,0.409,0,-9.4,-7.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAFQgDgCAAgDQAAgGAGAAQAHAAAAAGQAAAHgHAAQgBAAgCgCg");
	this.shape_8.setTransform(134.2,103.3,0.616,0.409,0,-9.4,-7.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAKQgFgEAAgGQAAgFAFgEQAEgFAEAAQAFAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgFAAQgEAAgEgFg");
	this.shape_9.setTransform(136,102.8,0.616,0.409,0,-9.4,-7.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],-1.9,5.3,0,-0.7,2.6,10.8).s().p("AgoAsQgRgSAAgaQAAgYARgUQARgSAXAAQAYAAARASQARATAAAZQAAAagRASQgRATgYAAQgXAAgRgTg");
	this.shape_10.setTransform(135.6,103.9,0.616,0.409,0,-9.4,-7.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2381D").s().p("AguAzQgUgWAAgdQAAgdAUgVQAUgVAaAAQAcAAATAVQAUAVAAAdQAAAdgUAWQgTAVgcAAQgaAAgUgVg");
	this.shape_11.setTransform(135.5,104.3,0.616,0.409,0,-9.4,-7.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgDQADgDACAAQADAAADADQACADAAADQAAAEgCADQgDADgDAAQgCAAgDgDg");
	this.shape_12.setTransform(141.5,88.7,0.616,0.409,0,-9.4,-7.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLAPQgFgHAAgIQAAgHAFgGQAFgHAGAAQAHAAAFAHQAFAGAAAHQAAAIgFAHQgFAGgHAAQgGAAgFgGg");
	this.shape_13.setTransform(143.7,88.1,0.616,0.409,0,-9.4,-7.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],-2.2,7.3,0,-0.8,3.5,14.6).s().p("AgyA9QgVgZgBgkQABgjAVgZQAVgaAdAAQAdAAAWAaQAVAZABAjQgBAkgVAZQgWAagdAAQgdAAgVgag");
	this.shape_14.setTransform(143.2,89.6,0.616,0.409,0,-9.4,-7.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2381D").s().p("Ag6BGQgYgdAAgpQAAgoAYgdQAZgdAhAAQAiAAAYAdQAZAdAAAoQAAApgZAdQgYAdgiAAQghAAgZgdg");
	this.shape_15.setTransform(143.1,90.1,0.616,0.409,0,-9.4,-7.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKAPQgEgHAAgIQAAgIAEgGQAFgGAFAAQAGAAAFAGQAEAGAAAIQAAAIgEAHQgFAGgGAAQgFAAgFgGg");
	this.shape_16.setTransform(122.4,83.6,0.616,0.409,0,-9.4,-7.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAeQgJgNAAgRQAAgQAJgNQAJgNAMAAQANAAAJANQAJANAAAQQAAARgJANQgJANgNAAQgMAAgJgNg");
	this.shape_17.setTransform(126.3,82.3,0.616,0.409,0,-9.4,-7.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],0,15.1,0,0,15.1,26.7).s().p("AhaCjQgmg0AAhJQAAhNBLhaQBEhUAtAAQAbAAAWBaQAUBTAABOQAABJgmA0QgmAzg1AAQg0AAgmgzg");
	this.shape_18.setTransform(125.1,84,0.616,0.409,0,-9.4,-7.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F23E1B").s().p("AhnCyQgsg7AAhUQAAhYBPheQBIhZA9AAQAfgBAbBfQAZBaAABXQAABUgsA7QgrA7g9ABQg8gBgrg7g");
	this.shape_19.setTransform(125,84.9,0.616,0.409,0,-9.4,-7.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-5.9,-13.5,0,-7.5,61.9,174.7).s().p("AkgFQQiVhbAZjJQAWizB/iGQB+iECNAAQCKAAB1CGQBwCAAlC3QAqDQiWBZQhoA9jAAAQi2AAhuhCg");
	this.shape_20.setTransform(198.6,61.8,0.616,0.409,0,-9.4,-7.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FBEFB1").s().p("AExgtQiOhvijAAQiiAAiOBvQiKBohYC6QBTjhCLiBQCPiHClAAQCmAACPCHQCLCBBTDhQhYi6iKhog");
	this.shape_21.setTransform(196.5,48.8,0.616,0.409,0,-9.4,-7.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FB7228").s().p("AjkB/QhgiMg2kAQA8DEBfBpQBjBwB8AAQB7AABjhxQBghrA9jHQg3EChhCOQhkCXh/AAQiAAAhkiVg");
	this.shape_22.setTransform(208.5,121.1,0.616,0.409,0,-9.4,-7.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FB7228").s().p("Al/B/QigiMhbkAQBnDLCdBzQCrCBDLAAQDJAACtiCQCch2BpjNQhcECihCOQipCXjVAAQjXAAioiVg");
	this.shape_23.setTransform(208.4,121.1,0.616,0.409,0,-9.4,-7.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-11.1,-139.3,0,-9.5,-23.6,150.5).s().p("AoXNNQjElCABn7QgBjxA6jeQA3jXBmimQBmilCChbQCIhfCUAAQCVAACIBfQCCBbBmClQBmCmA3DXQA6DegBDxQAAH4jIFFQhhCgiGBWQiKBYiiABQlNAAjKlPg");
	this.shape_24.setTransform(202.4,84.7,0.616,0.409,0,-9.4,-7.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],17.5,-8.3,0,5.8,46.8,135.5).s().p("Ak2EZQihhMAbioQAYiWCJhwQCHhvCYAAQCVAAB+BwQB5BsAnCZQAtCuihBKQhwA0jPAAQjEAAh2g4g");
	this.shape_25.setTransform(228.2,52.1,0.616,0.409,0,-9.4,-7.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FBEFB1").s().p("ACogTQigg+i6AAQiaAAhlBcQBkifCvAAQC5AACcBRQCSBLBpCNQhyhviYg5g");
	this.shape_26.setTransform(225.9,38.8,0.616,0.409,0,-9.4,-7.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FC861E").s().p("Ak5hCQBZCrCEAAQB6AABqhTQBlhMBNiSQhGC+hkBlQhoBth6AAQiRABhWkLg");
	this.shape_27.setTransform(240.7,117.8,0.616,0.409,0,-9.4,-7.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FC861E").s().p("AmACBQhkhDhJiAQCdCrDsAAQDZAAC9hTQC0hMCIiSQh9C+iwBlQi6BtjaAAQiEAAhphHg");
	this.shape_28.setTransform(240.7,117.8,0.616,0.409,0,-9.4,-7.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-2.2,-129.3,0,-0.7,-18,144.8).s().p("ApnM3QiKk2AAoBQAAoZBokdQB/lcEhAAQDLAAC2BdQCxBbCJCkQCICjBLDSQBNDYAADpQAADshCDWQhBDUh5ChQh8ClinBaQivBdjKAAQknABialdg");
	this.shape_29.setTransform(235.3,78.5,0.616,0.409,0,-9.4,-7.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-15.9,-10.3,0,-10,38.9,143.6).s().p("Ak2EZQihhMAbioQAYiWCJhwQCHhvCYAAQCUAAB+BwQB5BsAoCZQAtCuihBKQhxA0jOAAQjEAAh2g4g");
	this.shape_30.setTransform(167.6,61.3,0.616,0.409,0,-9.4,-7.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FBEFB1").s().p("Ai1hDQCbhRC5AAQCvAABkCfQhlhciaAAQi6AAigA+QiYA5hyBvQBpiNCThLg");
	this.shape_31.setTransform(164.6,47.1,0.616,0.409,0,-9.4,-7.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FC861E").s().p("AiCBfQhhhthIjCQBNCeBjBWQBmBcBrAAQCBAABVi1QhTEGiLAAQhrAAhlhyg");
	this.shape_32.setTransform(177,126.4,0.616,0.409,0,-9.4,-7.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FC861E").s().p("AjuBfQizhsiDjDQCMCeC1BWQC7BcDGAAQDsAACbi1QhJB9hiBDQhoBGiCAAQjFAAi5hyg");
	this.shape_33.setTransform(177,126.4,0.616,0.409,0,-9.4,-7.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-6.2,-139.7,0,-4.7,-24.6,149.7).s().p("Ai4Q8QikhbiBilQiCimhHjTQhLjbAAjoQAAjtBDjVQBEjXB+ihQCDioCzhaQC8hfDjAAQEhAACAFhQBoEfAAIbQAAICiKE6QiaFgknAAQi0AAirhgg");
	this.shape_34.setTransform(169.2,87.5,0.616,0.409,0,-9.4,-7.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7B9D24").s().p("AgXAeQgIgNAAgTQAAgSAKgMQAJgMAMAAQAOAAAJAMQAJANAAATQAAASgJANQgJAPgOAAQgOgBgJgPg");
	this.shape_35.setTransform(164.5,5.1,0.616,0.409,0,-9.4,-7.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8DB428").s().p("AgrA4QgOgZAAgjQAAggARgXQARgXAXAAQAaAAARAYQAPAWAAAjQAAAigPAYQgRAagaAAQgbAAgQgbg");
	this.shape_36.setTransform(164.5,5.1,0.616,0.409,0,-9.4,-7.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#A7DE25","#719020","#80A224"],[0,0.584,1],-23.5,0,23.6,0).s().p("ACGCMQAPjggTiCQgbi9iqgtQg2gOg+ACIgzAFIAAgZQFKgdA6ElQATBiAECEQABAhgCC3QAAB0AKA0QAMBGAlAPIi4ABQBDhBAQkXg");
	this.shape_37.setTransform(184.2,22.2,0.616,0.409,0,-9.4,-7.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#9FD423","#9FD423","#628412"],[0,0.51,1],-2.7,-44.8,3.3,60.8).s().p("AAfB7QAhjOgSh9Qgai8ibgmQgxgMg5AEIguAHIAAgyQCYgVBmA8QB2BGAkCsQAVBcAKB/IAODHQALBmAXA8QAeBKA7AnImLADQBjhrAmkGg");
	this.shape_38.setTransform(187.4,21.5,0.616,0.409,0,-9.4,-7.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#648612","#647F1C","#4E6215"],[0,0.51,1],-3,-52.2,2.3,47.1).s().p("AhvHhQBvhxArj6QAhi9gSh/Qgai8icgWQgxgHg5ALIguAMIAAhTQCZgVBlA8QB2BGAlCsQAUBaAJB3IAOC/QAJBkATA7QAZBKAwAqg");
	this.shape_39.setTransform(184.6,21.5,0.616,0.409,0,-9.4,-7.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#648612","#647F1C","#4E6215"],[0,0.51,1],-2.9,-50.9,2.4,48.4).s().p("AhVHyQBfh0Anj5QAgjGgSh0Qgdi9ipgmQg2gMg+AFIgyAHIAAhUQCfgUB2BMQCABSApCxQAVBZAKB3IAPC/QAKBlAVA6QAbBLA1Aqg");
	this.shape_40.setTransform(188,20.3,0.616,0.409,0,-9.4,-7.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#506515").s().p("ACwHoQhyg2hLjUQghhahKk1QgzjSiEhlQCNBeA8DWIBDDjQAnCGAnBTQBpDeCcACg");
	this.shape_41.setTransform(205.3,18.4,0.616,0.409,0,-9.4,-7.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#506515").s().p("AjGG0QDQgyBskEQAphjAOhlQANhegOgyQgfhyg+g3Qgvgrg7gFQBDgFAuAeQBFAuAkCEQAOAygLBgQgMBogmBlQhlELjPAyg");
	this.shape_42.setTransform(174.9,24.6,0.616,0.409,0,-9.4,-7.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#4B620B","#8FC11F","#628412"],[0,0.51,1],-27.4,-48.4,-2.4,42.3).s().p("An2IIQDSgyBskEQAphjAOhnQANhcgOgyQgzi3h8gdQgmgKgqAIIghAJIAAinQCqgoCHBUQCRBcBADdIBCDkQApCFAoBUQBpDdCbADg");
	this.shape_43.setTransform(192.9,18.7,0.616,0.409,0,-9.4,-7.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#2B380B","#33410C","#4F6610","#678514","#7A9E19","#89B21D","#94C01F","#9AC821","#9CCA21"],[0.333,0.349,0.408,0.471,0.541,0.616,0.702,0.812,1],-0.5,10.5,0,-1,-8.8,50.8).s().p("Ag2EQIgbhSQglhchlgWQizhAhvgYQjFgvi4AiQEVhaCYApQAjAJArAPQAgAFAggcQAXgVgkgiQgagZhIgqQhVgvgmgYQhDgpgVgcQAlAOCrAbQCeAaBLAkQBTAcA8AoQAdAVAOAOQAvgVBbgbICdgvQDAg8BDhDQgIAdg0ArQgMAKhcBEQhAAwgXAcQgfAnAWAaQAWAYAygOQAJgCBxgtQDWhVDLAYQjMASjLBqQi8BwhDAZQhwAZg/BMQgrAzgdBhQgUgegQgyg");
	this.shape_44.setTransform(195.3,34.9,0.616,0.409,0,-9.4,-7.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#192106","#202A08","#38480F","#4C6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.51,0.522,0.573,0.627,0.69,0.761,0.847,1],-0.5,10.5,0,-1,-8.8,50.8).s().p("Ag5EXQgVgxgKgRQgqhEhngYQgsgNhZgmQhjgsgzgRQjDhDizAhQEXhaCGA4QAfAOAlAWQAbAKAfgcQAngliGhlQhNg3gjgbQg+gvgVgbQAlAOCrAbQCeAaBLAkQBTAcA8AoQAdAVAOAOQAvgVBbgbICdgvQDAg8BDhDQgIAlg0AwQgYAXhPA+QhCAygVAbQggAnAXAaQAVAYAzgRIB5g2QDUhgDNAYQjLASjMB8Qi7CChDAZQh1Aag7A5QguAtgaBVQgTgcgUgtg");
	this.shape_45.setTransform(195.3,34.9,0.616,0.409,0,-9.4,-7.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],20.5,-13.8,0,6.4,43.2,131.3).s().p("AlqEFQijhHAbicQAYiKCLhpQCJhnCdAAQCVABCOBOQCJBMBYB8QAzBGgqBFQgkA8hkAyQhYAshzAbQhrAahPAAQjKAAh3g0g");
	this.shape_46.setTransform(236.7,43.2,0.616,0.409,0,-9.4,-7.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FB781D").s().p("AlEGcQiVhZh0iiQhzihhAjRQgriOgOiYQAQCFApB9QBADBBzCTQB0CVCVBSQCcBUCoAAQCqAACahUQCWhSB0iVQB0iTA/jBQAph9AQiFQgOCYgrCOQg/DRh0ChQh0CiiWBZQiaBciqAAQioAAichcg");
	this.shape_47.setTransform(254.2,98.2,0.616,0.409,0,-9.4,-7.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FBEFB1").s().p("ADygSQijg7iyAAQkYAAiTBiQBBhQBpgpQBvgrCigBQCxAACgBOQCbBJB2CKQh/hrieg4g");
	this.shape_48.setTransform(238.9,31.5,0.616,0.409,0,-9.4,-7.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],2.2,-103,0,0.5,-6.6,125.3).s().p("AlEQ2QiVhZh0iiQhziihAjSQhCjZAAjuQAAlgAGhmQANjoA0iMQBAioCFhTQCVhcD8ABQDOgBC8BcQC0BZCJCiQCJChBLDTQBNDYgBDuQABDuhCDZQg/DSh0CiQh0CiiWBZQiaBbiqABQiogBichbg");
	this.shape_49.setTransform(249.8,71.3,0.616,0.409,0,-9.4,-7.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-18.7,-10.2,0,-10.1,32.8,128.4).s().p("AknDuQjGhDA5iMQAxh4CVhiQCVhgCIAAQCGAABzBeQBtBcAkCAQApCTiSA/QhmAsi7AAQjKgBiMgug");
	this.shape_50.setTransform(150.3,54.8,0.616,0.409,0,-9.4,-7.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FB781D").s().p("AlDGaQiWhYh0iiQh0igg/jSQgqiNgPiWQAQCHApB/QA/DFB0CWQB0CYCWBTQCaBXCpAAQCpAACchXQCVhTB0iYQBziWBAjFQAph/AQiHQgPCWgqCNQhADShzCgQh0CiiVBYQicBcipAAQipAAiahcg");
	this.shape_51.setTransform(157.3,111.5,0.616,0.409,0,-9.4,-7.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FBEFB1").s().p("AkXhXQCwhqDGAAQC2AAB4A9QBuA3A/BtQhHhIhuglQh2gnikABQjFgBiyBUQirBOiDCTQB5i2Cqhig");
	this.shape_52.setTransform(148.9,45.9,0.616,0.409,0,-9.4,-7.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-3.7,-103,0,-2,-6.6,125.3).s().p("AlDQ2QiWhZh0iiQh0iig/jSQhCjZAAjuQAAjuBNjYQBLjTCIihQCKiiC0hZQC8hcDOABQD8gBCVBcQCFBTBACoQA0CMANDoQAGBmAAFgQAADuhCDZQhADShzCiQh0CiiVBZQicBbipABQipgBiahbg");
	this.shape_53.setTransform(152.9,84.5,0.616,0.409,0,-9.4,-7.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],22.9,-58.6,0,5.4,5,140).s().p("AkkSDQiHhfhpiuQhoiug6jgQg6jpAAj/QAAj9A6jpQA6jhBoiuQBpiuCHhfQCMhiCYAAQCZAACMBiQCHBfBpCuQBoCuA6DhQA6DpAAD9QAAD/g6DpQg6DhhoCtQhpCuiHBfQiMBiiZAAQiYAAiMhig");
	this.shape_54.setTransform(234.6,72.8,0.616,0.409,0,-9.4,-7.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-33.9,-70.8,0,-3.1,-9.7,118.6).s().p("AkkR4QiIhehoisQhoisg6jeQg7jnAAj9QAAj7A7jnQA6jfBoisQBoisCIheQCMhiCYAAQCZAACMBiQCHBeBpCsQBoCsA5DfQA8DnAAD7QAAD9g8DnQg5DehoCsQhpCsiHBeQiMBiiZAAQiYAAiMhig");
	this.shape_55.setTransform(168.2,81.3,0.616,0.409,0,-9.4,-7.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["rgba(0,0,0,0)","rgba(252,147,32,0)","#FC9320","#FC911F","#FB6B1B","#FB541A","#FB4B19"],[0,0.808,0.808,0.808,0.875,0.925,0.961],0.9,12.1,0,-0.7,16.8,157).s().p("AkMSrQh9hjhgizQhgi0g0jpQg3jxAAkHQAAkGA3jxQA0jpBgizQBgi0B9hjQCAhlCMAAQCMAACBBlQB9BjBgC0QBgCzA0DpQA3DwAAEHQAAEIg3DwQg0DphgC0QhgCzh9BjQiBBliMAAQiMAAiAhlg");
	this.shape_56.setTransform(201.3,77.9,0.616,0.409,0,-9.4,-7.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB625","#FBA022","#FB841E","#FB611B","#FB4E19","#FB561A","#FB711C","#FC841E","#FC8F1F","#FC9320","rgba(252,147,32,0)","rgba(0,0,0,0)"],[0,0.169,0.286,0.392,0.482,0.573,0.655,0.69,0.698,0.722,0.749,0.776,0.808,0.808,1],0.9,12.1,0,-0.7,16.8,157).s().p("AkMSrQh9hjhgizQhgi0g0jpQg3jxAAkHQAAkGA3jxQA0jpBgizQBgi0B9hjQCAhlCMAAQCMAACBBlQB9BjBgC0QBgCzA0DpQA3DwAAEHQAAEIg3DwQg0DphgC0QhgCzh9BjQiBBliMAAQiMAAiAhlg");
	this.shape_57.setTransform(201.3,77.9,0.616,0.409,0,-9.4,-7.8);

	this.addChild(this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(101.4,0,200,134.4);


(lib.Cups1Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 21
	this.instance = new lib.PumpkinSpinningAni();
	this.instance.setTransform(223.1,296,0.632,0.632,0,0,0,436.4,324.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(184).to({_off:false},0).to({scaleX:1,scaleY:1,x:562.7,y:144.7},15).wait(1));

	// Pumpkin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#A2D223","#415312"],[0.157,1],-5.2,5.8,0,-5.2,5.8,33.9).s().p("AiMgsQA1g/AwgSQA2gWB9AlQApAMAnAPQAiANgDABQiZAUhKAbQhwAniiB1QA0huA6hEg");
	this.shape.setTransform(177,217.1,1.692,1.231);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#A2D223","#415312"],[0.157,1],-3.6,5.8,0,-3.6,5.8,36.6).s().p("AgniJQgkggg5gLIgygDQBog2B5gIQBfgHAMALQBYBIiRDXQhIBshYBeQCMkahwhng");
	this.shape_1.setTransform(249.4,231.1,1.692,1.231);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#2B380B","#39490F","#4D6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.475,0.51,0.573,0.643,0.725,0.824,1],-42.8,6.4,0,-42.8,6.4,72.9).s().p("AiMgrQBDhUAvgSQA2gVB9AkQApAMAnAPQAiAOgDAAQiEARhsAyQhwAyivB9QA1hvBGhVg");
	this.shape_2.setTransform(174.8,219.5,1.692,1.231);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#2B380B","#39490F","#4D6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.475,0.51,0.573,0.643,0.725,0.824,1],-19.3,8.5,0,-19.3,8.5,49.1).s().p("AgyiJQghgkg0gOIgvgIQBpg1B5gJQBegGANALQBYBIidDiQhOByheBkQCMkbhkhyg");
	this.shape_3.setTransform(249.2,232.5,1.692,1.231);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAFQgDgCAAgDQAAgGAGAAQAHAAAAAGQAAAHgHAAQgBAAgCgCg");
	this.shape_4.setTransform(25,381.5,1.692,1.231);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAKQgFgEAAgGQAAgFAFgEQAEgFAEAAQAFAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgFAAQgEAAgEgFg");
	this.shape_5.setTransform(30.2,380.7,1.692,1.231);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],-1.9,5.3,0,-0.7,2.6,10.8).s().p("AgoAsQgRgSAAgaQAAgYARgUQARgSAXAAQAYAAARASQARATAAAZQAAAagRASQgRATgYAAQgXAAgRgTg");
	this.shape_6.setTransform(28.3,384,1.692,1.231);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2381D").s().p("AguAzQgUgWAAgdQAAgdAUgVQAUgVAaAAQAcAAATAVQAUAVAAAdQAAAdgUAWQgTAVgcAAQgaAAgUgVg");
	this.shape_7.setTransform(28,384.9,1.692,1.231);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgDQADgDACAAQADAAADADQACADAAADQAAAEgCADQgDADgDAAQgCAAgDgDg");
	this.shape_8.setTransform(51.2,341,1.692,1.231);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAPQgFgHAAgIQAAgHAFgGQAFgHAGAAQAHAAAFAHQAFAGAAAHQAAAIgFAHQgFAGgHAAQgGAAgFgGg");
	this.shape_9.setTransform(57.6,339.9,1.692,1.231);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],-2.2,7.3,0,-0.8,3.5,14.6).s().p("AgyA9QgVgZgBgkQABgjAVgZQAVgaAdAAQAdAAAWAaQAVAZABAjQgBAkgVAZQgWAagdAAQgdAAgVgag");
	this.shape_10.setTransform(55.4,344.4,1.692,1.231);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2381D").s().p("Ag6BGQgYgdAAgpQAAgoAYgdQAZgdAhAAQAiAAAYAdQAZAdAAAoQAAApgZAdQgYAdgiAAQghAAgZgdg");
	this.shape_11.setTransform(55,345.7,1.692,1.231);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAPQgEgHAAgIQAAgIAEgGQAFgGAFAAQAGAAAFAGQAEAGAAAIQAAAIgEAHQgFAGgGAAQgFAAgFgGg");
	this.shape_12.setTransform(1.7,317.9,1.692,1.231);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAeQgJgNAAgRQAAgQAJgNQAJgNAMAAQANAAAJANQAJANAAAQQAAARgJANQgJANgNAAQgMAAgJgNg");
	this.shape_13.setTransform(12.9,315.6,1.692,1.231);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],0,15.1,0,0,15.1,26.7).s().p("AhaCjQgmg0AAhJQAAhNBLhaQBEhUAtAAQAbAAAWBaQAUBTAABOQAABJgmA0QgmAzg1AAQg0AAgmgzg");
	this.shape_14.setTransform(8.9,320.1,1.692,1.231);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F23E1B").s().p("AhnCyQgsg7AAhUQAAhYBPheQBIhZA9AAQAfgBAbBfQAZBaAABXQAABUgsA7QgrA7g9ABQg8gBgrg7g");
	this.shape_15.setTransform(8.2,322.9,1.692,1.231);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-5.9,-13.5,0,-7.5,61.9,174.7).s().p("AkgFQQiVhbAZjJQAWizB/iGQB+iECNAAQCKAAB1CGQBwCAAlC3QAqDQiWBZQhoA9jAAAQi2AAhuhCg");
	this.shape_16.setTransform(218,283.6,1.692,1.231);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBEFB1").s().p("AExgtQiOhvijAAQiiAAiOBvQiKBohYC6QBTjhCLiBQCPiHClAAQCmAACPCHQCLCBBTDhQhYi6iKhog");
	this.shape_17.setTransform(218.2,244.2,1.692,1.231);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FB7228").s().p("AjkB/QhgiMg2kAQA8DEBfBpQBjBwB8AAQB7AABjhxQBghrA9jHQg3EChhCOQhkCXh/AAQiAAAhkiVg");
	this.shape_18.setTransform(218.2,464.9,1.692,1.231);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FB7228").s().p("Al/B/QigiMhbkAQBnDLCdBzQCrCBDLAAQDJAACtiCQCch2BpjNQhcECihCOQipCXjVAAQjXAAioiVg");
	this.shape_19.setTransform(218.2,464.9,1.692,1.231);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-11.1,-139.3,0,-9.5,-23.6,150.5).s().p("AoXNNQjElCABn7QgBjxA6jeQA3jXBmimQBmilCChbQCIhfCUAAQCVAACIBfQCCBbBmClQBmCmA3DXQA6DegBDxQAAH4jIFFQhhCgiGBWQiKBYiiABQlNAAjKlPg");
	this.shape_20.setTransform(218.2,353.7,1.692,1.231);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],17.5,-8.3,0,5.8,46.8,135.5).s().p("Ak2EZQihhMAbioQAYiWCJhwQCHhvCYAAQCVAAB+BwQB5BsAnCZQAtCuihBKQhwA0jPAAQjEAAh2g4g");
	this.shape_21.setTransform(302.8,266.8,1.692,1.231);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FBEFB1").s().p("ACogTQigg+i6AAQiaAAhlBcQBkifCvAAQC5AACcBRQCSBLBpCNQhyhviYg5g");
	this.shape_22.setTransform(302.3,226.2,1.692,1.231);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FC861E").s().p("Ak5hCQBZCrCEAAQB6AABqhTQBlhMBNiSQhGC+hkBlQhoBth6AAQiRABhWkLg");
	this.shape_23.setTransform(307,468,1.692,1.231);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FC861E").s().p("AmACBQhkhDhJiAQCdCrDsAAQDZAAC9hTQC0hMCIiSQh9C+iwBlQi6BtjaAAQiEAAhphHg");
	this.shape_24.setTransform(307,468,1.692,1.231);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-2.2,-129.3,0,-0.7,-18,144.8).s().p("ApnM3QiKk2AAoBQAAoZBokdQB/lcEhAAQDLAAC2BdQCxBbCJCkQCICjBLDSQBNDYAADpQAADshCDWQhBDUh5ChQh8ClinBaQivBdjKAAQknABialdg");
	this.shape_25.setTransform(310.2,348.5,1.692,1.231);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-15.9,-10.3,0,-10,38.9,143.6).s().p("Ak2EZQihhMAbioQAYiWCJhwQCHhvCYAAQCUAAB+BwQB5BsAoCZQAtCuihBKQhxA0jOAAQjEAAh2g4g");
	this.shape_26.setTransform(134.3,269.6,1.692,1.231);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FBEFB1").s().p("Ai1hDQCbhRC5AAQCvAABkCfQhlhciaAAQi6AAigA+QiYA5hyBvQBpiNCThLg");
	this.shape_27.setTransform(132.6,226.2,1.692,1.231);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FC861E").s().p("AiCBfQhhhthIjCQBNCeBjBWQBmBcBrAAQCBAABVi1QhTEGiLAAQhrAAhlhyg");
	this.shape_28.setTransform(130.6,468,1.692,1.231);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FC861E").s().p("AjuBfQizhsiDjDQCMCeC1BWQC7BcDGAAQDsAACbi1QhJB9hiBDQhoBGiCAAQjFAAi5hyg");
	this.shape_29.setTransform(130.6,468,1.692,1.231);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-6.2,-139.7,0,-4.7,-24.6,149.7).s().p("Ai4Q8QikhbiBilQiCimhHjTQhLjbAAjoQAAjtBDjVQBEjXB+ihQCDioCzhaQC8hfDjAAQEhAACAFhQBoEfAAIbQAAICiKE6QiaFgknAAQi0AAirhgg");
	this.shape_30.setTransform(126.8,348.5,1.692,1.231);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7B9D24").s().p("AgXAeQgIgNAAgTQAAgSAKgMQAJgMAMAAQAOAAAJAMQAJANAAATQAAASgJANQgJAPgOAAQgOgBgJgPg");
	this.shape_31.setTransform(151.1,100.7,1.692,1.231);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8DB428").s().p("AgrA4QgOgZAAgjQAAggARgXQARgXAXAAQAaAAARAYQAPAWAAAjQAAAigPAYQgRAagaAAQgbAAgQgbg");
	this.shape_32.setTransform(151.1,100.7,1.692,1.231);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#A7DE25","#719020","#80A224"],[0,0.584,1],-23.5,0,23.6,0).s().p("ACGCMQAPjggTiCQgbi9iqgtQg2gOg+ACIgzAFIAAgZQFKgdA6ElQATBiAECEQABAhgCC3QAAB0AKA0QAMBGAlAPIi4ABQBDhBAQkXg");
	this.shape_33.setTransform(196.7,159.8,1.692,1.231);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#9FD423","#9FD423","#628412"],[0,0.51,1],-2.7,-44.8,3.3,60.8).s().p("AAfB7QAhjOgSh9Qgai8ibgmQgxgMg5AEIguAHIAAgyQCYgVBmA8QB2BGAkCsQAVBcAKB/IAODHQALBmAXA8QAeBKA7AnImLADQBjhrAmkGg");
	this.shape_34.setTransform(205.7,158.9,1.692,1.231);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#648612","#647F1C","#4E6215"],[0,0.51,1],-3,-52.2,2.3,47.1).s().p("AhvHhQBvhxArj6QAhi9gSh/Qgai8icgWQgxgHg5ALIguAMIAAhTQCZgVBlA8QB2BGAlCsQAUBaAJB3IAOC/QAJBkATA7QAZBKAwAqg");
	this.shape_35.setTransform(198.1,157.7,1.692,1.231);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#648612","#647F1C","#4E6215"],[0,0.51,1],-2.9,-50.9,2.4,48.4).s().p("AhVHyQBfh0Anj5QAgjGgSh0Qgdi9ipgmQg2gMg+AFIgyAHIAAhUQCfgUB2BMQCABSApCxQAVBZAKB3IAPC/QAKBlAVA6QAbBLA1Aqg");
	this.shape_36.setTransform(208.1,155.7,1.692,1.231);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#506515").s().p("ACwHoQhyg2hLjUQghhahKk1QgzjSiEhlQCNBeA8DWIBDDjQAnCGAnBTQBpDeCcACg");
	this.shape_37.setTransform(255.7,156.8,1.692,1.231);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#506515").s().p("AjGG0QDQgyBskEQAphjAOhlQANhegOgyQgfhyg+g3Qgvgrg7gFQBDgFAuAeQBFAuAkCEQAOAygLBgQgMBogmBlQhlELjPAyg");
	this.shape_38.setTransform(170.5,163.2,1.692,1.231);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#4B620B","#8FC11F","#628412"],[0,0.51,1],-27.4,-48.4,-2.4,42.3).s().p("An2IIQDSgyBskEQAphjAOhnQANhcgOgyQgzi3h8gdQgmgKgqAIIghAJIAAinQCqgoCHBUQCRBcBADdIBCDkQApCFAoBUQBpDdCbADg");
	this.shape_39.setTransform(221.9,152.9,1.692,1.231);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#2B380B","#33410C","#4F6610","#678514","#7A9E19","#89B21D","#94C01F","#9AC821","#9CCA21"],[0.333,0.349,0.408,0.471,0.541,0.616,0.702,0.812,1],-0.5,10.5,0,-1,-8.8,50.8).s().p("Ag2EQIgbhSQglhchlgWQizhAhvgYQjFgvi4AiQEVhaCYApQAjAJArAPQAgAFAggcQAXgVgkgiQgagZhIgqQhVgvgmgYQhDgpgVgcQAlAOCrAbQCeAaBLAkQBTAcA8AoQAdAVAOAOQAvgVBbgbICdgvQDAg8BDhDQgIAdg0ArQgMAKhcBEQhAAwgXAcQgfAnAWAaQAWAYAygOQAJgCBxgtQDWhVDLAYQjMASjLBqQi8BwhDAZQhwAZg/BMQgrAzgdBhQgUgegQgyg");
	this.shape_40.setTransform(221.2,202.2,1.692,1.231);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#192106","#202A08","#38480F","#4C6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.51,0.522,0.573,0.627,0.69,0.761,0.847,1],-0.5,10.5,0,-1,-8.8,50.8).s().p("Ag5EXQgVgxgKgRQgqhEhngYQgsgNhZgmQhjgsgzgRQjDhDizAhQEXhaCGA4QAfAOAlAWQAbAKAfgcQAngliGhlQhNg3gjgbQg+gvgVgbQAlAOCrAbQCeAaBLAkQBTAcA8AoQAdAVAOAOQAvgVBbgbICdgvQDAg8BDhDQgIAlg0AwQgYAXhPA+QhCAygVAbQggAnAXAaQAVAYAzgRIB5g2QDUhgDNAYQjLASjMB8Qi7CChDAZQh1Aag7A5QguAtgaBVQgTgcgUgtg");
	this.shape_41.setTransform(221.2,202.2,1.692,1.231);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],20.5,-13.8,0,6.4,43.2,131.3).s().p("AlqEFQijhHAbicQAYiKCLhpQCJhnCdAAQCVABCOBOQCJBMBYB8QAzBGgqBFQgkA8hkAyQhYAshzAbQhrAahPAAQjKAAh3g0g");
	this.shape_42.setTransform(329.8,243.9,1.692,1.231);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FB781D").s().p("AlEGcQiVhZh0iiQhzihhAjRQgriOgOiYQAQCFApB9QBADBBzCTQB0CVCVBSQCcBUCoAAQCqAACahUQCWhSB0iVQB0iTA/jBQAph9AQiFQgOCYgrCOQg/DRh0ChQh0CiiWBZQiaBciqAAQioAAichcg");
	this.shape_43.setTransform(352.6,415.1,1.692,1.231);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FBEFB1").s().p("ADygSQijg7iyAAQkYAAiTBiQBBhQBpgpQBvgrCigBQCxAACgBOQCbBJB2CKQh/hrieg4g");
	this.shape_44.setTransform(340.8,209.7,1.692,1.231);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],2.2,-103,0,0.5,-6.6,125.3).s().p("AlEQ2QiVhZh0iiQhziihAjSQhCjZAAjuQAAlgAGhmQANjoA0iMQBAioCFhTQCVhcD8ABQDOgBC8BcQC0BZCJCiQCJChBLDTQBNDYgBDuQABDuhCDZQg/DSh0CiQh0CiiWBZQiaBbiqABQiogBichbg");
	this.shape_45.setTransform(352.6,333.1,1.692,1.231);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-18.7,-10.2,0,-10.1,32.8,128.4).s().p("AknDuQjGhDA5iMQAxh4CVhiQCVhgCIAAQCGAABzBeQBtBcAkCAQApCTiSA/QhmAsi7AAQjKgBiMgug");
	this.shape_46.setTransform(90.3,243.2,1.692,1.231);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FB781D").s().p("AlDGaQiWhYh0iiQh0igg/jSQgqiNgPiWQAQCHApB/QA/DFB0CWQB0CYCWBTQCaBXCpAAQCpAACchXQCVhTB0iYQBziWBAjFQAph/AQiHQgPCWgqCNQhADShzCgQh0CiiVBYQicBcipAAQipAAiahcg");
	this.shape_47.setTransform(83.9,415.3,1.692,1.231);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FBEFB1").s().p("AkXhXQCwhqDGAAQC2AAB4A9QBuA3A/BtQhHhIhuglQh2gnikABQjFgBiyBUQirBOiDCTQB5i2Cqhig");
	this.shape_48.setTransform(90.6,216.1,1.692,1.231);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-3.7,-103,0,-2,-6.6,125.3).s().p("AlDQ2QiWhZh0iiQh0iig/jSQhCjZAAjuQAAjuBNjYQBLjTCIihQCKiiC0hZQC8hcDOABQD8gBCVBcQCFBTBACoQA0CMANDoQAGBmAAFgQAADuhCDZQhADShzCiQh0CiiVBZQicBbipABQipgBiahbg");
	this.shape_49.setTransform(83.9,333.1,1.692,1.231);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],22.9,-58.6,0,5.4,5,140).s().p("AkkSDQiHhfhpiuQhoiug6jgQg6jpAAj/QAAj9A6jpQA6jhBoiuQBpiuCHhfQCMhiCYAAQCZAACMBiQCHBfBpCuQBoCuA6DhQA6DpAAD9QAAD/g6DpQg6DhhoCtQhpCuiHBfQiMBiiZAAQiYAAiMhig");
	this.shape_50.setTransform(310.6,331.2,1.692,1.231);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-33.9,-70.8,0,-3.1,-9.7,118.6).s().p("AkkR4QiIhehoisQhoisg6jeQg7jnAAj9QAAj7A7jnQA6jfBoisQBoisCIheQCMhiCYAAQCZAACMBiQCHBeBpCsQBoCsA5DfQA8DnAAD7QAAD9g8DnQg5DehoCsQhpCsiHBeQiMBiiZAAQiYAAiMhig");
	this.shape_51.setTransform(126.8,329.8,1.692,1.231);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["rgba(0,0,0,0)","rgba(252,147,32,0)","#FC9320","#FC911F","#FB6B1B","#FB541A","#FB4B19"],[0,0.808,0.808,0.808,0.875,0.925,0.961],0.9,12.1,0,-0.7,16.8,157).s().p("AkMSrQh9hjhgizQhgi0g0jpQg3jxAAkHQAAkGA3jxQA0jpBgizQBgi0B9hjQCAhlCMAAQCMAACBBlQB9BjBgC0QBgCzA0DpQA3DwAAEHQAAEIg3DwQg0DphgC0QhgCzh9BjQiBBliMAAQiMAAiAhlg");
	this.shape_52.setTransform(218.3,333.1,1.692,1.231);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB625","#FBA022","#FB841E","#FB611B","#FB4E19","#FB561A","#FB711C","#FC841E","#FC8F1F","#FC9320","rgba(252,147,32,0)","rgba(0,0,0,0)"],[0,0.169,0.286,0.392,0.482,0.573,0.655,0.69,0.698,0.722,0.749,0.776,0.808,0.808,1],0.9,12.1,0,-0.7,16.8,157).s().p("AkMSrQh9hjhgizQhgi0g0jpQg3jxAAkHQAAkGA3jxQA0jpBgizQBgi0B9hjQCAhlCMAAQCMAACBBlQB9BjBgC0QBgCzA0DpQA3DwAAEHQAAEIg3DwQg0DphgC0QhgCzh9BjQiBBliMAAQiMAAiAhlg");
	this.shape_53.setTransform(218.3,333.1,1.692,1.231);

	this.instance_1 = new lib.Tween6Fox("synched",0);
	this.instance_1.setTransform(218.3,293.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},28).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({x:215.3,y:292.2},3).to({x:218.3,y:293.9},2).to({x:219.2,y:294.2},2).to({x:218.3,y:293.9},2).to({x:215.3,y:292.2},3).to({x:218.3,y:293.9},2).to({x:219.2,y:294.2},2).to({x:218.3,y:293.9},2).to({x:215.3,y:292.2},3).to({x:218.3,y:293.9},2).to({x:219.2,y:294.2},2).to({x:218.3,y:293.9},1).to({x:215.3,y:292.2},3).to({x:218.3,y:293.9},2).to({x:219.2,y:294.2},2).to({x:218.3,y:293.9},3).to({x:215.3,y:292.2},3).to({x:218.3,y:293.9},2).to({x:219.2,y:294.2},2).to({x:218.3,y:293.9},1).to({x:215.3,y:292.2},3).to({x:218.3,y:293.9},2).to({x:219.2,y:294.2},2).to({x:218.3,y:293.9},1).to({x:215.3,y:292.2},3).to({x:218.3,y:293.9},1).to({x:215.3,y:292.2},3).to({x:218.3,y:293.9},2).to({x:219.2,y:294.2},2).wait(29).to({x:218.3,y:293.9},0).to({x:215.3,y:292.2},3).to({x:218.3,y:293.9},2).to({x:219.2,y:294.2},2).to({x:218.3,y:293.9},2).to({x:215.3,y:292.2},3).to({x:218.3,y:293.9},2).to({x:219.2,y:294.2},2).to({x:218.3,y:293.9},2).to({x:215.3,y:292.2},3).to({x:218.3,y:293.9},2).to({x:219.2,y:294.2},2).to({x:218.3,y:293.9},1).to({x:215.3,y:292.2},3).to({x:218.3,y:293.9},2).to({x:219.2,y:294.2},2).to({x:218.3,y:293.9},3).to({x:215.3,y:292.2},3).to({x:218.3,y:293.9},2).to({x:219.2,y:294.2},2).to({x:218.3,y:293.9},1).to({x:215.3,y:292.2},3).to({x:218.3,y:293.9},2).to({x:219.2,y:294.2},2).to({x:218.3,y:293.9},1).to({x:215.3,y:292.2},3).to({x:218.3,y:293.9},1).to({x:215.3,y:292.2},3).to({x:218.3,y:293.9},2).to({x:219.2,y:294.2},2).to({_off:true},1).wait(16));

	// CarvingAni
	this.instance_2 = new lib.pulpAni();
	this.instance_2.setTransform(228,326.2,1,1,0,0,0,42.8,45.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({_off:true},64).wait(28).to({_off:false},0).to({_off:true},63).wait(17));

	// head3.png
	this.instance_3 = new lib.head4pngcopy();
	this.instance_3.setTransform(-10.9,-216.4,4,4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(92).to({_off:false},0).to({_off:true},15).wait(93));

	// head3.png
	this.instance_4 = new lib.head4pngcopy();
	this.instance_4.setTransform(405.1,-216.4,4,4,0,0,180);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(107).to({_off:false},0).to({_off:true},13).wait(80));

	// head4.png
	this.instance_5 = new lib.head3pngcopy();
	this.instance_5.setTransform(420.1,-215.2,4,4,0,0,180);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(46).to({_off:false},0).to({_off:true},13).wait(18).to({_off:false},0).to({_off:true},15).wait(46).to({_off:false},0).to({_off:true},13).wait(18).to({_off:false},0).to({_off:true},14).wait(17));

	// head4.png
	this.instance_6 = new lib.head3pngcopy();
	this.instance_6.setTransform(-8.6,-215.2,4,4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({_off:true},18).wait(13).to({_off:false},0).to({_off:true},18).wait(43).to({_off:false},0).to({_off:true},18).wait(13).to({_off:false},0).to({_off:true},18).wait(31));

	// SHADOW
	this.instance_7 = new lib.shadow();
	this.instance_7.setTransform(-452.4,401.2,5.23,2.9,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(200));

	// Forearm1.png
	this.instance_8 = new lib.Tween3Fox("synched",0);
	this.instance_8.setTransform(511.4,214.8,1,1,0,0,180,-83,-96);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({_off:false},0).to({scaleX:1,scaleY:1,skewX:-24.6,skewY:155.4,x:528.3,y:106.8},3).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:511.4,y:214.8},4).to({scaleX:1,scaleY:1,skewX:-12.1,skewY:167.9,x:528.3,y:106.9},4).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:511.4,y:214.8},4).to({startPosition:0},1).to({scaleX:1,scaleY:1,skewX:-24.6,skewY:155.4,x:528.3,y:106.8},3).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:511.4,y:214.8},4).to({scaleX:1,scaleY:1,skewX:-12.1,skewY:167.9,x:528.3,y:106.9},4).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:511.4,y:214.8},4).to({startPosition:0},1).to({scaleX:1,scaleY:1,skewX:-24.6,skewY:155.4,x:528.3,y:106.8},3).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:511.4,y:214.8},4).to({scaleX:1,scaleY:1,skewX:-12.1,skewY:167.9,x:528.3,y:106.9},4).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:511.4,y:214.8},4).to({startPosition:0},1).to({scaleX:1,scaleY:1,skewX:-24.6,skewY:155.4,x:528.3,y:106.8},3).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:511.4,y:214.8},4).to({scaleX:1,scaleY:1,skewX:-12.1,skewY:167.9,x:528.3,y:106.9},4).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:511.4,y:214.8},4).to({_off:true},1).wait(28).to({_off:false},0).to({scaleX:1,scaleY:1,skewX:-24.6,skewY:155.4,x:528.3,y:106.8},3).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:511.4,y:214.8},4).to({scaleX:1,scaleY:1,skewX:-12.1,skewY:167.9,x:528.3,y:106.9},4).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:511.4,y:214.8},4).to({startPosition:0},1).to({scaleX:1,scaleY:1,skewX:-24.6,skewY:155.4,x:528.3,y:106.8},3).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:511.4,y:214.8},4).to({scaleX:1,scaleY:1,skewX:-12.1,skewY:167.9,x:528.3,y:106.9},4).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:511.4,y:214.8},4).to({startPosition:0},1).to({scaleX:1,scaleY:1,skewX:-24.6,skewY:155.4,x:528.3,y:106.8},3).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:511.4,y:214.8},4).to({scaleX:1,scaleY:1,skewX:-12.1,skewY:167.9,x:528.3,y:106.9},4).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:511.4,y:214.8},4).to({startPosition:0},1).to({scaleX:1,scaleY:1,skewX:-24.6,skewY:155.4,x:528.3,y:106.8},3).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:511.4,y:214.8},4).to({scaleX:1,scaleY:1,skewX:-12.1,skewY:167.9,x:528.3,y:106.9},4).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:511.4,y:214.8},3).to({_off:true},1).wait(17));

	// upperArm1.png
	this.instance_9 = new lib.Tween4Fox("synched",0);
	this.instance_9.setTransform(330.4,123.4,1,1,0,0,180,90,-112);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(28).to({_off:false},0).to({scaleX:1,scaleY:1,skewX:-31.1,skewY:148.9,x:330.3},3).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:330.4},4).to({scaleX:1,scaleY:1,skewX:-31.1,skewY:148.9,x:330.3},4).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:330.4},4).to({startPosition:0},1).to({scaleX:1,scaleY:1,skewX:-31.1,skewY:148.9,x:330.3},3).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:330.4},4).to({scaleX:1,scaleY:1,skewX:-31.1,skewY:148.9,x:330.3},4).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:330.4},4).to({startPosition:0},1).to({scaleX:1,scaleY:1,skewX:-31.1,skewY:148.9,x:330.3},3).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:330.4},4).to({scaleX:1,scaleY:1,skewX:-31.1,skewY:148.9,x:330.3},4).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:330.4},4).to({startPosition:0},1).to({scaleX:1,scaleY:1,skewX:-31.1,skewY:148.9,x:330.3},3).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:330.4},4).to({scaleX:1,scaleY:1,skewX:-31.1,skewY:148.9,x:330.3},4).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:330.4},4).to({_off:true},1).wait(28).to({_off:false},0).to({scaleX:1,scaleY:1,skewX:-31.1,skewY:148.9,x:330.3},3).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:330.4},4).to({scaleX:1,scaleY:1,skewX:-31.1,skewY:148.9,x:330.3},4).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:330.4},4).to({startPosition:0},1).to({scaleX:1,scaleY:1,skewX:-31.1,skewY:148.9,x:330.3},3).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:330.4},4).to({scaleX:1,scaleY:1,skewX:-31.1,skewY:148.9,x:330.3},4).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:330.4},4).to({startPosition:0},1).to({scaleX:1,scaleY:1,skewX:-31.1,skewY:148.9,x:330.3},3).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:330.4},4).to({scaleX:1,scaleY:1,skewX:-31.1,skewY:148.9,x:330.3},4).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:330.4},4).to({startPosition:0},1).to({scaleX:1,scaleY:1,skewX:-31.1,skewY:148.9,x:330.3},3).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:330.4},4).to({scaleX:1,scaleY:1,skewX:-31.1,skewY:148.9,x:330.3},4).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:330.4},3).to({_off:true},1).wait(17));

	// Forearm1.png
	this.instance_10 = new lib.Tween3Fox("synched",0);
	this.instance_10.setTransform(-85.5,227.5,1,1,0,0,0,-83,-96);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(28).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:12.1,x:-102.4,y:119.5},4).to({scaleX:1,scaleY:1,rotation:0,x:-85.5,y:227.5},4).to({scaleX:1,scaleY:1,rotation:24.6,x:-102.4,y:119.5},4).to({scaleX:1,scaleY:1,rotation:0,x:-85.5,y:227.5},3).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:12.1,x:-102.4,y:119.5},4).to({scaleX:1,scaleY:1,rotation:0,x:-85.5,y:227.5},4).to({scaleX:1,scaleY:1,rotation:24.6,x:-102.4,y:119.5},4).to({scaleX:1,scaleY:1,rotation:0,x:-85.5,y:227.5},3).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:12.1,x:-102.4,y:119.5},4).to({scaleX:1,scaleY:1,rotation:0,x:-85.5,y:227.5},4).to({scaleX:1,scaleY:1,rotation:24.6,x:-102.4,y:119.5},4).to({scaleX:1,scaleY:1,rotation:0,x:-85.5,y:227.5},3).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:12.1,x:-102.4,y:119.5},4).to({scaleX:1,scaleY:1,rotation:0,x:-85.5,y:227.5},4).to({scaleX:1,scaleY:1,rotation:24.6,x:-102.4,y:119.5},4).to({scaleX:1,scaleY:1,rotation:0,x:-85.5,y:227.5},3).to({_off:true},1).wait(28).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:12.1,x:-102.4,y:119.5},4).to({scaleX:1,scaleY:1,rotation:0,x:-85.5,y:227.5},4).to({scaleX:1,scaleY:1,rotation:24.6,x:-102.4,y:119.5},4).to({scaleX:1,scaleY:1,rotation:0,x:-85.5,y:227.5},3).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:12.1,x:-102.4,y:119.5},4).to({scaleX:1,scaleY:1,rotation:0,x:-85.5,y:227.5},4).to({scaleX:1,scaleY:1,rotation:24.6,x:-102.4,y:119.5},4).to({scaleX:1,scaleY:1,rotation:0,x:-85.5,y:227.5},3).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:12.1,x:-102.4,y:119.5},4).to({scaleX:1,scaleY:1,rotation:0,x:-85.5,y:227.5},4).to({scaleX:1,scaleY:1,rotation:24.6,x:-102.4,y:119.5},4).to({scaleX:1,scaleY:1,rotation:0,x:-85.5,y:227.5},3).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:12.1,x:-102.4,y:119.5},4).to({scaleX:1,scaleY:1,rotation:0,x:-85.5,y:227.5},4).to({scaleX:1,scaleY:1,rotation:24.6,x:-102.4,y:119.5},4).to({scaleX:1,scaleY:1,rotation:0,x:-85.5,y:227.5},2).to({_off:true},1).wait(17));

	// upperArm1.png
	this.instance_11 = new lib.Tween4Fox("synched",0);
	this.instance_11.setTransform(95.5,136,1,1,0,0,0,90,-112);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(28).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:31.1,x:95.6,y:136.1},4).to({scaleX:1,scaleY:1,rotation:0,x:95.5,y:136},4).to({scaleX:1,scaleY:1,rotation:31.1,x:95.6,y:136.1},4).to({scaleX:1,scaleY:1,rotation:0,x:95.5,y:136},3).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:31.1,x:95.6,y:136.1},4).to({scaleX:1,scaleY:1,rotation:0,x:95.5,y:136},4).to({scaleX:1,scaleY:1,rotation:31.1,x:95.6,y:136.1},4).to({scaleX:1,scaleY:1,rotation:0,x:95.5,y:136},3).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:31.1,x:95.6,y:136.1},4).to({scaleX:1,scaleY:1,rotation:0,x:95.5,y:136},4).to({scaleX:1,scaleY:1,rotation:31.1,x:95.6,y:136.1},4).to({scaleX:1,scaleY:1,rotation:0,x:95.5,y:136},3).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:31.1,x:95.6,y:136.1},4).to({scaleX:1,scaleY:1,rotation:0,x:95.5,y:136},4).to({scaleX:1,scaleY:1,rotation:31.1,x:95.6,y:136.1},4).to({scaleX:1,scaleY:1,rotation:0,x:95.5,y:136},3).to({_off:true},1).wait(28).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:31.1,x:95.6,y:136.1},4).to({scaleX:1,scaleY:1,rotation:0,x:95.5,y:136},4).to({scaleX:1,scaleY:1,rotation:31.1,x:95.6,y:136.1},4).to({scaleX:1,scaleY:1,rotation:0,x:95.5,y:136},3).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:31.1,x:95.6,y:136.1},4).to({scaleX:1,scaleY:1,rotation:0,x:95.5,y:136},4).to({scaleX:1,scaleY:1,rotation:31.1,x:95.6,y:136.1},4).to({scaleX:1,scaleY:1,rotation:0,x:95.5,y:136},3).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:31.1,x:95.6,y:136.1},4).to({scaleX:1,scaleY:1,rotation:0,x:95.5,y:136},4).to({scaleX:1,scaleY:1,rotation:31.1,x:95.6,y:136.1},4).to({scaleX:1,scaleY:1,rotation:0,x:95.5,y:136},3).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:31.1,x:95.6,y:136.1},4).to({scaleX:1,scaleY:1,rotation:0,x:95.5,y:136},4).to({scaleX:1,scaleY:1,rotation:31.1,x:95.6,y:136.1},4).to({scaleX:1,scaleY:1,rotation:0,x:95.5,y:136},2).to({_off:true},1).wait(17));

	// suit.png
	this.instance_12 = new lib.foxAnimated();
	this.instance_12.setTransform(238.3,461.3,4.011,4.013,0,0,0,60.6,166.3);

	this.instance_13 = new lib.foxAnimatedNoHead();
	this.instance_13.setTransform(238.3,461.3,4.011,4.013,0,0,0,60.6,166.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},28).to({state:[{t:this.instance_12}]},155).to({state:[{t:this.instance_12}]},16).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},28).wait(155).to({_off:false},0).to({x:-230.2},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-453.2,-223.1,1339.8,815.9);


(lib.click = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text1();
	this.instance.setTransform(-53.9,-9.4);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("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");
	this.shape.setTransform(-68.4,-6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.984)").s().p("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");
	this.shape_1.setTransform(-68.4,-6.4);

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-384.8,-49.8,634.8,83.8);


(lib.ButtonOne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#A2D223","#415312"],[0.157,1],-5.2,5.8,0,-5.2,5.8,33.9).s().p("AiMgsQA1g/AwgSQA2gWB9AlQApAMAnAPQAiANgDABQiZAUhKAbQhwAniiB1QA0huA6hEg");
	this.shape.setTransform(-24.1,-30.9,0.673,0.49);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#A2D223","#415312"],[0.157,1],-3.6,5.8,0,-3.6,5.8,36.6).s().p("AgniJQgkggg5gLIgygDQBog2B5gIQBfgHAMALQBYBIiRDXQhIBshYBeQCMkahwhng");
	this.shape_1.setTransform(4.6,-25.3,0.673,0.49);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#2B380B","#39490F","#4D6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.475,0.51,0.573,0.643,0.725,0.824,1],-42.8,6.4,0,-42.8,6.4,72.9).s().p("AiMgrQBDhUAvgSQA2gVB9AkQApAMAnAPQAiAOgDAAQiEARhsAyQhwAyivB9QA1hvBGhVg");
	this.shape_2.setTransform(-25,-29.9,0.673,0.49);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#2B380B","#39490F","#4D6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.475,0.51,0.573,0.643,0.725,0.824,1],-19.3,8.5,0,-19.3,8.5,49.1).s().p("AgyiJQghgkg0gOIgvgIQBpg1B5gJQBegGANALQBYBIidDiQhOByheBkQCMkbhkhyg");
	this.shape_3.setTransform(4.6,-24.7,0.673,0.49);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAFQgDgCAAgDQAAgGAGAAQAHAAAAAGQAAAHgHAAQgBAAgCgCg");
	this.shape_4.setTransform(-84.6,34.5,0.673,0.49);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAKQgFgEAAgGQAAgFAFgEQAEgFAEAAQAFAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgFAAQgEAAgEgFg");
	this.shape_5.setTransform(-82.5,34.2,0.673,0.49);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],-1.9,5.3,0,-0.7,2.6,10.8).s().p("AgoAsQgRgSAAgaQAAgYARgUQARgSAXAAQAYAAARASQARATAAAZQAAAagRASQgRATgYAAQgXAAgRgTg");
	this.shape_6.setTransform(-83.3,35.5,0.673,0.49);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2381D").s().p("AguAzQgUgWAAgdQAAgdAUgVQAUgVAaAAQAcAAATAVQAUAVAAAdQAAAdgUAWQgTAVgcAAQgaAAgUgVg");
	this.shape_7.setTransform(-83.4,35.9,0.673,0.49);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgDQADgDACAAQADAAADADQACADAAADQAAAEgCADQgDADgDAAQgCAAgDgDg");
	this.shape_8.setTransform(-74.2,18.4,0.673,0.49);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAPQgFgHAAgIQAAgHAFgGQAFgHAGAAQAHAAAFAHQAFAGAAAHQAAAIgFAHQgFAGgHAAQgGAAgFgGg");
	this.shape_9.setTransform(-71.6,18,0.673,0.49);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],-2.2,7.3,0,-0.8,3.5,14.6).s().p("AgyA9QgVgZgBgkQABgjAVgZQAVgaAdAAQAdAAAWAaQAVAZABAjQgBAkgVAZQgWAagdAAQgdAAgVgag");
	this.shape_10.setTransform(-72.5,19.7,0.673,0.49);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2381D").s().p("Ag6BGQgYgdAAgpQAAgoAYgdQAZgdAhAAQAiAAAYAdQAZAdAAAoQAAApgZAdQgYAdgiAAQghAAgZgdg");
	this.shape_11.setTransform(-72.7,20.3,0.673,0.49);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAPQgEgHAAgIQAAgIAEgGQAFgGAFAAQAGAAAFAGQAEAGAAAIQAAAIgEAHQgFAGgGAAQgFAAgFgGg");
	this.shape_12.setTransform(-93.9,9.2,0.673,0.49);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAeQgJgNAAgRQAAgQAJgNQAJgNAMAAQANAAAJANQAJANAAAQQAAARgJANQgJANgNAAQgMAAgJgNg");
	this.shape_13.setTransform(-89.4,8.3,0.673,0.49);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],0,15.1,0,0,15.1,26.7).s().p("AhaCjQgmg0AAhJQAAhNBLhaQBEhUAtAAQAbAAAWBaQAUBTAABOQAABJgmA0QgmAzg1AAQg0AAgmgzg");
	this.shape_14.setTransform(-91,10.1,0.673,0.49);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F23E1B").s().p("AhnCyQgsg7AAhUQAAhYBPheQBIhZA9AAQAfgBAbBfQAZBaAABXQAABUgsA7QgrA7g9ABQg8gBgrg7g");
	this.shape_15.setTransform(-91.3,11.2,0.673,0.49);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-5.9,-13.5,0,-7.5,61.9,174.7).s().p("AkgFQQiVhbAZjJQAWizB/iGQB+iECNAAQCKAAB1CGQBwCAAlC3QAqDQiWBZQhoA9jAAAQi2AAhuhCg");
	this.shape_16.setTransform(-7.9,-4.4,0.673,0.49);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBEFB1").s().p("AExgtQiOhvijAAQiiAAiOBvQiKBohYC6QBTjhCLiBQCPiHClAAQCmAACPCHQCLCBBTDhQhYi6iKhog");
	this.shape_17.setTransform(-7.7,-20.1,0.673,0.49);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FB7228").s().p("AjkB/QhgiMg2kAQA8DEBfBpQBjBwB8AAQB7AABjhxQBghrA9jHQg3EChhCOQhkCXh/AAQiAAAhkiVg");
	this.shape_18.setTransform(-7.8,67.7,0.673,0.49);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FB7228").s().p("Al/B/QigiMhbkAQBnDLCdBzQCrCBDLAAQDJAACtiCQCch2BpjNQhcECihCOQipCXjVAAQjXAAioiVg");
	this.shape_19.setTransform(-7.8,67.7,0.673,0.49);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-11.1,-139.3,0,-9.5,-23.6,150.5).s().p("AoXNNQjElCABn7QgBjxA6jeQA3jXBmimQBmilCChbQCIhfCUAAQCVAACIBfQCCBbBmClQBmCmA3DXQA6DegBDxQAAH4jIFFQhhCgiGBWQiKBYiiABQlNAAjKlPg");
	this.shape_20.setTransform(-7.7,23.4,0.673,0.49);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],17.5,-8.3,0,5.8,46.8,135.5).s().p("Ak2EZQihhMAbioQAYiWCJhwQCHhvCYAAQCVAAB+BwQB5BsAnCZQAtCuihBKQhwA0jPAAQjEAAh2g4g");
	this.shape_21.setTransform(25.9,-11.1,0.673,0.49);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FBEFB1").s().p("ACogTQigg+i6AAQiaAAhlBcQBkifCvAAQC5AACcBRQCSBLBpCNQhyhviYg5g");
	this.shape_22.setTransform(25.7,-27.3,0.673,0.49);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FC861E").s().p("Ak5hCQBZCrCEAAQB6AABqhTQBlhMBNiSQhGC+hkBlQhoBth6AAQiRABhWkLg");
	this.shape_23.setTransform(27.6,68.9,0.673,0.49);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FC861E").s().p("AmACBQhkhDhJiAQCdCrDsAAQDZAAC9hTQC0hMCIiSQh9C+iwBlQi6BtjaAAQiEAAhphHg");
	this.shape_24.setTransform(27.6,68.9,0.673,0.49);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-2.2,-129.3,0,-0.7,-18,144.8).s().p("ApnM3QiKk2AAoBQAAoZBokdQB/lcEhAAQDLAAC2BdQCxBbCJCkQCICjBLDSQBNDYAADpQAADshCDWQhBDUh5ChQh8ClinBaQivBdjKAAQknABialdg");
	this.shape_25.setTransform(28.8,21.4,0.673,0.49);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-15.9,-10.3,0,-10,38.9,143.6).s().p("Ak2EZQihhMAbioQAYiWCJhwQCHhvCYAAQCUAAB+BwQB5BsAoCZQAtCuihBKQhxA0jOAAQjEAAh2g4g");
	this.shape_26.setTransform(-41.1,-10,0.673,0.49);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FBEFB1").s().p("Ai1hDQCbhRC5AAQCvAABkCfQhlhciaAAQi6AAigA+QiYA5hyBvQBpiNCThLg");
	this.shape_27.setTransform(-41.8,-27.3,0.673,0.49);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FC861E").s().p("AiCBfQhhhthIjCQBNCeBjBWQBmBcBrAAQCBAABVi1QhTEGiLAAQhrAAhlhyg");
	this.shape_28.setTransform(-42.6,68.9,0.673,0.49);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FC861E").s().p("AjuBfQizhsiDjDQCMCeC1BWQC7BcDGAAQDsAACbi1QhJB9hiBDQhoBGiCAAQjFAAi5hyg");
	this.shape_29.setTransform(-42.6,68.9,0.673,0.49);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-6.2,-139.7,0,-4.7,-24.6,149.7).s().p("Ai4Q8QikhbiBilQiCimhHjTQhLjbAAjoQAAjtBDjVQBEjXB+ihQCDioCzhaQC8hfDjAAQEhAACAFhQBoEfAAIbQAAICiKE6QiaFgknAAQi0AAirhgg");
	this.shape_30.setTransform(-44.1,21.4,0.673,0.49);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7B9D24").s().p("AgXAeQgIgNAAgTQAAgSAKgMQAJgMAMAAQAOAAAJAMQAJANAAATQAAASgJANQgJAPgOAAQgOgBgJgPg");
	this.shape_31.setTransform(-34.4,-77.2,0.673,0.49);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8DB428").s().p("AgrA4QgOgZAAgjQAAggARgXQARgXAXAAQAaAAARAYQAPAWAAAjQAAAigPAYQgRAagaAAQgbAAgQgbg");
	this.shape_32.setTransform(-34.4,-77.2,0.673,0.49);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#A7DE25","#719020","#80A224"],[0,0.584,1],-23.5,0,23.6,0).s().p("ACGCMQAPjggTiCQgbi9iqgtQg2gOg+ACIgzAFIAAgZQFKgdA6ElQATBiAECEQABAhgCC3QAAB0AKA0QAMBGAlAPIi4ABQBDhBAQkXg");
	this.shape_33.setTransform(-16.3,-53.7,0.673,0.49);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#9FD423","#9FD423","#628412"],[0,0.51,1],-2.7,-44.8,3.3,60.8).s().p("AAfB7QAhjOgSh9Qgai8ibgmQgxgMg5AEIguAHIAAgyQCYgVBmA8QB2BGAkCsQAVBcAKB/IAODHQALBmAXA8QAeBKA7AnImLADQBjhrAmkGg");
	this.shape_34.setTransform(-12.7,-54,0.673,0.49);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#648612","#647F1C","#4E6215"],[0,0.51,1],-3,-52.2,2.3,47.1).s().p("AhvHhQBvhxArj6QAhi9gSh/Qgai8icgWQgxgHg5ALIguAMIAAhTQCZgVBlA8QB2BGAlCsQAUBaAJB3IAOC/QAJBkATA7QAZBKAwAqg");
	this.shape_35.setTransform(-15.8,-54.5,0.673,0.49);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#648612","#647F1C","#4E6215"],[0,0.51,1],-2.9,-50.9,2.4,48.4).s().p("AhVHyQBfh0Anj5QAgjGgSh0Qgdi9ipgmQg2gMg+AFIgyAHIAAhUQCfgUB2BMQCABSApCxQAVBZAKB3IAPC/QAKBlAVA6QAbBLA1Aqg");
	this.shape_36.setTransform(-11.8,-55.3,0.673,0.49);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#506515").s().p("ACwHoQhyg2hLjUQghhahKk1QgzjSiEhlQCNBeA8DWIBDDjQAnCGAnBTQBpDeCcACg");
	this.shape_37.setTransform(7.1,-54.9,0.673,0.49);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#506515").s().p("AjGG0QDQgyBskEQAphjAOhlQANhegOgyQgfhyg+g3Qgvgrg7gFQBDgFAuAeQBFAuAkCEQAOAygLBgQgMBogmBlQhlELjPAyg");
	this.shape_38.setTransform(-26.7,-52.3,0.673,0.49);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#4B620B","#8FC11F","#628412"],[0,0.51,1],-27.4,-48.4,-2.4,42.3).s().p("An2IIQDSgyBskEQAphjAOhnQANhcgOgyQgzi3h8gdQgmgKgqAIIghAJIAAinQCqgoCHBUQCRBcBADdIBCDkQApCFAoBUQBpDdCbADg");
	this.shape_39.setTransform(-6.3,-56.4,0.673,0.49);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#2B380B","#33410C","#4F6610","#678514","#7A9E19","#89B21D","#94C01F","#9AC821","#9CCA21"],[0.333,0.349,0.408,0.471,0.541,0.616,0.702,0.812,1],-0.5,10.5,0,-1,-8.8,50.8).s().p("Ag2EQIgbhSQglhchlgWQizhAhvgYQjFgvi4AiQEVhaCYApQAjAJArAPQAgAFAggcQAXgVgkgiQgagZhIgqQhVgvgmgYQhDgpgVgcQAlAOCrAbQCeAaBLAkQBTAcA8AoQAdAVAOAOQAvgVBbgbICdgvQDAg8BDhDQgIAdg0ArQgMAKhcBEQhAAwgXAcQgfAnAWAaQAWAYAygOQAJgCBxgtQDWhVDLAYQjMASjLBqQi8BwhDAZQhwAZg/BMQgrAzgdBhQgUgegQgyg");
	this.shape_40.setTransform(-6.6,-36.8,0.673,0.49);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#192106","#202A08","#38480F","#4C6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.51,0.522,0.573,0.627,0.69,0.761,0.847,1],-0.5,10.5,0,-1,-8.8,50.8).s().p("Ag5EXQgVgxgKgRQgqhEhngYQgsgNhZgmQhjgsgzgRQjDhDizAhQEXhaCGA4QAfAOAlAWQAbAKAfgcQAngliGhlQhNg3gjgbQg+gvgVgbQAlAOCrAbQCeAaBLAkQBTAcA8AoQAdAVAOAOQAvgVBbgbICdgvQDAg8BDhDQgIAlg0AwQgYAXhPA+QhCAygVAbQggAnAXAaQAVAYAzgRIB5g2QDUhgDNAYQjLASjMB8Qi7CChDAZQh1Aag7A5QguAtgaBVQgTgcgUgtg");
	this.shape_41.setTransform(-6.6,-36.8,0.673,0.49);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],20.5,-13.8,0,6.4,43.2,131.3).s().p("AlqEFQijhHAbicQAYiKCLhpQCJhnCdAAQCVABCOBOQCJBMBYB8QAzBGgqBFQgkA8hkAyQhYAshzAbQhrAahPAAQjKAAh3g0g");
	this.shape_42.setTransform(36.6,-20.2,0.673,0.49);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FB781D").s().p("AlEGcQiVhZh0iiQhzihhAjRQgriOgOiYQAQCFApB9QBADBBzCTQB0CVCVBSQCcBUCoAAQCqAACahUQCWhSB0iVQB0iTA/jBQAph9AQiFQgOCYgrCOQg/DRh0ChQh0CiiWBZQiaBciqAAQioAAichcg");
	this.shape_43.setTransform(45.7,47.8,0.673,0.49);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FBEFB1").s().p("ADygSQijg7iyAAQkYAAiTBiQBBhQBpgpQBvgrCigBQCxAACgBOQCbBJB2CKQh/hrieg4g");
	this.shape_44.setTransform(41,-33.8,0.673,0.49);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],2.2,-103,0,0.5,-6.6,125.3).s().p("AlEQ2QiVhZh0iiQhziihAjSQhCjZAAjuQAAlgAGhmQANjoA0iMQBAioCFhTQCVhcD8ABQDOgBC8BcQC0BZCJCiQCJChBLDTQBNDYgBDuQABDuhCDZQg/DSh0CiQh0CiiWBZQiaBbiqABQiogBichbg");
	this.shape_45.setTransform(45.7,15.2,0.673,0.49);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-18.7,-10.2,0,-10.1,32.8,128.4).s().p("AknDuQjGhDA5iMQAxh4CVhiQCVhgCIAAQCGAABzBeQBtBcAkCAQApCTiSA/QhmAsi7AAQjKgBiMgug");
	this.shape_46.setTransform(-58.6,-20.5,0.673,0.49);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FB781D").s().p("AlDGaQiWhYh0iiQh0igg/jSQgqiNgPiWQAQCHApB/QA/DFB0CWQB0CYCWBTQCaBXCpAAQCpAACchXQCVhTB0iYQBziWBAjFQAph/AQiHQgPCWgqCNQhADShzCgQh0CiiVBYQicBcipAAQipAAiahcg");
	this.shape_47.setTransform(-61.2,47.9,0.673,0.49);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FBEFB1").s().p("AkXhXQCwhqDGAAQC2AAB4A9QBuA3A/BtQhHhIhuglQh2gnikABQjFgBiyBUQirBOiDCTQB5i2Cqhig");
	this.shape_48.setTransform(-58.5,-31.3,0.673,0.49);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-3.7,-103,0,-2,-6.6,125.3).s().p("AlDQ2QiWhZh0iiQh0iig/jSQhCjZAAjuQAAjuBNjYQBLjTCIihQCKiiC0hZQC8hcDOABQD8gBCVBcQCFBTBACoQA0CMANDoQAGBmAAFgQAADuhCDZQhADShzCiQh0CiiVBZQicBbipABQipgBiahbg");
	this.shape_49.setTransform(-61.2,15.2,0.673,0.49);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],22.9,-58.6,0,5.4,5,140).s().p("AkkSDQiHhfhpiuQhoiug6jgQg6jpAAj/QAAj9A6jpQA6jhBoiuQBpiuCHhfQCMhiCYAAQCZAACMBiQCHBfBpCuQBoCuA6DhQA6DpAAD9QAAD/g6DpQg6DhhoCtQhpCuiHBfQiMBiiZAAQiYAAiMhig");
	this.shape_50.setTransform(29,14.5,0.673,0.49);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-33.9,-70.8,0,-3.1,-9.7,118.6).s().p("AkkR4QiIhehoisQhoisg6jeQg7jnAAj9QAAj7A7jnQA6jfBoisQBoisCIheQCMhiCYAAQCZAACMBiQCHBeBpCsQBoCsA5DfQA8DnAAD7QAAD9g8DnQg5DehoCsQhpCsiHBeQiMBiiZAAQiYAAiMhig");
	this.shape_51.setTransform(-44.1,13.9,0.673,0.49);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["rgba(0,0,0,0)","rgba(252,147,32,0)","#FC9320","#FC911F","#FB6B1B","#FB541A","#FB4B19"],[0,0.808,0.808,0.808,0.875,0.925,0.961],0.9,12.1,0,-0.7,16.8,157).s().p("AkMSrQh9hjhgizQhgi0g0jpQg3jxAAkHQAAkGA3jxQA0jpBgizQBgi0B9hjQCAhlCMAAQCMAACBBlQB9BjBgC0QBgCzA0DpQA3DwAAEHQAAEIg3DwQg0DphgC0QhgCzh9BjQiBBliMAAQiMAAiAhlg");
	this.shape_52.setTransform(-7.7,15.2,0.673,0.49);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB625","#FBA022","#FB841E","#FB611B","#FB4E19","#FB561A","#FB711C","#FC841E","#FC8F1F","#FC9320","rgba(252,147,32,0)","rgba(0,0,0,0)"],[0,0.169,0.286,0.392,0.482,0.573,0.655,0.69,0.698,0.722,0.749,0.776,0.808,0.808,1],0.9,12.1,0,-0.7,16.8,157).s().p("AkMSrQh9hjhgizQhgi0g0jpQg3jxAAkHQAAkGA3jxQA0jpBgizQBgi0B9hjQCAhlCMAAQCMAACBBlQB9BjBgC0QBgCzA0DpQA3DwAAEHQAAEIg3DwQg0DphgC0QhgCzh9BjQiBBliMAAQiMAAiAhlg");
	this.shape_53.setTransform(-7.7,15.2,0.673,0.49);

	this.instance = new lib.foxAnimated();
	this.instance.setTransform(2.7,67,1.6,1.6,0,0,0,60.6,166.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgEMvQgkgBgfgNIhegUIhNANIgFAAIgDAAIgeAAIgOAAQgjAAghgMIhqgbIgSgHQgXgJgWgLIgBAAQhzAAhpgtQhkgrhOhQQhOhPgrhnIgCgGIgCgEIgOg0QgJgagFgaIgDgLQgIgwgBgyQABh1AzhoQAyhnBdhPQBchPB5grQAugRAvgKQARgKASgJQBdgwBoAAQAdAAAcAEIg7ggQgggSgQgMIgCgBIgGgFQAaAHBzANQBqANAyASIADAAIAUAGQAUgqAJgqQAIgugJgZIg6hPIgSgLIgqgOIgFAAIgBgBIgKgBQgTgBgSACIgYAFQgSAAgKgNQgKgMAAgSQAAgQAMgMQALgLAPAAQBzgTBbApIAHADQBbAtAqBpIAtBxQANAfANAaIAkgIIABAAIACAAIAFgBIACgBIACAAIACgBQCCgdAtghQgGASgjAYQgPALg2AeIgCACQAzgNA1AAQBGAABCAWIAqgBIBCACIgDAAIgDAAIgCABIgEAAIgqAEIgaAFIAiAPQASAJARALQAtAKArAQQB6ArBcBPQBcBPAyBnQA0BoAAB1QAAAtgHArIgLA3QgKApgQAnQgrBnhOBPQhOBQhkArQhjAqhsADIgRAHIgEACIgJAEIgJADQhKAdhSALQgaAGgdAAIgNAAIgFAAIgaAAIgCAAIg5gEIgTgDQhOAfhZABg");
	this.shape_54.setTransform(-7.7,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_54}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.6,-206.5,222.5,287.7);


// stage content:
(lib.JS_PumpkinPayout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{door1:62});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_60 = function() {
		this.stop();
		eventFromFlash("game");
	}
	this.frame_262 = function() {
		this.stop();
		eventFromFlash("show_win");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60).call(this.frame_60).wait(202).call(this.frame_262).wait(1));

	// button
	this.instance = new lib.click();
	this.instance.setTransform(366.9,23.3,1.008,1.008,0,0,0,-49.1,-40);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).to({y:167.3,alpha:1},9,cjs.Ease.get(1)).to({_off:true},8).wait(203));

	// Logo
	this.instance_1 = new lib.logoForAnim();
	this.instance_1.setTransform(142.5,266.2,1.6,1.6,0,0,0,177.3,81.5);

	this.instance_2 = new lib.Tween1();
	this.instance_2.setTransform(367.2,52.4,1.6,1.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween2();
	this.instance_3.setTransform(367.2,335.5,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},8).to({state:[]},1).to({state:[{t:this.instance_2}]},12).to({state:[{t:this.instance_3}]},9).to({state:[]},22).wait(203));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({y:39},8,cjs.Ease.get(1)).to({_off:true},1).wait(246));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({_off:true,y:335.5},9,cjs.Ease.get(1)).wait(225));

	// Layer 3
	this.instance_4 = new lib.pronoTextAnim();
	this.instance_4.setTransform(519,224.1,1.6,1.6,0,0,0,104.5,52.2);

	this.instance_5 = new lib.foxAnimated();
	this.instance_5.setTransform(373.5,401.3,1.6,0.638,0,0,0,58.6,166.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({x:869.4},8,cjs.Ease.get(1)).to({_off:true},1).wait(238));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38).to({_off:false},0).to({regX:60.6,scaleX:1.61,scaleY:1.61,x:377.7,y:403.5},5,cjs.Ease.get(1)).to({_off:true},17).wait(203));

	// game
	this.instance_6 = new lib.shadow();
	this.instance_6.setTransform(-75.8,331.9,2.105,1.553,-6.5);

	this.instance_7 = new lib.click();
	this.instance_7.setTransform(366.9,167.3,1.008,1.008,0,0,0,-49.1,-40);
	this.instance_7._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#A2D223","#415312"],[0.157,1],-5.2,5.8,0,-5.2,5.8,33.9).s().p("AiMgsQA1g/AwgSQA2gWB9AlQApAMAnAPQAiANgDABQiZAUhKAbQhwAniiB1QA0huA6hEg");
	this.shape.setTransform(469.2,130.1,1.937,1.41);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#A2D223","#415312"],[0.157,1],-3.6,5.8,0,-3.6,5.8,36.6).s().p("AgniJQgkggg5gLIgygDQBog2B5gIQBfgHAMALQBYBIiRDXQhIBshYBeQCMkahwhng");
	this.shape_1.setTransform(552,146.2,1.937,1.41);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#2B380B","#39490F","#4D6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.475,0.51,0.573,0.643,0.725,0.824,1],-42.8,6.4,0,-42.8,6.4,72.9).s().p("AiMgrQBDhUAvgSQA2gVB9AkQApAMAnAPQAiAOgDAAQiEARhsAyQhwAyivB9QA1hvBGhVg");
	this.shape_2.setTransform(466.7,132.9,1.937,1.41);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#2B380B","#39490F","#4D6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.475,0.51,0.573,0.643,0.725,0.824,1],-19.3,8.5,0,-19.3,8.5,49.1).s().p("AgyiJQghgkg0gOIgvgIQBpg1B5gJQBegGANALQBYBIidDiQhOByheBkQCMkbhkhyg");
	this.shape_3.setTransform(551.8,147.8,1.937,1.41);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAFQgDgCAAgDQAAgGAGAAQAHAAAAAGQAAAHgHAAQgBAAgCgCg");
	this.shape_4.setTransform(295.2,318.4,1.937,1.41);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAKQgFgEAAgGQAAgFAFgEQAEgFAEAAQAFAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgFAAQgEAAgEgFg");
	this.shape_5.setTransform(301.1,317.5,1.937,1.41);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],-1.9,5.3,0,-0.7,2.6,10.8).s().p("AgoAsQgRgSAAgaQAAgYARgUQARgSAXAAQAYAAARASQARATAAAZQAAAagRASQgRATgYAAQgXAAgRgTg");
	this.shape_6.setTransform(299,321.3,1.937,1.41);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2381D").s().p("AguAzQgUgWAAgdQAAgdAUgVQAUgVAaAAQAcAAATAVQAUAVAAAdQAAAdgUAWQgTAVgcAAQgaAAgUgVg");
	this.shape_7.setTransform(298.6,322.4,1.937,1.41);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgDQADgDACAAQADAAADADQACADAAADQAAAEgCADQgDADgDAAQgCAAgDgDg");
	this.shape_8.setTransform(325.2,272.1,1.937,1.41);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAPQgFgHAAgIQAAgHAFgGQAFgHAGAAQAHAAAFAHQAFAGAAAHQAAAIgFAHQgFAGgHAAQgGAAgFgGg");
	this.shape_9.setTransform(332.5,270.8,1.937,1.41);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],-2.2,7.3,0,-0.8,3.5,14.6).s().p("AgyA9QgVgZgBgkQABgjAVgZQAVgaAdAAQAdAAAWAaQAVAZABAjQgBAkgVAZQgWAagdAAQgdAAgVgag");
	this.shape_10.setTransform(329.9,275.9,1.937,1.41);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2381D").s().p("Ag6BGQgYgdAAgpQAAgoAYgdQAZgdAhAAQAiAAAYAdQAZAdAAAoQAAApgZAdQgYAdgiAAQghAAgZgdg");
	this.shape_11.setTransform(329.4,277.4,1.937,1.41);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAPQgEgHAAgIQAAgIAEgGQAFgGAFAAQAGAAAFAGQAEAGAAAIQAAAIgEAHQgFAGgGAAQgFAAgFgGg");
	this.shape_12.setTransform(268.5,245.6,1.937,1.41);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAeQgJgNAAgRQAAgQAJgNQAJgNAMAAQANAAAJANQAJANAAAQQAAARgJANQgJANgNAAQgMAAgJgNg");
	this.shape_13.setTransform(281.3,243,1.937,1.41);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4B19"],[0,0.239,0.408,0.553,0.682,0.749,1],0,15.1,0,0,15.1,26.7).s().p("AhaCjQgmg0AAhJQAAhNBLhaQBEhUAtAAQAbAAAWBaQAUBTAABOQAABJgmA0QgmAzg1AAQg0AAgmgzg");
	this.shape_14.setTransform(276.7,248.1,1.937,1.41);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F23E1B").s().p("AhnCyQgsg7AAhUQAAhYBPheQBIhZA9AAQAfgBAbBfQAZBaAABXQAABUgsA7QgrA7g9ABQg8gBgrg7g");
	this.shape_15.setTransform(275.9,251.4,1.937,1.41);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-5.9,-13.5,0,-7.5,61.9,174.7).s().p("AkgFQQiVhbAZjJQAWizB/iGQB+iECNAAQCKAAB1CGQBwCAAlC3QAqDQiWBZQhoA9jAAAQi2AAhuhCg");
	this.shape_16.setTransform(516.1,206.4,1.937,1.41);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBEFB1").s().p("AExgtQiOhvijAAQiiAAiOBvQiKBohYC6QBTjhCLiBQCPiHClAAQCmAACPCHQCLCBBTDhQhYi6iKhog");
	this.shape_17.setTransform(516.4,161.2,1.937,1.41);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FB7228").s().p("AjkB/QhgiMg2kAQA8DEBfBpQBjBwB8AAQB7AABjhxQBghrA9jHQg3EChhCOQhkCXh/AAQiAAAhkiVg");
	this.shape_18.setTransform(516.3,413.9,1.937,1.41);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FB7228").s().p("Al/B/QigiMhbkAQBnDLCdBzQCrCBDLAAQDJAACtiCQCch2BpjNQhcECihCOQipCXjVAAQjXAAioiVg");
	this.shape_19.setTransform(516.3,413.9,1.937,1.41);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-11.1,-139.3,0,-9.5,-23.6,150.5).s().p("AoXNNQjElCABn7QgBjxA6jeQA3jXBmimQBmilCChbQCIhfCUAAQCVAACIBfQCCBbBmClQBmCmA3DXQA6DegBDxQAAH4jIFFQhhCgiGBWQiKBYiiABQlNAAjKlPg");
	this.shape_20.setTransform(516.4,286.5,1.937,1.41);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],17.5,-8.3,0,5.8,46.8,135.5).s().p("Ak2EZQihhMAbioQAYiWCJhwQCHhvCYAAQCVAAB+BwQB5BsAnCZQAtCuihBKQhwA0jPAAQjEAAh2g4g");
	this.shape_21.setTransform(613.1,187.1,1.937,1.41);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FBEFB1").s().p("ACogTQigg+i6AAQiaAAhlBcQBkifCvAAQC5AACcBRQCSBLBpCNQhyhviYg5g");
	this.shape_22.setTransform(612.6,140.6,1.937,1.41);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FC861E").s().p("Ak5hCQBZCrCEAAQB6AABqhTQBlhMBNiSQhGC+hkBlQhoBth6AAQiRABhWkLg");
	this.shape_23.setTransform(618,417.5,1.937,1.41);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FC861E").s().p("AmACBQhkhDhJiAQCdCrDsAAQDZAAC9hTQC0hMCIiSQh9C+iwBlQi6BtjaAAQiEAAhphHg");
	this.shape_24.setTransform(618,417.5,1.937,1.41);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-2.2,-129.3,0,-0.7,-18,144.8).s().p("ApnM3QiKk2AAoBQAAoZBokdQB/lcEhAAQDLAAC2BdQCxBbCJCkQCICjBLDSQBNDYAADpQAADshCDWQhBDUh5ChQh8ClinBaQivBdjKAAQknABialdg");
	this.shape_25.setTransform(621.6,280.6,1.937,1.41);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-15.9,-10.3,0,-10,38.9,143.6).s().p("Ak2EZQihhMAbioQAYiWCJhwQCHhvCYAAQCUAAB+BwQB5BsAoCZQAtCuihBKQhxA0jOAAQjEAAh2g4g");
	this.shape_26.setTransform(420.3,190.3,1.937,1.41);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FBEFB1").s().p("Ai1hDQCbhRC5AAQCvAABkCfQhlhciaAAQi6AAigA+QiYA5hyBvQBpiNCThLg");
	this.shape_27.setTransform(418.3,140.6,1.937,1.41);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FC861E").s().p("AiCBfQhhhthIjCQBNCeBjBWQBmBcBrAAQCBAABVi1QhTEGiLAAQhrAAhlhyg");
	this.shape_28.setTransform(416.1,417.5,1.937,1.41);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FC861E").s().p("AjuBfQizhsiDjDQCMCeC1BWQC7BcDGAAQDsAACbi1QhJB9hiBDQhoBGiCAAQjFAAi5hyg");
	this.shape_29.setTransform(416.1,417.5,1.937,1.41);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-6.2,-139.7,0,-4.7,-24.6,149.7).s().p("Ai4Q8QikhbiBilQiCimhHjTQhLjbAAjoQAAjtBDjVQBEjXB+ihQCDioCzhaQC8hfDjAAQEhAACAFhQBoEfAAIbQAAICiKE6QiaFgknAAQi0AAirhgg");
	this.shape_30.setTransform(411.7,280.6,1.937,1.41);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7B9D24").s().p("AgXAeQgIgNAAgTQAAgSAKgMQAJgMAMAAQAOAAAJAMQAJANAAATQAAASgJANQgJAPgOAAQgOgBgJgPg");
	this.shape_31.setTransform(439.5,-3.1,1.937,1.41);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8DB428").s().p("AgrA4QgOgZAAgjQAAggARgXQARgXAXAAQAaAAARAYQAPAWAAAjQAAAigPAYQgRAagaAAQgbAAgQgbg");
	this.shape_32.setTransform(439.5,-3.1,1.937,1.41);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#A7DE25","#719020","#80A224"],[0,0.584,1],-23.5,0,23.6,0).s().p("ACGCMQAPjggTiCQgbi9iqgtQg2gOg+ACIgzAFIAAgZQFKgdA6ElQATBiAECEQABAhgCC3QAAB0AKA0QAMBGAlAPIi4ABQBDhBAQkXg");
	this.shape_33.setTransform(491.7,64.5,1.937,1.41);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#9FD423","#9FD423","#628412"],[0,0.51,1],-2.7,-44.8,3.3,60.8).s().p("AAfB7QAhjOgSh9Qgai8ibgmQgxgMg5AEIguAHIAAgyQCYgVBmA8QB2BGAkCsQAVBcAKB/IAODHQALBmAXA8QAeBKA7AnImLADQBjhrAmkGg");
	this.shape_34.setTransform(502,63.6,1.937,1.41);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#648612","#647F1C","#4E6215"],[0,0.51,1],-3,-52.2,2.3,47.1).s().p("AhvHhQBvhxArj6QAhi9gSh/Qgai8icgWQgxgHg5ALIguAMIAAhTQCZgVBlA8QB2BGAlCsQAUBaAJB3IAOC/QAJBkATA7QAZBKAwAqg");
	this.shape_35.setTransform(493.3,62.1,1.937,1.41);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#648612","#647F1C","#4E6215"],[0,0.51,1],-2.9,-50.9,2.4,48.4).s().p("AhVHyQBfh0Anj5QAgjGgSh0Qgdi9ipgmQg2gMg+AFIgyAHIAAhUQCfgUB2BMQCABSApCxQAVBZAKB3IAPC/QAKBlAVA6QAbBLA1Aqg");
	this.shape_36.setTransform(504.7,59.9,1.937,1.41);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#506515").s().p("ACwHoQhyg2hLjUQghhahKk1QgzjSiEhlQCNBeA8DWIBDDjQAnCGAnBTQBpDeCcACg");
	this.shape_37.setTransform(559.3,61.1,1.937,1.41);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#506515").s().p("AjGG0QDQgyBskEQAphjAOhlQANhegOgyQgfhyg+g3Qgvgrg7gFQBDgFAuAeQBFAuAkCEQAOAygLBgQgMBogmBlQhlELjPAyg");
	this.shape_38.setTransform(461.7,68.5,1.937,1.41);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#4B620B","#8FC11F","#628412"],[0,0.51,1],-27.4,-48.4,-2.4,42.3).s().p("An2IIQDSgyBskEQAphjAOhnQANhcgOgyQgzi3h8gdQgmgKgqAIIghAJIAAinQCqgoCHBUQCRBcBADdIBCDkQApCFAoBUQBpDdCbADg");
	this.shape_39.setTransform(520.6,56.7,1.937,1.41);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#2B380B","#33410C","#4F6610","#678514","#7A9E19","#89B21D","#94C01F","#9AC821","#9CCA21"],[0.333,0.349,0.408,0.471,0.541,0.616,0.702,0.812,1],-0.5,10.5,0,-1,-8.8,50.8).s().p("Ag2EQIgbhSQglhchlgWQizhAhvgYQjFgvi4AiQEVhaCYApQAjAJArAPQAgAFAggcQAXgVgkgiQgagZhIgqQhVgvgmgYQhDgpgVgcQAlAOCrAbQCeAaBLAkQBTAcA8AoQAdAVAOAOQAvgVBbgbICdgvQDAg8BDhDQgIAdg0ArQgMAKhcBEQhAAwgXAcQgfAnAWAaQAWAYAygOQAJgCBxgtQDWhVDLAYQjMASjLBqQi8BwhDAZQhwAZg/BMQgrAzgdBhQgUgegQgyg");
	this.shape_40.setTransform(519.7,113.1,1.937,1.41);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#192106","#202A08","#38480F","#4C6215","#5C7619","#67831D","#6D8B1F","#6F8E1F"],[0.51,0.522,0.573,0.627,0.69,0.761,0.847,1],-0.5,10.5,0,-1,-8.8,50.8).s().p("Ag5EXQgVgxgKgRQgqhEhngYQgsgNhZgmQhjgsgzgRQjDhDizAhQEXhaCGA4QAfAOAlAWQAbAKAfgcQAngliGhlQhNg3gjgbQg+gvgVgbQAlAOCrAbQCeAaBLAkQBTAcA8AoQAdAVAOAOQAvgVBbgbICdgvQDAg8BDhDQgIAlg0AwQgYAXhPA+QhCAygVAbQggAnAXAaQAVAYAzgRIB5g2QDUhgDNAYQjLASjMB8Qi7CChDAZQh1Aag7A5QguAtgaBVQgTgcgUgtg");
	this.shape_41.setTransform(519.7,113.1,1.937,1.41);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],20.5,-13.8,0,6.4,43.2,131.3).s().p("AlqEFQijhHAbicQAYiKCLhpQCJhnCdAAQCVABCOBOQCJBMBYB8QAzBGgqBFQgkA8hkAyQhYAshzAbQhrAahPAAQjKAAh3g0g");
	this.shape_42.setTransform(644.1,160.9,1.937,1.41);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FB781D").s().p("AlEGcQiVhZh0iiQhzihhAjRQgriOgOiYQAQCFApB9QBADBBzCTQB0CVCVBSQCcBUCoAAQCqAACahUQCWhSB0iVQB0iTA/jBQAph9AQiFQgOCYgrCOQg/DRh0ChQh0CiiWBZQiaBciqAAQioAAichcg");
	this.shape_43.setTransform(670.2,356.9,1.937,1.41);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FBEFB1").s().p("ADygSQijg7iyAAQkYAAiTBiQBBhQBpgpQBvgrCigBQCxAACgBOQCbBJB2CKQh/hrieg4g");
	this.shape_44.setTransform(656.7,121.8,1.937,1.41);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],2.2,-103,0,0.5,-6.6,125.3).s().p("AlEQ2QiVhZh0iiQhziihAjSQhCjZAAjuQAAlgAGhmQANjoA0iMQBAioCFhTQCVhcD8ABQDOgBC8BcQC0BZCJCiQCJChBLDTQBNDYgBDuQABDuhCDZQg/DSh0CiQh0CiiWBZQiaBbiqABQiogBichbg");
	this.shape_45.setTransform(670.2,263,1.937,1.41);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FDF0B4","#FDE576","#FDE276","#FDD976","#FDCA75","#FDC275","#FC9A74"],[0.016,0.188,0.412,0.565,0.698,0.749,1],-18.7,-10.2,0,-10.1,32.8,128.4).s().p("AknDuQjGhDA5iMQAxh4CVhiQCVhgCIAAQCGAABzBeQBtBcAkCAQApCTiSA/QhmAsi7AAQjKgBiMgug");
	this.shape_46.setTransform(369.9,160,1.937,1.41);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FB781D").s().p("AlDGaQiWhYh0iiQh0igg/jSQgqiNgPiWQAQCHApB/QA/DFB0CWQB0CYCWBTQCaBXCpAAQCpAACchXQCVhTB0iYQBziWBAjFQAph/AQiHQgPCWgqCNQhADShzCgQh0CiiVBYQicBcipAAQipAAiahcg");
	this.shape_47.setTransform(362.6,357.1,1.937,1.41);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FBEFB1").s().p("AkXhXQCwhqDGAAQC2AAB4A9QBuA3A/BtQhHhIhuglQh2gnikABQjFgBiyBUQirBOiDCTQB5i2Cqhig");
	this.shape_48.setTransform(370.2,129,1.937,1.41);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-3.7,-103,0,-2,-6.6,125.3).s().p("AlDQ2QiWhZh0iiQh0iig/jSQhCjZAAjuQAAjuBNjYQBLjTCIihQCKiiC0hZQC8hcDOABQD8gBCVBcQCFBTBACoQA0CMANDoQAGBmAAFgQAADuhCDZQhADShzCiQh0CiiVBZQicBbipABQipgBiahbg");
	this.shape_49.setTransform(362.6,263,1.937,1.41);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],22.9,-58.6,0,5.4,5,140).s().p("AkkSDQiHhfhpiuQhoiug6jgQg6jpAAj/QAAj9A6jpQA6jhBoiuQBpiuCHhfQCMhiCYAAQCZAACMBiQCHBfBpCuQBoCuA6DhQA6DpAAD9QAAD/g6DpQg6DhhoCtQhpCuiHBfQiMBiiZAAQiYAAiMhig");
	this.shape_50.setTransform(622.2,260.8,1.937,1.41);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB624","#FCA121","#FC9320","#FB4819","#FB1517"],[0,0.239,0.408,0.553,0.682,0.749,0.906,1],-33.9,-70.8,0,-3.1,-9.7,118.6).s().p("AkkR4QiIhehoisQhoisg6jeQg7jnAAj9QAAj7A7jnQA6jfBoisQBoisCIheQCMhiCYAAQCZAACMBiQCHBeBpCsQBoCsA5DfQA8DnAAD7QAAD9g8DnQg5DehoCsQhpCsiHBeQiMBiiZAAQiYAAiMhig");
	this.shape_51.setTransform(411.7,259.2,1.937,1.41);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["rgba(0,0,0,0)","rgba(252,147,32,0)","#FC9320","#FC911F","#FB6B1B","#FB541A","#FB4B19"],[0,0.808,0.808,0.808,0.875,0.925,0.961],0.9,12.1,0,-0.7,16.8,157).s().p("AkMSrQh9hjhgizQhgi0g0jpQg3jxAAkHQAAkGA3jxQA0jpBgizQBgi0B9hjQCAhlCMAAQCMAACBBlQB9BjBgC0QBgCzA0DpQA3DwAAEHQAAEIg3DwQg0DphgC0QhgCzh9BjQiBBliMAAQiMAAiAhlg");
	this.shape_52.setTransform(516.4,263,1.937,1.41);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FCD229","#FCCF28","#FCC627","#FCB625","#FBA022","#FB841E","#FB611B","#FB4E19","#FB561A","#FB711C","#FC841E","#FC8F1F","#FC9320","rgba(252,147,32,0)","rgba(0,0,0,0)"],[0,0.169,0.286,0.392,0.482,0.573,0.655,0.69,0.698,0.722,0.749,0.776,0.808,0.808,1],0.9,12.1,0,-0.7,16.8,157).s().p("AkMSrQh9hjhgizQhgi0g0jpQg3jxAAkHQAAkGA3jxQA0jpBgizQBgi0B9hjQCAhlCMAAQCMAACBBlQB9BjBgC0QBgCzA0DpQA3DwAAEHQAAEIg3DwQg0DphgC0QhgCzh9BjQiBBliMAAQiMAAiAhlg");
	this.shape_53.setTransform(516.4,263,1.937,1.41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[]},14).to({state:[{t:this.instance_7}]},46).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},9).to({state:[]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},190).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60).to({_off:false},0).wait(2).to({y:256.6,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(191));

	// Button
	this.instance_8 = new lib.shadow();
	this.instance_8.setTransform(231.2,371.8,2.302,0.993,-6.5);

	this.door1_btn = new lib.ButtonOne();
	this.door1_btn.setTransform(375,267.8,1.008,1.008,0,0,0,0,-67.6);
	new cjs.ButtonHelper(this.door1_btn, 0, 1, 2, false, new lib.ButtonOne(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{rotation:-6.5,x:231.2,y:371.8,scaleX:2.302,scaleY:0.993}}]}).to({state:[]},17).to({state:[{t:this.instance_8,p:{rotation:0.3,x:82.1,y:385.6,scaleX:2.302,scaleY:0.993}}]},16).to({state:[{t:this.door1_btn}]},27).to({state:[]},2).to({state:[{t:this.instance_8,p:{rotation:0.3,x:-85.3,y:415.5,scaleX:4.281,scaleY:1.128}}]},200).wait(1));

	// Cup1Selected
	this.instance_9 = new lib.shadow();
	this.instance_9.setTransform(82.1,385.6,2.302,0.993,0.3);

	this.instance_10 = new lib.Cups1Animation();
	this.instance_10.setTransform(279.9,237.9,0.403,0.403,0,0,0,0,49.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3E2113").s().p("AgIARQn5gPi6gZIJyAWQKIATB8gDQhnAJjFAAQiqAAjtgHg");
	this.shape_54.setTransform(189.9,473.4,2.29,0.451);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3E2113").s().p("AmqAGIFhgKQF3gNB9AAQi0APjFAJQjAALh3AAQh6AAgrgMg");
	this.shape_55.setTransform(-8.7,452.4,2.29,0.451);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3E2113").s().p("AtFgEIMAAAQMWgBB1gCQiuANqhACIh3AAQo+AAiHgMg");
	this.shape_56.setTransform(517.6,456.4,2.29,0.451);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3E2113").s().p("AprgCIIEgFQIlgDCuAIQkRAFkjADQioACiAAAQk4AAhDgKg");
	this.shape_57.setTransform(409.7,417.2,2.29,0.451);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3E2113").s().p("Al6AFQEUgRBXAKQBaAJDNgIQBygGDygSQleAykjgPQhPgFkbAKIkMALg");
	this.shape_58.setTransform(234.9,436.3,2.29,0.451);

	this.instance_11 = new lib.Path_5();
	this.instance_11.setTransform(359.6,410.2,2.29,0.451,0,0,0,113.8,11);
	this.instance_11.alpha = 0.5;

	this.instance_12 = new lib.Path_0();
	this.instance_12.setTransform(98.2,463.2,2.29,0.451,0,0,0,27.7,3.5);
	this.instance_12.alpha = 0.898;

	this.instance_13 = new lib.Path_1_0();
	this.instance_13.setTransform(99.9,461.6,2.29,0.451,0,0,0,48.1,6.2);
	this.instance_13.alpha = 0.602;

	this.instance_14 = new lib.Path_2();
	this.instance_14.setTransform(86.8,461.8,2.29,0.451,0,0,0,80.3,10);
	this.instance_14.alpha = 0.398;

	this.instance_15 = new lib.Path();
	this.instance_15.setTransform(729,423.9,2.29,0.451,0,0,0,19.8,3.6);
	this.instance_15.alpha = 0.898;

	this.instance_16 = new lib.Path_1();
	this.instance_16.setTransform(684.3,424.3,2.29,0.451,0,0,0,40.4,8.4);
	this.instance_16.alpha = 0.602;

	this.instance_17 = new lib.Group();
	this.instance_17.setTransform(627.4,424.7,2.29,0.451,0,0,0,71.5,12.7);
	this.instance_17.alpha = 0.398;

	this.instance_18 = new lib.Path_6();
	this.instance_18.setTransform(410.1,425.9,2.29,0.451,0,0,0,145.5,13.2);
	this.instance_18.alpha = 0.398;

	this.instance_19 = new lib.Path_7();
	this.instance_19.setTransform(344,444.9,2.29,0.451,0,0,0,187.8,16.9);
	this.instance_19.alpha = 0.301;

	this.instance_20 = new lib.Path_8();
	this.instance_20.setTransform(409.7,465.2,2.29,0.451,0,0,0,216,14.8);
	this.instance_20.alpha = 0.199;

	this.instance_21 = new lib.Path_9();
	this.instance_21.setTransform(385.5,481.4,2.29,0.451,0,0,0,238.4,11.6);
	this.instance_21.alpha = 0.102;

	this.instance_22 = new lib.Group_2();
	this.instance_22.setTransform(355.2,447.1,2.29,0.451,0,0,0,278.3,94.3);

	this.instance_23 = new lib.Path_10();
	this.instance_23.setTransform(358,427.5,2.29,0.451,0,0,0,185.6,19.4);
	this.instance_23.alpha = 0.398;

	this.instance_24 = new lib.Path_11();
	this.instance_24.setTransform(361.2,445.6,2.29,0.451,0,0,0,217.8,22.7);
	this.instance_24.alpha = 0.301;

	this.instance_25 = new lib.Path_12();
	this.instance_25.setTransform(370.8,465.5,2.29,0.451,0,0,0,243,17.6);
	this.instance_25.alpha = 0.199;

	this.instance_26 = new lib.Path_13();
	this.instance_26.setTransform(372.7,481.2,2.29,0.451,0,0,0,278.3,16.3);
	this.instance_26.alpha = 0.102;

	this.instance_27 = new lib.Path_14();
	this.instance_27.setTransform(357.9,410.5,2.29,0.451,0,0,0,153.7,15.4);
	this.instance_27.alpha = 0.5;

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#613826").ss(0.8,1,1).p("EAgUgAWIBHBVQBQBgAqArQAiAkAjAvQAeApAVAUQArAoA8BJIhGAHIB1AhIDtElIgoAEID6DHMhdDAAFIBQiGQBkhuAXgYQAPgOA2hTIAzhPIB4gvIhCgKICjjzIAbgOIgbgNIFDm9IAYgDIDSkmIDmkHIA4gXIg1gHIBhidIGUgBQHEgEDtgPQDqgOCpgBQBegBC/AAQDjgENzAeICCC+IhQAEIBdAUIBXBnIAbADIB+C0IgaAsIBCANIBhCWIAvAAICIDSQgeAEgcAFQg3AIARAAQAaAABeARg");
	this.shape_59.setTransform(381.8,447.5,2.29,0.451);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#D19A5B","#C88C58","#784834","#5F3725"],[0,0.404,0.769,1],8.6,-164.4,0,8.6,-164.4,345.1).s().p("EgtRANiQBkhuAXgYQAPgOA2hTIAzhPIB4gvIhCgKICjjzIAbgOIgbgNIFDm9IAYgDIDSkmIDmkHIA4gXIg1gHIBhidIGUgBQHEgEDtgPQDqgOCpgBIEdgBQDjgENzAeICCC+IhQAEIBdAUIBXBnIAbADIB+C0IgaAsIBCANIBhCWIAvAAICIDSIg6AJQg3AIARAAQAaAABeARIBHBVQBQBgAqArQAiAkAjAvQAeApAVAUQArAoA8BJIhGAHIB1AhIDtElIgoAEID6DHMhdDAAFg");
	this.shape_60.setTransform(381.8,447.5,2.29,0.451);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},60).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},200).wait(1));

	// Table
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3E2113").s().p("AgIARQn5gPi6gZIJyAWQKIATB8gDQhnAJjFAAQiqAAjtgHg");
	this.shape_61.setTransform(48.3,489.9,3.635,0.955,0,-4,-6.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3E2113").s().p("AmqAGIFhgKQF3gNB9AAQi0APjFAJQjAALh3AAQh6AAgrgMg");
	this.shape_62.setTransform(-267.9,483.4,3.635,0.955,0,-4,-6.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3E2113").s().p("AtFgEIMAAAQMWgBB1gCQiuANqhACIh3AAQo+AAiHgMg");
	this.shape_63.setTransform(562.3,391.2,3.635,0.955,0,-4,-6.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3E2113").s().p("AprgCIIEgFQIlgDCuAIQkRAFkjADQioACiAAAQk4AAhDgKg");
	this.shape_64.setTransform(386.3,329.1,3.635,0.955,0,-4,-6.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3E2113").s().p("Al6AFQEUgRBXAKQBaAJDNgIQBygGDygSQleAykjgPQhPgFkbAKIkMALg");
	this.shape_65.setTransform(113.7,402.9,3.635,0.955,0,-4,-6.9);

	this.instance_28 = new lib.Path_5();
	this.instance_28.setTransform(306.6,323.9,3.635,0.955,0,-4,-6.9,113.9,11.3);
	this.instance_28.alpha = 0.5;

	this.instance_29 = new lib.Path_0();
	this.instance_29.setTransform(-97.8,485.6,3.635,0.955,0,-4,-6.9,27.7,3.4);
	this.instance_29.alpha = 0.898;

	this.instance_30 = new lib.Path_1_0();
	this.instance_30.setTransform(-95.5,482.2,3.635,0.955,0,-4,-6.9,48.1,6.1);
	this.instance_30.alpha = 0.602;

	this.instance_31 = new lib.Path_2();
	this.instance_31.setTransform(-115.9,485.3,3.635,0.955,0,-4,-6.9,80.3,10.1);
	this.instance_31.alpha = 0.398;

	this.instance_32 = new lib.Path();
	this.instance_32.setTransform(890.5,282.2,3.635,0.955,0,-4,-6.9,19.8,3.6);
	this.instance_32.alpha = 0.898;

	this.instance_33 = new lib.Path_1();
	this.instance_33.setTransform(820,291.5,3.635,0.955,0,-4,-6.9,40.4,8.4);
	this.instance_33.alpha = 0.602;

	this.instance_34 = new lib.Group();
	this.instance_34.setTransform(730.6,303.2,3.635,0.955,0,-4,-6.9,71.5,12.6);
	this.instance_34.alpha = 0.398;

	this.instance_35 = new lib.Path_6();
	this.instance_35.setTransform(388.2,347.4,3.635,0.955,0,-4,-6.9,145.5,13.3);
	this.instance_35.alpha = 0.398;

	this.instance_36 = new lib.Path_7();
	this.instance_36.setTransform(286.9,400.1,3.635,0.955,0,-4,-6.9,187.8,16.9);
	this.instance_36.alpha = 0.301;

	this.instance_37 = new lib.Path_8();
	this.instance_37.setTransform(393.5,430.4,3.635,0.955,0,-4,-6.9,216,14.7);
	this.instance_37.alpha = 0.199;

	this.instance_38 = new lib.Path_9();
	this.instance_38.setTransform(357.2,469.4,3.635,0.955,0,-4,-6.9,238.3,11.8);
	this.instance_38.alpha = 0.102;

	this.instance_39 = new lib.Group_2();
	this.instance_39.setTransform(304.7,402.7,3.635,0.955,0,-4,-6.9,278.3,94.4);

	this.instance_40 = new lib.Path_10();
	this.instance_40.setTransform(306.7,360.6,3.635,0.955,0,-4,-6.9,185.7,19.4);
	this.instance_40.alpha = 0.398;

	this.instance_41 = new lib.Path_11();
	this.instance_41.setTransform(314,398.1,3.635,0.955,0,-4,-6.9,217.8,22.6);
	this.instance_41.alpha = 0.301;

	this.instance_42 = new lib.Path_12();
	this.instance_42.setTransform(332.2,438.4,3.635,0.955,0,-4,-6.9,243,17.6);
	this.instance_42.alpha = 0.199;

	this.instance_43 = new lib.Path_13();
	this.instance_43.setTransform(337.4,471.3,3.635,0.955,0,-4,-6.9,278.3,16.2);
	this.instance_43.alpha = 0.102;

	this.instance_44 = new lib.Path_14();
	this.instance_44.setTransform(303.7,324.7,3.635,0.955,0,-4,-6.9,153.7,15.6);
	this.instance_44.alpha = 0.5;

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#613826").ss(0.8,1,1).p("EAgUgAWIBHBVQBQBgAqArQAiAkAjAvQAeApAVAUQArAoA8BJIhGAHIB1AhIDtElIgoAEID6DHMhdDAAFIBQiGQBkhuAXgYQAPgOA2hTIAzhPIB4gvIhCgKICjjzIAbgOIgbgNIFDm9IAYgDIDSkmIDmkHIA4gXIg1gHIBhidIGUgBQHEgEDtgPQDqgOCpgBQBegBC/AAQDjgENzAeICCC+IhQAEIBdAUIBXBnIAbADIB+C0IgaAsIBCANIBhCWIAvAAICIDSQgeAEgcAFQg3AIARAAQAaAABeARg");
	this.shape_66.setTransform(346.9,398.3,3.635,0.955,0,-4,-6.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["#D19A5B","#C88C58","#784834","#5F3725"],[0,0.404,0.769,1],8.6,-164.4,0,8.6,-164.4,345.1).s().p("EgtRANiQBkhuAXgYQAPgOA2hTIAzhPIB4gvIhCgKICjjzIAbgOIgbgNIFDm9IAYgDIDSkmIDmkHIA4gXIg1gHIBhidIGUgBQHEgEDtgPQDqgOCpgBIEdgBQDjgENzAeICCC+IhQAEIBdAUIBXBnIAbADIB+C0IgaAsIBCANIBhCWIAvAAICIDSIg6AJQg3AIARAAQAaAABeARIBHBVQBQBgAqArQAiAkAjAvQAeApAVAUQArAoA8BJIhGAHIB1AhIDtElIgoAEID6DHMhdDAAFg");
	this.shape_67.setTransform(346.9,398.3,3.635,0.955,0,-4,-6.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.bf(img.suit, null, new cjs.Matrix2D(0.553,-0.076,0.076,0.553,-150.4,-120.8)).s().p("A2isBIGYg4IAAeRIiSAUgAKHCYQDEgXDYgeQCTgVCLgVIBiLJIscBugAKHwhIIWhKIBvMkQiMARiVAVQi6AaiqAcg");
	this.shape_68.setTransform(489.5,376);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.bf(img.suit, null, new cjs.Matrix2D(0.391,-0.042,0.042,0.392,-103.4,-88.4)).s().p("Avoo9IEigfIgqVWIhoALgAHEB4QCMgLCYgSQBpgLBigMIA2H6Io0A7gAHercIF7goIA8I5IjMAUQiDAPh5AQg");
	this.shape_69.setTransform(456.5,417.1);

	this.instance_45 = new lib.foxAnimated();
	this.instance_45.setTransform(152.6,424.4,1.701,1.702,0,0,0,60.6,166.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:346.9,y:398.3}},{t:this.shape_66,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:346.9,y:398.3}},{t:this.instance_44,p:{regX:153.7,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:303.7,y:324.7,regY:15.6}},{t:this.instance_43,p:{regX:278.3,regY:16.2,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:337.4,y:471.3}},{t:this.instance_42,p:{regX:243,regY:17.6,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:332.2,y:438.4}},{t:this.instance_41,p:{regY:22.6,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:314,y:398.1}},{t:this.instance_40,p:{regX:185.7,regY:19.4,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:306.7,y:360.6}},{t:this.instance_39,p:{regX:278.3,regY:94.4,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:304.7,y:402.7}},{t:this.instance_38,p:{regX:238.3,regY:11.8,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:357.2,y:469.4}},{t:this.instance_37,p:{regX:216,regY:14.7,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:393.5,y:430.4}},{t:this.instance_36,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:286.9,y:400.1}},{t:this.instance_35,p:{regX:145.5,regY:13.3,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:388.2,y:347.4}},{t:this.instance_34,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:730.6,y:303.2}},{t:this.instance_33,p:{regX:40.4,regY:8.4,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:820,y:291.5}},{t:this.instance_32,p:{regX:19.8,regY:3.6,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:890.5,y:282.2}},{t:this.instance_31,p:{regX:80.3,regY:10.1,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:-115.9,y:485.3}},{t:this.instance_30,p:{regX:48.1,regY:6.1,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:-95.5,y:482.2}},{t:this.instance_29,p:{regX:27.7,regY:3.4,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:-97.8,y:485.6}},{t:this.instance_28,p:{regY:11.3,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:306.6,y:323.9}},{t:this.shape_65,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:113.7,y:402.9}},{t:this.shape_64,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:386.3,y:329.1}},{t:this.shape_63,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:562.3,y:391.2}},{t:this.shape_62,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:-267.9,y:483.4}},{t:this.shape_61,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:48.3,y:489.9}}]}).to({state:[{t:this.shape_68},{t:this.shape_67,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:346.9,y:398.3}},{t:this.shape_66,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:346.9,y:398.3}},{t:this.instance_44,p:{regX:153.7,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:303.7,y:324.7,regY:15.6}},{t:this.instance_43,p:{regX:278.3,regY:16.2,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:337.4,y:471.3}},{t:this.instance_42,p:{regX:243,regY:17.6,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:332.2,y:438.4}},{t:this.instance_41,p:{regY:22.6,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:314,y:398.1}},{t:this.instance_40,p:{regX:185.7,regY:19.4,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:306.7,y:360.6}},{t:this.instance_39,p:{regX:278.3,regY:94.4,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:304.7,y:402.7}},{t:this.instance_38,p:{regX:238.3,regY:11.8,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:357.2,y:469.4}},{t:this.instance_37,p:{regX:216,regY:14.7,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:393.5,y:430.4}},{t:this.instance_36,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:286.9,y:400.1}},{t:this.instance_35,p:{regX:145.5,regY:13.3,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:388.2,y:347.4}},{t:this.instance_34,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:730.6,y:303.2}},{t:this.instance_33,p:{regX:40.4,regY:8.4,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:820,y:291.5}},{t:this.instance_32,p:{regX:19.8,regY:3.6,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:890.5,y:282.2}},{t:this.instance_31,p:{regX:80.3,regY:10.1,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:-115.9,y:485.3}},{t:this.instance_30,p:{regX:48.1,regY:6.1,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:-95.5,y:482.2}},{t:this.instance_29,p:{regX:27.7,regY:3.4,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:-97.8,y:485.6}},{t:this.instance_28,p:{regY:11.3,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:306.6,y:323.9}},{t:this.shape_65,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:113.7,y:402.9}},{t:this.shape_64,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:386.3,y:329.1}},{t:this.shape_63,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:562.3,y:391.2}},{t:this.shape_62,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:-267.9,y:483.4}},{t:this.shape_61,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:48.3,y:489.9}}]},14).to({state:[{t:this.shape_68},{t:this.shape_67,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:346.9,y:398.3}},{t:this.shape_66,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:346.9,y:398.3}},{t:this.instance_44,p:{regX:153.7,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:303.7,y:324.7,regY:15.6}},{t:this.instance_43,p:{regX:278.3,regY:16.2,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:337.4,y:471.3}},{t:this.instance_42,p:{regX:243,regY:17.6,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:332.2,y:438.4}},{t:this.instance_41,p:{regY:22.6,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:314,y:398.1}},{t:this.instance_40,p:{regX:185.7,regY:19.4,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:306.7,y:360.6}},{t:this.instance_39,p:{regX:278.3,regY:94.4,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:304.7,y:402.7}},{t:this.instance_38,p:{regX:238.3,regY:11.8,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:357.2,y:469.4}},{t:this.instance_37,p:{regX:216,regY:14.7,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:393.5,y:430.4}},{t:this.instance_36,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:286.9,y:400.1}},{t:this.instance_35,p:{regX:145.5,regY:13.3,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:388.2,y:347.4}},{t:this.instance_34,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:730.6,y:303.2}},{t:this.instance_33,p:{regX:40.4,regY:8.4,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:820,y:291.5}},{t:this.instance_32,p:{regX:19.8,regY:3.6,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:890.5,y:282.2}},{t:this.instance_31,p:{regX:80.3,regY:10.1,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:-115.9,y:485.3}},{t:this.instance_30,p:{regX:48.1,regY:6.1,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:-95.5,y:482.2}},{t:this.instance_29,p:{regX:27.7,regY:3.4,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:-97.8,y:485.6}},{t:this.instance_28,p:{regY:11.3,scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:306.6,y:323.9}},{t:this.shape_65,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:113.7,y:402.9}},{t:this.shape_64,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:386.3,y:329.1}},{t:this.shape_63,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:562.3,y:391.2}},{t:this.shape_62,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:-267.9,y:483.4}},{t:this.shape_61,p:{scaleX:3.635,scaleY:0.955,skewX:-4,skewY:-6.9,x:48.3,y:489.9}}]},4).to({state:[{t:this.shape_69},{t:this.shape_67,p:{scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:355.4,y:429.5}},{t:this.shape_66,p:{scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:355.4,y:429.5}},{t:this.instance_44,p:{regX:153.6,scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:326.6,y:377,regY:15.6}},{t:this.instance_43,p:{regX:278.4,regY:16.5,scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:347.6,y:481.2}},{t:this.instance_42,p:{regX:242.8,regY:16.6,scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:344.4,y:457.2}},{t:this.instance_41,p:{regY:23.3,scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:332.2,y:429.2}},{t:this.instance_40,p:{regX:185.5,regY:19.6,scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:327.6,y:402.3}},{t:this.instance_39,p:{regX:278.4,regY:94,scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:325.8,y:431.9}},{t:this.instance_38,p:{regX:238.6,regY:11.5,scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:362,y:480.2}},{t:this.instance_37,p:{regX:216.1,regY:14.3,scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:387.8,y:453}},{t:this.instance_36,p:{scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:313.1,y:429.5}},{t:this.instance_35,p:{regX:145.9,regY:12.5,scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:386.4,y:394.2}},{t:this.instance_34,p:{scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:628.1,y:371.1}},{t:this.instance_33,p:{regX:40.3,regY:7.7,scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:691.4,y:364.5}},{t:this.instance_32,p:{regX:19.9,regY:4,scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:741.3,y:359.5}},{t:this.instance_31,p:{regX:80.5,regY:9.8,scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:27.6,y:481.2}},{t:this.instance_30,p:{regX:47.8,regY:5.9,scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:41.8,y:479.5}},{t:this.instance_29,p:{regX:27.6,regY:2.8,scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:40.1,y:481.7}},{t:this.instance_28,p:{regY:11.1,scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:328.8,y:376.3}},{t:this.shape_65,p:{scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:190.9,y:427.7}},{t:this.shape_64,p:{scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:384.7,y:381.5}},{t:this.shape_63,p:{scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:507.4,y:429}},{t:this.shape_62,p:{scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:-79.8,y:476.3}},{t:this.shape_61,p:{scaleX:2.563,scaleY:0.673,skewX:-2.3,skewY:-5.2,x:142.9,y:487.6}}]},2).to({state:[{t:this.shape_67,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:388,y:431.4}},{t:this.shape_66,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:388,y:431.4}},{t:this.instance_44,p:{regX:153.7,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:364.2,y:393.7,regY:15.3}},{t:this.instance_43,p:{regX:278.2,regY:16.1,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:378.7,y:465.6}},{t:this.instance_42,p:{regX:243,regY:17.5,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:377,y:449.6}},{t:this.instance_41,p:{regY:22.5,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:367.4,y:429.3}},{t:this.instance_40,p:{regX:185.7,regY:19.4,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:364.5,y:411.1}},{t:this.instance_39,p:{regX:278.3,regY:94.2,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:361.4,y:431}},{t:this.instance_38,p:{regX:238.4,regY:11.5,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:391.6,y:465.7}},{t:this.instance_37,p:{regX:216,regY:14.7,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:415.9,y:449.4}},{t:this.instance_36,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:350.3,y:428.8}},{t:this.instance_35,p:{regX:145.6,regY:13.1,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:416.4,y:409.4}},{t:this.instance_34,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:633,y:408.2}},{t:this.instance_33,p:{regX:40.4,regY:8.4,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:689.6,y:407.8}},{t:this.instance_32,p:{regX:19.8,regY:3.7,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:734.3,y:407.5}},{t:this.instance_31,p:{regX:80.3,regY:10,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:93.7,y:446}},{t:this.instance_30,p:{regX:48.1,regY:6,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:106.8,y:445.7}},{t:this.instance_29,p:{regX:27.7,regY:3.3,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:105.2,y:447.2}},{t:this.instance_28,p:{regY:11.2,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:366.1,y:393.6}},{t:this.shape_65,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:241.5,y:420.1}},{t:this.shape_64,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:415.8,y:400.7}},{t:this.shape_63,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:523.5,y:440.4}},{t:this.shape_62,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:-1.5,y:436.4}},{t:this.shape_61,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:196.6,y:457.7}}]},1).to({state:[{t:this.shape_67,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:388,y:431.4}},{t:this.shape_66,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:388,y:431.4}},{t:this.instance_44,p:{regX:153.7,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:364.2,y:393.7,regY:15.3}},{t:this.instance_43,p:{regX:278.2,regY:16.1,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:378.7,y:465.6}},{t:this.instance_42,p:{regX:243,regY:17.5,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:377,y:449.6}},{t:this.instance_41,p:{regY:22.5,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:367.4,y:429.3}},{t:this.instance_40,p:{regX:185.7,regY:19.4,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:364.5,y:411.1}},{t:this.instance_39,p:{regX:278.3,regY:94.2,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:361.4,y:431}},{t:this.instance_38,p:{regX:238.4,regY:11.5,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:391.6,y:465.7}},{t:this.instance_37,p:{regX:216,regY:14.7,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:415.9,y:449.4}},{t:this.instance_36,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:350.3,y:428.8}},{t:this.instance_35,p:{regX:145.6,regY:13.1,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:416.4,y:409.4}},{t:this.instance_34,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:633,y:408.2}},{t:this.instance_33,p:{regX:40.4,regY:8.4,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:689.6,y:407.8}},{t:this.instance_32,p:{regX:19.8,regY:3.7,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:734.3,y:407.5}},{t:this.instance_31,p:{regX:80.3,regY:10,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:93.7,y:446}},{t:this.instance_30,p:{regX:48.1,regY:6,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:106.8,y:445.7}},{t:this.instance_29,p:{regX:27.7,regY:3.3,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:105.2,y:447.2}},{t:this.instance_28,p:{regY:11.2,scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:366.1,y:393.6}},{t:this.shape_65,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:241.5,y:420.1}},{t:this.shape_64,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:415.8,y:400.7}},{t:this.shape_63,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:523.5,y:440.4}},{t:this.shape_62,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:-1.5,y:436.4}},{t:this.shape_61,p:{scaleX:2.284,scaleY:0.458,skewX:0,skewY:0,x:196.6,y:457.7}}]},39).to({state:[{t:this.instance_45}]},202).wait(1));

	// BG
	this.instance_46 = new lib.pp_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(263));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-347.1,275,2151.3,625.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;