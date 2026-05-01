(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"imagesrtr/Mesh.png", id:"Mesh"},
		{src:"imagesrtr/fireworks.png", id:"fireworks"}
	]
};



// symbols:



(lib.Mesh = function() {
	this.initialize(img.Mesh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,516,318);


(lib.fireworks = function() {
	this.initialize(img.fireworks);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,211);


(lib.Stars = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsQHtIgBgCIgFAFIAEgHIgDgBQgFgDgKgBQALAAAEgDIADgCIgHgHIAIAHIABgCQAEgIAAgMQAAAMAFAIIABACIAIgHIgHAHIACACIABgBIAAABQAEADAMAAQgLABgFADIgBAAIgCABIAEAHIgFgFIgBACQgFAGAAAOQAAgOgEgGgAJcHXIAAgBIgGADIAEgDIgBgCIgOgCIAOgCIABgBIgEgEIAGAEIAAgBIACgOIACAOIACACIANACIgNACIgCADIgCANgANAHJIgCAAIACgBIgDgBIgHAHIAHgIIgDgCQgHgEgLAAQALAAAHgEIADgBIgHgIIAHAHIADgBIgCgCIACAAQACgDAAgQQABAOADAFIAAACIACABIAGgEIgFAFIADABQAGAEAPAAQgPABgGADIgDACIAFAEIgGgDIgCABIAAABQgDAHgBANQAAgQgCgEgAwAGzIgCgCIgOgEIAOgBIACgCIACgOIACAOIAAAAIAGgDIgEADIABACIANABIgNAEIgBABIAEADIgGgDIAAABIgCANgALGGTIgBABIAAgBIgBgDIgIAIIAGgIIgCgCQgIgEgOgBQAOAAAIgDIACgBIgGgKIAIAIIABgDIAAgCIABACQACgCACgZQAAAVAEAGIABADIAJgIIgHAKIADABQAHADAQAAQgQABgHAEIgDACIAHAIIgJgIIgBADQgEAFAAAVQgCgXgCgDgAKfGgIgCgCIgNgCIANgDIABAAIgEgFIAEAEIABgBIACgOIACAOIAAABIAGgEIgEAFIABAAIAOADIgOACIgBABIAEADIgGgDIAAABIgCANgABPF8IgBgBIgEADIACgDIgBgBIgNgCIANgDIABgBIgCgEIAEAEIABgBIABgOQAAALADADIAAABIAEgEIgDAEIACABIANADIgNACIgCABIADADIgEgDIAAABQgDADAAAKgAlRFqIgBAAIgEACIADgEIgCgBIgNgCIANgCIACAAIgDgGIAEAFIABgCIACgOQAAAMACACIAAACIAGgFIgEAGIABAAIAOACIgOACIgBABIAEAEIgGgCQgCADAAALgAMnFYIgCgBIgEAEIACgGIgNgDIANgBIAAgBIgCgEIAEAEIACgBIABgPIADAPIAAABIAFgEIgEAEIABABIANABIgNADIgBAAIAEAGIgFgEIAAABIgDANgAH+E0IgBgBIgEACIACgDIgBgCIgNgBQAKAAADgDIABAAIgCgEIAEADIABgCIABgNQAAAKADADIAAACIAGgDIgEAEIABAAQADADAKAAIgNABIgBACIAEADIgGgCIAAABQgDADAAAKgAIXEBIgCgCIgHAHIAHgJIgDgBQgHgEgMAAQAMAAAHgEIADgBIgHgIIAHAGIACgBIgBgCIABAAQADgDAAgPQABAOADAEIAAACIABABIAHgDIgFAFIACABQAHADAOABQgOABgHADIgCABIAFAFIgHgDIgBACQgDAHgBANQAAgQgDgEgAryDrIgCgBIgEAEIADgEIgBgCIgNgDIANgBIABgBIgDgEIAEAEIACgBIABgOIADAOIAAABIAFgEIgEAEIABABIAOABIgOADIgBACIAEAEIgFgEIAAABIgDANgAh6DYIgCgDIgOgBIAOgDIABAAIgEgFIAEAEIABgBIADgOIABAOIABABIAEgEIgEAFIACAAIANADIgNABIgDADIgBANgAORDHIAAgBIgEADIADgFIgCAAIgNgDIANgBIACgBIgDgEIAEADIAAgCQADgCAAgMIABAOIABAAIAAACIAEgDIgCAEIABABIAOABIgOADIgBAAIACAFIgEgDIAAABIgBAAIgBANQAAgLgDgCgA0QC0IgDgDIgNgDIANgBIADgCIABgOIADAOIADACIANABIgNADIgDADIgDANgAiIClIgCgBIgIAFIAHgGIgDgCQgHgDgMgBQAMAAAHgDIADgCIgHgIIAIAGIACgCQACgEAAgTQADAUABADIACACIAHgGIgGAIIADACQAHADANAAQgNABgHADIgDACIAGAGIgHgFIgCABQgBADgDAWQAAgUgCgFgAT9CQIgBgCIgEAFIAEgGIgBAAIgOgCIAOgBIACgDIADgPIABAPIADADIANABIgNACIgBAAIAEAGIgEgFIgCACIgBANgAIKB/IgBgCIgDgBQgCgDgPAAIARgCIADgCIgFgGIAFAFIABgCQADgDAAgLQAAAIADAGIABACIAFgFIgEAGIACACIARACQgOAAgDADIgCABIAEAFIgFgFIgBACQgDAGAAAIQAAgLgDgDgAKQBwIAAgBIgCgBIgGAGIAFgIIgBgCQgIgDgLgBQALAAAIgDIABgCIgFgIIAGAHIACgDQAEgFAAgMQAAAMAEAFIABADIAIgHIgHAIIADACQAGADANAAQgNABgGADIgDACIAHAIIgIgGIgBABIAAABQgEAGAAANQAAgNgEgGgAK5BdIgDgCIgGAGIAGgIIgCgCQgHgDgMAAQAOAAAFgDIAFgFQADgFAAgUQACAVACAEIABACIAIgGIgHAGIADADQAEADAOAAQgMAAgGADIgDACIAHAIIgIgGIgBACQgCADgCAVQAAgTgDgFgAS5BJIgBgDIgFAGIAEgGIgCgBQgEgCgNgBIARgCIACgBIgEgHIAFAFIABgBQADgEAAgLQAAAIADAHIABABIAFgFIgEAHIACABIARACQgNABgEACIgCABIAEAGIgFgGIgBADQgDAFAAAIQAAgKgDgDgA3MA5IgBgCIgKAIIAIgJIgDgDQgHgDgOAAQAOgBAHgEIADgBIgIgJIAKAIIABgCQAEgIAAgOQAAAOAEAIIABACIAJgIIgHAJIACABQAIAEAQABQgQAAgIADIgCADIAHAJIgJgIIgBACQgEAIAAAPQAAgPgEgIgAkCAoIgCgDIgIAGIAGgHIgCgDIgbgEQAVAAAGgEIACgBIgGgIIAIAGIACgCIAEgZQAAAUAEAFIABACIAIgGIgGAIIACABQAGAEAVAAIgbAEIgCADIAGAHIgIgGIgBADQgEAFAAAVIgEgagA0NAQIgDgDIgNgBIANgDIABAAIgEgGIAEAEIACgBIABgLIADALIABABIAEgEIgEAGIABAAIAOADIgOABIgCADIgDANgAnLAAIgCAAIgFADIAFgEIgCgCIgSgCQAPAAADgCIACgCIACgDQACgCAAgPIADARIABADIAFgFIgDAFIABACQAEACANAAIgRACIgBACIADAEIgFgDIgBAAIgDASQAAgOgCgEgA0ogSIgBgCIgFAFIADgFIgBgBIgNgBIANgCIABgCIgDgFIAFAFIABgCIABgNQAAALADACIAAACIAFgFIgEAFIACACIANACIgNABIgCABIAEAFIgFgFIAAACQgDADAAAKgAiUgkIAAgBIgCAAIgEADIAEgFIgBgBIgOgBIAOgCIABAAIgEgGIAEAEIACgCIABgMIADAMIABACIAEgEIgEAGIABAAIAOACIgOABIgBABIAEAFIgEgDIgBAAIAAABIgDAOgAO1gvIgBgCIgEACIADgDIgDgDQgFgCgVgBQAXgCADgBIADgDIgDgEIAEACIABgBQAEgIAAgOQABAOADAIIABABIAHgDIgFAFIACADQADABAXACQgUABgGACIgCADIAFAEIgHgDIgBACQgDAHgBAQQAAgQgEgHgA2Vg1IgCgBIgFAEIAFgGIgCgBQgGgCgHAAQAKgBADgCIACgCIACgCQACgDAAgPIADASIABACIAHgEIgFAEIABACQAEACAPABIgTACIgBABIAFAGIgHgEIgBABIgDARQAAgNgCgEgAl6hJIAAgCIgFAFIAEgFIgCgBIgNgBIANgCIACgCIgEgEIAFAEIAAgCIADgMIABAMIADAEIANACIgNABIgDADIgBAOgA17hWIgDgDIgEAFIADgHIgBgBQgIgDgOAAQAOgBAIgEIABgBIgCgEIADADIADgDQACgCACgXQAAAUADAFIADADIAIgHIgHAIIADABQAGAEAPABQgPAAgGADIgDABIAHAIIgIgGIgDADQgDAFAAAUQgCgXgCgCgAM8hUIgCgCIgGAHIAFgIIgBgCQgIgDgMgBQAPAAAFgCIABgDIgFgHIAGAFIACgBQAEgHAAgMQAAAMAEAHIABABIAIgFIgHAHIADADQAEACAQAAQgNABgHADIgDACIAHAIIgIgHIgBACQgEAHAAAOQgBgOgDgHgAOchqIAAgCIgGAFIAEgFIgBgBIgNgBIANgDIABgBIgEgFIAGAFIAAgCIACgNIACANIADADIANADIgNABIgDADIgCANgALVhtIgCgDIgOgCIAOgCIACgDIADgMIABAMIADADIANACIgNACIgDADIgBAOgAjYiAIAAgBIgGAEIAEgEIgBgBIgNgBIANgEIABgBIgEgDIAGADIAAgBQACgDAAgKIACANIABABIAEgDIgDADIABABIAOAEIgOABIgBABIADAEIgEgEIgBABIgCAOQAAgLgCgDgAEZiRIgCgBIgEACIAEgDIgBAAQgDgDgKAAIANgBIABgCIgEgEIAEADIACgCIABgNIADANIABACIAEgDIgEAEIABACIANABQgKAAgDADIgBAAIAEADIgEgCIgBABIgDAOgATwikIgDgCIgNgDIANgCIADgCIACgNIACANIADACIANACIgNADIgDACIgCAOgAs2i3IgDgCIgNgBIANgDIABAAIgEgFIAEAEIACgCIADgNIABANIABACIAEgEIgEAFIACAAIANADIgNABIgDACIgBAOgANPjIIgCgBIgEACIAEgDIgBAAIgOgDIAOgCIABgBIgEgEIAEADIACgCIABgMIADAMIABACIAEgDIgEAEIABABIANACIgNADIgBAAIAEADIgEgCIgBABIgDAOgAx6jWIgDgDIgHAGIAHgIIgDgBIgYgDQATgBAFgDIADgBIgHgIIAHAHIADgCQACgGAAgNQAAALAEAIIABACIAIgHIgGAIIACABQAGADATABQgVACgEABIgCABIAGAIIgIgGIgBADQgDAHgBAOQAAgQgCgFgAMKjsIAAgBIgEADIADgEIgBgCIgOgBIAOgDIABAAIgDgFIAEAEIAAgCQADgCAAgKIABAMIACACIAEgEIgDAFIABAAIAOADIgOABIgBACIADAEIgEgDIgCABIgBAOQAAgLgDgDgAmWj6IgBgDIgIAGIAGgIIgCgBQgHgDgKAAQAMgBAFgDIgCgBIACAAIACgBIgGgHIAIAGIABgBQABgEADgVQAAATADAGIABABIAIgGIgGAHIACABIABAAIgBABQAFADANABQgLAAgHADIgCABIAGAIIgIgGIgBADQgDAEAAATQgDgVgBgCgAXGkLIgCgEIgIAHIAHgIIgDgBIgBAAIABgBQgFgDgQAAQAOgBAHgEIADgCIgCgDIADACIACgBQADgIABgOQAAAOAEAIIABABQAEgCACgCIgFAFIADACQAHAEAOABQgQAAgFADIABABIgBAAIgDABIAHAIIgIgHIgBAEQgEAFAAAQQgBgQgDgFgAULkjIgCgBIgEADIAEgEIgBAAIAAgBIgNgCQAKAAADgDIABAAIgEgDIAEACIACgBIACgOIACAOIABABIAEgCIgEADIABAAQADADALAAIgOACIACABIgDAAIAEAEIgEgDIgBABIgCAOgAL9k1IAAgBIgGADIAFgDIgCgBIgNgEIANgBIACgBIgFgEIAGAEIAAgBQADgDAAgLIABAOIABABIAEgEIgCAEIABABIANABIgNAEIgBABIACADIgEgDIgBABIgBANQAAgLgDgCgAWRlIIgCgCIgNgCIANgDIABAAIgEgFIAEAEIABgBIADgOIABAOIACABIAEgEIgEAFIABAAIAOADIgOACIgDACIgBANgAGtlZIgCgBIgEACIAEgEIgBAAQgDgDgKAAIANgBIABgBIgEgEIAEACIACAAIABgPIADAPIABAAIAEgCIgEAEIACABIANABQgLAAgCADIgCAAIAEAEIgEgCIgBABIgDANgAvZloIgBgDIgJAIIAHgJIgDgBIgXgFQASAAAFgCIADgBIgHgIIAJAHIABgDIAEgYQAAATADAFIABADIAIgHIgHAIIADABQAFACATAAIgYAFIgDABIAHAJIgIgIIgBADQgDAFAAATIgEgYgAVpl+IgCgDIgOgCIAOgCIABAAIgEgFIAEADIABgBIACgOIADAOIAAABIAFgDIgEAFIABAAIAOACIgOACIgBABIAEAEIgFgEIAAACIgDAOgAGSmQIgBgBIgEAEIAEgFIgCAAIgNgEIANgBIACgBIgEgEIAEADIABgBIABgOIADAOIAAABIAFgDIgEAEIACABIANABIgNAEIgCAAIAEAFIgFgEIAAABIgDANgAJ1mfIgCgDIgEAGIADgGIgDgCQgCgCgUgCQATAAADgCIADgCIgCgEIADADIACgDQAEgHAAgMQAAAMAEAHIABADIAEgDIgCAEIABACQAFACATAAQgVACgDACIgBACIADAGIgFgGIgBADQgEAIAAANQAAgNgEgIgAzLm0IAAgBIgFACIAEgDIgBgBIgOgCIAOgDIABAAIgEgGIAFAFIAAgBIADgOIABAOIACABIAEgFIgEAGIABAAIANADIgNACIgBABIAEADIgEgCIgCABIgBANgAHVnGIAAgCIgGAEIAEgFIgBAAIgNgDIANgCIABgBIgEgDIAGADIAAgBIADgNIABANIADACIANACIgNADIgCAAIAEAFIgEgEIgBACIgBANgAH7nUIgBgDIgJAHIAIgIIgDgBQgFgEgVAAIAagEIADgCIgIgJIAJAHIABgDQAEgHAAgNQAAANAFAHIABADIAJgHIgIAJIADACIAaAEQgVAAgFAEIgDABIAIAIIgJgHIgBADQgEAHgBAQQAAgQgEgHgAh6nrIgBgBIgEACIAEgDIgBgCIgOgBQALAAADgCIABAAIgEgEIAEACIABgBIACgLIABAAIABALIABABIAEgCIgEAEIACAAQACACALAAIgNABIgCACIAEADIgEgCIgBABIgBAOgAUzn9IAAgBIgGADIAEgFIAIAAIADAFIgEgDIgBABIgCANg");
	this.shape.setTransform(151.3,51.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,302.6,102.7);


(lib.sparks = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDATQgGgFg0AAIgzAAQBggKABgEQACgFg2hAQAxAyAKgCQAIgBAchcIgPAzQgMA0AKAFQAOAGBXgkIgwAXQgxAWgEAGQgDAHAHA6IAEAjQgOhZgIgHg");
	this.shape.setTransform(17,15.1,0.645,0.645);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAdIgNAFQADgHgHgIIgGgHQAOgIgQgEIgTgGQAQADAGgIQADgEAAgEQALAHABgLIAAgMQANAOAFgLQABgGAAgHQACAMALgBQAFAAAFgDQgGAUAJAAQAEABAGgEQgEAMAMgCQAFgBAGgDQgWANAGARQADAJAHAIQgWgKgBAJQgBAEADAHQgJgKgIAGQgEADgCAEQgGgSgLABg");
	this.shape_1.setTransform(16.5,15.8,0.645,0.645);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEF336").s().p("AgeAzIgRAAQATgbgNgGIgRAAQANgRgTgBIgVAAQAogGACggIgHgeQAcAZAHgNQAEgGgCgLQAKATAMgFQAIgCAFgGQgCAfAWAFQALADALgEQgIAKAFAOQADAIAEADQgaAFAVATQAJAIAOAIQgTgKgNAIQgHAEgDAHQgMgQgIAPQgEAIgCAKQgMgbgLANQgHAHgFAMQADgTgQgEg");
	this.shape_2.setTransform(16.8,16.1,0.645,0.645);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDBE2C").s().p("AAQBNQgQgagTBXQARhYgbAQQgZAOhgB7QBeh9AIgcQAJgehOArQBNgtgdgLQgbgJiYACQCYgFAbgLQAfgMhXgjQAOABAfAOQAgAOAHABQAaAChkh4QBPBPAPAEQATAEgRhIQATBMARgaQAQgYAjiOQggCOAEAeQAFAfA5g/Qg7BEARADQAVADCohJQiVBGgPASQgPASBSAFQhUgCAVAVQATAVCEBGQiFhDgdgCQgfgDA0BJQg2hHgFAfQgEAdAgCZQgjiZgRgXg");
	this.shape_3.setTransform(16.1,16.4,0.645,0.645);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32.2,32.8);


(lib.SparkAni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFC","#FFFEF2","#FFFCE2","#FFF9CB","#FFF6AE","#FEF28B","#FEED64","#FEE840","#FEE433","#FEE032","#FED330","#FDBE2C","#FDA02A"],[0.016,0.051,0.078,0.106,0.129,0.153,0.176,0.196,0.22,0.231,0.341,0.459,0.58,0.973],0,-0.1,0,0,-0.1,9.8).s().p("AgZBeQgOgGAUgpIAFgTQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQgFgBgIAIQgHAGgNASQgKANgFgJQgHgMAkgUIAMgMIgZAQQgJAEgCgJQgBgFAUgKIATgHIgSAEIgqARQgOAGgBgNQAAgTBAABIALgBIgEgFIgVgKQgGgFAHgFQAFgEAHADQAHADAHAIQAIAKAFgIQACgEgSgaIgWgbQgOgTAOgEQAMgEAKAWIAOAkIAJAVQAFgKACgJQADgVACgGQAFgTAIABQAMACgKAWIgPAfQgEANAHgJQAJgaAMAAQAJAAgFAIQgMANgHAKQgDAJAHgKQAIgKALgJQAOgKAEAFQAGAHgKAFQgOAGgFADQgHAFgDAHIgCAGIAGAAQA3geAIASQAFALgQACQgVACgIABQgLABgIAEIgGAEIABABQAfgHADAKQACAHgIgDQgTgFgHAAIAIAFQA4AUgHASQgFALgRgQIgbgZQgLgFgEACIgCACIACAHQADAJAFAIQAEAGAOAPQAKAOgGAFQgJAHgHgPQgQghgGgJIgGgEIgBAFQAAAHACAHQACAGAHANQAEAKgKAAQgGgBgDgLIgDgXQgBgJgEgCIgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAQgEAEgDALQgCAJAAAWQgBANgHAAIgDgBg");
	this.shape.setTransform(18.1,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FFF7E2","#FEEBB6","#FEE08D","#FED76C","#FECF52","#FEC940","#FEC435","#FDC030","#FDBE2D","#FDBE2C","#FDA253"],[0.016,0.035,0.071,0.11,0.153,0.196,0.243,0.298,0.357,0.435,0.58,0.973],7.6,6.7,0,7.6,6.7,14.8).s().p("AgUgFQgWgKAHgHQAJgJAfAcQARANAPAQQgVgRgkgOg");
	this.shape_1.setTransform(9.8,8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#FFF7E2","#FEEBB6","#FEE08D","#FED76C","#FECF52","#FEC940","#FEC435","#FDC030","#FDBE2D","#FDBE2C","#FDA253"],[0.016,0.035,0.071,0.11,0.153,0.196,0.243,0.298,0.357,0.435,0.58,0.973],13.7,0.8,0,13.7,0.8,14.8).s().p("AgkAEQAAgMAkgCQASgBATACQgXADgeANQgJAEgEAAQgHAAAAgHg");
	this.shape_2.setTransform(3.7,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#FFF7E2","#FEEBB6","#FEE08D","#FED76C","#FECF52","#FEC940","#FEC435","#FDC030","#FDBE2D","#FDBE2C","#FDA253"],[0.016,0.035,0.071,0.11,0.153,0.196,0.243,0.298,0.357,0.435,0.58,0.973],0,11.7,0,0,11.7,14.8).s().p("AgGgSQgFgVALACQANACgGAkQgCATgFASQABgXgHghg");
	this.shape_3.setTransform(17.5,3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#FFF7E2","#FEEBB6","#FEE08D","#FED76C","#FECF52","#FEC940","#FEC435","#FDC030","#FDBE2D","#FDBE2C","#FDA253"],[0.016,0.035,0.071,0.11,0.153,0.196,0.243,0.298,0.357,0.435,0.58,0.973],5.9,-9.7,0,5.9,-9.7,14.8).s().p("AgYAgQgLgMAfgbQAOgPARgMQgRATgPAjQgGAPgHAAQgDAAgDgDg");
	this.shape_4.setTransform(11.8,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{rotation:0,x:11.8,y:24.9}},{t:this.shape_3,p:{rotation:0,x:17.5,y:3.8}},{t:this.shape_2,p:{rotation:0,x:3.7,y:14.7}},{t:this.shape_1,p:{rotation:0,x:9.8,y:8.8}},{t:this.shape,p:{rotation:0,x:18.1,y:15}}]}).to({state:[{t:this.shape_4,p:{rotation:180,x:23.7,y:3.5}},{t:this.shape_3,p:{rotation:180,x:18,y:24.6}},{t:this.shape_2,p:{rotation:180,x:31.8,y:13.7}},{t:this.shape_1,p:{rotation:180,x:25.7,y:19.6}},{t:this.shape,p:{rotation:180,x:17.4,y:13.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.9,28.4);


(lib.RocketStill3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EBFD8C","#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.545,0.627,0.729,0.835,0.945,0.996],19,64.6,-27.3,-35).s().p("ABuBhIgchPQgXhAg/hGIgXgYQgMgMgigdQgegagPgSQgKgLgHgOIgLgTQgFgNAGgIQAIgNAQAFQAGACAVAMIAZAQQA6AsA3BdIARAeQAaAxAOAwIAVBNQAbBzAABxQgOh5gZhTg");
	this.shape.setTransform(6.9,102,0.404,0.404,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.188,0.408,0.647,0.89,1],16.7,-16.3,-19.1,15).s().p("ABoGFQgLgMgGgTIgThQQgThSgOgpQgLgggNgdQgbg/grgoQgwgugzgNIgQlLQBTAgBAA2QAbAZAWAZQAaAeAUAfQAYAmASAtQAMAcAHAWQAIAbAGAaQAaBvAGCGQAAAhgBAgQgDAlgHAXIAAAAQgGAfgXANQgDACgEAAIgCAAQgLAAgLgLg");
	this.shape_1.setTransform(7.6,103.8,0.404,0.404,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#319016","#2F8B15","#2B7D12","#23650D","#174506","#091B01","#000000"],[0,0.145,0.318,0.498,0.69,0.886,1],-13.1,-1.8,-38.6,-6.4).s().p("ABnGVQgTgOgHgbIgZhoQgPg+gMgmQgLgegNgdQgcg/gngmQgxgtg2gMIgRlkQBhAiBGA8QAaAYAYAaQAXAaAYAlQAZAnASAuIATAzQAIAZAHAcQAaBxAFCHQACAdgCAlQgDAlgHAZQgIAjgbAQQgHAEgIAAQgLAAgMgJg");
	this.shape_2.setTransform(7.6,103.7,0.404,0.404,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYi5IAkgBIANFtIghAIg");
	this.shape_3.setTransform(14.5,94.3,0.404,0.404,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EBFD8C","#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.545,0.627,0.729,0.835,0.945,0.996],-16.9,-25.2,20.9,31.1).s().p("AhqBYIAKhRQAHgyASgxIAMghQAshkAxg0QAMgMAKgHQASgPAHgDQAQgIAJAMQAHAIgDANQgCAHgGAOQgGAPgIAMQgMAUgaAdQgeAigKAOIgRAbQg2BOgNBDIgRBSQgNBWAEB6QgQhzAKhzg");
	this.shape_4.setTransform(50,105.1,0.404,0.404,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.188,0.408,0.647,0.89,1],-20.1,-20.7,10.7,8.4).s().p("AhMGgQgYgJgLgeIAAAAQgKgXgIgjQgGgfgEghQgOiHAKhyQACgdAEgXQAEgZAIgbQAKgvATgqQAQgjAVggQATgdAYgcQA2g/BOgrIAgFKQgzAVgnA0QgkAtgUBCQgHAfgGAhQgIAugHBSQgEAugEAjQgCATgKAOQgKAOgMABIgIgCg");
	this.shape_5.setTransform(49,106.6,0.404,0.404,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#319016","#2F8B15","#2B7D12","#23650D","#174506","#091B01","#000000"],[0,0.145,0.318,0.498,0.69,0.886,1],-5.6,-90.3,105.1,-6.8).s().p("AhQGuQgcgLgNgiQgMgYgHgkQgGgegEgjQgOiKAJhyQACgXAFgeIALg1QAMgyATgpQAQgiAVgiQATgcAageQA7hFBagwIAjFkQg0ASgpA2QgjAsgTBAQgJAegEAhQgHAmgGBAIgKBqQgDAcgRARQgMANgOAAQgFAAgGgDg");
	this.shape_6.setTransform(49,106.5,0.404,0.404,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AACC2IgmlpIAkgFIAlFxg");
	this.shape_7.setTransform(43.5,96.4,0.404,0.404,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.188,0.408,0.647,0.89,1],1.1,5,-2.6,-46.9).s().p("AAhG9QgDgDgBgEIhLtxIAtgDIAwNzQABAEgDADQgCACgEABIgBAAQgDAAgCgCg");
	this.shape_8.setTransform(28.8,106.6,0.404,0.404,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#319016","#2F8B15","#2B7D12","#23650D","#174506","#091B01","#000000"],[0,0.145,0.318,0.498,0.69,0.886,1],4.8,-32.6,7.6,-50.9).s().p("AAaHEQgFgFgBgHIhMt7IA+gEIAzN8QAAAHgFAGQgFAGgHAAIgCAAQgHAAgFgEg");
	this.shape_9.setTransform(28.8,106.6,0.404,0.404,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Agyi9IBTgGIASGCIg/AFg");
	this.shape_10.setTransform(29.6,95.4,0.404,0.404,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#76C2FB").s().p("AgJACQgYgCgfgEIAAgEQAWADAjACQAiACAlAAIABAKQgtgDgdgEg");
	this.shape_11.setTransform(37.3,114.3,0.404,0.404,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#EFEFEF","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#D3D3D3","#DBDBDB","#EFEFEF","#F6F6F6"],[0,0.039,0.122,0.318,0.557,0.812,0.878,0.976,1],-26.3,2.1,55.3,-3.8).s().p("AiIAIQgigCgfgDIALgDIA3ABQCEADCOgKIBAgHIhJAUQhHAHhEAAQhAAAg/gGg");
	this.shape_12.setTransform(33.9,104.8,0.404,0.404,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BCF87C").s().p("AgSACIhEgDIAAgDQBWAEBWgBIABAGQg2AAgzgDg");
	this.shape_13.setTransform(46.8,42.2,0.404,0.404,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BCF87C").s().p("AgTAFIhDgFIAAgBIABgDICsgDIgBAHIABAIQg2gBg0gCg");
	this.shape_14.setTransform(46.7,42.1,0.404,0.404,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#8CF239","#8EF439","#90F93A","#80D935","#73C031","#84E036"],[0,0.055,0.251,0.482,0.639,1],-52.8,5.1,51.8,-2.5).s().p("AlfArQhbgGg4gHICTACQCEAADcgUQCsgMC1gXQBZgMA4gKQg2APhaASQizAhitANQiGAMhyAAQg3AAgzgDg");
	this.shape_15.setTransform(33.3,40.6,0.404,0.404,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#BAFD6B","#A1F257","#91D253"],[0,0.408,1],-6.5,0.3,56.5,-2.6).s().p("AhJBrIgVjbQBXAEBVgBIARDeQhUAAhUgGg");
	this.shape_16.setTransform(46.4,46.6,0.404,0.404,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8BD944").s().p("AgrhpIA/gNQAOAgACAhIAIB0QACASgLAPQgLAOgRABIgiAIg");
	this.shape_17.setTransform(13.8,43.5,0.404,0.404,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#78E62B","#7AE92C","#7CEE2D","#6BCE26","#5BAE1E","#6ED227"],[0,0.067,0.251,0.459,0.639,1],-51.3,5.1,51.6,-2.4).s().p("AnQCQQgRACgNgNQgNgNgCgTIgIhzQgCgeAHggQHXAjIXhxQAOAgACAhIAIB0QACATgLAOQgLAPgRABQl0BPlPAAQh5AAh1gLg");
	this.shape_18.setTransform(33,44.9,0.404,0.404,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#BAFD6B","#A1F257","#91D253"],[0,0.408,1],-29.4,2.8,27.1,-1.3).s().p("AimIAIgBgFIEvvaQAJggAEgLQAKgGAJgCIgBAEIiiQMIADAVg");
	this.shape_19.setTransform(43.5,21.5,0.404,0.404,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#80C542","#7DBF41","#76B33F","#73AC3E","#72AA3E","#7CBC40"],[0,0.039,0.149,0.298,0.655,1],26.4,15.5,-169.8,-95.8).s().p("AD6IXQgKgkgQguQg7ighzjeQiBj0g+h+IgqhTIhSimIgSgnQARAIANAVIH3OFQAWAnADAuIAJB2QABANgFALQgFALgKAHIgPg1g");
	this.shape_20.setTransform(23.5,24,0.404,0.404,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#73DC29","#73DC29","#7AE92C","#7CEE2D","#6BCD26","#4D9318","#60B821"],[0,0.004,0.133,0.251,0.4,0.639,1],-54,3.3,46.9,-4).s().p("AnQJwQgRABgNgMQgNgNgCgUIgIh1QgDguAQgqIFyvEQAQgpAngDQAngCAVAmIH3OEQAXAoADAuIAIB1QACATgLAPQgLAOgRABQl0BPlPAAQh5AAh1gKg");
	this.shape_21.setTransform(33,25.6,0.404,0.404,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFFFFF","#FFFFFF","#FFFFFF","#EBEBEB","#D6D6D6","#DEDEDE","#EBEBEB"],[0,0.047,0.318,0.541,0.812,0.906,1],-21.6,1.2,58.9,-4.6).s().p("AieATQgkgFgRgYIA/gTQCvANC5gRIjkBDQhGgDhIgMg");
	this.shape_22.setTransform(35.9,106.1,0.404,0.404,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E3E3E3").s().p("AhYgeICugMIADAjIipAyg");
	this.shape_23.setTransform(43.5,50.9,0.404,0.404,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AALLKIgHg9ICAgnIAHBnIgUAHQgygDg6gHgAgTGlICGgpIAHBnIiCAogAgrC9ICNgsIAHBoIiJAqgAhEgpICWguIAHBlIiSAtgAhdkSICegwIAHBoIiaAvgAh1n6IClgyIAHBnIihAygAiKrGICtgNIADAkIioA0g");
	this.shape_24.setTransform(41.4,78.3,0.404,0.404,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#137DD6").s().p("AhRA0IgJhbICugMIAHBlQg5ACg5AAIg6AAg");
	this.shape_25.setTransform(43.4,51.2,0.404,0.404,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D1D1D4").s().p("AgTgUIAlgMIACA6IglAHg");
	this.shape_26.setTransform(14.9,49.5,0.404,0.404,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EEEEEB").s().p("AAAIjIAjgMIADBpIgkALgAgHE1IAjgLIADBpIgiALgAgPBIIAlgLIADBoIgkAMgAgWijIAlgMIACBpIgjALgAgdmRIAkgLIADBoIglAMgAglp+IAmgMIADBoIgmAMg");
	this.shape_27.setTransform(14.1,74.4,0.404,0.404,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#C3C3C3","#CDCDCD","#DADADA","#E1E1E1","#E3E3E3","#D7D7D7","#A2A2A2","#8D8D8D","#949494","#A9A9A9","#CACACA","#D1D1D1"],[0,0.027,0.078,0.149,0.318,0.38,0.671,0.812,0.855,0.914,0.988,1],-42.9,3.2,43.3,-3.1).s().p("AnCA+IgJhQIG1ggIl+BxgAHLg/IABA9Qi/AfiwARg");
	this.shape_28.setTransform(32.6,50.7,0.404,0.404,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#DBDBDB","#EAEAEA","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#B3B3B3","#9E9E9E","#A6A6A6","#BABABA","#DBDBDB","#EBEBEB"],[0,0.035,0.086,0.153,0.318,0.42,0.686,0.812,0.851,0.906,0.973,1],-39.9,2.9,46.5,-3.4).s().p("AkCLSQgkgFgSgcIMUjvIADBpIpWC2QhCgEhJgLgAlYHLIMtj2IADBoIskD0gAlzDkINCj7IADBnIs5D6gAmOgBINWkDIADBoItND/gAmpjpINqkJIADBoIthEHgAnEnQIN+kPIADBoIt1EMgAneq1IG+ghImzCFg");
	this.shape_29.setTransform(31.9,77.9,0.404,0.404,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#1173C4","#1172C3","#0E66AF","#095490","#084D84"],[0,0.314,0.494,0.82,1],-45.7,4.4,45.9,-2.2).s().p("AnCBIIgJhQIOVhDIACBRQmGBGloAAQhRAAhPgEg");
	this.shape_30.setTransform(32.6,50.3,0.404,0.404,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1994FB").s().p("AAKLJIiV2QICugMIBpWnQhDgDg/gIg");
	this.shape_31.setTransform(41.4,78.3,0.404,0.404,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3B87C2").s().p("AgQgTIAhgIIAAAIIgBAHIAAAAIgBADIAAABIgBADIAAAAIgCAEIAAABIgCAAIAAABIgCADIAAABIgIAMIAAAAIgPALg");
	this.shape_32.setTransform(13.3,103.4,0.404,0.404,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#2B95E8","#2B96EA","#2D9EF7","#2DA1FC","#2B8FDC","#2A7FC1","#2984C9"],[0,0.016,0.141,0.251,0.569,0.808,1],-38.7,3.9,39,-1.7).s().p("AkSAhQgrgCgogFIgegEQArADBHABQCEADCOgMQCEgMCOgWQBGgMArgIQgqAMhFAPQiXAfh8ALQhLAGhJAAQhBAAg/gFg");
	this.shape_33.setTransform(28.4,103.8,0.404,0.404,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#1480DB","#1584E2","#178CEF","#188FF4","#137CD3","#0E66AE","#0F6BB7"],[0,0.043,0.153,0.251,0.525,0.808,1],-42.6,4.3,47.7,-2.2).s().p("AlRAyQgZgEgSgQQgRgPgCgTIAAgCQF5ApGmhkIAAADQAAAVgPARQgPASgZAGQjyBCjeAAQhvAAhrgQg");
	this.shape_34.setTransform(28.7,104.9,0.404,0.404,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3A84BB").s().p("AgmrCIAmgDIAnVVQAAAQgJAOQgJAOgQAKg");
	this.shape_35.setTransform(14.1,75.9,0.404,0.404,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#1480DB","#1480DB","#1688E8","#178AED","#1278CC","#0A5592","#0F6BB7"],[0,0.004,0.133,0.251,0.467,0.808,1],-41.6,4.7,51.3,-2).s().p("AkCLbQgZgDgSgQQgRgQgCgVIie1LIOVhDIAoVUQAAAVgPASQgPARgZAHQjyBEjfAAQhuAAhrgRg");
	this.shape_36.setTransform(31.9,77.4,0.404,0.404,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58A2DA").s().p("Ag+AhIgHhCICFgKIAHBXQhAgChFgJg");
	this.shape_37.setTransform(37.9,107.6,0.404,0.404,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4581AE").s().p("AgegfIA7gEIACAzQgLAIgMACIgiAKg");
	this.shape_38.setTransform(15.6,105.7,0.404,0.404,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#1071C0","#1278CC","#137AD0","#0F6DB9","#0B5A9A","#084F87","#074B80","#0C5FA2"],[0,0.125,0.251,0.369,0.549,0.702,0.808,1],-34.8,3.6,35.4,-1.4).s().p("Ak8AwQgQgCgNgIIgFgxIK8gzIABA1QgLAIgMABQjkA/jTAAQhoAAhlgPg");
	this.shape_39.setTransform(28.6,106.8,0.404,0.404,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#59B5FA").s().p("AAkAcIgBAAIgPgBIgCAAIgcgDIgCAAIgfgEIgCAAIgRgDIgEguQBDAJA+ACIAEAwg");
	this.shape_40.setTransform(37.3,115.2,0.404,0.404,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#479AD8").s().p("AgagNIAagHQANgEANgKIABAPQAAASgNANQgNAPgTAGIgGACg");
	this.shape_41.setTransform(15.3,112.8,0.404,0.404,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#60A8DD").s().p("AgYAEIAxgMQgSAIgeAJg");
	this.shape_42.setTransform(15.4,111.9,0.404,0.404,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#1990F4","#1E96F9","#2199FC","#2097F8","#1983D9","#1576C6","#1472BF","#1784E0"],[0,0.11,0.251,0.275,0.494,0.678,0.808,1],-33.6,3.5,34,-1.4).s().p("AjvAfQgogEgggIIgZgIIAaAGQAhAFAnACQBpAGCHgLQB9gKBygWQA8gNAkgMQgiAQg7AQQh1Afh8AKQg4AEg1AAQhHAAg+gIg");
	this.shape_43.setTransform(28,113.1,0.404,0.404,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#1685E5","#1689EA","#1891F7","#1994FB","#1689E9","#1276CA","#0F6BB7","#0E67B0","#137AD1"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-33.7,3.5,35.3,-1.5).s().p("AkfAxQgWgEgPgNQgOgNgDgSIgBgMQANAIAQACQEpAtFLhcQAOgEAOgKIAAAPQABASgNAPQgNAOgWAFQjPA6i+AAQhfAAhbgOg");
	this.shape_44.setTransform(28.1,113.9,0.404,0.404,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#59B0F1").s().p("AgyB3IgCgBIgYjvICGgKIATEHQhFgDg6gKg");
	this.shape_45.setTransform(37.7,111.1,0.404,0.404,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#468DC2").s().p("Aggh1IA7gFIAGC+QAAARgNAPQgNAQgTAGIgGABg");
	this.shape_46.setTransform(15.5,109.2,0.404,0.404,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#1480DB","#1480DB","#1688E8","#178AED","#1277CB","#0D65AC","#0B5999","#0A5592","#0F6BB7"],[0,0.004,0.133,0.251,0.404,0.569,0.71,0.808,1],-34.1,3.6,36.4,-1.5).s().p("AkVCJQgWgEgPgNQgOgNgDgSIgWi8IK9gzIAFC9QABASgNAPQgNAPgWAGQjPA6i+AAQhfAAhbgOg");
	this.shape_47.setTransform(28.5,110.4,0.404,0.404,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7CB7E2").s().p("AgdBtIgCgXIgIhHQgFgsAFgWQADgPAKgSQAKgSAKgJIAWgCQANANAEAxQACAbABAmIAHBkQgvgDgZgCg");
	this.shape_48.setTransform(34.3,113.5,0.404,0.404,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3979A9").s().p("AgNBYIgHhHQgEgtACgWQABgOAEgRQAFgSAFgJIALgBQAHANAEAyIAEBAIAFBTIgjAJg");
	this.shape_49.setTransform(19.7,112.3,0.404,0.404,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#1071C0","#1278CC","#137AD0","#0E68B2","#0A5896","#084F86","#074B80","#0C5FA2"],[0,0.125,0.251,0.396,0.557,0.702,0.808,1],-22.5,2.3,22.9,-1).s().p("AjWB3IgSjUIHEghIANDSQikAriZAAQhCAAhAgIg");
	this.shape_50.setTransform(28.1,112.9,0.404,0.404,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#95D1FC").s().p("AgiAAIAAgFQAgADAkABIABAHQglgCgggEg");
	this.shape_51.setTransform(33.4,125.9,0.404,0.404,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7DC6FC").s().p("AggAQIgDgmQAjAEAhACIADAng");
	this.shape_52.setTransform(33.3,126.6,0.404,0.404,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3C92D3").s().p("AgQgNIAQgEQAIgDAIgGIABAUQABAOgQAMQgEAEgJADIgBAAg");
	this.shape_53.setTransform(18.9,125,0.404,0.404,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#60A8DD").s().p("AgNABIAbgFIgbAJg");
	this.shape_54.setTransform(19,124.3,0.404,0.404,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#1A90F4","#1F97F9","#229AFC","#2299F9","#1B85DA","#1778C7","#1674C0","#1885E0"],[0,0.11,0.251,0.271,0.49,0.678,0.808,1],-21.7,2.2,21.9,-0.9).s().p("Ah6AZQg1gDgpgNQAwAIA8gBQAqgBBCgFIBygMIBCgOIAlgIIgjANQgZAJgXADIgSAEQgXAGhMAKIgpACQgqACgfAAIgZAAg");
	this.shape_55.setTransform(27.2,125.1,0.404,0.404,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#1685E5","#1689EA","#1891F7","#1994FB","#1689E9","#1276CA","#0F6BB7","#0E67B0","#137AD1"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-22.6,2.3,22.7,-0.9).s().p("Ai5AkQgOgCgKgJQgJgIgCgMIgBgNQAFADAGAAQDEAcDZg7QAKgDAIgGIABAUQAAAMgIAJQgIAIgOAEQiGAmh7AAQg9AAg7gKg");
	this.shape_56.setTransform(27.2,125.8,0.404,0.404,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7DC1F4").s().p("AgQDgIgYj+IgIhHQgFguAFgWQADgPAKgSQAKgSALgJIAVgCQANANAEAxQACAbABAoIAYFOQgigCghgGg");
	this.shape_57.setTransform(34,118.2,0.404,0.404,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3A85BE").s().p("AgTgaIgIhIQgEgvACgWQABgOAFgQQAEgTAGgJIAMAAQAFANAEAxIAEBCIASEgQABAMgJAKQgIAJgOAEIAAAAg");
	this.shape_58.setTransform(19.4,117,0.404,0.404,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#1480DB","#1480DB","#1688E8","#178AED","#1688E9","#1172C3","#0D63A8","#0B5998","#0A5592","#0F6BB7"],[0,0.004,0.133,0.251,0.267,0.427,0.576,0.71,0.808,1],-22.8,2.4,23.5,-1).s().p("AioDsQgOgCgKgJQgJgIgCgMIgjmgIHEghIAZGhQAAAMgIAJQgIAKgOAEQiGAlh7AAQg9AAg7gJg");
	this.shape_59.setTransform(27.9,117.7,0.404,0.404,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#73B2E0").s().p("AgKgYIARgBIAEAyIgRACg");
	this.shape_60.setTransform(27.5,127.7,0.404,0.404,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#053F6C","#09518B","#0D63A9","#1070BF","#1278CC","#137AD0","#1277CB","#106FBD","#0D62A6","#084F86","#074B80"],[0,0.082,0.184,0.286,0.38,0.467,0.576,0.702,0.835,0.976,1],-5.5,0.4,4.9,-0.3).s().p("Ag0jLIBLgFIAeGcQgpAFgiAAg");
	this.shape_61.setTransform(27.5,120.3,0.404,0.404,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CECECE").s().p("AAWDrIgFg+QgJhigYjLIAAgBIgNhoIAJgBIAKBPQAOCAAJBTIAEAlQAKBpADAlg");
	this.shape_62.setTransform(30.2,119.3,0.404,0.404,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#AFAFAF").s().p("AARDrIgEg9QgKhkgXjKIgNhpIARgBIAKBOQARCWAGA+IAEAkQAKBbADA0g");
	this.shape_63.setTransform(30.2,119.3,0.404,0.404,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#848484").s().p("AAJCuQgIhUgNh2IgZjMIAZgCIAEAeQAZDWAFAuQAOCNACAmIgZAAg");
	this.shape_64.setTransform(30.2,119.3,0.404,0.404,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#73BCF3").s().p("AhLuXIATgBICEcwIgTABg");
	this.shape_65.setTransform(24.9,163.2,0.404,0.404,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#07487B","#074B80","#0D62A7","#1174C5","#1480DB","#1688E8","#178AED","#1688E8","#1480DA","#1172C3","#0C5FA3","#0A5592"],[0,0.012,0.11,0.204,0.298,0.384,0.467,0.569,0.686,0.812,0.941,1],5,-0.3,-6.2,0.5).s().p("AiL2HIBMgFMADLAsUIhMAFg");
	this.shape_66.setTransform(25.9,143.1,0.404,0.404,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C7C7C7").s().p("AAxFXQghgmgVgvQgWgtgLgzQgUhXAGhzIAHhYIACgTIAMhsIAJhVQAAgBABgBQAAgBAAAAQABAAAAAAQABgBABABIACABIABACIgLBjIgRCbQgKBzANBYQAQBvA0BOQAMARAOAQQAAAAAAABQABAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgCgCgAgUlUIgKBVIgMBtIgCASQgGA9gBAbQgGB0AUBWQAMAyAVAuQAWAvAgAlIABABQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABgBIAAgBQgPgQgLgRQg0hPgRhvQgMhYAKh0QAFg7ALhfIALhjIAAgBIgBgBQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABg");
	this.shape_67.setTransform(34.1,134.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EBEBEB").s().p("AAzFXIgBgBQggglgWgvQgVgugMgyQgUhWAGh0QABgbAGg9IACgSIAMhtIAKhVQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIABABIAAABIgLBjQgLBfgFA7QgKB0AMBYQARBvA0BPQALARAPAQIAAABIgCACIAAAAg");
	this.shape_68.setTransform(34.1,134.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#969696").s().p("AAvFZQg+hLgZhrQgUhYAGhzIAJhrIAPiFIAGg9QABgFAFABQAFAAAAAFIgPB/IgNB/QgKBzANBYQAQBuAzBOQAMARAOAQQADADgEAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAgWlUIgJBVIgMBsIgCATIgHBYQgGBzAUBXQALAzAWAtQAVAvAhAmIACACQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgOgQgMgRQg0hOgQhvQgNhYAKhzIARibIALhjIgBgCIgCgBIgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBABAAABg");
	this.shape_69.setTransform(34.1,134.5);

	this.addChild(this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55.4,200.5);


(lib.RocketStill2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7A7A7").s().p("AgTAvQgJglgHgsIA8gTIAKBLQABAGgDAFQgEAFgGACIgoAOg");
	this.shape.setTransform(35.5,22.8,0.401,0.401);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3B3638","#585556","#7E7C7D","#959595","#9E9E9E"],[0,0.227,0.565,0.835,1],-41.4,-4.7,35.2,4.7).s().p("ADNExQgGgYgQhgQgMhJgSgrQgMgbgKgPQgYgegYgcQgdgfgZgXQhshmi1h7QAagBAWANQDVB2CxDJQA6BCAMBbIANBmQABAGgEAFQgDAFgHACIgqANg");
	this.shape_1.setTransform(26.5,12.5,0.401,0.401);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBCBCB").s().p("AhWAsQgGgsgBgtQBZADBegEQABAqADAxIgvABIgSABQg1AAg+gDg");
	this.shape_2.setTransform(6.5,27.4,0.401,0.401);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#E6EDF2","#E3EAEE","#C1C4C7","#ADADAE","#A5A5A5"],[0,0.035,0.459,0.796,1],36.7,3.7,0,36.7,3.7,77.4).s().p("AiSFoQgfjZBiiTQAQgdAig3ICgkJQALgGAMgDQgjBmgYBcIgVBWQghBkgIB3QgHBiAIB/IhGABQg3AAg3gDg");
	this.shape_3.setTransform(8.9,14.7,0.401,0.401);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#868686","#888888","#8C8C8C","#6B6B6B","#1F1F1F","#787878"],[0,0.035,0.251,0.38,0.639,1],-43.9,7.7,50.7,-4.6).s().p("AmtBmQgHgBgFgEQgEgEgBgGIgKhMQHCAbHFiQIAKBNQABAGgDAFQgEAFgGACQlwB2lnAAQhKAAhJgFg");
	this.shape_4.setTransform(18.6,25,0.401,0.401);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-40.9,4.1,37.5,-6.1).s().p("AmqFnQgHAAgFgEQgEgEgBgGIgOhmQgMhbAphNQB2jgCzi5QAXgXAhgFQAigFAcAQQDVB2CyDLQA5BAAMBbIANBmQABAGgDAFQgEAFgGACQlwB3lnAAQhKAAhJgFg");
	this.shape_5.setTransform(18.5,14.6,0.401,0.401);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D5CC31").s().p("AhQBYIgRhjQAOgJAPgBQAdgEAYASQAVAQAEAdQADAbgOAXIgVABIg6gBgABDg/QgOgKgIgPIAwABIAFAlQgRgCgOgLg");
	this.shape_6.setTransform(8.7,27.5,0.401,0.401);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1A929").s().p("AhUBYIgbicICVgUIAyABIAYCrQhIAFhAAAIg8gBg");
	this.shape_7.setTransform(8.9,27.5,0.401,0.401);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#D4B12B","#D4AB29","#B36A1C"],[0,0.498,1],-43.1,6.5,32.7,-3.4).s().p("AmEB4QgJgNgDgSQgDgdARgXQASgXAdgEQAdgDAXARQAYASAEAdQADAcgQAXIgfAAQgtAAgogCgAgSBUQgEgdASgXQAQgXAdgEQAdgEAXASQAYASADAdQABAIgBAIQg/AMhGAKQgEgIgBgMgAhwBXQgLgIgCgNQgCgOAJgKQAIgLANgCQAOgCALAJQAKAIACANQACAOgIALQgJAKgNACIgFAAQgKAAgJgHgAEIAhQAIgIALgBQASgCAMAOIg6AQQABgLAIgIgAGRAGIAAAEIgNAEQAHgFAGgDgAjCgYQgUgLgKgUICFgRQgFAWgQAPQgRAQgWADIgKABQgRAAgQgJgACwgjQgXgSgEgdQgBgKABgMICGgRQAFAJABALQAEAdgSAYQgSAXgdAEIgKABQgXAAgTgPgAA8hMQgKgFgEgJIA9gIQgCAKgIAHQgHAHgLABIgEABQgIAAgHgEg");
	this.shape_8.setTransform(19.6,26.2,0.401,0.401);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B76C1D").s().p("AglhJIA/gJIAMCSIg8ATg");
	this.shape_9.setTransform(34.2,24,0.401,0.401);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#AF571A","#A75319"],[0,1],-4,8.6,0,-4,8.6,46.1).s().p("AmUB8IgBAAIgaiNINUhvIAMCRQlfBwlXAAQhIAAhHgFg");
	this.shape_10.setTransform(18.3,25.9,0.401,0.401);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EEB329").s().p("ABHQmQANADAIAEIgBACIgCACIgBADIgCACIgFAHIgHAGgAA/POIgEgrQAIgLAOgCQAIgBAHACIAEA8QgEADgGABIgGAAQgMAAgJgJgAApLeQAhAMALAhIACAhQgFAhgdARgAAiKKIgGg9IAKgDQAKgBAJAEQAJAFAFAJIACAaQgGATgVADIgDAAIgJgBgAAMGYQAcASAEAhQAFAlgbAYgAAAD+QAKgBAKAIQAKAIABANQACANgIALQgIAKgNACgAgPBYQAPARABAWQAEAagNAVgAgehKQARAGADAUQABAJgEAJQgEAJgIAFgAgMlhQgDgVAKgVIAFBKQgJgOgDgSgAg7mLQAFAHABAIQABAJgEAJgAg3qtQgCgSAGgRQAGgQANgLIAJBwQgcgSgEgggAhRvUQgOgQgDgVQgDgYALgUQALgUAUgJIALCDQgUgGgNgPg");
	this.shape_11.setTransform(38.1,70.2,0.401,0.401);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CE7822").s().p("AgRgYIADgCQAPgGAPgNIACAYIAAAMIgBABIAAAHIgBABIgDAJIgEALIgJAOIgDAFIgBACIgGAFg");
	this.shape_12.setTransform(41.5,112.1,0.401,0.401);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D7791E").s().p("Ah3yCIBBgIMACuAjPQADApghAdg");
	this.shape_13.setTransform(37.5,67.3,0.401,0.401);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEF539").s().p("ADGSMQgLgNgCgTQgEgbAQgWQAPgXAbgGIAPBzQgZgBgfgEgABsQ1QANgBAKAIQAKAIACANQACAMgHALQgHAKgMADgABPODQAdASAFAhQAEAfgVAYgACmNNQgVgSgDgbQgEgaAPgXQAPgVAagIIATCLIgCABQgaAAgTgRgABAMqIgLg+IAKgDQAOgCALAIQAKAJACANQACAOgJAKQgIALgNACIgEAAIgEAAgAAWIwQATAGANAQQANAQADAUQACAUgHARQgIARgOAMgAB6IAQgUgRgEgbQgDgaAOgWQAPgWAZgHIASCLQgagBgTgRgAAHHZIgHgwQAIgLAMgBQANgCALAIQALAJACANQABAOgIAKQgIALgOACIgEAAQgKAAgHgFgAggDhQAXADAPARQARASADAXQADAXgKAUQgLATgSALgABNCzQgTgRgDgaQgEgaAPgVQANgWAYgIIATCLQgZgCgUgRgAglCLQgLgIgBgNQgCgOAIgLQAIgLAOgBQANgCAJAIQALAIABAOQACANgIALQgHALgNACIgFAAQgKAAgJgHgAhYhpQAbgBAVARQAVARAEAcQADAagOAUQgOAVgZAIgAAiiXQgTgSgDgZQgEgZAOgWQANgVAXgIIATCKQgZgCgSgRgAhQi/QgLgJgCgMQgCgOAJgLQAIgLANgBQAOgCALAJQAKAHACAOQACANgIALQgJALgNABIgFABQgKAAgJgHgAh4koIgYiMIAGgBQAegDAXARQAXASAEAdQAEAdgSAYQgSAXgdAEgAgInkQgSgSgEgYQgDgZANgVQANgVAUgIIATCIQgYgDgQgQgAh8oLQgKgJgCgNQgCgNAJgLQAIgLANgBQAOgCAKAJQALAHACAOQACANgJALQgIALgNABIgEABQgLAAgKgHgAjHr8QALgFAHAAQAdgEAXASQAYASADAdQAEAdgSAYQgSAXgdAEIgNAAgAg0sxQgSgRgDgZQgDgXAMgWQAMgUAWgJIATCIQgYgDgRgRgAintXQgKgJgCgNQgCgNAIgLQAIgLAOgCQANgBALAIQALAJABAMQACAOgIALQgIAKgOACIgEABQgLAAgJgHgAjovCIgViBQAOgIAPgCQAdgEAXASQAYASADAdQAEAdgSAXQgSAXgdAFIgJAAQgJAAgIgCgAhXx2QgOgKgIgPIAvAAIAFAmQgQgDgOgKg");
	this.shape_14.setTransform(15,70.8,0.401,0.401);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FCD638").s().p("AgOAnIgBAAIglgGIgGgCIgOhNQBIANA+ABIAKBPQgugCgogGg");
	this.shape_15.setTransform(22.3,115.8,0.401,0.401);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FDD332","#FBCA30","#F9C12E"],[0,0.4,1],-30,-11.5,94.9,28.5).s().p("ACNSDIgPgCMgGAgj9ICXgTIAyAAMAE8AkgQg+gDg4gLg");
	this.shape_16.setTransform(14.8,70.8,0.401,0.401);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FED232","#FEDB33","#FEE234","#FEE434","#EB9925","#D57A1E"],[0,0.059,0.157,0.384,0.631,1],-29.9,3.3,24.6,-3.8).s().p("AiIA7IglgDIgBAAQgKgOgDgTQgDgXANgVQA+AFA8gEQAHAOACALQAEAfgVAYIgOAAIgFABgAkZAbQgKgJgCgNQgCgLAJgLQAIgLANgCQAOgCAKAJQALAIACANQACAMgJALQgIAKgNACIgFABQgLAAgJgHgABjAVQgLgIgBgNQgCgMAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAMgIALQgIAKgOACIgFAAQgKAAgJgHgADSgkQASgUAagDQAWgDATAKIgBABIgCADIgCADIgJAKIgOAMIhEAcIgHADQABgYARgUg");
	this.shape_17.setTransform(30,115.3,0.401,0.401);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FED232","#FED331","#EB9925","#D57A1E"],[0,0.384,0.631,1],-35.4,6.7,38.8,-2.9).s().p("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ANgCQAOgBALAIQAKAIACAOQACANgJALQgIAIgNACIgFAAQgLAAgIgGgAE9AAQgKgIgCgNQgCgOAIgKQAIgLAOgCQANgCALAJQALAIACANQABAOgIALQgIAIgOACIgFAAQgKAAgJgFgAiahyQgXgSgEgdQgDgdARgXQASgXAdgEQAegEAXASQAXASAEAdQAEAdgSAXQgSAYgdADIgLABQgXAAgTgPgADih3QgXgSgEgdQgEgdASgYQASgXAdgEQAdgDAXASQAYASADAdQAEAdgSAXQgSAXgdAEIgKAAQgYAAgSgOgAkTieQgKgIgCgNQgCgOAIgLQAJgKANgCQANgCALAJQALAIACANQABAOgIAKQgIALgOACIgFAAQgKAAgJgHgABpijQgLgIgCgOQgBgNAIgLQAIgKAOgCQANgCALAIQAKAJACANQACANgIALQgJALgNACIgFAAQgKAAgJgHgAlukVQgXgSgEgdQgEgdASgYQASgXAdgEQAdgDAXARQAYASADAdQAEAdgSAYQgSAXgdAEIgKAAQgXAAgTgOgAANkbQgVgRgEgeQgDgdAPgXQASgXAdgEQAdgEAYASQAXASAEAdQAEAdgSAXQgSAYgdADIgLABQgXAAgTgPgAFwlPQgDgVAKgUIAGBJQgLgOgCgSgAhqlGQgKgJgCgNQgCgNAJgLQAIgLANgCQANgCALAJQALAIACANQACAOgJALQgIAKgNACIgFAAQgLAAgJgGgAESlMQgLgIgBgNQgCgOAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAOgIALQgIAKgOACIgFAAQgKAAgJgHgAjFm+QgXgSgEgdQgEgdASgXQASgXAdgEQAdgEAXASQAYASADAdQAEAdgSAXQgSAXgdAEIgKABQgXAAgTgPgAC2nDQgXgSgEgdQgDgdASgYQASgXAdgEQAdgDAXARQAXASAEAdQAEAegSAXQgSAXgdAEIgLAAQgXAAgTgOgAk+nqQgLgIgCgOQgBgNAIgLQAIgKAOgCQANgCALAJQAKAIACANQACANgIALQgJALgNACIgEAAQgLAAgJgHgAA+nvQgLgIgCgOQgCgNAJgLQAIgLANgBQAOgCALAIQAKAIACAOQACANgJALQgIALgNABIgFAAQgLAAgIgGgAmaphQgXgSgEgdQgDgdARgYQASgXAdgEQAegDAXARQAXASAEAdQAEAdgSAYQgSAXgdAEIgLAAQgXAAgTgOgAgcpnQgXgSgEgdQgEgdASgXQASgXAbgEQAdgEAXASQAYASADAdQAEAdgSAXQgSAYgdADIgKABQgVAAgTgPgAFFqbQgDgRAHgRQAGgQANgMIAIBwQgcgSgDgggAiVqSQgLgJgBgNQgCgOAIgKQAIgLAOgCQANgCALAJQALAIABANQACAOgIALQgIAKgOACIgEAAQgLAAgJgGgADnqYQgLgIgCgNQgCgOAJgKQAIgLANgCQAOgCALAJQAKAIACANQACAOgJAKQgIALgNACIgFAAQgLAAgIgHgAjwsKQgXgSgEgdQgEgdASgXQASgYAdgEQAdgDAXASQAXASAEAdQAEAdgSAXQgSAXgdAEIgLAAQgXAAgSgOgACLsPQgXgSgEgdQgDgeARgXQASgXAdgEQAdgDAYARQAXASAEAdQAEAdgSAYQgSAXgdAEIgLAAQgXAAgTgOgAlps2QgLgIgCgOQgCgNAJgLQAIgKANgCQAOgCALAIQAKAJACANQACANgJALQgIALgNACIgFAAQgLAAgIgHgAASs7QgKgIgCgOQgCgNAIgLQAJgLANgBQANgCALAIQALAIACAOQABANgIALQgIALgOABIgFAAQgKAAgJgGgAnFutQgXgSgEgeQgDgdARgXQASgXAdgEQAdgEAYASQAXASAEAdQAEAdgSAXQgSAYgdAEIgLAAQgXAAgTgOgAhHuzQgXgSgEgdQgEgdASgXQASgXAdgEQAdgEAVASQAYASADAdQAEAdgSAXQgSAYgbADIgKABQgYAAgSgPgAEqvCQgOgQgDgVQgDgXAMgUQALgUAUgKIAKCEQgUgGgNgQgAjAvfQgLgIgCgNQgBgOAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAOgIALQgJAKgNACIgFAAQgLAAgIgHgAC7vkQgKgIgCgNQgCgOAJgLQAIgKANgCQANgCALAJQALAIACANQACANgJALQgIALgNACIgGAAQgKAAgJgHgAkSxQQgUgLgKgUICFgRQgFAWgQAPQgRAQgWADIgKAAQgSAAgPgIgABgxbQgXgSgEgdQgBgKABgMICGgRQAFAJABALQAEAegSAXQgSAXgdAEIgKAAQgXAAgTgOgAgSyEQgKgFgEgJIA7gIQgDAKgHAHQgHAHgKABIgEAAQgIAAgGgDg");
	this.shape_18.setTransform(22.8,69.5,0.401,0.401);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#F17724","#F87B27","#FD7E28","#DC6E22","#AE571A","#D1681F"],[0,0.106,0.251,0.498,0.808,1],-49.8,7.8,40.8,-4).s().p("AjmBPQgdgDgVgTQgUgTgFgbIgGggQAWARAbADQEYAyEFh5QARgHAOgNIACAZQACAagPAYQgPAWgbALQimBNisAAQhKAAhLgOg");
	this.shape_19.setTransform(29.7,114,0.401,0.401);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#F07120","#F87623","#FD7924","#DC691E","#AB5014","#CF621A"],[0,0.11,0.251,0.49,0.808,1],-52.6,10.2,46.5,-2.7).s().p("AgcSsQgdgEgVgTQgUgTgFgaMgGbgixINVhvMACvAjPQACAbgPAXQgPAYgbALQilBNivAAQhJAAhKgNg");
	this.shape_20.setTransform(21.6,69.2,0.401,0.401);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#959595").s().p("AgaBCIgUiCIBJgKIAUCVQgegCgrgHg");
	this.shape_21.setTransform(22.2,116.8,0.401,0.401);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#504E4E").s().p("AgThDIAdgDIAKB8IAAAEIgZANg");
	this.shape_22.setTransform(40.1,114.3,0.401,0.401);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#676767","#282828"],[0,1],4.8,102.5,0,4.8,102.5,36.1).s().p("AhGOkQgQgCgNgHIlI7uILKhdICNcOIgMAGQikBNiwAAQhJAAhJgNg");
	this.shape_23.setTransform(23.8,82.1,0.401,0.401);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#757576").s().p("AgMgHQAQgQAGgWIADAlQABAEgBADIAAABIgBAEIAAACIgBAGIgBABIgBAHIgBABQgCAGgFAGIAAABIgIAMg");
	this.shape_24.setTransform(40.7,120.4,0.401,0.401);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#595657").s().p("AgWiDIAcgCIARDTQACAhgYAXg");
	this.shape_25.setTransform(40.3,116.9,0.401,0.401);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C0C0C0").s().p("AgFAcIgGgBIgBgBIgGgBIAAAAIgMgFIgIg1QAJAEALACIAzAHIAHA2IgtgGg");
	this.shape_26.setTransform(23.1,123.9,0.401,0.401);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B3B3B3").s().p("AAJCIQgMgCgMgGIgnkEIBJgKIAkEdIgugHg");
	this.shape_27.setTransform(22.5,119.6,0.401,0.401);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#848484","#868686","#8A8A8A","#696969","#1C1C1C","#777777"],[0,0.035,0.251,0.38,0.639,1],-27,5,48.9,-4.9).s().p("AjABLQgYgEgSgQQgRgPgEgWIgGgjQASAdAmAGQDYAoDLhdQAkgPAJgjIADAlQACAWgMAUQgNASgXAJQiKBBiRAAQg+AAg/gLg");
	this.shape_28.setTransform(30.7,122,0.401,0.401);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-25.4,6.1,58.4,-4.8).s().p("AgXPqQgZgDgRgQQgRgQgEgWIlY9IILKheICTdiQACAXgNAUQgNATgWAKQiLBBiTAAQg9AAg9gMg");
	this.shape_29.setTransform(23.9,84.8,0.401,0.401);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#828282").s().p("AgSAaIgJgyIAtgGIAKA9QgYgBgWgEg");
	this.shape_30.setTransform(25.3,125.9,0.401,0.401);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#514F50").s().p("AgNgcIAXgCIAEAyIgWALg");
	this.shape_31.setTransform(39,123.8,0.401,0.401);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#6A6A6A","#272425"],[0,1],-1.5,57.3,0,-1.5,57.3,30.3).s().p("AheJrIgCAAIjaybIIYhGIBcSrIgBABQiKBBiTAAQg7AAg/gMg");
	this.shape_32.setTransform(27,101.9,0.401,0.401);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6E6E70").s().p("AgJgMQALgIAGgJIACAZIgBABIAAADIAAAAIgBAFIAAABIgCAGIgCADIAAABIgDAFIgBAAIAAAEIgFAFg");
	this.shape_33.setTransform(39.9,133.9,0.401,0.401);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5B5758").s().p("AgWiaIAXgCIAVEPQADAYgTASg");
	this.shape_34.setTransform(39.4,128.9,0.401,0.401);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A8A8A8").s().p("AAaAbIgngGIgEgCIgBAAIgIguIAHABQAMADAaADIAIAvg");
	this.shape_35.setTransform(26.9,136.4,0.401,0.401);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9A9A9A").s().p("AAMCaIgKgDIgxkvIAvgGIAwE9g");
	this.shape_36.setTransform(26.1,131.1,0.401,0.401);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#848484","#868686","#8A8A8A","#696969","#1C1C1C","#777777"],[0,0.035,0.251,0.38,0.639,1],-23,4.1,42.7,-6.2).s().p("AiPA0QgSgDgNgMQgNgMgDgQIgGgbQAPASAaACQCmAdCdhFQASgHAJgOIACATQABARgJAPQgKANgRAHQhoAwhrAAQgvAAgvgIg");
	this.shape_37.setTransform(32.4,135.2,0.401,0.401);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-19,4.6,43.8,-3.6).s().p("AgRLvQgSgCgNgMQgNgMgDgRIkC11IIXhGIBuWJQABAQgJAPQgKAPgRAHQhnAxhuAAQguAAgugJg");
	this.shape_38.setTransform(27.3,107.1,0.401,0.401);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C2C2C2").s().p("AgRgzIAUgDIAPBqIgVADg");
	this.shape_39.setTransform(32.6,136.6,0.401,0.401);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#767678","#89898B","#959698","#999A9C","#939495","#818183","#636465","#4D4D4E"],[0,0.114,0.231,0.345,0.475,0.655,0.867,1],-4.4,0.6,4.5,-0.5).s().p("AhgmQIBZgMIBoMsQgtALgsACg");
	this.shape_40.setTransform(31.3,122.3,0.401,0.401);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C6C6C6").s().p("AAQDIIgNhtIAAgBIgckdIAAgCIADgCQAGgBAAAFIArGLg");
	this.shape_41.setTransform(30,130.8,0.401,0.401);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#ADADAD").s().p("AALDLIgLhuQgWjKgJhTQAAgEACgDQAEgDADAAQAKgBABAKIARCxIAZDbg");
	this.shape_42.setTransform(30,130.7,0.401,0.401);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8A8A8A").s().p("Agji9QgBgOAOgBQAPgBABAOIArGMIgfAAIgpmKg");
	this.shape_43.setTransform(30,130.6,0.401,0.401);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EDEDED").s().p("AAkJCQALjBgUjpQgNiYgfklIAAgBIgfkfIAAgDIAEgBQAFAAAAAEIAcD4QAUC+AMB8IAFA0QAPCkAFBbQAHCfgICLIgJgIg");
	this.shape_44.setTransform(30.9,146.3,0.401,0.401);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E8E8E8").s().p("AiBuIIAXgCIDrcSIgVADg");
	this.shape_45.setTransform(37.1,170.8,0.401,0.401);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#262626","#2B2B2B","#3A3A3A","#525252","#737373","#9E9E9E","#B2B2B2","#AEAEAE","#9F9F9F","#888888","#676767","#3D3D3D","#0D0D0D"],[0,0.067,0.149,0.239,0.329,0.427,0.467,0.537,0.624,0.714,0.808,0.906,1],5.9,-0.7,-7.4,1).s().p("AjQzlIBZgMMAFIAnWIhZANg");
	this.shape_46.setTransform(35.8,156.5,0.401,0.401);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CDCDCD").s().p("AAMDmQAEhNgHhcQgFg9gMh1IgMhzIAAgCQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAEAAAAAEIAIBHIADAcIAMB+IACAUQAHBCABAkQADBBgDA5IgIgHg");
	this.shape_47.setTransform(30.9,146.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A2A2A2").s().p("AAUDtQADg5gDhBQgBglgHhCIgCgTIgMh+IgDgdIgIhGQAAgFgEABQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAIAAADIAMBzQAMB1AFA9QAHBcgEBNIgCgCQAEhMgHhbQgFg5gIhZIgQiTQgBgGAGAAQAGAAAAAGIAIBGQAKBoAFAzIAGA8IAEA+QADBCgDA6IgCgCg");
	this.shape_48.setTransform(30.9,146.3);

	this.addChild(this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44.2,207.3);


(lib.rocket_explosion3 = function() {
	this.initialize();

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAJIg0BtIAuhwIiDAsICAgyIhKgnIBPAiIgvh+IAzB7IAxhjIABABIgsBlICEgsIiBAxIBeAtIhhgmIAtB9g");
	this.shape.setTransform(71.3,36.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAMIhCCKIA6iOIimA4ICjhAIhfgyIBjAsIg5igIBACcIA9h9IABAAIg2CAICng4IijA/IB2A5Ih6gvIA5Cdg");
	this.shape_1.setTransform(58.3,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBAEIgoAbIAlgeIhMgNIBNALIglg5IAoA2IAPhJIgNBJIAygeIgwAiIBNANIhNgLIAiA0IgmgxIgOBJg");
	this.shape_2.setTransform(34.1,-71.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBAEIgsAbIAqgfIhEgLIBEAKIgeguIAhAsIANhBIgLBCIAjgYIghAaIBEAMIhEgKIAhAzIglgxIgMBBg");
	this.shape_3.setTransform(-32.3,65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAKIiDBRIB9haIiqgmICsAgIg1heIA9BaIAiimIgbCnIB3hJIABABIhyBPICqAoIitghIBGBwIhOhpIghCjg");
	this.shape_4.setTransform(-56.9,-1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAALIguB7IAmh9IiYBGICVhPIiPg2ICTAvIhGihIBNCdIAqhjIgjBnICahHIiWBOICCAyIAAABIiFgrIBGChg");
	this.shape_5.setTransform(57,-38.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAHIh/AjIB8grIiUhQICYBJIgpiUIAxCRIBXiYIhPCcIBpgYIhnAfICVBRIiZhJIAlCHIgBAAIgriDIhXCYg");
	this.shape_6.setTransform(-59.5,48.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAHIh/AjIB6grIiThQICZBJIgqiUIAxCRIBYiYIhQCdIBpgZIhnAgICVBRIiZhJIAlCHIgCAAIgqiEIhXCYg");
	this.shape_7.setTransform(42.5,52.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAHIheAVIBdgcIiGhHICJBAIghh4IABAAIAmB2IBOiIIhHCMIBxggIhuAmICEBIIiIhBIAkCEIgriCIhOCIg");
	this.shape_8.setTransform(-39.7,-45.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAFIgdArIAagtIhQASIBPgVIg5gjIAAAAIA7AgIgShSIAUBRIAig1IgdA3IBPgSIhPAVIA/AmIhBgjIASBRg");
	this.shape_9.setTransform(-77.1,-13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAEIgeAwIAbgxIhHAQIBGgTIg4giIA6AfIgQhIIASBHIAbglIgYAoIBIgRIhHASIAzAgIAAABIg1gdIAQBIg");
	this.shape_10.setTransform(67.1,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAIIhNA0IBIg7IiSgaICTAVIhHhuIBPBpIAciMIgXCNIBeg8IhaBEICUAaIiVgVIBBBjIAAABIhIhgIgcCNg");
	this.shape_11.setTransform(-13.4,75.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAIIhUA1IBRg7IiEgYICEASIg6hYIABAAIA/BVIAah+IgVCAIBEgvIg/A0ICDAXIiEgTIA/BiIhGhdIgZB9g");
	this.shape_12.setTransform(10.2,-65.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIBlIAFhaIhVBFIBRhKIhEgEIBEgBIhHhTIBMBRIAJhjIgFBjIBVhFIhRBHIBTAJIhUgDIBIBWIhMhRIgIBZg");
	this.shape_13.setTransform(-51.6,28.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgBACIhLA9IBIg/IhLgIIBMADIhAhNIBDBJIAHhQIAAAAIgDBQIBLg+IhJBCIA+AFIg9AAIA/BLIhDhJIgJBYg");
	this.shape_14.setTransform(44.3,-23.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDAFIg5AnIA2grIhvgUIBwARIg2hUIA7BPIAVhpIgSBqIBIgtIhEAyIBvAVIhwgQIAyBKIgBAAIg2hIIgWBrg");
	this.shape_15.setTransform(-49.2,-71.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCAGIg7AmIA2grIhugTIBvAQIg1hUIA7BPIAVhqIgSBrIBIgtIhEAzIBvATIhwgPIAxBLIAAAAIg2hIIgVBrg");
	this.shape_16.setTransform(81.9,-14.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCAGIhAAoIA9gtIhjgRIBjAOIgshDIABAAIAwBAIAThfIgQBgIA0gjIgxAnIBjASIhjgPIAvBLIg0hHIgTBeg");
	this.shape_17.setTransform(-74.9,14.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBADIgmAaIAjgcIhJgNIBKALIgkg3IAnA0IAOhGIgMBHIAvgeIgtAhIBKANIhKgLIAhAyIgBAAIgjgwIgOBHg");
	this.shape_18.setTransform(77.5,4.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBAEIgqAaIAogdIhBgLIBBAJIgdgsIAAAAIAgAqIAMg/IgKBAIAigXIggAZIBBALIhCgJIAgAxIgjgvIgMA/g");
	this.shape_19.setTransform(-70.9,-2.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFAGIhYAnIBTgtIiOg3ICSAyIg0h9IA6B4IA5iIIgyCLIBrgqIhoAxICQA4IiSgxIAvBxIgBAAIg2huIg4CJg");
	this.shape_20.setTransform(74.9,-37.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHAIIhvAxIBqg5Ii2hGIC5A+IhAieIBJCaIBJitIhACvICIg1IiEA/IC2BHIi5g+IA8CPIgBAAIhFiMIhHCug");
	this.shape_21.setTransform(60.3,6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAAGIgtA8IAphAIhVANIBVgPIgqghIAtAeIgOhTIAPBSIAqg3IAAAAIglA6IBVgNIhVAPIA1AnIg3gjIANBSg");
	this.shape_22.setTransform(33.5,83.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAAFIglAxIAAgBIAhgzIhLALIBLgNIgugiIAwAfIgMhJIAPBIIAng2IgkA5IBNgLIhNANIAlAdIgngaIAMBJg");
	this.shape_23.setTransform(-40.3,-68.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgBAMIhEBjIA6hoIi/AkIC+gsIiLhjICRBaIgei5IAlC2IBXh1IhOB8IDBgkIi+AsIB/BZIgBABIiFhSIAfC6g");
	this.shape_24.setTransform(-67.8,5.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJAJIijA0ICfg9IilhWICpBNIgqiLIAzCIIBWivIhMCzICSgwIAAABIiQA3ICoBYIithPIAoByIgvhuIhWCvg");
	this.shape_25.setTransform(59,47.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AABANIg2CiIAtilIipBQICkhZIiJgvICNAnIhZiuIBiCpIAviTIABAAIgoCWICqhRIimBaIBzAkIh1gcIBYCug");
	this.shape_26.setTransform(-70.6,-49.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AABAOIg2ChIAtilIipBRICkhZIiJgxICNAoIhYiuIBhCpIAviTIABABIgoCVICqhRIimBaIBzAkIh1gbIBYCug");
	this.shape_27.setTransform(42.8,-54.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AABAMIgqCDIgBgBIAkiGIiYBJICVhRIhngfIBoAYIhPibIBXCXIAwiQIgoCTICXhIIiSBQIB6AqIh+gjIBPCcg");
	this.shape_28.setTransform(-48.7,54.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgCAFIhCAkIAAgBIA/goIhYgXIBaAVIgegxIAhAuIAXhZIgUBaIBJgnIhGArIBYAYIhYgVIAhA9Igmg6IgXBZg");
	this.shape_29.setTransform(-90.2,19.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgCAFIhBAiIA/gnIhPgUIBPASIgdg2IAhA0IAVhQIgSBRIA7ggIAAAAIg5AjIBPAWIhQgTIAaAsIgegqIgTBQg");
	this.shape_30.setTransform(70.1,-11.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgBALIhXB1IBPh7IikAYICjgeIhQhAIBWA6IgbifIAhCcIBPhpIABAAIhJBuIClgXIikAeIBlBKIhphCIAaCdg");
	this.shape_31.setTransform(-19.4,-79.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAAAJIhIBfIAAgBIBAhiIiSAVICRgbIhZhCIBeA7IgXiMIAcCLIBOhoIhHBtICTgVIiRAaIBGA6IhLg0IAXCOg");
	this.shape_32.setTransform(6.9,77.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgDADIhTBaIBOhdIhMgBIBNgFIhbhSIBeBNIgEhkIAAAAIAJBkIBUhbIhPBfIBdgDIhcAKIBaBPIhehMIAFBtg");
	this.shape_33.setTransform(-61.9,-27.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAHBkIgHhYIhLBRIBHhWIhUADIBTgJIhQhGIBTBEIgFhiIALBiIBKhRIhHBTIBFABIhFAEIBRBKIhUhFIAEBZg");
	this.shape_34.setTransform(44.9,30.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAAIIhCBZIA8hdIh9ASIB7gWIg8gwIBBArIgUh5IAYB3IA8hQIABAAIg3BUIB9gRIh8AVIBMA5IhQgzIAUB3g");
	this.shape_35.setTransform(86.7,19.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAAAHIg1BIIgBgBIAxhLIhvAQIBugTIhEgyIBIAsIgShqIAVBqIA7hQIg1BTIBugPIhtATIA1AsIg5goIARBsg");
	this.shape_36.setTransform(-87.8,-11.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAAAFIgrA7IAng+IhSAMIBRgOIgnggIAqAdIgNhPIAQBOIAng1IABAAIglA3IBSgLIhRAOIAyAlIg1ghIAOBOg");
	this.shape_37.setTransform(81.7,-1.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAAAEIgjAvIAAAAIAhgxIhKAKIBJgMIgtghIAvAdIgLhFIANBFIAmg0IgiA3IBIgLIhIAMIAjAdIglgaIALBHg");
	this.shape_38.setTransform(-83.4,7.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAAAIIhCBZIA8hdIh9ASIB7gWIg8gxIBBAsIgUh4IAYB2IA8hQIABAAIg3BUIB9gRIh8AVIBMA4IhQgxIAUB2g");
	this.shape_39.setTransform(-49.8,81.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("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gDIgDADIgEACIAEACIgIABIgCADIAAgDIgGABIgBAFIgBADIgBAHIgHgOIgDABIgLABIgBAAIAIgHIAAgDIAAgIIgCgDIgvADIABAEIAKACIAGABIgPAHIAAACIABAJIABAFIgFgGIgGgGIgKAFIgFACIACgCIAEgIIACgEIgFgGIgFgEIgwACIhIADIgkACIgHAAIDjAgIgBACIg4gEIh4gKIgFAAICcAhIg1gHIhNgLIgwgHIA0AQIBgAdIg8gNIhMgRIgMgDIBFAbIArAQIhDgTIgRgFIB/A3IAcAMIgDACIAKABIADABIABAHIjbhTIgogPIgJgDIAGAEIATAPICUBrIAFAAIAGgQIAEARIASAAIgOAKIACAEIABABIAFgBIgFAGIAAADIACAAIgBACIAAABIgBgBIAAACIAAABIACAAIgBABIACAEIgEgCIgBABIgFAIIAPANIgTgCIAEALIAVgBIgQANIACAEIAKAEIABAAIgBABIACAAIANgPIgBALIgBAIIAAABIAKAEIAIADIgTAFIgCATIgFgKIgFgGIgIABIgDALIgBACIgBgEIgBgCIAAAAIgIAHIgDACIAEAIIACAGIAAAAIACAEIgHgHIgIgFIgFAFIgHAFIADgKIABgFIgLgHIgDgBIACAAIALgBIgMgMIgCABIABgDIgQgSIgFAFIgDACIAHARIgKgGIgGgEIgFAFIgJAIIAEgQIAAgDIAAAAIgBADIgFANIgFgSIgMAAIADAGIgDgGIgGgBIAEgCIhliSIBgDdIAIgMIgDgDIgFADIACgGIgEgHIAHACIACgEIgMgLIAQACIAHgPIADAQIAMACIgIgIIANACIACgGIACAGIACAAIAIgRIADATIATABIgPAJIADAAIgEACIACAJIACAIIgJgHIgDAIIABAGIgDgCIgCADIAPANIAAAAIgBAAIgKgBIgJgBIgIASIgEgUIgUgCIAJgFIgEgGIgOAFIAPAjIhdi4IAFANIAlBpIASAuIACAAIAKAAIgHAGIgDACIASA0IgPgmIgLgIIgMAIIAFgNIgMgJIAPAAIACgHIhQi/IAeB2IgEgJIgTg5IAKAwIAbB4IAKAAIAGAAIgFADIgJAHIAFARIgBgCIAHAfIgDABIADABIAIAmgAi3GAIAEAAIADgNgADAFSIAAACIADgCIAAgCgAC/FNIABAFIACgGgADLFLIACABIADgBIgCgCgADXFEIAAADIAFgDIgDgCgADAE/IAFAFIAAgCIgGgFgADFE4IAFABIABgEgAi/EgIAHAHIAEgGIgHgIgAioEjIABADIACgEgAELEmIAMgBIACAAIgBgEIgEABIADgDIAAgBIgHgBIgHAAIADgDIAIgFIgBgIIgBgEIgIAHIgBAAIABAAIABAAIgBABIgFACIgDACIAAgBIgBABIAAAHIAAAEIgHgIIgBAAIAJAMIABgGIACgHgADnECIAOARIAAgBIgHgIIADABIAIABIACgDIADgFIABgCIABAEIAAAHIAAABIABAAIADABIABgEIACgJIgHgFIgIABIgBAGIgBAGIgFgLIgJACIgCAAIABgBIAHgGIAAgBIgGgKIABAAIAJAFIAHgGIACgCIgBADIgBAIIAKAAIAGgBIgCgIIgGgGIgOgCIAGgDIhthbIglggIAUAZIAMAPIA/BLIAgAmIAAABIABgBgABnCQIBHB6IALgIIgBgDIgEgOIAOALIACgBIAHgEIABgBIABgEIABADIABgBIhThbIgrgvIgCgDgADPD4IAFALIAJAAIgMgOgAEHDsIgBgDIgDgBgAD8DhIAHgEIgBgGIgBgBIABAAIgCgMIADAEIABgBIh4hWgAjyDBIgdASIAMAJIAIgGIAGgEIAAACIAAABIAIgHIBdhMgAEHDOIgCABIAGAGIACAAIABgEIgHgDgAEEDMIAFgMIgOgKIAHAAIhlhAgAELDLIAEgBIAAgCgAk8CcIACACIABAAIAFAAIAAgCIACgEgAlDCeIADAAIgCAAgAlKCbIACAAIgBgBgAGMASIAFADIABAAIABgHIgGgBgAGTAOIABgCIgEgCgAE3AMIAIACIABgCgAGCAMIABABIADgCIgDgBgAFIAFIAoAAIgJgCIARgEIgBgJIAAgGIgIABIABACIgEgCIgTADIgDAEIgEAEIABgEIAAgDIguAFIhMAIIgXACIBcABIAmAAIADgFgAGKACIAJAAIAEAAIAAgCIgDgBIgCgBgAGJABIAAAAIAAgBgAD2gRIgiAHIB/gKIAAgDIgBACIgBgDIgFgCIgLgEIANgDIAAgBgAEdgqIhBARIBogPIgMAAIANgJIADgCIAAgCgAC6gfICLgdIgEgKIALAIIAKgCIgIgMIgSAGIAMgPIgKgOIgIADIgFAKIgCgHIgwAUIhWAlIgKAEIBmgagAlAhyIAMAIIgFABIA7ATIBsAkIg3gaIhzg5IgEAIIADgDIgBAGIAKAKIgMgCgAE3hhIAHgDIgBgBIACABIACgBIgJgBgAhvhxIhph5IAAABIAJALIgNgEIgHAKIB0BngAk5iMIgDAGIAOAGIgFgNgAgfl6IAdDFIACAYIAAgmIgBiFIgBAAIABAAIgBg3IAAAAIgCASIgJgQgAEEimIAGgDIAAgBgABdjaIgPA0IAqhkIgBACIgDgOIAAgDIgFgBgAkIjbIACAAIABgEIgBAAgAD8kKIACACIADgDIgBgBgAEBkOIAAACIADgDgAEEkVIAFAAIAFgGIgGgBgAD4kYIABADIAFAAIgCgIIgFgBgACvkaIADgHIgBAAgAEMknIABABIAHAGIAHgJIAAgFIgCgBIgIgCgABxkiIACgBIgBgEgABtlMIADAFIACgGgABnlVIAFAHIADgCIACgDIgEgJgADXHVIAAAAIABgQIgDgBIgHgDIgDgBIgBgBIAEgBIADAAIAHgCIACgQIADAGIABABIAEAGIAPgEIgKAMIAHALIACADIgCgBIgHgDIgCgBIgEgBIgEAFIgGAHgAEBHEIAAgDIgPgHIAPgDIACAAIAAgGIABgLIAJAPIAQgEIgHAJIgCACIgCACIACACIAHAMIgBAAIgGgDIgJgEIgLANgAj1HCIAAgBIgOgDIANgFIABAAIgBgHIgBgIIADAEIAHAHIAJgEIAEgCIgIANIAJAIIACACIgPgDIgHANgABLGxIgRgHIASgEIABgTIAKAQIASgFIgMAOIALAQIgSgHIgMAPgAAJGmIgJgDIAIgEIAAgEIgIAHIAEgMIgHgGIgFADIAHgOIgHgHIgFgDIgIAHIgGAEIAFgRIgKgGIgGgEIAHAAIALgBIAAAAIAFgRIAGARIAQgBIgLALIACAIIADAAIAGgOIABAFIABAHIABADIAOACIABAAIgBAAIgMAHIACAJIALAAIgKAHIACAGIAIgDIgGAJIAHAJIgLgDIgGAJgAgBGPIAGAAIABgCIgCgCgADQGKIgDgCIgJgGIANAAIACAAIACgKIABgDIAFANIAOgBIgCACIgDADIgGAEIAAAAIAFANIgMgIIgLAIgAEQGQIACgIIAAgCIABgGIgOgIIAOgBIACgDIgBgEIgDgHIAGAEIAAgDIACgEIACAFIABACIAAACIACgCIAEgCIADgDIgBABIgBAGIgBAEIACABIAEAAIADgFIABAEIADAAIAAAAIgDADIABAFIAAABIAMABIgLAGIADANIgFgGIgEgDIgBAAIAEAGIgHgEIgHAEIABgCIABgCIAAgCIgDgCIgDADIgHAHIgBABIgBAAgAlXGLIgEgJIgPABIALgJIgCgGIgDAEIAAgPIgPgFIAOgFIgBgQIAEAEIABACIAGAHIADgBIAAgBIABgCIgHgFIgIgGIASABIAEgIIACgKIABABIACAIIADAJIAHAAIALAAIgCACIgNAIIAGARIAAABIgEgDIgLgIIgDACIgFADIAEAEIADAEIACgBIgBADIABACIgBgBIgCAJIAMAIIgOABIgDAJIgBAEgAlfFwIAHAEIADgCIAEgEIgDAAIgHgDgAhdF+IgLgCIgCAAIACAAIAKgFIgBgMIAHAJIAMgFIgHALIAEAEIAFAFIgFgBIgHgCIgGALgAiQF9IgKgDIgBAAIABgBIAKgDIgBgLIAIAIIAKgEIgGAKIAHAIIgLgDIgGAKgAk0F3IgBABIgIAGIADgLIgCgBIgHgGIAIABIAAAAIACAAIACAAIACgFIABgGIADALIAMAAIgJAHIADALgAh7FhIgTgCIARgKIgDgSIANANIANgHIAEgCIgIARIAJAJIAFAEIgGAAIgMgCIgBAAIgJARgAFAFwIABAAIABACgAE9FsIgJgJIABgBIABAAIAIAKgAEAFdIgDgBIgLgBIANgHIgBgFIgCgIIAIAHIACACIAFgCIABgBIAGgDIgBACIgFAKIAKAKIgNgCIgHAMgAkLFjIgHgMIgTAFIAMgPIgKgRIATAIIAMgPIgCATIATAHIgTAFIgBASIAAACgAFuFVIgBgCIgLACIgEABIAKgLIgGgNIANAGIAKgLIgCAPIAOAGIgPADIgBAPgAEvFdIgCgCIAAgDIAFAGgAEjFPIAAgDIAGAHIgBACgAE0FEIgHAEIgCABIgEACIABgCIAEgJIACgDIgIgGIgBgCIgCgCIACABIABAAIABAAIAKABIAEgGIADgHIACAPIANACIACAAIgBABIgMAGIADAOgAF0EUIgBgBIgDgIIgFABIgKAAIAMgKIgFgPIANAJIAMgJIgEAPIAMAIIgFABIgKAAIgDAKIgBAFgAFREEIABgKIABgFIgJgEIAAgBIgEgCIADAAIALgCIAEgSIgNgFIACgBIgFgDIARgDIACgRIAJAQIARgDIgMANIAAAAIAIANIgBAAIAAABIgNgHIgHAIIACAFIAPgCIgLAKIAHAOIgOgHIgJAKIgBABgAEvDgIgPAGIAJgNIgKgNIAQAEIAJgNIAAAQIAQAEIgPAGIAAAQgAnWDBIgLgDIALgEIAAgLIAGAJIAHgCIAEgCIgFAHIgCADIACACIAFAGIAAABIgBgBIgEgBIgGgCIgGAKgAHDDAIABgBIAYALgAG0C7IACgBIAAACgAFqCeIACgFIABABIAAAFIADgEIA5AZIgDACgAG1CfIgBgCIgCABIgIABIgBAAIABgBIADgDIADgEIgDgGIgBgEIAJAFIAJgHIgCALIAJAFIgFABIgDAAIgCAAIgBAEIgBACIgBAFgAn/CRIgTABIAPgMIgHgRIANAIIADACIAPgMIgDALIgCAHIAQAKIgTABIgFATgAnCCUIABgCIgDgBIgCgCIgGgDIAMgBIAEgMIADAKIABABIAMgBIgJAIIABABIACAFIACAFIgCgBIgJgFIgDADIgGAFgAGDCNIgBgCIgEgIIgOADIAJgKIgDgHIgBgCIgCgDIAMAFIAHgHIACgDIAAAEIgBAJIABABIALAFIgNADIgBAHIAAAFIAAABgAEtBvIAAgCIgHgBIgEAAIABgBIAIgEIAAgBIgCgJIgBgCIAEADIABABIABAAIAKgBIAAgBIABgDIACgKIAFAMIABABIADAAIALgCIgEAEIgHAGIABAAIAFAMIAAABIgEgCIgIgFIgCABIADACIgFAAIgEAEIgDACIABgDIABgEIgBAAIgCADIgDAHgAnLBlIgQAKIgBAAIABgBIACgEIgKgHIgBAAIgMAIIABgCIAEgMIgMgIIAPAAIACgGIACgIIADAHIAAACIACABIAMABIAEAAIAFgLIADgHIABAGIADANIAOACIAJgEIgCgMIAHAHIABACIAHgDIAFgCIgDAFIgDAGIAIAJIgNgDIgEAIIgCADIAAgDIAAgKIgFgBIgCAAIgFACIgEADIgGADIAFATgAnYBbIgFADIAEALIAEgJIABgDIgDgDgAGbBkIACgHIgEgDIgHgEIANgBIADgMIAEAMIAOgBIgKAIIABACIADAKIgKgHIgEAEIgGAFgAmEBZIgNAFIgDABIACgCIAFgIIADgEIgDgEIgHgJIAQAEIAJgNIAAAAIABAQIAQAFIgQAGIAAAQgAH0AuIAAgBIgKAAIgKAAIAPgLIgFgSIAPALIAPgMIgFASIAEADIALAIIgTABIAAAAIgBACIAAADIgEANgAGJA4IAAgBIAJABIADABgAF4A3IAEgCIADABIABABgAndAqIAHgBIAAABgAmxASIgBAAIgLgDIAEgCIAHgDIAAgGIAAgDIAAgBIACABIACADIAEAEIALgFIgHAKIAIAKIgLgDIgHAKgAnXARIAAgCIAAgCIgBAAIgKgEIALgDIAAgFIgRADIAEgEIAIgGIgIgPIAPAIIABgBIACgCIAJgJIgDAQIAQAIIgRABIAAABIAAACIAJgCIgIAJIABADIAFAHIgLgEIgHAJgAlVALIADgJIAAAAIgQgIIATgBIADgNIACgFIACAFIAEAKIAAACIATgBIAAAAIgOAKIAAABIAAAAIADAJIADAIIgMgIIgDgDIgEADIgLAJgAmpgMIgDgGIgPACIAKgLIgIgNIAPAGIAFgGIgCgJIAHAFIAAgBIAAABIAGAFIANgJIgGAQIANAKIgPgBIABAAIgDAAIgFAPIgEgNIgDABIgCAMIAAADgAGugaIAzgEIgBABIg1AHgAHqgfIAQgBIgQACgAlWg2IgLADIAFgGIgGABIAHgIIgFgHIAHADIgFgJIgGABIgCALIgFgJIgLACIAHgIIgEgHIgBgDIAKAFIAHgIIAAAJIgBACIAKAEIgBAAIAJAFIAEgFIAGgGIgBAHIgBAIIANAGIgMACIAHADIgKACIgBAKIgCgEIAAAHgAGgg1IAfgEIAZgEIg5ALgAm1hFIgLAAIgEgBIADgBIACgBIADgCIAFgDIgBgCIgCgNIAKAKIABAAIAFgDIAAgBIAAgCIgBAAIABgBIgBgCIACABIAAgCIAHgIIAAgBIgDgEIgFgHIgBgCIACABIABAAIAJADIADABIAFgGIAEgGIAAgBIAAACIAAAEIAAAKIADABIAIgDIAAgQIAJANIAPgFIgJANIAAABIAJANIgPgGIgDAEIgGAKIAAgRIgDAAIgIACIAAARIgFgJIgEgFIgGACIgHACIABACIABAAIABAAIADgCIgCAEIACACIALgFIgHAKIAIAJIgKgDIgBABIAEAEIAAABIgHgBIgDAFIAAgFIgEgBIgGAOgAnWhDIgLgKIgOAIIAHgOIgJgIIgDgDIAEABIALABIABgCIABgBIACgFIADgHIABAJIABACIAAABIABAEIACAAIAOABIgLAHIAAAAIgCABIAAABIABAFIACAIIAAACgAF3haIgJAFIAFgKIgFgFIgCgCIACAAIAIACIAEgIIABgBIABgBIAAABIABAEIAAAGIADAAIAIACIgFACIgFACIABALIAAAAgAHdhkIAEgMIgNgIIAGAAIAIgBIABgFIgKgIIgBABIgCABIgCABIgEADIgFACIAGgMIAAgCIgDgDIABACIgCgBIgHgFIgGgEIgNAKIABgDIAEgNIgOgKIAMAAIAFAAIADgHIABgGIABgEIAFANIABAEIABAAIADAAIANgBIgOALIACAHIAJABIACgCIABgEIADgJIACAHIACAIIAPABIgMAIIACAMIACgHIAGANIAPgCIgGAFIgGAFIABADIAFAKIgJgFIgDgCIgKAJIgBABgAFbhxIgFgFIAAgBIgMAEIAHgJIABgBIgIgJIALADIAHgKIAAAMIABAAIAFACIAGABIgLAFIAAAIIAAAEgAm8iEIgEgEIgGgJIgRAGIAKgPIAAgBIgKgNIAJADIAAgJIgQgGIAQgEIABgMIAAgEIABACIAFAGIADAFIAHgBIAGgCIADgFIABAFIAAAHIAAAGIAJACIABAAIACgHIgDACIAGgKIgHgJIgBgBIABABIALACIABgCIAAgBIgDgEIgBgCIgCgBIgDgDIAQADIACgFIAGgJIACANIAAADIACABIAAAAIAHABIAHABIgDABIgMAGIgBAAIABADIAAADIAGgDIACgBIAAACIgFAKIgDAEIAKAJIAHgEIAFgDIgCAEIgFALIgBACIANAMIgPgCIgDAAIgBACIgHAOIgDgSIgHgBIgEAAIAAADIgFgEIgBAAIgBAAIABgBIgBgBIgFgEIgFADIgBAAIACABIgGABIgCABIABAFIgBgCIgBgBIgBAAIABgBIgBAAIgHACIAAALIAAAGIAAACgAmeikIABAEIABACIAAADIADgBIAAgCIgBgEIgBgDgAmyimIAAAEIAAAFIAAABIACgEIACgFIgCgCgAmVifIAEgCIgBgEgAnLikIACABIAFgHIgBgBgAmii3IABAFIADgBIgBgFIAAgBgAmWi9IgCABIADADIADgBIAAAAIgDgDgAF2ieIgRAFIAKgNIgFgJIgEgFIAIADIAIACIAIgLIACgCIAAABIgBALIADgBIABgJIABgGIAFAIIACAFIAPgDIgKALIAIANIgPgGIgKALIABgIIgBAAIAAARgAFJieIgGgIIgBgBIgDABIgCABIgHACIAIgLIAAAAIgGgHIgCgEIAMAFIAJgLIgBAMIAAABIAGACIAHADIgNAEIAAAKIAAADgAltiyIgNgDIAFgCIAIgDIAAgEIgBgFIgBgFIAJAKIADgBIgDgKIgDgIIgOgBIgDAAIgEAAIAEgDIAEgEIAGgGIAAAAIgIgRIAMAGIgCgFIAIAHIANgMIgEARIAFgDIABAAIAIgFIgHAOIAKAFIgIABIAMAKIgJgBIgKgBIgDAGIAAAAIgDAHIgBADIABAAIAIgEIgIAMIABAAIAIAKIgNgDIgBABIgGAKgAHLjMIAAgBIgBgBIgIAAIgGAAIALgJIgFgOIANAJIACgCIAAAAIAJgIIgEAPIAKAGIACABIAAABIgFAAIgEAAIgFAAIgEAPgAE6jTIALgHIgKAIgAmxjVIADgMIAAgBIgLgGIANgBIACgHIABgDIAAgCIAAgBIAAABIACAEIAAACIADAFIAMgBIABAAIAAAAIgKAIIAFAMIAAAAIgLgGIgKAIgAF/j4IgIAEIAAAEIgHgJIgLADIAHgJIgHgKIALAEIAHgJIAAAJIAHACIAGgLIABAMIALADIgKAEIABAMgAF3j8IAAAFIADgGgAkfj+IgGgCIgGgCIAAgBIAAAAIAJgCIADgBIAAgCIABgLIAHALIAEgBIAJgDIgGAHIAAABIgCADIAHALIgNgFIgIAKgAmCkNIgKACIgEABIAGgGIACgCIgBAAIgHgCIgGAMIgBgNIgLgCIgDgBIADAAIAFgDIAFgCIgCgNIAJAJIADgBIAJgEIgEAGIAFACIAAAAIAEACIAGgGIAFgFIgBAIIgCAHIAOAGIgLACIgDABIgCAPgAmMkbIAAABIAFAEIABABIAAAAIgBgCIgDgEIgBgCgAjgkQIgCgKIgIgBIgEgBIACgBIAJgFIgBgMIAIAIIAEgCIAHgEIgBgLIgBgFIALALIAOgHIgHAOIALALIgOgCIgCAAIgFAKIgCAEIgBgDIAAgFIgCgIIgEAAIAAAAIgCAEIAIAJIgMgDIgFALIgBABgAFukoIgGgFIgPALIABgBIAFgRIgPgLIAIABIADAAIAIAAIAGgSIAFASIAKAAIAJAAIgQALIADAGIADALgAlpk5IgEgKIgCABIgCAAIgJABIAJgIIgEgLIAKAGIAJgIIAAABIAAADIgCAHIAEADIAGADIgFABIgHABIAAABIgBADIgCAHIAAAAgAE7k+IgEgGIgDgEIgSAGIAEgGIAEgEIAEgFIgKgNIgCgDIADABIAQAFIALgPIAAAEIAAALIAAAEIAIADIAHACIAAABIADAAIgFACIgDABIgKADIAAAJIgBAKgAkMlFIgBgBIgBgFIgBAAIgNgBIAIgFIAEgDIAAgDIgIADIgIACIAAALIAAAFIgBgCIgFgHIgCgDIgBgCIgCABIgOAEIAFgGIABgBIAFgGIgCgCIgHgLIAJADIAFACIAEgDIAGgJIAAAOIAAACIAJADIAGACIgBgCIgCgJIALAKIAMgHIAAgBIAAABIgDAJIgCAEIALAJIgPgBIgDAJIgCAEgADXlVIABgHIgPgGIAIgCIAIgCIACgQIAFAIIAGgJIgGAKIABABIABACIACACIAKgCIAFgBIgLAMIAHALIABAEIgDgCIgLgFIgBAAIgBACIgBAAIgJAKgAjalXIgPAEIAJgMIgHgLIgDgBIgLALIACgQIgDgBIgBgBIgKgFIAMgCIAEgEIACgJIgCgGIALAIIABAAIAJgIIgEAMIAFADIAEgBIgCADIAEACIgHAAIgBACIgFAFIAGAKIACABIADgDIAHgJIgBAQIAPAFIgLADIgEABIAAAPgAC2lWIAAgBIgCgIIgBgEIgJgBIgEgBIAHgDIAFgEIgBgGIgBgHIACADIAGAFIACABIADgCIAIgEIgDAIIgCAEIAKAKIgOgCIgFALIgBABgAEHlwIgGAAIgBAAIgJgBIgFAAIADgBIAJgGIAFgEIgBgEIgDgIIgCgGIAAgBIABAAIAHAHIAFADIACACIARgLIgHASIALAIIAFAEIgEAAIgPAAIgHASgAhEl1IgGAAIgMgBIALgHIAEgDIgBgCIgEgPIAGAFIADACIAFAEIAIgFIAHgFIgFAPIgBACIABABIAMAJIABABIgBAAIgKAAIgHAAIgEALIgDAGgACClpIABgEIADADIgCAEgAE4l2IgDgDIgDgDIgKAGIAFgLIgIgIIALACIAGgLIABAMIAHABIAFAAIgIAFIgCABIAAABIACAIIAAADgAkwl7IgBgLIgSgEIARgIIgCgSIAJAKIADADIAAABIAFgBIACgCIAKgEIgDAHIgGAJIAAAAIAAAAIAMAOIgSgFIgKAQgACJl3IABAAIgBACgAAnmFIgCgCIgHADIgEABIAEgFIACgEIgBgCIgBgBIgCgCIgDgEIAGACIAFABIAEgGIACgEIAAAMIAIABIADABIgGADIgEACIABALgACKmBIAEgOIACgBIgEAPgAiemRIgJgCIgHAMIgCgTIgHgCIgKgCIgDgBIADAAIAGgDIAJgEIgCgUIAOAPIAGgCIAGgDIAGgDIgEAHIgFAIIgBACIADAEIADADIAGgCIAFgCIgEAGIgCADIABACIAAAAIAGAHIAAABIAAAAIgMgDIgBACIgFAIgAkSmPIAAgBIABgDIABgLIgNgHIAPgCIAAAAIACgPIAHAOIAFgBIACgFIgKgKIAOACIABgDIABAAIADgKIABABIABAHIABAGIAOABIgLAGIgBABIACAEIAAABIACAIIgFgEIgDgCIgDgDIgBABIgJAIIAHAOIgLgGIgCgBIgLAKgACQmUIAJgbIgHAbgABlmjIgNAHIACgEIADgFIACgEIgCgCIgEgDIgFgFIAGABIAEAAIACABIACAAIAEgGIADgHIABAKIAJgBIACgOIAGANIAOgCIgKAJIAGANIgIgEIgBgBIgDgCIgCADIgIAHIABgFIABgFIgFACIACADIACALgAiBmoIgPAJIAHgRIgMgLIgBAAIABAAIAQABIAHgQIAEARIAFABIANABIAAABIgLAFIgEADIADARgAAcnGIgPgKIAFAAIACAAIALgBIABgDIACgOIAFAKIACAHIAEAAIANgBIgNALIAGAQIgIgFIgHgFIgCADIgLAIgAjcnEIgMABIAJgIIgCgFIgCgFIAEADIADABIACACIACgCIAGgFIABgBIgBAFIAAAAIgCAGIABABIAJAFIAAAAIAAAAIgCABIgBAAIgJAAIgBAFIgBAFIAAABgACvnKIAAgBIAAgHIgRgFIAAAAIgEgCIgKAOIAAgRIgQgEIAQgGIgBgRIAKAOIAQgGIgJAOIAGAHIAIgDIAAgRIALAOIAHgCIAFgCIAEgCIgCADIgGAIIgCAEIADADIAHAKIgQgFIgFAGIgFAIgAhKnFIgFgKIgBgBIgBgBIgSADIAHgGIAHgHIgJgQIADABIACABIAGADIAGADIAKgLIACgCIgDgBIgGgBIgIgCIAQgGIgBgFIgBgMIALAMIAAAAIAPgHIgIAPIALAMIgQgDIgBAAIgIAOIgBgPIgBAKIgBAHIACABIANAGIAAABIAAAAIgMACIgGABIgCAQIAAACg");
	this.shape_40.setTransform(-1.5,-1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#FFFFFF","#FFFFFF","#FFF03B","#F1753F"],[0,0.22,0.529,1],-1.1,1.1,0,-1.1,1.1,72.7).s().p("AisKDIAKgqIAxjgIAFABIgEgEIAliqIALgeIhBFIIgJAAIAIAGIgKAxIgDgBIADADIgHAjIgLA0gACoJsIADgFIABAEIgDABgACZJZIgIgXIAMgBIAEAJIgBACIgEADIAEAAIgCAIIAGgGIACAIIgKAEgACGIcIADgTIADgBIAJAcIgFgDIAIAUIgGAFIgCAAIABABIgBABgAj3H3IgFgLIARgOIgNABIAIgSIAHAKIgHACIAIACIgGANIgGAJIADgBIgEAIgAgHF3IABgBIgBAAIgJiQIAGCLIgMAAIgCgHIgCisIgIAAIAOhaIAdFoIgHACIAIADIACATIgEgBIAEAFIAAACIgLABIALAFIgDAFIgJAAgAANH0IAAAAIgCABgAB5HtIABgIIgEAEIgGgWIAHgDIgEALIAIgGIAHAUIgGAGgABtHLIAFgFIACABIgGAHgAjuHJIALgZIAKgGIAEAEIgCAFIgKAFIAHABIgHARIgDgDIAAAFgABmG0IAFACIgBAKgAkJGzIAHgNIgEACIAPgaIANACIgXAsgACdG3IgKgXIADgEIgEABIgZg7IAIgFIgKAAIgUgvIgmhpIBjDWIgBACIABgBIAEAIIgHAKIAKgEIAEAKIgBAAIABABIABABIgEABIACABIgFABgAhJGsIAHhGIAKAHIgFARIAGgEIgEA0gABTF2IAFgEIgGABIgkh5IgLgvIAUA5IA1CiIgJACgAE1GYIADgLIgHAGIgTgXIAIgGIACgBIgBAAIABgBIAaAeIgGANIAMgGIADAEIgKAJgAFXGVIgBgEIAKgFIAQAQIgEAEIgBgJIgHANgAn+GVIAFgEIgBAIgAjNGYIgDgCIAAgBIAFABIgBADgAjPGOIAAgFIABgBIAIAEIgEAIgAoCGQIABgBIAAACgAnuGQIABAAIAAAAgAjrF4IACAAIgCgBIACgDIACARIgQAIgAifGHIAPgtIAMACIgGAXIgBAAIABABIgIAXgAFUGGIgCgIIAKAJgAFIGFIgXgZIABgCIAKgDIANAVIAAgIIAFAFIgFAMgAjFGAIAGgFIgEAKgAngF5IADgDIACADIgEABgAjpFzIAPgbIAGAAIgEgEIA9hvIAhgwIg4BtIgFgEIACAKIgEAIIgKAEIAHABIgiBDIgFABgAiyFDIABADIAHgOIAGACIgXA3IgBAAIABABIgCADIgMABgAnWFvIABgBIgBAAIABgDIAHgBIgBAIIgIAEgAEYFvIgGgPIAAgEIAIAJIgEACIAHAAIAIAKIgHAAgAguCoIAHggIgPDaIgLABgAm4FiIAKgLIABACIgLAJgAEbFUIAGgGIAEAPIgBABgAiMFQIAJgSIgFADIAPguIAhhMIgrCSgAmyFOIADAGIgNACgAELFUIAAgBIABABgAmxFNIAmggIADAKIAEgOIAMABIAAAAIgvApgAD6FQIgLgMIAKgCIAGANIACgIIAFAGIgDAFgAEJFBIACgCIAJAGIgBAGgADgExIAFgFIAIAGIAHAHIAAAAIABABIgHAIgAEFEuIAHAHIgCADIgHAAgAilEwIAHgNIgGADIAYg0IAbgwIgwBygADvEkIAIgGIABABIABAEIABgCIACACIAHAIIgCAAIACACIgGAGgAlcErIAGAAIgKgIIAQgPIADAJIADgMIANgCIgJgEIAfgdIACAFIADgJIAHgGIAMAAIgGgFIBFg/IAtghIi2CvgADSEhIALAGIgBAGgAjcEmIADgEIAIgEIAEAFIgFAJgAC6EDIAFgEIAQASIgBACIADgBIALANIgLAAgAhnEeIAWhAIgPBBgAjKEbIADgBIgCAEgADjEPIgBAHIgDgDIAAgHIACgBIAAACIADgDIAHAIIgEACIAHABIAFAFIACACIgMABgAhuEcIAchkIAJgUIghB5gAlgEKIgJAGIAEgDIANgKIADAHIgJAIIACAAIgJAIgACpERIAFgEIAGADIgHAGgAjLETIAAgHIBeiRIASgUIgKASIhfCcgADpEIIAAAAIgBAAIAAgBIAIgHIABAEIgGAGgACkEJIAAgCIABAAIgBADgADeEFIAAAAIABABgAlVEBIAqgeIABAAIABADIgdAZIABgCIgKAIgADQECIgJgKIAIgBIAFAKIABgGIAFAFIgDAEgADeD9IgBgDIgBACIgGgGIAIgBIAHAFIgCAJgACuDvIABgCIAMANIgIABgACkDTIg+hMIBmBqIgGAGgABFCHIgYgoIADACIBzCRIgDACIgOgMIAEAPgADZDmIAIAIIgKABgABaCQIBUBcIgBAAIgCgDIgBAEIgBACgADHDmIhthuIgVgYIAmAfIBtBmIgHAHgAH4DVIACgDIAIACIgCACIAGgCIACABIgCAGgA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AIgIIABAJIAJgRIALACIgZAUgAmAkIIgNgJIAMACIACAHgAl1kNIABABIgBADIgDAAgAnXkLIACgGIADACIgEABIAIACIABAAIgGADgAmXkYIAMgDIgOgGIABgHIADADIAAACIABgCIAPAMIgLAGgAnfkXIADACIgEACgAEkkaIAUgSIgBABIAPgKIAGAEIgiAdgAn2khIACAGIgOgHIADAFIgggSIgFgDIADgHIAAAAIABgGIAKAGIAaAQQACAFARAHIABAAIAAABIgEADgADIkeIAHgJIgDAJgADVkmIAFAAIgEAFgABikpIAIgPIgDACIAMgbIAIABIgUAtgAj2krIAAgBIAFABIABAIgAmlkmIAAgBIgBABIgFgDIAEgGIgIAEIgXgRIACgFIgFADIgRgNIgEgNIAEgDIA+AwIgGAGgABRkvIAAADIgBABgADYkyIAAABIgCACgACBk5IABAFIgGAEgABTk4IABgEIAIAHIgCAEgAkNlLIALgIIAOAUIABAKIgHAEgAFQk8IAPgLIAAAHIgNALgABZlDIAIgFIAAAGIgFAMgADek6IAMgOIAGAFIgBAFIgEACIgCAAIAAABIgHAEgACEk/IAQggIAAABIABgCIAIABIABAFIgEAHIgCAAIACABIgNAYIgCABgAo4k+IAEgEIAFADIgBAGgAC3lIIANgJIgLARgAiHldIACAAIAIAagApBlDIgKgGIABgCIAKAEIgBAEgAFXlHIAGgFIADABIgBAEgABZlMIADgKIADABIABAJgAAqlNgAApldIABgBIAEACIgEAPgAhllhIAJAIIgFAMgADxlRIAHgJIgDAJgAC3lSIAIgLIABgDIALAGIgGAJgApElVIADACIgEABgAB2lZIAnhaIALABIgXAzIgDgDIABAHIgEAKIgHADIAFABIgMAagAEAlbIAHABIgFAGgAgFldIAAgCIADgDIACADIAAAGgAgZldIABABIgBABgADHlnIALgNIgGACIAGgKIABABIgCACIAEAAIAHAFIgPAXgAF8loIgCAHIASgNIAFAEIgOALIAEgFIgWAGgAhQlgIgEgcIAKAAIADAdgAhmliIgFgbIAFAAIAFARIACgGIADARgAgZlmIABgfIACAEIABgJIAEgBIgEgCIABgIIAIgBIgCApIgGAAIAGAEIAAADIgDADgAAoloIAAgBIALg0IAHADIgBAMIgJAogAAAlvIgDgJIABgUIAFgDIACABIgDAfgAEMlzIAJgLIACAAIADACIgBgDIAKgCIACADIgCADIgBAAIgCgFIgCAIIgDACIgCAAIAAABIgJAFgACgl2IAdg5IALACIgIgIIAFgJIAMAGIgEAHIgGABIAFACIgPAcIgIgBIAGAEIgMAWIgLAGgAGZl2IASgNIgPAAIAQgOIACABIgBgCIABgBIAJAJIgIAHIAAAAIgNALIgFADgADel5IACAAIgBACgAhVmGIgBgDIAFgQIgGAFIgCgNIgBgJIABAAIAFANIADgOIABAAIAGAugADbmFIAFgDIABADIgFAEgAhvmQIAGAFIAAADIgEADgAE0mQIAHgOIAFABIgLANgAEymRIAAgGIABAHgAgBmXIABACIgCAEgAhnmVIgBgDIACgBIABAHgAGumTIABgBIAAAAIACABgAi0mcIABAAIgCgCIACgDIAFAMgAgBmcIAAgEIACACIgBgHIAAgKIAHgHIgHABIAAgSIADgCIAHAEIgEAkIgEAHgAHJmqIgDAMIgNACgAgRmgIAGgEIgBAHgAhrmiIgBgHIADgBIACAIgAi9mnIgCgGIAFgIIAGAQIgGACgAkamsIAFgCIACACIgDAGgAFCmqIADgGIAGAFIgCAEgAh5nBIABgFIAKAAIACAHIgFgCIAGALIABAEIgDAEIgCgFIgFALIAAABgAjnm0IAFgDIAFAMIAAAAIgGADgAA1mpIADgOIADAEIAAAGIgDAEgAgYmuIACABIgCACgAHkm1IAGAAIgJAIgAFBm0IACACIgFACgAkQmxIAAAAIAAAAgAgYnHIAOAAIAAAJIgDgFIgDAPIgIABgACknDIACALIgIAEgAjEm7IAGgEIADAGIgHADgAhZm6IABgMIgFAHIgFgdIAMgCIACANIgFAEIAFgBIACASIgEAEgACqnBIABAGIgFADgAA+m6IgCgEIAAAEIgDgBIAKgzIAFgBIAEAIIgIAnIgDAGgAjqm/IgEgPIACAAIADAIIgBAAIACABIADAHgAiWnBIgCgGIAMAAIACAIgAj4nJIABgEIAIgBIgFAOgACunHIACgFIAEAAIgDAIgAjInHIgHgUIgDAKIgPgoIABgDIgCABIAAgBIALgHIAWA8gAikn2IAEADIAAAFIAIgIIAJAmIgKAGgAj1nUIAEgEIAFAJgAhznTIACgFIAAABIABAHgAC4nYIACAAIgBACgAkAnbIgBgBIAMgGIABAEIgFAEIgFABgAAHnaIgCgGIAHgDIAAAJgAj0nbIABgCIABACIgCABgAh/ndIgGgbIAHAEIABACIgDgCIAJAQIgHAIgAhjnmIgBgHIABgLIACAQIAIgPIAAAAIADAYgAC1nqIACACIgDABgAAEnpIgBgMIADgqIAJAGIgIgUIANgLIgHBRgAC4nvIALgbIAGgNIAIgTIAKAFIABAEIgDAGIgIAHIAFAAIgFALIgHAOIAAgCIgKAQgAh6nxIABgNIABAAIADAQgAinoDIAFgFIAGADIgEASgAhmn5IADAAIgCADgAjpoMIAMgFIACACIAAAAIgHASgAhboHIgLgNIABANIgDgCIAAgBIADgRIgFAFIgEgcIAOgCIAFAtgAi4o9IALgDIADgBIACAJIgDADIAEgBIAEARIAEAUIgMABgABRoiIgGANIACgLIAJgLIAFACIgEAUIgEAAgAAIpCIABgQIABgNIABgQIAOABIgBAJIgCAYIgBAIIgBALIgMAAgABVpJIAHgjIADABIADAUIAFgKIgFAaIgKACgABcpuIACAAIgCABgABpqCIABgDIACABIAAABIgDACg");
	this.shape_41.setTransform(1.9,-0.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFCB40").s().p("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AQAOIgBAEIgKgBIgMgBIgBADIgEAIIAAABIgGABIAEACIgEAKgADTIaIAMAFIgUAHgABNIcIABAAIAAAAgADJICIAWAGIADgFIABgBIgCAKIgNADgABYIHIADABIgBACIgEAAgAFzH6IgEgDIgEABIgDABIgBgHIANgHIgPgCIgBgHIADgDIAGABIANgXIgPgNIAEAAIgGgFIAYADIAFgJIAGgMIACAIIACAQIAYAEIgVAMIAAABIAEAWIgBgCIAAADIgFgGIgLgKIgEACIgJAFIABAIIAWAEIgVAJIABABIABAOIABAHgAEBIGIgHgDIgBAAIACgCIAIAGIgCAAgAm3H/IABACIAEgSIAIAAIgCATIgGgLIgEALgABcIBIABgCIAAADgAFdH8IADACIgFACgADuH/IAAgBIADAAIAAACgAjMH2IAIgNIADABIABAOIgFABIgLAEIgDABgAFfH4IAAAAIAFAEIgDABgABYH4IABACIAAAAgADqH3IABgBIAAABIABACgAoXHkIgSgLIACAAIADAAIAQgCIAFgUIAIATIARgBIAAADIgIAHIgOAGIAMACIAGAQIgSgMIgQANgAnPHyIAJgLIgSAAIAQgLIAAAJIAEgGIADAIIgNALgACwHnIgCgIIACgKIAFgDIACAAIgDAAIACAcgAmWHqIACgCIACACgAmgHpIgGAAIgCAAIgHgEIACgLIACABIgBgDIABgEIgDACIgFgHIADgDIgDACIACgDIACgEIACgCIALAIIgEAMIAGAFIAKAIIgCAEgABgHoIAAAAIACAAgAB3HoIAHgIIABAAIABgCIgBAFIAAAAIgBAFgAjPHbIgEgGIAGABIALAEIAAAHIgGADgACQHcIAFgIIAFADIgCAGIgHADIgGADgAkVHfIACgDIACAFgAFXHdIAJABIgBABIgFABgAnBHbIAEgGIAMADIgIAHgAFjHfIAAgBIACABgAkrHaIABADIgCABgACLHNIABgKIgEgCIgSgHIgCgBIACgBIAOgDIAJgCIABAAIACgbIAOAXIAQgEIAEgFIAAAEIACAAIAEgBIgDAEIgDADIABAKIgJAIIgOgKIAFAMIgDAIIgCABIgDAAIABgCIAAAAIgCACIgMAAIAHAGIgEAFIgFAFgADdHTIAEgGIADACIgGAMgAktHJIAGAAIAFgRIAGAQIASgCIgOAMIABACIgIADgAFCHFIAGABIgMgMIAIgPIgJAFIgHgUIATAMIAMgIIAHgFIgDAKIgEAMIASANIgXABIgHAWgAmcHEIgBABIgBAAIgDgIIAHgEIAMAEIgBAWIAAABgAk4HKIAKgBIACAIgACzHHIACgFIAKACIAIACIAHADIgPAFgAEWG/IAHgJIgQAEIgJgQIgBAMIgFgEIgBgBIAFgKIALAJIgFgVIAEgDIgDAAIAHgDIAAAAIAAAAIAFAJIACAAIADgFIgHgGIAGgEIAFABIgBACIAHgEIAGAEIgDAMIAPgMIAAAAIADACIgIAEIgBAGIACgBIgCACIAAACIgBgBIgCACIABABIADABIgDABIACAHIgGgFIgCABIgJAJIAGALIgJAFIAMABIAEAIgADMHHIACgBIAHADgAESHCIABgBIAAADIAAABgAluHBIAAgCIAMgDIADAFIgFgEIgIAHgADdG3IAAgBIABAAIABABIgBABgAlHG2IADgCIgEAEgAlzGzIAEgEIAEAAIABABIgFAGgAIUGkIgPgEIANgFIABgBIgBgKIgBgFIALALIAOgGIgIANIALAMIgOgDIgBAAIgIANgAk0GlIgMAMIgHgCIACgEIACgOIgOgIIAAgEIgDADIgCgBIABgEIAVgDIAEgVIACABIgEALIAJgHIAGAOIAKgCIAAAAIAIgBIAAAHIAAAAIgRAGIAIADIgCABIANAZgAmlGwIgBgCIACgDIAOAFIgDAAgAmZGlIAJgPIAAAHIACAQIAAABIgEABgADuGrIABgBIABACgAm0GoIgBgBIABgBIAEABIgBAEgAD7GnIAEgBIgEACgAnhGnIABgJIAAgCIABgBIAIABIAAACIgFAEIgFAFIgBABgAllGiIAAAAIAAAAIAAAAIAAgDIACAEgAndGPIgWgLIALgBIABAAIANgCIACgQIABgBIAAgEIABgEIABADIADAGIAEAIIgGAFIAHgBIADASIgIAEIgDgHIgBAJIgJAFgAlcGQIAFgBIABAEgAEnGMIABAAIADADIgBADgAEZGPIADgCIgDAAIADgDIADACIAAACIgGABgAEQGNIACgCIgBACgAEKGMIAAgDIACADgAkWGFIACAAIgBABgAnHF+IAJgCIADAHIgEADgAFJGCIABABIgDAAgAmgF4IgKAKIADgGIgHAEIACgJIAMgDIgSgIIABgFIAIgCIACgLIABgKIAEAHIAFAMIACAAIANgCIACAEIgLAKIAAABIABABIgBAAIABAAIAJARgAEtGAIgBgFIADgDIAAAAIgEAAIAAgEIgDAFIgFAAIgCgBIACgFIABABIAEgEIAHAIIgCgOIADgCIAAACIAEgCIAAABIAAAFIgBgBIgEATgAE5F8IAHACIgGABgAm0F7IABAAIgBABgAlUFyIADABIgEAEgAENFrIAKAEIAAACIgGgDIADAHgAEbFxIABAAIACABIgCABgAlNFwIgCABIgEgEIACgHIADgDIALAJIgCgCIgJAIgAk5FxIgGgDIgGgRIANgIIAOgCIgRAOIAFALIgCAFgAk7FxIAAAAIAAAAgApJFgIgQAFIAKgNIgBgCIgFgJIgCgDIAEACIAIADIADABIgBAQIAKgMIAAAAIANAFIADABIgMAEIgEABIgCAQgAHYFmIgJgBIgFgFIAFgCIAIgBIgDgDIABgBIgEgTIAMALIADADIAMgHIgDAOIAAABIAAABIgBAFIgPAJgAHtFoIADgGIAHAHgApnFjIgEgGIABgBIAHAJgAHsFgIABAAIgEACgAoLFFIgIAAIgLgBIgFAAIgBgCIAKgHIALgHIAAgCIgBgCIARAOIgGgCIAKAQIgKAVgAlhFaIgCgCIAFgBIAHAGIgBACIAAABgAIcFLIgIADIgDgIIADgEIgDgFIAHgFIADAAIADgEIACgDIAAgBIAFgFIAAAGIAAAAIABADIAAAGIAAABIADABIAPAEIgSAGIABATgAqXFWIAUgHIAAgDIgBgHIgGAGIADgMIAEgKIgKgGIgBgCIgIgFIAXAAIAHgWIAHAWIAGAAIACgCIgPgXIAPAGIAKADIAKgMIAAAEIAAAAIgBAIIAHgHIgBAOIAKADIgBAKIgJADIAAACIgOAEIgCgCIAAAAIgNADIACAFIADAJIAEgBIgDAEIABAEIgCgCIgDAFIgIACIgEgFIALgFIgHgFIgFgEIgFAEIgDgGIgCAZIgQAEgAlIFTIgDgJIACgKIAIATgAmWFPIgIgGIgIgGIgRAMIAGgUIgRgMIAGAAIAEAAIAMAAIAGgVIAHAVIANAAIADgLIgOgJIAQgBIAEgPIAGAOIAQgBIgCACIAMAIIAGgEIABAAIgMAMIAPgCIAAAAIADACIABABIgQALIAIAAIgDAOIgEgJIgDgIIgJABIgIABIgBAAIAFgEIgNgHIgGAFIADAAIgRAMIADAKIADAJIAAACgAl/EiIAGAPIAIgHIgGgPgApTFGIgIgMIAKADIAAAJIAAACgAn9E/IgFgVIADACIAVgMIACAAIgKAYIADADIAHAGIgEAFgAKhE5IAEAFIgEAHgALCE0IAAgKIABACIABAJgAGNEmIgDABIACADIgFgCIgNAFIAFgJIgCAAIgJALIAAgGIAAgEIASgHIgPgEIADgLIAKAAIAHACIALgSIABAVIgRADIAHACIgDABIAPAGIgBABIABAEIgCANgAKhErIAAgBIgKgDIgQgGIADAAIACgBIAIgCIAGgCIAIgDIAAgcIAQAYIAagIIABgBIgBABIgLAOIAAgFIgRAZgAIkEqIABgBIAAABgAFzEYIAAgBIAAACgAoWDjIgJgCIAEgEIgMACIARgGIgBgJIgBgJIAAgBIABAAIAGAIIAFAHIAIgEIACgBIAHgCIgDAFIgCADIgFAHIAMAOIgSgEIgHALIgDAEgAIODeIgBgCIgIgCIgOgDIADgBIAKgFIgGAHIANgCIAGAMIACgNIAGAAIARAKIgBADIgCgBIgFACIACgCIgJgCIgCADIgJARgAJPDpIAAgGIAAgFIAAgFIAAgCIASgQIggADIgMgdIgDANIgLADIAKADIgDAMIgBAAIgBgCIAAACIgVACIgCgBIACgOIgKAJIgDgCIABgEIAAgCIgBgGIgQgLIgCgCIAZgBIACgGIAEgMIABgGIADAHIAFAQIABABIAEAAIAGAAIABAAIgBgBIgGgJIAIADIAIADIAEgFIAGgJIABgBIAAADIAAAJIAAABIAAAFIAHACIAEACIAFACIgKADIAAADIABAPIAEABIgBABIACAAIACAAIABAAIAAgBIALgEIABABIARgFIABACIgKAOIACADIAKANIgUgGIgCADIgJANIgBABgAIZDGIgCAAIACACIAEgBIgDgCgApYDZIgXgEIAQgIIASAPIgBAHIgBADIgGABgAG2DAIAAgBIgCAAIgWACIAIgGIADgDIACgCIAFgEIgCgGIgEgJIAIgBIACACIAEAIIABgFIACABIADgCIABgBIAEAHIgLANIAQgEIAFAIIgJABIAAACIgBAEIAAABIgEAQgAnKDKIAEABIgFAFgApJDGIgBAIIgUgBIAEgDIgDgUIAAgCIAHAHIABABIACACIAGAGIAGgDIAGAEIgEAKgAnKDFIAAgBIAAgFIAFgGIgEACIAAgDIgOgFIgDgBIgGgDIAYgGIABgWIADADIACADIgCAJIAGgEIAEAHIAJgCIAAAGIgBgBIgBAWIgEABIgEgCIgDAEIgMADIAHADIgDADgAJPC9IAAgJIAEAEIABADIgFAGgApDC/IAEgCIACAAIgCACIgGABgAHSC2IAKAGIgDABIgIAAgAo6C7IACgBIgBADgAmxCqIAFgIIAKgDIgMAPgAHDCiIAEgDIAGgGIgBAHIgBADIgBABgAGoCeIgBgCIAGAEIgDADgAIJCWIgFgFIgFgLIAGgGIABABIAGAWIAAACgAHkCNIAEgLIAHAFIgCAHIAAABIgNAIgAHqB9IgBABIgCAAIAAgDIgSgPIATAAIAAgJIgbgJIAbgIIABgdIAQAXIAJgCIgEgUIAAgCIADABIgCgEIATAAIgLgIIADgMIAMAAIgDAIIAVARIgbgBIgIAUIAPgEIgRAWIANATIAMABIgNAIIgGAFIgOABIgGgQIgEARIgIAAgAIBBuIAGAAIgHgCgApBBqIACABIASAHIgRAEgApdBzIACgEIgDgEIgFgIIgFgIIAEACIASAHIAQgTIgBAUIgEAIIgBgHIgDAGIgBgLIgLATgAJIBhIAAgBIAHAEIgHAEIgFADgAnZBgIABgCIAEAEIgBACgALfBUIgBgBIgBgBIAAABIgEABIgPAHIALgTIgNgQIAKADIAIACIACABIAAgBIACgBIACgEIgIgNIAFAAIAGAUIAFgMIAAAJIAAAEIAMADIAJADIgMAEIgIAEIACAVgAJjBbIABgCIAAACgAJKBbIACgGIgFgEIgNgKIAMABIACAAIgGADIAYAAIAFAQgAnqBGIgNgVIAIADIgEgEIgHgGIgOAIIgKAFIADgEIAFgOIADgHIgUgSIAaAEIABAAIAFgMIAGgLIAAACIABgDIACAAIgCgCIAEgQIgNgHIACgEIAOgCIAFgWIAJAUIAWgCIgRAPIAIARIgCACIgQgKIgRAOIADAKIACANIADAAIAVACIAAACIgUAMIAAACIADAMIACAHIAHADIAJgMIABAAIAFgHIAAAGIAAABIgBARIAXAJIgLACIgCgFIgCAHIgJACIAAAJIgMgCIgCgDIgBAAIgCgGIgCAHIgTAFgAJnBPIACAAIgCAGIgCACgAI8A1IgQABIAMgKIgGgPIANAIIAMgKIgDAPIADACIAFACIABABIABAEIgMABIgEAPgAHqAyIAJgBIABACgALLAeIAIAEIgMAJIgIABgArFAhIgNAJIAEgNIABgDIgBgBIgMgJIARABIACgIIACgEIABgEIACAFIABADIAAACIACAGIAQAAIgBABIgMAJIAEAQgALvAeIAAgCIABADgAL4AeIABAAIgBABgAIPAUIAOgJIgFAPgAHaAXIABgDIAHgFIAAABIgGAHgALZAOIACgDIAKABIAAACIgBAIgAHxAJIAJAHIABAEIgBAAIgFABgAIcgBIgRAAIAOgLIgBgBIgEgMIgBgDIAEADIALAHIAMgIIACgCIgBACIgEAMIgBACIACACIAIAFIgDAEIgKAAIgFAOgAHvAHIgBgBIAHgGIgPABIgFgNIgEANIAAgBIgWgJIgBAAIAZgGIABgGIAAgDIAAgBIACgPIAHAOIABABIACADIACAEIAZgFIgLALIgGAHIAJAPIgKgHIADAIgAKrAEIAJgKIgKgOIgEgGIAPAFIACABIgBAQIgEAHIgIACgALGgFIADgBIAFAEIgFABgAIxgBIAGgCIABACgAqNgMIgCgCIgBgBIgCgCIgQAHIAJgPIgLgOIARAFIADgFIAFgIIACgDIAAAEIAAAHIABAHIARAFIgRAGIACARgALagIIAEABIgEABgAJ8giIgDgCIAAgBIgBAAIgCABIgEACIgDABIgKAGIAEgHIAAgBIACgEIgCAAIgBAEIgBABIgCAHIgDgCIADgeIgRATIgLAAIgEgCIARgMIgFgTIgBgFIAFAFIAOALIAUgOIgGAQIAEABIAJgTIACAJIABAFIAAACIABAFIAFABIAMACIACAAIADABIgJAEIgLAGIABAGIABAEIACALgArsg5IgagHIAUgHIAGgCIAAgIIgBgUIANARIACADIABACIAMgFIAAAAIABAAIANgEIgGAJIgCADIgFAHIgCADIAQAWIgIgDIgSgFIgPAWgAoDglIAGAAIgDACgALlg9IAAgCIgDgBIgNgEIgEgCIAUgHIAAgFIAAgOIAAgCIACACIAIAMIABAAIABACIABACIAUgIIgHAKIgFAIIAAAAIAHAJIABABIAFAHIgDgBIgSgGIgMASgAnWg+IABABIAAgCIADgJIABAAIAHALIABgNIAJgCIAEAHIgDACIgDgCIABACIgDACIAEABIADAEIgBACIgHgGIgFADIgRALgAokg5IADgHIAEAAIgFAOgAIZhNIgTgBIAQgKIgFgTIAPAMIARgKIgIASIAOALIABABIgEAAIgPgBIgHASgAHJhMIAGADIgIAHgAqDhDIgCgDIAAAAIgHgOIgEgHIgKACIAAgQIACgBIgBgCIAAgKIAJgDIADACIAEgDIANgEIgHgDIACgDIAIgIIgBAKIgBADIgBAMIAAABIgBACIAFADIANAGIAIAAIgDAGIgCgBIgOACIgEgBIABABIgGABIgBAHIgCANIgBAIIAAABgAHrhLIADgEIADAHgAoQhNIADgEIALAIIgKABgAowhPIABABIABABIgFAEgAm9hNIACAAIgNgFIACgPIgEAFIAIgWIAHAaIASABIgBABIgBgBIAAADIgBABIABAAIABACIgGADIgKgJIACAMgApThVIAFgDIADABIADAKgAHKhSIAAgCIABgHIgCgBIgBgDIANgGIgOgDIAAgCIAGgBIADgRIAEgCIAGALIgGAAIAMAIIgDAMIgEgHIgBATIgBACIgOADgAmphUIAHgCIgEACIAAgBIgCADgAoYhWIADgFIgFADIgCgCIAIgDIgCAGIAEACIgEACgAHehfIAKgIIADABIgGAGIAEAJIgFABgAnYhZIALAAIgDADgAnbhXIgBgDIABAAIACAEgAqnhbIgIgMIgBgDIgBgBIgCABIgSAFIAEgFIAWgHIAGAJIAAALIAFgEIAFAIIgRADgAoghZIABAAIABACgAokhfIABgCIABABIALgHIABgBIACgCIgKAOIgBgCIAAAEIgBABgAnlhaIACAAIgBABgApdhoIABgDIADgJIABgFIACAFIAEAKIAAACIANgBIACAAIAAABIgYAIgAG0hnIACAAIADADgAHuhtIAGgFIADgBIgIAJgAq/h/IgFgIIAOAFIABACIgGAHgAHVh/IACgCIAAAEgAHMiKIACACIAAgCIADADIgBACgAGziLIgBADIAOgKIAFAEIgVAIgAKWiVIgCgEIgBgEIgNABIgCAGIgEgMIgBgEIgRgBIACgBIAMgIIgEgRIANALIAOgJIgFANIADABIAGAEIAEgDIAJgIIgEAQIAOAJIgJABIgIAAIgCAJIgCAHgAKKilIgDAFIAHgGIgCAAIgCAAgAHLiRIgCgHIAOgLIgNABIAAgPIACgDIgBALIAHgJIABANIAZAFIgQAIIgCgHIgDAJIgCAAIAAADIgBADgAmriXIAFgCIAFADIAAACIAAABIgFADgAmyieIgBgDIADgBIACACIgCAFgAHGiiIgBgFIACAFgAG2iiIgIgJIAEgBIALADIgCAHgAHfi0IAHADIgKAIgAmzisIAAgGIAIACIABAGgAHti4IgGAGIgHgKIABgDIgCgBIANgNIgLACIgBgBIAEgBIADgRIgNgTIgaAIIARgWIgOgWIAZAJIAIgKIgJgFIAMgCIADgBIADgCIAAACIAIgBIACgMIAGASIAFgQIACAEIACACIACAAIAKgCIAAgBIADAAIALgCIgBABIgBABIAEABIAHAAIABAAIABAAQAEgBgCgFIAGgRIAHAYIAZAAIgVAPIAAAAIABADIABAEIABAFIAEAMIgLgJIABgDIgCACIgDgCIgFgEIgBABIgNAJIgEgDIAEgJIACgHIgDgDIgCgCIgHgFIgFAFIgEAFIgCACIAEAHIACADIAHAOIgSgJIgCgBIgEgCIgIAIIAKAEIgSAFIgDADIABgDIgGACIgCAWIAJARIAWgDIgCADIgJAIIgFAEIAJAVgAHrkFIAHACIABgMIgHgEgAGsiuIABAAIAAABgAnIi7IALADIgIACgApGi3IAAgBIAGgIIACAAIgGAJgAmri+IAAACIgCABgAmkjIIAAgBIABACIAAABgApljJIgJgIIgBgBIAAAAIgIAFIgGAEIACgEIADgJIABgDIgMgMIAHABIAKACIACgGIgXgFIAVgLIgEgXIARARIAPgHIABAIIgBACIgfAMIAhAHIABAEIgFgBIgJgBIgDAFIANABIgLAHIgEACIACAIIABACIABAEIAAADgAoqjHIAAgEIAGAAIgFAEgAHZjKIAEAAIgEAAgAo8jcIACAHIgEABgAKZjfIgBgCIgKgPIgEABIgWAHIAGgJIALgMIgBgCIgFgHIgJgOIAWAIIADABIACgCIABAAIABgBIAJgMIAEgFIAAAHIgBAPIgBAFIALADIAPAGIgaAHIgBARIAAAEIgBAGgAoojdIAAAAIAAABgAoajhIABgNIAIAIIgEAGgAoqjoIgCgJIgIgBIgBgCIAMgTIAGAEIgEAPIAMgLIAEADIAEANIgJgCIADACIgFgBIgHAOgAmijsIgCgLIgHgBIgGgDIAGgEIAAAAIgBAAIgIgCIADgBIAGgDIAAAAIAEgCIgCgMIAHAHIgBgHIALACIACAOIAGgMIAHACIgBABIgHAHIAFgBIAOAOIgSgDIAIAIIgOgDIgBAEIgFAKIgBgGIgCAEIgCAEgAn8jqIgBgGIAFAHgAoTjvIADgJIADACIgCgFIAEgNIACAEIAXgGIgMAOIAAgCIgDAGIgBAAIgGALgAIfkEIABADIgDACgAm4keIgQgBIAOgIIAAgDIAAgCIgDgLIAMALIAJgEIAFgDIgCAEIgFAKIAMALIgDgBIAEAFIgGACIgBgHIgKgBIgHAPgAmMkVIACgBIADAEIgBABgAoxkVIACACIgCABgAJZkaIgCgLIgDgJIgcgBIAXgPIgEgQIgCgGIgBgFIADADIAGAFIAJAGIAEAEIAXgPIgJAXIgBACIAAABIAEADIADACIABABIAOAKIgVgBIgBAAIgBAAIgFAAIgBABIgFAQIgEAJgAmEkZIAAgBIAAABgAl9kqIAFACIgFAHgAGAkzIABgGIAAgFIgCgBIgVgJIAYgFIACgZIANAVIACAAIAWgFIgEAEIgMAOIANAVIgXgKIgQATgAoPksIABgFIgFgEIgDAFIgCABIgBABIgBABIgGgDIAAgBIABgCIAAgDIAAgDIgJgFIgKgEIAOgDIAFgBIAAAAIACgBIABgKIACgLIAFAJIAFAJIgHADIAPAEIACAQIAIgPIAJACIgGAFIAAABIgBACIAAgCIgTAOgAn+kxIABgFIAEgBIAEALgAlgkuIABgCIACADgAl+k3IgFAGIABgHIgQgEIASgHIACgIIgXgLIAagEIAAgCIABgGIADgRIALAXIAYgCIgOgEIAWgJIAAgDIgMgIIAGgPIALACIgFACIAOARIAOgGIAAAHIAKgQIASAFIgMgOIAAgBIAFgIIAIALIABgEIAKgKIADABIgEANIASANIgWAAIgDALIgFgFIACANIAAACIgHgUIgPAAIgMATIAHAIIgKgDIAIALIgNgEIgNAVIgBgYIgIgCIgPAOIAAgCIgJAIIgLgGIAFAMIgJAIIAJgCIgBANIgBABIgKACgAE2k/IABAAIAEAGIgHAGgAlnk6IAEAFIgGACgAnJlDIgJAHIgHAEIgDACIABgDIACgFIALgCIgJgDIADgIIgDgCIgIAAIABgNIgMAOIgLgFIAEgIIgPAHIgCgCIALgHIACgBIgBgDIgGgTIALAHIAIAGIADgBIAHgGIAIgEIgDAKIAAAAIgDAIIgBACIACACIAEAAIAJAAIACgGIADgIIADgHIADALIADAJIAAACIADAAIAJAAIAMABIgGAEIgCABIgHAFIgFADIAEANIADAKgAlvk+IABAAIAFAJgAHQk4IAAgCIAAABIgJgPIAAgBIgCgCIgYAGIAPgRIAEADIgHgVIABgBIAFACIAIADIABgBIAJgKIAGgIIgCAZIAGACIACABIAGADIAEACIABACIgEABIgJACIgHACIgCAZgAlmk9IAAgCIAHgBIAEAJIgBAAgAFXk5IgRgLIgHAGIAAgJIALgDIAEAAIgBgBIAEgBIgCAAIAMgRIAGABIgQAOIAJAVgAn0lFIABAAIABACIAAAAgAlllGIACgHIAFgDIgFAHIADAGgApSlRIgDgFIgCgEIgFABIgFABIgMACIAEgFIACgCIAFgFIAEgDIABgBIgEgHIAAgBIABAAIgCgBIgCgDIAAgBIgFgHIATAIIACABIAEgEIAJgKIADgCIgBADIgCAQIAAADIAIAEIANAGIgMACIgEABIgHABIgCAQIgBAHgAFHlQIgIgGIABgLIACgFIAGACIADAIIADAAIAAAPgAIpljIAEgCIgEAGgAHdltIABgCIADgHIgHgFIgBgCIgJgJIADAAIARAKIgDAMIgBABIABAAIgCALIgJAFgAHtlpIAFgFIACABIACAHIgEABgAllmAIgOgKIAAgDIAPgBIgLAGIASACIAEAQIgUAOgAFBlyIADAEIgEADgAJPltIAEgBIACADgAFHlwIgCgEIgKADIgCgIIACgCIAIgFIgGgBIgJgRIATAJIACgCIgSgRIgWANIAKgXIgMgLIgBAAIgBADIgMADIgCgFIgJAAIgFgIIAJgHIgJgVIASALIAAAAIACABIATgPIgGAXIACACIADACIgLAHIAZABIAHAXIAHgWIAWADIgBABIgHAEIAFAGIgCAGIAFgEIABABIAAABIABAAIAEgCIAFgCIAEgCIABAAIAAABIgCADIgEAHIgMgFIANASIgDgBIgEgBIgIAOIABABIAFABIgEAGIAKgDIAGADIgQADIgIgMIgBAVIgFACgAFTmDIACAAIgBgHgAFKmLIAGgIIgIgBgAFEmkIADANIALgFIgCgPgAE1l1IADAEIgBAAIgHACgAJrl1IgPADIgBAAIALgNIgIgPIALAFIAFADIAJgJIABAKIgBAEIACABIABAJIgEAAIgBADIgHAEgAJDl8IABgYIATgFIgFAHIgNAQIAHAKgAIHl/IAHABIgCACIgEACgAIcmBIgHgCIgGgCIALgDIAGAJgAGxmEIACgOIgGgCIgHgFIgFgCIASgCIAAABIANgHIABAEIAJgCIAEAFIgHAIIADAHIgFAAIAHAEIACAFIABACIgCgBIgPgJIgLALIgBAAgAmkmEIgJgGIAIgGIAGANIABACgAIfmKIAMgCIAAgGIABgMIAAgLIAEAHIAGAIIABACIACAEIACACIAFgBIgNARgAlMmOIATAAIgLAIgAkSmOIAAgBIAAAEgAjlmdIgCABIgNAGIgDABIACgEIAEgGIAEAEIgCgJIABAAIABgCIgCgDIALgGIgOgBIgBgGIABgEIAAgCIAAgBIgBAAIgCgBIAAgBIgPgIIAIgBIADAAIAKgBIAEgWIADAFIABAKIACgDIADAIIABAAIACAFIgJAHIALgBIAFALIAAgBIACAEIADAAIABgBIAFgNIABAAIAEAPIAEAAIAHAAIgKgHIgBgBIABAAIAUAAIADgKIADgLIAHAVIAHAAIAOgBIgFADIAAAAIAAABIgGAFIgGADIACAGIgHACIgNgPIACATIgJAFIAAgBIAEgPIgDgCIgGAFIgFADIADAMIgCABIADAAIAAAEIgGgGIgHgFIgLAHIABALgAjamjIAAADIACgDgAjrmxIAEAAIACgFIgBAAgAoNmgIgDgKIgOAAIgMAAIAHgEIAIgGIAGgEIgBgDIgFgQIADgDIAGAFIADgKIAKAJIgIAEIACACIAIgFIAFAEIgFgWIAMgGIARAAIAGgEIgHAZIALAIIAIgIIgGAAIAOgLIgFgLIgCgFIAPAJIABAAIADgDIgHgSIgBgBIAUANIAAAAIARgPIABgBIAAACIgGAVIAPAJIgGADIAGABIgSABIgDAJIAOgCIgTASIAJAQIATgDIgTATIABACIgRABIgGgUIAAgCIgBABIgDgJIgIAaIgHgDIAAAFIgFgHIgDgDIACAAIgGgLIgJACIABABIgHAAIgDACIgCAFIgCgFIgBAAIABAAIAAgCIgMAAIgCAJIgCAFIgEALgAnRmvIgBAMIADgBIACgMgAnvmvIAAAAIAJgKIgCgEIgEAAgAn8m4IACAAIgBgCgAnNnMIgBAIIAFgBIABgHIgBgBgAm9nOIADAGIAEAAIgCgGgAkkmTIADgBIgCABgAlcmcIADgJIAEAOIgBABgAmLmdIACACIgEACgAifmdIACgCIACAFgAEUmjIAJgKIgGATgAlzmdIABgKIAFANgAHSmiIADgBIgDAEgAmJmkIACgIIgRgKIAUgBIADgLIADgFIAGAQIAEAAIACgPIgBgDIAOACIgPgRIAMgUIgVAJIgCgCIAJgFIgCgSIADgEIAHAIIgBAAIACABIABABIAAgBIADABIgHABIAQAJIgDASIAFgEIgBADIAKgLIAJAFIgHAHIAKALIgKgCIALATIgZgMIgSATIAOgBIgNAKIAAgBIgJAMIgDgCIgEAEgAG4mxIADAEIgFAKgADHmrIgBgLIgCgLIgQgDIAEgGIARAFIgIgKIABgBIgBgGIAGgIIAHAIIAHgEIADgBIgBgBIgHgIIAJACIAJACIAKgPIAAABIABARIANADIAAAAIAEABIgFADIgBAAIgLAEIABASIgLgOIgHADIgCABIABABIANANIgSgDIgEAAIgDAGIgFgGIACALIgEAJgAD3mvIAIgHIgBAHgAj6m1IABAAIAAABgACtnGIABAAIAAABgAjUnHIABgGIADgBIAEAAIgDADIgFAEgAjdnMIAFAAIgCACgABunaIgEgIIgGABIgPADIAOgPIAKgGIANANIgBgKIACABIgBACIABgBIAPAGIgUAEIgDAUgAjinZIAAAAIAAABgAj6nsIAQAEIABAKIgHgGIgRAJgAmPneIAFgDIAAAEgAC+nmIAHAGIgFADgAh+nlIADgSIgFgEIgFAFIAHARIgFgEIgLgGIgNAMIAEgSIgLgGIgBgDIAOgBIACgLIACgBIgBAAIABgGIAGAPIABAAIANgCIACgBIACAAIABAAIAEgWIAIARIgFgDIAJAQIgNAPIAGgBIgHAGIgJAIgAlKnnIADABIgBACgAhjnrIgKgEIAKgDIgDADIAFgBIAFAKgAoGnoIAAgBIABgBIAFgOIAFARgAkIn5IAUACIAHgSIAAABIACASIgRAHgABan/IALAGIgEAHgAB3n4IACAAIgBAEgAnBoCIgGACIgHACIgCABIAAAAIgDABIACgCIAAAAIABgCIAEgGIAEgFIgMgPIANADIAFACIAEgGIAGgJIABASIASAFIgKAEIgHACIAAAAIABATgAEHn8IgFgMIgLABIgFAAIAIgHIAFgDIgBgDIgCgEIgDgIIAIAFIAGAEIAAAAIABgBIAMgKIgFARIABAAIAAAAIAFADIADACIAFAEIgHAAIgEAAIgEAAIgCAAIgEAQgAC4oPIgBgFIgGgBIgVgEIAYgLIAAAAIAAgBIgCgPIACAAIAAABIAMAEIADADIAEgBIABABIAAAVIAHgJIAJAKIADADIAHAGIgJgBIgDgBIgPgCIgMAYgAlrn+IACAFIgDAAgAFwn8IgJgTIgEABIABgIIAWgCIgPANIAIgBIgDAQgAGQoBIgIgIIABgFIAEgBIAFALIABAGgAF3oJIABgEIALgBIABADIgEACIgIADIgFACgAhloIIAGAAIABABIgCACgABoojIgYgKIAagHIABgaIAMASIACAFIAKgDIAQgEIgRAUIAOAXIgPgHIgFgBIgFgCIgJALIgIAJgAhUoKIABAAIgBABgAFVoOIABACIgEABgAIAoTIgDgDIgCgBIADgJIABAEIABADIACAHgAHaoWIABACIgCABgAF0ogIAHgBIACAGgAHfojIADgIIgTgNIgBgCIABAAIgGgEIgBABIgIAHIgKAHIABgDIAGgVIgTgOIAYAAIAEgJIAKAGIABADIAGABIABAAIADACIgCAKIgDACIACAFIAAABIgCAFIADgCIABADIANABIADgIIACgIIAGADIABAEIACAGIABAEIAEAAIAVAAIgUAOIABAFIgLAGIgDgCIgBAAIgGAFgAl4pAIAAAPIgEgBIgGgBIgLgBIAHgDIAEgCIAEgDIgJgFIgBABIgIAIIgFADIAAgCIAEgQIgPgJIgBAAIABAAIALgBIAGgBIACgGIADgMIAHARIATgCIgIAGIALAKIAAAAIALgFIADgCIgDAOIgBABIgBACIABABIAMALIgHACIgGgBIgGgBIAAABIgBACgAl/pIIAFAKIABAAIgDgNgAi9pEIABgEIAJAEIAAABIgLALgAikpBIgBAAIgLgYIADgDIAAABIABAAIAGgBIADgCIAKgCIgLANIgDADIACADIAEAIIAEAHgAhbpDIAEgHIACABIAJAHgAhgpRIABAOIgDgBIgBACgAEppJIgIgJIgCgEIgYAIIAIgLIADgFIACAFIAHgXIADABIACgDIAMAAIAAAHIABAAIABABIAKADIAMADIgPAFIgIAEIAAALIABANgAhwpFIgCAAIgDAAIgKgEIACgCIAIgFIACgBIgBgFIATAEIgOAPgAiGpGIAEgCIACADgACPpaIgDgBIgDAHIgFAKIgDgUIgEgBIgCAAIADgBIABgBIgBAAIgCAAIAOgTIABAAIACgBIAAgCIAMADIgCAFIABACIACACIALgFIABAAIAEACIgCgDIAFgCIgLARIAHAJIAHAHIgJgCIAAgBIgFgFIAAAEIgDAAIgDgBIgLARgAjdpaIAJAEIgFAMgAh1paIgDgKIgDgDIgBABIgIAEIAAAAIgBAAIgLAGIALgWIgQgRIASAEIAHgDIABgBIAAAAIAAAAIAGgLIAAgGIAAgDIAEAGIAHAKIASgGIgLAPIAEAFIAHACIgFACIAFAGIgKgDIgBAAIgCgCIABADIgDABIgDACIgDABIACASIABAAIgKAFgAHKprIAEALIgIABgAjxphIgEgBIADgBIACgBIAHADgABqpkIANgGIADgBIAAAJgAgHpnIAAgBIAHgSIAQACIgCABIgBABIABACIAAABIgBAAIACAFIACAFIABAEIgBgCIgBAAIgIgFIgEgEIgEAEIgHAHIgBAAgAjpppIAHgFIgBgFIAAgBIAAAAIgDgLIgBgBIgBgEIACACIAQANIALgHIgEASIghAFgAlCpwIgFgBIgLgDIAAAAIAHgDIAIgEIgBgLIAAgGIAEAFIAHAJIADgBIAKgFIAAABIABgBIACgBIgJAPIABAAIAJALIABACIgQgEIgBAAIAAABIgDAEIgGABgAEKpyIACAAIABAGgAi3ptIAAgBIABABIgBABgAgap6IAGAAIABADIgKAHgAAvqHIgHABIgDABIgBAAIgGABIACgIIACgDIAGgGIgEgHIAagDIgIgEIAOgQIgEAaIAIADIAMAGIAEABIgDABIgXAEIgDAZgAEnp8IAFgIIAAAMgACep+IABAAIgBABgAATqAIAHAAIgBABIgCABIAAABgAjEqBIACgBIgBADgAAbqHIABAEIgGABgAgmqVIgHgEIgBgBIABAAIAHAAIAJgBIAEANIgBABgAAKqZIAIgBIAAACIgCABIgFAFIgBAAIgEADgAjSqjIADgMIgWgNIAMgBIAOgBIAGgVIABgFIACAFIAEALIAEAJIAWgBIAFgBIgEAEIgEADIgIAHIgFADIAIAWIgDAAIAEACIAAABIgWgOIAAgBIgDADIgIAHIgKAHgACGqdIAAgBIgBgJIgCAAIgGgBIgFgIIAAAHIgNgCIAYgMIgEgaIAGAHIAJAJIADADIAAAAIAMgFIAFgCIAGgEIAAgBIgDgCIgEgCIAHgJIACgBIACAAIACgHIALADIABADIAJAAIAKACIgDgDIAIgBIgNAMIgFADIAIASIgDACIgNgIIgDgCIgBABIgKgIIAEANIgLAKIAFgWIgMAWIAOAOIgFADIgQgDIgDAGIgEAGIgDABgAgRqfIACgFIAEgTIAHATIADAGIgIAGgAiAqmIgNgOIgBABIgHACIgCgDIgBAFIgFACIgCABIgCABIACgDIACgDIAHgNIgJgJIgGgHIAGABIAPADIALgTIADAWIAHACIAGgHIgKgRIASAIIAOgOIgCATIgBABIACABIAQAHIgMACIgHABIgBAKIgCAKIgJgRIgDAAIgKAFIgFACIABAEIABAMIABAGgAg+rZIgPgFIAPgFIgBgQIAHAJIADADIAIgCIAHgDIgHAMIgCABIABABIAKALIgKgDIgGgBIAAABIgFAIIgCADIgCACgACUrWIAFgBIABAEg");
	this.shape_42.setTransform(-1.5,-1.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#692525").s().p("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gIIAIgFIgDAagAKlHvIgGgDIALgFIAHAKIgCAEIgKgGgAmdHdIgBgRIAHAGIgEgNIAAgBIABAAIAOAQIgBABIgPgBIALAJIgCAIgAptHXIgEAAIAUgQIACACIgBgEIAQgNIAEABIgCgDIAEgEQALgFAOgNIAUgTIAAABQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIghAfIANAbIgLAHIgXgOIgPAOIAHADIgMABIgQARgAK5HXIACAAIABACgAokHYIgKgGIAHgHIAGANgAnnHUIgEgNQAHgEAMgMIgEAWIgJAIgAINHHIAEADIgEADgAmyHLIAGgFIgCAEIgDADgApoG9IAGAFIgIAGgAodHCIACgBIABgDIAHgHIATgVIgOgWIANgJIAJAFIgEgKIACgBIAVgVIAGAIIgCAAIgEASIgKABIAVALIgCALIgBABIABAAIAAABIgBABIABABIgCAJIgEgCIADgRIgNALIgPgIIAHAQIgMAMIASgDIAEAKIgFAGIgCgEIgwAKgAphGsIATALIgPAJgAKaGvIAQAGIgSAFgAnkGwIADACIgEAEgApUGfIAEgCIAAABQAEAGARgQIAFgEIAWgDIgTALQgMAIgKAKIgEAFgAmyGmIABABIADADIgBADIgLACgAraGqIAAgDIAFAIgAndGmIAEgFIAEAFIAAAAIgHABgAsVGLIAFgCIAPgJIgLAkgAqRGcIAFgBIAIAIIAAABgAnFGjIACgBIAAABgAnJGdIAFABIgDACgApQGVIALgJIACADIgKAGgAHgGMIAIgBIABAAIAHAHgAsBGAIALgGIAJACIgMAAIAFAOgAL9GDIAHgPIADAVIgKgGgApXFlIAPAfIgVADgAs0FbIAIACIABAdIAQgYIAXAHIAGAIIACghIANgDIgEACIgHAWIAGADIALgLIAIALIgDAFIgGAAIgEgFIABAIIgoAQIgDABIgBgEIggACIgMAHgAoZF5IANAGIgGAEgAnUFwIgDAQIgNACgArhF4IABgCIAIAFIgBAAIgEABgArsF0IAAABIgHADIAHgEgAoAFyIg1AEIApghIgGgPIACgCIAIAAIAHAcIAKgVIAEAHIgRAUIACAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQADAHAKgKIAGgFIAEgCIAFAIIgaAPgALnFsIAAgBIAAgEIABgRIANADIgMgOIAAgBQAQAGACgFQACgFgVgKIAJgOIgWAKIgHgDIgFgFIAZgHIgZgSIgEADIgBACIABAPIgFgGIAAAGIgBgCIAAgPIAKgOIANAHQAYAMADgIQADgIgWgEIAHgFIAAACIAAgDIAGgDIAUAfIAfgJIAEAJIgTAYIACACIgGAEIAIAAIAVAgIgrgRIgdAkgALAFpIAGgFIAAABIAAgDIAHAEIABAFIACgEIADABIAAAJIgTgIgAnSFqIAHgHIACgCIAHANIgNABIAAABgAnbFvQADAAAFgEIgBAEIgHABgArMFkIAGgFIADADIgDAFgAq3FmIAAAAIAAAAgAnIFfIACgCIANAIIgBABgAnaFbIANgDIADACIgGADQgHAEgEAEgAq2FQIACgDIAkASIgdAGgArfFcIADgKIACABIAAAAQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAIgBAJIgBABgALWFcIACgEIAFAFgAJ+FXIgJgEIALgEIgNgCIAKgDIgQgFIAegQIgEgCIAAAAIgBABIAAgCIgIgDIgJAKQgCgFgMgDIACgNIgZgMIgIATIASARIgCACIgYgGIAAABIgJgEQADgHgdgOIgWgKIAHgKIgDgQIAIAGQAOAKAHABIAHAHIAUgKIAFgOIgDgCIACABQAaAQADgGQADgIgdgKIgTgGIAHgFIAbAQIgFgLIAVALIAEACIgIAKIASgGIAFACIAKAPIABgLQAOAEACgFQACgFgNgFIAPgFIgTgIIAAgVIgCADIgdgJIgDgDIAKgOIASAXIgBgVIASAHIAAAAIADADIACgBIACABQAQAHALADIgCAEIgFADIgJgHIADALIgGAEIgWgIIAUALIgCAAIADAAIALAHIABAFIACgDIABAAIAOAHIgKAEIAMACIABAGIgCgBIACABIAAAHIAEgGIAKAHIgaAIIgQgYIAAAcIgIADIgFgDIAHgLIAAAAIgKAKIABABIgXgJIAYAOIgHACIgNgEIALAFIgEAAIAQAGIAFACIgJgCIAOASIAAAMIgDAFIgOgGIANAHIgHALQgCgCgFAAIgBAAIAAgBIAAAAIgBABIgNAAIAIAGIgDAEIgKgGgAJVEPIAIgBIgCgCgANsE+IgBACQgDgGgSgFIgDgBIADgHIgJgHIABgHIAQAAIAKAaIAIgbIAcgBIgQgKIAtABIglAbIANAsgANPFAQAMAFAHABIgcASgALGFVIAAgGIAEABIACAHIgGgCgAHgFQIAMgRIAFAEIgCAJIgMAHgAtbE5IAiABIgEAGIAPgFIABARIgOAFgAKxFOIADgBIADADIgGgCgAICFNIABAAIAAAAgAnaFLIACgaIAFgEIACADIgHAcgAISE/IACgDIAEAFIgEAEgAsmE5IAEgBIAIAMIgCABgAJlFDIAAgHIABgCQAFADAEABIgFAGgAnsE6IALgJIgEAIIANgIIgNAPgAr6E9IAFAAIgBABgArGEwIACABIACAGIADgDIgCAHgAobEyIAJgEIAGADIABACIgMAHgArVEyIADgJIADACIgBAKgAIgEyIADgCIgCADIgBgBgAHUEIIAnAMIgCAJIgOgIIANAKIgCAQIgDABgAITErIgNgHIgHgPIACAAIAYATIADACIgIABIgBAAgArgEpIACAAIgBABgAr2ElIgEgCIABgHIgEAEIgBAAIABABIgBABIgCgBIACgDIADgJIgKgIIAEgEIgJgBIgBAAIAAgLIgEAHIgEgCIgCgJIgCAFIgIgGIAeABIgYgiIgrAOIAbglIgJgMIALgBIgUgLIgEgFIACgFIAgALIABgFIgMgUIAFACIAAgBIAKAFIABAAIAAgBIAAgEIAUANIgBAJIgMAAQgPgBACAJQACAJANgIIAJgFIgDAMIAUgSIAJAGIgBAGIgCgBIACACIAAAEIACgCIABACIgUAGIABgBIgHgBIgBgHIgDAHIgHgBIAFAEIgCADQgHAEACADQABAIAugPIACAEIgSAGIgBARIAGACIgCACIAEgBIAEABIABgDIAJgDIADAJIADABIAHgJIAOAUIAAgOIAEgCIADgDIABAQIAKAEIAAADIACgDIAXAGIgDAJIgYAJIgEgIIgCALIgBAAIAAACIgDATIgUADIAAgBIASgKIgsANIgIADgAr+D5IANABIACgHIgQgUgAo9EXIgCgQIACABIgCgDIAFgDIAYAMIgSgBIAPAMIgEAGIgEABIgIADgAMxERIAfACIgPAKgAMrEWIAHgBIgDAEgANTETIACAAIgCABgAN0ENIADgKIAEAQgAoEEQIAAAAIACgBIgCAAIgBgCIAMgHIALANgAuADgIgugPIAKgCIACgBIADAFIAB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AZIAbgNIAKAKQgPAAABAHIAAACIgGABIgBAAIADAGIgnABQgiABgMADgAqSAsQAAACAAABQAAACAAAAQABABAAgBQAAAAABgBIABgEIgBgDIgBgBIgBAEgAtngFIAIAPIADgSIgJgEgAqPgEIAFgJIAHAIIgCgRIARgGIgRgFIgBgHIATgBIAWgBIgpgFIAAgEIgBADQgigFAAAIQAAAHAcgCIgDAFIgRgFIALAOIgJAPIAQgHIACACIgBACIABAAgAt1ggIACAEIASgDIgQgIgAtsgzIALgCIgJgBgAsXhGIgEADIARgEIgCgCgAJJBHIAAgMIAHAIIgFAEgAsgA+IAMgDIAGAHIgNgEIgBAHgAqyBAIAUgDIgYAGgAMeA2IADACIgCAIIgCAAIgRACgALeA8IgIgCIgEgMIAPANIgBABIgCAAgAMgA1IADgDIgCAGgAsTA2IgDgFIgEABIADADIgMgBIgCAAIgCgQIAYgCIAqgEIgEAGIgNAFIAAAKIgWgFIAJAJIgQgBgAq2A0IAAACIgDAAgArjAdIAYgCIhEgDIgEAAIAGgEIgdgEIgBgIIAQAEIgKgLIARgBIAbAAIgBADQgRABAAAEQAAAFARAAIgBAFIAFgFIAMgBIAfAMIACABIgCADIgXAHgApjAJIAJgBIABABIgFAGgArfALIACAAIgBADgAJjgBIAAABIAAgDIgBgBIABgIIAGgBIABASgAq0AFIgDgEIAEAEIgBAAgArggCIAGgBIgBAFgArtACIABgBIACABIgDAAgAsUgIIgRgBIADgEIAJgBIAAABIAHADIADgBIgBACIACABIABgBIAIACIgPgBgAsIgPIANAAIgRAFgAIxgPIAJgBIgLAFgAN0gXIAGAAIABAGgANDghQAIgCAAgEQAAgDgEgCIAFgLIgdgZIAGAAIATABIADAFIAAgFIAKABIABgDIAVgBIABAGIAnADIgOAJIgSgBIAIAGIgJAGIADAMIgDABIgPAEIgFgFIghAVgANGhNIgCAGIACAEQABAFAAgJIAAgHIgBABgANmgiIAMADIAHACIABADIgIABgAJogcIADgHIABAAIgDAHIAKgGIgFAIgAL+gjIgBAAIgOgLIgTAOIgEgBIgCgQIADgNIgKgHIAJAAIANAEIACAHIACgEIAAATIAMgSIASAGIAGARIgPADI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AAgNIAGgKIAWAJIAAAAIgNgGIAKAQIgGABIgCgGIgCAHIgTAFIgBARIANgHIABABIgEAPIAMgJIABABIAAABIgGAFIADAAIgJAVIADACIgBABIABAAIATARIAIADIAHgJIAGANIAEgWIAEgBIAJATIAAAAIAAAGIgDgCIAJAhIgBAAIgLgcIgIAgIgIABIgLAAIACgHIgEADIgDgDQgFgEgCAJIgBADIgBAAIABABIAAABIgFAEIgKgHIAMgQIgOgUIgKAAIgTAtgAHwnZIAEgBIgJgDIgDgCIADgDIAEAGIAAgJIAIgHIABABIADAHIAGgBIAEADIgFAXgAJmnRIAAgBIAGgBIgCADQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAgAG+nZIAEgDIACgBIAHgBIABACIgGAIgAG5ncIACAAIAAABgAJMncIABAAIgBAAgAHinhIACgJIAAAAIAFAGIgDADIgBgCIAAAEgAGgnjIAEABIgFABgAF7nwIAIADIgBABIACgBIAJADIAGgSIADgDIABgBIAGAOIgLAKIABABIgJAEgAG8n2IAFgDIAOAIIAEAJgAHunuIADgBIABABIgDAEgALin3IABAAIAIgFIgHAPgAGloQIACgCIAUgBIgCAIIgTACIARAJIgBAGIgIgGIgPAMgAHwn4IABgBIABACgAD1n9IAGgLIAKgBIAFAMIgBADgAlgoJIgJgCIADgGIAQAGIAAACIgBgCIgDAOIgGABgAp1n9IACgBIgBACgADZn/IAUgMIgFANgAIhoIIgCADIgCgFIgBgBIAFgEIAKgIIAHAUIgDAEgAgHoqIgNADIgCgUQgCgmgIABQgFABADATIgRAYIAAgvIgRgFIADgFIgGACIAAghQAAgLgHACQgGADAFAJQACACACARIACAMIgKAFIgNgOIABAAIAKADIgEgGIAEgCIgHgCIgEgFIALgPIgSAGIgHgKIABABIgFgOIALgIIgNAAIgBAAIgFgNIgBAEIgCgHIAAgEIAEgCIAdAUIALAkIgEgmIAFAAIAYgRIACATIAAAAIAAAAIABAHIAIAjIgFACIAFABIADARIgBgRIAUABIgDAKIAKgHIAIAcIAEgMIAAAAIgBACIABAAIACAJIAFAkIABglIAAgHIAHgIIAIAFIABAMIAAgMIABACIgBgEIAAgNIABgCIAHABIgEAoIADABIAagmIgLgMIACgGIAHgBIAMAWIACgZIAXgEIABAHIAHgJIAAAKIgBAAIABABIAAASIADgRIAJACIAGAJIgKALIAOgDIACAEIgUAGIACAyIgYgfIACgRQAHgkgIAAQgHgBAAAlIAAALIAAgBIgLADIABgJIgOgBIgBAQIgRAGIAQAHIgBAQIgJACIgGgNIgDAPIgGABIgBAFIgQABIAPAKIgBATIgBAEIABgBIgBAMgAlRoJIAFABIAGAGIAAABIgGABgApEoCIgTgiIAJAIIAPAMIgBAQIgEgCgAkvoDIAFgEIACAFIgBABgAERoJIAEAAIgGAIIACgIgALboaIgkgEIgKAOIAAgOIAGgEIAFgDIACACIAAgDQAJgIgEgGQgDgDgEADIgCgJIAZgLIgagGIgDgbIgOAYIgagFIASAUIgBACIgIgCIgFALIgBgBIgBADIgDAFIgHABIAFACIgNAXIgCgVQATgQgEgEQgDgEgOAKIgBgPIgygLIAvgVIgFgyIAiAlIAagLIAAgMIAGAJIAOgGIgIANIARAWIAtgRIgYAiIATASIAogXIgTAqIAhAfIgtgGIgEAKQgGgBgNAMgAK+onIAWgNIgMgDgAKjpdIACADIAGgCIgBgNgAo2oqIgGABIgCAQIgJgLQgggmgHAGQAAABgBAAQAAABAAAAQAAABAAABQAAAAABABIgDAAIgCgEIAEgEIAegBIALAfIAKgfIAhAAIgSgMIABgDIAAgRIAGAFIAOAMIgCAPIAIAEIgLADIAPAGIAAALIgQACIgGAogAk4oKIgDgRIgHAQIgOgBIgMgRIAQgWIgIADIgLgLIABgBIAAAAIAAgBIAIgHIAQAXIAWgHIAHALIgNASIAJAOgAH/oMQAEgGAAgCIACABIgCgHIAbgWIANgLIAEALIgBAAIgDAMIgFAEQgGgDgPARIgGgDIgLAKgAEBoVIABADIgFADgAmLoXIAKgDIALAEIAAAHgAHCoUIAGgBIgIgFIgCgEIgBADIgNgIIAIgIIAAABIAhgCIACAIIgYATgAjRorIAKgLIgcAGIgOgZIAAAFIgTgPIAAACIgCgCIgIgHIgXgSIgJgLIACgBIAJAMIgBgPIALgDIAPAaIgKglQgEgPgFgHIABgBIAcACIAAACIgDAAIADABIgBACIACgBIADABIgCgCIABgCIABAAIAAgBIgBAAIgHgFIASABIACgSIgVgLIgDgIIAcgGIAFgfIARAuIgMABIAWANIgCAMIgLgGIgKAKIgBAAIgLgRIgBAVIgUAFIABAAQgDADACAGIgFAEQgIgQgFACQgDACAHARIAAAAIAKAkIALABIAVAjIgSgrIAKgFQAAADABAGIgDABIAEABIAHANIASAfIAAACIASgRIAJgFIABABIgBAEIgGAEIANAvgAj9ogIAGADIgKAGgAEKoYIgGgEIgGgZIgSAFIAIgVIANgOIgEgGIAMgUIAJADIACAFIgBAEIAAAHIgIALIAXgIIADAEIgFAJIgKAYIgGgIIgDABIAJAHIgLAagAHwoiIABAAIAEACIgGAEgAIBohIAEgJIgFAEIgCgFIAUgOIgUAAIAEgFQATgQgGgFQgFgFgLASIgEgHIAFgTIAIgIIgHABIgDgLIABABIAAgFIAFADIAAgCIACAEIAbAVIAmgbIgMAkIgBAAQgGgHgdAjIgVAagAgfo8IABACIAFAUIgfAHgAGvojIAAgBIgBAAIgBAAIADgBIgGgEIAFgXIAIATIgHAKgApaonIADADIgJABgAqMokIgCgBIAEgFIAAAGgAqEoqIAHAEIgLACgAqAouIAHgJIgHACIAGgGIAEACIgBAIIAFgGIAIADIgEgHIACgBQADAGAJAKIgbAGgAl/o0IAGABIAEAFIAAAHgAHbosIAJAAIgFAFgAKsoxIAEAEIgEADgAm2orIABABIgCAAgAkro2IAKgDIACADIgFAGIgCgCIABAEIgDADIgDgLgAm0otIAXgkIAPAJIgEAQIgFACIAAgDIAFgCIgEgCIABgFIgFAEIgEgCIACAEIgDAEIAFgBIACADIgaALIgCgCgAlgovIAFABIgFABgAlnotIAAgCIAAACgAJNovIACgLIAOALgAj1o1IADgKIgBAPIgCgFgAoDo3IAKAEIgPACgAn2o0IAAgBIABABgAIuo+IALgMIADACIANgBIgHAFIAGAFIgKAJgAjfpYIgCgIIAIAFIADAQIAFgMIACABIgGAfIgKghgAmHo9IgGAEIAJgIIAFAHIgEACgAA7pBIAMAFIgNADgAHLo+IABgBIAGAEIgBAAIACACgAHdo7IgBgDIAEgEIANAAIgDAIgAGopSIAGAOIgLAKgADHpYIABgBIANAKIgFgPIANgKIgPAAIgFgPIgEAMIgBAAIABgEIAEgPIADgMIAAABIgBASIAJgQQAHgLgHgDQgGgCgBAKIAAgFIABgHIAgAAIgZgSIALgeIgVAOIgHgSIAEgDIAQAEIAMgKIAPgVIgRgpIAcARIAFgUIgugcIA2gFIAGgdIgYgJIgKANIAUAFIg0AVIACAYIABATIABgCIABANIgIgKIACgDIgEABIgZgdIgQAHIgEAMIgBAAIASg6IABgBIARAbIACgfIALgDIATAEIAAgOIABAAIAAADIACgCIAEAAIgDgDIACgCIgDABIgCgCIAAADIgBAAIAAgBIgUgIIAAAIIgJgDIAAgGIACABIgCgDIACgXIAEgHIACAWIAWgGIACgpIAXAiIAngLIgZAgIAMASIADgNIAVAxIAZgBIgGAOIgfgCIAJAIQgHACgJAeQgIAegFANIAWgoQANgXAAgHIAJAHIgMAeIAUgNIANAhIghgUIgEAUIArAbIgyADIgFAXIAHACQgDACgFAHIgCABIgBAEIgDAIIgFgJIgBAAIgJAPIgDgCIABAGIgJANIABAMIABADIgIAFIAOAAIABABIgJAWIgBgDIgUgFIgSAeIgJgLIAAAVIgCAAgAEGqxIgHADIAHABIAAAHIAEgFIAHABIgEgFIADgGIgGACIgFgFgAD7rIIAAAIIAMAEIgFgMgADStLIAAALIAJgGQAHgGgIgDIgEgCQgEAAAAAGgAD5t2IgDACIAEABIAAACIABgCIADAAIgCgCIABgDIgCABIgCgCgAlfo7IgBgBIABgCIAAABIAAACgAH3pDIABgBIABgBIADACIgEAGgAp1pAIAAABIgCABgAFGo/IAAAAIAFgDIgBADgAl3o/IgEgKIACgDIADANgAihpCIAAAAIAAAAgAlqpGIgLgKIAIgGIgTACIgHgRIgDAMIgFgFIAFgCIgCgGQgBgGgFAIIgBAEIgCAAQgEACAHAMIgLABIACgFIgegmIgOAKIgBgEIgCADIAQgpIglgeIAfABIgdgXIgiAVIgEgIIAMghIgpghIA1ACIAFgMIgpAJIAhglIgZgrIAuAUIAhglIgGAyIAaALIgCANIgbAGIgBAWIADABQADAIAHANIgNAJIAJAgIALACIAIgTIAMAUIAAABIAAgBIgKgbIAEgKIAKAhIAQgjIAIAsIAOABIAKAQIgCABIADAAIAEAHIgGABIgGgFIgIAEIgMgZIgFAeIgeAEIAbAPIgDASIgVgRIgWALIAPAFQgCADAFAEIALAJIgCgNIAPADIgBAHIAVgVIAOAGIAAAHIABALIAGACIACADIgQACIAXANIgBAHIgCACQgDgDgFADQgFACACADgAiipOIABgGIALgNIgKACIACgKIAHgGIAIASQgDgHgFgcIALgNIAUAJIgBABIgHADIgRgEIAPARIgLAWIALgGIgcAdgAhTpLIACgGIABAAIgCAHgAptpOIANgTIAIACIABAFIgVAQgAFOpRIABgBIAFACgAp+psIAPAGIgBAUgAo2paIAAgCIAAACgAk6pbIACAAIgCABIAAgBgAh0pcIgFgLIACgBIADADIACAKgAn4pgIgWgIIgHAMIgJgOQgJgLgFgFIAAAAQgGgEgEACQgDADADAGIgRANIgCgCIgDgEIALgMIgHgCIgBgDIABgBIADACIgBgFIACgEIgDABIAAgDIAQgGIAJAJIgGgKIAIgCIgBg0IAKAOQgBAGASAYIgHAGIgRgMIAHATIgQANIAVgBIAHATIAFgTIAVgBIAKALIAFAIIAAAAQgEACANAQgAhopcIgCgSIADgBIAIAPIgIAEgAiqpdIAEgEIADAEIgGABIgBgBgAkFpiIAFgCIADADgAiBpjIABAAIAAABgAhkpxIADgBIACAPgAk/poIgFgKIAFABIABAJgAjppuIABgEIADgCIAFAAIABAFIgHAFIgDgEgAEwpsIAAgHIABAAIgBAHgAk0puIABAAIgCABgACypvQABgMgDgBQgDAAgDAIIgIgKIAegMIACAEIgBAAQgFAFgDAUgAi2ptIgKgTIABgDIgCABIgCgFIAFgBIABAAIAHANIgEgPIATgLIABACIgDAHIAGgBIADAJIAIASIgFABIgPgHIAAgEQAAgHgHACQgHADAGAGIABABIgDAGIACADIAAABgAARp0IABAAIgBgBIABAAIAAAGgAEepxIABgCIAEAAIgCADgAqHp6IAMAFIgHADgAjgp1IAAAAIAAAAgAjiqDIgBgHIARAGIgMgRIABAAIAUATIACgBIgBAGIgLAHgAEwp5IgBgMIgFAIIgEgCIAMgQIgBAYgAlLp9IAEgKIgUgQIgCgEIAIgIIgJABIgCgFIAN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");
	this.shape_43.setTransform(-1.8,-1.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F1753F").s().p("Ah7OkIABgIIgbgNIAUgDIAJgCIAAgBIgOgPIgIgIIgdAPIALgWIACgDIACgEIgBgBIgCADIgCgDIACgCIgEgFIgCABIgBgBIAAgCIgEgEIgCgCIgHgIIAPADIADgQIAAgDIADgMIAIghIABgFIAAAFIgBAYIgBAVIAAACIgBATIAFABIAOgaIABgDIABACIAEAeIAaAFIAEAAIADABIgDABIgCABIgZAMIAEAYIABAHIABgHIACgVIAOAaIAJgCIAVgEIgVAWIALAUIAEAGIgHgDIgUgJIgVAWgAgFNzIgCgkIAJAEIABAEIAAAPIABgCIABAVQABAcgFABIAAAAQgDAAgDgjgAECODIAAgMIgGgCIgBAAIgDgCIgSgGIAUgGIAJgDIAAgOIAAgQIAJAMIAEAGIAEAHIAIgCIgBgBIAegJIAAgfIASAZIADAAIAFgCIAHgCIAPgFIgTAZIATAZIgegKIgTAZIABgcIAAgDIgQgFIgKANIARAYIAAABIAAAAIgbgKIgBAAIgSAYgAg+NdIABgCIACgLIAAAAIACgSQABAIAEAXQAEAZgJAAQgJAAAEgZgAA2NRIgfgCIAagRIgBgFIgBgDIgFgWIAPANIAAgOIAAgpIAKAnQADAMAAAIIABgBIgBgOIgDgyIgBgIIAAgEIAAAAIABAFIACAHIAKAyIACAIIALgHIgJAXIABAJIAUARIgUgBQgBAHgCAAQgDABgCgJIgDAAIgLAdgAi9NmQgJgCAHgPIAKgTIAAAVIgBAKIgCABIACABQgCADgDAAIgCAAgAB/NXIAKgGQABAMgEABIgBAAQgEAAgCgHgAmKNOIgRALIAHgTIgPgNIAUABQACgFAEgIIABgCIABgDIAAAAIAFgIIANgWIAHgMIAEgIIgDAKIgFANIgHAXIgGAPIgDAIIAAABIAUABIgPAKIgCABIAEATgAB6NEIAIAHIgEALQgCgHgCgLgAhyNSQgGgBACgSIAEgcIABgEIAAAAIgGADIADgGIgDgDIgZAMIANgYIgTgUIAAgBIAEABIADABIATADIgEgDIAHAAIAFgIIAHgNIABALIABACIABAKIABAAIADgSIgBASIABAAIAKgXIAFAYQgBgLAEgZIAIgtIgSAPIgEADIACAFIAKAZIgYgPIgEgDIgZAUIAJgfIgFgEIgFgDIgCgBIgFgDIgKgHIAVgBIAGAAIAFAAIACgGIABgFIABgCIABgDIAAgDIAEgNIACAHIADAGIAEAMIACAGIAFAAIADgBIANAAIAKgBIACAAIgCACIAAAOIAAAhIAAAXIgCAOIAPABIgRALIgFACIAAABIABAFIAEATIgTgRIgFADIAAADIAAABIADARIgFgFQgBAcgEAJQgCAFgDAAIAAAAgAhvMlIACgCIgCgBgAgIM8IgBhLIgBgIIgMgNIgUAJIgKAFIAGgJIABgDIAEgGIAFgLIgMgNIgDgCIgIgJIAIABIAHACIASADIAJgRIAHgNIABALIABAEIABAJIABAJIAEABIAEABIAKACIACgDIABADIAKACIgJAFIABAFIABACQAHAhgJABQgJAAAAgeIAAgFIAAgCIgCABIgBABIgCAAIgEAEIgBAAIADAVIAAAMIgFgHIgDgCIABAEIAHA/IAAALIAAADIABAMIgIADIgBgPgAjnM9IgDgGIgHgQIgGABIgTABIgGABIAFgEIABgBIABgCIAQgOIgMgdIAQAKIAAgBIAMgTIgCAVQACgPALgcIACgHIAXg/IgPBIIgCAIIgHAbIALgKIgHAfIAaAQIABABIAAAAIgWACIgJAAIgHAfgAB6NDIgCgPIgGg2IAPA0IAFARIAAAAgADUM2IAAgCIgCADIgEgYIgCAAIgNgCIAAADIgDAQIgHgOIgFgKIgaAEIATgSIgLgYIAXAMIAQgPIgHghIAUAvIADAIIAEAEIANgHIAJgEIgGALIgFALIAFAFIAFAFIAFAFIACACIgXgDIgBgBIAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIgDAGIgBADIADgBIADAFQAJANgIADIgDAAQgGAAgBgMgADDMGIAHAEIAAgCIgCgIIgCgLgAnEMhIgZACIATgQIgEgKIgKgBIgLAYIgFgbIgbgEIAYgMIgFgbIAUATIAYgNIgMAZIAPAOIACACIATgRIgFAXIAAACIAVANIgZACIgFAYgAD7MnIAAAAIgFgQIgBgGIgHgfQAGANAJAQIADAFQANAZgGAEIgBABIgCAAQgFAAgEgLgAlEMdIADgZIghgOIAjgHIADgfIAAgEIAGAKIAHAMIAEgBIADgBIAIgCIACgVIALASIAVgGIgLAOIABAAIgDADIALASIgUgIIgEAGIgHAHIAIAOIABABIAEAHIABACIADAGIgEgCIgFgCIgFgCIgJgEIgJgEIgJALIgOAPgAksLnIABACIABABIABAAIAEgBIgFgCIgDgBgAi1MaQgJgCAJghIABgDIAFgQIAGgWIgBAWIAAAJIgBAMQgBAhgIAAIgBAAgAFWMLIgHgOIgKgVIAAgCQgPglgMgbIAeAzIAFAJIAOAZIADAGQAJASgFADIgCAAQgEAAgGgLgABlMHIABguIAAgCIACAEIACATQADATACADQAHALgJADIgCAAQgGAAAAgLgAooLfIgKgEIgVgJIAJgCIAJgCIgBAAQgHgFAZgbIAAgEIABACIAAgBIAJgJIAAABIAAgBIANgPIgFgHIgFgHIgJAEIgSAGIAQgYIgSgXIAcAJIAQgYIABAdIARAFIAKADIAAAAIABgGIgCgCIgIgEIgDgCIgJgFIAKgBIAJgBIAHgBIAAAAIABgFIAFgUIAKAYIAagDIgDADIgRAOIALAYIgXgNIgTASIAEgTIAAgBIAAAAIgbAJIABAMIAEgFIgEAHIAAACIAAANIgFgGIgQAbIgCAEIAKARIAggHIADgEIAaghIgRAeIgOAaIgLATIAJAPIgPgGQgLAPgFgDQgEgDAIgOIgEgCIgVAZgAoILYIABABIAJgNIAGgHgAowLNIAJgCIABgIQgGAHgEADgADiLzIAAgNIAJAJQAHAHgIAEIgEABQgFAAABgIgAjJL0QgFgCADgNQACgMAHgVIACgHIACgFIACgGIAGAGIgGAEIAHAAIgBAEIAAABIgHANIAFgCIgHAYQgFAQgEAAIgBAAgAD8LmIAAgDIgCgRIAFAHIAGAJQAJANgIADIgDAAQgGAAgBgMgAHBLuQgHgIgJgTIgSglIgFgIIAGAIIAWAbIADAFIAHAJQAKAOACAHQABAEgDACIgCAAQgDAAgEgEgABKLvIgDgEIgEgHIgDgEIgBAAIgDABIgEABIgCAAIgKADIAFgFIADgEIAGgHIgDgEIgCABQgJABgDgvIgBgUIgMgCIAJgKIARAJIgJgRIAEgEIAEADIAHgEIgEAHIALgFIAAADIgBADIgMAEIAMADIACADIABAJIAAAAIgLgBIgCAEIgFANIAAABIAEAQIAAACQACAMAAAIIAEABIAFACIAGgHIAHgIIgCAUIABAAIAPAGIADABIgBABIgPADIgEABIAAACIgBAOIAAACIAAACgAjpLuIAAAAIAAAAgAEkLVIgFgNIgCgHIgEgOIgHgVIAWAmIAFAJQALAWgGADIgCAAQgFAAgHgRgAJAK5IgCgDIAAgCIgBABIgDgFIgDgEIgBgBIgBAEIgBAEIgBAHIgBAEIAGADIANAHIgJABIgMACIgDASIgBADIgBgCIgBgDIgCgDIgFgLIgWADIAQgPIgJgUIAOAIIAFADIABgBIANgNIgegnIgOAFIAUgcIgWgcIgKAOIgBgZIgFgHIAFAGIAAgGIgJgDIgGgBIACAEIgCgBIgEgDIgEgCIgDgCIgDgBIABAAIgFgDIgJgFIgKAJIgPANIAAAAIAAAAIAGgbIABgEIAAgCIgFgDIgEgDIgBAEIgCgFIgQgKIgBAAIABAAIALgBIABgBIgFgPIgGAAIgSAAIgBAAIgCAAIgHAAIAKgGIAJgHIAEgEIAEgDIgLggIAcATIAHgFIADgCIAMgKIADgVIgYgMIAKgCIAAAAIARgDIACgQIABgBIgLgLIAAAAIgKATIgGgeIgegDIAbgPIgEgUIABgEIAEAAIACADIAFAEIAIAIIACgBIAPgJIABgGIAAgBIADgOIACgKIgGgDIgWgNIAegDIACAAIADgQIABgCIACgKIAAgCIABgBIAAgBIABACIABACIAAABIAHAQIAEAIIALgBIAIgBIALgBIABAAIABAAIgBABIgFAEIAAABIgDADIgFAEIgHAGIgDADIADAGIADAHIAIAQIgRgJIgLgGIAAgBIgBABIgTARIgDADIAEgCIAFgDIgCAFIgDAGIgEAJIAAABIgEAGIAPAOIAIAHIgHAAIgQgCIgIgBIgDAGIALAIIABgGIAGALIABABIAFADIAMAJIADgBIAPgDIgHAHIgCADIAEADQAZATgFAGQgCACgGgDQgJgFgPgOIgDACIgBABIAOAZIgagNIgDAEIgBABIgNAMIgEAOIgDAKIAAABIAEAEIACABIABgDIACAFIAGAEIAMAJIgNAAIABABIAFAMIAIgBIASgBIAIgBIgFAEIgLAKIgHAFIgDADIABADIAAABIAHAOIAAABIAFgCIACgBIAGgCIAFgCIAAgXIAAgIIAHAKIALAPIARgFIgHgIIgFgGIAIAHIAHAGIAKgDIgFAHIAeAYQAUAQAJAKQAHAKgDADQgCA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APIABgMIACgLIgVgJIAQgDIAEgBIACgBIABgFIABgHIABgFIAAgGIAEAHIABACIABABIAEAIIABADIAUgEIACgBIABgFIANAZIAcgFIgMANIgCACIgGAFIAHANIgKAEIAOADIACAGIgZgNIgNANIgHAHgAl1IDIgOAPIABABIADAFIAAABIAIgBIABgFIACgPIAAgDgAqWI+QgGgHAUgOIARgMIAJgHIgPAUIgEAGQgLAPgHAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAgAoaI6QgHgGAIgEQAHgDAEgDIgDAMQgBAGgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAgAktI3IAHgNIgFAPgADOIZIAAAAIgMgGIgQgHIARgDIANgDIACgKIABgIIAAgCIABgGIAEADIABABIACADIACAFIAAAAIACADIgDAKIAGgEIABACIAHgBIAGgBIACgBIAGAEIgCgFIALgCIgTAUIgCACIABABIADAHIALATIgBAAIgFgCIgIgOIgBAJIgNgGIgCADIgCACIgRARgAC3IsIACABIAAABIgBABgAoOImQgHgGAMgIIAPgKIgHAQQgEAJgFAAIgEgBgAFxIlIgHgLIAIAJIAAAEIgBgCgAF3IiIAIgLIABABQAIAJgGAFIgEABQgDAAgEgFgAnKImQgDgDAEgHQAAgDAEgEIANgPIAAAAIANgMIAAAAIgIAOIAHgDIgCAEIgCADQgQAagHAAIgDAAgArjIjIACgVIgEgBIgBABIgJAIQgHAFgDABQgEAAgBgCQgFgHAUgLIgHgEIAVgEIACgBIADgXIAJARIAEgDIgEAEIACADIANgDIgOgPIAbAGIAAgBIACgEIAAABIABgBIgBgBIACgCIAHgLIACgEIABAGIABABIgBADIABAGIAGgFIAEACIgDADIgGAEIAAADIAAABIAAACIANADIAEABIAKACIgZALIAAAEIACALIAAACIABAKIgPgQIgBgBIgDgDIgCABIgOAGIAGALIgVgKIgBACIgFAFIgKAKgArJIIIgBABIACAFIADgFIAFgKIAAAAgAs6IeQgEgGAXgPQAJgGANgIIA6ghIg0AqIgMAJQgYASgIAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAgAFyIZIgEgIIAEABIAAAIIAAgBgAo+IKQgGgHANgHQAKgFAHgFQgFAHgFAKQgFAJgFAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAFmICIAFAFIgCAAIgDgFgAKkIDIgDgBIAAgMIgGAJIgQgNQgSgRgOgLIAbAOIADgFIAFgHIgNgRIAUAHIAMgRIAAAIIAPAGIAHgIIAHgIIgBAIIgBANIATAIIgUAFIgCAVIgKgTIgNAEIAAAQIgFgHIgIgKIgLAEIAHAEIAKAGQAUAMgEAGQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgBgAKhHRIAEABIACABIgBgBIgFgIgAFsH5IgBgNIAHAGIAAAQQgDgDgDgGgAoFHuIgBgKIgLgDIgMgDIAOgFIAIgDIAAgEIAAgDIgBgKIAAgGIAAgBIAAAAIAFAGIAIAKIACACIAJgIIAEgXIAAAAIgJgEIgDgCIgMgGIAUgDIAGgBIAAgBIACgIIAAgDIgIgBIgBAAIABAAIAJgFIABgJIADAGIAIgDIgDgSIAEgBIACACIAIAIIACABIADgBIADAGIACgJIAHgEIAHgDIgDAFIgEAHIAKANIAUgHIgEAGIgIAMIADAEIAHAKIAEgBIAAAAIAAgBIACgTIAAgGIACADIAIANIAAAAIAEAGIAOgEIAEAHIgDADIgEAEIgCADIACAEIgHAIIALgDIABACIACADIAFAIIgYgJIgLANIgCgHIgDAKIABgWIgMgEIALgJIgKAAIADgBIgOgEIgCADIgGgTIgEAMIgEgBIgBABIAAAAIgJAJIgMgBIAMAJIAEAIIgEABIgLgPIAAASIgBACIgRAGIAKADIgDADIgLAQIAPASIgXgGIgNAUgAnlHAIAJgHIgCgBgAndGXIACAEIABADIABAAIABAAIAAgBIAAgEIgBgCIgDAAIgBAAgAnDGMIABABIAAgEgAp2HyQgFgHAigWIARgLIALgHIANgIIAAAAIgBACIgKAJIgIAHIgQAQQgXAWgJAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgADUHrIAAgDIABABIABACgAmdHqIADgDIgDAEgAIaHjIgBgDIgCgGIAGAAIADAAQAHABgFAHQgCAEgCAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBgAqcHgIAKgHIgMAAIgBgBIASgMIAPgJIAIgGIgGgFIgKgKIgGAFIgIAHIACgJIgVALIAKgUIAFgKIAAgBIgIgHIgRgQIAIABIAdgDIAHgOIAEgSIgFgCIgPASIABgYIgCAAQgEAFgEgHIgBgCIgLgFIAHgBIAQgFIACgYIADAFIAFgDIAFAEIgGADIgBABIADAFIAEAGIAIgCIAPgEIgHAJQgFACAAADIgCADIgBABIAEAHIAJAOIgRgHIANAeIABAAIAWgDIAMgBIgJAIIgLAKIADAAIAJABIgMAHIgEACIAHAQIAEgFQAKgLAMgHIATgLIAJgGIANgIIgPAOIgUATQgOANgLAFIgEADIABAEIgDgCIgQAOIAAADIgCgCIgTARIgCACIgLAKIgIAGgApxG7IAPgKIgTgLgAsAHAIAAgCIgCgHIgBgDIgBgDIgXgCIAUgMIgGgXIASAPIAUgMIgJAVIABABIAGAFIALAKIgEgBIgNgBIgGAAIgBACIgEAJIgEAKgAI4GjIgfgZIgKgIIAvAYQAlAUgFAIQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgJAAgagUgALaGmIgfgYQA/AggDAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQgHAAgTgNgAL7GgIgkgWIAJADIABAAIAeAKQAgALgEAIQgBACgEAAQgIAAgTgMgAM/GZIgWAPIAIgTIACgFIAAgBIgJgGQgHgCgLgHIgdgSIAhAJQAQAEAFAFIAHAAIAKgZIAHAaIAbABIgXAOIAHAagAJYGeIgVgUQAGADAVAIIACABIABABIgFgHIgFgGIANACQAHABABAFIgBACIAAABQgCAFgFgCIAIAGIAEAEQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgEABQgHAAgLgJgArmGeQgEgGASgJIgIgOIgdAHIAMgNIACgCIACgDIAAAAIABgCIgDgFIgEABIgRAEIAIgJIgBgCIADgBIABgBIADgEIgHgLIgEgHIAGADIgFgNIgDABIgOADIgBAhIgGgIIgXgHIgQAYIgBgdIgJgCIgTgGIAMgEIAPgGIgBgQIgQAFIAFgGIANgRIACgDIgNgTIgFgHIAEABIAYAJIACAAIAMgQIACgCIAFgHIAAALIAAAAIAAAIIgBAMIAAABIABABIALADIABABIABgBIAAgBIABAAIAEgFIgBAIIADACIAFABIAHgCIAsgNIgRAKIgBABIAVgDIADgTIABgDIACgKIAEAIIAKAVIAggEIgXAWIACAEIASgGIABABIgRAKIAIARQAEgFALgFIgDALIAGgFIABAGQgTALgDgGQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBIgRgJIgOAMIgDADIAKAUIAEAJIgOgHIgBgBIAAABIAAAGIAAAAIgBAFIAbALIgdAHIgBANIACgBIAjgQIgeAYIgIAGIAAADIgBgCQgLAHgFAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAgAraFaIgGAFIAFACIAEgEIACgCIgEgCgArzFXIAGACIABgBIABgIQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIAAgBIgCgBgAs6E0IAKAMIABgBIgHgMgAsPEyIAAAFIABABIADABIABgBIADgCIgCgGIgGACgArVE2IABgHIAAgBIgEgCIgDgCgArpEtIgBAGIAEADIABgGIACgKIgEgCgAr0EkIgHAEIAAABIABABIAHgFIABgCIgCABgAl2GcIAAAAIAAAAgAtcGYQgEgIA0gUIADgCIAogPIAAAEIgGADIgFACIABABIgKAFIgQAJIgEADQgkATgLAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgALjGJIgBgBIgTgLIgFgCIgMgHIgUgNIgGgDIABgDIAHADIATAIIAUAIIAWAKIAKAFIACABQAQAJgCAFQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgHAAgVgKgAJPF1IgpgdIgDgCIADABQATAKAbALIAYANQANAIgDAFIAAABIgDABQgJAAgbgTgAngFwIABABIAAABgAn0FrIgFgIIgBgBIgEgIIgFACIgTAEIgCABIARgVIgFgHIgKgPIAGACIgRgOIgDgDIgCABIgJAFIgLAHIAFAHIABACIABACIAGAIIADAFIgIgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBIgSgGIgJALIgKANIABgQIAAgFIAAgCIAAgIIgJgEIgKgDIgJgEIAGgBIAOgEIADgBIAGgCIAAgCIABgKIAAgSIAGAIIAIAMIADAFIAMgDIAHgCIABgDIgEgEIgEgDIgOgNIASACIgYgMIgBgBIgCgBIgCADIgBABIgFgHIAIgMIgNAFIgIgMIAAAMIgJgFIgQgIIAZgDIAGgBIABgBIAAgCIABgHIgSgPIAAgBIABAAIAUACIABgIIAEAIIAEgKIAGAEIgDAPIAJgIIAAAAIACAAIAGABIAHAEIgBgEIAMABIABAAIgXAOIABABIAJgBIAMgCIgEAEIgOAOIADAKIgHgGIgBAAIAOAcIABAAIAHABIACAAIACgFIAKgWIAAgBIABACIADAOIACAKIABACIAAABIAAAAIAWACIACAAIAFABIgDACIgBAAIgVANIABAHIAFAVIARAHIAEgFIANgQIgCAaIACABIAXAJIABAAIgCABIgMADIgMADIgBAJIAAAKIAAABIgBAHgAK/FjIgDgBIgDAEIAAgGIgHgDIAAADIgBgCIgDgEIgDgCIgEgCIABgCIgCABIgGgEIgKgGIgQAFQACACgCAEQgCAGgFgCIgEgDIgEgDIgIgGIAMAAIACAAIABAAQAFAAACABIAHgKIgNgHIAOAFIADgEIAEgHIgEgFIgOgTIAJADIgFgCIAKADIAAABIAPAEIARgZIAAAFIABAPIAAAKIACABIgBgJIgBgGIAGAGIAEAEIAFAGIAHACIAVgKIgIAPQAVAJgCAGQgCAEgRgFIgBgBIABABIANAPIgOgDIgNgDIgCAFIgCADIAAABQAOAGACAFIABAEIgBABIgEABQgFAAgKgFgAKyFQIAFACIgBgHIgEgBgAKcFJIAHACIgDgEgAJEFRIgXAJIAOgUIgKgGIgSgOIgLgHIAAgBIAPAGIAJAEIAAgBIAXAGIACgCIAGgJIADgFIADgEIAAAFIAAAKIAAADIAAAGIAFACIADABIAQAEIgLAEIgFACIgEABIgDABIAAAGIABATgAKfFhIABAAIAAAAIgBAAgAKUFbIAIADIgBABIgHgEgAMcE6IgXAAIgIAAIAFgEIAUgNIgGgDIAHACIgEgMIgDgJIgDgJIAKAHIADADIAMAIIAHgEIAPgLIADgDIAAADIgBABIACgBIAEgDIgKgbIAWAPIABABIAPgMIAEgEIgBgIIgHgBIgDAAIgQgCIAWgNIgFgaIATASIATgLIAEgCIgEAIIgHAQIAUARIgagCIgLAYIgDgOIgCALIgDAKIAHAFIABABIAPAJIgcACIgHAbIgKgaIgQAAIgCAHIgCAHIAJAHIACABIAOAKIgUAAIgLAA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IgSgEIABgGIgFAGIgHgCIABgBIgDAAIgBAAIgBgDIAAADIgEgBIgqgLIgRgEIAAAAIgBAAIgGgCIAAAAIAeADIAlAEQA8AHgCAJQAAADgJAAIgLgBgApOC2IACgGIABAFIABABIAAACIAAABIgGAAgAqFCvIADgMIAAAEIACAOgAqyCuQgCgJAPAAIACAAIADAIIgCABIgBABQgGADgEAAQgEAAgBgEgAqaClIAEgIIgGgIIgHgHIAJACIAAAAIAKACIALgRIABANIgCAEIACgBIAAAEIAMADIABAAIAGgMIAHAFIgCAFIgHADIADAAIgSAIIACgGIgNALIgBAAIgBAAIAAABIgFACgApiCRIAAAAIAKgGIAFAEIADAVgAM2CTIgVgFIgUgFIgOgDIAPABIAWACIATABIAGAAQAnADgBAJQgBADgEABIgEAAQgLAAgZgHgApuCBIAGgEIAFAEIgHAOgAuuCKQgCgJAWAAIAbABIgZAJQgKADgFAAQgGAAgBgEgAp3CHIADADIgGACgANKCDIgOgDIgRgDIgJgCIgbgFIAcACIAKAAIAOABIARABQAVABASAEQARAEAAADQgBADgKAAQgOAAghgGgApLCDIAJgFIAGABIgPAHgApxB3IgBgEIADAEgApOB0IAAAAIAHABgAp/ByIAEABIgBACgApzBxIgCgGIAHABIAGACIALgTIABALIADgGIABAHIgFAMgAt7BqQAAgJAEAEIAEAFIgEAFIgCABQgCAAAAgGgAp+BpIAGABIgBAEgAr3BXIABgCIgBgBIgKgLIgZAMIAFgJIgJABIgjAGQgTADgLABQgPAAAAgFQAAgFAKgCIAJgBIALgBIAOAAIAkABIAKAAIAHgNIgKgLIgJgJIAVAEIAGABIAIgPIAEgGIgqAEIgYACIACAQIABAAIAMABIAFABIAQABIgNADIgEAAIgMADIgDABIAAACIgCgCQgVAEgDgGIgBgCQAAgGAPAAIgKgKIgbANIAOgZIABgCIgWgVIAeAFIAAgHIgVgEIASgHIACgBIAAgFQggAAAAgHQAAgHAfACIAAgFIAEAFIANABIAVADIABAAIAKABIAHABIAOACIABgDIAAgBIAAgGIAAgCIABgKIAFAIIACADIABACIACACIACADIATgFIACAAIgCADIgMAOIADAEIAGABIgFAAI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IgFgHIgBgBIgBgBIgFgIIgFgGIAHACIABABIAVAHIAGgIIABgBIAHgIIAEgGIgEAAIgRgDQgmgFACgIQABgIAZAIIgDAJIAJgGIAJAIIgCgHIAOAFIADABIABAAIASAGIADABIAFACIgHgBIgHAAIgMgCIAAAFIAAALIAAABIgBALIAAABIAWAIIAHADIgNAEIgHABIgJADIAAAJIgBAEIAAAQIAAABgAs7h1IgIgTIgMABIgTACIgFAQIgBAAIAAAAIgIgYIgPAAIgDAAIgIAAIANgKIAIgGIgIgYIAVAPIAJgHIAAAAIAJgHIgDgJIAKAGIAUAMIAagXIgIAiIAMAHIANAIIAGgBIAAgDQAAgDAEgBIABAAIACAAIAAgCIABgMIAAgDIADAEIACADIAHAMIAFgBIAQgEIgKAMIAIADIgLABIgBABIADAFIAIANIgUgIIgLANIAIADIgSADQgPADACgJQABgJANAFIAGADIABgRIgQgHIgZACIgFAcIgCAHgAthiJIAFgFIgEAAgAtaigIgBACIAAABIAJAHIABgBIAGgFIgCgEIgIgSgANsiCQAqgLABAIQABAJgrADQgfACgXACQAXgFAegIgALtiBIgCgIIgBgEIgBgBIgXgCIAIgFIgVACIgWACIAkgJIATgFIgBgFIgEgPIAHAHIAKAIIAHgDIgGgCIAIgHQAFgEADAHIADgDIgCAHIgBADQAOgDAGABQABAAAAABQABAAABAAQAAABAAAAQABABAAAAQABAEgHADIgLADIgEgCIACACIgJACIANALIADADIgFgBIgSgBIgBACIgEAKIgCAFIgCAEgAoqh9IAHgDIgCAEgApnifIABgEIgWgKIgEgCIAPgCIANgDIABgJIAIAKIABACIgNASIAVgHIAOASIgBgJIAIANIgPgGIgGgEIgFgCIgEAFIgPAQgAIziQIACABIgBAEgAI3iaIgCAJIgEgPIARgKIgUgBIgDgOIgDgNIANAMIAHAAIgEADIADADIAMgHIAKgHIgGAOIgEAKIADADIAEAEIAEADIAIAHIgagCIgEAKgANEiSIgVgDIAUgHQAPgFABAJQABAHgKAAIgGgBgAIWifIABgCIAAgDIAEADIAAgDIADADIAAACIgCAAIgBAAIgDADIgDADgANVigIgegBQANgDAPgGQAXgHABAIQABAJgVAAIgCAAgAIZisIgCgBIgCgIIADgCIAEgBIABgDIAIgGIADAHIgFAOgArwixIgDAAIgYgBIgBAAIgGgBQgOgCACgHQACgJAUAJIAWAKIACABIABAAIgBAAgAKwjIIgWAKIAMgVIgQgSIAYAFIACgDIAHgLIgFABIgJACIgdAFIAAgDIAagMQAQgGAJgCIAIAAIACAAIACADQACAGgSAFIABATIAYAFIgWAKIACAYgAo5i8IABgBIgBACgApXi+IAAAAIAAABgApijBIABgLIACABIADAEIgBAIgAIhjLIAEAJIgGAAgAuMjWIgEgDIgHAFIgTANIgCABIABgDIAGgPIAFgOIgagVIAiACIAMggIADALIADAMIADAKIAaACIAGAAIABAAIAAABIgJAFIgLAHIgIAFIAIAhgApijMIAAAAIAAAAgApzjPIgBgEIAOAGIgNgCgAMwjQIgFgFQACgBADgEQADgDAAAIQAAAGgBAAIgCgBgAqIjTIAIgFIABABIAJAIIgSgEgAr3jRIAAAAIAAAAgAsXjVQgZgDACgIQACgFAIABIgDgKIgVgCIASgLIAAgCIAAgBIgDgLQgWgFgLgFIAAgCIgBACIgHgEIAAAAIgBgCIAEgEIgGABIAAgCQABgBAEAAQANAAAnAPIAPAGIAGgEIgCAGIAyATIg1gNIgEAIIAAABIADADIANALIgVgCIgFALIAKAEIAdANIgggEgAsjkGIABABIAEADIACgCIABAAIgBgBIgGgHIAAAGIAAAAIgBAAgAq/jpQADgHAnAQIAMAEIgDAIQg1gMACgJgApkjmIAAgEIgBgEIghgHIAfgNIABAAIAAgBIgBgIIgCgZIACACIAHAJIAHAIIAGAHIAEgCIAIgDIAFgCIgJAAIAAAAIAIgHIABAAIACgBIACgCIAKgIIgBgEIgEgLIgDgKIgCgEIAKAHIADACIAAABIAGADIAGAFIAFgEIATgPIAAADIgDACIACAAIgBAEIgCAGIAAAAIgCAHIgBADIgBAEIAYASIgeAAIgBAEIgEANIgEgKIAMgLIgQACIgGgPIgEAQIgQABIAIAFIgMATIABABIAKALIAFAGIAGAHIgJgCIAAAAIgDgBIgVgFIgEAHIgGgIIgBAUIgHACgAMIjiQAUgLADAIQACAJgWADIgcAEQALgFAOgIgAKHjnIABACIgNACIAMgEgAJukBIAEgCIACgBIgLANQgZAHgTAHQAVgJAcgPgAMSj8IgRAJIAJgSIgHgGIgHgHIAQACIADABIAJgSIADATIATADIgRAJIADAUgALkjwIgFgFQACgBADgEQADgDAAAIQAAAGgBAAIgCgBgAookDIAHAFIgDAJgAKNkLIABgEQAQgGACAFQACAEgKAFgAJ7kVIgBgFQgBgFAGAGIADAEIgBACIgGgCgAuCkdIgTgFQgagGgIgGQgEgEABgDQADgIAlASIAQAHIAfAPIgfgIgAItkbIAVgOIAEgCIACALIgCAAIgMAEIAAAAIgBABIgLADgAKPkeIAAgBIAAgGIgEAFIgEgBIAFgHQAEgFADAIQACAHgEAAIgCAAgAHmkxIgDgIIgBgDIgfAAIAYgSIgEgMIgBgCIgBgEIgCgFIgBAAIABAAIAAgBIgHAFIABgDIABgGIACgMIgBAAIABgBIADgLIgRgKIgCgBIgBAAIgEgCIgHgEIAFgBIAQgBIAOgCIACgMIABgGIABgHIgNAAIgKgBIgFAAIACAJIAAACIABAJIgFgFIgEgFIgFgFIgFADIgNAHIAAgBIADgGIAFgKIABgCIgIgIIgHgGIAKACIALABIAJgTIADAVIACABIADAAIAJABIADgCIAJgGIABgDIgFgVIgIACIgBAVIgCgDIgFgJIgEgGIgMADIgIACIAHgIIAGgIIgBgBIgJgQIATAHIABgBIAMgOIgBANIAAAHIABABIADABIgBgDIACACIADgDIACACIgDACIACADIAJADIgDABIAPANIAGgWIgEgDIgJgGIgCgBIgHAHIgBgFIAEgEIgBgBIgCgBIAFAAIAKgFIgGgBIAIgJIgNgBIgCAGIgBACIgHASIgGgXIgBgEIgXgCIgFAAIASgLIAGgEIAAgDIgBgCIgDgNIgCgIIAAgCIACACIAFAEIADAEIAIAHIADACIACgBIAFgEIALgHIAGgDIgEAJIgDAJIACABIgEAEIgCADIAEADIACABIAGAGIAKgMQAQgRAGADIABABIALgLIgBgBIgCgGIgFgKIgMALIgbAWIgBgEIAVgZQAdgjAGAGIABABQACACgEAGIgLANIAQAIIAKgJIAJgJIgCAOIgCAKIgBACIATAKIABgBQANgOAJgHQANgKADAEQAFAFgTAQIgSANIghAYIAAACIgBgCIgKAIIAAADIABAFIAAAKIACAAIAJACIABABIAJACIAFABIAIACIgQAHIAAAAIgBAAIgNAGIgCAAIADAjIgRgTIgGgHIgCAAIABADIgCgCIgSAIIgEAHIALAJIACACIABAAQALgHADAEQABACgEAFIgDAEIAGAEIgLAAIgJAGIgTAMIAdgDIgVATIgEAEIABABIABAFIAEAIIADACIAIgDIgEAHIACADIgEgBIAAABIABADIACgBIgBADIABAEIgCgCIgCAHIAJALIgLgDIgDAKIAaARIgfABIgEANIgFARgAHnlcIAAgDIgHgCgAH7lnIADgCIgBgBgAHclvIgHAGIACACIAKgEIAEgBIgCgHIgCgBgAHxmmIAJgIIgGAAgAHon2IANgBIABgCIgFgFIgJAIgAIaofIgIABQgEAHgOANIgCACIAGAOIAPAEIAIgOIADgFIAHgLIABAQIAJgJIgKgUgAH2oBIgEADIAFABIABgGIgCACgAI1ojIgDATIANgNIACACIABgEIAEAAIgDgCIAFgFIgFABIgGABIAAAAgAILkhIgIAAIAFgFIAHAFIgEAAgAJTkyIAGgBIABAAIABAAQAAAAABABQABAAAAAAQAAAAABABQAAAAAAABQACADgFAEQgEADgJAEgApNkmIgFgBQgMgCAEgHQAEgIAJAIIABABIAKAKIgLgBgAs0kxIgDAAIgIgDIgKgEIgDAEIgEAFIAAgFIAAgGQgKgEgFgEQgEgDABgDIABgBIgCgBIACAAIARgGIAAgVIAMARIAUgGIgMAQIAMARIgHgCIAoAWIglgMgAINksIABgBIACABIABABgAq/lAQgjgNAEgIQADgHAaAPIAHAEIACABIAmAXIgtgPgAp3lEIgBgBIgIgDIgHgDQgLgFgEgEQgGgFACgDIABgBIgIgWIgLABIgTAAIAYgSIAAgBIgIgYIgCgEIACACIAOAKIAJAGIAEgDQgJgHgBgEQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAIABgBQAEgDAPAKIAKgIIgBACIgDAKIAOAKIAIAHIANAKIgEAEIgCgBIgVgMIgLgGIgCAFIAHAFIACACIANAJIACABIgBAAIAAABIAEAGIgBACIgRgIIgHAAIgHAAIgCAGIgFAPQAIAAASANIAIAGIAZASIgdgLgAJalDIAAAAIACgBIATgNIgDgXIgFgBIAAABQAFAHgJACIgMACIAGgKIACgDIgRgDIAJgFIgEgBIAKgEIAHgDIAFgCIAAgBIgBgJIgBgFIgBgKIgCgIIgSgDIgBAAIgJgBIAZgNIgDgSIgCgJIAHAGIADADIAMgMQAHgIAFABIgEgDIAHAAIAVABIAJgbIAIAbIAcABIgXAQIADALIAJgLQAKgMAFAHQAFAIgPAFIgNAFIAEAOIgWgRIgUANIgDACIABgDIAIgWIAAgBIgIgGIgFgEQACAFgJAEIgFACQgJACgHADIAIAHIABACIAZgNIgDAGIgFAKIgFAJIAPAOIACACIACgDIAIgIIADgDQAMgMAFAHQAEAIgQAFIAAAAIgJADIgJADIADADIgbgEIgEAIIAMAPIAZgMIgBACIACgBIgOAXIgBABIALAMIAhgVQAmgZAFAIQAEAIgrASIgjAPIACACQAGgBABADQABACgCADIAAAAIgDADIAAAAQgHAFgRAIIgCABIgIADIgXAKIgDABgAJ3lWIAKgGIAKgFIACgBIgEgBIgBAAIgFACIAEgCIgHgBIgBgBgALdlhIAGgFQAZgRAEAIQAEAIgcAKIgKAEIgaAKIAZgSgAIwlUIgJgNIgHgLIAAAAIgEABIgEACIgUAFIASgWIgHgLIgGgJIgDgFIAIADIAUAIIANgRIAEgGIAAAFIgBAYIAJADIAPAGIABABIACAAIgLAEIgEABIgNADIAAARIgBALIAAABgAsllwIgRgHQgsgRAEgIQADgIAkAVIAGADQAlAYANAHgAnrltIADgKIAAgBIADgKIAAAAIAGAMIgDACIgIAGIgBABgApYlxIAAgDIAIAHgAnTmAIgLAJIACgMIAPgBIgNgIIADgOIgLAKIgMgIIADAJIgRgMIAegBIABgEIAIgaIADAJIABABIAGATIARAAIAOgBIgKAIIgIAGIgGAFIAKAdgAHImDIABABIgJAGgArhmKQgWgHAFgIQAEgIARAPIAWARIgagJgAr+m5IgFgDQghgSAEgHQAFgHAjAaIAEAEIABAAIAAAAIAmAdIgxgYgAFFmsIACgJIABgCIAAgDIADAAIgCgCIABgEIABgFIgJgGIgEgDIgDgCIACgIIAMgBIALALIgHANIANgHIALAKIgCgPIAMgHIgOgBIgDgPIgGANIgPgCIAHAAIAJggIALAcIAAAAIgIghIADACIAIAHIAPANIAJgFIAUgMIgHARIgBACIgFAMIASAQIACACIAFAEIghgDIgBABIgDAJIgFALIADAJIgGgDIgCAFIgBgIIgEgCIAAgBIgBABIgMgIIgCgBIgHAGIgJAHIgEAEIgFAEgALrm6QAMgLAEAIQAEAIgQAEQgMABgIADQAHgFAJgIgAJAnJQAIgJAGgDIAAADIAEgEQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIAAABQADACgCAEQgDAFgOAIIgBABIgDACIgXANIAVgYgApmnEQgKgCAGgHIACgBIAFgBIADAEIAGAKIgMgDgAJbnLIAfgdQAfgcAGAHQAEAHgfAUIgEACIgLAHIgQAJQgEABgFAEIAAABIgJAFIAIgGgAoUnPIgCgCIgKgIIgJAFIgDACIgIAEIAKgVIgSgPIAXACIABgBIAEgKIAEgJIAEASIABADIAAABIALABIAMABIgIAFIgMAGIAFAWgApgnPIgTgTIgIAEIgSAJIAMgXIACgDIgFgEIgDgEIgDgDIgEgEIgFgGIAKACIABABIAIABIgJgGQg4grAGgHQADgEAWARIACACIABABIAAACIABgBIAcAZIANANIAMgXIAEAdIADAAIAJACIgFgOIgCAHQgFgFADgEQADgDAHAEIADACIANANIAaAcIgggUIgCgBIgCAAIgRAIIABAFIADAWIAAACgApVn4IAJABIADgCgApfnnIACgCIAFAEIAWAUIgdgWgAExnWIgCgBIACAAIAEAAIgDACgAk/nwIgFABIgJACIgFABIADAEIgJgEIgDgBIgDgIIAFgFIAFAJIAAABIABACIADgDIAHgHIAEADIgCgGIABgBIgCgDIgBgGIAGgEIAGADIABgCIAEgEIAGgGIAEgFIgBAJIgCANIAOAHIAHACIgEABIgKACIgIACIgCAWgAlvnkIAIgJIABABIgKAKgALJoFIADgCQANgMAGABQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABQAEAGgQAJIgIAEIgBABIgfAPQAFgDAVgVgAFvnyIAQgWIADAEIgEADIgOAPIgCABIABgBgAGJn3IgGgPIgBACIgBgGIgFgLIgEABIgBAEIgBAGIgDgIIgBgCIgLABIgCABIgDAAIgIABIA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gJgEIgIgFIgEgCIgHgEIgBAAIABAAIAhgFIAEgSIABgGIAAgDIAAgBIABgGIADAGIACAFIABABIAJATIADAAIABAAIAWgDIAFgBIAEAAIgDADIgHAGIgIAIIgEADIAAABIgDACIALAYIABABIADAHIgQgJIgCgBIgJgFIgBAAIgDgCIgGAHIgSARgAHHpHIAAAAIABgHIACgLIgDgBIgBAAIgHgEIgKgGIgBgBIABAAIAIgBIAPgCIAEgTIgKAKIAQgeIAGgJIgIgBIAagPIgFgdIAVAVIAHgEIgFgLIAMAHIAMgHIgFALIABAAIAQgQIgCAPIAAAAQAEAEgDAFIARAKIgXADIgCAJIAGAGIgHgBIgBAIIgEgIIgJgCIgEACIAGAVIgPgMIgHAPIgDgMIgKAHIACgFIACgFIAEgKIAAAAIgFgEIgEgBIgBACIAAgBIgCAEIgFAGIgLgDIAGAHIgLALIAJATIASgCIAHgBIgIAIIgKAJIAFAKIADAHIADAFIgFgCIgDgCIgEgCIgGgDIgEgDIgLALIgEAEIgDACgADjpVIAEgMIAIgVIABgBIgCAAIgNAAIAIgGIAMgIIABgCIgGgSIgCgGIAEADIAJAHIAGgNIADgIIADgFQAEgIAEgBQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAIABACIABAEQgBAJgMAYIAQgNIgIAYIADACIAEADIAFAEIACABIAHAFIgIAAIgBAAIgMAAIgFAAIAAACIgHAXIgCgFIgCgGIgBgFIgCgEIgBgFIgCAAIgBAAIgDAFIgMAVIgHAMIgEAJIAFgMgAl6pRQAFgCACACIgLAGQgBgDAFgDgACjprIAHAGIgJAUIgCABIAEgbgAEcpiIAIgDIgCAEIgGAKgAgkp+IgBgCIgGAAIgUgBIgCAAIgFgBIAEgCIADgCIAGgEIACgBIAMgIIABgBIgEgNIgFgSIADACIAGAFIAIAHIAIAGIAIgFIABgBIAGgEIAFgFIACgCIgEgIIgHgRIAGADIABABIALgIIADgCIgBgEIgFgRIAAAAIAAAAIAHAGIAHAFIABABIAAgBIAAgHIgHgCIgIgDIAAAAIgCgBIADgBIAEgCIAFgBIAFgCIAAgDIAAgHQgCgRAFgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAEABABAEQACAFgEANIAAACIADAFIATgGIgIAKIgEAGIAIAMIADAEIgDgBIgIgDIgDgBIgCAFIgCAGIAKAIIACABIAAABIAFADIgFAAIgBAAIgNAAIgEAPIAQAJIAIAFIgaADIAEAHIgGAGIgBgEIAAgBIgBAIIgCAIIgBADIgBgCIgBgEIgJgSIAAgBIgGAAIgEALIgBADIABAAIAGAGIADADIACADIAEACIACACIAFAEIgFAAIgHAAIgBAAIAAAAIgRgCIgHASIAAABIgFAMgAAArAIAHAFIAEgEIgCgEIgIAAIgBAAIAAAAIgEAAgAmnplIABgEQAEgIACAFIACAHIgFACIgCAAIgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAgABppoIAAgKIgBgRIgQgFIgJgCIgDgBIgCgBIACAAIADgBIADgBIANgFIAJgDIAAgKIgBgPIAAgHIAFAIIAFAFIABACIADAEIAAAAIAFAGIADgBIAMgEIAGgCIAFgDIAFgEIAJgGIgFgRIgEgNIAKAIIAIAGIAGAFIADgCIADgCIAUgOIgKAdIAZATIggAAIgCAHIgEAMQACACgBAGIgFAPIgDAHIgJAAIAAgDIAAgDQAEgTAFgFIAAAAIAAAAIgBgEIgBgCIgEgOIgCAAIgJAAIgIAAIgCAAIgDAEIgJANIAGAIIABACIAAAAIABABIAHAKIACACIACACIgEgBIgBAAIgMgEIgMgDIgBgBIgCADIgOAUIgCADgAkuqEIAFgBIgHgCIgCgDIgFgKIgBAAIgEAKIgBABIAAgBIgBgFIgGgYIgWgCIAAABIAJAaIgEgEIAAAGIgOgYIgEgIIgFgKIgCgFQgCgJAEgCQAHgDAJAbIANgIIgRgdIgOAEIAJgNIgDgFIgEABIADgDQgLgXAHgDQAGgCAIAUIACgCIgSgYIALADIgQgdQgOgbAJgDQAIgDAHAeIAHAhIAJACIgHgQIAWANIAPgVIAAAOIAJgGIADgDIgCAJIgBAAIABABQAFACAHAVIABACIAKADIgJADIABAEIAFASIACgBIgBADIABAEIACAIIAEAQIgJgSIgBgDIgBACIgIARIARAOIAHAGIAAABIAAAAIgCAAIgBgBIgcgCIgBABQAEAHAFAPIAKAlIgQgbgAlXrWIAKAfIACgBIADgCIgBgEIgGgbIAEADIgDgEgAk7rhIABAOIAAAMIADADIABgBIATgLIgJgSIgBgDgAk4r2IAEADIgCgIgAEdpwQAFgGAEABQADACgCAGgAm5p2QgGgEACgEIADgDQAIgEACAKIACAOIgLgJgAmhp3IABgGIADgSIgbgOIAegEIAFgeIAMAZIABACIANgBIAFgBIgDgHIgBgBIgKgQIgEgHQgWgkAIgEQAIgDAPAmIAEANIAFANIABAEIACAFIAKgBIgIAHIACAFIABADIgCgEIgCgDIgBABIgMAMIANAbIgDgCIgKgFIgOgHIgVAWgAkHp4IABAAIABADIgCgDgAkTqJIgFgKQgCgGADgDIgBAAIAUgFIABgVIALARIABAAIATgFIgNAQIgBAAIAMARIgSgHIgBAAIgKALIgCACIgBACIAAgFIAAgBIABgOIgCAAIgCgBIgEgCQACAEABAHIAEARIgDACIgKgPgAoBqaIgLgNIgMgPIgEgEIgBgBQgUgagFgLIAHgBIAHANIACgJIAOAVIAFAIIADAEIALATIAHALIAUAhIgXgdgAFYqwQAPgeAHgDIAAAAIABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIAEADIADgFIACgGIACgDQATgpAIAEQAHAFgYAiIgCADIgFAIIgEAFIAEAEIAHgFIAOgJIgFAPIgDAIIAEADIAPALIABABIgCAAIgRAAIgGAAIgJAXIgHgYIgQAAIgEAGIADgGIgIAAIANgIIAGgNIgCgFQgEAJgNARIgfAqIAWgvgAFzq3IADgCIgBgBIgCADgAitqOIABgJIgDgCIgNgFIAAgBIgEgBIADgBIABAAIAJgCIAIgCIACgQIABgFIACADIAJAQIADgBIALgCIAHgCIgOAPIgBABIABABIABADIAJAPIAAAAIAAAAIgUgJIgLANIgDADgAAUqJIAAgCIADgBIgBAFIgBACIgBgEgABSq2IACACIgBgIIAAgEIAJgFIgJgBIABgEIAAgEQAFgsAIABQAJACgNAvIgJAkIgHAXIAFgpgABEqUIADgBIgEgBIAAgDQgCgKAIACIADABQAFACgFAHIAAAAIgHAKIgBgHgAG9qnIAFgLIABgDQADgEACgBQADgBADACIACADQACAEgJAHIgBABIgIAFIgGAEIADg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");
	this.shape_44.setTransform(0.2,-0.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFF03B").s().p("AggPmIgHgEIAJgBIABgJIADAIIAIgBIgFAFIAEAIIgIgEIgGAGgAhGPPIgCABIgBAAIgHADIAFgHIABgCIgHgHIgBgBIABAAIAKACIABgCIAFgIIABALIAKACIgJAFIAAALgADTPDIgIAEIADgIIgGgGIAJABIAEgIIABAJIAKABIgJAEIACAJgAhDOnIgBgBIgPABIAIgHIAHADIgEgGIABAAIgHgPIAPAIIAJgIIADgCIgBADIgDAMIAKAHIADACIgPABIgFAQgAAJOpIgCAAIACgCIgBgCIACABIADgCIgCADIADABIgDABIgBACgAiiNZIgKgDIgCgBIADAAIAJgDIAAgKIACACIAFAGIAAAAIACAAIAEAEIgCACIACADIABACIgCAEIgGgDIgHAJgApSNOIgQgIIARgCIADgRIAIAPIARgCIgMAMIAIAPIgQgIIgMAMgAEENZIgDAAIACgCIgPgEIAKgEIAFgCIAAgRIAKANIAAAPIgJACgAANNKIAAgEIAAAAIgMgDIgEgCIAEgCIAKgEIACAAIAAgOIgBgGIAEAFIAIALIASgHIgLAQIABACIALANIgPgEIgEgBIgJAOIgCABgACTNEIgKAHIgCABIABgDIAFgKIgIgHIgDgCIACAAIAMABIAAgBIAFgMIADANIAOABIgMAIIAEANgAEWNGIAHgDIgDAJgADuMfIgKACIgDABIABgEIAHgHIAAgCIAXAEIgDgCIAIADIAAAAIgOADIgCAPgAkUMaIgJABIgEAAIAIgGIACgCIAAgBIgFgMIAIAFIAEACIADgDIAFACIgCAGIAKAGIgBABIgLABIgBAFIgCAHgAhkMVIABACIgCABgAI5MIIgJgFIALgCIACgKIAEAKIAKgCIgHAHIAEAKIgJgFIgIAHgADzMNIAHgIIgBANgAhbMOIAAAAIAAABgAnlMGIgEABIADgEIgCgDIAEACIADgDIgBAEIAEACIgEAAIgBAFgAkIMGIACgBIgBADgACRL1IgHAFIADgIIgHgGIAJAAIADgIIADAJIAJAAIgIAFIACAJgAH0LqIgQgEIAPgGIgCgRIALAMIANgGIACgBIgCADIgGAMIAMAMIgRgDIgIAOgApnLuIgJABIAGgGIgDgIIAIAEIAHgFIgDAIIAIAFIgJABIgCAIgAg/LNIgBggIAGggIgCAyIAAACIgBAYIgDALIABgXgApELQIgTAAIAPgLIgGgSIAQALIAQgLIgGARIgJACIAWAJIACABIgTAAIgHASgAI+LcIgEAAIgCADIAAgDIABgLIgCgBIADgSIANgBIAHAHIgPgCIADAFIAOgCIgJAKIAHALIgMgFIAAADIAFACIgGABIgBAGgABGLYIADgEIABgBIADAEIAAAAIgBAAIgEACIgDABgAD4KtIgEgQIgFgVIACAAIAGAPIAJAVQAGAPACAOIABAEIgFgHIACAQQgGgGgIgjgABXLQIADgBIACABIgFADgAI1LQIgBgBIABACIAAABgAApK7IAAgFIABgCIAHACIAAAAQADAbgHAAQgHAAADgWgAItLMIAGgBIABAEgAiHLCIAGADQgDAFgCAAQgCgBABgHgAAPLCIACgCIAAACIAAAFQgCgBAAgEgADWKbIgCgPIADAAIADAEIAEAJQAFAOACANQACAMgCAAIgBAAQgFAAgJglgAiFK4IAIgBIgBAFIgIABIABgFgAI9KxIABgDIAJgGIABgBIAAACIgGAMgAArKsIACgWIAEAegAiBKsIAEADIgHAFIADgIgAgmKzQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBIADACgAACKyIgBgKIAHACIgBAFIgBADgACqKiIgBgCIAAgKIAIANQAGALgHACIAAAAIgGgOgAIsKpIAAgFIAGAGIgBABgAgpKqQgBgLAFgXIAAgCIAJg1IgCA2IAAABQgBAQgCAOIgBAFgAA+KWIAAgBIAFgMIACATQgBAJgDABIgDgQgADEKgIAAgDIAAgDIAAgOIAIAMQAFAJgHACIgCAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAgBgALZKaIgJACIAGgHIAAgBIgCgCIgBAAIABgBIgDgFIAJAEIAGgIIAAAKIAJAEIgJACIgBAKgABIKfIgCABIAAgCIgBgCIACAAIABgCIABACIADABIgDABIAAACgAENKWIgCgCIgPAKIAHgRIgFgDIgEgEIAAAAIgDgCIgDgCIASABIAHgRIAFARIASABIgPAKIAEASgAAAKcIAAgGIAGgrIAAATIACAZIAAAGIgIADgAh+KgIACgIIAAgBIAEAJgAhYKaIABAEIgDAAgAFVKYIABgBIAEAHIgFgGgAFeKaIgCACIgBAAIABgCIABgBIAEACIAAACgABtKbQgCgEgBgHIgBgMIAAgBIAAgCIAHgBIABACIAAABIADAQIAAAGQAAAEgDAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAhlKNIADgMIAFANIANgBIgGAFIABgCIgMAJgAh7KTIANgmIACAAIgHAiIACAAIAAAAIABAAIACAAIgBADIgDgCIgBAAIgCAIgAigKWIgCgBIgBgDQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIAIgFIAAAHIgDAHIgEgBgAoQKWIgDgDIgDACIACgEIgEgDIAFABIABgEIABAEIAFABIgEACIAAADIAAABgAk7KBIgDgDIgEABIgCABIgKAEIAFgJIACgCIADgEIgLgNIAJADIABAAIAHACIAIgRIgCAHIAEgFIAAACIAFgNIADgHIADgGIABAAIACAGIgDAIIgCAFIgJAUIAAACIgHADIAVAGIAAADQAAAAgBAAQAAABgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgEABIgFACIAAARgABPKGIAAAAIAAgKIAAgCIgDAAIgMgDIAMgFIACgBIAAgCIgBgCIgLAEIAEgHIAFgHIADgEIgCgCIgBgBIgCgCIgDgEIgGgHIAJACIADABIAJACIALgSIACAUIAAABIAFACIAPAEIgKAEIgHADIgDABIAAACIAAABIABAAIgBACIABAHIAAAJIgFgHIgBgBIAAABIgBACIAIAJIABACIgCgBIgMgDIgCAFIgEAFIAAABIgCACgABTJqIADAEIACgBIgCgEgAAjKCIABgDIABgLIgGADIADgGIgBAAIgMgGIAOgDIgGgIIALADIACgOIAJARIAGgBIABAAIALgDIgHAHIACAAIgDABIgBACIgFAEIAJAQIgRgIIgJAKIgDADgAC5J8IAAgCIgBgBIABgCIALACIgFAHIgBgBIgDACIgHADgAj4J5IAAgIIAEgHIACABIAFAKIgFAAIgCANgAEqJsIgBgGIgGgYIANAYIABADQAMAWgGADIgCAAQgGAAgFgWgAFFJ+IgDgKIgCgHIADAGIAGAKIABADIgEAAIgBgCgADtJ/IgCgGIADAGgAhJJ2IgDgJIgBgCIgNABIgGAAIABAAIAOgLIgFgPIgCgDIAEACIAEADIgDgDIgHgJIgDgFIgLAEIgBABIgCAAIgGACIgCABIABgCIADgCIAFgIIAEgFIABgCIgBAAIgMgPIgCgDIACABIAOAEIAFACIABAAIANgTIAAAWIABAAIAAAAIACABIAEgPIAEgQIAFADIAAABIgBAOIgCAKIAFABIAOADIAMgVIACAXIAEABIARAEIACgJIACAYIABAFQAAAOgHAAQgEgBAAgFQAAgFACgIIAEgOIgSAIIgBABIAAABIAAAEIANAHIgKABIgCAAIACAKIgJgJIgCAAIgCAHIAEAIIgFgDIAAADIgBAGIgHgOIgBgBIgJAIIgBABIALAHIACABIAEACIgOABIgFAAIAAAAIgCAGIgCAHIgCAFgAhQI+IABAPIAAAIIAHAEIAAAAIAHgFIgGABIgDAAIAEgEIAEgDIgDgBIgFgEIAGAAIAGgBIACgDIgBgBIgFgLIgEACIgDAMIgBABIgDgLgAhFI0IACAAIACABIgBgCIgCgCIgBADgABnJ5IABABIAAABgAMQJ4IgDABIACgDIgDgDIAEABIABgEIABAEIAEABIgDABIABAEgABoJvIADgBIACAGIgEAGgAigJ4IAAAAIgBAAIACgIIgDAHQgEgDAFgIIAHgMIABgCIAAAEIAAAMIAAACQAAAIgFAAIgCAAgAkCJyIABAEIgGABgAjjJ1IgBgBIAAAAQgCgCACgEIAHACIgFgHIAFgMIAJgBQgHAagHAAIgBgBgAjqJxIAGADIgHABgAkmJpIAAACIgBAAIABgCgAniJqIAAgBIAAACgAniJpIgBgHIADABIgCAGgAL5JaIgCAAIgMgCIALgFIACgBIgCgPIAIAJIACACIANgHIgHANIAEAEIAGAGIgIgBIgFgBIgBAAIgHANgAhqJeIgBAIIgBABIACgJgAkfJfIACgIIADgFIABgBIAGgLIAGAAIgGAPIgDgBIADADIgBABIgDAIIgDABIACABIgBAEgADMJZIABABIABAGIgCgHgAq1JbIgDABIACgDIgCgDIADACIACgDIAAADIAEABIgEABIAAAEgAntJdIgDgBIACgBIADACgAE5JLIgGgXIANAUIABABIACAFQAFAKgFADIgBAAQgGAAgDgQgAA1JXQgCgIACgOIABgkIAHAkQACAQgBAHgAD5JVQgDgFgEgKIALgBIgGgEIgEAEIABgGIgEgCIgBgDIgDgMIgDgCIgHgCIAIgCIAAAAIAAgBIABgGIAEAGIAGgCIACgKIAAgJIAIANIACADIADAAIABgBIAAAAIALgCIAEgBIgCACIgLANIAGAIIAFAIIgQgGIgCgBIgBABIgFAGIADAIQADAHABAFQABAFgEABIgBAAQgCAAgCgCgAD1IzIAAgCIgCAAIACACgADNJVIAGgIIADAKgAjYJTIAPgcIgJAfgAnmJJIAJAKIAAAAIAAABIgHABgACTI3IACABIgDgEIAAgBIgCgdIACgCIAIAeQAJAhgGABIgBAAQgHAAgCgdgArRJSIABgMIgOgFIALgDIADgBIAAgDIAAgKIAGAHIACAEIALgDIACgBIgBABIgHAJIgBABIAFAHIADAEIgHgCIgGgCIgHAJIgBABgADJJLIgBgCIAIgBIABAAIAAABIABADIgIADIgBgEgAC+JMIgBgDIgBgDIAAgCIgEgJIgMABIgKABIAIgHIABgBIABAAIAHgGIgJgUIAGAEIANAIIAEgDIACgCIABgBIAJgIIgDAMIgCAJIASALIgQABIgFAAIgBAFIgCAKIgCAGgAEiJDIgBgDIgEgNIAIgBIACAFIABgFIAAgGIgSgJIAJgBIAIgCQgCgDgEgHIABgEIAIAFIACgNIAKATIAVgFIgPAQIAEgDIAIAFQAIAOgBAFQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgCABQgDgBgEgIIgQgHIgKALQAHAPgEADIgCAAQgEAAgFgLgAlNJNQgFgDAOgVIgBgIIgEgBIgNgDIAJgEIAHgEIAAgGIgBgJIgBgCIADACIAJALIALgFIACgBIAMgRIgJATIgFAIIgBgBIgBADIABADIgBABIABACIAJAKIgGgBIgGgCIgCAAQgOAegHAAIgBgBgAIVI/IgBAAIAEgGIACgBIgBAEIADACIgEAAIAAAEgAl3I7IgKAFIAFgKIgIgHIALABIAFgKIACAKIgCAIIAHgHIAFABIgJAFIACALgAFrI6IgKgbIAIAOIAHATIAAABIgFgHgAHDI3IAPgOIAIAEIgNADQAGALgCACQgDACgFgGIgBAGgAkMI7IANgWIgHARIgCgBIABADIgCAFgAH3IwIACABIgCgEIAGACIgEAJgAHAIxIgPACIALgKIgLgRIgMgWIgFgHIgBgBIgDgGIABAAIAHAHIAUAZIAKANIABAAIAEgDIACgCIgGAagAp2IwIgEACIADgEIgEgEIAFABIAAgBIACgDIAAAFIAGAAIgEACIgBAAIABAFgABHIYIgVgIIAVgGIAAAAIAAgBIABgWIACAEIACAHIACgDIADAGIAEAFIAWgGIgLAQIgDACIABACIAIAMIAEAGIgWgJIgOASgAHsItIADgCIAEADgAj5IaIgIAFIgGAEIAEgLIgOAEIAMgQIgJgJIgBAAIABAAIAGAAIgEgFIgCgEIgJAVIgGALQgGAKgEAEIgGgFIAEgJIAKgQIAPgTIALgPIgIAQIAFACIAEABIAJADIACgCIgDACIAGgVIgQgJQgHAOgGgDQgFgDAJgMIgTgDIgJATIgEgVIgVgDIASgIIABgBIgBgEIgBgJIgBgIIAAAAIAAAAIAOAPIAIgEIALgGIgHAOIgCAEIgBABIAOANIADgEIAQgWIgJAZIAAAEIASgCIAEgWIAEAJIAKgTIAQgWIADgBIgLAbIgBACQgHARgGAHIAJAAIAOgCIgRAPIAFAKIAEAJIgTgLIgCACIAAASIAQAGQAEgLAKgTIADgEIAFgCIgBgOIgDAAIgDgBIgIgCIAHgDIAHgCIgBgIIAAgGIADAEIACADIAEAEIAMgFIgHALIAJALIgNgDIgHALIADgBIgEALQgRAqgGgDQgCgCABgHIgKADIgCABIAFAUIgIgGIgBAJgAH0IlIgDgIIAFAEIADACIgFACgAICIdIgBAEIgFACgADoIdIAAgEIACAGIgBACIgBgEgADBIdIABACIAAABIAAABIgBgEgAEPIMIAIAQIgBACIgHgSgAgJILIgHgCIgCgBIgFgBIADgBQgBgDACgHIABgGIgJgGIgFADIAIgRIgBgBIABgGIAEACIgDgGIAEAAIABgDIAEAFIgBgJIAGAAIABAIIARACIgOAKIACAKIAMAAIgKAJIABAHIAJgDIgIALIAJALIgLgEIgIALgAgLH+IABAFIABgBIAAgFgAgPHuIABAAIACgCIgDgDIgJAFIAIAAIAAgCIABACgAHFISIAFADIAAACIgFgFgAKqISIACgHIAAALgAEfIQIADACIgCABIgBgDgAHvIQIAHgGQABADgCACIgDABIgDAAgAD3IIIADACQAEADgEACgAKiIJIgQAFIAIgM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IgDABQgFAAgFgKgAqlHPIgDgCIAFAAIADAAIgCAEgAG9HBIAMAKIgDADIgJgNgAqgHNgAgOHLIADgGIABAIgAivG1IgEAAIAAAAIgMgCIgHgBIAJgFIAEgCIAEAFIAAgGIABgBIAFAFIgEgQIACgCIAGgBIAHAFIAUgLIgKAVIARARIgYgEIgKAWgADhHHIgBgKIAHADIgCAEIgEAGgANDG4IgNgGIAOgDIADgOIAGANIAPgCIgKAKIAGANIgMgHIgLALgAkPGxIgSgCIAQgJIgEgRIANAMIAQgIIgDAHIgDgEIABAIIgCAFIACACIgNAFIAOADIAAABIgJgBIgIAQgAKCG1IgOABIAKgJIAAgBIgGgNIANAHIALgJIgCALIgBADIANAHIgPACIgDAOgAEwG9IAAgJIAHAFQAGAEgGAEIgEABQgDAAAAgFgACqG/IAEAAIgFADgAEnGwIgGgBIgLgBIAIgFIAHgDIgEgRIANAMIAGgDIAJgFIgHAPIAMAMIgHgBIgKgCIgIAQgAEUG+IgHgMIAAgBIAHANgADgGzIAKgMIgPAEIgEgGIABgBIACgBIAAgCIgDACIgBAAIAAABIgDgGIgCAQIgHACIgEgBIgBAAIABgBIAKgGIgFgHIgJAEIgKADIAGgJIAFgHIgDgEIgFADIgBABIABgCIACgGIgHgIIAJACIADgFIgPgNIATACIADACIgEANIALgIIAMAIIgFgNIALABIgFgFIADgDIAJABIACgHIACAHIADABIAJgWIAFAXIAFABIACAAIAFABIABAAIgCAIIgGADIACABIgDACIAEAVIgLgJIgEAKIAAACIACAGIgEgDIAFAGIgPADIAPAHIAAADIAAAAIgIgBIgGgBIgDAHIgCADgADzGmIACADIgBgFgADWGdIAAAFIADgGgADoGYIgCACIACACIADgCIgCgBIgBgBgADzGRIABADIAAABIAFgCIABgBIgDgDgADWGLIAHAHIABgDIgIgGgADeGDIAFAAIACgEgAENG8IAAgBIAGADgAlmGuIgDgFIgLADIgCABIgLACIAHgIIAEgEIAFgGIAAgBIgCgDIgEgGIgHgLIASAHIAAABIABAAIABAAIACABIANgQIADgDIAAAFIgBAUIAMAFIAGACIAEACIgIACIgDABIgNADIgBAYgAIMG7QgCgBgDgCI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BABIgDANIgBACIATANIgWABIgGAXgAOQC8IgFABIADgIIgEADIACgDIgDgGIAAAAIgEgFIADABIgDgBIAFgBIAAgBIAAgDIACAEIAAAAIADgBIgBABIgBACIABADIAEABIADgEIAFgFIAAAGIgCAHIAMAFIgNACIgBANgAKuDFIgDgBQgLgDgQgHIgCgBIgFgBIgSgIIAAgEIAbAGIAGACIAAAAIADABIgDAEIALgCIAKADIAHAMIgGgBgAoHDDIACgDIABADIgBACIgCgCgApBC1IgHgDIgGgEIgBAAIADAAIAGgBIAGgBIABgBIgBAAIAAgBIABgDIgBABIgBgFIgDAHIgCAAIgBgBQgBgFALgDIAAgDIABACIARgEQAagEALgDIgiAPIgPAGIAAACIAQgCIgMAKIAFAKIABAEIgHgFIgFgDIgCACIgBAAIgJAIgAusC8IgCABIgEAAIAEgEIgDgFIAGACIADgEIAAAGIADACIACABIgFABIgBAFgAoKC9IAAABIABAAIgCABQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAgAokC7QgBgDAHgEIABAJIgBAAIgCAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAgAoeC0QAJgFAUgGIAhgKIADABIghAQIgGADIgUAIgAsRCuIgGADIABgCIACgEIgFgEIAHABIADgGIABAGIAHABIgBABIgGACIABAHgAOsCvIgCgDIgEAAIAEgDIgCgFIAFADIADgDIgBAFIAEAEIgFgBIgBAEIgBABgAHHCrIgGgJIgQAEIAMgMIgFgIIgCgEIADAAIADABIAHADIABgBIADgDIAHgJIgBALIgBAGIAQAGIgGACIgLACIAAADIgBAHIAAAHgArFCjIgHADIAAgHIABgCIAAAAIgBgBIAAgIIAFABIAFgHIACgFIACAOIADABIABAGIgEABIACAOgALPCrIgEAAIgEAAIgHAAIgCgBIABAAIAMgIIABgBIAAAAIgBgEIgDgJIgBgCIAEABIAEADIABAWgApdCoIAAgEQAAgHACADIADAEIgDAEIAAABgANCCfIgHAEIADgHIgFgFIAHABIACgHIACAFIAAABIAAABIAHAAIABAAIAAABIgHADIACAHgAq2CZIACAAIADABIgDABgAI5CYIAAgFIAFADQADACgBACIAAABgAqFCaIABgBIABABIgCAAgAKLCUIgEgCIAAAAIgRgHIAAgDIAIABIgIgFIAAgRIAIAGIgCAAIgBACIAEAOIAJABQAVADgCAHQgBADgEAAQgEAAgHgDgArUCTIAFABIgBACgAImCSIABgFIALADIgEAFgAFfCPIgBgHIAAgBIgDAAIgKgBIADgCIABAAIAHgFIgBgCIgDgLIAAAAIABAAIAFAEIAFAAIAJgBIABgFIACgJIADAHIgJAKIAOgDIAEAIIgBAAIABABIAGANIABADIgMgHIgEgCIAAAAIgCACIADACIgEAAIgFADIgBABIgDAEIAAgFIABgBIAAgDIgBAAIgBACIAAABIgCAFIgDAEgAo9CNIgMgKIgFgFIgKAGIgLAGIABgBIACgEIgGgFIgEgDIgDgCIgMAJIgDABIACgEIAEgNIgPgKIAQAAIAAgBQAAgEABgBQgTAEgBgFIAAgCQACgDAHgCQAIgCAOgCIAEAAIADAFIgCADIgHgCIACAGIAWACIAFgMIAEgIIABgCIAAAFIAZgDIgWAGIgCgBIADANIAAABIABACIAAABIAHABIABAAIAAAAIAIABIAMgFIgCgPIALALIANgFIgIANIAKALIgOgDIgIAMIgBgPIgIgCIgIAFIgKAGIABACIADAPQAAgBAAgBQAAgBABAAQAAAAAAAAQAAAAAAABIACAEIgCAEIAAABIgBgCgApkB1IAEAOIAHgPIgEgEgApnBqIADAAIgEgDgApyBpIABgCIgEgBgApyBkIACAAIABgBIgDABgApvBhIABgDIgGgCgAqbCOIgBgEQAAgHACADIAEAEIgEAEIAAABgAKMB5QgDABgFgBIgEgKIAEAAIABgBIABgBIgCgDIgHgMIAHADIAJAFIAIgIIAEgFIgCARIAQAIIgSADIgDASgAsjCEIgOgLIAEAHIAAAAIgFgCIgDgBIgKAHIADgKIgBgBIgIAJIACgLIgFAFIABgIIgRgHIARgEIABAAIgCgBIABAAIABAAIABgDIAAgDIAAgKIAGAJIADAGIAHgBIACgGIADgJIADAJIABAEIACgBIgBACIABADIARAAIgPALIACAFIACAGIACAFIAAABgAHmB8IAAgBIACgHIgHgEIgGgEIAGgBIABAAIABAAIAIAAIADgQIAHAPIANgBIADgBIgGAFIgHAGIAFAMIABADIgOgJIgEAFIgHAGgAJqB7IgIgGIgFgDIAAAAIAHAAIAJgBIAAgCIgFgCIAGAAIAFAEIgKAPgAn1BwIADgLIgPAMIgDgCIAGgKIgMgQIAUAGIgBACIAMgIIABAAIAAAJIAIACIgBABIABAAIAMADIgTAHIAAAUgAF/BzIAJgBIgHAFIgDADgAJZB1IABAAIADABIAAAAQAAADgFAAgAIsBsIgLgEIgIgCIAKACIAdADIAOADIADACIgBAEgAmvBVIgBgBIAEgIIANADIgIgJIADgGIADADIANgEIADAEIgDAEIgGAHIABABIgCACIADgBIALARIgVgIIgOASgArJBmQgCgHAUAAIACAAIACAAIATAAIgWAIQgJADgEAAQgGAAAAgEgAMKBeIgLACIAHgIIgEgKIAKAFIABgBIAHgHIgDALIAAAAIADACIAIADIgCABIgKABIgBALgAqyBdQgDAAgBgEQAAgGAHAAIAFAAIALACIAGABIgFACIgLADIgIACIgBAAgAqXBOIgJgCIAJgEIgBgFIgBgFIADAEIAEADIAGgCIADgCIgCAEIgDAEIAHAHIgKgBIgEAIgAvSBRIgFADIACgGIgEgEIAGABIACgFIACAFIAFABIgEADIABAGgAnCBOIAEgDIAHgCIAFABIAAAKgAJZBIIgGgQIgXABIAFgEIAFgEIAJgGIgEgLIgBgDIgBgBIgFgDIAFAAIgCgFIAIAGIAVABIAHgGIACgBIgCAGIABAJIgBgBIgCAAIgDAIIACACIASAMIgYAAIgBAEIgDAIIgBACIgBACIgCAHgAJaAiIADgCIgIgCgAraBGIAFAEIgLACgArtBJIAAgCIABABIAAADIgBgCgAuwA/IgKgEIAKgDIAAgJIAAgBIABABIAFAHIAFgBIAFgCIgCADIgCADIgCADIAEAFIACADIgKgDIgGAIgArIBEIAJgCIAcgGIgFACIgfAIgALXBAIABACIAAABgALWBAIABAAIAAAAgAmuA+IAAgNIAIAMIgHADgANjA3IgJgBIAHgFIgCgJIAIAGIAIgFIgEAJIAHAGIgJgBIgDAJgApkA4QgBgHAsgEIA3gFIg1ANQgaAGgLAAQgHAAgBgDgAHFAkIgOACIgFAAIAGgFIAFgEIgBgHIgBgGIgDgGIgGgCIgKgCIABgCIARgFIAAgFIgBgRIAOARIAJgEIgJgFIAPgBIAFgOIAEAOIAPAAIgHAFIABABIAFAMIABAAIAGAAIABgBIgCgCIgCgFIgDgHIAKAGIAFADIAOgLIgFAPIACACIAJAFIAEADIgFABIgNAAIgDALIgEgDIAFgSIgPAMIgPgLIAFASIgPALIAKAAIACABIgKABIgDADIABgCIgIABIgEASgAHTAXIAIAEIABgIIgIgCgAHHAQIACABIACgDIgCAAgAHUACIgDACIAAAAIACAAIACAAIALgBIABgDIgGgBIAAgBgAF5ApIgBgBIgBgCIgCABIgEACIgNAGIAEgHIABgCIAFgJIgCgDIgKgKIgCgCIAKACIABAAIADABIAGABIABgBIABgCIADgBIAHAOIABgHIATAEIgKAEIgJAEIABAIIAAABIACALgALhAuIAAgFQAOgCgCAHIAAADgAq1ApIgaABIgDgBQADgDAMgBIADgBIAbgBIA4gCIAMAAIALAAIAJAAIABACIgUAGIgLACQgJABgBgEQAAgEAGgCIgvAIIgGABIgEAAIgUADgALUAqIACAAIgBABgAKtAmIgDgBIADgBIAAgCIABACIADgBIgBACIABADIgDgBIgCACgAMNAgIgIgFIAJAAIACgHIAAgCIABACIADAGIAIAAIAAgEIAAgGIAFAFIgBABIgEAHIAAgDIgHAFIABAEIABADIABABIgBAAIgDgDIgDgBIgGAFgAKZAiQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQAAACgGABgAotAiIgBgLIgJgCIgGgCIAMgEIADgBIAAgNIgBgBIAGAGIAEAEIABAAIANgFIgGAKIgBABIgBACIABABIAJALIgQgEIgEAHIgEAGgAJ5AcIAVADIgPAFgAH3AhIABgCIAAAAIACADgALiAdIABgFIACAAIgCAIgApdARIgPgFIAPgEIABgFIgOACIgFABIgDAAIACAAIAFgGIgLABIgMACQgdAFAAgIIABAAIgDgFIgHACIAFgFIgDgGIAGACIAFgFIgBAHIAGADIgGABIAAAFQAFgEAVACIALABIAPABIAFgGIgBgBIgJABIgFAAIgGABQgWACgBgHQAAgGAVACIAEAAIAEAAIAMACIgHgMIARAIIABABIABAAIAJgJIAGgGIgBAKIgDALIATAJIgUABIgBAFIALgDIgKAMIAIAMIgIgDIgCgBIgDgBIgJALgAqcAbQAAgCAAgBQAAgBAAgBQABAAAAAAQAAAAABABIABAEIgBAEIgBABIgBgFgAm+AZIADgLIACgKIABAAIABAMIAHgKIALADIgIgJIAHgJIAXgBIgNAKIgFACIADALIAEAJIABACIgEgCIgMgJIgEgCIgCADIgNALIgDABgAMcAAIAJgGIACADIARgGIgLANIAHAKIAFAFIgPgEIgDgBIgBABIgEAFgALzAGIAHAEIgJABgAPQABIgKgCIAKgCIAAgKIAFAIIAJgDIgFAIIAFAGIgJgDIgGAHgAGmAFIAAAAIABAAgALegDIACgBIAEAAIACAEIgJADgAnBAAIgLgHIATgBIAAAGIgHACgAq3AAIACAAIgRAAIgBgFQACgCAHACIAEACIAKACIgGABgALQgFIgBgBIAGABIgDACgAr3gNIADAAIABAAIARAGIgDgGIAZABIgCAFIgZACIAAAAIgCABIgLABIgMAAgAsVgHQAAgFARgBIAAAKQgRAAAAgEgAm1gIIACgDIADgPIAEAHIAAgDIAFALIAAACIABAAIgLAFgAoogWIgHABIgMACIANgNIAAAAIgJgRIARAIIAIgIIgEgLIAIAGIABgBIAAACIAHAGIALgHIAEgCIACgCIAAACIgCAEIgFAMIAOALIACACIgCAAIgQgBIAAAAIgDABIgHASIgEgQIgFABIgCASgArJgLIABAAIACgIIgIgGIAHAAIADAAIABAAIABgDIACgGIACAFIAAAFIAKABIgEACIgEADIABAHIAPAAIgOACIAAAAIgBAAIgCAAIgLABgArHgLIAJAAIABAAIgEgEIAAAAgAGMgKIABgFIADADIAAACgAJ8gRIArgCIABgDIgRgBIgvgEQAPgBAggDIAOgBIgJgHIAHAAIAKAOIgJANIgogFgAMbgPIAAgDIADADgAGvgQIAAgBIABABgAGhgVIgGgEIABACIgBgBIgEAFIgCgEIAGgEIgMAAIgEgMIgCAJIgHgCIgLgEIADgBIANgEIgDgFIAAgCIgYAAIAMgJIAHgGIAAAAIgEgLIgCgIIgBgEIAEADIAHAFIgBAIIAFgFIAEADIAHgFIAAgBIgEgEIAGACIAAACIABgBIAHACIgDgEIAGgFIgCAGIgEANIgBADIgBABIARAMIAJgDIgKAOIgDAEIAAAAIgBABIAGAIIAEAFIgEAEgAGbgvIAFgBIgGAAgAqXghIABABIgBAAIgBABgAsCgmIAAACIgCAAgAvTgpIgDgBIADgBIABgEIACADIAEAAIgDADIACADIgEgCIgDADgAKugoIACgCIABAAIAAADgAr5grIAFACIgDABgAsEguIACABIAAACgAr8gvIACgDIAAAFgAKSgzIgTgBIgBgEIATgDIABAAQAugFgBAIIgBACIgDACIgagEIAGAGIgVgBgAJsg1IADgCIAEAAIACADIgJgBgAJhg1IAAgBIABAAIAAABIgBAAgAm8hCIgPADIAHgIIgIACIAIgIIABgBIgEgFIALAAIADAPIAGgOIAEABIAAAFIADgFIAHABIAAgBIAHADIgPADIAIAEIgLACIgCAMIgCgEIgBAIgAqzg/QAAgHAiAEIgGAJIgGAAQgWAAAAgGgAqQhBIApAFIgWABIgTABgAKkhDIgDABIABgDIgBgDIADABIACgCIAAADIAEABIgEABIABAEgAozhUIgMgBIgGgBIAMgGIAEgDIgBgCIgDgQIANAMIAHgEIAAgBIAAgCIgBAAIgBAAIABgBIAAgDIABABIAKgNIgEgGIgFgGIgDgEIAHACIAFACIAHACIALgQIAAAUIADAAIAKgDIABgUIALAQIAFgBQACgGAHADIAFgCIgCADIABABIANAHIgPABIgFAAIgEAFIAMAQIgHgCIgBgJIgDAHIgIgCIgHAJIgEgBIADADIgEAFIAAgUIgDgBIgJADIAAAUIgMgQIgHACIgIADIACACIAFgDIgCAGIACACIADgBIAJgFIgEAIIgCAEIADAFIAGAGIgOgDIgBABIAGAFIgIAAIgEAGIgBgHIgBAAIgDAAIgEAIIgDAIgAqBhGIgFgFIgIAEIAEgIIgEgDIgCgDIADABIAGABIAAgBIgCgBIABgIQADgBAIABIAFABIABABIAEgLIgMgMIgCgBIAEAAIAQACIAAgDIADgGIADgFQgEgCAAgDQABgEAKABIgDAJIgBAAIAAAEIACAIIAAACIAUACIgGAEIgGADIgFADIAEAQIAAADIgHgHIgBAAIgGgGIgHAEIAMAEIADAAIgEABIgUABIgGABIgDAAIAAABIADAAIAGABIgGAEIgCAAIABAEIAAAFgAHRhLIA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IAFACIAGABIAAgIIAAgDIgCgBIgDAAIgBgBIAAAAIgMgFIALgDIAHgCIABgUIAHAJIAEAIIABAAIAFgBIAKgEIAFgFIABATIAAADIABAAIAKADIAEgJIgEACIAHgNIgKgLIAHACIAFABIADAAIACgEIgBgBIgHgIIgBgBIgDgDIAJACIALADIAGgMIABAAIADgGIABACIAAAEIAGADIAAABIgGgDIABAHIAAAGIAEABIAQADIgOAGQAJADAOAGIAKAFIABgBIgBgPIAAgBIACACIAJAKIAEgBIgBgDIgGgSIgBgBIgCAAIgSgCIgGAAIAIgHIAKgJIgIgPIgCgGIANAIIgBgGIAJAIIAFgEIAAAAIAAAAIgBgBQgRgGgCgFIAAgDQAEgHATAPIADACIAFgGIgBAJIAIAFIAGgEIgDAHIAHAEIAAAAIgHgCIgCAEIgCAFIAEADIAHADIAAABIgJABIABABIAJAHIgBADIgTgCIgDAHIgFAMIAAABIABAAIAJgEIgDAGIgGAIIAHAIIAKAEIgIgCIACADIgQgEIgDAFIgBgCIAAAEIgFAHIgBgRIgQgEIAEgBIgCgBIgSgFIgHANIAMAKIAPgHIgKAUIAQAQIgXgEIgJAVIgEgWIgPgCIABAEIgFgFIgEAAIACgBIgIgHIgDACIgDACIABABIgBAAIgFACIgCABIAAAFIgDgDIAAAAIAAgBIAAAAIgFABIgFACIABANIAAABIAAAIgAoWjKIAAABIABADIACAHIACgCIgBgGIgBgFgAovjMIAAADIAAACIABADIAAADIAAAAIABgEIADgGIgDgDgAoLjEIAEgCIgBgGgApMjKIACABIAFgJIgCgBIgFAJIgBAAgAocjiIACAHIAEgCIgCgGIAAgBgAoKjkIACgBIgCgDIgBgBIgDABIgBAAgAoBjpIABAAIgBgBgAnEkdIgBAEIADgCIADgCIgFgCgAKVioIgBAAIADgIIAHgBIABADQACAGgLAAIgBAAgAKFioIAJgEIABAEgAqfioIAAAAIADAAIgDAAgArHipIABgCIAAACgArZivIgNgBIgMgCIgDgBIgCgDIAAADIgIgCQgKgDABgDQAAgDAGAAQAIAAAPADIAFABIAPADIAtAMIgBACIgugGgAm5irIAAgFIACACIgCAEgAIcirIAFgCIAAACIgFAAgAmjisIgBgCIADgCIABAEgAtKixIgGAFIAFgSIAIARIAAABgAmZizIABAEIgEACgAE4i0IADgBIABABIgCAHgAmAi5IAPAJIgUACgAJUi0IAHgCIAMgEIADgBIgCABIAQABIACAEIgRADIgKACIgGAAgAHAi1IgCgEIgFgNIgBAEIAAgBIgMAEIgFABIgDABIACgDIAAAAIAKgNIgMgSIAUAHIADgEIAIAAIABABIAAABIAAAAIAFAMIAEgPIAFAAIAAABIAEgBIAFAAIAAgBIAKgCIgMANIgBABIACADIAGAKIACADIgDgBIgHgEIgHgDIgGAGIgHAIIABgLIgCABIAAACIAAAPgAmUi/IADgEIAEACIAJgIIAEgEIgEACIAEgHIAGgJIgEgFIAOABIADAIIADAKIgDABIgJgKIABAFIgFACIgFABIgBAHIgBAEIgCAIIAAABIgHAEgAKDi5IACABIgCAAgAp4i6QgZgEgLgEIgDgBQgIgDACgDQAAgDAIABIAHABQAMACAUAGIAPAEIgPADIAEACIgGgBgAmxi9IAAgFIADgCIgCAHgAq3jFIgKAGIADgKIABgBIgJgHIAMABIAEgLIADALIAKABIABAAIgBABIgJAFIABAFIACAGgAFNjAIgKgBIABgMIgJALIgMgFIACAEIgGgBIgMgBIATgMIgCgMIAAgBIgCgIIgMgGIgPAOIAEgVIgBAAIgHgEIgFgDIACgEIANgBIAFgVIAGAMIADAHIABAAIATgDIgPAPIAJATIgGgEIAEAFIABABIAKAJIAUgMIgFAKIgEALIAEAEIAHAGIAFAFgAKKjDQAIgCADACIgFADgAmpjFIADgCIAAABIABAFIgDABgAm6jFIAAgHIAGgCIACgBIAAgCIAAgEIAHAJIgGAKgAF9jOIgBAGIgBgCIgDgEIgQAFIAJgMIABgBIgJgOIAQAFIAKgNIgBARIAQAGIgQAEIAAALgAmfjKIACgBIAAABIAEACIAAAAIgDABgALqjIIgTgBIASgHIAFgCQAIgDACAGQABAGgJABIgGAAgAJSjNIgFgCIgDAAIACgBIAFgFQAEgEACAHQABAGgEAAIgCgBgAlojQIAAADIgBAAgAvKjcIgPAIIAHgPIgMgMIARADIAIgPIACAQIARADIgPAHIACARgAqBjZQABgHAKAGIALAIIgOAAIgBAAQgJAAACgHgAmyjVIAAgLIAAgEIAFAGIACADIACACIADAEIgBACgAlijdIAKABIgDABIgKAEgAmTjaIABgBIgBABgAprjiIgCgIIAEgCIADACIALAHIgOABIgCAAgAmFjpIACABIAGABIgEAEgAHKjsIAAgBIAAABgAIhj+IgBAAIgRAAIAOgLIgEgLIgBgDIgBgDIACABIADADIAFADIABgBIACgBIAIgEIADgDIAEACIABgBIAAACIgEALIgBAEIAEADIAJAFIADACIgEABIgFAAIgFAAIgFAAIgFASgAIskXIgIADIgCABIAAABIADACIABAAIAHgGIADgCIgEABgALGjzIAGgHQAFgGADAGQADAHgIAAgAlckEIgEgDIgDAEIgBgGIgHgDIAGgBIAAAAIgBgIIgMgCIgGgBIACgBIAMgGIACgBIgCgTIAMAOIARgJIgJARIAJAJIADgBIAAgPIAIAMIAKgDIgMgDIASgGIgBgSIAKAOIASgHIgKAPIAHAJIgEABIgHgLIgBALIgCAAIgBADIgJACIAAgIIgDgBIgHAKIAJAMIgPgFIgEAHIgCACIAEAIIgPgIIAAABIgLALIgBAAgAlbkSIgCAEIADgBIABgDIAAgBIgCAAgAmuj9IAAgCIACACgAtIkFIgFgGIgBABIgLACIAFgHIADgDIgGgLIALAFIACgCIAFgGIABgCIAAADIgBAKIAMAFIgMADIAAAJIAAACIgBACgAsKkGIABAAIADADgAJakJIAYgNIAGgDIAGAIIgKADIgMADIgXAHIAJgFgAEskPIgCgLIgUgDIASgJIgCgOIgEgDIAIADIAJAJIARgJIgJARIAEADIAFAHIAFAEIgIgBIgLgCIgJARgAoqkWIgFgEIgIgFIAQgBIADgPIAHAOIAQgBIgNAKIAFAKIACAFIgDgCIgIgEIgEgCIgMAKgAkykQIAGACIgFAHgALRkKIAWgJIANgGIAAAAQAigPACAHQAAABAAAAQAAABAAAAQAAABgBABQAAAAgBABIgQgDIAIAHIgTAGIgFABIgBAAIgBAAIgBABIggAHIgCgBgAshkKIABAAIAAABgAJYkTIgBgDIgJABIAGgGIgEgHIAIADIAFgGIgBAJIAEABIAEACIgIACIgBAAIAAAAIgBAIgAsYkSIAAAAIAAgGIAGAHIABAB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CAKgAlgmJIgEgQIgSgBIALgHIAEgCIAAgBIAAgDIgTAFIAAACIAAAEIAAAOIgLgQIgTAFIAMgPIgEgGIgCgCIgFgJIAHADIAHACIAEACIADgEIAJgMIAAACIAAAGIgBAKIAAACIATAGIgDgNIAHAGIAGAGIABgBIAPgIIgIAQIACABIAIAIIABABIADACIgHAAIgLgCIgGAPIgBACgAIFmPIACgBIgHgBIgBgCIAEgDIABABIAOgNIATgPIgBANIgLAIIgIgDIACAEIgLADIAGACIgGAEIADAEgAhjmUIAEgLIgKgIIgDgEIADABIAOABIACgEIAAAAIAIgCIABAHIADABIAIAAIACAEIgIAEIgDACIABADIgGgFIAEAPIgFgFIgDgDIgMAHIgDACgAgFmXIAAgBIgBAAIgCgBIADgSIgGAHIgJgQIASAJIADgFIABgCIgBgBIgGgFIAGAAIAHgBIAEgQIADAGIADAJIAHgBIAJgBIgJAIIgDADIADAGIADAIIgEgDIgJgFIgBABIgGAFIAFACIAIAEIACACIgKACIgIABIgBAIgAD+mWIAJAAIgEADgAsYmWIgJgIIgDgDIgPAJIAIgRIgOgNIANACIAFABIAIgRIADASIAHABIAMACIgNAGIgDACIABANIABAGgAkhmkIADgHIgKAEIgCABIgFABIgDgDIAHgKIgJgNIgDgCIgOAPIADgUIgTgJIAQgDIAFgEIACgLIgDgIIAEADIAAgBIABABIACABIAAAAQAEgDAFAHIADgDIgSgSIgDgEIAJgCIABABIANAWIAFgEIgCAJIACAEIgCgDIgCAFIAFADIAGgBIgDADIAFAEIgJAAIAAABIAEAIIgGgGIgFAFIAAABQAEACACAGIADAFIACAAIALgPIAAATIADACIAAAAIgPACIANAHIgCABIAAAKIAAADIAAABIAAAAIAAAFgAD1mtIgOgGIgFgCIAGgBIAPgEIABgIIAAgHIABgFIABADIAFAIIAEAHIAHgCIAMgCIABgBIgBACIgJAJIgEAFIALASIgTgJIgKALIgBAAIAAABIgEADgAhCmmIADAAIgDACgAn4mkIAAAAIAAAAgAoMmuIACgGIASAQIgUgKgALlmpIgFABIADgEIgCgGIAFADIAEgEIgBAGIAGACIgGABIgBAGgADIm3IgFAAIgLgCIgBAAIACAAIAIgFIAAAAIAFgDIgBgFIgCgMIAFAGIAEADIADADIAPgIIgHAPIAEAEIAIAIIgLgBIgGgBIgHAPgAr9mqIgDACIACgDIgDgDIAEABIABgEIABAEIAEABIgEABIABAEgAJbmsIABAAIgIAFIAHgFgAIqm1QANgJACADQADAEgNALgAhUm5IACAFIgHAHgAEunHIgYAAIAKgIIAJgGIgCgJIgFgOIAKAHIAKAHIAFgDIAAgCIABABIADgCIgEAAIABgDQACgIAFADIADADIAEgDIgCAIIgDAIIgCADIgBAEIARANIACACIgCAAIgWgBIgBACIgGAVgABWm5IACACIgCAEgAoYm1IgNgHIAOAAIADAJIgEgCgAFTm0IADgFIAJgIIgBACIgKALgAhrnMIgHAAIgMgBIgDAAIADgCIAKgHIAGgEIgHgVIARANIABAAIgHAGIASgDIABABIgCAFIAEADIAEADIACAEIAAgCIAIAGIgMAAIgKgBIgCAFIgGAQgAJSnDIAPgPIAFgFIAAAAQAGgFADAAQABAAABgBQAAAAABAAQAAAAABAAQAAABABAAIAAABQADAEgKAIIgHgHIADAJIgEACIgTAKIgDACIADgEgABXnAIAAgDIACAEgAotnIQADgDAIAEIgIAGQgEgEABgDgAgnnXIgSAEIgFAAIAFgEIALgMIgKgVIAUAKIAQgQIgDAXIAVAKIgXAEIgDAXgAJ5nEIAGgFIAHgFIAMgKIAIAHIAAABIgKAGIADgGIgYANgAHMnKQADgEADgBQADgCACADQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAIgEACgAFlnVIgOAHIAHgNIgLgKIAPACIAGgOIADAPIAOACIgMAHIADAOgAmPniIgRgEIgGgBIAGgDIAPgGIAAgDIgCgUIANAPIACADIAVgJIgLATIAOASIgOgDIgIgDIgDAFIgDAFIgGAKgAj7nQIgBgBIACABIABACIAAABIgCgDgAGinXIADgIQAFgLAFAFQAGAEgJAHIgIAFgAkDnbIgWgdIgHgJIAKgCIADAGIAUAigAALneIAHgLIgJgLIAOAEIAGgMIABACIABAMIAJACIAEABIgFACIgHADIgFgKIgCAOIgBgBIgLAFgAJZnhIAAgBIAAgHIgKgFIALgCIABgHIgMAIIgIAEIgDABIgMAHIgCABIACgBIAKgKIABgBIABgBIAPgHIgIgCQAOgNAEAGQADADgEADIAFAHIALgCIgIAIIAGAKIgKgFIgEAEIAAABIgEAEgAjYnlIgBABIgBgDIAAgIIgMgDIgDAGIAAABIgDAFIgCADIgBgJIgBgFIgBgKIgQgDIgHgCIAFgCIARgHIgBgSIgBgGIAQASIAVgKIgLAUIAIAKIALgFIACgBIgBACIgHAKIACADIgBAAIAIAJIgOgEIgGAKIgBADgAjkn1IAFgCIgDgBgAr/nyIgKAAIgCAAIgEAAIAEgDIABAAIAHgGIgEgOIAMAJIANgJIgGAOIACACIALAHIgNAAIgCAAIgFAOgAGxnsIAAgBIABgFQACgIAFAEQAGAEgFADIgCABIgEADIgEACIABgDgADznsIAMggIABgDIACAEIADgQIACAAIgCAIIAGgIIAEAAIgGAKIgGALIgQAagAlnn/IgQgIIAHgBIALgCIABgFIADgOIABADIAHAOIAGgBIADgGIAAgBIgGgFIgHgGIADABIAOABIAHgQIADARIALABIAGAAIgDADIgFADIgGADIACAHIABADIABAHIgEgEIgHAIQgFgHgCgEIgBACIgGAFIAEAHIABADIADAGIgHgDIgJgFIgBAAIgIAIIgFAFgApOnyIgFgDIgCACIgDACIgBgFIARgIIgDACIAFAQgAHhn0IgCgCIgFgGIAAABIgCAAIABgNIgNAOIAHgKIgLgOIARAFIABgBIAFAWIAHgSIACABIAGABIAHACIgKAEIgGAAIACABIgDABIABAEIAAAFIAAAJgAnan6IADAFIgCgBQghgbAFgFQAGgGAbAgIAKALIgBAAgAhboEIgCAAIgBAAIgCANIgCgBIgBgBIgFgKIgFABIADgCIgKACIgCAAIgGABIANgOIgJgRIAFADIAHADIAGACIABgBIAAgCIgCgDIAEACIAJgKIAAAJIAAABIgBAFIADACIAIgHIAGgEIgEAQIAAABIAAAAIAEACIABAFIgQAGIAIACIgDAMgACqomIAAgCIAGABIABAGIgOAqgAI+n7IgBgBIgBABIgIgCIACgFIgFgFIgBgFIAKABIAHgNIADAPIAOADIgNAGIABAHgABnoFIgLAFIgFADIADgHIAEgIIABgBIgOgNIASADIACgEIAGgMIACANIA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gMgAi0puIAAgBIAAAAIABABgAihqBIADgDIgEABIgIgTIgDgIIgDgHIgBgCIgBgEIANAGIACAFIABAFIgCANIADgEQAFAcADAHIgIgSgAlup4QgFgHgCgFIAAgHIAKAFIADAFIAAgDIAIAHIgCAHIgKABIgCgDgAj6p/QAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIACAAIgBgDIgFAAIgBAAIgEAAIADgCIACgBIADgDIgCgEIACgCIAFADIAHgFIAAABIgDAHIAGAEIAAAAIAAACIgFAAIgDAAIAAACIgBADIADAEIgGAEIgCAAIABABIgCABQgBgGAAgDgAgOp6IAAgBIAAACgAAIqBIAAgGIAAgDIABgBIABAAIAAACIAAANgAg3qOIACAAIABASIgDgSgABuqAIgCgEIgOADIAKgKIgGgJIARAEIAAASIgDABgAk2qKIgCABIgBAAIAJgPIgCABIAEgJIAAAKIAIACIAHACIgEACIgLADIABAPgAlWqAIACgBIgBADgACQqCIACgEIgBAGgACeqCIABgBIAAABgAH0qEIgHgIIgKAEIAGgKIgCgCIgFgIIAKAEIABAAIAEgHIADgDIAAAAIABAMIAEABIgCAFIgCABIAAAHIAAAFgAi9qJIgBgBQgGgGAHgDQAHgCAAAIIAAADIgBAHIgGgGgABWqYIADABIgDARIAAgSgADCqbIAAgBIgDANQABgGgCgCIAFgNIAAAFQABgJAGACQAHACgHAMIgJAPIABgSgAFaqPIgFgBIAEgBIAAgBIgBgDIADADIAEgCIgCADIACADIgBAAIgCAAIgCADgAjHqaIgIgOIgEgHIAIgHIADAIIABADIADAPIAEAQIgHgOgAE2q2QAKgeAHADQAHADgRAcIgUAiIANgmgAg/q0IgBgGIAAgBIgCgTIAAgFIAAgLIADgDQACABACAMIABAFIACAKIABARIACAiIgCABIgIgjgACQqaIAJgOQABAHgEAPgAlEqdIANAEIADgDIACAGIgKAEgAj8qUIAAABIAAAAgAAGqZIgCgMIAFgEIAAAUgAg0qsIAHAEIAAARIgBABIgGgWgAhmq6IgCgHIgDgLIABgKIAHgBIADAUIABAHIAEAmIgLgkgAC3qXIABgBIAAABgABWqjIABgBQAEgGgEgCIAAgJIABgRIgCgCIgJAGIgBAAIABAAIADgLIgJgHIAMABIAFgKIACAIQACgFADgBIgBAFIAAAEIAIAAIgJAGIAAADIACAJIgDgCIgEAoIAGgWIgDANIgCAJIgDABIAAgKgAh4qkIgEgFIAAACIgHgEIgDADIgEADIgCgCIAAgCIAOgPIANgBIgLAJIAFANgArtqyIgMAGIAGgMIgKgIIANABIAFgMIADANIAOABIgMAHIADANgAkKqtIgDgBIADAAIAAgBIACAAIABAAIgBACIACACIgDgBIgCACgAg1qwQgGgZAHgBQAIgBgBAaIAAAEIgHAAIgBgDgAiwq3QADgBAEAJIgJACQgBgJADgBgAkHqvIABAAIAAAAgAB8qzIAAgCIAAgFIACAAIABAKIAAAAgAizrBIgDgFIAIgGQACACABAGIABAQIgJgNgAiVq4IAHAAIAHAAIAAgBIACACIgBgGIABgFIABgDIAFANIABAAIgHABIgLADgAD8q/IgHgBIAHgDIgBgHIAFAGIAGgDIgDAGIAEAFIgHgBIgEAFgAAArEIAEAIIgCACIgCgKgAAwrOIABAAIgBADIAAgDgAAErPIAEAAIAAACgAAKrPIABAAIgBAAgAAArSIAAgMIgFAAIgGAAIAKgIIAAgMIgEgHIADACQgBgYADgDIgKAIIAFgRIgHgFIABgFIAKAAIACgQIADAGIAAAAIADAKIASAAIgLAIIgEADIAGAQIgHgFIgIgFIgBACIAAAAQAEgBADAjIABAAIAAABIABgBIAGARIAAAAIgBAFIgOAJgAAvrUIgBgDIgCgNIAAgBIAIACIgCARgAB+rdQADgOAEAAQAGABgEAWgACWrZIAEgHIAEACIAAABIgDAFIgFACIAAgDgAolruIgHABIgHABIAGgFIAFgEIAAgBIgHgNIANAHIAKgKIgCAOIANAHIgPACIAAAFIgCAJgAhpriIABgBIACACgAAsryIAFgGQAGABgCARgAFRrrIAAgJIgOgEIANgEIgBgOIAHAIIABACIAHgCIAHgDIgIAMIAJALIgOgEIgHAMgAAKrxIAAAAIAIADIgBADgAAWr7IgCAEIgFACgAhzsDIgOABIALgJIgCgFIgDgIIAMAIIAHgGIAEgDIgBAGIgDAGIAAACIAMAIIgPAAIgDAOgAFmsPIAAAAIgBgBIgJADIAFgIIgCgEIgBgCIgCgDIAEACIAGACIAGgIIgBAJIAAABIAKADIgKADIgBAKgAmTsXIAAABIgFgJIACgBIABAAIAHgEIgDAIIAHAGgAjEsfIgHAEIAEgHIgHgFIAIABIACgHIACAHIAIAAIgGAEIACAHgAI9s4IgJABIAFgGIgEgIIAJAEIAGgHIgCAJIAIAEIgIACIgCAJgAmDs3IgIACIAGgFIgFgHIAHADIADgDIACgDIgBAIIAHADIgFABIgCAAIAAACIgBAGgAiAtCIgNADIAIgKIgIgLIANAEIABAAIACgEIAFAGIAAABIABABIAEAGIgBAAIgEABIgBANIAAAAgAHHtHIgPACIALgKIgFgNIAMAHIAKgJIgCAOIAMAHIgOACIgEAOgAICtOIgLABIAJgHIgDgKIAJAGIAIgHIgDALIAJAGIgLAAIgDALgAActVIgMAGIAHgMIgJgLIANADIAIgMIABAOIAOAEIgOAFIACAOgAh8tVIAEgFIAAAGgADXt1IgBAAIgBgBIABAAIABgBIAAgDIACACIADgBIgCADIADACIgEAAIgCACgADwuFIgEgBIADgBIAAgDIACACIACgBIgBACIACACIgDAAIgBACgAAQufIgQgEIANgGIACgBIAAgFIgBgNIALAOIARgHIgKAQIALANIgRgEIgKAPgAhkulIgRgKIATgBIAGgTIAGASIAUgBIgPAMIADAHIAEALIgKgHIgGgEIgPANgAmUumIgMAGIAGgMIgJgKIAOADIAHgLIABANIANADIgMAFIABANgAGXutIgIgEIAKgCIABgJIAEAJIAJgCIgHAHIAFAJIgIgFIgIAHgAB+u1IgRABIAOgLIgHgPIAOAJIANgLIgEAQIAOAJIgRABIgDARgAlau+IgNAGIAHgNIgJgLIANADIAIgMIABAOIAPADIgOAGIACAPgAguvnIgEAAIAEgCIgBgEIACACIAEgCIgCAEIAEACIgFAAIgBAEg");
	this.shape_45.setTransform(-0.8,0.4);

	this.addChild(this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-99.9,-101,199.8,202.1);


(lib.rocket_explosion2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBD8").s().p("AAHAjIABgEIAFAfgAgYAkIAPgXIADgFIAFgIIgNACIgJABIggAFIgJABIAIgBIAfgHIAJgBIAOgBIgegYIAgAVIgEgYIgCgNIAAgBIABAAIABACIADAOIADAWIAIgLIACgCIAEgHIABgBIAHgIIgBADIgEAGIgBABIgFAHIgBACIgIALIALgBIAAADIgKABIAIAFIgBADIgJgGIADARIABAHIAAAAIgBADIgBgFIgCgHIgDgPIgEAIIgDAFIgQAVIgGAJgAAPAKIABgCIAbATgAAVgFIABAAIAHgBIALgBIAZgEIAAAAIgYAFIgJACIgIABIgEABgAgHgzIgCgKIADALIAAACIgBABg");
	this.shape.setTransform(153.6,147.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2FAFE").s().p("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");
	this.shape_1.setTransform(102.6,105.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#77D1F4").s().p("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ACIAaADgAIBnCIgEAAIgEgBIgBgDIAAAAIAWACIgBADgAHSnFIgBAAIABgDIAHAAIABACIABACgAHKnGIgBgCIAGAAIgBADgAGrnIIgCgCIAdACIABACgAGXnKIgRgDIASACIAPABIABABgAH0nQIALgJIACgCIASgQIABAAIADgDIAbgXIAKgIIAEgEIgEAFIgLALIgeAcIgBACIgDACIgRARIgDABIgDABIgEgCgAHdnRIgIgJIABgIIAGAHIACAEIABADQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAgAHrnWIACg8IgGgJIgBgBIgDgFIgEgGIgEgGIgNgTIgHgMIgCgCIgQgXIgQgXIgBgCIgLgRIgJgNIgJgNQAGgCAFADIAEACIAKAJIAJAPIAAABIAPAZIAPAbIADADIAHANIALATIAGAKIACADIADAFIAAABIACACIAEAIIABgUIAAAVIALATIAIAPIAGAKIgGgJIgJgOIgKgOIgBA1IAAAIIgCABgAgPngIACgBIAJgFIAEgEIAGgEIAFgEIABgBIADgBIAKgHIADgCIAGgEIABADIgGADIgCACIgMAGIgDACIgBABIgFADIgGAEIgEADIgJAFIgCABIgKAGgAG5n9IgTgYIgEgFIAEAEIAUAWIAbAdIgBAHgAFkqRIAFgZQAEABADADIABADIgDAMIgCAHIgHAdIgjCRgAAmoEIAPgJIANgJIAEADIgQAKIgPAJgABGoYIADgBIAFgEIAJgGIABgBIAIgFIAPgKIAHgEIAEgDIASgMIABAAIATgEIgRADIAlgZIAHgDIAFgEIABgBIAigVIALgIIAJgGIACgBIAEgCIABgBIAGgEIAEgDIAKgGIALgHIAHgFIACgBIAkgYIACABIADACIAAAAQADACACADIABADIAAADIgBABIgeARIgQAKIAAAAIgKAGIgKAFIgHAFIgGACIgMAIIgDABIgGAEIgLAHIgjAVIgCABIgFADIgFACIgmAXIgBABIgGADIgBABIgMAHIgEACIgHAFIgOAIIgOAIIgCACIgHADIgCACgAJkqNIgFgBIgCAAIgFgCIgNgEIgmgKIgqgLIgLgDIgLgDIgJgDIgPgDIgJgDIgtgMIAFgFIAoANIAKACIAPAFIAIACIAMADIALAEIApAMIAnALIAMAEIAHACIAFACIAgAJgAEkrlIgHgCIgkgLIgCAAIgDgBIgUgHIgLgCIgCgBIACAAIALADIATAEIAEABIACABIAjAIIAIACIAwAMQABAEgBAEgAGZrtIAGgGIACgBIAIgFIAHgEIALgGIALgGIAKgFIADgCICNhNIiVBfIgIAEIgMAJIgHAEIgBAAIgZAQQgDgIAGgIgAFNsEIgOgaIgKgQIgIgNIgJgQIgPgZIAQAWIAJAMIAIAMIAEAGIAgAsIAKANIAFAIIACADIgCACIgCABIgEABIgFABgAGBrtIgFgDIADgNIAEgOIADgNIAIglIAeiDIggCiIgKAyIgBgBg");
	this.shape_2.setTransform(74.4,96.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00B1ED").s().p("ABoG5IgMgdIgEgKQABgEAEgBIAIAUIALAeIAeBVgAg7G7IAPgHIAGgEIACAAIAHgEIAbgNIACgBIAGgEIAMgFIACgBIAZgMIAFgDIAPgEIABABIgBAEIgGADIgJADIgaALIgBABIgNAFIgJAEIgkAQIgBABIgHADIgPAGIgFACgACZGZIgfgTIBhApgABBGZIAEgKIABgBIABAAIgKAWgABqGIIgBgDIATAKgAAeFpIgxgWIgVgJIAAgBIAMAFIAvARIAQAGIAcAKIgBABIgBADIgCACgABsFyIAGgCIgFACgABpFtIAFgCIAKgFIAMgFIANgFIBYglIhTAoIgNAGIgCABIgdAIIgBgBgABFFlIgDgJIgHgUIgOgpIgOgnIgEgKIgEgNIAFANIAEAJIASArIASAsIAIAUIABACIgBAAIgFABIgCAAgABdFiIgDgCIABgCIAKgVIABgDIAEgJIAEgIIAFgLIABgDIADgFIAHgPIABgDIACgEIAEgJIgDAKIgCAEIgBADIgGAPIgCAGIgBAEIgEAJIgDAJIgEAKIgCAEIgBAEIgJARIgCAAgAielMIABAAIgJAXgAhmlvIgDgGIgMgbIACgCIABAAIAHAMIAFAPIAAAAIADAHIANAjgAidlOIAAgBIAFgOIACgEIACABIgBACIgGAOIgBADgAiVljIARgxIAFAAIABABIgVAxgAg0mDIgJgEIgGgCIgCgBIgUgJIgEgBIgNgGIAAAAIAWAGIADABIAPAHIACABIAFADIABAAIAAAAIAJAEIAXAMIAAAAgAjVmBIAWgJIAzgWQAAAAABABQAAAAABABQAAAAAAABQAAAAABABIAAABIg8AVIgPAGgAhomdIAAgBIAFADgAiRmrIAAAAIgBgBIgBAAIgkgRIgVgKIgFgDIgFgCIgSgJIATAIIAFADIAFACIAWAJIAmAQIABAAIACABIAFACIAAAEgAhIm5IAYgIIAAABIgvAVgAhpmuIAOgFIgPAIIABgDgAh3m0IAEgKIALgbIAYg6IgWA9IgHAUIgGARQgDgBgBgCgAiDmxIgBgCIgBgDIgDgGIAGALIgBAAgAgtnDIAVgHIgUAJg");
	this.shape_3.setTransform(165.2,112.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AigNpIgug3IgJgKIgBAAIgXgcIgDgDIgFgCQgEgBgFABIAAABIgEABQgHAEgCAIIgGAiIACgeQgBgJgCgFIgCgCIgEgDIgBgBIgDAAQgFgCgFADIgEABIgIAHIgKAHIgvAjIA1gwIAGgGQAFgFABgGIAAgEIgBgCIgCgGQgEgFgHgBIgDAAIgLgBIgOgCIAQgBIAKAAIADAAIAGgBIAEgCIAFgDIACgDIABgCQADgFgBgFQAAgEgDgDIgBgBIgDgEIgBgCIgCgBIgHgKIgbgkIgKgNIgLgOIgGgJIgPgUIgKgMIAKALIAQATIAHAIIAMAOIAJALIAdAiIAGAHIAIAKIABAAQADAEAFABIAFABIABAAIACgBQAFgCAEgDQADgEABgFIAHgkIgBAqIAAACIABAEQABAEACACIADADQAEABAFgBIALgEIAGgEIAGgEIAGgEIATgNIAEgDIgFAFIgTAPIgFAEIgHAIQgEAFgBAEIAAACQAAABgBABQAAAAAAABQAAAAAAABQABABAAAAIABAEQADAEAEACIAEACIAVACIApAFIACAAIALABIAFAAIgFAAIgMAAIgCAAIg+gBQgEAAgDABQgGACgDAGIAAABIAAABQgCAEAAAEQABAEADAEIATAaIABABIAIALIAtA7IARAXgAE4NbIAEgIIAPghIABAEIgQAeIgEAIIgGAMgAFLMwIAIgRIADgHQACgFgDgEIgBgBQgCgDgDAAIgDgBIgDABIgEABIAAgDIAGgDIABgBIACgBQADgDAAgDIgBgEIgBgBQgDgDgFgDIgGgEIgBgCIAFADIABAAIAFABIAFABIACgBIADgBQADgDAAgEIAAgDIgCgGIAEADIABACIADAEIAAAAQACACAEAAIABAAIABAAIAAAAIAWAPIgBACIgBABIgBADIAAABIABABQAAAEAFADIAMAGIAOAIIAEACIAJAEIADACIgDgBIgIgDIgEgCIgYgKIgEgBQgGgCgEADIgBABIgCADQgCACACAEIAFAQIgIgQIgCgCIgCgCIgDgBIgCgBIgBAAQgEAAgCABIgCADIgBABIgEAHIgLAWgAE3MPIALgFIAAADIgKACIgDABIACgBgAFpLrIABgBIAEgEIAEgJIACgDIAHgNIAGgNIACgDIADgBIgDAHIgGANIgLAYIgBADIAAADQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAIADACQADACAFgBIATgEIgQAGIgFADgAExLmIAKAFIAAABgAFSLYIgCgHIgCgEIgCgGIABAAIACAEIAIARgAFKLCIgCgHIADAHgAGFK5IACgFIABgBIACgFIACgCIADgIIAFgJIABgDIgBADIgEAKIgEAIIgBADIgCAFIgBABIgBADgAAOKzIAFgFIANgMIAGgGIAAAAIABACIgBABIgHAGIgMAKIgFAFIgGAEgACfKPIgYgZIgBgBIgDgCQgEgCgDABIgBAAIgBAAIgEADIgBABQgDADgBAGIgCAVIAAgBIgBgYQAAgFgEgEIgDgCIgEgBIgDAAIgDABIgDACIgBABIguAoIgDACIAAgDIADgCIArgqIACgCIABgEIAAgGIAAAAIAAgBQgCgEgCgCIgBAAIA9gcIgBABIgFAFQgDADAAADQgCADACAEIAAABIACADIADADIAGACIADABIABAAIARADIgRAAIgBAAIgCAAQgFgBgDAEIgDADIAAACQgDAGAFAFIADAFIAQATIARAVgAAlJTIgJgBIgHgBIAHAAIAJABIAaABIAQABIADgBIABAAQAEgCACgEIABgEIgBgCQgBgGgFgHIgFgFIgHgIIgGgHIAGAFIAHAHIAJAJIAGAFIAGADIAGAAQADgBACgEIABgDQACgEACgbIABAaQAAADACADIADADIADACIACABQAGACAFgFIAHgGIACgCIAYgVIALgJIAJgIIALgKIACgBIABgBIAIgHIACgCIAEgEIgEAEIgCACIgIAIIgBABIgBABIgLALIgJAJIgKAKIgZAXIhFAcgAMzIfQgBgDgFgCIgagXQgDgDgDAAIgEABIgBAAQgEACgCADQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABIAAACIgBARIgCAgIgBgiIAAgDIgBgOIAAAAIgBgDQgCgEgEgBIgDAAIgCAAIgBAAQgEABgFAFIgBAAIgPAQIAOgSIACgCIAEgFIACgGIAAgDIAAgCQgCgCgDgCIgDgBIgHgBIgPAAIgGAAIAFgBIAMgBIAGgBIAGgCIACgCIACgDIAAgCIAAAAQABgGgEgEIgFgEIgZgaIgWgWIACABIAfAcIAYAVIAFADQADAAAEgBIABgBIABAAIABgBIACgDIACgGIAAgBIACgSIABASIABADQAAADACACIAEABIABABIAEAAQADAAADgDIAEgDIAHgHIAGgGIAJgIIALgLIgKAMIgHAIIgGAHIgBABIgKALIgCAEIAAAFIAAACIAAAAIADADIAAABQADACAGABIATAAIgWADQgFABgDADIgBADIgBAGIABADIACACIBEBDgAg9G5IgNAIIgRALIASgNIALgJIgIgBIgSgEIgIgBIgNgDIANACIAIABIASADIAIABIgFgJIgBAAIgOgWIgBgBIABAAIAPAUIAAABIAHAJIAKgsIgHAtIAYgQIgXASIAWAEIAGABIATAEIgTgDIgGAAIgWgEIAPAZIAHAKIgHgKIgRgXIgKAtgAGSG8IABgOIABgRIAAgMIAAgCIgBABIgGAGIgMAJIgFAEIgIAHIgPALIgDADIADgDIAOgMIAIgIIAEgEIALgJIAGgGIACgBIgEgBIgMgBIgagDIgDAAIgGgBIAGABIACAAIAYAAIAKABIAJAAIgrg1IAuAyIABgKIABgMIACgQIACgPIAAgCIAAAAIAAACIAAAQIgBARIgBANIAAAIIAFgEIAJgHIAKgJIAOgLIAMgLIACgBIgCACIgMAKIgNAMIgKAJIgIAHIgFAFIAMABIAWACIAIAAIgHAAIgUABIgPAAIAYAdIATAXIgbgdIgTgVIAAAFIgBALIgCARIgCANIgCAPgACbHAIALgXIACgEIABgCIAFgKIALgVIAFgJIALgWIgSAFIgIACIgMAEIgKACIgeAJIAdgLIAKgDIAMgFIAIgDIAQgGIgWgMIgOgHIgLgGIgQgJIgTgKIgFgDIAFACIASAJIAQAHIAKAFIAOAHIAbANIgQg8IgJgfIAOAoIARAxIAGgKIACgDIAJgQIAIgOIAGgKIAHgNIAPgZIgOAaIgHAOIgFALIgIAOIgJASIgBADIgEAHIAHgBIADgBIADgBIACAAIANgDIAGgCIANgDIAMgCIAFgCIgFACIgLAEIgMAEIgHACIgMAEIgCAAIgDACIgCAAIgJADIAPAIIACABIAEACIAIAFIASAKIADABIAmAVIg3gaIgKgFIgDgCIgBAAIgVgKIAWBTIAAAAIgchRIgOAYIgEAIIgMAUIAAABIgFAIIgBACIgCAEIgMAVIgBACgAm8GwIACgVIAAgEQgBgCgDgCIAAAAIgEgBQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAIg6AlIA4goIACgBIABgCIAAgFIgBgCQgBgDgEgBIAAAAIgJgCIgGgCIAIABIAGABQAEAAACgBIABAAIABgBIABgCIAAAAIABgBQAAgDgBgEIgBAAIgFgJIgPgWIAVAaIACADQADADAEAAIABAAIADgBQACgCABgDIACgJIAAgEIAAAEIAAAKIAAACIAAAAIABACIABADIABABIABAAIAFACIADgCIAqgbIAOgIIgvAiIgGAEQgDACABAEIAAAAIAAABIACAEIADADIAQAEIgUgCIgBABQgDAAgCACQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIADAIIAEAHIADAGIgEgGIgDgEQgEgFgDgBIgBgBIgDAAQgDABgBADIgCACIgDATIgDARgAKuGhIgHgGIgFgFIAKAJIADADgABsEvIAAgBIAAAAIADACgAs3DWIABgDIABgDIgCgFIgCgCQgDgDgFABIgUACIARgFQAFgBACgDIABAAIABgEIAAAAIAAgCQAAgEgEgDIgLgIIgOgLIgNgJIAPAJIAWANIADACQAFACAFgCIABgBIADgCQABgDAAgEIgCgMIgBgEIABAEIAFAMIACAFIAEADIABAAIABAAQAEABADgBIADgDIASgZIAEgFIABgCIADABIgBABIgCAEIgOAVIgEAGIgBADIgEACIAAABIAEgCQAAABAAAAQAAABAAAAQAAABAAABQAAAAABABIAAABIAEAEIABAAQACABADAAIAVgCQgVAFgEACIgCABIgCACIgBADQAAABAAAAQAAAAAAABQAAAAAAABQAAABABAAIACAEIAFAFIAUAPIgTgMQgGgEgFAAIgBAAIgDABQgEADAAAEIAAACIACAMIAGAiIgNgtIgBgEQgDgDgEAAIgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAgBAAQAAABAAAAQgBABAAAAIg0BHgAnBEaIABgNIABgZIAAgBIABgJIAAgIIgUARIgPAMIgCACIgPAMIAOgNIAMgLIAYgVIgCAAIgogDIAqgBIgKgMIAAgBIgCgCIggglIAiAkIACADIABAAIAKALIACgPIAAAAIAAgEIAFgqIgCApIAAAEIgBAQIAfgZIAMgKIABgBIAHgGIgGAGIgBABIgKAJIggAcIAAAAIAUADIAWACIACAAIAHABIgIAAIgDAAIgagBIgPgBIAFAFIAGAHIAAABIANAPIAJALIADAEIAIAKIgJgKIgDgEIgKgKIgNgPIgBgBIgHgGIgDgEIgBAGIgBAJIAAABIgDAaIgBANgAJ0DjIAAgBIAHAFgAJHDDIACgCIAqAgIAAABgAAhBgIhFBrIAshjIgJALIAVgqIhAAjIAggdIhkAmIBWgxIghAGIAlgRIg1AEIgjADIAZgGIBSgVIhNgTIhNgSIAXABICQARIgOgNIASAGIhdh1IBvBpIgVhpIAdBHIAAgFIAJAZIAIgtIAEAgIAahPIAJgdIgJA9IgHAwIADgFIgDAOIBZh1IhKCEIBhg9IArgbIgSAOIhUBGIAugRIBZgkIg0AdIh1A9IBaAPIg6ADICMAvIiWgeIAaASIgJgDIAnAcIBFAyIhEglIhbgxIAUApIgYgZIAKAmIgDgGIAXBgIgqhlIACBVIgUhlIgjB9gAHTDXIAKgOIAMgRIACgDIAFgHIACgGIgBgFIAAgBIgBgBIgBgCIgBgBIgCgBQgEgCgGAAIgDAAIgTACIAOgDIALgDQAGgBACgFIAAgBIABgCIABgGIgBgBIgBgDIgDgCIgUgQIgHgGIgzgmIgIgGIAJAGIA7AoIAIAFIANAKQADACAEAAIAFgBIABgBQAEgCACgDIAAgBIABgGIgBgNIAAAAIgCggIgBgFIAAgFIABAFIABAFIAEAdIABADIAAABIACAMIABADQACAEAFABIAEAAIACAAQAFgCAGgHIADgEIADgDIALgPIgJAPIgDAEIgEAHQgFAIgBAFQAAADABACQABAEAFABIADABIAggDIgZAGQgEABgCADQgDACgBAEIAAACIAAAFIghAGIAigEIADADIAIAGIAHAGIAGAFIACABIAFAEIAGAEIgCADIgRgMIgCgBIgCgBIgJgHIgHgFQgDgCgDAAQgDAAgEACIAAAAIgBABIgCABIgCADIAAABIgCAHIAAAJIAAACIAAALIgCgLIAAgCIgBgHQgBgFgEgDIgEgBIgBAAQgHgCgEAGIgEAEIgCADIgPARIgLANIgFAHgAsBCIIABAAIACgEIAJgMIABABIgHALIgBADIgCACgAnyBbIABgKIACgKIgRALIgPAJIgMAIIAKgIIAMgJIAUgOIgGgBIgCgBIg9gMIBFAKIgZgmIgBgBIgEgHIAAAAIAFAHIACABIAaAkIAIgiIABgEIADgOIACgKIABgBIAAABIgCAKIgDAOIAAAEIgGAjIAjgYIghAbIAyAKIASADIgXgDIgtgHIAGAKIAHALIAUAeIgXgeIgIgKIgGgIIgBAIIgDALIgKAugArzB2IAGgJIAHgJIgGAJIgGALgAI/AZIgBgEIgBgGIgDgJIgDgLIAAgBIgBgBIAAABIgCADIgNARIgEAHIgCACIACgCIADgHIAKgQIACgEIABgBIABgBIgNADIgCAAIgiAGIAYgFIAKgDIAOgEIgCgBIgagQIgEgDIgFgDIAGADIAFADIATAKIAGgFIgCgKIAAgCIgBgFIgBgEIgDgMIgBgGIACAGIADAMIABAEIACAFIAAACIACAIIAPgLIAJgHIADgCIAFgEIAagUIAHgFIADgDIAngeIADgDIADgEIAAgBQABgEgBgFIgCgEQgDgHgIgCIgigIIAeADQAJABAFgDIACgBIADgFIABgBIABgBQACgHgEgIIAAAAIgGgJIgHgLIghgwIAvA5IAAAAIAEAFIADADQAFAEAIgBIABAAIAGgCQAFgEABgHIAAAAIACgJIADgTIAAAFIAAAAIAAANIAAAJIAAADQAAAGACAEIADAFIACACIABAAIABABQAFADAFAAIACgBIAGgCIBMg0IAGgEIARgMIAJgGIARgMIACgBIgCABIgOALIgGAFIgGAEIgQANIgwAlIgEADIgMAJIgLAIIgCACIgCADQgDADABAGIAAAAIAAADIACAFIADAEQADADAFABIAjAJIgsgDIgDABQgHABgCAFQgCADABAFIAAACIACAFIAFAKIADAEIALAUIAGAJIACAEIgCgEIgHgJIgNgSIgCgBQgHgJgHgCIgCAAIgGgBQgHACgDAGIgCAEIAAAEIgIA0IgBADIgDAUIABgUIABgDIADgzIAAgGQABgEgCgEQgCgFgGgDIgBgBQgEgCgDAAQgFAAgFADIgeAVIgCABIgLAIIgeAUIgFAEIgLAHIgBABIgBAAIgGAFIgNAJIACAKIAHgJIAJgMIgMAUIgCADIABAAIAIgCIApgKIgkALIgGACIgHABIAFADIADACIAbAPIgfgOIgFgDIACAJIADANIABAGIABAEIAEAQgAIsgSIAJAFIgCgKgAoCgDIgHgaIgDgJIgBgFIgBgEIgBABIAAABIgCADIgIAKIABAAIAJAPIgKgPIgIAKIAHgKIAAgBIgJgMIgQAEIgDABIgEABIgBAAIgHABIAHgCIABAAIAEgBIADgBIAPgEIAAgBIgEgEIgNgSIgCgCIgFgBIgCABIgBABIgDAEIgDAJIgBACIABgCIABgIQABgDgCgCIgCgCIgBgBQgDgBgEACIgDACIgNAIIgNAHIALgIIAJgHIAIgFIAAAAIABgBIACgDIAAgCIAAgBIAAAAIgBgCIAAgBQgCgCgEgBIgMgDIAPABQADABACgDIABgBIACgEIAAgBIgBgDIgBgBIgYgkIgGgKIgEgFIAEAGIAIAKIAZAiIACACIACABIADAAIABAAIAEgCIABgDIAFgRIADgKIABgFIgBAGIgCAJIgBAJIgCAJIAAABQABADACACIADABIAAAAQAEAAAEgDIAOgJIgOALIgDADQgBABAAAAQgBAAAAABQAAAAAAABQgBAAAAABIAAADQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAIACABIARAFIgPgBIgEAAIgDADIAAABIgBAEIABACIAEAGIAJAOIACADIAGgBIACgBIAFgCIAEgBIgQgKIgRgKIAMAGIAWAMIAAgCIgBgDIgCgKIgEgSIgBgDIAAgCIgBgDIgCgJIADAJIABADIAAACIABADIAFASIADAMIABACIABgBIAIgMIAJgOIADgFIgDAFIgIAOIgHAOIgBABIACAAIALgDIACAAIAggIIACgBIgCABIgdAIIgBABIgNADIgCABIgBAAIAmAYIgogVIACAIIABAEIACAHIAFAaIAAABgAoTgxIgFACIgFABIgEABIAHALIAGgKIACgEIABgBgAG1h4IAEgYIAAgDIABgDIADgXIABgEIgkAYIAigbIgMgCIgIgBIgMgDIgFgBIgGgBIgCAAIgXgEIAZADIACAAIAGABIAGABIAMACIAJABIAIABIgCgEIgEgGIgEgHIgDgDIgBgCIAAgBIgMgSIgFgIIAGAIIANARIAAABIABABIADAEIAFAHIAEAFIACADIACgFIACgKIADgMIABgHIAAAAIAGgbIgEAaIAAAAIgBAGIgDAPIgBAIIgBAHIAsgcIgqAfIAGACIAdAFIAaAFIAHACIgHgBIgdgEIgfgFIgBAAIAAABIALAPIAQAaIADAEIAAAAIgDgEIgQgUIAAgBIgDgDIgLgPIgBgBIAAABIgFAYIgBADIAAADIgFAYIgDAKgAmGjtIAAgDIgBABIgcARIAagSIACgCIgGgBIgngIIAkAGIAJABIgUgfIAAAAIAWAdIAKgrIgHArIgBABIAYgQIgWASIAtAIIgogFIgGgBIABABIAJAOIAMATIgRgXIgHgJIAAADIgJAogAHzj1IAHgHIABAAIgHAGIgIAHgAH7j9IAfgfIAEgEQADgDgBgDIgBgCQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIgEgCIgNgCIgDAAIAEAAIAAAAQANAAADgBIACgBQADgBABgCIAAgEIgCgEIgBgCIgBAAIgBgBIgMgQIAMANIADADIABAAIACABIACABIABAAIACAAQADgBACgDIAAgDIAAAAIABgJIAAgbIACAiIAAADIABADQACADACABIABAAIAEABIAEgDIAxgrIgvAuIgBACIgBACQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAIABACQACADAEAAIAQACIgOABIgGACIgBAAIgBACIAAABIAAABQgBADACADIAHAIIAKAMIABABIAEAEIACADIgCgDIgFgEIgBgBIgPgOIgDgDQgDgDgEABIgBABIgDABQgCACAAADIgBANIgBgOIgCgDIgBgDIgCgBIgBAAIgEgBQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBABIgmAigAkGkOIAAgCIABgJIAEgUIgMAIIgIAGIgBAAIgDACIADgCIAAgBIAIgGIALgJIgVgEIgUgEIgEgBIAEABIATADIAAAAIAWADIgDgFIAAAAIgMgTIgGgKIATAaIAAABIAFAFIACgIIAEgUIADgNIAAAAIgCALIgEAXIgBAIIAFgDIASgMIABgBIACgBIgCACIgBABIgRAMIgFAEIAJACIAcAFIAIACIgHgBIgbgEIgKgBIgBgBIAUAfIgWgeIgFAWIgBAIIgBACIgDAMgAg1lEIALgVIAEgJIAFgKIAEgHIgMADIgGACIgLACIgPAEIgCAAIgBAAIABAAIACgBIAPgFIALgDIAFgCIAMgEIgQgIIgFgDIgKgFIgZgOIgLgGIALAFIAZAMIAJAFIAFACIABAAIARAJIgLgrIgDgKIgCgHIABgBIADAJIADAJIANApIADgEIANgXIABgBIADgGIADgFIACgGIALgVIABgCIgBADIgJARIgCAGIgBAFIgCAEIgDAFIgCAGIgNAYIAOgEIANgEIACgBIABAAIAQgEIAEgBIgEABIgQAGIgDABIgMAGIgNAEIAOAIIAMAIIABAAIAFADIAMAHIAHADIAAABIAKAFIgKgEIAAgBIgHgDIgMgGIgFgCIgBAAIgMgHIgRgIIAMArIABADIAGAUIgEgKIgBgFIgOgmIgDgJIgBgDIgCAEIgJAPIgEAIIgMAUIgMAVgAGKmNIgYARIAWgTIghgGIgCAAIgLgDIAMACIACAAIAhAFIgRgaIgDgFIgDgEIADADIAEAGIASAYIAKgsIgIAtIAfgTIgdAVIAcAGIACAAIAMACIAFABIgGAAIgMgCIgCAAIgcgFIAVAgIAAAAIAAAAIgXgeIgKAtgAkMl4IABgCIADgDIAJgMIAxhBIACgFQABgDgCgEIgBgBIgBgCQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgHgCIgVgBIAUgCQAFgBADgDIABgEIABgCQABgGgFgFIgEgEIgXgVIACgBIAQAMIAIAGIADADIACABQAGAEAFgCIABAAIABgBIADgCIABgCQACgDAAgGIgBgWIAFAZQABAFAEADIABAAIADACIAFAXIgEgXIAFAAIAEgCIACgCIADgDIAHgJIACgCIAHgBIgHAJIgGAIIgBABQgDADAAAEIABAFIABABIAAAAQACAEAEACIAFABIABAAIAFAAIAJAAIAQAAIABAAIAIAAIASgBIgSACIgIABIgBAAIgOABIgBAAIgJABIgEABIgCAAIgDACQgFACgBAEIAAAFIAAABQACAFAHAHQAGAGAPALIgagRQgFgEgEgBIgDgBQgEgBgCACQgDABgBAFIgBACQgBAFABAbIgFgZQgBgEgCgDQgCgCgEgBIgCgBIAAAAQgGgBgEAFIgGAHIgtA2IgJAKIgDAEIgBABIgGAHgAAdmIIABgBIADgBIgDACgApSnBIgFgBQgDgBgEACIgBABIgBABIgCAEIgBAGIAAAQIAAADIAAgEIgDgOQgBgEgDgCIgEgCIgCAAQgFgBgEAFIgCADIgEAEIgDAFIgRAWIgEAEIADgFIAPgWIABgCIACgDIAFgHIABgCQACgFgBgFIgBgBIAAAAIgDgDIgBgBQgEgCgFABIgKACIgJABIAIgCIANgEQAFgCACgDIABgBIAAgDIAAgGIgBgDIgDgCIhNg4IBQA0IADABIADABIAFgBIAAgBIABAAQADgCACgEIAAgFIgFgzIAHAlIACANIACADQACAEAEABIAEAAIABAAQADgCAFgEIACgDIAOgUIgOAYQgDAHgBAEIABAFQABADAFABIACAAIAFAAIAMgBIALgCIgJADIgJADIgEABQgEABgCACQgCACAAADIAAACIAAABQgBAFAFADIAHAFIBGAzgAElm2IgEgHIABgBIADAHIAEAJgAD1nHIAAAAIgCAFgAEUnXIgGgLIgCgCIgBgBIAAAAIAOgLIgRALIgCAAIgBABIgCABIgCACIgEADIABgEIABgCQgBgDgCgCIgCgBIAAAAIgGAAIgDABIAAAAIgBABIAAgBIACgCIAAAAIAEgCIACgDIABgDIAAgCIgBgCIgCgBIgFgDIAAgBIADAAIAEAAIADgBIAAgBIABgBQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBIgBgCIgCgEIgGgMIABgFIAKATIAAAAIABACIACADQABABAAAAQAAAAABAAQAAAAABAAQAAAAABAAIABAAIABAAIABgBIABgBIADgDIAGgLIgEALIAAAEIABACIABACIABAAQACACAEgBIAEgBIALgFIAMgFIgBABIgNAHIgDACIgIAEQgDACgBADIAAABIAAAAIAAADIABAAIABACIADACIABABIALAEIgLgDIgDgBQgEgBgCADIgBAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIAAADIAAABIAEAIIAJAUIgBACgAD2nLIACgFIABACIgCADgAD6nXIABgBIAEgDIgDAHgADqnmIAAABIgIADgADloAIAKADIAAABIgKgEgAE2oJIADgCIgDACgAh9osIACABIgWAeIgHABgAj4oXIAAAAIAJAHIgBABgADjo/IATAjIgBAEgAkAodIAGAFIAAAAgAh8otIABgCIACABIgBACgAh6owIAIgJIAJgKIADgFIAAABIgDAFIgJALIgGAJgAhlpIIAEgGIgEAGgAEWqAIgKgJIgLgJIgBgBIgGgGIgIgHIgHgFIgRgPIgRgPIAAAAIgKgJIgLgJIgDgCQgGgDgFACIgBAAIgDABQgEACgDAEQgCAEgBAFIgBAlIgDgWIgDgWIgCgEIgBgCQgCgEgEgBQgCgBgDABIgDABQgHACgJAIIgGAGIgCACIgYAVIAYgaIACgCIABgBIACgDIACgDIAEgLIAAgCIAAgDIgBgDQgBgDgDgCIgBgBIgCgBIgCgBIgFgBIgVABIgLAAIgFABIgCAAIgeABIgLABIALgCIAegEIACAAIAFgBIAggEIAHgCQACgGAEgBIABgDIAAAAIABgBQABgFgBgDQgBgFgEgEIgVgTIgEgEIgUgUIgMgLIgLgLIgEgEIgkgjIAjAfIAFAEIALAJIAMALIAFAEIACACIANALIAFAFIAZAWIAFADIAFABIAFAAIADgCIACgBIADgBIACgCQADgFABgHIABgSIAAgRIACARIABAOQABAIAEAFIACABIAFADIABABIACAAQAEABAFgCIAFgEIAQgQIALgNIAEgDIANgOIAMgNIgMAQIgOASIgFAGIgKANIgDAEIgFAGQgGAIACAIIABADIADAEQACADADABIACAAIAFABIAKgBIAAAAIASgBIgSAEIgBAAIgKACQgFACgEACIgEAFIgCACIgBACQgBAGABAFIAAABIAEAGIAGAFIAeAdIARARIAHAGIAIAIIAGAFIABACIALAKIAJAJIAQAPg");
	this.shape_4.setTransform(96.9,100.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DEF2FC").s().p("AmrMbIBFiHIACAAIgSAxIgBADIgxBUIghA5gAkqLyIgHgVIgOgpIAXAuIABADIAbBogAh6LYIgBgBIgFgCIgLgFIgKgEIgDgCIgDgBIgEgCIgHgDIgjgQIgCgBIgDgBIg8gbIgEgCIgkgQIAAgBQADgGAFgCIAhARIACABIAcAOIAAAAIAgARIAmATIAIAEIACACIAEABIADACIAJAFIAMAGIAEACIABAAIASAKgAgULAIgIhMIgBABIAAABIgCACIgRASIghAjIgLAMIALgOIAigoIAQgTIgNABIgHAAIgNAAIgPABIgBAAIgSAAIgFAAIAFAAIASgCIABAAIAQgCIAMgBIAIgBIALgBIgKgJIgJgIIgIgIIgWgUIgJgIIgCgBIgBgBIgDgCIgFgFIAFAEIADADIABABIACABIAJAIIAWARIAIAHIAKAIIAJAHIAAAAIADACIgCgiIgBgVIAAgDIAAgCIAAgFIgBgLIAAgIIAAADIABALIABAIIABADIACAVIADAUIAAAAIACASIAEgEIAsgxIAHgIIAHgIIgHAIIgHAJIgBABIgsA2IAdABIACAAIALAAIAJAAIAEAAIACAAIgCABIgEAAIgJAAIgKABIgDAAIgdACIAeAdIAGAFIADAEIAaAXIABABIgBgBIgagVIgDgDIgGgEIghgdIAEBNgAnkKiIBFgaIASgGIAVgIIADAGIAAACIgaALIgFACIgPAEIhDAUIgpALgAk/KWIAEACIAHAZgAleKYIABACIgHANgAl6JiIgDgCIgEgCIgvgYIgUgKIgBAAIgFgDIgHgEIgHgDIgHgEIgJgFIgHgDIgGgDIgmgUIgbgOIAcANIAoASIAFACIAIAEIAJAEIAHADIAIADIAHAEIAFACIABAAIAUAJIAxAWIADABIAEACIAHADQABAFgDAFIgBACgAktJhIAegKIgfAMIABgCgAlBJYIAJgYIABgDIBTiPIAPgZIABgJIACgLIgIAFIgEADIgfAVIAAgBIAhgaIAFgFIABgBIAAAAIgEgBIgxgJIgBAAIgJgCIgEgBIgRgDIgEgBIAFABIARACIAEABIAJABIABAAIAxAHIAEABIgDgFIgOgWIgOgVIgBgCIgHgLIgEgHIAEAGIAIALIABABIAPAUIAOATIAEAFIACADIAEgSIACgMIABgDIALg0IgIAzIgBADIAAACIgDARIgCAMIACAAIATgNIAEgCIADgCIAJgFIAUgNIgVAPIgFAEIgDACIgJAHIgQAMIALACIAQADIAOADIAiAGIABABIAOACIgNgCIgCAAIgigFIgPgCIgQgCIgLgCIAIALIANAVIAKAPIAJAOIAAAAIgKgMIgKgOIgOgTIgKgNIgTBWIAIgwIADgRIgMAYIhXCpIgEABIgEgBgAlgJKIgDgLIgFgUIgDgLIgGgXIgEgNIgGgVIgBgHIgHgaIgGgTIgCgIIAAgBIABgBIAAABIADAHIAIAZIAGASIACAFIAHAWIAEALIAHAVIACAGIAIAXIACAGIAGASQgDADgFACIgDABgAp/HtIgHghIgGgYIgCgJIAAgDIgEgPIgWAdIgMARIgNARIAAAAIAMgTQgBgEAIgGIAWghIACgDIgNACIgjAFIgWADIgbADIAegFIALgDQADADAHgEIABgBIAigGIAKgCIgFgEIgPgLIgDgDIgPgLIgGgEIgDgCIgFgEIgHgFIAIAFIAFADIAEACIAGAEIAQAKIADACIAQALIAEACIgBgEIgHguIgCgJIgBgKIgCgLIgCgNIADANIACAKIACAKIACAIIAJAtIACAGIALgOIALgPIAXgfIAGgJIgEAIIgRAaIgKAPIgPAYIAWgDIAKgCIAfgEIAHgBIABAAIAHgBIATgDIgUAEIgIABIgBAAIgIACIghAGIgCABIgZAEIAUAQIAOALIACACIAKAIIABABIgCgBIgKgHIgCgCIgPgKIgVgOIADAOIAAACIABAJIAFAZIAFAiIACAKgAJbGeIgKgSIgJgQIgEgIIgVgkIAAAAIgLgTIgQgbIgEAOIgFAOIgDAKIgBACIgCAHIgCAFIAAABIgBACIgEAMIgBACIgEAOIgCAEIgBAEIgBADIgHATIgBgBIAHgXIABgEIAAAAIABgFIAEgNIABgDIACgIIAAgDIACgFIABgEIACgIIABgBIACgIIABgDIAAgBIADgNIAEgNIgOAHIgKAFIgKAFIgEABIgBABIgBAAIgKAFIgdAOIgJAEIgVAKIgNAHIgJAEIAJgFIAMgHIAUgKIAIgFIAcgPIAKgFIAEgDIABAAIABgBIAIgEIAKgFIAQgJIhBgWIgXgHIARAEIBJARIgHgNIAAAAIghhCIgDgFIgKgUIgCgFIgDgFIgBgCIgJ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gNAHIgJAEIgDABIgPAHIgOAHIgGADIgIADIgcAOIAdgQIAIgFIAHgDIAOgIIAPgIIABgBIABAAIACgBIAIgFIAPgIIARgJIACgBIAAAAIACgBIABgBIgCgBIgEgCIgIgCIgMgFIgEgBIgJgEIgDgBIgCAAIgGgDIgKgDIgEgCIgDgBIgDgBIgIgDIgIgCIgIgDIgLgEIALADIAJACIAHACIALADIADABIAEABIABABIALADIAGABIABAAIADABIALADIADABIAPAEIAEABIACABIAHACIgFgJIAAgBIgCgEIgCgEIgKgSIAAgCIgCgCIgBgCIgCgEIgBgEIgCgCIgDgGIgBgDIgBgCIgDgFIgCgGIgCgDIgBgCIgBgDIgTgjIgHgOIgBgDIACAEIAHAMIAVAkIABADIABABIACAEIADAFIABACIABABIAAABIACACIABACIADAGIACADIABADIABAAIABADIABACIACACIACADIAEAIIACAEIACACIAAABIABACIAKASIAIgYIABgCIAAgBIABgCIAFgNIABgDIAAgDIAIgXIABgCIABgDIAGgSIAAgBIAGgSIABABIgFARIAAAAIgFATIAAADIgBAAIAAACIgHAbIgBAEIgBACIgEANIAAACIgBADIAAABIgGAWIADgCIAKgFIABAAIAagMIAAAAIADgCIAAAAIAJgEIAWgLIACgBIAFgCIAigQIAPgIIgQAJIglAUIgEACIgCACIgZANIgCABIAAABIglAUIgEACIACABIAUAGIAPAFIAPAFIABAAIAjALIgkgIIgCgBIgQgDIgQgEIgUgFIAKAUIAJARIAHANIACAFIAZAxIACADIAJARIAEAJgAjUn+IgSggIgIgOIgGgRQACgCADABIAMAXIA/B7gArkmvIgFgEIAFAEIAAABgApem7IABAAIACgDIgCADgAkqnAIACgIIAZhcIAGgVIACABQADABADACIgJAYIgdBWIgCAHgAmXoGIANgHIAVgLIAKgFIAKgFIAOgHIADgCIA6gdIAAABQACAEAAADIg5AZIgDACIgPAHIgKAEIgKAFIgVAJIgPAGIgNAGgAjmpEIgBgBIARAGgAijp5IgBABIgCABIgMAGIgJAMIgGAIIAAAAIgEAFIAAgBIAEgFIAAgBIAGgIIAFgIIgHADIgXAMIgGADIgFADIgFACQgEgCgCgEIAAAAIAHgDIAGgDIAGgDIAZgLIAOgGIADgEIACgDIABgCIACgDIgDAAIgwAHIgGABIgDAAIgGABIAGgBIADgBIAHgBIAtgJIAEgBIgGgEIgVgQIgCgBIgLgIIAMAHIACABIASAMIAJAFIABABIgHgtIAAgBIgDgQIADAQIAAAAIAKAtIAMgPIADgEIAUgbIgTAeIgEAGIgIANIAKgCIAFAAIATgDIAWgKIADgCIAHgDIAJgEIgJAFIgHADIgDACIgPAIIAQgDIADAAIgDABIgUAEIgVALIgFACIgCABIACACIAHAFIAOAMIgOgJIgGgFIgGgEIgHAEIAJA2gAimqBIAAAAIgCACIgBABIgCAEIADgCIADgBIABAAIgBgDIAAgCIAAgBgAiiqDIAAACIABACIADgBIgDgCIgBgBIAAAAgAiRqJIgEABIgCABIgJABIACACIABAAIADACIAEgCIAFgCIAMgFgAj6pqIgBgFIgKgvIgBgDIgDgOIgFgYIgBgEIgFAGIgDAFIgIAKIgFAHIgCADIgCACIgCADIANAVIgFADIgLgUIgEAGIgGAIIgJANIgBAAIgFAIIgDADIgCADIAAAAIgFAHIgCACIACgDIAEgGIABgBIABgDIADgEIAFgHIAAAAIAJgOIAGgKIAEgGIgRgiIgrAGIgOACIgJABIgGABIgLACIALgCIAGgBIAIgCIAOgCIAqgIIgVgoIAXAnIAEgBIAJgCIACAAIAAAAIABAAIABAAIAFgBIABAAIATgEIgXgSIAAgBIgHgFIgNgKIAAgBIAAAAIgBgBIgLgIIAAgBIgGgFIAFAEIABABIALAHIAMAIIAEADIADACIAdAUIgFggIgDgVIgMhFIAPBEIAIAjIADARIAEgFIADgEIANgRIAIgLIAMgPIAVgdIABAAIAAABIgVAfIgLARIgHALIgOAUIgBADIgCACIADAAIACgBIAkgFIAFgBIAFAAIABgDIAEgNIgDAOIgBACIABgBIAVgDIAFAAIAIgBIATgDIADgBIAAAAIARgCIgTAEIgBAAIgTAEIgHABIgGABIgTAEIgEABIgHAeIgFADIALghIgFABIgBAAIgrAIIAGAFIADACIAaATIAEADIACgCIgBADIADACIACACIAVAPIACACIAJAGIgJgGIgCgBIgWgOIgCgBIgDgCIgDAPIgRAhIAGgUIAKgeIgEgDIgTgMIgNgIIgDgCIABADIAGAlIABAEIAAABIAHAtIACAIIADAXgAk6rKIgEABIASAeIACgDIACgEIACgCIAEgHIAIgMIAFgIIgKABIgJACIgFAAIAAAAIgCABIgBAAIgBAAgAlApkIgEgBIg1gUIgQgGIAQAFIAxAOIAFACIAKADIANADIASAIIAAACIgCAEgAkiqNIAFgDIADAEIAMAjIgBAAgAjqqCIgDAMIgDAKIgDACgAkNp1IAEAHIAAACg");
	this.shape_5.setTransform(104.2,112.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A7DFF8").s().p("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IACIABAFgAI7CtIATgDIAUAFIgEAFgAHyCsIACgCIACABIgKAEgAIpCoIAAgCQABgEADgCIAaAIIgRADgArbCjIACACIgCABgArXChIACABIgBABgArVCeIAegTIAAAAIgaAUgAHXCTIhDgTIgcgIIgHgCIBPARIAjAPgAHhCNIAUAFIACACIAAABgAIjCOIAZgOIAGAEIgNAIIgSAHQgBgCABgDgAsUCQIACgHIABgIIADgOIAFgeIADgMIAAgCIABgFIABgIIAAAIIgBAFIAAACIgCAMIgEAeIgCAOIgBAIIgBAIgAH/CEIgBgCIgYgwIgEgHIgEgHIgMgYIgFgKIgEgJIgFgHIgEgKIgDgEIgEgIIAFAIIADAEIAFAJIAFAIIAFAJIAFAJIAPAZIADAHIAEAHIAeAyIgBABQgCAEgEACgAIiBwIgBAEIgBADIgEAPIgBABgAI9B/IABAAIAJgGIAQgJIAIgRIABACIgJAPIALgGIAAAFIgRALIgKAHIgEACgAJkBpIA7gjIASgKIgQALIg8AngAJgBdIAOgbIAHgNIAJgRIABgDIAyhgIANgYQAGADACAGIgIAOIg6BhIgBACIgKASIgIANIgQAdgAonAMIgBgGIgFgcIgBgFIADgBIAAAGIAEAcIABAHIADATgAOQABIgLgEIgagPIgGgEIgEgGIAFABIALAIIAbARQADABABABIAgAUgApcgTIADgBIgNAQgApRgkIAHgLIALgMIABAAIACACIgKALIgHAKIgLAPIgDABgAoAgmIACgBIATAPIAAAAgANfgZIAAAAIAAAAgAowgiIgBgHIgDgRIAGAAIACASIAAAGIABAFIgDABgANWgfIADABIgBABgANMgkIhBglIgVgMIgJgFIgDgCQgBgFACgDIAZAKIAEAEIASALIACABIACABIAoAaIABABIARAKIABABIAAACgAoDgoIABgBIABABgAoGgrIACABIgBABgAohg6IgIgFIAAgBIAEgDIAMAKIAQALIABAEgAqMg4IgBABIgSAEgALfhRIACAAIADANIAFAQgAqIg5IABAAIAEgBIAbgGIAPgDIAUgBIAAABIgFAAIgTADIAAAAIgiAHIgIABIgDABgAJmhbIADgBIAogLIgyAWIhsAXgApGhIIAAABIgGABgAoohOIAJgBIAPgDIAAAEIgGABIgIABIgKABIAAgDgAoQhSIAegGIAcgFIANgCIgLACIgaAHIghAHgApKhbIAJAGIAAABgAoqhUIAGgIIgGAIgApXheIgughIAqAZIAPARgAo8hyIgBgKIgDgWIAAgDIgCgKIgBgGIgBgIIgBgIIACAIIABAIIACAGIACAKIAAADIAEAXIACALIAEAYIgEACgAKthlIgCAFIgcAFgAL1h5IgBgFIgBgDIAVgEIBagUIA7gNIAAABIg6ARIgdAJIgFABIhJAVIgDgEgAKeiLIAOAHIgCABgAKAieIhag6IgIgFIgBgBIgCgBIgVgOIgCgBIgBAAIgBgBIgOgJIAPAJIAAAAIACABIABAAIAWAMIACABIACACIAJAFIBrA+IANAIIAQAJIgBABgALgiTIgCgBIAAgBIARgcIAGgKIAIgOIAFgJIAJgQIAHgMIAIgOIADgFIAxhUIgpBPIgDAIIgUAmIgHANIgGAMIgEAIIgSAlIgBACQgGAAgEgDgAK4i4IgLgsIAAgFIgJgkIAAgBIAAgCIgBgEIgEgLIAAgCIgBgEIgBgEIAAgBIgDgMIADALIABACIABADIACAEIAAACIAEALIABAEIAAACIAAABIALAiIADAHIASA5IADAJIACAHIgFACIgCAAgAj+kpIAAAAIgBAEgAj8ksIADgHIAHgUIADgIIgCAOIgIAPIgDAHgAh+lTIgqhmQABgEADgCIAGASIAYBAIAUA4gAoNk8IAAgBIAAAAIABABIAAACgAoNk9IgLgRIgMgUIgGgKIgphBIgEgGIABgBQAEgCADABIABABIAIAQIAfA4IAIAOIAJAQIAJARIAAAAgAjvlPIACgDIAGgQIAehOIAGgGQAEgGAGABIgIARIgjBLIgHAPIgCAEIgDAHIAAABgAp+lNIACgJIABgIIADgOIADgKIAAgCIACgLIABgEIADgQIACgFIAFgSIACAAIAEABIgEAMIgBAGIgCAJIgDAJIgEALIgCAIIAAABIgDAKIgEAOIgCAIIgCAIIgBADgACClXIgQgGIgIgEIgPgFIgGgDIgDgBIgBgBIgBAAIgGgCIgKgFIgCAAIgMgEIgBgBIgDgBIgHgDIgBAAIADgCIgDABIAAAAIgEgBIgQgHIgEgBIgCgBIgDgBIgBAAIgHgDIACgGIADABIADABIADACIABABIAFACIAQAGIADACIACACIAHACIADACIABAAIALAFIADABIAKAFIAGACIABABIABABIADABIAGACIAPAHIAIAEIAQAHIAHADgArZl6IAJgFIAKgHIALgIIAogcIAggPIAAACIgJAFIgKAHIgEABIgFAEIgXANIgDADIgQAJIgMAIIgKAHIgJAGIgRAKgAENmGIABgBIAAAOgAlamLIANgFIANgHIAXgLIAKgFIAKgEIANgHIAFgCIA4gbQABABAAAAQABAAAAAAQABABAAAAQABABAAAAIg7AaIgFACIgNAGIgKAFIgLAEIgXALIgNAGIgNAGIgOAGgAgBmMIgOgFIgPgHIgDgJIASAIIANAGIADADIgBAFgAENmRIACABIAAABIgCABgAgtmeIgFgCIgCAAIgFgCIgggNIgLgEIgEgBIgHgDIgRgHIgBAAIgEgCIgRgHIAAgFQACgEAEgCIAHADIAFACIAOAGIAMAFIACACIALAEIAiAQIAEABIACABIAGADIANAFIACAKgAENmbIAAgOIAAgCIACAEIAAAMgAFQmpIgBAAIABgBIAAABIAFAEgAn4mwIhRgPIAAgDQABgDACgCIAhAJIADABIAmAJIAgAIIAAABgAFMmtIgEgDIACABIACACgAFImwIgIgGIgKgIIgFgFIgBgCIABgDIAGAGIAKAKIAJAIgAENm4IACABIAAADgAp4m9IACABIgJAFgAEMm8IAAgKIAAgJIAAgCIAEgEIgBAHIAAATgAEinWIAKAJIgBADgArunoIBGANIAgANgAEgnSIgHgFIAAgCIAJAKgAqLnWIATAEIACADgApPnXIAJgGIASgKIADgDIASgKIAIgGIAKgFIAYgPIAAgBIAGgCIABgCIAKgFIAJgHIADgBIgCACIgKAGIgJAHIgBABIgFACIgBABIgWAQIgJAFIgIAGIgSAMIgTAOIAAAAIgPAHIAAgGgAELnWIACgBIABAAIACgBIAAABIgFACgAECndIABAAIgHAHgAp8n2IgGgKIgwhXIA0BUIAKAQIANAUQgCAEgDACIAAABgApXndIAGgSIgDAIIgCAKIgBAAgAjbnmIgOgFIgBgBIgLgFIgHgDIgDgBIAFgHIABABIAFACIAEABIAfAMIAEADQAFAFgBAGgAC9niIAQgBIAGgBIACADIgJAAIgQAAIgaAAgAibnmIAGgDIAIgCIAEgCIAagLIAVgJIgDAEIgRAIIgYALIgGADIgHADIgGADIgCgFgADWnkIAYgCIADAEIgZABgAD/niIgCAAIgGAAIABgFIAAAAIAJABIgBAEgADynnIADAAIgBAFgAEgnkIAAgBIADABgAE5npIAQgBIAXAAIAbgBIgbACIgYACIgPABgAEfnoIABgBIAKAAIALAAIgBADgAjKoOIgBgFIADgCIAMAeIADAJIgDADIgBAAgAionrIgBgIIAIgQIARghIAGgNIACABIgOAmIgDAGIgJAZIgDAAIgDAAgAisntIACgEIABAFIgDgBgAD7n0IABgGIAIAHIABABIgBABIgBABIgDABgAEanyIgBgCIAUgUIATgSIAFgEIAEgFIgFAGIgFAGIgWAZIgEADIgKAJgABJoPIAYhHIAKgeIAFgOIAYhKIADgBQADAAACABIgFAZIgNAiIgIAUIgGANIgIAVIgLAeIgTAxIgKAYgAEMn1IABhGIAAgDIABABIACBIIgBAAIgBAAIgCAAgAkUn+IgCgBIgQgHIgFgCIgSgIIgigPIgGgDIAFACIAgAMIAQAGIAGABIANAGIAEABIAWAIIAIACIgFAHgADboTIgIgIIgCgEIALAKIAeAZIgCAGgAhWoDIABAAIABgBIAAACIgBAAIgCABgAhRoEIAAAAIABAAIgBABgAhOoGIAIgDIACgBIgBABIgIAEgAjOodIgHgRIACgDIAKAbIgDABgADNohIABgBIADADIACADgADqo+IgUgmIgQgeIgCgEIgLgUIgFgKIgRgfQADgFAFgCIACgBIAJAUIAHAPIAKAWIABAEIAPAgIAUAsIAJAWIgBABgAiJozIAFgJIACgCIgFAMgAjgpNIABAAIAJAUIABADIgCADgAEOpGIAAgNIAAAOgAh8pNIgDAHIgBABgAjipSIgHgTIgIgVIAMAeIAFAKgAGFqfIgGgCIgDgBIgRgFIgkgJIgqgMIgKgDIgBAAIgJgDIgMgDIgOgEIgFgBIgBgBIgigJIgLgCIAAgBQgCgEACgHIABgCIAuAQIAHACIAIADIAFACIALADIALAEIAAAAIAKAEIApANIAkAMIARAGIACAAIAGADIAKADgAB6rUIACgBIAAACIgCABIgFADIgCABIgWALgABLr6IgHgDIgjgMIgYgIIgMgEIAAAAIgLgEIgHgCIgHgCIgGgCIgTgGIgNgFIgCgBIgagIIAZAHIADAAIANAEIATAFIAEACIAJADIAGABIALADIABAAIALAEIAUAFIABAAIADABIAjAKIAIACIAvANIAAAAIgBADQgEABgBAGgAC+r8IgBgDIAZgQIABAAIAGgDIANgGIAFgDIAtgUIAMgGIAmgSIhiA3IgEADIgOAHIgDADIgOAHIgDACIgGACIgCgEgACAsLIgMgbIARAdIgFgCgACpsOIAKgyIAdhLIAYg8IAHgVIgGAVIgaBOIgYBHIgMAlIgCgBgACisTIAEgMIgDANIgBgBgABhtSIgEgJIgohcIAsBTIAGAMIAQAgIAGAKIADAIg");
	this.shape_6.setTransform(96.1,99.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0079BB").s().p("AgEN/QgCgWgBgrIgBgoIAGAEIACAUIAAAPQAKBYgJABIAAAAQgCAAgDgXgAg8NsQgBgGACgIIAEgeIAFAeIACAPQgBAJgGAAQgFAAAAgKgAi2NmQgIgBAHgPIAEgJIAEACIABAIIAAABQAAANgFACIgDgBgAibNmQgGAAACgQIALAFQgCALgFAAIAAAAgAB0M2IgFgqIACAAIAMAoQANApgJACIAAAAQgJAAgEgpgABGM+IgDgaIgCgzIADAIIAJArIAEAZIAAANQABARgDAAIgBAAQgEAAgEgdgAifNUIAEgWIAEgPIAHgiIgBAjIAAAPQgBARgBAKgAhuMlIAEgRIAGgcIABAAQgBAUAAAaIgBALIgLAOIALgMQgBAagFAFIgDABQgJgBAJgtgAixNKIACgGIAAAIgAl/NHQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIAJgWIAHgNQADAFAAAJQgHAUgGAFIAAAAIgDAAIgBAAgADaM/QAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgCABIgCABgADNM3IgCgTIAHALIABACIAEAJIgCgHIAAABIAEAFIgJAJQgDgDAAgIgAA9M/QgGgDAAgbIABgVIAEATIgEgWIAAgQIAJAnQAGAbgGAEIgCAAIgCAAgAD+MtIABgBQACAGgEACIgCAAgADzMpIAGgFIgGAHIAAgCgADRMoIgFgNIAIAAQADALgFACIgBAAIAAAAgADwMfIADABIgDACIAAgDgAiuMcIgCgBQgGgEAIgdIALgoIgBAQIgBAaQgBAggIAAIAAAAgADuMaIAAgBIAEAAIgCABIgBABIgBgBgADJMTIAJAAIABAEIgIABgAgIMSIgBgfIADAAIAEAkgAFPMVIgCgDIAKgBIABAEgABiMKIABgZIAEAAQACATACADIABABIABALIgDABIgDAAQgGAAABgKgAjsMUQgIgDAIgOIABgBIAFAAIgFAAQAHgJADgIIgCAVQgBAOgGAAIgCAAgAjhMUQgIgDATg2IAHgSIAIgEIgGAZQgLA2gIAAIgBAAgAE5LpIAAgCIAGgGIADAEIADAFQAOAZAEALIgMABQgHgMgLgagADsMPIgCgHQAGADACADIABABgADHMOIgEgMIAFgHIADAFIAFAOgABvMMIgBgLIADALgAhPMIQgFAAAAgRIANAAQgCARgGAAIAAAAgADqMFIgDgMIABACIAGALIgEgBgADaL2IABgIIADAQQgEAAAAgIgAoDL9QAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgKAYgfIAGgHIAHADIgFAJIgFAJQgSAfgHAAIgCAAgAC+LtIgCgIIADgBIAHARIgFAIIgDgQgADiL1IAEAEQAAAAgBAAQAAABAAAAQgBABAAAAQgBABAAAAgAjCL3QgDgBABgMQACgNAJgcIACgDIAKgEIgCAKQgKAzgIAAIgBAAgAhkL2IACgJIgBAJgAGiLWIgKgWIgMgVIAeAmQAOATADAJQACAGgDACIgCAAQgHAAgPgfgAALLyIAEAAIAAADQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAgAD7LxIgIgRIgBgEIADgBIAHAKQAIALgGAEgAhQLcIABgEIAIAIIAAATIgMABIADgYgAALLxQgEgHAAgYIABgJIAHAogABjLaQABADADATIgEABIAAgXgAgJLxIgBghIADAhgAAQLMIABAFQAEAWgBAIgAD0LsIgBgDIAAgBIAAgCIADAHgABALoIgBgGIACAKgAEgLlIAGgNIABACQADAHAAAEQgBABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgCAAQgCAAgDgEgAI9LSIAGgLQAXAagFAEIgCABQgGAAgQgUgADfLlIAAgCIACACIgCAAgACULBIAOAIIADAIQADAPgCAEIgFAAQgGgDgHgggAE8LcIABABIgGAGgAEYLUIAMgCIABADIgHANIgGgOgAEvLQIAGgBIAGALIgGAGIgGgQgADjLeIACAAIAAACgAC4LVIABAAIAEAKIgCABIgDgLgAk9LeIAHgIIAAABQAAAHgEAAIgDAAgAhPLVIADgMIAFgFIAAAYgAk/LTIAJgJIAAAIIgGAEIgFAEQgCgDAEgEgADiLYIABgBIABABgADxLWIAAAAIABAAgAHKKuIAAgBIgEgGIgDgRIAOARQAiApgHAFIgBABQgIAAgZgogAmTLVQgEgCAFgLIAHAKQgDADgDAAIgCAAgAApK2IAMAfIgBAAIgBAAQgHAAgDgfgAC4LUIgBgBIABABgADYLCIAGAKIABADIABAAIgEAFgAoiLRQgGgEAVgaIAKAFQgPAagIAAIgCgBgAEVLMIAAgCQACgGgIgOIgGgTQAIAQANAVIACADIACAEIgLACIgCgFgAI4LMIgHgIIgFgHIgRgXIgbgiIAgAfIATATIAOAPIgGALIgDgEgAAoKfIgCgXIAEACIAAABIAIAcQAHAdgBALgAFJLMIAAgBIAHgBIgBACIgBABIgCABIgDgCgAEsLKIADgFIADAGIABACIgFABIgCgEgAFNLFIgEAFIgCAAQgGgHgJgTIABgDIgCADIgFgMIgTgpIgHgPIAMASIAAABIABAAIAVAhIAFAIQAQAYABAJIgGABgAnjLHIAFgIIAFADIgBACIgDAFgAEgKrIAOAYIgCAFIgMgdgAhJKxIACgKIAAAcIgFAFIADgXgAmPLBIACgEIAEALgAGCK5IgGgQIgDgGIAQAQQAOAOgHAFIgDABQgGgBgFgNgApfLGQgHgGAWgUIAQgOIACABIgLATQgNAUgHAAIgCAAgACTK9IgCgHIgBgJIAEACIgEgCIgBgEIABABIAMALIAFARgAkTLGIgBgBIATg6IAOgbIAHgQIgRA6QgKAigHAIQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBAAIgBAAgACsK7QgFgJgGgeQgFgggGgYQAIAYAMAdQAQAqgJADIgBAAQgCAAgCgDgAnaK6IAVgbIgQAdgAmFKwIAGgKIADALIgBAEIgDAGgAnJK6QgHgFAIgGQAHgEAEgEIgDANQgBAHgEAAIgEgBgAi+KXIgHAgIgFACIAMgigAoRKyIACgDIAGgGIAGADIgFAJIAAABgAijKCIgHAlIgBAGIgHADIAPgugACNKiIgHgmIABADIABACIAIAYIAHARgAoGKmIAKgMIAMgOIgKAQIgHAMgAjVKkQgIgCAOgqIARg1IgIA3IgCALQgFAegHABIgBAAgAl5KdIANgVIgLAbgAG6KTIAEgEIABACIAEAQIgJgOgAIRJ6Igsg1IAyAuIASARQAUAVgDAFIAAABIgCAAQgJAAgeglgApAKdIALgKIgIAMgAqVKbQgDgDAFgHQAHgKAXgSIAwgoIgpAvQgUAVgKAHQgFADgCAAIgCAAgAlFKQIgBgCQgBgCAAgDIABACQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAEgDAIgOIABgGIAEgQIgPAWQgFAHgBAEQACgMAOgYIAcgwIgTA0IgDAHIAAACIgDAEIgEAMIgBAFQgDAIgCAEQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAIgDgBgAG2KMIAFAAIAAAAIgDAEIgCgEgAmLKPQgGgEAIgJIAEANIgDABIgDgBgADEKGIACgHIABgDIAAAAIADAQIgCAAQgGAAACgGgADJJ/IAFAEQAEAGgGACgAG0KJIgIgNIAGAFIAEAFIACADIgEABgAmEJ9IAMgNIgGAUIgCAEgAG8KFIgBgBIAAgCIgBgGIABAAIACAKgAG/J9IADAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgFAGgApQJ/QgHgGAYgVIAdgbIgWAhIgDAFIgFAHQgIAKgFAAIgDgBgAGqJ5IgDgFIAGAHgAFiJ1QgJgKgTgiIgWgpIgMgVIAqA5QAVAcAFANIACADQACAGgDACIgBAAQgDAAgDgDgAm0J0IAEgGIABACQAAABAAABQAAABAAAAQAAABgBAAQgBABAAAAIgDgBgAITJQIgGgKIAFgCIANAMQAYAVgEAGgAJDJiQgKgIgPgRIgJgLIAHgDIAIAHQAnAggGAGIgCAAQgEAAgIgGgAFzJHQgLgWgKgPIAZAaIAEAFQAUAVgCAIIgBACIgDABQgHAAgPgagAJ+JaIAFgJQADAEgDADIAAABIgEABIgBAAgAJvJMIgHgJIgLgOIAZAQIAHAFIgGALIgIgJgArIJNIAMgRIAGgDIAUgLIAAADIgPAQQgNANgGAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAIAI1IARAPIgEACIgNgRgAp/JFQgEgFAIgIIAKAHQgGAHgFAAIgDgBgAoEJCIgDgBQgHgGAJgEQAGgDAEgDIgCAIIAAABIgBABIAAACQgBAGgDAAIgCgBgAi+JDIAAAAIAAAAgAp6I3IAJgHQAPgKAKgIIgSAZIgGAIgAISIuIAEgBIAQANIgGADIgOgPgAl7I1QgHgEAIgHQAGgFAEgDIgCANQgCAHgEAAIgDgBgAn7ItQgHgGAMgHIAKgHIABAEIgEAJQgEAIgEAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAFlIhIgLgXIASARQAPANgGAFIgEABQgGAAgGgNgAm5ItQgHgFAYgaIAdgfIgWAlQgPAagHAAIgCgBgAIAIaIASAPIAEADIgEACIgSgUgAqeIsIAEgDIgEAFgAsdIlQgFgHAtgaIAbgPIADACIgYAVQgiAagJAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAgAriIiIgBgBIgBgBQgBgIAUgKIAPgIIADADIgIAIIAAABIgDACIgBABIgBABIgJAIIgCACIgBABQgEACgDAAIgDgBgAnpIXIABgBIgBACgAopISQgHgHANgHIARgKIgKARQgFAIgEAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAFfIBQgEgLgFgHIAQAMQANAJgGAGIgEABQgFAAgFgKgAKBIEIAHABIACABIgFACIgEgEgAq/IEIAKgGIgHAIgAJ1H7IgJgIIAdAMIgGACIgGABIgIgHgApfH6QgCgCACgDIAUgSIAHgFIAOgJIgGALIAHgMIAEgCIgJAQIgEAEQgXAVgHAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAgAqdH6QgCgCADgEQAEgGAJgHQAJgHAQgKIgXAfQgKAGgEAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAgArZH0IAcgRIgYATgAp0HVIArgdQgJADAKgMIADgDIAWgGIACgBQgNAMgLAFIgrAnIgVASgAIIHrIgDgHIAKAHQgCADgCAAQgBAAAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBgAJhHpIgMgKIAPAJIANAGgAnVHWIgCACIgEAEgAosHPIASgMIgaAZgAH0HOIADgKQAIAIgDADIgDABIgFgCgAHtHJIAEgGIgCAIIgCgCgAHXG2IAKgFIARAOIAAABIgHAIIgUgSgAIkGtIAhAJQAEAEABADIgBACQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgJAAgZgUgALPG5IADgHQAMAIgBABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAQgDAAgHgEgALgGqIgIgFIADgHIAJADQAfAKgEAIQgCADgDAAQgIAAgSgMgALFGzIACgHIAGADIgDAHIgFgDgAHSGwIgDgMIAMAJIgIAEIgBgBgAJDGoIgPgPIgFgFIABABIAZAKIADACIgKgNIACABIALACQAIABgBAGIgCAEQgCABgDgBQALAIAAAEIgCACIgEABQgHAAgKgJgALBGwIgegYIAiATIgDAGIgBgBgAGvGMIAgAYIACALQgTgUgPgPgAIVGhIgGgFIgBgCIAEgCIAYAMIARAKgArMGoQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQACgHAVgJIAFgCIAegNIgeAXQgRAOgHAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAgAoyGdIAKgGIABAAQADABACADIgMAFIgNAEIAJgHgAs9GiQgEgIA1gVIAQgGIAFAFIgRAKIgNAHQgcAOgIAAQgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAgALNGeIABgEIAIADIgCAFIgHgEgALcGcIAEgKQAKAGgCAEIgBABIgDAAIgIgBgAK+GUIAPAGIgBADIgOgJgALQGWIADgKIgEAKQgLgFgOgJIg6gjIAUAJIAeANIAMAEQAYAKALAHIgFAKIgIgEgAIGGUIABgCIADACIgDABIgBgBgAL9GKIgUgMIABgCIAWAFQAYAHgBAIIgBAAIAAACQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgHAAgOgJgAI8GBIALgGIAPAIQANAIgDAFQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQgIAAgYgRgAoNGHIACgCIgCACgAr6F+IAvgTIgfASIgMAGgAIaFoIgGgEIAAgBIArAUIAEACIgLAFIgegWgALgF5IAIACIgBACIgHgEgAKuFyQgGgGgSgHIgDgBIgPgKIADgCIgEACIgagQIAuARQAmAOgEAIQgBACgDAAIgHgBgAqGFlQgEgIAIAAIALAAIgGAJIgBABIgFACQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBgAJkFiQgGgGgFgDIAOAAIABAAIAEAMIgBABIgHgEgAJpFZQAJABgCAHIgBADIgCAAgArTFZQgEgIApgPIAUgIIAFgCIAagKIgYAOIgDACIgKAGIgKAGIAAABQgcAQgJAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgAIyFXIgEgBQgGgDgKgHIgDgCIACgJIAFACQAcAKgEAIQgCACgDAAIgDAAgAqSFVQgEgIAfgMIAngPIgiAYQgUANgIAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAKhFSIgGgIIACAAIAJAAQAHAAgCAFIgBACQgCAEgCAAQgDAAgCgDgAKhFFIAhAKIgtgPQgigSgagMQAcAKAmAMQA1ARgDAIQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAQgJAAgegOgAMZFEIgSgJIgHgDIgBgDIAdAFIAQAFQAPAFgCAGQgBADgFAAQgIAAgSgJgAIAE2IAbAKIgDAIIgYgSgAukFCQgCgGATgGIgBAFIABgFIADgBIgCANQgIACgEAAQgFAAgBgCgAuNE0IARgFIAxgMIAAABIguAUIgWAJgAsCE+IAAgBIAsgOIgJAFQgWAMgIAAQgEAAgBgCgAL0EyIAKADIABADIgLgGgAKvEaIgVgMIgHgDIAHACIAZAEQAZAFgDAIIAAABIgDACIgDAAQgHAAgNgHgAtUENQABgCAFAAIAKAAIgGAIIgDADgAI/EAIgpgUIAAgCIAtAMIATAGIARAIQAGADgBAEQgBACgFAAQgKAAgdgNgALXEAIgOgJIAEABIAEAAIAJgBIADAAIADAAQAGABgCAHIAAACQgCACgDAAQgDAAgFgDgALqDtIgFgEIgCgFIADAAIAHgBIABAAQALAAgCAIQgBAFgEAAQgDAAgFgDgAIMDnIAIADIAAABIgIgEgArADjIgBgDQAAgFAGACIABABIAJACIgHAGQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgBgFgALdDkIABAAIABABIgCgBgAtvDeIAHABIgDACIgCABIgCgEgAtfDbIACAAIgBAAgALqDQIgPgEIgDgIIAGABIAOACQAuAHAHAHQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQgBACgHAAQgNAAgjgKgAsKDQQgCgJA2gKIBEgNIhBAXQgjALgNAAQgGAAgBgCgANcDCIgMgDIg5gPIA6AHIANACQA5AGgBAJQgBADgJAAQgNAAgjgJgAKmC8IArAHIADAHIgugOgAqZC8QgDgIAPAAIASAAIgQAJQgGADgDAAQgEAAgBgEgAsVC4QgBgEADgCIASAFIgGADIgCABIgJABQgDgBAAgDgAsSCxIAJgBIASAAIgKAGgAMZCiIgtgLIgHgCIAHABIAbACIAUABQArACgBAJIAAABQgCADgIAAQgLAAgXgGgAuKCdQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgIAQAAIgBAEIgJgCIAJADIgBAHIgGAAIgEAAgAt8CXIAEABIgBADIgCAAIgCABgAt0CYIABgHIAUAAIgTAHgAM9CVIgQgDIhBgNIBDAEQATABASAEQARAEgBADQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAt8CWIAAgFIADAAIACAAIgBAGgAI3COIgDgCIgNgHIASAAQAPgBgDAJIAAACQgCACgDAAQgEAAgFgDgALECIIgFgMQAeACgBAHQgBAEgJAAIgOgBgAKxCFQgegIgXgDIA2ABIADAAIAFAMIgJgCgAtbB6IAAAAQAAgJAEAEIAEAFIgEAEIgCACQgCAAAAgGgAtPBiQgBgJArABIAkAAIABADIgkAGIgMACIACgIIgCAIIgSABQgNAAAAgEgArPBeQgBgEAIgCQAIgCAPAAIAnAAIgGACIggAHQgPAEgHAAQgJAAAAgFgAuQBaQgBgGAWgCIAGAAIgCAMIgKAAIgDAAQgMAAAAgEgAtzBRIAAAAIAIAAIgDAMIgHABgAsABaIARAAIgRADgAtqBRIAOgBIAPAAIAzgCIgoAHIgNADIgMACIgRADgALsBVIgbgHQAMAAAQgCIANAAQAJABAAAFQgBAGgIAAIgOgDgAszBJIgBgDIAAgBQACgHAXACIAVACIABADIgVAFIgCAAIgOACQgHAAgCgDgAsEBCIAEAAIAFABIgJACgAMLA2IgBAAIgPgCIgRgDIgRgCIANAAIACAAIgBACIABgCIAigDQAUgBAKACQAKABgBAFIgBACQgDADgLAAIgXgCgAsyAwIAIgLQALgBATAAIACALIgdABIgLAAgAs7ArQgBgFAPgBIgHAKQgHgBAAgDgAsJAkIACAAIApACIABAAIAZABIhCAHIgCABgAs3AIIAfgFIgGALIgEAAQgVAAAAgGgAsTAGIABAHIgHAAgAsPAFIALAHIgHAAIgCABgAsJADIApAEIgngDIAmAFIgeACgAtSgEIgBgCQAAgJAuAGIANAJIgNAAIgFAAIgJAAQgaAAgFgEgArtgCIABAAIgEAAgAsJgGIAOACIgRACgAL5gQIACAAIAIALQgFABgIAAgALygEIgNgBIgGgBIATgKIAEAAIgDAMIgBAAgAscgIIAGABIAAADgAsRgHIABAAIgBACgAMBgOIAGAEQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAABgAK6gKIArgFIAFAAIgOAJQgTgDgPgBgANvgHQgngDgdAAIBDgHQA3gGAAAJQAAAHghAAIgVAAgAM/gRIgLgDIgEgCIAJgCIAGgDQALgDACAGIAAACQAAAGgGAAIgHgBgAL+gXIANgIQAJAAAEACIABACIABAAIAAABIAAABIAAABQgCAEgLABgALtgUIgggCIAZgEIALADIACACIgCABIgEAAgAMugWIABAAIABABIgCgBgAL9gdIAGgBIgHADgAL4gdIABAAIAAACgALzgcIAAAAIABABgAMVg0IgCgFQABgBABgEQACgEAAAJQAAAGgBAAIgBgBgAq2g3IgLgBIASgDIAFABIgCADIgKAAgArZg5IgIgBIAjgCIgPAEIgMgBgArng6IAGgKIAKACIAZAEIgpAEgAr4g8IgIgCQgSgEAAgDQABgHAvAIIgHAKIgPgCgALghBIAlgGIgCAFIgjABgALIhIIAHgCQAQgFAGACQACABABADQABAGgJACIgFgHIAEAHIgIAAgAK5hBIgCgBIAFgCIACgBIAKAEgAMGhHIAbgFQA2gKABAJQAAAFgNACIgFABQgOACgXAAIgcABgAtyhRQABgIASAFIABAAIAXAHIgYADIgBAAIgHAAQgLAAAAgHgAKGhSIADAAIAIAFIgJAAIgCgFgAKjhPIgEgDIAHADIgDAAgAKjhZQAwgMABAJQABAGghAFgAr+hgQABgGAGABIAHACIARAHIgSACIgGABQgIAAABgHgANNhuQAogLACAJQAAADgEACIgLAEQgKACgPABIg0AEIAygOgArviAQABgDADgBIAfALIAEABIgXAAIgCAAQgPAAABgIgALQiMIATgEIgBgBIgCgBIgHgBIAHgHIACgCIABAAQADgBACAGIAAADIgBADQASgEAFAEIhbAUIgMABIA5gQgAMnh9QgMgDgIAAIASgHQAPgFABAIQABAHgJAAIgGAAgAL+iMIgBABIgIADIgTAEgAM3iLIgcgBIAbgJQAVgHABAJQACAIgUAAIgDAAgAqEiVIgWgDIgMgFIgCgIIAFACIALAEIAhAMIgNgCgArIimIAaALQgZgEgBgHgArvidQgVgBACgJQACgIASAIIACAAIAYAMIgbgCgAqrieIAAgIIADABIABAIgArHipQAEgFAWAHIABAIgAp8jAIgTgRIASAHIAFACIAoARQgagEgSgFgAMTi6IgEgFIABAAIADgFQADgCABAEIAAADQAAAGgCAAIgCgBgAKji/IACgFIAAAAIAAAAIABgBIAAAGIAAAFIgBAAgAr7i/QgTgCgDgGIAAgDQACgGAMADIALAFIAbANIgBAAIgdgEgALejDIgFAEIgEAAIAJgEgALwjNQAQgJADAIQADAIgWADIgQADgAqJjDQgfgIADgHQABgEAOADIAWATIgJgDgAKOjeIARgGIgIAOIgGABIgsAJIApgSgAI5jaIAAADIgQAFIAQgIgAKijlQAIgCAEAAIgIANIgLADgALKjZIgEgEIgBgBIAFgFQADgDAAAFIAAADQAAAGgCAAIgBgBgAJCjeIAGgDIABAFIgGACgAJNjkIAPgIQAqgWADAJQADAIgsAOIgRAFgArRjiIghgIIASAAIAEABIAaAKIgPgDgAryjqIgIgCIgMgDQg4gOADgIQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQADgBAIABQAOADAdAMIAPAGIARAHIgPABIAAAAgAJqj8IgFgBIgCgGQAAgEAFAGIABAAIAAABQABABABAAQAAABAAABQABAAAAAAQgBABAAAAIgBAAgAt0kKQgngKADgJQADgIAkASIAtAWIgwgNgAISj+IAFgEIAEABIgJADgAIZkDIACgBIAOgJIACAHIgOAEgAJ4kHIgDgBIgFgBIAFgHQAEgFADAIIAAABIAAAFIgDABIgBgBgAIvkQIAMgHIADALIgMAEgAH7kJIgDgCIAFACIgCAAgAHtkJIACgCIAEACgAHzkPIADgDQAHgHADAIQABAEgBACgAI8kYIAGgDQAFgBACADQACAFgHAFIgEACgAo3kOIgFgBQgMgCAEgHIAAgBIAAAAQAEgHAIAIIAIAJIACACIgJgBgAsikcQglgMAEgIQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIABAAQAIgCAaAPIArAYIgvgPgAqGkdIACgBIAJAFIgLgEgAI4kiIAAABIgJAEIAJgFgAqlkoIgRgHIgBgNIAHADIAPAIIABABIAJAFIASAMIgCACIgegLgAppkwIgIgEIAAgBIACgDIgCADIgKgRQAIACAOALIAgAYIgkgPgAI5kjIAkgYQAmgZAEAIQADAHgZAMIgKAEIgFACIgpASgArEk8QACgEAIADIACABIABAMQgPgHACgFgApyk0QgUgKAEgGQABgDAFABIAKARIABABIgBAAgALJlNQAXgQAFAGIAAABQACADgFAFQgEADgLAFIAFgKIgFAKIgFACQgUAGgOAHQANgJAQgNgAJIlPQAEgIAFAHQAFAHgJACIgLADIAGgLgAKTlhIAIgFQATgNALgEQAKgEACAEQAEAIgpARQgeAMgWAKIAngZgApwleQgigSAEgHQADgEAKAFIALAHIALAJIAmAegArslLIABgCIAIAFIgJgDgAsZleQgdgMgHgHIAJgGQALAEAVANIAmAYIgBABIgqgRgApllqIgEgDQgcgPgCgIIABgDQAFgHAiAcIAqAiIgwgagAGtliIAAABIgFADIAFgEgAGxllIAogiQAnghAFAHQAFAIgsAaIgsAbgAIWllIgGgCIABgCIABgFQABgFADAGIABACQADAGgDAAIgBAAgArHlwQgJgDgEgDIADgLQAFAAAKAIIAVASIgagJgAs/l3QABgDAJADIgJAFQgCgDABgCgArXl/IAAAAIgBAEIABgEgAKDmOQALgLAEAGIABABQAEAHgPAFIgMAEIgIADIAPgPgAq/mNIAAgDIAMAJIgMgGgArMmUIACgFIAKAIIABAEIgNgHgALQmgQAMgKAEAIQAEAIgPADIgTAEIAOgNgAIsmuQAQgSAFAGQAGAHgVANQgQAIgLAHQAKgJALgOgAKfmpQAKgMAFAHQACADgBADIgJAGIgBABIgSAGIAMgOgArbmcIADgEIgBAFIgCgBgArimfIgJgFIAKgGIAEADIADADIgEAHIgEgCgAJcmxQAMgMAEAHQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAFgLAEIAAAAQgMADgIAEIAPgPgAHJmwQADgIAGAGIABACQAEAFgHACIgHACIgDABIADgKgApQmpQgJgCAFgHQAFgHAFAIIAFALIgLgDgAsEm6QAEgFAPAKIgIACIAKgBIAIAFIgMAHQgUgMADgGgAJKm0IAagZQAegbAFAHQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQgCAIgdARIgrAbIAMgKgAoym5IgJgIIgXgRIgbgVIAIgFIArAqIAHAHIAFAFIgEgDgAHensQAcgiAGAGQAGAGgiAdIgqAjQAQgRAUgZgAIJnRQABgGAFAGQAHAGgGAAIgIABIABgHgAo5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");
	this.shape_7.setTransform(106.2,98.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C9EBFB").s().p("AhUOpQgJgBAJgxIAKg1IACgJIgCA/IgBAbQgDAWgFAAIgBAAgAEpNiIgBgCIABgWIAHASIABAWIAAgUIABACQAHASAEASQADARgDABIAAAAQgHAAgNg0gAAvNtIABgFQADgTABgQIAFAjIAAAFQAEAggJAAQgIAAADgggAijOFQgHgBASg8IAHgVQAGgCgBgNIAAgBIACgHIAEACIgKAvQgMA4gHAAIAAAAgAAQNhIAFgoQABASAEAWQABAMgBALQgCAKgDAAQgHAAACghgAEBNMIgDgPIAEgIIAIAVQAGAQACAQQADAPgDABIgBAAQgGAAgKgugAgBNrQgCgKADgbIAFg1IABAUIABAXIABALIAAAJQAAALgCAJQgCAOgDAAQgBAAgBgHgAGjNvQgHgFgMgkIgGgRIANAKIACAEQAHAPAFAOIACANIgBADIgBAAIgCgBgAgwMyIAFgYIADgSIACgPIABgIIAAACIgBBBIAAADQgBASgDAQQgDARgDAAQgHgBAHg3gADKNYIAAgEIAFgFIAFAHQAHANgJACIgBAAQgHAAAAgNgAEZMhIANAjIABAWIgOg5gABGM7IACgmQAQBEgMABIAAAAQgHAAABgfgADqNKIAAgRIAJAPQAHALgIACIgCABQgGAAAAgMgADKNFIAFAJIgFAGgACGNOQgJAAAAgeIgDgoIgBgPIAEAPIACAMQAGAXABADQAIAggIAAIAAAAgAjDNFQgHgEAHgFQAFgDADgEIAAALQAAAGgDAAIgFgBgAD5MiIACgCIAHAUIgEAIIgFgagAGJMwIgLghQAJAUAOAZgAhtMpIABABIgCARgAFqMhIgEgLIARAOQABAHgEACgAA9L/IgDgPIgIgvIgBgDIACgBIgCAAIgHgoIgCgQIAHgJIADAcIAFAjIAGA2IAAgTIADgtIADAOIAEAeQAGAjgJABQgEAAgCgJIAGAzgAESMXIgBgEIgCgIIgCgJIgBgFIgCgHIgCgIIAAgDIgBgFIgBgFIAAgBIgCgFIgDgOIAAgBIAAgCIgEgQIgCgJIgDAEIgLAPIAJAWIgDAAIgGgOIgCgFIgGAHIAEAMIgCAAIgEgJIgFAHIgBABIAAABIgDADIgHAJIgCADIgTAZIAAAAIALgRIAFgIIACgCIAGgKIACgDIADgFIACgCIAEgGIgLgaIAAgBIgHABIgYADIALAjIgCAAIgNgiIgBAAIACAHIAEANIAEAOIgMAAIgBgMIgCgVIgaADIgHABIgDABIgEAAIgOACIAOgCIAEgBIADgBIAHgBIAagFIgBgSIgNgiIAIAEIAHAWIAIAYIAOgDIAEAAIAFgBIAHgCIgJgVIAIAFIAFAPIADAAIACAAIACgBIALgCIAKgCIABAAIgEgDIg+guIgCgBIgJgHIAHAFIAaAQIAGAEQACADADAAIAkAXIgMhJIgCgQIgGgfIAIAiIADAMIAGAdIAGAaIAEASIADgFIALgOQgFgDgCgNIgEgYIANAUQAEAGABAEIAHgIIAGgIIgIgaIAMAUIABgCIACgCIAFgHIABgBIAKgOQgFgHgFgPIgNgoQAJAQANAUIAJAQQAGANgFACQgEACgEgGIgKAOIgBADIgGAIIgCADIAAATIgCgFIgCgHIgFAIIgXAkIgBABIABAAIAKgBIABAAIADgBIAAAAIAPgCIAAgDQACgEAAgEIAAALIAFgBIAAgGIACABIAAAFIACgBIALgBIAMgCIAGgBIACAAIADAAIAGgBIgBgCIgDgJIAEgIIAIAOIACADIAJgBIADAAIABAAIAFgBIAHgBIACgBIAIgBIgIACIgDAAIgGACIgGABIgBAAIgKACIADAGIgHAHIgGgLIgGABIgFABIgDABIgDAAIgLACIgNADIgCAAIgCAAIgFABIgOADIgCABIgCAAIgBAAIgKACIgCAAIACACIAOAMIACABIAFAEIAEADIADADIAHAFIABABIADADIATAPIgWgPIAAAAIgBAAIgHgFIgBgBIgCgBIABACIACADIgDgEIgBgCIgEgDIACAGIAAADIgDgDIgCgIIgQgKIgFgEIgDgCIABACIAAABIACAPIABAHIABAGIABACIABALIABAGIABAEIABAFIAAADIACAHIABAIIABAEIABAJIABAIIABAFIADATgADaKxIAJAYIAAAAIAFgIIABgCIgDgOIAFANIAIgNIACgEIgFABIgPACIgDABIgBAAgACyK0IAAAAIgCgEIACAEgAhtMoIADgrIAFhSIADg3IAKgFIgBAQIgOB+IgFArgAmFMmIgCgBQgCgJAWgmIAFgHIAIgHIAEgBIgIATQgSAtgIAAIgBgBgAloMlIAJgWQAAABABABQAAAAAAABQAAAAABABQAAAA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gDIADAFgArblXQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIgCAHQgDgDABgCgAhVlaIAAgBIABADgAHglaIAEgDIABAAIgEADgAH8lbIAIgTIAGgRIAKgZIgJAbIgEANIgHAWIgEgBgAqllhQgngOAEgIQACgDAGABIgBACIABgCQAKACAVANIAMAIIABAIIgRgHgAHmleIAEgCIgDACgAp1lfIgIgFIAAgDQADgIAJAHIAMAJIgPAAgAkoluIAAgCIAKAOIgCABgAhxl2IgCgOIgBgHIALgCIAFAVIgLAVgAKFljIAEgGIALgEIABACQADAIgIAAgApLl9IgNgGIgJgHIgIgPQAIAAAbATIAsAfIgxgWgAqOltIgHgDIAAgCIAMAHIgFgCgAqYlxIglgQIACgIIAmAWIgBAAIAAADIgCgBgAgYl4IAAgDIAAAEgAgrmCIgEgeIAQgGIAAArgAk1mFIgMgXIAJgKIAPAXIgGAQgAsQmIQgagHAEgIQADgIAXAOIAcASIgggJgArHmFIADgKIAHAFIgBAIIgJgDgAMImKIAAgBIARgKQAzgcAEAIQAEAIg3AVIgYAKQAFgFgCgDgAAwmKIAchnIAniLIAOg2IACAEIgkChIgEAUIAaAEIAMABIAGABIAXAEIAGAAIADABIgBgCIgTgeIgCgCIgEgHIgBgCIgMgSIgBAAIABAAIANASIABAAIABACIAFAGIACADIATAaIACADIACgGIADgNIAAgBIABgEIACAFIgBAIIADgGIABADIgEADIgCALIACgCIgBADIAJgHIACAEIgJAHIAJACIABAAIADAAIABABIAJASIAAACIgFALIABABIgOgEIACgHIgCgDIgKgNIgEATIgEgBIABgGIgCAGIgGgBIAHgQIgQALIgDABIgEgBIAUgOIAEgDIgBAAIgHgCIgDAAIgWgFIgGgBIgLgCIgagFIgOA/IgDAKIgFAXIgLAKIALgJIgFAUgAC6ncIACAEIAAgBIAHgMIgCAAIgDgBIgDAAIAAAAIgJgCgAgxmFIABgEIAAAEgAr3mjQAEgIArAaIgCAKQgxgUAEgIgAgSmkIADABIgBAcgAANmXIABAAIgBAOgAK/mjQAWgSAGAFIAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABIgBABQgKAEgTANIgIAFI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gEALIgJAHIADgOgADHq2IAKg1IAKADIgTA0gAgPrWIAIgEIgBAmIgHgigAharGIABAQIgBABgAkurHIgLgTIgNgWIgCgEIgIgNIAKAQIgGgcQgFgWgIADQgDACAAADQgEgLAEgCIABAAQAIgCATAyIAbBAIgJgPgAmyrfQgZggAIgFQAHgFASAkIAWAtIgegngACFq+IAEgPIABACIgEARgACyrJIACgJQADgTAEgMIAMADIgKAfIgEAMgAjfrUIgFgJQgGgLABgGQAAgEADgCQAIgCAEAWIAEAcIgJgQgAg0rkQAFgBAEASIgMAIQgEgYAHgBgAE7rPIAHgOIABABIgGANgAE9reIAFABIgFAFIAAgGgAghr3IAAAdIgBABgACNrdIACgFIAAAAIgBAGgAE9rfIAAgGQAAgKAIADIADADIAHgNIgGAOQABACgEAFIgBABIgBADgAAKrlIABgBIAAAHIgBgGgACor2IAFABIgGAVIABgWgAjFr4IgEgVQgHgogHgCIABgBIABAAQAIAAAIAmIAKAyIgKgYgApbrkIgEgFQgFgIADgDQADgDAKAKIgEAMIgDgDgAgQsDQAIgBABAaIgKAGQgHgfAIAAgAkBr0QgHgLAEgDIAGAMIAIASIgLgQgAhor/QgDgUgCgDQgHgLAIgDQAJgCAAANQgDAlACAMQgCgDgCgUgAAxr7IABAAIgBANIgBABIgCACgADTryIAAgDIAAgBIABgDIABgBIALADIgDAIgAhOs0IgCgRIALAEIABANQACAdACAnIgOhEgAC9r5IABgCIACgFIAJADIAAADIgBAEgAAFsOIAFgBIAAAYIgCABIgDgYgAjnsBQgHgHAIgEQAIgDAAAKIAAANIgJgJgADVr+QAKgoAHACQAHACgMAogACosAIABgGIAIACIgCAGgADosWQABgRAJADQAIADgJAOIgLATIACgWgADCsDQACgDACAAQACABABAEgAj8smQgOgbAIgDQAJgDAGAeIAJAlIgSgigACpsLQABgiAJABQAIACgJAhIAAABgAg4sIIAAAAIAAAAgAhCswIgDgRIANAEIAAAMIAAApIgKgogAh/tEIgFgSIANAEIABAMIAGA2IgPg0gAADsfIgBgKIAHACIABAUIgFABIgCgNgACUsgIAAgQIAEgCIgEASgAF0s3QAMglAIAEQAFADgHARQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgHgEgOAiIAFgOgAABsyIAAgDIAIACIAAADgAjXtBIgDgDQgHgLAFgEIACgBIABAAIAKAeIAAAAIABACIgJgNgAABs6IgBgUIgCgaIgBgDIAKALIABARIABAXgABps6IAMgkQABAKgEAZQgEABgDAAIgCAAgACUs7IAHgFIAAACIgHADgAjTtSQACADABAHIABAKIgEgUgAhFtGIABgFIALADIABAFgAhRtJIgBgRQgBgSADgBQAFAAAEAhIABAGgAhEtLQABgEADgBQAEAAACAHgACVtQIAAgIIAOgSQAAAJgEAQIgKAGIAAgFgAiEtYQgGgXAHgBQAHgBAFAdgAA1tkIgCgLQgDgZAIAAQAJAAgEAZIgDAUgAC4tpIAEgOQAGADgGANIgEAJIgEACIAEgNgACft4QAEABAAAKIgNAOQACgaAHABgAgDtxQgFg2AHgBQAGgBACBDg");
	this.shape_8.setTransform(102.7,103.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFFFF","#77D1F4","#2D3668","#1F202D","#1F202D"],[0,0.439,0.722,0.851,1],-2.1,2.1,0,-2.1,2.1,146.4).s().p("AiGQKIApjeIAShlIgBATIgEARQgJAsAJABIADgBIgBAlIgKA0QgJAyAJABQAFAAADgWIgCCCgAgSPNIANhoQABAGADAAQABAAACgNQACgKAAgKIAECEgAj4OHIAahDIASAVIgSgXIAYg/IACABIgEAHQgHANAJACQAIACAAgOIgBgIIAWAJIgWgLIAAgEIAkAQIgeCJgAjHM2QgIAFAIAEQAIAEAAgJIAAgLQgDADgFAEgACMLYIgBgKIgDgYIAGgBIAIAdIgHgBIgDgLIACALIAEAqQAFArAJgCQAIgCgNgpIgMgnIAHAAIAnChIgkAGgAmMNwIAghRQAFABAKgUIAAAAIgmBogAmeNoIAxhVIgBADIggBZgAF5MjIANALIAFARQANAlAHAFIgJAEgAGgNaQgEgPgIgPIgBgDIAMALIgOgPQgOgZgJgTIAKAgIgOgOIgPgjIADABIgDgBIgHgSQABAAAAAAQABABAAAAQABAAAAAAQAAgBABAAQAEgBgCgHIALAAIABAFQAGAXAIgEQAEgCgBgFIA+BoIgeAQIgDgNgAmwNgIAlhCIABACQAJAEASgwIAIgUQAGgCAFABIhFCHgAAZNFQACAXAFgBQAIAAgJhYIgDgPIABgRIAaAVIAMBpIgPABIgEgjQgBAPgDAUIgVAAgAH1K/IBuCLIgYAPgAk5NOIASgmIAHAWIgHAXgAABMfIABgEIABAbIgCgXgAgSMyIgBgOIgGgfIgEAfQgCAIABAFIgNAAIAAgDIAChCIAEgXIAQgSIgHAcQgFAXAIAAQAJABgCgXIgDgbIAAgCIACgCIABgBIAAgBIABBzgAkeMtIABADIAAABgAkgMXIAKgVIAAABQgHARAGADIABABIgDAOgAn3MRIAMgFIgFAJgAoWL8IAwg9QAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAHAEAUgjQAGADAFgLIADgIIAQAIIguBTIgrAQIApgMIgJARIgYAKgADdLhIAKAAQADAJAEADIACAFIAAACIgHgKIACATQAAAHAEADIgEADIgFACgAjBL4IAchIQgCALAEABQAIACAKg1IACgKIAUgJIgLAxIABgQIgLApQgHAcAFAFIgJArgABAL6QAJAAgGgjIgFgeIgBhXIAaBwIgBAUQgBAbAGAEIgbACgABfLlIgJgmIABAQIgTheIADAKQAEAhAHgBIABgBIAMAdIACAzIADAaIgEAAQAFgEgGgbgABrLqIgJgrIANAiIgPgwIgCgKIAAAHIgIgaQABgKgHgdIgIgdIAZAZIAbCYIgDABIgFgPIABAPIgGABIgEgZgAjFMCIABgEIADABIgCAEgAkTL7IAJgUIACAAIgCAFIgEAHIgFAJgAGrKMIADgBQAHgFgOgNIgQgRIADAGIgXgoIAzBAIAKAWQARAjAIgFQACgBgBgGIAoA0IgaASgAhrL3IAOh+IAEgSIAGgDIgDAZIgFgFIAFAFIgDAYIgHAcQgMAvAIACQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAgBIgCAXgAIcLKQAKALAEgDQAHgFglguIgDgEIABAAQAIgGgjgpIgNgRIgCgIIALAHIAJAJIARAaQAdAvAIgGQADgCgHgLIAhAiIgMAZIANgYIAaAcIgmAfgAAdLgIADgoIAKgBQAAABAAABQABAAAAAAQABABAAAAQABAAAAAAIAJAvIABAOgAhzL1IABgjIgGAiIgHgBIAVhOIgEBRgADaLXIAJABIADAFIgKABgAC4LVIAEAAIACAFIgEACIgCgHgAFlLaIAAgCIAGgBIADADgAC+LVIAQABIgPAEgAFZLBIgIgOIAGgGIAAACQALAaAHAMIgGAAIgKgUgADaLTIgBgBIAGgHIADAIgAC9LTIgLgjIAZgEIAMAjIgDAEgAC4LSIgEgNIgEgOIgBgHIANAjgAgiK8IANAAIgPATgADSKsIALAaIgFAGgAENLHIgBgBIABABgADWKrIADgBIADAIIADAQIAAABgAEGKzIgBgFIAQALIABAIgAEdK/IACABIgBAAIgBgBgAEmKdIABAAIAAAgIAAAAgAEdK6QAFgEgHgLIgIgKIAOgDIgBAegAEpKcIANAZIgCADIgJADgAggKuIAKAIIgLACgAAgK3IADg4IAAgBIADAQIgBAKQAAAXAEAIgACFKMIAJAoIgGABgAgVKxIgBgfIACgBIABAigAEDKlIAAgBIALgCIACAGIACAFIAAABIAAADgAgeKpIADgXIACAAIAAAAIADAegACqKUIgEgUIAMAHQAHAfAGAEIgNADgAFFKfIgBgCIAEgGIAFgCIAHAQIgHAHIgIgNgADDKXIAGARIgFABQADgEgEgOgApqKKIAygxIAWALIgQAOQgWAUAHAFQAHAGAPgZIAMgTIAFACIguA/gAJ0KTIABgBQAFgFgQgQIARgfIAsAkIgiAkgAEPKhIABAAIABAFgADOKWIAEACIAFANIgDABgAHmJ6IgBgJIAeAzgAECKdIAWgkIAJASIAAAEQAAADgDAFIAAADIgOACIgBgBIAAABIgCAAIgDgHIACAHIgKACgAk+KXIAAgCIAOgaIgNAgIgBgEgAFCKYIACgBIgBADIgBgCgAm7KRIADgHIgGAFIgBAAIAEgGIABgCIAUALIgDAGgADNKUIgBgFIgBgFIACACIAEALgAE+KQIgVgyIACgCIAeAyIgDAGIgFABIgDgFgAD9KUIgBgDIgLgkIgHgcQAHgDgFgFIgEgFIgIgiIAGAgIgBgBIAAAEIgSg5IAOgEIA1BtIgGAIQgBgFgEgFIgOgVIAFAYQACAOAFACIgLAPgAFKKQIACADIgDABgAj5KSIADgIIACABQABABADgDIgDALgAkCKOIADgGIAFgEIgEADIAIgVIAEgNIAIgOIgJAgQgDAGAAAFIgFAPgAgUJ3IACgCIAAAYgAkbJXIABgBIAAAAIABgCIgTA0IgCADgAm2KCIAdglIAKAMIgTAhgAmpJ0QgJAHAIAEQAGAFADgLIACgNQgEAEgGAEgAClJ7IgDgOIAMAGIACAIIABAHgAsEJZICDhaIAFAZIhqBlgAqZIRQgSALAHAGQAFAHANgRQAJgNAIgIIgYAOgAgWJ5IABAAIAAACgAJOJmIAGAJIiii1IDECgIgJASQgCgGgMgLQgUgPgFgFIACADIgSgRIgzgvIAsA2QAjAqAGgGIABAAQALAQAGAAIgEAHQgTgPgFgGgAHUJfIAFgGIAIANIABAFIgEgFIAEAGIACALgAgXJ0IABgDIAAAFIgBABgAg7J1IAFgdIAHgDIAEgBIAAAjgAgVJtIADgXIAAAcIgCADgAHkJuIAAgCIAEAGIAAABIgEgFgAiMJtIAqhsIgVBjIgJADIAJgDIgBAHIgVAIIABgGgACiJrIgCgIIAKAJIgHgEIAKAHIABADgACfJdIgLg+IABgBIAPAkIAHAlgALhITIgKgfIARAKIAGAEIAuAbIBDAoIgYAigAofJkIAIgMIgLALIgWgKIAMgMIAbAOIgJAMgAptJeQAJgHAUgWIAqgvIgxAoQgWATgIAKIgRgSIARgNIACAJIgCgJIAKgIQAJAAAbgcIAHgHIBAg0IhWBZIB8h1IAEAKIiPCfgABQJRIAOAIIACAMgAmWJaIAQgUIAEAMIgLATgAA+JMQADAAAEACIABAWgAncJiIAKgRIgMAPIgdgXIA8g/IALAfIgFAIIgKgMIAKANIgiAwgAhWJbIAFgBIAAABIgFACgAHMJTIAIgBIACAEIgEAGgAEkJPIAGALIgCACgAosJNIAKgKQAHAFAcgiIAZgeQAFACACgIIAAgBIAVgWIAEAKIhKBlgAhQJGIgBARIgDABgAHcJVIAAgCIABADIgBgBgAHZJRIABAAIAAABgAGsIjQABgHgTgVIgFgFIgKgOIBPBTIAAACIAAACIgGgEQgCgFgGgFQgKgHgHgHIAGAKIgIgFIAIAGIADAJQAHAQAHgEIAAAAIgIACgAjYIxIAKgUIgHAZIgNAbgAHUJMIABgCIAEAEIgDAAIgCgCgAgrINIAAA+IgKADgAmfJHIAJgNQAHACgCgGIgBgCIADgEIACAEIgNAXgAmBI+IAPgSIACAGIgMAWgABOI8QADgDAFAAIACAAIABAKgAmpJAIAIgJIgHAKgAF0I3QABgCgEgEIgBAAIhfieIA9BTIAXApQASAiAKAJIgJAFgABVI2IgGgDIAIgCIABAGIgDgBgAGHIzIACACIgBABIgBgDgABKIuIALgEIABADIAAAAIgKADIgCgCgAmLIpIARgYIAAAAIgPAcgAlvInIAPgSIgNAXgAm+IIIAWgXIAKAYIgVAggABNIgIAFgFIABAHIgKADQABgDADgCgAk2IfIA0hhIABABIg0BhgAlPIPIBBhTIADABIgsBigAgPIcIABgFIAKAGgACTIdIgBgGIADAGgAs7H9IB7hGIAEADIgbAPQgtAbAGAHQAEAHApghIAZgUIAFAEIhzBcgABNH/IACAIIgQAVgAAEIWIgQgLIAMhhIAHA0IABAoIgGgGIAGAHIABARgACtFMIALAFIBrCzIgkASgAp/H9IARgLIAPAKIgbAagAA4GhIAHAXIAMA8IgQAegALcIOIgLgeIACACIAMAfgADPIBIANgEIAFALIgOAEgAjHIBIANgnIAPAUIgHAbgALCH4IABgQIAFADIANAdgAmmHvIBehkIhUB6gAmKHUQgYAZAHAGQAHAFARgeIAWgmIgdAggAC4GzIAkBKIgNADgAjYH6IAMgYIgDASIgCAJgApsHwIAogcIAIgBIgMAKIAOgKIAHgCIgrAqgAjaH5IARgiIgCAKIgOAYgAK2HvIAHgLIABABIAAABIAAANIAAADgAnHHpIAUgUIACAEIgTAagAi4HWIADgKIARADIgHAbgAKoHjQAFgEAEgBIABAAIgFAKgAKfHbIAJgDIADACIgDAGIgCACgApnHbIADAAIgCABgAh1HYIABgCIACAAIAIAFgAhyHPIALgkIAHAKIgHgLIAGgVIAHABIgEBEgAmyHUIARgRIgQAVgApxHOIAPgOIAUgNQgHAGADAFQAGAHAQgTQAMgOAKgKIgTAMIAqgcIgDAGIgbAZIgTARIggAdIgKABgAKYHWIAHgCIgGADgAJ3G7IAYAOIgFAAIAGAAIAKAHIgHACgAorHDIAAABIgPANIgHABgAouHIIAcgWIgfAeIgHABgAIRGkIAHgBIALAGIADAIQADAGAEgHIAeATIgDAFIgSgOIARAQIgFAFgAi0HJIAFgPIAJgGIAGAEIgEAUgAE2GEIAIgHIAWAaIgBAPIACgOIAgAkIgUAPgAoqHCIACgBIgDACgAnWG5IAZgXIAFgEIAOgMIACABIgrAwgAjkG2IAJgMIANAVIgBADgAjIG/IAGgPIgEARgAIvGqIgCgBIgLgIIAXgFIAVAkgAq3G8IAYgUIgcASIgEgEIACgBIAKgGIAggSIABAKIgfAZgAKQG0IgNgHIgcgWIBEAmIAAABgAI4GPIAXAOIgNgFIAAABIAVAJIAJAGIgFAGIgCgBQgHgBgEgCIAFALIABACIgEAHgAkBG9IAXgqIABABIgWApgAkOG7IALgOIgHAOgALWG3IACgEIAJgMIABgBIAHAFIABABIgGAJIgKAFgAjZGnIAJgOIAMAHIgIAagAi9GlIAEADIgGAOgAirGwIACACIgEADgAKtGyIgYgWIAZAPIAEAJIgFgCgAijGyIAFgEIgBAGgAK5GxIACABIgBABgAirGtIAMgjIAIACIgGAfIgIAFgAJYGKIgjgcIANAEQAhAaAFgHIAAgCIAhATIAaAZgALEGqIgBgCIgBgSIgCASIgGgEIgRguIAuAWIgFAJIgUgLIATAOIgKAVgALdGiIADACIgIAHgAi8GiIAAgCIASguIgOAzgAqSGcIAtgaIgrAjgALpGgIAHgJIAEACIgFAKIgGgDgAIOGhIABgEIAGAEIgHABgAniGUIgCgIIAVgRIAUAMIgaAbgAu1GCIDFhSIACABIi3BwgALWGcIAAAAIgCAEgAKxGdIgTgsIAHADIAQAsgAIRGVIABgBQAGADACgDQADgDgIgIIAFgNIAUAMIALAUIgZADgALgGcIAEgKIALAFIgJAIIgGgDgAjPGXIAagmIgOAtgAIEGZIACgCIAEADIgBAEgAknGYIBdiGIAPgSIhmCcgALXGYIAEgKIADABIgGAJIgBAAgAH3GOIANAIIgCACgAKQGIQgBgHgXgOQAAgEgLgHQAEABACgCIABACQAfAYAFgHQAFgIgjgRIgogUIBHAhIAPApgAhgGUIAHgYIgBAZgAjpGRIADgHIACABIgFAIgAIKGQIABgBIACABIgBACgAmoGRIAHgGIgGAHgAHyF/IgBgCIAFgCIATATIAAABgAr+F2IA3gXIAHAIQgbAMADAHQABACAEAAIgeATgAiCGFIABABIgDAHgAoMGIIACgBIgCADIgDADgAk4GKIAJgLIgHAMgAieGKIALghIAGgNIgDATIgBAAIABAAIgHAcgAjmGKIAHgNIAHgIIgMAWgAnLF5IACgDIAVAKIgFAFgAH/F2IAKgFIAKAHIgCAMIgSgOgAiBGDIAkiFIALgXIgBAKIguCTgAEXFTIAJAIIAHAHIgHAAIAHABIAWAZIgIAHgAHvF+IABgBIAAABgAnHF0IAwgmIADgBIAAAAIgCAAIBRhCIhuBzgAG3FWIg0gtIAEgKIBFAsIgRgEIAXAIIAxAeIgKAFIgMgIIgggYQAPAOATAUIAAAEIgEACgAHwF1IABACIgBAAgAMFFiIABgBQACgDgKgHIACgDIAhAVIAIAFIgDAHgAo+E9IABAAIAyAYIgGAFIgIgCIAHACIgRANgArAFnIgGgIIAtgUIAAADQADAFAPgHIgMAIIgfAMIgOAHgAJnFlIgZgLIgBAAIgKgHIANgHIATAOIgDAAIAKAMgAIoFiIAEgCIABABIAHAFgAMmFgIglgOIAGgOIAUAMQAUAMAFgFIgGANIgIgEgAIaFWIACABIgBACgADGFVIgTgjIAHgCIAcAeIgOAIgALYFFIgLgFIACgCQACgDgEgEQAIADACgEQAEgIgmgOIgugRIAbAQIgHADIgMgEIgJgFIgOgjIAMAiIhDgmIAEgMIAxAPIACABIBDAZIgCAAIAGAJQAGAGADgHIABgCIBHAbIgKARIgHgDIAGAFIgHANIgOgGIANAIIgBAEQgMgHgYgKgAMfFHIgXgGIAIgRIAuARIgJAUQABgIgXgGgAArFSIgCgLIACAHIABAEgAoyE3IAmgUIALAnIgVgbIAOAXIAGAIIgFAEgALREAIC6A1IgKAcgAMrEmQAjAUAEgIQADgIgmgNQgcgIgUgHIAsAYgAIrFCIACgHIAdAOIgMAGgAo8E8IAHgEIAgAVgACrFHIgGgQIACgBIANAVgAJlFAIAKgFIAJAGIgEAHIgPgIgAoCEeIBEglIghA8IgQALIAAgDIAAAEIgIAFgAoJEhIAFgCIAIAlgAg4EiIACgMIgGAtgAJdE8IgrgTIAGgXIAEABIAEAGQAIAIAFgGIADACIAtAUIgGADIgEgCQgWgIgPgIIAeAXIgKAFIgFgCgAIGEpIAhAQIgCAFgAt4ErIAGgcIBTgVIAQARIhmAlIBVgbIhTAjgAJ6E1IAGgDIgDAFIgDgCgACfEpIAGAJIgCABgAm9D5IAygbIgaAQIB6hBIijB7IAXgtIgdAxIgJAGgArsEvIAHgDIgGAEgACoEdIAQARIgGABgAKwEpIgUgGIAGgEIAQAKIACACIgEgCgAuAESIAMgDIgEAbgAGDEpIgugpIAxAfIgDAKgAHkD3IgEgGIA0AYIAEAHIgEgHIAOAGIgPgHIgDgIIAPAHIAEAIIgDgIIAVAKIgIAVgABJC5IgBgCIAOAPIAjBPIgPAFgAsYD4IBUgVIAAABQACAIAigOIAUgIIAGgCIhTAjIgxASgAHdDrIgBgCIA0AXIADAIgAkFECIAPgOIgPAPgAkMD7IA9g5Ig5A9gAHMDnIASAJIADAFgAoiDbIAlgNIgBAaIgYANgAITDXIAxAPIgEALgAEmDhIAUAKIgDAEgAhRDoIAAABIgBAGgAHMDiIAPAHIAAABgAEXDUIgWgUIBBAgIgIAKgAn6DNIAMgEIAOAOIgdAQgAMbDNQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQADgJgZgDIgBgDIBgAQIgHAZgAFsDYIAEACIAAABgAKuDUIACgCQAEgLhVgQIgsgQIgCgLIBKAZIgzgVIB4AXIgHAbIgHgCIAGAEIgBADgAnrDIIAggMIAJAAIgHAAIBQgdIhlA4gAExDIIAJgEIATAMIgDAGgAFKC6IAOgIIAmARIgHANgAD0CmIBCAbIADACIgIAFgAroC+IgWADIgFgPIAsAIIgfAMIAOgIgAL+C9IgDgBIgTgCIAHADIgEAAIgqgOIBCALIABADIgGAAgAFjCsIAHgFIAcANIgEAIgAsECvIgCgGIAUgEIAXABIgTgCICygmIhfAlIgBAAQgHgCAAAFIgzAUgAE3CwIAQgHIAOAHIgNAJgAEkCoIgfgVIA3ASIhTglIgEgDIAGACIBaAqIgPAHgAFUCkIAIgDIAKAFIgHAEgAIMCZIADgEIAdAFIABABIADALgAkRCfIA7ggIgCACIg1AlgAM/CbQgGgIgvgHIgOgBIgGgCIgCgHQAGABABgFQACgIgNgBIgGgOICGASIAAAEIg7gHIA5AOIgGAggAE7CXIAfAJIgHADgAIDCWIgFgFIAOADIgDAEgAkZCTIAmgWIAVgKIg5AjgAHvCOIAFABIACACgAwGBtIBxgEIALAPIgKACIgQgJIAOAKIg4AKIgogHIAiAIIguAJgANjBrIAAgBQABgJgrgDIgUgBIgjgIIBaAGIAkACIBxAGIgFAmgAJmBmIAmgHIgrAGIgpgKIAIgMIASADIADACQALAGADgGIB/ARIAGARIgUAAIAVAJIADABIADAHgAuCB3IgEgFIADAAIACAFgAt+BxQAKgBARgEIgBAFIgKACIgBgDIAAADIgMADgAtgBrIADgBIgBAGIgDABgAtXBoIAFgBIAQAAIgDAEIgSAEgAuNBpIADAAIgCACgAs+BnIADAAIAGABIgMACgAGRBgIALADIAKAFgAsxBmIADAAIgBABgAnMBHIC1gSIixAvgAE/BdIg1gUIBAAOIgCAIgAIkBWIgCgLIAbAEIgJALgAIOBRIAOgHIACABIACAKgADmA1IBLAQIAcAIIgCAGgAIABOIAKgGIALABIgOAGgAH0BLIgCgCIACACIgOgEIACgEIAYAEIgJAFgAHaBEIABgDIAMACIgDAEgAtiAkIAKgBIgFAfIgDABgAHGBAIAAgBIAJABIgBACgAtXAjIAIgBIgGAfIgFABgAtOAiIASgDIALgCIBOAAIABADIgkgBQgrAAAAAIQABAIAegEIgFATIgNABIgRAAIgEgFQgDgDAAAIIAAABIgVABgAsqA1QgBAJACgEIACgFIgCgFIgBgBIAAAGgAG8A9IAFABIAAABgAsRArIALgCIAkgGIASgDIgSAAIAAgDIA4AAQgHACAAAFQABAIAegHIAggIIA7AAIABAAIjDAgIAIgIIgKAIIgGABIgVAAgALSAhIgNglIBDgDIARACIAAADIghABIAgACIAAAQIgMAAQgQADgMAAIAbAHIANACIgBALgAJaAUIARgLIgSALIgugFIAIgNICFgFIAOAigAEzAJIgvgJIAjAAIBgACIgCAOgAHuAJIABgDIA/gEIgGANgAHbAHIAKgBIgBACgAFdgDIANAAIAAABgANkgaICjgNIAAAZgAFJgPIAMgCIAVgBIAAADgAIAgVIgDgMIADgJIAeAQIAAAGgAH5gVIADgJIADAJgAHpgVIANgTIACgBIgIAUgAGMgZIBmgPIgKATgAIegagAIegagAIDgqIAagEIABAUgAqXgoIAAgCIAOACgApGhDIAJACIALAIIgOgBIAQADIAIAGIgGgGIBFANIhXABgApRgpIgcgCIgEgeIAYAEIgGAKIAHgKIALAPIgKgPIAPACIAIAagAHpgrIAMgBIgBABIgOABgAowg4IgKgJICZAWIgWABgAp0grIgDgfIADABIAGAegAH3grIABgBIAAABgAqXguIADgaIAFgCIgFABIAAgFIAUADIAIABIAEAfgAIBguIAcgDIAAACIgcADgAlKgxIh4gXIACgWIAUAFIB1ApgALrg3IASgJIAGAAIANACIAAAGIgBADgAEfhAIABADIgmAHgAKyg6IgEgMIBegJIADABIgHAEIgFABIgrAEQAPABATADIgQAKgAnEg5IABgFIAcAHgAEfhFIAAADIg0AJgAJ+g9IAAgEIAhgDIADAJgAJog/IAVgCIgBAEgAFShlIAPgFIAEAQIhkATgANqhTQgCgFgLADIgGACIgNAAIgHgDIAogBQA2gBgBgJQAAgCgDgBIBigPIACAhgAM4hTIAAgBIAAgBIAFgBIADAAIAGADgAIZiDIg7AZIA8gUIgIATIgmAHIgJACIiAAPgApbhUIAFgBIACACgApjhYIAIACIgGACgApzhVIAAgGIANADIADAEgAp5hVIgBgIIADABIABAHgAqThWIAHgKIAIACIAAABIABgBIAHABIACAIgAqZhXIAIgKIgHAKgArQhZIACgRIAIgCIAmAIIgKAHIANgHIAGACIgJALgAoahmIACAAIgDAAIgmgDIAIgOIBdAXgAI2hwIgGAFIgZADgApQhqIgEgTIAEAAIAXAGIgJAOgApfhsIgNgJIAEgBIAPACIgSgFIgBgBIAXgDIADASgAJFhzIAPgEIgNACIAegVQAEgDAFAAIgNAdIgnAEgAIdh/IArgPIAcgFIgDADIgoAeIgiAGgArOhuIAFABIgFABgAukhyIADgUIB5AagApqhtIgFgFIAIAFgAF6i2IgDAYIiBAugAnGibIgYgJIAJAEIhrgjIAkgtIDZBxIifhLICdBagAqjhyIALAAIAKABIAAAAIgBABgAJohxIANgaIACABIgMAZgAJ/iBQACADgBAFIAAAFIgJABgAKHh4IACgEIADAHIgGAAgAqRh1IAGgBIAAABIgGAAgAr/h6IgFgTIAEAAIgEgBIgCgMIABAMIg5gMIACgIIANABIA3AEIg1gOIgOgDIACgKIBgAYQgGAAgBAFQgBAJAOgCIASgDIgQgHIA0ANIALAJIAIAHQgDACgDAAIgPgCIANADQAEABABACIgFACIgOABIgYgFIgLgBIADgFIAzACIg2gMQgrgJgCAJQgBAJAsABIAFAAIgEAFQgugIgCAHQAAADASADIAJACgAKaiDQAIACAHAIIgLACgAKrh9IgFgKIAKgBIAVAMIgYADgAtDiBIABgEIABAAIAYgCIgXgHIABgDIAdACIAdACIADASgALCiJIACAAIAZAKIgDABIgGAAgApciAIAEABIgMABgApsiEIAHACIgJABQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAgALSiLQAigFgCgHQgBgIgvAMIgVgKIAEgBIAsADIgjgIQgFgCgDgDIBJgVIAIA2QgGgCgQAEIgHADgAIvi2IgJAZIh6AZgAqRiNIAIABIABACIAAACgAqFiKIADAAIAAABIgDgBgAKjiPIAEACIgDABIgBgDgADxivIACADIgeASgAkBidIACABIABABgAIwi3IADgBIAGAWIgRAEgAF8i3IAWgLIAQAVIgqAPgAAOioIAAAAIgBABgAE6keIAKALIiJBqgAlkjWIAEgFIAQALIApAlgAGSjHIAVgMIAdAEIAIATIgqAPgAF7i7IAAADIgXAKgAlwi/IACgDIAbAQgAF+i9IARgJIADAEIgVAJgAlsjGIADgEIATAPgAFpjdIAIACIg3AcgAqFjFIAAgDIARAHgApljQIAMACIgggMIAOgjIAJACIAaAVIgWgUQASAEAaAFIgogSIAHACIAuANIAHADIgnAsgAuwkAIAPgxICYA5IgCADQgCAIANAAIAQAAIgGgEIAnAOIgBABQgRgHgCAIQgDAIAWABIAbACIgZgLIgCgBIABgBIBIAbIAAADgAlrjsIgYgTIAOANIhFgkIAnAGIgtgJIAXgRIgYAPIAAAAIAQgZIBmBMIAZAZgAGpjUIAUgLIAGAQgALOjWIBggkIgBABIAEAFQAEAEAAgJIAAgDIAzgUIADAMIh6ApIgoAIgAGslnIAmANIgJAFIhrBIIhJAxIgMAHgABfjrIACABIgIAOgAAqkPIASADIgXAwgAFtjfIALgHIADAFIgFADgAF7joIAJgGIgCAKIgDACgANskDIAEAOIhLAQgAGHjtIADAFIgEACgAD7k1IASgVIANALIhWBQgAKQjxIAbgMIgDAGIgYAHgAjwj9IgdgmIAoAvgAKxkAIALgFIgGAKIgJACgALHkKIAdgOIAEAEQAEAEgBgIIAAgDIDfhnIATA0Ii1AzIABgCIgBACIhkAcIAAAAIgBAAIgCABgAOJlEQgdAOgWAJIA2gNQArgLgCgIQgBgDgFAAQgKAAgcAMgAlEkzIABgCIAdAeIARAZgACTltIAcg8IAUAJIgqBOIARgpIg7B0gApQkKIgSgIIAAgBIAWALIgEgCgAkFkRIg1hCIAKACIAnAvIgVgWIAMAOIATAfgAEvkrIADAEIgeAZgAnjmOIAWgZIARANIgPgPIAHgIIB7CVgAiZkzIgYg+IAkBSgAIJkjIABABIgDABgAIOklIAKgGIACACIgCgCIAVgNIAJAEIgcALIgLAFgAhWkmIgEgaIAEAVIAAAGgAIFkoIABgBIABAAIgCABgAg8k1IgBgTIAFAXIgBAHgAILksIAHgEIABABIgIAEgAn5k+IgFgDIADACIgXgLIgIgJQgIgIgDAHIgGgCIgCgCQgTgNgGABIgRgHIADgEIgDADIgIgEIgZguIAJAGIAEAEIANAUQgEgBgCADQgDAGATAJIABABIABABIAAgBIAHADIAlAQIghgYQgOgLgHgCIgJgRIAJAHICBBbgAITkxIASgKIACABIgTAKgAlVlEIABgBIAQAQIAAACgAIwk5IAJgCIALACIgLAEgAIvk5IAGgDIABAAIgGADgAI7k8IAOgEIABAFIgFACgAIok9IAEgCIADABIgEACgAJQlDIAMgEIABAFIgLAEgAIulAIAXgOIACAEIgVALgAo6mzIABABIAuAYIgpghQghgagFAHQAAABAAAAQAAABAAAAQAAABAAABQABAAAAABIghgYIBXAaICHCIgAJelIIAEgCIACAFIgEACgAlilTIAOAOIgBAAgAAgl/IAGAAIgPA6gAhZlfIAAgCIAAABIgKgjIAJgQIADgBIADAKIADBEgAJLlRIANgHIABAFIgMAGgABMmnIASgPIgNA1IgLAxgAFlmTIAAAAIAAgBIAVgZIAGABIgGgBIAug2IALAVIhrBkIgbAYgAk7lWIAEgDIAFAFgAJZlZIABgBIACAFIgCABgAHNlVIAHgFIABABIgHAEgAk7lfIADAEIgEADgAlDleIADgHIAEAEIgCAJgAlXlaIghgdIAHgGIAaAjgAHYldIABAAIAAABgAHWldIgpgMIAHgFIAjARgAlWl4IAGAJIgVgaIAEgEIAhAoIgDAHgAHclgIAFgDIABACIgEACgAG2lwIAdgbIAQAeIACAGIgDACIgEgDIgMgMIANAPIABACIgFADgAkllmIABgBIADAFgAGKlyIADABIgRAOgAHjllIACgCIABADIgCABIgBgCgAk3l4IAEgHIADAEIAEAGIAIAOIgCABgAj/nRIAIgYQACACABAEIAFAaQgBgcAAgEIABgDIAqBmIAJAfgABtmOIAIgEIgOAqgAHYmPIAWgVIAUAaIgLAbIgFADIgCgiIgBAbIAAAJIgCABgAsiltIh0gvIAJgSIBrBBgAq8mdIAEgLIADACIgDgDIACgIQAEADAJADIAaAJIgVgRQgJgIgGgBIADgJIA0AlIAcAwgAGKlyIAKgLIAGACIgMAKgAIFmHIABACIgHAQIgBACgAAMmBIADABIgDALgAIHmEIAFAHIgKAGgAgUmOIABgcIABABIAAAxgAl+nAIAWgKIAXAhIgKgMIARAXIgFAHIAFgGIAVAbIAAABIgEAIgAGVl+IAtgxIAHAOIguAmgAh7mKIAEgBIACAOgAiJmNIACgBIADALgAhmmPIAHgCIgFAKgA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");
	this.shape_9.setTransform(103.2,104.6);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,206.3,208.6);


(lib.rocket = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7A7A7").s().p("AgTAvQgJglgHgsIA8gTIAKBLQABAGgDAFQgEAFgGACIgoAOg");
	this.shape.setTransform(190.1,52.2,0.591,0.753,0,52.2,55.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3B3638","#585556","#7E7C7D","#959595","#9E9E9E"],[0,0.227,0.565,0.835,1],-41.4,-4.7,35.2,4.7).s().p("ADNExQgGgYgQhgQgMhJgSgrQgMgbgKgPQgYgegYgcQgdgfgZgXQhshmi1h7QAagBAWANQDVB2CxDJQA6BCAMBbIANBmQABAGgEAFQgDAFgHACIgqANg");
	this.shape_1.setTransform(197.9,29.3,0.591,0.753,0,52.2,55.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBCBCB").s().p("AhWAsQgGgsgBgtQBZADBegEQABAqADAxIgvABIgSABQg1AAg+gDg");
	this.shape_2.setTransform(159.3,22,0.591,0.753,0,52.2,55.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#E6EDF2","#E3EAEE","#C1C4C7","#ADADAE","#A5A5A5"],[0,0.035,0.459,0.796,1],36.7,3.7,0,36.7,3.7,77.4).s().p("AiSFoQgfjZBiiTQAQgdAig3ICgkJQALgGAMgDQgjBmgYBcIgVBWQghBkgIB3QgHBiAIB/IhGABQg3AAg3gDg");
	this.shape_3.setTransform(180.1,10.3,0.591,0.753,0,52.2,55.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#868686","#888888","#8C8C8C","#6B6B6B","#1F1F1F","#787878"],[0,0.035,0.251,0.38,0.639,1],-43.9,7.7,50.7,-4.6).s().p("AmtBmQgHgBgFgEQgEgEgBgGIgKhMQHCAbHFiQIAKBNQABAGgDAFQgEAFgGACQlwB2lnAAQhKAAhJgFg");
	this.shape_4.setTransform(172.9,34,0.591,0.753,0,52.2,55.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-40.9,4.1,37.5,-6.1).s().p("AmqFnQgHAAgFgEQgEgEgBgGIgOhmQgMhbAphNQB2jgCzi5QAXgXAhgFQAigFAcAQQDVB2CyDLQA5BAAMBbIANBmQABAGgDAFQgEAFgGACQlwB3lnAAQhKAAhJgFg");
	this.shape_5.setTransform(188.1,22,0.591,0.753,0,52.2,55.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D5CC31").s().p("AhQBYIgRhjQAOgJAPgBQAdgEAYASQAVAQAEAdQADAbgOAXIgVABIg6gBgABDg/QgOgKgIgPIAwABIAFAlQgRgCgOgLg");
	this.shape_6.setTransform(161,24.9,0.591,0.753,0,52.2,55.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1A929").s().p("AhUBYIgbicICVgUIAyABIAYCrQhIAFhAAAIg8gBg");
	this.shape_7.setTransform(161.1,25.1,0.591,0.753,0,52.2,55.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#D4B12B","#D4AB29","#B36A1C"],[0,0.498,1],-43.1,6.5,32.7,-3.4).s().p("AmEB4QgJgNgDgSQgDgdARgXQASgXAdgEQAdgDAXARQAYASAEAdQADAcgQAXIgfAAQgtAAgogCgAgSBUQgEgdASgXQAQgXAdgEQAdgEAXASQAYASADAdQABAIgBAIQg/AMhGAKQgEgIgBgMgAhwBXQgLgIgCgNQgCgOAJgKQAIgLANgCQAOgCALAJQAKAIACANQACAOgIALQgJAKgNACIgFAAQgKAAgJgHgAEIAhQAIgIALgBQASgCAMAOIg6AQQABgLAIgIgAGRAGIAAAEIgNAEQAHgFAGgDgAjCgYQgUgLgKgUICFgRQgFAWgQAPQgRAQgWADIgKABQgRAAgQgJgACwgjQgXgSgEgdQgBgKABgMICGgRQAFAJABALQAEAdgSAYQgSAXgdAEIgKABQgXAAgTgPgAA8hMQgKgFgEgJIA9gIQgCAKgIAHQgHAHgLABIgEABQgIAAgHgEg");
	this.shape_8.setTransform(171.9,36.6,0.591,0.753,0,52.2,55.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B76C1D").s().p("AglhJIA/gJIAMCSIg8ATg");
	this.shape_9.setTransform(187.2,51.9,0.591,0.753,0,52.2,55.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#AF571A","#A75319"],[0,1],-4,8.6,0,-4,8.6,46.1).s().p("AmUB8IgBAAIgaiNINUhvIAMCRQlfBwlXAAQhIAAhHgFg");
	this.shape_10.setTransform(171.3,34.7,0.591,0.753,0,52.2,55.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EEB329").s().p("ABHQmQANADAIAEIgBACIgCACIgBADIgCACIgFAHIgHAGgAA/POIgEgrQAIgLAOgCQAIgBAHACIAEA8QgEADgGABIgGAAQgMAAgJgJgAApLeQAhAMALAhIACAhQgFAhgdARgAAiKKIgGg9IAKgDQAKgBAJAEQAJAFAFAJIACAaQgGATgVADIgDAAIgJgBgAAMGYQAcASAEAhQAFAlgbAYgAAAD+QAKgBAKAIQAKAIABANQACANgIALQgIAKgNACgAgPBYQAPARABAWQAEAagNAVgAgehKQARAGADAUQABAJgEAJQgEAJgIAFgAgMlhQgDgVAKgVIAFBKQgJgOgDgSgAg7mLQAFAHABAIQABAJgEAJgAg3qtQgCgSAGgRQAGgQANgLIAJBwQgcgSgEgggAhRvUQgOgQgDgVQgDgYALgUQALgUAUgJIALCDQgUgGgNgPg");
	this.shape_11.setTransform(121.9,109.8,0.591,0.753,0,52.2,55.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CE7822").s().p("AgRgYIADgCQAPgGAPgNIACAYIAAAMIgBABIAAAHIgBABIgDAJIgEALIgJAOIgDAFIgBACIgGAFg");
	this.shape_12.setTransform(62.6,162.2,0.591,0.753,0,52.2,55.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D7791E").s().p("Ah3yCIBBgIMACuAjPQADApghAdg");
	this.shape_13.setTransform(125.6,105.7,0.591,0.753,0,52.2,55.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEF539").s().p("ADGSMQgLgNgCgTQgEgbAQgWQAPgXAbgGIAPBzQgZgBgfgEgABsQ1QANgBAKAIQAKAIACANQACAMgHALQgHAKgMADgABPODQAdASAFAhQAEAfgVAYgACmNNQgVgSgDgbQgEgaAPgXQAPgVAagIIATCLIgCABQgaAAgTgRgABAMqIgLg+IAKgDQAOgCALAIQAKAJACANQACAOgJAKQgIALgNACIgEAAIgEAAgAAWIwQATAGANAQQANAQADAUQACAUgHARQgIARgOAMgAB6IAQgUgRgEgbQgDgaAOgWQAPgWAZgHIASCLQgagBgTgRgAAHHZIgHgwQAIgLAMgBQANgCALAIQALAJACANQABAOgIAKQgIALgOACIgEAAQgKAAgHgFgAggDhQAXADAPARQARASADAXQADAXgKAUQgLATgSALgABNCzQgTgRgDgaQgEgaAPgVQANgWAYgIIATCLQgZgCgUgRgAglCLQgLgIgBgNQgCgOAIgLQAIgLAOgBQANgCAJAIQALAIABAOQACANgIALQgHALgNACIgFAAQgKAAgJgHgAhYhpQAbgBAVARQAVARAEAcQADAagOAUQgOAVgZAIgAAiiXQgTgSgDgZQgEgZAOgWQANgVAXgIIATCKQgZgCgSgRgAhQi/QgLgJgCgMQgCgOAJgLQAIgLANgBQAOgCALAJQAKAHACAOQACANgIALQgJALgNABIgFABQgKAAgJgHgAh4koIgYiMIAGgBQAegDAXARQAXASAEAdQAEAdgSAYQgSAXgdAEgAgInkQgSgSgEgYQgDgZANgVQANgVAUgIIATCIQgYgDgQgQgAh8oLQgKgJgCgNQgCgNAJgLQAIgLANgBQAOgCAKAJQALAHACAOQACANgJALQgIALgNABIgEABQgLAAgKgHgAjHr8QALgFAHAAQAdgEAXASQAYASADAdQAEAdgSAYQgSAXgdAEIgNAAgAg0sxQgSgRgDgZQgDgXAMgWQAMgUAWgJIATCIQgYgDgRgRgAintXQgKgJgCgNQgCgNAIgLQAIgLAOgCQANgBALAIQALAJABAMQACAOgIALQgIAKgOACIgEABQgLAAgJgHgAjovCIgViBQAOgIAPgCQAdgEAXASQAYASADAdQAEAdgSAXQgSAXgdAFIgJAAQgJAAgIgCgAhXx2QgOgKgIgPIAvAAIAFAmQgQgDgOgKg");
	this.shape_14.setTransform(101.9,82.3,0.591,0.753,0,52.2,55.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FCD638").s().p("AgOAnIgBAAIglgGIgGgCIgOhNQBIANA+ABIAKBPQgugCgogGg");
	this.shape_15.setTransform(41.2,143,0.591,0.753,0,52.2,55.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FDD332","#FBCA30","#F9C12E"],[0,0.4,1],-30,-11.5,94.9,28.5).s().p("ACNSDIgPgCMgGAgj9ICXgTIAyAAMAE8AkgQg+gDg4gLg");
	this.shape_16.setTransform(101.7,82.1,0.591,0.753,0,52.2,55.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FED232","#FEDB33","#FEE234","#FEE434","#EB9925","#D57A1E"],[0,0.059,0.157,0.384,0.631,1],-29.9,3.3,24.6,-3.8).s().p("AiIA7IglgDIgBAAQgKgOgDgTQgDgXANgVQA+AFA8gEQAHAOACALQAEAfgVAYIgOAAIgFABgAkZAbQgKgJgCgNQgCgLAJgLQAIgLANgCQAOgCAKAJQALAIACANQACAMgJALQgIAKgNACIgFABQgLAAgJgHgABjAVQgLgIgBgNQgCgMAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAMgIALQgIAKgOACIgFAAQgKAAgJgHgADSgkQASgUAagDQAWgDATAKIgBABIgCADIgCADIgJAKIgOAMIhEAcIgHADQABgYARgUg");
	this.shape_17.setTransform(48.3,151.7,0.591,0.753,0,52.2,55.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FED232","#FED331","#EB9925","#D57A1E"],[0,0.384,0.631,1],-35.4,6.7,38.8,-2.9).s().p("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ANgCQAOgBALAIQAKAIACAOQACANgJALQgIAIgNACIgFAAQgLAAgIgGgAE9AAQgKgIgCgNQgCgOAIgKQAIgLAOgCQANgCALAJQALAIACANQABAOgIALQgIAIgOACIgFAAQgKAAgJgFgAiahyQgXgSgEgdQgDgdARgXQASgXAdgEQAegEAXASQAXASAEAdQAEAdgSAXQgSAYgdADIgLABQgXAAgTgPgADih3QgXgSgEgdQgEgdASgYQASgXAdgEQAdgDAXASQAYASADAdQAEAdgSAXQgSAXgdAEIgKAAQgYAAgSgOgAkTieQgKgIgCgNQgCgOAIgLQAJgKANgCQANgCALAJQALAIACANQABAOgIAKQgIALgOACIgFAAQgKAAgJgHgABpijQgLgIgCgOQgBgNAIgLQAIgKAOgCQANgCALAIQAKAJACANQACANgIALQgJALgNACIgFAAQgKAAgJgHgAlukVQgXgSgEgdQgEgdASgYQASgXAdgEQAdgDAXARQAYASADAdQAEAdgSAYQgSAXgdAEIgKAAQgXAAgTgOgAANkbQgVgRgEgeQgDgdAPgXQASgXAdgEQAdgEAYASQAXASAEAdQAEAdgSAXQgSAYgdADIgLABQgXAAgTgPgAFwlPQgDgVAKgUIAGBJQgLgOgCgSgAhqlGQgKgJgCgNQgCgNAJgLQAIgLANgCQANgCALAJQALAIACANQACAOgJALQgIAKgNACIgFAAQgLAAgJgGgAESlMQgLgIgBgNQgCgOAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAOgIALQgIAKgOACIgFAAQgKAAgJgHgAjFm+QgXgSgEgdQgEgdASgXQASgXAdgEQAdgEAXASQAYASADAdQAEAdgSAXQgSAXgdAEIgKABQgXAAgTgPgAC2nDQgXgSgEgdQgDgdASgYQASgXAdgEQAdgDAXARQAXASAEAdQAEAegSAXQgSAXgdAEIgLAAQgXAAgTgOgAk+nqQgLgIgCgOQgBgNAIgLQAIgKAOgCQANgCALAJQAKAIACANQACANgIALQgJALgNACIgEAAQgLAAgJgHgAA+nvQgLgIgCgOQgCgNAJgLQAIgLANgBQAOgCALAIQAKAIACAOQACANgJALQgIALgNABIgFAAQgLAAgIgGgAmaphQgXgSgEgdQgDgdARgYQASgXAdgEQAegDAXARQAXASAEAdQAEAdgSAYQgSAXgdAEIgLAAQgXAAgTgOgAgcpnQgXgSgEgdQgEgdASgXQASgXAbgEQAdgEAXASQAYASADAdQAEAdgSAXQgSAYgdADIgKABQgVAAgTgPgAFFqbQgDgRAHgRQAGgQANgMIAIBwQgcgSgDgggAiVqSQgLgJgBgNQgCgOAIgKQAIgLAOgCQANgCALAJQALAIABANQACAOgIALQgIAKgOACIgEAAQgLAAgJgGgADnqYQgLgIgCgNQgCgOAJgKQAIgLANgCQAOgCALAJQAKAIACANQACAOgJAKQgIALgNACIgFAAQgLAAgIgHgAjwsKQgXgSgEgdQgEgdASgXQASgYAdgEQAdgDAXASQAXASAEAdQAEAdgSAXQgSAXgdAEIgLAAQgXAAgSgOgACLsPQgXgSgEgdQgDgeARgXQASgXAdgEQAdgDAYARQAXASAEAdQAEAdgSAYQgSAXgdAEIgLAAQgXAAgTgOgAlps2QgLgIgCgOQgCgNAJgLQAIgKANgCQAOgCALAIQAKAJACANQACANgJALQgIALgNACIgFAAQgLAAgIgHgAASs7QgKgIgCgOQgCgNAIgLQAJgLANgBQANgCALAIQALAIACAOQABANgIALQgIALgOABIgFAAQgKAAgJgGgAnFutQgXgSgEgeQgDgdARgXQASgXAdgEQAdgEAYASQAXASAEAdQAEAdgSAXQgSAYgdAEIgLAAQgXAAgTgOgAhHuzQgXgSgEgdQgEgdASgXQASgXAdgEQAdgEAVASQAYASADAdQAEAdgSAXQgSAYgbADIgKABQgYAAgSgPgAEqvCQgOgQgDgVQgDgXAMgUQALgUAUgKIAKCEQgUgGgNgQgAjAvfQgLgIgCgNQgBgOAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAOgIALQgJAKgNACIgFAAQgLAAgIgHgAC7vkQgKgIgCgNQgCgOAJgLQAIgKANgCQANgCALAJQALAIACANQACANgJALQgIALgNACIgGAAQgKAAgJgHgAkSxQQgUgLgKgUICFgRQgFAWgQAPQgRAQgWADIgKAAQgSAAgPgIgABgxbQgXgSgEgdQgBgKABgMICGgRQAFAJABALQAEAegSAXQgSAXgdAEIgKAAQgXAAgTgOgAgSyEQgKgFgEgJIA7gIQgDAKgHAHQgHAHgKABIgEAAQgIAAgGgDg");
	this.shape_18.setTransform(110.3,90.3,0.591,0.753,0,52.2,55.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#F17724","#F87B27","#FD7E28","#DC6E22","#AE571A","#D1681F"],[0,0.106,0.251,0.498,0.808,1],-49.8,7.8,40.8,-4).s().p("AjmBPQgdgDgVgTQgUgTgFgbIgGggQAWARAbADQEYAyEFh5QARgHAOgNIACAZQACAagPAYQgPAWgbALQimBNisAAQhKAAhLgOg");
	this.shape_19.setTransform(50,150,0.591,0.753,0,52.2,55.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#F07120","#F87623","#FD7924","#DC691E","#AB5014","#CF621A"],[0,0.11,0.251,0.49,0.808,1],-52.6,10.2,46.5,-2.7).s().p("AgcSsQgdgEgVgTQgUgTgFgaMgGbgixINVhvMACvAjPQACAbgPAXQgPAYgbALQilBNivAAQhJAAhKgNg");
	this.shape_20.setTransform(109.8,88.6,0.591,0.753,0,52.2,55.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#959595").s().p("AgaBCIgUiCIBJgKIAUCVQgegCgrgHg");
	this.shape_21.setTransform(39.5,144,0.591,0.753,0,52.2,55.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#504E4E").s().p("AgThDIAdgDIAKB8IAAAEIgZANg");
	this.shape_22.setTransform(58.1,163,0.591,0.753,0,52.2,55.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#676767","#282828"],[0,1],4.8,102.5,0,4.8,102.5,36.1).s().p("AhGOkQgQgCgNgHIlI7uILKhdICNcOIgMAGQikBNiwAAQhJAAhJgNg");
	this.shape_23.setTransform(92.4,106,0.591,0.753,0,52.2,55.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#757576").s().p("AgMgHQAQgQAGgWIADAlQABAEgBADIAAABIgBAEIAAACIgBAGIgBABIgBAHIgBABQgCAGgFAGIAAABIgIAMg");
	this.shape_24.setTransform(49.5,170.7,0.591,0.753,0,52.2,55.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#595657").s().p("AgWiDIAcgCIARDTQACAhgYAXg");
	this.shape_25.setTransform(54.5,166.1,0.591,0.753,0,52.2,55.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C0C0C0").s().p("AgFAcIgGgBIgBgBIgGgBIAAAAIgMgFIgIg1QAJAEALACIAzAHIAHA2IgtgGg");
	this.shape_26.setTransform(29.8,153.3,0.591,0.753,0,52.2,55.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B3B3B3").s().p("AAJCIQgMgCgMgGIgnkEIBJgKIAkEdIgugHg");
	this.shape_27.setTransform(35.8,147.6,0.591,0.753,0,52.2,55.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#848484","#868686","#8A8A8A","#696969","#1C1C1C","#777777"],[0,0.035,0.251,0.38,0.639,1],-27,5,48.9,-4.9).s().p("AjABLQgYgEgSgQQgRgPgEgWIgGgjQASAdAmAGQDYAoDLhdQAkgPAJgjIADAlQACAWgMAUQgNASgXAJQiKBBiRAAQg+AAg/gLg");
	this.shape_28.setTransform(38.9,160.3,0.591,0.753,0,52.2,55.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-25.4,6.1,58.4,-4.8).s().p("AgXPqQgZgDgRgQQgRgQgEgWIlY9IILKheICTdiQACAXgNAUQgNATgWAKQiLBBiTAAQg9AAg9gMg");
	this.shape_29.setTransform(88.5,109.3,0.591,0.753,0,52.2,55.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#828282").s().p("AgSAaIgJgyIAtgGIAKA9QgYgBgWgEg");
	this.shape_30.setTransform(28.6,158.2,0.591,0.753,0,52.2,55.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#514F50").s().p("AgNgcIAXgCIAEAyIgWALg");
	this.shape_31.setTransform(43.2,172.6,0.591,0.753,0,52.2,55.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#6A6A6A","#272425"],[0,1],-1.5,57.3,0,-1.5,57.3,30.3).s().p("AheJrIgCAAIjaybIIYhGIBcSrIgBABQiKBBiTAAQg7AAg/gMg");
	this.shape_32.setTransform(65.6,132.7,0.591,0.753,0,52.2,55.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6E6E70").s().p("AgJgMQALgIAGgJIACAZIgBABIAAADIAAAAIgBAFIAAABIgCAGIgCADIAAABIgDAFIgBAAIAAAEIgFAFg");
	this.shape_33.setTransform(28.8,185.3,0.591,0.753,0,52.2,55.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5B5758").s().p("AgWiaIAXgCIAVEPQADAYgTASg");
	this.shape_34.setTransform(35.9,178.8,0.591,0.753,0,52.2,55.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A8A8A8").s().p("AAaAbIgngGIgEgCIgBAAIgIguIAHABQAMADAaADIAIAvg");
	this.shape_35.setTransform(14.5,172.3,0.591,0.753,0,52.2,55.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9A9A9A").s().p("AAMCaIgKgDIgxkvIAvgGIAwE9g");
	this.shape_36.setTransform(21.7,165.1,0.591,0.753,0,52.2,55.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#848484","#868686","#8A8A8A","#696969","#1C1C1C","#777777"],[0,0.035,0.251,0.38,0.639,1],-23,4.1,42.7,-6.2).s().p("AiPA0QgSgDgNgMQgNgMgDgQIgGgbQAPASAaACQCmAdCdhFQASgHAJgOIACATQABARgJAPQgKANgRAHQhoAwhrAAQgvAAgvgIg");
	this.shape_37.setTransform(20.8,177.5,0.591,0.753,0,52.2,55.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-19,4.6,43.8,-3.6).s().p("AgRLvQgSgCgNgMQgNgMgDgRIkC11IIXhGIBuWJQABAQgJAPQgKAPgRAHQhnAxhuAAQguAAgugJg");
	this.shape_38.setTransform(58.2,139.1,0.591,0.753,0,52.2,55.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C2C2C2").s().p("AgRgzIAUgDIAPBqIgVADg");
	this.shape_39.setTransform(18.9,179.5,0.591,0.753,0,52.2,55.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#767678","#89898B","#959698","#999A9C","#939495","#818183","#636465","#4D4D4E"],[0,0.114,0.231,0.345,0.475,0.655,0.867,1],-4.4,0.6,4.5,-0.5).s().p("AhgmQIBZgMIBoMsQgtALgsACg");
	this.shape_40.setTransform(39,161.4,0.591,0.753,0,52.2,55.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C6C6C6").s().p("AAQDIIgNhtIAAgBIgckdIAAgCIADgCQAGgBAAAFIArGLg");
	this.shape_41.setTransform(25.3,169.7,0.591,0.753,0,52.2,55.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#ADADAD").s().p("AALDLIgLhuQgWjKgJhTQAAgEACgDQAEgDADAAQAKgBABAKIARCxIAZDbg");
	this.shape_42.setTransform(25.4,169.6,0.591,0.753,0,52.2,55.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8A8A8A").s().p("Agji9QgBgOAOgBQAPgBABAOIArGMIgfAAIgpmKg");
	this.shape_43.setTransform(25.6,169.4,0.591,0.753,0,52.2,55.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EDEDED").s().p("AAkJCQALjBgUjpQgNiYgfklIAAgBIgfkfIAAgDIAEgBQAFAAAAAEIAcD4QAUC+AMB8IAFA0QAPCkAFBbQAHCfgICLIgJgIg");
	this.shape_44.setTransform(11.6,192,0.271,0.271,51.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CDCDCD").s().p("AhzBoQAqgeAtgrQAdgdA4g4IA3g3IACgBIACABQAAABABAAQAAABAAAAQAAABAAAAQgBAAAAABIgjAiIgNAOIg8A7IgJAKIgyAwQghAdggAWIABgHg");
	this.shape_45.setTransform(11.7,192);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A2A2A2").s().p("Ah0BuQAfgWAhgdIAzgvIAIgLIA8g6IAOgOIAigjQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAIgCgBIgBAAIg4A4Qg4A3gcAdQguArgpAfIAAgCQApgeAtgrIBFhEIBHhIQADgCACADQADADgDACIgiAiIhKBJIgcAeIgfAcQghAeggAXIAAgDg");
	this.shape_46.setTransform(11.8,192);

	this.addChild(this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,208.7,203.4);


(lib.LogoLetters = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#892675").ss(1,1,1).p("AKJkcIgzAAQAAABAAABQAAACAAABQAAAHgCANQgDAOgIAXIhZECIhEAAIBnkmQADgKAAgEQAAgMgOAAIgmAAQgLAAAAgPQAAgQAMAAIDYAAQgLAOgGAJQgGAJgEAGQgDAGgCAGQgDAGgCAHIgbAAQADgJADgJQAEgJAEgFgAG2k2QAGADADAHQADAFAAAKQAAADAAADQgBAEgBAEIhAAdQACgDACgEQABgFACgFQACgEAAgEQABgEAAgCQAAgHgMAAQgGAAgHAGQgHAGgGAMQgGALgEANQgEAOAAAOQAAAFABAGQACAGADAGQADAFAGAFQAGAFAJAFIgHAUQgNAFgKAGQgKAGgIAHQgIAIgHAIQgGAIgGAJQgGAJgEAJQgFAJgDAJQgDAKgCAIQgCAIAAAHQAAAKAGAFQAFAEAMAAQANAAAQgEQAQgFAOgJQAPgJALgNQAMgMAFgOIAMASQgEAMgJALQgIALgLAKQgVAQgYALQgYAKgaAAQgJAAgMgBQgMAAgKgFQgLgEgHgJQgIgIAAgPIAAAAQgKAHgMAJQgQAMgSAHQgSAHgOAAQgMAAgIgKQgHgKAAgMQAAgLAGgRQAGgSAIgTQAFgNAEgIQADgKACgGQADgGAAgFQABgEAAgDQAAgRgSAAQgEAAgGABQgFABAAABIg8ClIhAAAIBpksQACgFAAgEQAAgKgQAAIgDAAQgMAAAAgNQAAgJAHgGQAHgGAVAAQAdAAARAHQARAHAAAUQAAAFgBAGQgBAGgCAHIghBcQABAAAEABQAEAAAFAAQAKAAAGgKQAIgJAGgPQAFgOAGgSQAFgRAGgPQAFgPAHgJQAHgLAIgGQAJgGAKgDQALgDANAAQAHAAAEACQAFABACADQACADAAADQABADAAADQAAAKgDADQgEADgGAAQgFAAgFAEQgEADgFANQgJAUgFATQgFATgHAPQgGAPgKALQgKAKgTADQANAHAFAJQAFAJAAANQAAAJgDAMQgDALgFAMQgGANgDAIQgDAJgCAFQgBAFgBAEQgBADAAACQAAAIAHAAQAHAAAIgFQAIgFAIgIQAJgIAGgIQABgCABAAQAAgCABgBQAHgYANgVQAOgWASgOQATgQAVgGQgRgHgHgOQgHgOAAgQQAAgbAJgVQAKgUAPgPQAQgOAVgHQAUgIAYAAQAPAAAKACQAKABAGAEgABwBlQAAAFgCAFIgaBHIAiAAIAnhvIAtAAIhMDTQgBABAAABQAAACAEAAQAFAAAGgDQAGgEAGgFQAGgFAGgHQAEgGACgGIAAAAQAFgNAHgLQAKgQANgKQANgLAPgEQgMgFgFgJQgFgLAAgLQAAgTAHgOQAHgPAKgKQAMgKAOgFQAOgGARAAQAKAAAIABQAHACAEACQAFACACAFQABADAAAIQAAACAAACQAAADgBACIgtAVQABgCACgDQABgDABgEQABgDABgDQAAgDAAgBQAAgFgIAAQgEAAgFAFQgFAEgFAIQgEAHgCAKQgDAKAAAKQAAADAAAEQACAFACAEQACADAEAEQAEAEAGADIgFAOQgIAEgHAEQgHAEgGAFQgGAGgFAFQgEAGgFAGQgDAHgEAGQgDAGgCAHQgCAGgBAGQgCAGAAAFQAAAHAEAEQAEAEAIAAQAKAAALgEQALgEAKgGQAKgHAIgIQAJgJADgKIAJAMQgDAJgGAIQgGAHgIAHQgPANgQAIQgRAHgTAAQgGAAgIgBQgJAAgHgDQgIgDgFgGQgGgGAAgMQAAgCAAgBQgHAIgJAHQgLAJgNAFQgNAFgKAAQgJAAgGgGQgGgHAAgKQAAgFACgFIAfhXIghAAIgrB3IgsAAIBJjUQACgEAAgDQAAgHgLAAIgDAAQgIAAAAgJQAAgHAEgEQAFgEAPAAQAVAAAMAFQAMAFAAAOQAAAEgBADgAF2BZQgEAAgDABQgDABgEACQgDACgDACQgCABgCAAQgCAAgCgBQgCgCAAgEQAAgFADgEQADgEAEgCQAFgCAGgCQAGgCAHAAQAMAAAJAFQAKAFAJAKQALgKANgFQAMgFANAAQAMAAAHAHQAIAGAAAMQAAALgDAIQgEAIgFAGQgFAGgHADQgHADgHAAQgNAAgKgGQgBAEAAAGQgBAFAAAFQAAAFACAIQACAGADAJQAEAAAEAAQAEAAAEAAQAGAAAEgCIgHATQgCACgCABQgDAAgGABQAAAEABAFQABAFAAAEQAAASgHASQgHASgMAOQgMAOgRAJQgQAJgUAAQgKAAgJgDQgJgCgGgFQgHgGgDgHQgDgIAAgKQAAgRAGgQQAHgQALgMQALgNAOgJQAOgJAPgEQAAgFgBgGQAAgGAAgIQAAgOAFgNQAFgPAJgLQgJgLgIgCQgIgEgFAAgAHXBiQgCgDg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");
	this.shape.setTransform(69.9,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FF0099"],[0,1],-50,-3.2,-50.3,15.9).s().p("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");
	this.shape_1.setTransform(59.7,51.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#FF0099"],[0,1],-43.2,-7.7,-43.5,16.7).s().p("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");
	this.shape_2.setTransform(72.2,18);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AKJkcIgzAAQAAABAAABQAAACAAABQAAAHgCANQgDAOgIAXIhZECIhEAAIBnkmQADgKAAgEQAAgMgOAAIgmAAQgLAAAAgPQAAgQAMAAIDYAAQgLAOgGAJQgGAJgEAGQgDAGgCAGQgDAGgCAHIgbAAQADgJADgJQAEgJAEgFgAG2k2QAGADADAHQADAFAAAKQAAADAAADQgBAEgBAEIhAAdQACgDACgEQABgFACgFQACgEAAgEQABgEAAgCQAAgHgMAAQgGAAgHAGQgHAGgGAMQgGALgEANQgEAOAAAOQAAAFABAGQACAGADAGQADAFAGAFQAGAFAJAFIgHAUQgNAFgKAGQgKAGgIAHQgIAIgHAIQgGAIgGAJQgGAJgEAJQgFAJgDAJQgDAKgCAIQgCAIAAAHQAAAKAGAFQAFAEAMAAQANAAAQgEQAQgFAOgJQAPgJALgNQAMgMAFgOIAMASQgEAMgJALQgIALgLAKQgVAQgYALQgYAKgaAAQgJAAgMgBQgMAAgKgFQgLgEgHgJQgIgIAAgPIAAAAQgKAHgMAJQgQAMgSAHQgSAHgOAAQgMAAgIgKQgHgKAAgMQAAgLAGgRQAGgSAIgTQAFgNAEgIQADgKACgGQADgGAAgFQABgEAAgDQAAgRgSAAQgEAAgGABQgFABAAABIg8ClIhAAAIBpksQACgFAAgEQAAgKgQAAIgDAAQgMAAAAgNQAAgJAHgGQAHgGAVAAQAdAAARAHQARAHAAAUQAAAFgBAGQgBAGgCAHIghBcQABAAAEABQAEAAAFAAQAKAAAGgKQAIgJAGgPQAFgOAGgSQAFgRAGgPQAFgPAHgJQAHgLAIgGQAJgGAKgDQALgDANAAQAHAAAEACQAFABACADQACADAAADQABADAAADQAAAKgDADQgEADgGAAQgFAAgFAEQgEADgFANQgJAUgFATQgFATgHAPQgGAPgKALQgKAKgTADQANAHAFAJQAFAJAAANQAAAJgDAMQgDALgFAMQgGANgDAIQgDAJgCAFQgBAFgBAEQgBADAAACQAAAIAHAAQAHAAAIgFQAIgFAIgIQAJgIAGgIQABgCABAAQAAgCABgBQAHgYANgVQAOgWASgOQATgQAVgGQgRgHgHgOQgHgOAAgQQAAgbAJgVQAKgUAPgPQAQgOAVgHQAUgIAYAAQAPAAAKACQAKABAGAEgABwBlQAAAFgCAFIgaBHIAiAAIAnhvIAtAAIhMDTQgBABAAABQAAACAEAAQAFAAAGgDQAGgEAGgFQAGgFAGgHQAEgGACgGIAAAAQAFgNAHgLQAKgQANgKQANgLAPgEQgMgFgFgJQgFgLAAgLQAAgTAHgOQAHgPAKgKQAMgKAOgFQAOgGARAAQAKAAAIABQAHACAEACQAFACACAFQABADAAAIQAAACAAACQAAADgBACIgtAVQABgCACgDQABgDABgEQABgDABgDQAAgDAAgBQAAgFgIAAQgEAAgFAFQgFAEgFAIQgEAHgCAKQgDAKAAAKQAAADAAAEQACAFACAEQACADAEAEQAEAEAGADIgFAOQgIAEgHAEQgHAEgGAFQgGAGgFAFQgEAGgFAGQgDAHgEAGQgDAGgCAHQgCAGgBAGQgCAGAAAFQAAAHAEAEQAEAEAIAAQAKAAALgEQALgEAKgGQAKgHAIgIQAJgJADgKIAJAMQgDAJgGAIQgGAHgIAHQgPANgQAIQgRAHgTAAQgGAAgIgBQgJAAgHgDQgIgDgFgGQgGgGAAgMQAAgCAAgBQgHAIgJAHQgLAJgNAFQgNAFgKAAQgJAAgGgGQgGgHAAgKQAAgFACgFIAfhXIghAAIgrB3IgsAAIBJjUQACgEAAgDQAAgHgLAAIgDAAQgIAAAAgJQAAgHAEgEQAFgEAPAAQAVAAAMAFQAMAFAAAOQAAAEgBADgAF2BZQgEAAgDABQgDABgEACQgDACgDACQgCABgCAAQgCAAgCgBQgCgCAAgEQAAgFADgEQADgEAEgCQAFgCAGgCQAGgCAHAAQAMAAAJAFQAKAFAJAKQALgKANgFQAMgFANAAQAMAAAHAHQAIAGAAAMQAAALgDAIQgEAIgFAGQgFAGgHADQgHADgHAAQgNAAgKgGQgBAEAAAGQgBAFAAAFQAAAFACAIQACAGADAJQAEAAAEAAQAEAAAEAAQAGAAAEgCIgHATQgCACgCABQgDAAgGABQAAAEABAFQABAFAAAEQAAASgHASQgHASgMAOQgMAOgRAJQgQAJgUAAQgKAAgJgDQgJgCgGgFQgHgGgDgHQgDgIAAgKQAAgRAGgQQAHgQALgMQALgNAOgJQAOgJAPgEQAAgFgBgGQAAgGAAgIQAAgOAFgNQAFgPAJgLQgJgLgIgCQgIgEgFAAgAHXBiQgCgDg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");
	this.shape_3.setTransform(71,33.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AFQE+QgJgCgGgFQgHgGgDgHQgDgIAAgKQAAgRAGgQQAHgQALgMQALgNAOgJQAOgJAPgEIgBgLIAAgOQAAgOAFgNQAFgPAJgLQgJgLgIgCQgIgEgFAAIgHABIgHADIgGAEIgEABIgEgBQgCgCAAgEQAAgFADgEQADgEAEgCIALgEQAGgCAHAAQAMAAAJAFQAKAFAJAKQALgKANgFQAMgFANAAQAMAAAHAHQAIAGAAAMQAAALgDAIQgEAIgFAGQgFAGgHADQgHADgHAAQgNAAgKgGIgBAKIgBAKQAAAFACAIIAFAPIAIAAIAIAAQAGAAAEgCIgHATIgEADIgJABIABAJIABAJQAAASgHASQgHASgMAOQgMAOgRAJQgQAJgUAAQgKAAgJgDgAF1DdQgIAGgHAIQgHAIgEAKQgEAKAAANQAAAIAEAHQAEAGAHAAQAKAAAHgFQAIgGAFgIQAEgHADgKQACgIAAgIIAAgHIAAgHIgCgJIgDgMIgTALgAHFBkQgGAFgFAIQAEADAEABQAEACAEAAQADAAACgCQADgBACgCIAEgEIABgFQAAgEgCgDQgCgDgEAAQgGAAgGAFgADFFAQgJAAgHgDQgIgDgFgGQgGgGAAgMIAAgDQgHAIgJAHQgLAJgNAFQgNAFgKAAQgJAAgGgGQgGgHAAgKQAAgFACgFIAfhXIghAAIgrB3IgsAAIBJjUIACgHQAAgHgLAAIgDAAQgIAAAAgJQAAgHAEgEQAFgEAPAAQAVAAAMAFQAMAFAAAOIgBAHIgCAKIgaBHIAiAAIAnhvIAtAAIhMDTIgBACQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAFAAAGgDQAGgEAGgFIAMgMIAGgMIAAAAQAFgNAHgLQAKgQANgKQANgLAPgEQgMgFgFgJQgFgLAAgLQAAgTAHgOQAHgPAKgKQAMgKAOgFQAOgGARAAIASABQAHACAEACQAFACACAFQABADAAAIIAAAEIgBAFIgtAVIADgFIACgHIACgGIAAgEQAAgFgIAAQgEAAgFAFQgFAEgFAIQgEAHgCAKQgDAKAAAKIAAAHIAEAJIAGAHQAEAEAGADIgFAOQgIAEgHAEIgNAJIgLALIgJAMIgHANIgFANIgDAMIgCALQAAAHAEAEQAEAEAIAAQAKAAALgEQALgEAKgGQAKgHAIgIQAJgJAD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");
	this.shape_4.setTransform(71,33.8);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,142.9,68);


(lib.fireworksBg = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.fireworks();
	this.instance.setTransform(0,0.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,302.2,211.3);


(lib.firecolorn = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,0,0,0)","#FF0000","#FEBA76"],[0.243,0.784,1],0,0,0,0,0,15.5).s().p("AgkCUIgCAAQgngKgegeQgtgtAAg/QAAg+AtgtQAtgtA+AAQA2AAAoAhIACACIAMAKQAsAtABA+QgBA/gsAtQgSARgVALIgCABQgfAPgkABQgSgBgSgEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.3,-15.3,30.6,30.6);


(lib.dontforget = function() {
	this.initialize();

	// Txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.984)").s().p("AkPHkQgHgCgGgEQgFgEgDgFQgCgFAAgFIAAgMIABAAQAFAEAKADQAKADANAAQAMAAAGgGQAGgGABgJIgBgDIAAgDIAAgEQgCAFgGAEQgGAFgJAAQgJAAgKgDQgJgDgHgGQgGgGgFgJQgDgJAAgNQgBgLAFgKQAEgKAIgHQAIgHAMgFQALgEAOAAQAMAAAJAEQAJADAHAHQAFAGAEAJQADAJgBALIAAAdIABAFIAAAHIAAAGIAAAFQAAAKgEAJQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgJgDgAkFF1QgEAFgBAKQAAAMAGAFQAFAFAIAAQAJAAADgFQAFgGAAgJQAAgNgFgEQgEgFgJAAQgJAAgEAFgACmHBQgLgFgHgHQgHgIgEgKQgDgKAAgMQAAgMAEgLQADgLAIgIQAHgJALgEQALgFAMAAQALAAAJADQAJADAIAFQAGAGAEAIQAEAJABAKQAAAIgEAGQgDAFgHADQgGAEgLABIgXABIgRAAQADAQAYAAQANAAAJgCQAIgCAFgDIACAAIAAAJQgBAFgCAFQgCAFgFADQgGAEgIACQgHACgNAAQgNAAgMgEgACvFzQgEAFgBAIIAPAAIALAAIAGgCQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBIAAgDQAAgEgEgEQgDgEgJAAQgKAAgFAGgAiQHDQgIgCgHgEQgHgEgEgHQgEgGgBgKQABgSAOgJQANgJAeAAIAFAAIAAgFQAAgHgFgCQgFgCgLAAIgOABQgGAAgEACQgDABgEADIgFAFIgBAAIAAgOQAAgFACgFQADgFAGgDQAFgEAIgDQAJgCAMAAQAMAAAJADQAJADAHAGQAGAGAEAJQADAJAAAMIAAARQAAAPgCAKQgDAKgGAGQgGAFgLADQgKACgPAAQgHAAgJgCgAiGGYQgEADgBAFQABAFADADQADADAJAAQAEAAAFgDQADgDAAgIIAAgIIgIAAQgKAAgFADgAERHBIgHgFQgDgDgBgEQgCgEAAgEQAAgFACgDQABgEADgDQADgDAEgCQAEgCAEAAQAFAAAEACQADACADADIAFAHQABADAAAFQAAAEgBAEQgCAEgDADQgDADgDACQgEABgFAAQgEAAgEgBgABmHCQgHAAgFgBQgFgCgCgDQgDgDgCgEIgBgJIAAgpQABgKgEgFQgEgEgIAAQgIAAgEAFQgCAFAAAJIAAA/IgNAAIgLgBQgEgBgDgCQgDgDgCgEQgCgFABgGIAAgqQgBgJgDgFQgDgEgHAAQgHAAgEAEQgDAFAAAKIAAA/IgNAAQgNAAgGgGQgGgFAAgLIAAgnQAAgMAEgJQACgKAIgHQAHgHAJgDQAKgEANAAIALACIAKAEIAHAHIAEAHIAGgHIAIgGIAJgFQAGgCAGAAQAYAAANAOQAOANAAAaIAAA8gAEaGMQgJAAgFgFQgFgGAAgJIgChAIARAAQAKAAAEAGQAGAGAAAJIgDA/gAB2D5QgMgFgGgHQgIgIgEgKQgDgKgBgMQAAgMAFgLQAEgLAHgIQAIgJAKgEQAKgFANAAQALAAAJADQAKADAGAFQAHAGAFAIQADAJAAAKQAAAIgDAGQgDAFgGADQgHAEgKABIgZABIgQAAQADAQAYAAQAOAAAIgCQAIgCAFgDIABAAIAAAJQAAAFgCAFQgDAFgFADQgFAEgHACQgJACgLAAQgOAAgLgEgAB/CrQgFAFgBAIIAPAAIALAAIAGgCQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBIABgDQAAgEgDgEQgFgEgIAAQgKAAgEAGgAgED5QgKgFgIgHQgHgIgEgKQgEgKAAgMQABgMAEgLQADgLAIgIQAHgJALgEQAIgFANAAQALAAAJADQAJADAIAFQAGAGAFAIQADAJAAAKQAAAIgDAGQgDAFgHADQgHAEgKABIgYABIgPAAQACAQAYAAQANAAAJgCQAIgCAFgDIACAAIAAAJQAAAFgDAFQgCAFgFADQgGAEgIACQgHACgMAAQgOAAgKgEgAADCrQgDAFAAAIIANAAIALAAIAGgCQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBIABgDQAAgEgEgEQgDgEgJAAQgKAAgFAGgAhWD6QgMAAgHgGQgIgGABgOIAAgwQAAgIACgHQADgHAFgGQAFgFAIgDQAHgDAJAAQAPAAAHAFQAGAFAAAIIAAAOIgBAAIgGgCIgHgBQgIAAgEAEQgFAEAAAKIAABCgAijD6QgOAAgFgFQgGgGAAgMIAAhMQAAgPAEgKQAEgKAGgFQAHgGAIgCQAIgDAIAAQAHAAAFACQAFABADADQACADABAEQACAEAAAEIAAAJIgBAAIgIgCIgJgBQgHAAgEADQgEAEAAAFIAAANIAZAAIAAANQAAAGgFADQgEAEgHAAIgJAAIAABIgAEWAzQgJgCgEgDQgFgEgCgFQgCgFgBgGIAAgLIABAAQAGAEAJADQAHADANAAQAKAAAEgCQADgCAAgEIAAgEIgDgCIgIgCIgOgDQgPgCgHgFQgIgHAAgNQAAgKAEgHQAFgIAHgFQAHgFAIgCQAKgDAJAAQASAAALAHQALAHAAAMIAAAMIgBAAQgGgFgJgCQgIgDgLAAQgLAAgEADQgEACAAADIABADIADACIAHACIAOADQAOACAIAIQAJAGAAAOQAAARgNALQgNAKgWAAQgMAAgHgCgAk2AxQgKgEgJgHQgHgIgEgKQgFgKAAgKQAAgOAFgLQAEgMAIgHQAHgIAMgFQALgEANAAQALAAAKAEQALAEAHAIQAIAHAGALQAEAKAAANQAAAMgEALQgEAKgIAIQgHAIgMAEQgKAEgPAAQgMAAgKgEgAkngdQgDACgDADQgDAEgBAEQgCAFAAAGQAAAOAGAHQAFAIALAAQAIAAAFgIQAGgHAAgKQgBgPgFgIQgGgHgJAAQgFAAgDACgADPAyQgHgCgFgEQgEgFgDgHQgDgGAAgKIAAhGIAJAAIAOABQAGABADADQADADABAFQACAFAAAIIAAAmQAAAIAEACQADADAIAAIAFAAIAAALQAAAFgCAEIgFAFQgCACgFABIgIABQgIAAgGgCgAgGAyQgHgCgGgEQgFgFgEgHQgDgIAAgLIAAhDQAAgHADgGQAFgGAFgEIAJgFQAFgDAEAAIAEAAIAAAbIAgAAIAAAOQAAADgBADIgFAFQgDADgDABIgGABIgOAAIAAAmQAAAGADADQAEADAFAAIALgBIAGgCIABAAIAAAPQAAAHgGAGQgIAFgOAAQgGAAgGgCgACSAyQgHAAgEgBQgFgCgCgDQgDgDgBgEIgBgKIAAgjQABgLgFgGQgEgFgIAAQgGAAgDABQgDACgDADQgCADAAAEIgBAKIAAA5IgOAAQgNAAgGgFQgGgGAAgMIAAh7IANAAQAMAAAGAGQAHAFgBALIAAAcQAFgGAHgFQAIgEANAAQAIAAAIADQAHADAGAGQAGAGADAJQAEAJAAALIAABAgAhzAyQgMAAgFgFQgFgFAAgMIAAglQAAgLgEgFQgEgFgKAAQgIAAgEAFQgEAFgBALIAAA7IgMA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");
	this.shape.setTransform(33.9,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.984)").s().p("AkOHkQgJgCgFgEQgFgEgDgFQgCgFAAgFIAAgMIABAAQAGAEAJADQAKADANAAQALAAAHgGQAGgGAAgJIAAgDIAAgDIAAgEQgCAFgGAEQgGAFgJAAQgKAAgJgDQgJgDgHgGQgGgGgFgJQgDgJAAgNQAAgLAEgKQAEgKAIgHQAIgHAMgFQALgEAOAAQAMAAAJAEQAJADAHAHQAGAGADAJQACAJAAALIAAAdIABAFIAAAHIAAAGIAAAFQABAKgFAJQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgIgDgAkFF1QgEAFgBAKQAAAMAGAFQAFAFAIAAQAIAAAFgFQAEgGAAgJQAAgNgEgEQgFgFgJAAQgJAAgEAFgACmHBQgKgFgIgHQgHgIgEgKQgEgKABgMQAAgMADgLQAEgLAIgIQAHgJALgEQALgFAMAAQALAAAJADQAJADAHAFQAIAGADAIQAFAJAAAKQAAAIgEAGQgDAFgHADQgGAEgLABIgXABIgRAAQAEAQAXAAQANAAAJgCQAIgCAFgDIACAAIAAAJQgBAFgCAFQgDAFgEADQgGAEgIACQgHACgNAAQgOAAgLgEgACvFzQgEAFgBAIIAPAAIALAAIAGgCQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAgDQAAgEgEgEQgDgEgJAAQgKAAgFAGgAiQHDQgIgCgHgEQgGgEgFgHQgEgGgBgKQABgSAOgJQANgJAeAAIAFAAIAAgFQABgHgGgCQgFgCgLAAIgOABQgFAAgFACQgDABgEADIgFAFIgBAAIAAgOQAAgFACgFQADgFAGgDQAFgEAIgDQAJgCAMAAQALAAAKADQAJADAHAGQAGAGAEAJQADAJAAAMIAAARQAAAPgDAKQgCAKgGAGQgHAFgKADQgJACgQAAQgHAAgJgCgAiGGYQgEADgBAFQABAFADADQADADAJAAQAFAAAEgDQADgDAAgIIAAgIIgIAAQgKAAgFADgAERHBIgHgFQgDgDgBgEQgCgEAAgEQAAgFACgDQABgEADgDQADgDAEgCQADgCAFAAQAFAAADACQAEACADADIAFAHQABADAAAFQAAAEgBAEQgCAEgDADQgDADgEACQgDABgFAAQgFAAgDgBgABmHCQgHAAgFgBQgFgCgDgDQgCgDgBgEIgCgJIAAgpQAAgKgDgFQgEgEgIAAQgIAAgEAFQgDAFAAAJIAAA/IgMAAIgLgBQgEgBgDgCQgDgDgCgEQgBgFgBgGIAAgqQAAgJgDgFQgDgEgHAAQgHAAgEAEQgDAFAAAKIAAA/IgNAAQgNAAgGgGQgGgFAAgLIAAgnQAAgMAEgJQACgKAHgHQAIgHAJgDQAKgEANAAIALACIAKAEIAHAHIAEAHIAGgHIAIgGIAJgFQAGgCAFAAQAZAAANAOQAOANAAAaIAAA8gAEaGMQgJAAgFgFQgFgGgBgJIgBhAIARAAQAKAAAEAGQAGAGAAAJIgDA/gAB2D5QgMgFgGgHQgIgIgEgKQgDgKgBgMQAAgMAFgLQAEgLAHgIQAIgJAKgEQAKgFANAAQALAAAJADQAJADAIAFQAGAGAFAIQADAJAAAKQABAIgEAGQgDAFgGADQgIAEgJABIgZABIgQAAQADAQAYAAQAOAAAIgCQAIgCAFgDIABAAIAAAJQAAAFgCAFQgDAFgFADQgFAEgHACQgJACgLAAQgOAAgLgEgAB/CrQgFAFgBAIIAPAAIALAAIAGgCQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAgBIABgDQAAgEgDgEQgEgEgJAAQgKAAgEAGgAgED5QgKgFgIgHQgHgIgEgKQgDgKAAgMQAAgMADgLQAEgLAIgIQAHgJALgEQAJgFAMAAQALAAAJADQAJADAIAFQAGAGAEAIQAEAJABAKQAAAIgEAGQgDAFgHADQgGAEgLABIgXABIgQAAQACAQAYAAQANAAAJgCQAIgCAFgDIACAAIAAAJQgBAFgCAFQgCAFgFADQgGAEgIACQgHACgNAAQgNAAgKgEgAADCrQgDAFAAAIIANAAIALAAIAGgCQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBIAAgDQAAgEgEgEQgDgEgJAAQgKAAgFAGgAhWD6QgNAAgGgGQgIgGAAgOIAAgwQABgIACgHQADgHAFgGQAFgFAIgDQAHgDAKAAQAOAAAHAFQAGAFAAAIIAAAOIgBAAIgGgCIgIgBQgGAAgFAEQgFAEAAAKIAABCgAiiD6QgPAAgFgFQgGgGAAgMIAAhMQAAgPAEgKQAEgKAGgFQAHgGAIgCQAHgDAJAAQAHAAAEACQAFABAEADQACADABAEQACAEAAAEIAAAJIgBAAIgIgCIgJgBQgGAAgFADQgEAEAAAFIAAANIAZAAIAAANQAAAGgFADQgEAEgHAAIgJAAIAABIgAEWAzQgJgCgEgDQgFgEgCgFQgCgFgBgGIAAgLIABAAQAGAEAJADQAHADAMAAQALAAAEgCQADgCAAgEIAAgEIgDgCIgIgCIgOgDQgPgCgHgFQgIgHAAgNQAAgKAEgHQAFgIAHgFQAHgFAIgCQAKgDAJAAQASAAALAHQALAHAAAMIAAAMIgBAAQgGgFgJgCQgIgDgMAAQgKAAgEADQgEACAAADIAAADIAEACIAHACIAOADQAOACAIAIQAJAGAAAOQAAARgNALQgNAKgWAAQgMAAgHgCgAk2AxQgKgEgJgHQgHgIgEgKQgFgKAAgKQAAgOAFgLQAEgMAIgHQAHgIAMgFQALgEANAAQALAAAKAEQALAEAHAIQAIAHAGALQAEAKAAANQAAAMgEALQgEAKgHAIQgJAIgLAEQgKAEgPAAQgMAAgKgEgAkngdQgDACgDADQgDAEgBAEQgCAFAAAGQAAAOAGAHQAFAIALAAQAIAAAFgIQAGgHgBgKQAAgPgFgIQgGgHgJAAQgEAAgEACgADPAyQgHgCgEgEQgGgFgCgHQgDgGAAgKIAAhGIAJAAIAOABQAGABADADQADADABAFQACAFAAAIIAAAmQAAAIADACQAEADAIAAIAFAAIAAALQgBAFgBAEIgFAFQgCACgFABIgIABQgIAAgGgCgAgGAyQgHgCgFgEQgHgFgCgHQgEgIAAgLIAAhDQAAgHAEgGQAEgGAFgEIAJgFQAFgDAEAAIAEAAIAAAbIAgAAIAAAOQAAADgBADIgFAFQgDADgDABIgGABIgOAAIAAAmQAAAGADADQADADAGAAIALgBIAGgCIABAAIAAAPQAAAHgGAGQgIAFgOAAQgGAAgGgCgACSAyQgHAAgEgBQgFgCgDgDQgCgDgBgEIAAgKIAAgjQAAgLgFgGQgEgFgIAAQgGAAgDABQgDACgDADQgCADAAAEIgBAKIAAA5IgOAAQgNAAgGgFQgGgGAAgMIAAh7IANAAQAMAAAGAGQAHAFAAALIAAAcQAEgGAHgFQAIgEANAAQAIAAAIADQAHADAGAGQAFAGAEAJQADAJABALIAABAgAhzAyQgMAAgFgFQgFgFAAgMIAAglQAAgLgEgFQgEgFgKAAQgIAAgFAFQgDAFAAALIAAA7IgOAAQgMAAgGgFQgHgFAAgMIAAglQAAgMAEgJQAEgKAHgHQAIgHAKgDQAKgEAOAAQAOAAAKAEQALADAGAHQAHAHADAKQADAKAAAMIAAA6gADDhBIgGgEQgDgDgCgDQgBgEAAgEQAAgEABgDQACgEADgCIAGgEQAEgCAEAAQAEAAADACQAFABACADIAEAGQACADAAAEQAAAEgCAEIgEAGQgCACgFACQgDABgEAAQgEAAgEgBgAnKh1QgGgEgBgKIAAgJIARgBQAIgBADgDQAEgDAEgHQgHgJgGgNQgGgNgGgOIgKgdQgFgOgBgLIAUAAIAHABIAGADIAGAFIACAHIAEANIAEAOIAFANIAFAMIAGgPIAFgRIAFgTIACgRIATAAQAIAAAEAEQAEAEAAAGIgBAMIgGARIgHATIgJATIgTAjQgHANgHAHQgGAGgHACQgGACgJAAQgJAAgHgFgACEieQgOgNAAgaIAAg9IAPAAQANAAAFAFQAGAFgBANIAAAnQAAAMAGAFQAFAEAHAAQAIAAAEgFQAEgFAAgNIAAg8IAQAAQALAAAGAFQAGAGAAAMIAAAnQAAANgEAKQgEAJgHAHQgHAGgLADQgLADgMAAQgbAAgOgNgAjFieQgOgNgBgaIAAg9IAPAAQANAAAGAFQAFAFAAANIAAAnQAAAMAFAFQAFAEAIAAQAHAAAFgFQAEgFAAgNIAAg8IAPAAQALAAAHAFQAFAGAAAMIAAAnQAAANgEAKQgEAJgGAHQgIAGgKADQgLADgNAAQgaAAgOgNgAk4iVQgLgEgHgHQgIgIgEgKQgFgKAAgMQAAgOAFgLQAEgMAIgHQAIgIALgFQALgEANAAQALAAAKAEQALAEAHAIQAIAHAGALQAEAKAAANQAAAOgEALQgEAKgIAIQgHAIgMAEQgLAEgOAAQgMAAgKgEgAkpjlQgDACgDADQgDAEgCAEQgBAFAAAGQAAAQAGAHQAGAIAKAAQAIAAAFgIQAGgHAAgMQgBgPgFgIQgGgHgKAAQgEAAgDACgAEZiVQgKgFgIgHQgHgHgEgLQgFgKAAgNQAAgMAFgLQADgKAIgIQAIgIALgFQALgFAPAAQAGAAAGACQAGACAFAEQAEADACAFQADAEAAAGIAAANIgBAAQgCgDgIgCQgHgCgHAAQgPAAgHAGQgIAHABALQgBAPAIAGQAHAHANAAQAIAAAHgCQAGgBAGgDIAAALQAAAGgDAEQgCAFgGAEQgEADgHADQgGACgHAAQgNAAgLgEgABDiUQgGgDgGgEQgEgFgEgHQgCgHAAgKIAAhwIANAAQANAAAFAGQAHAGgBAOIAABQQAAAIAEACQAFADAIAAIAIAAIAAANQAAAFgDAEQgBADgEACQgDACgFABIgJABQgHAAgIgCgAG6iTIgFgBIgFgDIgFgDQgJgLgIgMIgPgXIAAA0IgPAAQgLAAgGgGQgGgGAAgKIAAh+IAOAAQAHAAAEACQAFACADADIAEAHIABAIIAAA/IAOgUIAPgTIADgEIAFgCIAFgBIAHgBIAbAAIAAABIgIAJIgMANIgLAPIgKANIAKAPIALAOIAEAGIAFADIAEACIAGABQgBAJgGAFQgGAFgKAAIgFAAgAg0iUQgNAAgGgGQgIgGABgOIAAgwQgBgIADgHQADgHAFgGQAFgFAHgDQAIgDAJAAQAPAAAHAFQAGAFAAAIIAAAOIgBAAIgGgCIgHgBQgIAAgEAEQgFAEAAAKIAABCgAAwk9QgGgEAAgKIAAgJIAQgBQAIgBAEgDQAEgDADgHQgGgJgHgNQgGgNgFgOIgKgdQgFgOgBgLIATAAIAIABIAGADIAFAFIADAHIAEANIADAOIAGANIAEAMIAGgPIAGgRIAEgTIADgRIATAAQAIAAAEAEQADAEAAAGIgBAMIgFARIgHATIgJATIgTAjQgIANgHAHQgGAGgGACQgHACgJAAQgJAAgHgFgAgFlcQgMAAgHgGQgHgGAAgOIAAgwQAAgIACgHQAEgHAEgGQAGgFAHgDQAHgDAIAAQAPAAAGAFQAHAFAAAIIAAAOIgBAAIgHgCIgHgBQgHAAgEAEQgGAEAAAKIAABCgAhZlcIgJgBQgEgBgDgCIgFgGQgBgEAAgGIAAhWIgnAAIAAgNIABgHIAEgFQADgDADgCQAFgCAFAAIBgAAIAAAOIgBAGQgBAEgEACIgGAEQgEACgEAAIgUAAIAABqg");
	this.shape_1.setTransform(35.8,30.2);

	// Star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ah2pBIB2iCIB2CCICihMIA7CjICygJIgKCtICoA4IhNCcICGByIiGBzIBNCcIioA5IAKCtIiygKIg7CjIiihLIh2CBIh2iBIihBLIg7ijIiyAKIAKitIipg5IBOicIiGhzICGhyIhOicICpg4IgKitICyAJIA7ijg");
	this.shape_2.setTransform(32.2,30.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2357B").s().p("Ah2JCIihBMIg7ikIiyALIAKitIipg5IBOicIiGhzICGhxIhOicICpg5IgKitICyAJIA7ijIChBMIB2iCIB2CCICihMIA7CjICygJIgKCtICoA5IhNCcICGBxIiGBzIBNCcIioA5IAKCtIiygLIg7CkIiihMIh2CCg");
	this.shape_3.setTransform(32.2,30.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.5,-41.5,149.5,144.7);


(lib.click = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ASrjUQAAgLAGgIQAFgJAIgGQAGgEAHgDQAIgEAIAAIAGAAIAAAnIAvAAIAAAUQAAAFgDAEQgCAFgEADQgEADgFACQgFACgEAAIgUAAIAAA5QAAAJAFAEQAEAFAIAAQAKAAAGgBQAFgBAEgCIACAAIAAAWQAAAKgKAHQgKAIgVAAQgKAAgKgDQgLgDgIgGQgIgHgFgKQgFgLAAgRgASQifQAAAMgEAIQgFAIgKAFQgJAEgPACQgPACgUAAIgYAAQAFAXAiAAQAUAAAMgCQAMgDAHgFIACAAIAAANQAAAHgDAHQgEAHgHAGQgHAFgMADQgMADgRAAQgVAAgPgGQgQgHgLgLQgKgLgGgOQgFgPAAgRQAAgSAGgQQAGgQALgMQAKgMAPgHQAPgHATAAQAQAAANAFQAOAEAKAIQAKAIAFAMQAGAMAAAPgARdilQAAgGgFgFQgGgFgMAAQgPAAgGAIQgHAIgBALIAVAAQAKAAAGAAQAGgBADgCQAEgBABgCQABgCAAgDgANekRQAKAAAGADQAHADAEAEQAEAFACAFQABAGAAAGIAABbQAKgPAKgOQAKgPAMgNQADgDACgCQADgCADgBQADgCAFAAQAEgBAHAAIAmAAIAAACQgEAEgHAIQgIAJgJALQgJAKgIALQgJALgFAIQAHAKAHALQAHALAJAKQAEAFADADQAEADADACQADABADABQAEABAEACQgBANgJAHQgJAHgOAAQgEAAgDAAQgEgBgEgBQgEgCgEgCQgDgCgDgDQgNgPgLgRQgLgRgMgRIAABMIgWAAQgPAAgJgJQgJgJAAgPIAAi2gAR4CXIgSAAQgOAAgHgIQgHgIgBgNIgDhcIAaAAQANAAAIAIQAHAIAAAOgAQwBbQAAAGgCALQgDALgEAOQgFANgGAPQgGAOgGANQgRAggLATQgMATgJAJQgKAKgJADQgJACgNAAQgNAAgKgHQgJgHAAgNIAAgOIAYgBQALgBAFgFQAGgFAFgJQgJgNgJgTQgKgTgIgVQgIgVgGgUQgHgVgCgQIAdAAQAFAAAFACQAFACAEACQAFADADAEQADAFABAFQACAJADALQADAKADAKQAEAKADAJQAEAJADAHQAEgJAFgMQAEgMAEgNQAEgNACgOQADgNACgMIAaAAQAMAAAGAGQAFAFAAAKgARFDHQAAgHACgFQADgGAEgEQAEgEAGgDQAGgCAGAAQAGAAAGACQAGADAEAEQAEAEADAGQACAFAAAHQAAAGgCAGQgDAFgEAFQgEAEgGACQgGADgGAAQgGAAgGgDQgGgCgEgEQgEgFgDgFQgCgGAAgGgAMvilQgEgFgKgDQgKgDgLAAQgVAAgLAJQgLAKAAAQQAAAVALAKQALAJASAAQANAAAJgCQAJgDAHgEIABAAIAAARQAAAIgEAHQgEAHgGAFQgHAFgKADQgJADgLAAQgSAAgPgGQgPgGgLgKQgLgLgHgPQgGgQAAgSQAAgSAGgPQAGgPALgMQALgLARgHQAQgHAVAAQAKAAAIADQAIADAHAFQAGAFAEAHQADAGAAAIIAAAUgAJdiHQAAgWgJgLQgIgLgPAAQgGAAgFADQgFADgEAFQgEAFgCAHQgDAHAAAIQAAAXAJALQAIAKAPAAQANAAAIgLQAIgKAAgRgAHqiGQAAgUAGgQQAHgRALgLQAMgMAQgGQAQgGATAAQAQAAAPAGQAPAGALALQAMALAGAPQAHAPAAASQAAAUgGAQQgFAQgMALQgLALgQAGQgQAGgUAAQgSAAgPgGQgPgGgLgLQgLgKgHgPQgGgPAAgRgAMnA3QgEgCgIgBQgHgBgFAAQgKAAgGAFQgHAFAAAHIAAATIAlAAIAAAUQAAAIgHAFQgGAEgLAAIgNAAIAABqIgQAAQgUAAgJgIQgIgIAAgTIAAhtQAAgWAGgOQAFgOAKgJQAJgIAMgDQALgEAMAAQAKAAAHADQAHACAEAEQAFAEACAGQACAFAAAGIAAANgAIIBMQAAgLAFgIQAGgJAIgGQAFgEAIgDQAHgEAJAAIAFAAIAAAnIAvAAIAAAUQAAAFgCAEQgDAFgEADQgEADgEACQgFACgFAAIgUAAIAAA5QAAAJAFAEQAFAFAIAAQAKAAAFgBQAFgBAFgCIABAAIAAAWQAAAKgJAHQgKAIgWAAQgKAAgKgDQgKgDgIgGQgIgHgFgKQgFgLAAgRgAOLDPQAAAHgDAFQgEAFgFACQgFADgGACQgHABgGAAQgLAAgKgDQgKgEgHgGQgIgHgEgLQgFgKAAgOIAAiiIAUAAQASAAAJAJQAIAJAAAUIAAB0QAAALAGADQAGAEAMAAIAMAAgAHciwQgFgDgEAAQgEgBgGAAQgKAAgHAGQgHAGAAAOIAABgIgPAAQgSAAgKgJQgKgJAAgUIAAhFQAAgMAEgLQAEgKAHgIQAIgIALgEQAKgFAOAAQAVAAAJAIQAKAHAAALIAAAVgAEniwQgFgDgFAAQgEgBgGAAQgKAAgHAGQgGAGAAAOIAABgIgPAAQgSAAgKgJQgLgJAAgUIAAhFQAAgMAEgLQAEgKAIgIQAHgIALgEQALgFANAAQAVAAAKAIQAKAHAAALIAAAVgACniAQAAATgGAOQgGAOgLAJQgKAKgQAEQgPAEgSAAQgnAAgUgSQgVgTAAgnIAAhYIAWAAQASAAAIAHQAIAHAAATIAAA5QAAARAIAHQAHAGALAAQAKAAAHgHQAHgGAAgTIAAhYIAVAAQARAAAJAIQAJAHAAASgAEnDmQgLAAgHgDQgGgCgEgFQgEgEgBgGQgBgGAAgIIAAg1QAAgRgGgIQgGgIgMAAQgIAAgFACQgFADgDAEQgDAEgCAGQgBAHAAAIIAABWIgSAAQgUAAgJgIQgIgJAAgRIAAi1IASAAQARAAAJAIQAKAIAAAQIAAApQAGgKALgGQALgGASAAQANAAALAEQAKAFAJAJQAIAIAFANQAFANAAAQIAABggAHYAiQAAAGgDAFQgCAFgEADQgEAEgFACQgFACgGAAQgGAAgFgCQgGgCgEgEQgEgDgCgFQgCgFAAgGQAAgFACgGQACgFAEgDQAEgEAGgCQAFgCAGAAQAGAAAFACQAFACAEAEQAEADACAFQADAGAAAFgAH1DPQAAAHgDAFQgCAEgFADQgEADgGACQgGABgGAAQgLAAgKgDQgJgDgHgGQgHgGgEgKQgEgKAAgOIAAhpIANAAQAMAAAIACQAIACAFAEQAFAFACAHQACAHAAALIAAA7QAAAKAFAEQAFAEAMAAIAHAAgAi9iGQAAgUAHgQQAGgRAMgLQALgMAQgGQAQgGATAAQAQAAAPAGQAPAGAMALQALALAHAPQAHAPAAASQAAAUgGAQQgGAQgLALQgLALgQAGQgQAGgVAAQgRAAgPgGQgPgGgLgLQgMgKgGgPQgHgPAAgRgAhKiHQAAgWgIgLQgJgLgOAAQgGAAgFADQgFADgEAFQgEAFgDAHQgCAHAAAIQAAAXAIALQAJAKAOAAQANAAAIgLQAIgKAAgRgAjNjFQAAAGgCALQgDALgEAOQgFANgGAPQgGAOgGANQgRAggLATQgMATgJAJQgKA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");
	this.shape.setTransform(-55.2,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(201,20,133,0.984)").s().p("AOfETQgJgHAAgNIAAgOIAYgBQALgBAFgFQAGgFAFgJQgJgNgJgTQgKgTgIgVQgIgVgGgUQgHgVgCgQIAdAAQAFAAAFACIAJAEQAFADADAEQADAFABAFIAFAUIAGAUIAHATIAHAQIAJgVIAIgZQAEgNACgOIAFgZIAaAAQAMAAAGAGQAFAFAAAKQAAAGgCALIgHAZIgLAcIgMAbIgcAzQgMATgJAJQgKAKgJADQgJACgNAAQgNAAgKgHgAj3DnQgMgDgJgGQgKgGgHgJQgGgKAAgOQAAgaAUgOQAUgNArAAIAIAAIAAgHQAAgKgHgDQgIgDgRAAIgTABIgOAEIgKAFIgJAIIgBAAIAAgUQAAgHAEgHQADgHAJgGQAIgGAMgDQANgDARAAQAQAAAOAEQANAEAKAJQAJAIAFANQAGANAAASIAAAZQAAAVgEAPQgEAOgJAJQgJAIgPAEQgOADgWAAQgMAAgMgDgAjoCoQgHAEAAAIQAAAIAFAEQAFAEAMAAQAHAAAGgFQAFgEAAgLIAAgMIgLAAQgPAAgHAEgAr5DkQgPgHgLgLQgLgMgHgOQgGgPAAgQQAAgUAGgRQAFgQALgLQAKgLANgGQAOgGAQAAQAQAAAKAGQALAGAEAJIAAhIIAUAAQARAAAIAJQAJAJAAAVIAABcQAAAWgFAQQgEARgLALQgKALgRAGQgQAFgYAAQgSAAgPgGgArjBvQgFADgEAFQgEAFgCAIQgCAHAAAJQAAAYAJAKQAKAKAPAAQANAAAHgKQAGgJAAgTQAAgOgCgIQgDgJgEgFQgEgGgHgCQgGgCgHAAQgGAAgEADgAxnDnQgMgDgJgGQgKgGgHgJQgGgKAAgOQAAgaAUgOQAUgNArAAIAIAAIAAgHQAAgKgHgDQgIgDgRAAIgTABIgOAEIgKAFIgJAIIgBAAIAAgUQAAgHAEgHQADgHAJgGQAIgGAMgDQANgDARAAQAQAAAOAEQANAEAKAJQAJAIAFANQAGANAAASIAAAZQAAAVgEAPQgEAOgJAJQgJAIgPAEQgOADgWAAQgMAAgMgDgAxYCoQgHAEAAAIQAAAIAFAEQAFAEAMAAQAHAAAGgFQAFgEAAgLIAAgMIgLAAQgPAAgHAEgAAuDjQgPgGgLgKQgLgLgHgPQgEgQAAgSQAAgSAEgPQAGgPALgMQALgLARgHQAQgHAVAAQAKAAAIADQAIADAHAFQAGAFAEAHQADAGAAAIIAAAUIgBAAQgEgFgKgDQgKgDgLAAQgVAAgLAJQgLAKAAAQQAAAVALAKQALAJASAAQANAAAJgCQAJgDAHgEIABAAIAAARQAAAIgEAHQgEAHgGAFQgHAFgKADQgJADgLAAQgSAAgPgGgANSDlQgKgEgHgGQgIgHgEgLQgFgKAAgOIAAiiIAUAAQASAAAJAJQAIAJAAAUIAAB0QAAALAGADQAGAEAMAAIAMAAIAAAUQAAAHgDAFQgEAFgFACQgFADgGACIgNABQgLAAgKgDgAIsDlQgKgDgIgGQgIgHgFgKQgFgLAAgRIAAhjQAAgLAFgIQAGgJAIgGIANgHQAHgEAJAAIAFAAIAAAnIAvAAIAAAUQAAAFgCAEQgDAFgEADIgIAFQgFACgFAAIgUAAIAAA5QAAAJAFAEQAFAFAIAAIAPgBIAKgDIABAAIAAAWQAAAKgJAHQgKAIgWAAQgKAAgKgDgAHADlQgJgDgHgGQgHgGgEgKQgEgKAAgOIAAhpIANAAQAMAAAIACQAIACAFAEQAFAFACAHQACAHAAALIAAA7QAAAKAFAEQAFAEAMAAIAHAAIAAARQAAAHgDAFQgCAEgFADQgEADgGACIgMABQgLAAgKgDgAhRDlQgKgDgIgGQgIgHgFgKQgFgLAAgRIAAhjQAAgLAFgIQAGgJAIgGIANgHQAHgEAJAAIAFAAIAAAnIAvAAIAAAUQAAAFgCAEQgDAFgEADIgIAFQgFACgFAAIgUAAIAAA5QAAAJAFAEQAFAFAIAAIAPgBIAKgDIABAAIAAAWQAAAKgJAHQgKAIgWAAQgKAAgKgDgAl5DoQgLAAgFgDQgGgDgDgFIgIgOIgIgRIgHgSIgGgQIgGATIgJAVIgKAUQgFAKgFAGIgOAAQgJAAgGgCQgGgCgEgHQgJgNgIgRQgIgRgHgVQgHgUgFgVQgGgVgDgVIAdAAQAHAAAGACIAJAGIAGAHIACAIIAIAhQAFARAHASQAJgVAHgVQAGgVAFgVIAVAAQAGAAAFACQAFACAEADQAEADADAFQADAEABAFIADANIAFAPIAGARIAHAPIAHgSIAGgWIAGgYIAFgbIAZAAQANAAAGAHQAGAGAAAHIgBAHIgCAKIgDAKIgDAKIgJAaIgMAdIgNAcQgHANgHAJgARYDjQgGgCgEgEQgEgFgDgFQgCgGAAgGQAAgHACgFQADgGAEgEQAEgEAGgDQAGgCAGAAQAGAAAGACQAGADAEAEQAEAEADAGQACAFAAAHQAAAGgCAGQgDAFgEAFQgEAEgGACQgGADgGAAQgGAAgGgDgALoDmQgUAAgJgIQgIgIAAgTIAAhtQAAgWAGgOQAFgOAKgJQAJgIAMgDQALgEAMAAQAKAAAHADQAHACAEAEQAFAEACAGQACAFAAAGIAAANIgCAAQgEgCgIgBIgMgBQgKAAgGAFQgHAFAAAHIAAATIAlAAIAAAUQAAAIgHAFQgGAEgLAAIgNAAIAABqgAEnDmQgLAAgHgDQgGgCgEgFQgEgEgBgGIgBgOIAAg1QAAgRgGgIQgGgIgMAAQgIAAgFACQgFADgDAEQgDAEgCAGIgBAPIAABWIgSAAQgUAAgJgIQgIgJAAgRIAAi1IASAAQARAAAJAIQAKAIAAAQIAAApQAGgKALgGQALgGASAAQANAAALAEQAKAFAJAJQAIAIAFANQAFANAAAQIAABggAtdDmQgTAAgGgHQgHgHAAgTIAAg4QAAgQgGgHQgGgIgOAAQgMAAgGAIQgHAIAAAOIAABaIgSAAQgSAAgJgIQgKgHAAgSIAAg4QAAgRAGgOQAFgOALgKQAKgKAPgFQAPgFAUAAQAVAAAPAFQAPAFAJAKQAKAKAEAPQAFAOAAASIAABXgARmCXQgOAAgHgIQgHgIgBgNIgDhcIAaAAQANAAAIAIQAHAIAAAOIgEBbgAGwA7QgGgCgEgEQgEgDgCgFQgCgFAAgGQAAgFACgGQACgFAEgDQAEgEAGgCQAFgCAGAAQAGAAAFACIAJAGQAEADACAFQADAGAAAFQAAAGgDAFQgCAFgEADIgJAGQgFACgGAAQgGAAgFgCgAyIgJQgMgDgHgGQgIgGgDgHQgEgHAAgIIAAgRIACAAQAIAHANADQAOAEATAAQASAAAJgIQAJgJAAgNIAAgEIgBgFIAAgGQgCAIgJAGQgJAGgMAAQgPAAgNgEQgOgDgKgJQgJgJgGgNQgGgNAAgSQAAgRAHgOQAGgPALgKQAMgLAQgGQARgGAUAAQASAAAOAFQANAFAJAJQAIAKAFANQAEANAAAQIAAAqIAAAHIABAKIAAAIIAAAJQAAAOgGANQgGANgLAJQgLAKgPAFQgQAGgSAAQgSAAgMgEgAx6iqQgHAHAAAOQAAASAIAHQAHAIANAAQALAAAGgIQAGgJAAgNQAAgSgGgHQgGgHgNAAQgMAAgHAIgAlegNQgJgHAAgNIAAgOIAYgBQALgBAFgFQAGgFAFgJQgJgNgJgTQgKgTgIgVQgIgVgGgUQgHgVgCgQIAdAAQAFAAAFACIAJAEQAFADADAEQADAFABAFIAFAUIAGAUIAHATIAHAQIAJgVIAIgZQAEgNACgOIAFgZIAaAAQAMAAAGAGQAFAFAAAKQAAAGgCALIgHAZIgLAcIgMAbIgcAzQgMATgJAJQgKAKgJADQgJACgNAAQgNAAgKgHgAQkg8QgQgHgLgLQgKgLgGgOQgFgPAAgRQAAgSAGgQQAGgQALgMQAKgMAPgHQAPgHATAAQAQAAANAFQAOAEAKAIQAKAIAFAMQAGAMAAAPQAAAMgEAIQgFAIgKAFQgJAEgPACQgPACgUAAIgYAAQAFAXAiAAQAUAAAMgCQAMgDAHgFIACAAIAAANQAAAHgDAHQgEAHgHAGQgHAFgMADQgMADgRAAQgVAAgPgGgAQxitQgHAIgBALIAVAAIAQAAIAJgDQAEgBABgCQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgGgFgFQgGgFgMAAQgPAAgGAIgAIcg8QgPgGgLgLQgLgKgHgPQgGgPAAgRQAAgUAGgQQAHgRALgLQAMgMAQgGQAQgGATAAQAQAAAPAGQAPAGALALQAMALAGAPQAHAPAAASQAAAUgGAQQgFAQgMALQgLALgQAGQgQAGgUAAQgSAAgPgGgAIyiwQgFADgEAFQgEAFgCAHQgDAHAAAIQAAAXAJALQAIAKAPAAQANAAAIgLQAIgKAAgRQAAgWgJgLQgIgLgPAAQgGAAgFADgAAahIQgVgTAAgnIAAhYIAWAAQASAAAIAHQAIAHAAATIAAA5QAAARAIAHQAHAGALAAQAKAAAHgHQAHgGAAgTIAAhYIAVAAQARAAAJAIQAJAHAAASIAAA5QAAATgGAOQgGAOgLAJQgKAKgQAEQgPAEgSAAQgnAAgUgSgAiKg8QgPgGgLgLQgMgKgGgPQgHgPAAgRQAAgUAHgQQAGgRAMgLQALgMAQgGQAQgGATAAQAQAAAPAGQAPAGAMALQALALAHAPQAHAPAAASQAAAUgGAQQgGAQgLALQgLALgQAGQgQAGgVAAQgRAAgPgGgAh0iwQgFADgEAFQgEAFgDAHQgCAHAAAIQAAAXAIALQAJAKAOAAQANAAAIgLQAIgKAAgRQAAgWgIgLQgJgLgOAAQgGAAgFADgAorg8QgQgHgKgLQgLgLgFgOQgGgPAAgRQAAgSAGgQQAGgQALgMQALgMAPgHQAPgHASAAQAQAAAOAFQANAEAKAIQAKAIAGAMQAGAMAAAPQAAAMgFAIQgFAIgJAFQgKAEgOACQgPACgUAAIgYAAQAFAXAiAAQATAAANgCQAMgDAHgFIABAAIAAANQAAAHgDAHQgDAHgIAGQgHAFgMADQgLADgSAAQgUAAgQgGgAoeitQgGAIgCALIAWAAIAQAAIAJgDQADgBABgCQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgGgGgFQgFgFgNAAQgOAAgHAIgALcg9QgPgGgLgKQgLgLgHgPQgGgQAAgSQAAgSAGgPQAGgPALgMQALgLARgHQAQgHAVAAQAKAAAIADQAIADAHAFQAGAFAEAHQADAGAAAIIAAAUIgBAAQgEgFgKgDQgKgDgLAAQgVAAgLAJQgLAKAAAQQAAAVALAKQALAJASAAQANAAAJgCQAJgDAHgEIABAAIAAARQAAAIgEAHQgEAHgGAFQgHAFgKADQgJADgLAAQgSAAgPgGgATQg7QgLgDgIgGQgIgHgFgKQgFgLAAgRIAAhjQAAgLAGgIQAFgJAIgGIANgHQAIgEAIAAIAGAAIAAAnIAvAAIAAAUQAAAFgDAEQgCAFgEADIgJAFQgFACgEAAIgUAAIAAA5QAAAJAFAEQAEAFAIAAIAQgBIAJgDIACAAIAAAWQAAAKgKAHQgKAIgVAAQgKAAgKgDgAqqg7QgKgDgIgGQgIgHgFgKQgFgLAAgRIAAhjQAAgLAFgIQAGgJAIgGIANgHQAHgEAJAAIAFAAIAAAnIAvAAIAAAUQAAAFgCAEQgDAFgEADIgIAFQgFACgFAAIgUAAIAAA5QAAAJAFAEQAFAFAIAAIAPgBIAKgDIABAAIAAAWQAAAKgJAHQgKAIgWAAQgKAAgKgDgAsWg7QgJgDgHgGQgHgGgEgKQgEgKAAgOIAAhpIANAAQAMAAAIACQAIACAFAEQAFAFACAHQACAHAAALIAAA7QAAAKAFAEQAFAEAMAAIAHAAIAAARQAAAHgDAFQgCAEgFADQgEADgGACIgMABQgLAAgKgDgAPFg5IgIgCIgIgEIgGgFQgNgPgLgRIgXgiIAABMIgWAAQgPAAgJgJQgJgJAAgPIAAi2IAVAAQAKAAAGADQAHADAEAEQAEAFACAFIABAMIAABbIAUgdQAKgPAMgNIAFgFIAGgDIAIgCIALgBIAmAAIAAACIgLAMIgRAUIgRAVIgOATIAOAVQAHALAJAKIAHAIIAHAFIAGACIAIADQgBANgJAHQgJAHgOAAIgHAAgAGig6QgSAAgKgJQgKgJAAgUIAAhFQAAgMAEgLQAEgKAHgIQAIgIALgEQAKgFAOAAQAVAAAJAIQAKAHAAALIAAAVIgCAAQgFgDgEAAIgKgBQgKAAgHAGQgHAGAAAOIAABggADtg6QgSAAgKgJQgLgJAAgUIAAhFQAAgMAEgLQAEgKAIgIQAHgIALgEQALgFANAAQAVAAAKAIQAKAHAAALIAAAVIgCAAQgFgDgFAAIgKgBQgKAAgHAGQgGAGAAAOIAABggAtvg6QgTAAgGgHQgHgHAAgTIAAg4QAAgQgGgHQgGgIgOAAQgMAAgGAIQgHAIAAAOIAABaIgSAAQgSAAgJgIQgKgHAAgSIAAg4QAAgRAGgOQAFgOALgKQAKgKAPgFQAPgFAUAAQAVAAAPAFQAPAFAJAKQAKAKAEAPQAFAOAAASIAABXgAz1g6QgFAAgEgCQgFgCgEgEQgDgEgCgGQgDgGAAgHIAAipIAfAAIAJABIAIAFIAFAJQADAEAAAGIAACvgAsmjlQgGgCgEgEQgEgDgCgFQgCgFAAgGQAAgFACgGQACgFAEgDQAEgEAGgCQAFgCAGAAQAGAAAFACIAJAGQAEADACAFQADAGAAAFQAAAGgDAFQgCAFgEADIgJAGQgFACgGAAQgGAAgFgCg");
	this.shape_1.setTransform(-55.2,28.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-185.8,-0.7,261.3,58.6);


(lib.button_rocket1_ = function() {
	this.initialize();

	// Rockets_noMove
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEBEB").s().p("AjGNeQAAgBAAAAQAAAAAAgBQAAAAABgBQAAgBAAAAQAngjAmgqQCgi5BKkXQA8jeAJksQAEiFABkKIACkBIABgCIADgBQAFAAAAAEIgCCeIAAA/QAAC7gCBeIgBAwQgDCYgFBKQgUEqhODYQgsB9hDBuQhIBxhgBWIgCABQgDAAgCgDg");
	this.shape.setTransform(13,55,0.408,0.408);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FB7476").s().p("AgJACQgagFgfgMIAAgFQAbAIAgAGQAeAGArAGIgBAPQgxgLgZgIg");
	this.shape_1.setTransform(14,29.6,0.408,0.408);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EFEFEF","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#D3D3D3","#DBDBDB","#EFEFEF","#F6F6F6"],[0,0.039,0.122,0.318,0.557,0.812,0.878,0.976,1],-27.5,-1.1,57.4,2.8).s().p("AiOgHQgqgKgZgHIAMgCIA5AJQCIAVCTAEIBDABIhOASQiMgEiGgeg");
	this.shape_2.setTransform(18.8,17.7,0.408,0.408);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F87579").s().p("AgUAAIhEgHIAAgDQBjAKBPAGIgBAFIhtgLg");
	this.shape_3.setTransform(13.6,-59.4,0.408,0.408);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F87579").s().p("AgVABIhEgHIAAgDIABgCICzANIgDAFIAAAFIhtgLg");
	this.shape_4.setTransform(13.6,-59.4,0.408,0.408);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F1232A","#F4232A","#F8232A","#D82328","#C02327","#DF2329"],[0,0.055,0.251,0.482,0.639,1],-55.1,-1.7,53.6,3.2).s().p("AAAAVQjTgIicgRQhegLg5gKICYAPQCIAKDmAIQEeANDpgDQg5AEhfACQhDAChDAAQh2AAhzgFg");
	this.shape_5.setTransform(27.8,-59.2,0.408,0.408);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FC636C","#F14C4F","#D24B4D"],[0,0.408,1],-6.8,-0.5,57.5,4.1).s().p("AhZA4IABiCQBgAKBRAHIgFCEQhngKhGgJg");
	this.shape_6.setTransform(13.6,-56.8,0.408,0.408);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9383B").s().p("AgjhBIBDgCQAKAVAAATIgEBEQAAALgNAIQgNAIgPgBIgmABg");
	this.shape_7.setTransform(47.8,-55.7,0.408,0.408);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#E50B18","#E90B18","#ED0C19","#CD0814","#AE060F","#D20915"],[0,0.067,0.251,0.459,0.639,1],-53.5,-1.6,53.5,3.2).s().p("AnuArQgRgBgMgJQgMgIAAgMIADhEQABgSAKgSQHjA/I0gSQAKAVAAATIgEBEQAAALgNAIQgNAIgRgBQh1AEhwAAQmQAAligxg");
	this.shape_8.setTransform(27.7,-56.5,0.408,0.408);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FC636C","#F14C4F","#D24B4D"],[0,0.408,1],-30.7,-1.7,28,0.9).s().p("AjhEXIAAgDIGdoqQAOgUAFgEQAIgCALgBIkQJXIAAAMg");
	this.shape_9.setTransform(19.2,-71.1,0.408,0.408);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#C5383A","#BE383A","#B23739","#AB3739","#A93739","#BC373A"],[0,0.039,0.149,0.298,0.655,1],18.2,14.2,-120.2,-87.6).s().p("ADIFTIgTgzQgshjhgiOQhtibgzhQIh1i3QATAIAJAMIGrJBQATAZgBAcIgEBFQgBARgWAHg");
	this.shape_10.setTransform(39.9,-68.2,0.408,0.408);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#CD0814","#92040B","#B80711"],[0,0.004,0.133,0.251,0.4,0.639,1],-51.2,-2.6,53.7,2.2).s().p("AnuFJQgRAAgMgJQgMgJAAgLIADhGQACgdAVgXIHgoWQAUgXAnACQApACASAYIGtJBQATAZgBAcIgEBFQAAAMgNAHQgNAIgRgBQh1AEhwAAQmQAAligxg");
	this.shape_11.setTransform(27.7,-68.2,0.408,0.408);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FFFFFF","#FFFFFF","#FFFFFF","#EBEBEB","#D6D6D6","#DEDEDE","#EBEBEB"],[0,0.047,0.318,0.541,0.812,0.906,1],-22.7,-0.6,61,3.2).s().p("AipAMQgjgMgPgiIBEgQQCyAqDBAEIj0A3QhHgOhKgZg");
	this.shape_12.setTransform(16.6,18.7,0.408,0.408);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E3E3E3").s().p("AhZgvIC1AIIgDAsIi0Asg");
	this.shape_13.setTransform(16.2,-54.7,0.408,0.408);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhsOaIABhQICHggIgFCHIgXAFQgxgLg7gRgAhkIZICPgiIgHCHIiLAhgAhfDoICYgkIgGCHIiVAjgAhZhHICggmIgHCFIibAmgAhTl3ICogoIgGCHIilAngAhNqoICwgqIgHCHIisApgAhIu1IC1AJIgDAuIi0Arg");
	this.shape_14.setTransform(15.6,-17.9,0.408,0.408);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D70915").s().p("AhbAxIACh4IC1AJIgGCGQhMgHhlgQg");
	this.shape_15.setTransform(16.2,-53.7,0.408,0.408);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D4D3D1").s().p("AgQgdIAngKIgGBLIgnAEg");
	this.shape_16.setTransform(46.1,-52.2,0.408,0.408);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EBECEE").s().p("AhLLFIAngJIgLCIIgmAJgAgzGQIAogJIgLCIIgnAJgAgbBbIAngJIgLCIIgmAJgAgDjYIAogKIgLCIIgnAKgAAToNIAqgKIgKCIIgqAKgAAstCIAqgKIgLCIIgqAKg");
	this.shape_17.setTransform(43.6,-19.4,0.408,0.408);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#C3C3C3","#CDCDCD","#DADADA","#E1E1E1","#E3E3E3","#D7D7D7","#A2A2A2","#8D8D8D","#949494","#A9A9A9","#CACACA","#D1D1D1"],[0,0.027,0.078,0.149,0.318,0.38,0.671,0.812,0.855,0.914,0.988,1],-44.9,-1.2,44.7,2.9).s().p("ABVBSIGIhaIgHBMQisAOifAAIg2AAgAncAZIAChqIHGAVImYBeg");
	this.shape_18.setTransform(27.6,-53.5,0.408,0.408);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#DBDBDB","#EAEAEA","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#B3B3B3","#9E9E9E","#A6A6A6","#BABABA","#DBDBDB","#EBEBEB"],[0,0.035,0.086,0.153,0.318,0.42,0.686,0.812,0.851,0.906,0.973,1],-48.2,-0.5,41.6,3.6).s().p("AmuOUQglgNgOglINLjHIgLCIIqBCXQhJgPhDgXgAnkIzINnjOIgLCJItdDLgAngEDIN8jTIgLCIItzDQgAndgsIOSjXIgLCIIuJDTgAnalcIOnjcIgKCIIueDagAnWqMIO8jiIgLCIIuzDggAnTu5IHQAVInRBug");
	this.shape_19.setTransform(27.3,-18,0.408,0.408);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#C50813","#C40813","#B0060F","#90040B","#840309"],[0,0.314,0.494,0.82,1],-48,-1.2,47.3,3.2).s().p("AndAZIAChqIO5AsIgJBpQipAOiiAAQlBAAkmg5g");
	this.shape_20.setTransform(27.6,-53.5,0.408,0.408);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FC0D1B").s().p("AhsOYIAk9PIC1AJIhXdmQhCgNhAgTg");
	this.shape_21.setTransform(15.6,-17.8,0.408,0.408);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C2383A").s().p("AgPgcIAjgFIAAAIIgBABIAAAFIAAAAIgCAEIAAABIgBAFIAAAAIgCAEIAAABIgCAEIAAAAIgCACIAAABIgDAEIAAAAIgGAIIAAAAIgEAHIgQAMg");
	this.shape_22.setTransform(40.5,18.7,0.408,0.408);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#E8252B","#EB252B","#F8262D","#FC272E","#DC262B","#C1262A","#CA2529"],[0,0.016,0.141,0.251,0.569,0.808,1],-40.5,-1.2,40.3,2.5).s().p("AgBAiQiSgEiNgfQhHgQgrgQQArALBKALQCIAVCVAEQCCAECagMIB3gIQgsAHhKALQiBASh4AAIglAAg");
	this.shape_23.setTransform(24.7,17.5,0.408,0.408);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#DB0A16","#E30B17","#F00C19","#F40C1A","#D40915","#AE060F","#B80711"],[0,0.043,0.153,0.251,0.525,0.808,1],-44.9,-1.2,49,3).s().p("AlmAJQgagJgQgVQgPgWAAgcIAAgBQF/BqHAhHIAAAEQgCAbgSATQgSAVgbAFQiiAiiXAAQjPAAi9hAg");
	this.shape_24.setTransform(24.4,18.9,0.408,0.408);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BB373A").s().p("AAzuaIApACIiNbxQgCAVgLARQgLARgSAKg");
	this.shape_25.setTransform(43.4,-17.5,0.408,0.408);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#CD0814","#92040B","#B80711"],[0,0.004,0.133,0.251,0.467,0.808,1],-50,-1.1,46.6,3.3).s().p("AmuOFQgZgJgQgXQgQgXABgbIAU73IO5AsIiPbxQgCAbgSAUQgSAVgaAGQiiAiiWAAQjQAAi+hAg");
	this.shape_26.setTransform(27.3,-17.5,0.408,0.408);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DA5557").s().p("AhGAbIAChXICLAGIgFBzQhGgNhCgVg");
	this.shape_27.setTransform(14.3,21,0.408,0.408);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AE4345").s().p("AgcgrIA+ADIgGBDQgLAHgNADIglAHg");
	this.shape_28.setTransform(37.7,21.4,0.408,0.408);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#C10712","#CC0814","#D10915","#B90711","#9A040C","#870309","#800308","#A2050D"],[0,0.125,0.251,0.369,0.549,0.702,0.808,1],-36.7,-0.8,36.3,2.5).s().p("AlQALQgRgFgLgJIABhEILYAiIgGBDQgLAHgNADQiZAgiPAAQjEAAizg9g");
	this.shape_29.setTransform(24.2,21.3,0.408,0.408);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FA5658").s().p("AAhAqIgBAAIgQgEIgQgEIAAAAIgOgEIgBgBIgPgEIgCgBIgPgEIgCgBIgSgGIADghIAAgcQBAAVBEANIgDA/g");
	this.shape_30.setTransform(13.9,30.8,0.408,0.408);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D94446").s().p("AgbAFIACgZIAagHQARgDANgKIgBATQgCAVgPARQgOATgWAEIgHACIADglg");
	this.shape_31.setTransform(37.1,30.8,0.408,0.408);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DD5E60").s().p("AgZACQAggEAUgFQgUAHghAIg");
	this.shape_32.setTransform(37.1,29.6,0.408,0.408);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#F40E1B","#F9141F","#FC1722","#F91721","#DA111B","#C70E17","#C00C15","#E00D19"],[0,0.11,0.251,0.275,0.494,0.678,0.808,1],-35.3,-1,35,2.2).s().p("AgBAmQiIgEhzgiQgogKghgPIgZgNQAlARA/ANQBrAWCPAFQB8AEB8gPQBAgIAngJQglANhAANQhoAWhrAAIgogBg");
	this.shape_33.setTransform(23.9,29.7,0.408,0.408);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#E50B18","#EB0B19","#F80D1B","#FC0D1B","#EA0B18","#CB0814","#B80711","#B10610","#D20915"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-35.6,-0.8,36.1,2.4).s().p("AkzAQQgWgHgNgSQgOgTABgYIAAgSQAMAMAQAGQEsBjFhhIQARgDAOgLIgCAUQgCAVgPARQgPASgXAFQiLAdiCAAQiwAAiig3g");
	this.shape_34.setTransform(23.8,30.7,0.408,0.408);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F15658").s().p("AhGCNIgDgBIACgjIAGkYICLAHIgQFXQg/gMhBgWg");
	this.shape_35.setTransform(14.2,25.6,0.408,0.408);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C24345").s().p("AgkB5IAOkWIA+ADIgUD3QgCAXgPASQgNASgWAEIgIACIAEglg");
	this.shape_36.setTransform(37.5,26,0.408,0.408);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#CB0814","#AC060F","#99040C","#92040B","#B80711"],[0,0.004,0.133,0.251,0.404,0.569,0.71,0.808,1],-36.8,-0.8,36.5,2.5).s().p("Ak8CEQgXgHgNgUQgNgTAAgYIADj4ILYAiIgUD3QgCAXgPARQgQASgWAFQiLAdiCAAQixAAihg3g");
	this.shape_37.setTransform(24.2,26,0.408,0.408);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E27B7C").s().p("AgqCGIABgeIAAheQABg7AJgcQAFgSAMgVQANgXAKgKIAYABQAMASgCBBQgCAjgEAyIgGCCQgqgIgfgIg");
	this.shape_38.setTransform(17.1,29.1,0.408,0.408);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A93739").s().p("AgXBxIADhdQABg8AFgbQAEgTAHgVQAFgYAGgKIANABQAGASgDBBQgBAigEAzIgFBrIgmAHg");
	this.shape_39.setTransform(32.5,29.4,0.408,0.408);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#C10712","#CC0814","#D10915","#B20610","#97040C","#860309","#800308","#A2050D"],[0,0.125,0.251,0.396,0.557,0.702,0.808,1],-23.7,-0.5,23.4,1.6).s().p("AjwB5IALkWIHVAVIgPETQhoAThiAAQiIAAh/glg");
	this.shape_40.setTransform(23.9,29.3,0.408,0.408);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FC9495").s().p("AgigGIAAgGQAiAKAkACIgBANQgmgIgfgLg");
	this.shape_41.setTransform(16.5,45.4,0.408,0.408);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FC7B7D").s().p("AADAdIgRgGIgVgHIACgyQAjAKAiAHIgCA1g");
	this.shape_42.setTransform(16.4,46.4,0.408,0.408);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D4383B").s().p("AgQgUIAQgDQAKgCAIgHIgBAaQgCATgPANQgHAFgKABIgBABg");
	this.shape_43.setTransform(31.7,46.4,0.408,0.408);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DD5E60").s().p("AgNAAIAcgEIgdAIg");
	this.shape_44.setTransform(31.6,45.3,0.408,0.408);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#F4101C","#F91621","#FC1A23","#FA1923","#DB131C","#C81018","#C10F17","#E00F1A"],[0,0.11,0.251,0.271,0.49,0.678,0.808,1],-22.7,-0.8,22.6,1.3).s().p("AgdAVQg+gEgngHQg3gKgogXQAxARA9AGQAsAEBGADIAWABIBLgBIBbgIIAngGIgmAKQgZAHgbAFIgSADQgVADgfABIg0ACg");
	this.shape_45.setTransform(23,45.5,0.408,0.408);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#E50B18","#EB0B19","#F80D1B","#FC0D1B","#EA0B18","#CB0814","#B80711","#B10610","#D20915"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-23.8,-0.9,23.3,1.3).s().p("AjGAOQgOgFgJgKQgJgNABgPIAAgUQAEAEAHABQDFBCDpgvQAKgCAJgHIgCAaQgBANgKALQgKAMgOADQhaAThUAAQhyAAhogkg");
	this.shape_46.setTransform(23.1,46.4,0.408,0.408);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F47B7C").s().p("AgvEdIALlOIAAhdQABg+AJgbQAFgTAMgUQALgXAMgKIAYAAQAMASgCBBQgCAjgEA1IgUG1QgjgJgigLg");
	this.shape_47.setTransform(16.9,35.4,0.408,0.408);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BE383A").s().p("AgRgmIADhdQABg+AFgbQAEgTAFgVQAHgYAGgKIANABQAGASgDBBQgBAigEA1IgUF4QgBAPgIAMQgKALgPADIgBABg");
	this.shape_48.setTransform(32.2,35.7,0.408,0.408);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#EA0B18","#C40813","#A9050E","#98040C","#92040B","#B80711"],[0,0.004,0.133,0.251,0.267,0.427,0.576,0.71,0.808,1],-24.6,-0.6,23.6,1.6).s().p("AjVEXQgOgFgJgNQgJgMABgQIAToiIHWAVIgfIiQgBAPgKAMQgKALgOADQhaAThUAAQhxAAhpgjg");
	this.shape_49.setTransform(23.7,35.6,0.408,0.408);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E07172").s().p("AgKAhIADhCIASABIgDBDg");
	this.shape_50.setTransform(22.4,48.6,0.408,0.408);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#6D0206","#8B040A","#A9060E","#BF0712","#CC0814","#D10915","#CC0814","#BE0712","#A6050E","#860309","#800308"],[0,0.082,0.184,0.286,0.38,0.467,0.576,0.702,0.835,0.976,1],-5.8,-0.2,5.1,0.3).s().p("AgzENIAZocIBOAEIgZIbIgPAAQggAAgfgDg");
	this.shape_51.setTransform(23.3,38.9,0.408,0.408);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F37173").s().p("Ag2PuIBa/bIATABIhafbg");
	this.shape_52.setTransform(20.6,88.3,0.408,0.408);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#7B0308","#810308","#A7050E","#C60813","#DC0A16","#E90B18","#ED0C19","#E80B18","#DA0A16","#C30812","#A3050D","#92040B"],[0,0.012,0.11,0.204,0.298,0.384,0.467,0.569,0.686,0.812,0.941,1],5.2,0.3,-6.5,-0.2).s().p("AhsXxMACJgvlIBQADMgCJAvmg");
	this.shape_53.setTransform(22,67.2,0.408,0.408);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C7C7C7").s().p("AhRFgQgBAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQASgRANgPQA/hLAfhyQAYhZAEh6QABg2ABhsIABhpIAAgCIADgBQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIgBBaIgBBzIAAATQgBA/gCAeQgJB5gfBYQgTA0gaAsQgeAugmAjIgDACQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_54.setTransform(13,55);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#969696").s().p("AhSFiQgDgEAEgDQAPgOAPgRQBAhLAehxQAWhTAFhtIABgTIAChuIAAhtIABgwQAAgGAFABQAGAAgBAFIAAAwIAAAQIgBCNIgBAzIAAAFIgBAVIgBASIgBARQgIB4ggBZQgnBthKBGIgEABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgABMlhIAAADIgBBoQgBBtgBA2QgEB6gYBZQgfByg/BLQgNAOgSARQgBABAAAAQAAAAAAABQgBAAAAABQABAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAAAAAIADgBQAmgjAeguQAagsATg0QAfhYAJh5QACgfABg+IAAgTIABhzIABhaQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAIgDABg");
	this.shape_55.setTransform(13,55);

	this.addChild(this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.5,-83.6,45.1,213.1);


(lib.Rocket1_sparks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 15
	this.instance = new lib.sparks();
	this.instance.setTransform(21.6,27.4,0.747,0.747,45,0,0,16.1,16.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(6));

	// Layer 14
	this.instance_1 = new lib.sparks();
	this.instance_1.setTransform(16.6,39.4,0.521,0.521,45,0,0,16.1,16.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(4));

	// Layer 13
	this.instance_2 = new lib.sparks();
	this.instance_2.setTransform(10.1,38.4,0.649,0.649,45,0,0,16.1,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},4).to({_off:true},1).wait(10));

	// Layer 12
	this.instance_3 = new lib.sparks();
	this.instance_3.setTransform(15.1,33.9,0.401,0.401,0,0,0,16.1,16.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(6));

	// Layer 11
	this.instance_4 = new lib.sparks();
	this.instance_4.setTransform(6.1,31.4,0.621,0.621,75,0,0,16.1,16.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({alpha:0},4).wait(1));

	// Layer 10
	this.instance_5 = new lib.sparks();
	this.instance_5.setTransform(13.1,26.9,0.585,0.585,0,0,0,16.1,16.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(2));

	// Layer 9
	this.instance_6 = new lib.sparks();
	this.instance_6.setTransform(11.2,6.5,0.691,0.691,60,0,0,16.1,16.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(8));

	// Layer 8
	this.instance_7 = new lib.sparks();
	this.instance_7.setTransform(6.2,21.4,0.778,0.778,60,0,0,16.1,16.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(6));

	// Layer 7
	this.instance_8 = new lib.sparks();
	this.instance_8.setTransform(6.1,11.4,0.677,0.677,0,0,0,16.1,16.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_9 = new lib.sparks();
	this.instance_9.setTransform(16.1,16.4,1,1,0,0,0,16.1,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:0},4).to({_off:true},1).wait(10));

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F38640","#FFCD3F"],[0,1],0,28.3,0,-28.3).s().p("AghAEIgWhQQgKgqgCglQgEg5ARgsQAIgTAOgSIADAAQgLAOgIAXQgOAqADA0QABAgAJAkQAFAVANAvQAbBiAEB9QAFh8AahgIAShEQAKglABgiQAEg0gPgqQgIgWgLgPIADAAQAOATAIASQARAsgEA5QgCAngLAqIgWBQQgdB4gECoQgDiogeh6g");
	this.shape.setTransform(13.1,37.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F79E4C","#FFD86B"],[0,1],0,23.7,0,-23.6).s().p("AgfAVQgNgtgFgVQgJgkgCggQgDg1APgqQAIgWALgPIADAAQgJANgHAXQgMApACAwQABAbAHAdIAQA3QAXBOAFBPQAFhOAXhLIAQg2QAHgeABgfQADgwgMgoQgHgYgJgNIADAAQALAQAIAVQAPAqgEA1QgCAigJAlIgSBCQgaBigFB8QgEh9gbhkg");
	this.shape_1.setTransform(13.1,32.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFD175","#FFEEC3"],[0,1],0,14.3,0,-14.3).s().p("AgaA3QgRg0gBgfQgCgtAKgnQAHgaAGgJIAvAAQAHAKAGAZQAKAmgCAuQgCAngRAxIgPAoQgIAZgDAXQgEgfgWg+g");
	this.shape_2.setTransform(13.1,22.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FBB75F","#FFE396"],[0,1],0,19,0,-18.9).s().p("AgcAmIgPg1QgHgdgCgbQgCgwANgpQAHgXAIgNIAEAAQgHAJgHAaQgJAnABAtQABAhASAyQAVA/AEAeQAEgWAIgZIAOgpQARgvACgpQADgtgKgnQgHgZgHgKIADAAQAJAMAIAYQAMAogDAxQgCAfgHAeIgPA0QgXBNgGBOQgEhPgYhQg");
	this.shape_3.setTransform(13.1,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,0,37,66.8);


(lib.rocket1_flight = function() {
	this.initialize();

	// rocket
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FB7476").s().p("AgJACQgagFgfgMIAAgFQAbAIAgAGQAeAGArAGIgBAPQgxgLgZgIg");
	this.shape.setTransform(8.1,113.2,0.408,0.408);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EFEFEF","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#D3D3D3","#DBDBDB","#EFEFEF","#F6F6F6"],[0,0.039,0.122,0.318,0.557,0.812,0.878,0.976,1],-27.5,-1.1,57.4,2.8).s().p("AiOgHQgqgKgZgHIAMgCIA5AJQCIAVCTAEIBDABIhOASQiMgEiGgeg");
	this.shape_1.setTransform(12.9,101.4,0.408,0.408);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F87579").s().p("AgUAAIhEgHIAAgDQBjAKBPAGIgBAFIhtgLg");
	this.shape_2.setTransform(7.7,24.2,0.408,0.408);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F87579").s().p("AgVABIhEgHIAAgDIABgCICzANIgDAFIAAAFIhtgLg");
	this.shape_3.setTransform(7.8,24.2,0.408,0.408);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F1232A","#F4232A","#F8232A","#D82328","#C02327","#DF2329"],[0,0.055,0.251,0.482,0.639,1],-55.1,-1.7,53.6,3.2).s().p("AAAAVQjTgIicgRQhegLg5gKICYAPQCIAKDmAIQEeANDpgDQg5AEhfACQhDAChDAAQh2AAhzgFg");
	this.shape_4.setTransform(21.9,24.5,0.408,0.408);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FC636C","#F14C4F","#D24B4D"],[0,0.408,1],-6.8,-0.5,57.5,4.1).s().p("AhZA4IABiCQBgAKBRAHIgFCEQhngKhGgJg");
	this.shape_5.setTransform(7.7,26.9,0.408,0.408);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9383B").s().p("AgjhBIBDgCQAKAVAAATIgEBEQAAALgNAIQgNAIgPgBIgmABg");
	this.shape_6.setTransform(42,28,0.408,0.408);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E50B18","#E90B18","#ED0C19","#CD0814","#AE060F","#D20915"],[0,0.067,0.251,0.459,0.639,1],-53.5,-1.6,53.5,3.2).s().p("AnuArQgRgBgMgJQgMgIAAgMIADhEQABgSAKgSQHjA/I0gSQAKAVAAATIgEBEQAAALgNAIQgNAIgRgBQh1AEhwAAQmQAAligxg");
	this.shape_7.setTransform(21.8,27.1,0.408,0.408);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FC636C","#F14C4F","#D24B4D"],[0,0.408,1],-30.7,-1.7,28,0.9).s().p("AjhEXIAAgDIGdoqQAOgUAFgEQAIgCALgBIkQJXIAAAMg");
	this.shape_8.setTransform(13.3,12.5,0.408,0.408);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#C5383A","#BE383A","#B23739","#AB3739","#A93739","#BC373A"],[0,0.039,0.149,0.298,0.655,1],18.2,14.2,-120.2,-87.6).s().p("ADIFTIgTgzQgshjhgiOQhtibgzhQIh1i3QATAIAJAMIGrJBQATAZgBAcIgEBFQgBARgWAHg");
	this.shape_9.setTransform(34,15.4,0.408,0.408);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#CD0814","#92040B","#B80711"],[0,0.004,0.133,0.251,0.4,0.639,1],-51.2,-2.6,53.7,2.2).s().p("AnuFJQgRAAgMgJQgMgJAAgLIADhGQACgdAVgXIHgoWQAUgXAnACQApACASAYIGtJBQATAZgBAcIgEBFQAAAMgNAHQgNAIgRgBQh1AEhwAAQmQAAligxg");
	this.shape_10.setTransform(21.8,15.5,0.408,0.408);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFFFF","#FFFFFF","#FFFFFF","#EBEBEB","#D6D6D6","#DEDEDE","#EBEBEB"],[0,0.047,0.318,0.541,0.812,0.906,1],-22.7,-0.6,61,3.2).s().p("AipAMQgjgMgPgiIBEgQQCyAqDBAEIj0A3QhHgOhKgZg");
	this.shape_11.setTransform(10.8,102.4,0.408,0.408);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E3E3E3").s().p("AhZgvIC1AIIgDAsIi0Asg");
	this.shape_12.setTransform(10.4,29,0.408,0.408);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhsOaIABhQICHggIgFCHIgXAFQgxgLg7gRgAhkIZICPgiIgHCHIiLAhgAhfDoICYgkIgGCHIiVAjgAhZhHICggmIgHCFIibAmgAhTl3ICogoIgGCHIilAngAhNqoICwgqIgHCHIisApgAhIu1IC1AJIgDAuIi0Arg");
	this.shape_13.setTransform(9.7,65.7,0.408,0.408);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D70915").s().p("AhbAxIACh4IC1AJIgGCGQhMgHhlgQg");
	this.shape_14.setTransform(10.4,29.9,0.408,0.408);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D4D3D1").s().p("AgQgdIAngKIgGBLIgnAEg");
	this.shape_15.setTransform(40.2,31.4,0.408,0.408);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EBECEE").s().p("AhLLFIAngJIgLCIIgmAJgAgzGQIAogJIgLCIIgnAJgAgbBbIAngJIgLCIIgmAJgAgDjYIAogKIgLCIIgnAKgAAToNIAqgKIgKCIIgqAKgAAstCIAqgKIgLCIIgqAKg");
	this.shape_16.setTransform(37.7,64.3,0.408,0.408);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#C3C3C3","#CDCDCD","#DADADA","#E1E1E1","#E3E3E3","#D7D7D7","#A2A2A2","#8D8D8D","#949494","#A9A9A9","#CACACA","#D1D1D1"],[0,0.027,0.078,0.149,0.318,0.38,0.671,0.812,0.855,0.914,0.988,1],-44.9,-1.2,44.7,2.9).s().p("ABVBSIGIhaIgHBMQisAOifAAIg2AAgAncAZIAChqIHGAVImYBeg");
	this.shape_17.setTransform(21.7,30.2,0.408,0.408);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#DBDBDB","#EAEAEA","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#B3B3B3","#9E9E9E","#A6A6A6","#BABABA","#DBDBDB","#EBEBEB"],[0,0.035,0.086,0.153,0.318,0.42,0.686,0.812,0.851,0.906,0.973,1],-48.2,-0.5,41.6,3.6).s().p("AmuOUQglgNgOglINLjHIgLCIIqBCXQhJgPhDgXgAnkIzINnjOIgLCJItdDLgAngEDIN8jTIgLCIItzDQgAndgsIOSjXIgLCIIuJDTgAnalcIOnjcIgKCIIueDagAnWqMIO8jiIgLCIIuzDggAnTu5IHQAVInRBug");
	this.shape_18.setTransform(21.4,65.6,0.408,0.408);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#C50813","#C40813","#B0060F","#90040B","#840309"],[0,0.314,0.494,0.82,1],-48,-1.2,47.3,3.2).s().p("AndAZIAChqIO5AsIgJBpQipAOiiAAQlBAAkmg5g");
	this.shape_19.setTransform(21.8,30.2,0.408,0.408);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FC0D1B").s().p("AhsOYIAk9PIC1AJIhXdmQhCgNhAgTg");
	this.shape_20.setTransform(9.7,65.8,0.408,0.408);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C2383A").s().p("AgPgcIAjgFIAAAIIgBABIAAAFIAAAAIgCAEIAAABIgBAFIAAAAIgCAEIAAABIgCAEIAAAAIgCACIAAABIgDAEIAAAAIgGAIIAAAAIgEAHIgQAMg");
	this.shape_21.setTransform(34.6,102.4,0.408,0.408);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#E8252B","#EB252B","#F8262D","#FC272E","#DC262B","#C1262A","#CA2529"],[0,0.016,0.141,0.251,0.569,0.808,1],-40.5,-1.2,40.3,2.5).s().p("AgBAiQiSgEiNgfQhHgQgrgQQArALBKALQCIAVCVAEQCCAECagMIB3gIQgsAHhKALQiBASh4AAIglAAg");
	this.shape_22.setTransform(18.9,101.1,0.408,0.408);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#DB0A16","#E30B17","#F00C19","#F40C1A","#D40915","#AE060F","#B80711"],[0,0.043,0.153,0.251,0.525,0.808,1],-44.9,-1.2,49,3).s().p("AlmAJQgagJgQgVQgPgWAAgcIAAgBQF/BqHAhHIAAAEQgCAbgSATQgSAVgbAFQiiAiiXAAQjPAAi9hAg");
	this.shape_23.setTransform(18.5,102.5,0.408,0.408);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BB373A").s().p("AAzuaIApACIiNbxQgCAVgLARQgLARgSAKg");
	this.shape_24.setTransform(37.6,66.1,0.408,0.408);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#CD0814","#92040B","#B80711"],[0,0.004,0.133,0.251,0.467,0.808,1],-50,-1.1,46.6,3.3).s().p("AmuOFQgZgJgQgXQgQgXABgbIAU73IO5AsIiPbxQgCAbgSAUQgSAVgaAGQiiAiiWAAQjQAAi+hAg");
	this.shape_25.setTransform(21.4,66.1,0.408,0.408);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DA5557").s().p("AhGAbIAChXICLAGIgFBzQhGgNhCgVg");
	this.shape_26.setTransform(8.4,104.6,0.408,0.408);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AE4345").s().p("AgcgrIA+ADIgGBDQgLAHgNADIglAHg");
	this.shape_27.setTransform(31.9,105.1,0.408,0.408);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#C10712","#CC0814","#D10915","#B90711","#9A040C","#870309","#800308","#A2050D"],[0,0.125,0.251,0.369,0.549,0.702,0.808,1],-36.7,-0.8,36.3,2.5).s().p("AlQALQgRgFgLgJIABhEILYAiIgGBDQgLAHgNADQiZAgiPAAQjEAAizg9g");
	this.shape_28.setTransform(18.4,104.9,0.408,0.408);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FA5658").s().p("AAhAqIgBAAIgQgEIgQgEIAAAAIgOgEIgBgBIgPgEIgCgBIgPgEIgCgBIgSgGIADghIAAgcQBAAVBEANIgDA/g");
	this.shape_29.setTransform(8,114.4,0.408,0.408);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D94446").s().p("AgbAFIACgZIAagHQARgDANgKIgBATQgCAVgPARQgOATgWAEIgHACIADglg");
	this.shape_30.setTransform(31.2,114.4,0.408,0.408);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DD5E60").s().p("AgZACQAggEAUgFQgUAHghAIg");
	this.shape_31.setTransform(31.3,113.2,0.408,0.408);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#F40E1B","#F9141F","#FC1722","#F91721","#DA111B","#C70E17","#C00C15","#E00D19"],[0,0.11,0.251,0.275,0.494,0.678,0.808,1],-35.3,-1,35,2.2).s().p("AgBAmQiIgEhzgiQgogKghgPIgZgNQAlARA/ANQBrAWCPAFQB8AEB8gPQBAgIAngJQglANhAANQhoAWhrAAIgogBg");
	this.shape_32.setTransform(18,113.3,0.408,0.408);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#E50B18","#EB0B19","#F80D1B","#FC0D1B","#EA0B18","#CB0814","#B80711","#B10610","#D20915"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-35.6,-0.8,36.1,2.4).s().p("AkzAQQgWgHgNgSQgOgTABgYIAAgSQAMAMAQAGQEsBjFhhIQARgDAOgLIgCAUQgCAVgPARQgPASgXAFQiLAdiCAAQiwAAiig3g");
	this.shape_33.setTransform(18,114.4,0.408,0.408);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F15658").s().p("AhGCNIgDgBIACgjIAGkYICLAHIgQFXQg/gMhBgWg");
	this.shape_34.setTransform(8.3,109.3,0.408,0.408);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C24345").s().p("AgkB5IAOkWIA+ADIgUD3QgCAXgPASQgNASgWAEIgIACIAEglg");
	this.shape_35.setTransform(31.6,109.7,0.408,0.408);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#CB0814","#AC060F","#99040C","#92040B","#B80711"],[0,0.004,0.133,0.251,0.404,0.569,0.71,0.808,1],-36.8,-0.8,36.5,2.5).s().p("Ak8CEQgXgHgNgUQgNgTAAgYIADj4ILYAiIgUD3QgCAXgPARQgQASgWAFQiLAdiCAAQixAAihg3g");
	this.shape_36.setTransform(18.3,109.6,0.408,0.408);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E27B7C").s().p("AgqCGIABgeIAAheQABg7AJgcQAFgSAMgVQANgXAKgKIAYABQAMASgCBBQgCAjgEAyIgGCCQgqgIgfgIg");
	this.shape_37.setTransform(11.3,112.7,0.408,0.408);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A93739").s().p("AgXBxIADhdQABg8AFgbQAEgTAHgVQAFgYAGgKIANABQAGASgDBBQgBAigEAzIgFBrIgmAHg");
	this.shape_38.setTransform(26.6,113.1,0.408,0.408);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#C10712","#CC0814","#D10915","#B20610","#97040C","#860309","#800308","#A2050D"],[0,0.125,0.251,0.396,0.557,0.702,0.808,1],-23.7,-0.5,23.4,1.6).s().p("AjwB5IALkWIHVAVIgPETQhoAThiAAQiIAAh/glg");
	this.shape_39.setTransform(18,112.9,0.408,0.408);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FC9495").s().p("AgigGIAAgGQAiAKAkACIgBANQgmgIgfgLg");
	this.shape_40.setTransform(10.6,129,0.408,0.408);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FC7B7D").s().p("AADAdIgRgGIgVgHIACgyQAjAKAiAHIgCA1g");
	this.shape_41.setTransform(10.6,130,0.408,0.408);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D4383B").s().p("AgQgUIAQgDQAKgCAIgHIgBAaQgCATgPANQgHAFgKABIgBABg");
	this.shape_42.setTransform(25.9,130,0.408,0.408);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DD5E60").s().p("AgNAAIAcgEIgdAIg");
	this.shape_43.setTransform(25.8,129,0.408,0.408);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#F4101C","#F91621","#FC1A23","#FA1923","#DB131C","#C81018","#C10F17","#E00F1A"],[0,0.11,0.251,0.271,0.49,0.678,0.808,1],-22.7,-0.8,22.6,1.3).s().p("AgdAVQg+gEgngHQg3gKgogXQAxARA9AGQAsAEBGADIAWABIBLgBIBbgIIAngGIgmAKQgZAHgbAFIgSADQgVADgfABIg0ACg");
	this.shape_44.setTransform(17.2,129.1,0.408,0.408);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#E50B18","#EB0B19","#F80D1B","#FC0D1B","#EA0B18","#CB0814","#B80711","#B10610","#D20915"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-23.8,-0.9,23.3,1.3).s().p("AjGAOQgOgFgJgKQgJgNABgPIAAgUQAEAEAHABQDFBCDpgvQAKgCAJgHIgCAaQgBANgKALQgKAMgOADQhaAThUAAQhyAAhogkg");
	this.shape_45.setTransform(17.2,130.1,0.408,0.408);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F47B7C").s().p("AgvEdIALlOIAAhdQABg+AJgbQAFgTAMgUQALgXAMgKIAYAAQAMASgCBBQgCAjgEA1IgUG1QgjgJgigLg");
	this.shape_46.setTransform(11.1,119,0.408,0.408);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BE383A").s().p("AgRgmIADhdQABg+AFgbQAEgTAFgVQAHgYAGgKIANABQAGASgDBBQgBAigEA1IgUF4QgBAPgIAMQgKALgPADIgBABg");
	this.shape_47.setTransform(26.4,119.3,0.408,0.408);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#EA0B18","#C40813","#A9050E","#98040C","#92040B","#B80711"],[0,0.004,0.133,0.251,0.267,0.427,0.576,0.71,0.808,1],-24.6,-0.6,23.6,1.6).s().p("AjVEXQgOgFgJgNQgJgMABgQIAToiIHWAVIgfIiQgBAPgKAMQgKALgOADQhaAThUAAQhxAAhpgjg");
	this.shape_48.setTransform(17.8,119.3,0.408,0.408);

	// sparks
	this.instance = new lib.Rocket1_sparks();
	this.instance.setTransform(19.2,140.4,1,1,0,0,0,16.1,16.4);

	this.addChild(this.instance,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.7,0,45.5,190.8);


(lib.rocket_flight3 = function() {
	this.initialize();

	// sparks
	this.instance = new lib.Rocket1_sparks();
	this.instance.setTransform(29.2,136.4,1,1,3,0,0,16.1,16.4);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EBFD8C","#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.545,0.627,0.729,0.835,0.945,0.996],19,64.6,-27.3,-35).s().p("ABuBhIgchPQgXhAg/hGIgXgYQgMgMgigdQgegagPgSQgKgLgHgOIgLgTQgFgNAGgIQAIgNAQAFQAGACAVAMIAZAQQA6AsA3BdIARAeQAaAxAOAwIAVBNQAbBzAABxQgOh5gZhTg");
	this.shape.setTransform(6.9,102,0.404,0.404,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.188,0.408,0.647,0.89,1],16.7,-16.3,-19.1,15).s().p("ABoGFQgLgMgGgTIgThQQgThSgOgpQgLgggNgdQgbg/grgoQgwgugzgNIgQlLQBTAgBAA2QAbAZAWAZQAaAeAUAfQAYAmASAtQAMAcAHAWQAIAbAGAaQAaBvAGCGQAAAhgBAgQgDAlgHAXIAAAAQgGAfgXANQgDACgEAAIgCAAQgLAAgLgLg");
	this.shape_1.setTransform(7.6,103.8,0.404,0.404,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#319016","#2F8B15","#2B7D12","#23650D","#174506","#091B01","#000000"],[0,0.145,0.318,0.498,0.69,0.886,1],-13.1,-1.8,-38.6,-6.4).s().p("ABnGVQgTgOgHgbIgZhoQgPg+gMgmQgLgegNgdQgcg/gngmQgxgtg2gMIgRlkQBhAiBGA8QAaAYAYAaQAXAaAYAlQAZAnASAuIATAzQAIAZAHAcQAaBxAFCHQACAdgCAlQgDAlgHAZQgIAjgbAQQgHAEgIAAQgLAAgMgJg");
	this.shape_2.setTransform(7.6,103.7,0.404,0.404,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYi5IAkgBIANFtIghAIg");
	this.shape_3.setTransform(14.5,94.3,0.404,0.404,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EBFD8C","#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.545,0.627,0.729,0.835,0.945,0.996],-16.9,-25.2,20.9,31.1).s().p("AhqBYIAKhRQAHgyASgxIAMghQAshkAxg0QAMgMAKgHQASgPAHgDQAQgIAJAMQAHAIgDANQgCAHgGAOQgGAPgIAMQgMAUgaAdQgeAigKAOIgRAbQg2BOgNBDIgRBSQgNBWAEB6QgQhzAKhzg");
	this.shape_4.setTransform(50,105.1,0.404,0.404,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.188,0.408,0.647,0.89,1],-20.1,-20.7,10.7,8.4).s().p("AhMGgQgYgJgLgeIAAAAQgKgXgIgjQgGgfgEghQgOiHAKhyQACgdAEgXQAEgZAIgbQAKgvATgqQAQgjAVggQATgdAYgcQA2g/BOgrIAgFKQgzAVgnA0QgkAtgUBCQgHAfgGAhQgIAugHBSQgEAugEAjQgCATgKAOQgKAOgMABIgIgCg");
	this.shape_5.setTransform(49,106.6,0.404,0.404,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#319016","#2F8B15","#2B7D12","#23650D","#174506","#091B01","#000000"],[0,0.145,0.318,0.498,0.69,0.886,1],-5.6,-90.3,105.1,-6.8).s().p("AhQGuQgcgLgNgiQgMgYgHgkQgGgegEgjQgOiKAJhyQACgXAFgeIALg1QAMgyATgpQAQgiAVgiQATgcAageQA7hFBagwIAjFkQg0ASgpA2QgjAsgTBAQgJAegEAhQgHAmgGBAIgKBqQgDAcgRARQgMANgOAAQgFAAgGgDg");
	this.shape_6.setTransform(49,106.5,0.404,0.404,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AACC2IgmlpIAkgFIAlFxg");
	this.shape_7.setTransform(43.5,96.4,0.404,0.404,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.188,0.408,0.647,0.89,1],1.1,5,-2.6,-46.9).s().p("AAhG9QgDgDgBgEIhLtxIAtgDIAwNzQABAEgDADQgCACgEABIgBAAQgDAAgCgCg");
	this.shape_8.setTransform(28.8,106.6,0.404,0.404,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#319016","#2F8B15","#2B7D12","#23650D","#174506","#091B01","#000000"],[0,0.145,0.318,0.498,0.69,0.886,1],4.8,-32.6,7.6,-50.9).s().p("AAaHEQgFgFgBgHIhMt7IA+gEIAzN8QAAAHgFAGQgFAGgHAAIgCAAQgHAAgFgEg");
	this.shape_9.setTransform(28.8,106.6,0.404,0.404,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Agyi9IBTgGIASGCIg/AFg");
	this.shape_10.setTransform(29.6,95.4,0.404,0.404,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#76C2FB").s().p("AgJACQgYgCgfgEIAAgEQAWADAjACQAiACAlAAIABAKQgtgDgdgEg");
	this.shape_11.setTransform(37.3,114.3,0.404,0.404,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#EFEFEF","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#D3D3D3","#DBDBDB","#EFEFEF","#F6F6F6"],[0,0.039,0.122,0.318,0.557,0.812,0.878,0.976,1],-26.3,2.1,55.3,-3.8).s().p("AiIAIQgigCgfgDIALgDIA3ABQCEADCOgKIBAgHIhJAUQhHAHhEAAQhAAAg/gGg");
	this.shape_12.setTransform(33.9,104.8,0.404,0.404,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BCF87C").s().p("AgSACIhEgDIAAgDQBWAEBWgBIABAGQg2AAgzgDg");
	this.shape_13.setTransform(46.8,42.2,0.404,0.404,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BCF87C").s().p("AgTAFIhDgFIAAgBIABgDICsgDIgBAHIABAIQg2gBg0gCg");
	this.shape_14.setTransform(46.7,42.1,0.404,0.404,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#8CF239","#8EF439","#90F93A","#80D935","#73C031","#84E036"],[0,0.055,0.251,0.482,0.639,1],-52.8,5.1,51.8,-2.5).s().p("AlfArQhbgGg4gHICTACQCEAADcgUQCsgMC1gXQBZgMA4gKQg2APhaASQizAhitANQiGAMhyAAQg3AAgzgDg");
	this.shape_15.setTransform(33.3,40.6,0.404,0.404,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#BAFD6B","#A1F257","#91D253"],[0,0.408,1],-6.5,0.3,56.5,-2.6).s().p("AhJBrIgVjbQBXAEBVgBIARDeQhUAAhUgGg");
	this.shape_16.setTransform(46.4,46.6,0.404,0.404,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8BD944").s().p("AgrhpIA/gNQAOAgACAhIAIB0QACASgLAPQgLAOgRABIgiAIg");
	this.shape_17.setTransform(13.8,43.5,0.404,0.404,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#78E62B","#7AE92C","#7CEE2D","#6BCE26","#5BAE1E","#6ED227"],[0,0.067,0.251,0.459,0.639,1],-51.3,5.1,51.6,-2.4).s().p("AnQCQQgRACgNgNQgNgNgCgTIgIhzQgCgeAHggQHXAjIXhxQAOAgACAhIAIB0QACATgLAOQgLAPgRABQl0BPlPAAQh5AAh1gLg");
	this.shape_18.setTransform(33,44.9,0.404,0.404,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#BAFD6B","#A1F257","#91D253"],[0,0.408,1],-29.4,2.8,27.1,-1.3).s().p("AimIAIgBgFIEvvaQAJggAEgLQAKgGAJgCIgBAEIiiQMIADAVg");
	this.shape_19.setTransform(43.5,21.5,0.404,0.404,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#80C542","#7DBF41","#76B33F","#73AC3E","#72AA3E","#7CBC40"],[0,0.039,0.149,0.298,0.655,1],26.4,15.5,-169.8,-95.8).s().p("AD6IXQgKgkgQguQg7ighzjeQiBj0g+h+IgqhTIhSimIgSgnQARAIANAVIH3OFQAWAnADAuIAJB2QABANgFALQgFALgKAHIgPg1g");
	this.shape_20.setTransform(23.5,24,0.404,0.404,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#73DC29","#73DC29","#7AE92C","#7CEE2D","#6BCD26","#4D9318","#60B821"],[0,0.004,0.133,0.251,0.4,0.639,1],-54,3.3,46.9,-4).s().p("AnQJwQgRABgNgMQgNgNgCgUIgIh1QgDguAQgqIFyvEQAQgpAngDQAngCAVAmIH3OEQAXAoADAuIAIB1QACATgLAPQgLAOgRABQl0BPlPAAQh5AAh1gKg");
	this.shape_21.setTransform(33,25.6,0.404,0.404,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFFFFF","#FFFFFF","#FFFFFF","#EBEBEB","#D6D6D6","#DEDEDE","#EBEBEB"],[0,0.047,0.318,0.541,0.812,0.906,1],-21.6,1.2,58.9,-4.6).s().p("AieATQgkgFgRgYIA/gTQCvANC5gRIjkBDQhGgDhIgMg");
	this.shape_22.setTransform(35.9,106.1,0.404,0.404,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E3E3E3").s().p("AhYgeICugMIADAjIipAyg");
	this.shape_23.setTransform(43.5,50.9,0.404,0.404,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AALLKIgHg9ICAgnIAHBnIgUAHQgygDg6gHgAgTGlICGgpIAHBnIiCAogAgrC9ICNgsIAHBoIiJAqgAhEgpICWguIAHBlIiSAtgAhdkSICegwIAHBoIiaAvgAh1n6IClgyIAHBnIihAygAiKrGICtgNIADAkIioA0g");
	this.shape_24.setTransform(41.4,78.3,0.404,0.404,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#137DD6").s().p("AhRA0IgJhbICugMIAHBlQg5ACg5AAIg6AAg");
	this.shape_25.setTransform(43.4,51.2,0.404,0.404,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D1D1D4").s().p("AgTgUIAlgMIACA6IglAHg");
	this.shape_26.setTransform(14.9,49.5,0.404,0.404,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EEEEEB").s().p("AAAIjIAjgMIADBpIgkALgAgHE1IAjgLIADBpIgiALgAgPBIIAlgLIADBoIgkAMgAgWijIAlgMIACBpIgjALgAgdmRIAkgLIADBoIglAMgAglp+IAmgMIADBoIgmAMg");
	this.shape_27.setTransform(14.1,74.4,0.404,0.404,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#C3C3C3","#CDCDCD","#DADADA","#E1E1E1","#E3E3E3","#D7D7D7","#A2A2A2","#8D8D8D","#949494","#A9A9A9","#CACACA","#D1D1D1"],[0,0.027,0.078,0.149,0.318,0.38,0.671,0.812,0.855,0.914,0.988,1],-42.9,3.2,43.3,-3.1).s().p("AnCA+IgJhQIG1ggIl+BxgAHLg/IABA9Qi/AfiwARg");
	this.shape_28.setTransform(32.6,50.7,0.404,0.404,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#DBDBDB","#EAEAEA","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#B3B3B3","#9E9E9E","#A6A6A6","#BABABA","#DBDBDB","#EBEBEB"],[0,0.035,0.086,0.153,0.318,0.42,0.686,0.812,0.851,0.906,0.973,1],-39.9,2.9,46.5,-3.4).s().p("AkCLSQgkgFgSgcIMUjvIADBpIpWC2QhCgEhJgLgAlYHLIMtj2IADBoIskD0gAlzDkINCj7IADBnIs5D6gAmOgBINWkDIADBoItND/gAmpjpINqkJIADBoIthEHgAnEnQIN+kPIADBoIt1EMgAneq1IG+ghImzCFg");
	this.shape_29.setTransform(31.9,77.9,0.404,0.404,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#1173C4","#1172C3","#0E66AF","#095490","#084D84"],[0,0.314,0.494,0.82,1],-45.7,4.4,45.9,-2.2).s().p("AnCBIIgJhQIOVhDIACBRQmGBGloAAQhRAAhPgEg");
	this.shape_30.setTransform(32.6,50.3,0.404,0.404,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1994FB").s().p("AAKLJIiV2QICugMIBpWnQhDgDg/gIg");
	this.shape_31.setTransform(41.4,78.3,0.404,0.404,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3B87C2").s().p("AgQgTIAhgIIAAAIIgBAHIAAAAIgBADIAAABIgBADIAAAAIgCAEIAAABIgCAAIAAABIgCADIAAABIgIAMIAAAAIgPALg");
	this.shape_32.setTransform(13.3,103.4,0.404,0.404,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#2B95E8","#2B96EA","#2D9EF7","#2DA1FC","#2B8FDC","#2A7FC1","#2984C9"],[0,0.016,0.141,0.251,0.569,0.808,1],-38.7,3.9,39,-1.7).s().p("AkSAhQgrgCgogFIgegEQArADBHABQCEADCOgMQCEgMCOgWQBGgMArgIQgqAMhFAPQiXAfh8ALQhLAGhJAAQhBAAg/gFg");
	this.shape_33.setTransform(28.4,103.8,0.404,0.404,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#1480DB","#1584E2","#178CEF","#188FF4","#137CD3","#0E66AE","#0F6BB7"],[0,0.043,0.153,0.251,0.525,0.808,1],-42.6,4.3,47.7,-2.2).s().p("AlRAyQgZgEgSgQQgRgPgCgTIAAgCQF5ApGmhkIAAADQAAAVgPARQgPASgZAGQjyBCjeAAQhvAAhrgQg");
	this.shape_34.setTransform(28.7,104.9,0.404,0.404,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3A84BB").s().p("AgmrCIAmgDIAnVVQAAAQgJAOQgJAOgQAKg");
	this.shape_35.setTransform(14.1,75.9,0.404,0.404,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#1480DB","#1480DB","#1688E8","#178AED","#1278CC","#0A5592","#0F6BB7"],[0,0.004,0.133,0.251,0.467,0.808,1],-41.6,4.7,51.3,-2).s().p("AkCLbQgZgDgSgQQgRgQgCgVIie1LIOVhDIAoVUQAAAVgPASQgPARgZAHQjyBEjfAAQhuAAhrgRg");
	this.shape_36.setTransform(31.9,77.4,0.404,0.404,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58A2DA").s().p("Ag+AhIgHhCICFgKIAHBXQhAgChFgJg");
	this.shape_37.setTransform(37.9,107.6,0.404,0.404,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4581AE").s().p("AgegfIA7gEIACAzQgLAIgMACIgiAKg");
	this.shape_38.setTransform(15.6,105.7,0.404,0.404,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#1071C0","#1278CC","#137AD0","#0F6DB9","#0B5A9A","#084F87","#074B80","#0C5FA2"],[0,0.125,0.251,0.369,0.549,0.702,0.808,1],-34.8,3.6,35.4,-1.4).s().p("Ak8AwQgQgCgNgIIgFgxIK8gzIABA1QgLAIgMABQjkA/jTAAQhoAAhlgPg");
	this.shape_39.setTransform(28.6,106.8,0.404,0.404,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#59B5FA").s().p("AAkAcIgBAAIgPgBIgCAAIgcgDIgCAAIgfgEIgCAAIgRgDIgEguQBDAJA+ACIAEAwg");
	this.shape_40.setTransform(37.3,115.2,0.404,0.404,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#479AD8").s().p("AgagNIAagHQANgEANgKIABAPQAAASgNANQgNAPgTAGIgGACg");
	this.shape_41.setTransform(15.3,112.8,0.404,0.404,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#60A8DD").s().p("AgYAEIAxgMQgSAIgeAJg");
	this.shape_42.setTransform(15.4,111.9,0.404,0.404,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#1990F4","#1E96F9","#2199FC","#2097F8","#1983D9","#1576C6","#1472BF","#1784E0"],[0,0.11,0.251,0.275,0.494,0.678,0.808,1],-33.6,3.5,34,-1.4).s().p("AjvAfQgogEgggIIgZgIIAaAGQAhAFAnACQBpAGCHgLQB9gKBygWQA8gNAkgMQgiAQg7AQQh1Afh8AKQg4AEg1AAQhHAAg+gIg");
	this.shape_43.setTransform(28,113.1,0.404,0.404,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#1685E5","#1689EA","#1891F7","#1994FB","#1689E9","#1276CA","#0F6BB7","#0E67B0","#137AD1"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-33.7,3.5,35.3,-1.5).s().p("AkfAxQgWgEgPgNQgOgNgDgSIgBgMQANAIAQACQEpAtFLhcQAOgEAOgKIAAAPQABASgNAPQgNAOgWAFQjPA6i+AAQhfAAhbgOg");
	this.shape_44.setTransform(28.1,113.9,0.404,0.404,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#59B0F1").s().p("AgyB3IgCgBIgYjvICGgKIATEHQhFgDg6gKg");
	this.shape_45.setTransform(37.7,111.1,0.404,0.404,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#468DC2").s().p("Aggh1IA7gFIAGC+QAAARgNAPQgNAQgTAGIgGABg");
	this.shape_46.setTransform(15.5,109.2,0.404,0.404,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#1480DB","#1480DB","#1688E8","#178AED","#1277CB","#0D65AC","#0B5999","#0A5592","#0F6BB7"],[0,0.004,0.133,0.251,0.404,0.569,0.71,0.808,1],-34.1,3.6,36.4,-1.5).s().p("AkVCJQgWgEgPgNQgOgNgDgSIgWi8IK9gzIAFC9QABASgNAPQgNAPgWAGQjPA6i+AAQhfAAhbgOg");
	this.shape_47.setTransform(28.5,110.4,0.404,0.404,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7CB7E2").s().p("AgdBtIgCgXIgIhHQgFgsAFgWQADgPAKgSQAKgSAKgJIAWgCQANANAEAxQACAbABAmIAHBkQgvgDgZgCg");
	this.shape_48.setTransform(34.3,113.5,0.404,0.404,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3979A9").s().p("AgNBYIgHhHQgEgtACgWQABgOAEgRQAFgSAFgJIALgBQAHANAEAyIAEBAIAFBTIgjAJg");
	this.shape_49.setTransform(19.7,112.3,0.404,0.404,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#1071C0","#1278CC","#137AD0","#0E68B2","#0A5896","#084F86","#074B80","#0C5FA2"],[0,0.125,0.251,0.396,0.557,0.702,0.808,1],-22.5,2.3,22.9,-1).s().p("AjWB3IgSjUIHEghIANDSQikAriZAAQhCAAhAgIg");
	this.shape_50.setTransform(28.1,112.9,0.404,0.404,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#95D1FC").s().p("AgiAAIAAgFQAgADAkABIABAHQglgCgggEg");
	this.shape_51.setTransform(33.4,125.9,0.404,0.404,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7DC6FC").s().p("AggAQIgDgmQAjAEAhACIADAng");
	this.shape_52.setTransform(33.3,126.6,0.404,0.404,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3C92D3").s().p("AgQgNIAQgEQAIgDAIgGIABAUQABAOgQAMQgEAEgJADIgBAAg");
	this.shape_53.setTransform(18.9,125,0.404,0.404,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#60A8DD").s().p("AgNABIAbgFIgbAJg");
	this.shape_54.setTransform(19,124.3,0.404,0.404,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#1A90F4","#1F97F9","#229AFC","#2299F9","#1B85DA","#1778C7","#1674C0","#1885E0"],[0,0.11,0.251,0.271,0.49,0.678,0.808,1],-21.7,2.2,21.9,-0.9).s().p("Ah6AZQg1gDgpgNQAwAIA8gBQAqgBBCgFIBygMIBCgOIAlgIIgjANQgZAJgXADIgSAEQgXAGhMAKIgpACQgqACgfAAIgZAAg");
	this.shape_55.setTransform(27.2,125.1,0.404,0.404,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#1685E5","#1689EA","#1891F7","#1994FB","#1689E9","#1276CA","#0F6BB7","#0E67B0","#137AD1"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-22.6,2.3,22.7,-0.9).s().p("Ai5AkQgOgCgKgJQgJgIgCgMIgBgNQAFADAGAAQDEAcDZg7QAKgDAIgGIABAUQAAAMgIAJQgIAIgOAEQiGAmh7AAQg9AAg7gKg");
	this.shape_56.setTransform(27.2,125.8,0.404,0.404,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7DC1F4").s().p("AgQDgIgYj+IgIhHQgFguAFgWQADgPAKgSQAKgSALgJIAVgCQANANAEAxQACAbABAoIAYFOQgigCghgGg");
	this.shape_57.setTransform(34,118.2,0.404,0.404,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3A85BE").s().p("AgTgaIgIhIQgEgvACgWQABgOAFgQQAEgTAGgJIAMAAQAFANAEAxIAEBCIASEgQABAMgJAKQgIAJgOAEIAAAAg");
	this.shape_58.setTransform(19.4,117,0.404,0.404,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#1480DB","#1480DB","#1688E8","#178AED","#1688E9","#1172C3","#0D63A8","#0B5998","#0A5592","#0F6BB7"],[0,0.004,0.133,0.251,0.267,0.427,0.576,0.71,0.808,1],-22.8,2.4,23.5,-1).s().p("AioDsQgOgCgKgJQgJgIgCgMIgjmgIHEghIAZGhQAAAMgIAJQgIAKgOAEQiGAlh7AAQg9AAg7gJg");
	this.shape_59.setTransform(27.9,117.7,0.404,0.404,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#73B2E0").s().p("AgKgYIARgBIAEAyIgRACg");
	this.shape_60.setTransform(27.5,127.7,0.404,0.404,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#053F6C","#09518B","#0D63A9","#1070BF","#1278CC","#137AD0","#1277CB","#106FBD","#0D62A6","#084F86","#074B80"],[0,0.082,0.184,0.286,0.38,0.467,0.576,0.702,0.835,0.976,1],-5.5,0.4,4.9,-0.3).s().p("Ag0jLIBLgFIAeGcQgpAFgiAAg");
	this.shape_61.setTransform(27.5,120.3,0.404,0.404,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CECECE").s().p("AAWDrIgFg+QgJhigYjLIAAgBIgNhoIAJgBIAKBPQAOCAAJBTIAEAlQAKBpADAlg");
	this.shape_62.setTransform(30.2,119.3,0.404,0.404,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#AFAFAF").s().p("AARDrIgEg9QgKhkgXjKIgNhpIARgBIAKBOQARCWAGA+IAEAkQAKBbADA0g");
	this.shape_63.setTransform(30.2,119.3,0.404,0.404,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#848484").s().p("AAJCuQgIhUgNh2IgZjMIAZgCIAEAeQAZDWAFAuQAOCNACAmIgZAAg");
	this.shape_64.setTransform(30.2,119.3,0.404,0.404,0,0,180);

	this.addChild(this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55.4,187);


(lib.rocket_flight2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7A7A7").s().p("AgTAvQgJglgHgsIA8gTIAKBLQABAGgDAFQgEAFgGACIgoAOg");
	this.shape.setTransform(35.5,22.8,0.401,0.401);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3B3638","#585556","#7E7C7D","#959595","#9E9E9E"],[0,0.227,0.565,0.835,1],-41.4,-4.7,35.2,4.7).s().p("ADNExQgGgYgQhgQgMhJgSgrQgMgbgKgPQgYgegYgcQgdgfgZgXQhshmi1h7QAagBAWANQDVB2CxDJQA6BCAMBbIANBmQABAGgEAFQgDAFgHACIgqANg");
	this.shape_1.setTransform(26.5,12.5,0.401,0.401);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBCBCB").s().p("AhWAsQgGgsgBgtQBZADBegEQABAqADAxIgvABIgSABQg1AAg+gDg");
	this.shape_2.setTransform(6.5,27.4,0.401,0.401);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#E6EDF2","#E3EAEE","#C1C4C7","#ADADAE","#A5A5A5"],[0,0.035,0.459,0.796,1],36.7,3.7,0,36.7,3.7,77.4).s().p("AiSFoQgfjZBiiTQAQgdAig3ICgkJQALgGAMgDQgjBmgYBcIgVBWQghBkgIB3QgHBiAIB/IhGABQg3AAg3gDg");
	this.shape_3.setTransform(8.9,14.7,0.401,0.401);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#868686","#888888","#8C8C8C","#6B6B6B","#1F1F1F","#787878"],[0,0.035,0.251,0.38,0.639,1],-43.9,7.7,50.7,-4.6).s().p("AmtBmQgHgBgFgEQgEgEgBgGIgKhMQHCAbHFiQIAKBNQABAGgDAFQgEAFgGACQlwB2lnAAQhKAAhJgFg");
	this.shape_4.setTransform(18.6,25,0.401,0.401);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-40.9,4.1,37.5,-6.1).s().p("AmqFnQgHAAgFgEQgEgEgBgGIgOhmQgMhbAphNQB2jgCzi5QAXgXAhgFQAigFAcAQQDVB2CyDLQA5BAAMBbIANBmQABAGgDAFQgEAFgGACQlwB3lnAAQhKAAhJgFg");
	this.shape_5.setTransform(18.5,14.6,0.401,0.401);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D5CC31").s().p("AhQBYIgRhjQAOgJAPgBQAdgEAYASQAVAQAEAdQADAbgOAXIgVABIg6gBgABDg/QgOgKgIgPIAwABIAFAlQgRgCgOgLg");
	this.shape_6.setTransform(8.7,27.5,0.401,0.401);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1A929").s().p("AhUBYIgbicICVgUIAyABIAYCrQhIAFhAAAIg8gBg");
	this.shape_7.setTransform(8.9,27.5,0.401,0.401);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#D4B12B","#D4AB29","#B36A1C"],[0,0.498,1],-43.1,6.5,32.7,-3.4).s().p("AmEB4QgJgNgDgSQgDgdARgXQASgXAdgEQAdgDAXARQAYASAEAdQADAcgQAXIgfAAQgtAAgogCgAgSBUQgEgdASgXQAQgXAdgEQAdgEAXASQAYASADAdQABAIgBAIQg/AMhGAKQgEgIgBgMgAhwBXQgLgIgCgNQgCgOAJgKQAIgLANgCQAOgCALAJQAKAIACANQACAOgIALQgJAKgNACIgFAAQgKAAgJgHgAEIAhQAIgIALgBQASgCAMAOIg6AQQABgLAIgIgAGRAGIAAAEIgNAEQAHgFAGgDgAjCgYQgUgLgKgUICFgRQgFAWgQAPQgRAQgWADIgKABQgRAAgQgJgACwgjQgXgSgEgdQgBgKABgMICGgRQAFAJABALQAEAdgSAYQgSAXgdAEIgKABQgXAAgTgPgAA8hMQgKgFgEgJIA9gIQgCAKgIAHQgHAHgLABIgEABQgIAAgHgEg");
	this.shape_8.setTransform(19.6,26.2,0.401,0.401);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B76C1D").s().p("AglhJIA/gJIAMCSIg8ATg");
	this.shape_9.setTransform(34.2,24,0.401,0.401);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#AF571A","#A75319"],[0,1],-4,8.6,0,-4,8.6,46.1).s().p("AmUB8IgBAAIgaiNINUhvIAMCRQlfBwlXAAQhIAAhHgFg");
	this.shape_10.setTransform(18.3,25.9,0.401,0.401);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EEB329").s().p("ABHQmQANADAIAEIgBACIgCACIgBADIgCACIgFAHIgHAGgAA/POIgEgrQAIgLAOgCQAIgBAHACIAEA8QgEADgGABIgGAAQgMAAgJgJgAApLeQAhAMALAhIACAhQgFAhgdARgAAiKKIgGg9IAKgDQAKgBAJAEQAJAFAFAJIACAaQgGATgVADIgDAAIgJgBgAAMGYQAcASAEAhQAFAlgbAYgAAAD+QAKgBAKAIQAKAIABANQACANgIALQgIAKgNACgAgPBYQAPARABAWQAEAagNAVgAgehKQARAGADAUQABAJgEAJQgEAJgIAFgAgMlhQgDgVAKgVIAFBKQgJgOgDgSgAg7mLQAFAHABAIQABAJgEAJgAg3qtQgCgSAGgRQAGgQANgLIAJBwQgcgSgEgggAhRvUQgOgQgDgVQgDgYALgUQALgUAUgJIALCDQgUgGgNgPg");
	this.shape_11.setTransform(38.1,70.2,0.401,0.401);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CE7822").s().p("AgRgYIADgCQAPgGAPgNIACAYIAAAMIgBABIAAAHIgBABIgDAJIgEALIgJAOIgDAFIgBACIgGAFg");
	this.shape_12.setTransform(41.5,112.1,0.401,0.401);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D7791E").s().p("Ah3yCIBBgIMACuAjPQADApghAdg");
	this.shape_13.setTransform(37.5,67.3,0.401,0.401);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEF539").s().p("ADGSMQgLgNgCgTQgEgbAQgWQAPgXAbgGIAPBzQgZgBgfgEgABsQ1QANgBAKAIQAKAIACANQACAMgHALQgHAKgMADgABPODQAdASAFAhQAEAfgVAYgACmNNQgVgSgDgbQgEgaAPgXQAPgVAagIIATCLIgCABQgaAAgTgRgABAMqIgLg+IAKgDQAOgCALAIQAKAJACANQACAOgJAKQgIALgNACIgEAAIgEAAgAAWIwQATAGANAQQANAQADAUQACAUgHARQgIARgOAMgAB6IAQgUgRgEgbQgDgaAOgWQAPgWAZgHIASCLQgagBgTgRgAAHHZIgHgwQAIgLAMgBQANgCALAIQALAJACANQABAOgIAKQgIALgOACIgEAAQgKAAgHgFgAggDhQAXADAPARQARASADAXQADAXgKAUQgLATgSALgABNCzQgTgRgDgaQgEgaAPgVQANgWAYgIIATCLQgZgCgUgRgAglCLQgLgIgBgNQgCgOAIgLQAIgLAOgBQANgCAJAIQALAIABAOQACANgIALQgHALgNACIgFAAQgKAAgJgHgAhYhpQAbgBAVARQAVARAEAcQADAagOAUQgOAVgZAIgAAiiXQgTgSgDgZQgEgZAOgWQANgVAXgIIATCKQgZgCgSgRgAhQi/QgLgJgCgMQgCgOAJgLQAIgLANgBQAOgCALAJQAKAHACAOQACANgIALQgJALgNABIgFABQgKAAgJgHgAh4koIgYiMIAGgBQAegDAXARQAXASAEAdQAEAdgSAYQgSAXgdAEgAgInkQgSgSgEgYQgDgZANgVQANgVAUgIIATCIQgYgDgQgQgAh8oLQgKgJgCgNQgCgNAJgLQAIgLANgBQAOgCAKAJQALAHACAOQACANgJALQgIALgNABIgEABQgLAAgKgHgAjHr8QALgFAHAAQAdgEAXASQAYASADAdQAEAdgSAYQgSAXgdAEIgNAAgAg0sxQgSgRgDgZQgDgXAMgWQAMgUAWgJIATCIQgYgDgRgRgAintXQgKgJgCgNQgCgNAIgLQAIgLAOgCQANgBALAIQALAJABAMQACAOgIALQgIAKgOACIgEABQgLAAgJgHgAjovCIgViBQAOgIAPgCQAdgEAXASQAYASADAdQAEAdgSAXQgSAXgdAFIgJAAQgJAAgIgCgAhXx2QgOgKgIgPIAvAAIAFAmQgQgDgOgKg");
	this.shape_14.setTransform(15,70.8,0.401,0.401);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FCD638").s().p("AgOAnIgBAAIglgGIgGgCIgOhNQBIANA+ABIAKBPQgugCgogGg");
	this.shape_15.setTransform(22.3,115.8,0.401,0.401);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FDD332","#FBCA30","#F9C12E"],[0,0.4,1],-30,-11.5,94.9,28.5).s().p("ACNSDIgPgCMgGAgj9ICXgTIAyAAMAE8AkgQg+gDg4gLg");
	this.shape_16.setTransform(14.8,70.8,0.401,0.401);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FED232","#FEDB33","#FEE234","#FEE434","#EB9925","#D57A1E"],[0,0.059,0.157,0.384,0.631,1],-29.9,3.3,24.6,-3.8).s().p("AiIA7IglgDIgBAAQgKgOgDgTQgDgXANgVQA+AFA8gEQAHAOACALQAEAfgVAYIgOAAIgFABgAkZAbQgKgJgCgNQgCgLAJgLQAIgLANgCQAOgCAKAJQALAIACANQACAMgJALQgIAKgNACIgFABQgLAAgJgHgABjAVQgLgIgBgNQgCgMAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAMgIALQgIAKgOACIgFAAQgKAAgJgHgADSgkQASgUAagDQAWgDATAKIgBABIgCADIgCADIgJAKIgOAMIhEAcIgHADQABgYARgUg");
	this.shape_17.setTransform(30,115.3,0.401,0.401);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FED232","#FED331","#EB9925","#D57A1E"],[0,0.384,0.631,1],-35.4,6.7,38.8,-2.9).s().p("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ANgCQAOgBALAIQAKAIACAOQACANgJALQgIAIgNACIgFAAQgLAAgIgGgAE9AAQgKgIgCgNQgCgOAIgKQAIgLAOgCQANgCALAJQALAIACANQABAOgIALQgIAIgOACIgFAAQgKAAgJgFgAiahyQgXgSgEgdQgDgdARgXQASgXAdgEQAegEAXASQAXASAEAdQAEAdgSAXQgSAYgdADIgLABQgXAAgTgPgADih3QgXgSgEgdQgEgdASgYQASgXAdgEQAdgDAXASQAYASADAdQAEAdgSAXQgSAXgdAEIgKAAQgYAAgSgOgAkTieQgKgIgCgNQgCgOAIgLQAJgKANgCQANgCALAJQALAIACANQABAOgIAKQgIALgOACIgFAAQgKAAgJgHgABpijQgLgIgCgOQgBgNAIgLQAIgKAOgCQANgCALAIQAKAJACANQACANgIALQgJALgNACIgFAAQgKAAgJgHgAlukVQgXgSgEgdQgEgdASgYQASgXAdgEQAdgDAXARQAYASADAdQAEAdgSAYQgSAXgdAEIgKAAQgXAAgTgOgAANkbQgVgRgEgeQgDgdAPgXQASgXAdgEQAdgEAYASQAXASAEAdQAEAdgSAXQgSAYgdADIgLABQgXAAgTgPgAFwlPQgDgVAKgUIAGBJQgLgOgCgSgAhqlGQgKgJgCgNQgCgNAJgLQAIgLANgCQANgCALAJQALAIACANQACAOgJALQgIAKgNACIgFAAQgLAAgJgGgAESlMQgLgIgBgNQgCgOAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAOgIALQgIAKgOACIgFAAQgKAAgJgHgAjFm+QgXgSgEgdQgEgdASgXQASgXAdgEQAdgEAXASQAYASADAdQAEAdgSAXQgSAXgdAEIgKABQgXAAgTgPgAC2nDQgXgSgEgdQgDgdASgYQASgXAdgEQAdgDAXARQAXASAEAdQAEAegSAXQgSAXgdAEIgLAAQgXAAgTgOgAk+nqQgLgIgCgOQgBgNAIgLQAIgKAOgCQANgCALAJQAKAIACANQACANgIALQgJALgNACIgEAAQgLAAgJgHgAA+nvQgLgIgCgOQgCgNAJgLQAIgLANgBQAOgCALAIQAKAIACAOQACANgJALQgIALgNABIgFAAQgLAAgIgGgAmaphQgXgSgEgdQgDgdARgYQASgXAdgEQAegDAXARQAXASAEAdQAEAdgSAYQgSAXgdAEIgLAAQgXAAgTgOgAgcpnQgXgSgEgdQgEgdASgXQASgXAbgEQAdgEAXASQAYASADAdQAEAdgSAXQgSAYgdADIgKABQgVAAgTgPgAFFqbQgDgRAHgRQAGgQANgMIAIBwQgcgSgDgggAiVqSQgLgJgBgNQgCgOAIgKQAIgLAOgCQANgCALAJQALAIABANQACAOgIALQgIAKgOACIgEAAQgLAAgJgGgADnqYQgLgIgCgNQgCgOAJgKQAIgLANgCQAOgCALAJQAKAIACANQACAOgJAKQgIALgNACIgFAAQgLAAgIgHgAjwsKQgXgSgEgdQgEgdASgXQASgYAdgEQAdgDAXASQAXASAEAdQAEAdgSAXQgSAXgdAEIgLAAQgXAAgSgOgACLsPQgXgSgEgdQgDgeARgXQASgXAdgEQAdgDAYARQAXASAEAdQAEAdgSAYQgSAXgdAEIgLAAQgXAAgTgOgAlps2QgLgIgCgOQgCgNAJgLQAIgKANgCQAOgCALAIQAKAJACANQACANgJALQgIALgNACIgFAAQgLAAgIgHgAASs7QgKgIgCgOQgCgNAIgLQAJgLANgBQANgCALAIQALAIACAOQABANgIALQgIALgOABIgFAAQgKAAgJgGgAnFutQgXgSgEgeQgDgdARgXQASgXAdgEQAdgEAYASQAXASAEAdQAEAdgSAXQgSAYgdAEIgLAAQgXAAgTgOgAhHuzQgXgSgEgdQgEgdASgXQASgXAdgEQAdgEAVASQAYASADAdQAEAdgSAXQgSAYgbADIgKABQgYAAgSgPgAEqvCQgOgQgDgVQgDgXAMgUQALgUAUgKIAKCEQgUgGgNgQgAjAvfQgLgIgCgNQgBgOAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAOgIALQgJAKgNACIgFAAQgLAAgIgHgAC7vkQgKgIgCgNQgCgOAJgLQAIgKANgCQANgCALAJQALAIACANQACANgJALQgIALgNACIgGAAQgKAAgJgHgAkSxQQgUgLgKgUICFgRQgFAWgQAPQgRAQgWADIgKAAQgSAAgPgIgABgxbQgXgSgEgdQgBgKABgMICGgRQAFAJABALQAEAegSAXQgSAXgdAEIgKAAQgXAAgTgOgAgSyEQgKgFgEgJIA7gIQgDAKgHAHQgHAHgKABIgEAAQgIAAgGgDg");
	this.shape_18.setTransform(22.8,69.5,0.401,0.401);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#F17724","#F87B27","#FD7E28","#DC6E22","#AE571A","#D1681F"],[0,0.106,0.251,0.498,0.808,1],-49.8,7.8,40.8,-4).s().p("AjmBPQgdgDgVgTQgUgTgFgbIgGggQAWARAbADQEYAyEFh5QARgHAOgNIACAZQACAagPAYQgPAWgbALQimBNisAAQhKAAhLgOg");
	this.shape_19.setTransform(29.7,114,0.401,0.401);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#F07120","#F87623","#FD7924","#DC691E","#AB5014","#CF621A"],[0,0.11,0.251,0.49,0.808,1],-52.6,10.2,46.5,-2.7).s().p("AgcSsQgdgEgVgTQgUgTgFgaMgGbgixINVhvMACvAjPQACAbgPAXQgPAYgbALQilBNivAAQhJAAhKgNg");
	this.shape_20.setTransform(21.6,69.2,0.401,0.401);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#959595").s().p("AgaBCIgUiCIBJgKIAUCVQgegCgrgHg");
	this.shape_21.setTransform(22.2,116.8,0.401,0.401);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#504E4E").s().p("AgThDIAdgDIAKB8IAAAEIgZANg");
	this.shape_22.setTransform(40.1,114.3,0.401,0.401);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#676767","#282828"],[0,1],4.8,102.5,0,4.8,102.5,36.1).s().p("AhGOkQgQgCgNgHIlI7uILKhdICNcOIgMAGQikBNiwAAQhJAAhJgNg");
	this.shape_23.setTransform(23.8,82.1,0.401,0.401);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#757576").s().p("AgMgHQAQgQAGgWIADAlQABAEgBADIAAABIgBAEIAAACIgBAGIgBABIgBAHIgBABQgCAGgFAGIAAABIgIAMg");
	this.shape_24.setTransform(40.7,120.4,0.401,0.401);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#595657").s().p("AgWiDIAcgCIARDTQACAhgYAXg");
	this.shape_25.setTransform(40.3,116.9,0.401,0.401);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C0C0C0").s().p("AgFAcIgGgBIgBgBIgGgBIAAAAIgMgFIgIg1QAJAEALACIAzAHIAHA2IgtgGg");
	this.shape_26.setTransform(23.1,123.9,0.401,0.401);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B3B3B3").s().p("AAJCIQgMgCgMgGIgnkEIBJgKIAkEdIgugHg");
	this.shape_27.setTransform(22.5,119.6,0.401,0.401);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#848484","#868686","#8A8A8A","#696969","#1C1C1C","#777777"],[0,0.035,0.251,0.38,0.639,1],-27,5,48.9,-4.9).s().p("AjABLQgYgEgSgQQgRgPgEgWIgGgjQASAdAmAGQDYAoDLhdQAkgPAJgjIADAlQACAWgMAUQgNASgXAJQiKBBiRAAQg+AAg/gLg");
	this.shape_28.setTransform(30.7,122,0.401,0.401);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-25.4,6.1,58.4,-4.8).s().p("AgXPqQgZgDgRgQQgRgQgEgWIlY9IILKheICTdiQACAXgNAUQgNATgWAKQiLBBiTAAQg9AAg9gMg");
	this.shape_29.setTransform(23.9,84.8,0.401,0.401);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#828282").s().p("AgSAaIgJgyIAtgGIAKA9QgYgBgWgEg");
	this.shape_30.setTransform(25.3,125.9,0.401,0.401);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#514F50").s().p("AgNgcIAXgCIAEAyIgWALg");
	this.shape_31.setTransform(39,123.8,0.401,0.401);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#6A6A6A","#272425"],[0,1],-1.5,57.3,0,-1.5,57.3,30.3).s().p("AheJrIgCAAIjaybIIYhGIBcSrIgBABQiKBBiTAAQg7AAg/gMg");
	this.shape_32.setTransform(27,101.9,0.401,0.401);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6E6E70").s().p("AgJgMQALgIAGgJIACAZIgBABIAAADIAAAAIgBAFIAAABIgCAGIgCADIAAABIgDAFIgBAAIAAAEIgFAFg");
	this.shape_33.setTransform(39.9,133.9,0.401,0.401);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5B5758").s().p("AgWiaIAXgCIAVEPQADAYgTASg");
	this.shape_34.setTransform(39.4,128.9,0.401,0.401);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A8A8A8").s().p("AAaAbIgngGIgEgCIgBAAIgIguIAHABQAMADAaADIAIAvg");
	this.shape_35.setTransform(26.9,136.4,0.401,0.401);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9A9A9A").s().p("AAMCaIgKgDIgxkvIAvgGIAwE9g");
	this.shape_36.setTransform(26.1,131.1,0.401,0.401);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#848484","#868686","#8A8A8A","#696969","#1C1C1C","#777777"],[0,0.035,0.251,0.38,0.639,1],-23,4.1,42.7,-6.2).s().p("AiPA0QgSgDgNgMQgNgMgDgQIgGgbQAPASAaACQCmAdCdhFQASgHAJgOIACATQABARgJAPQgKANgRAHQhoAwhrAAQgvAAgvgIg");
	this.shape_37.setTransform(32.4,135.2,0.401,0.401);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-19,4.6,43.8,-3.6).s().p("AgRLvQgSgCgNgMQgNgMgDgRIkC11IIXhGIBuWJQABAQgJAPQgKAPgRAHQhnAxhuAAQguAAgugJg");
	this.shape_38.setTransform(27.3,107.1,0.401,0.401);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C2C2C2").s().p("AgRgzIAUgDIAPBqIgVADg");
	this.shape_39.setTransform(32.6,136.6,0.401,0.401);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#767678","#89898B","#959698","#999A9C","#939495","#818183","#636465","#4D4D4E"],[0,0.114,0.231,0.345,0.475,0.655,0.867,1],-4.4,0.6,4.5,-0.5).s().p("AhgmQIBZgMIBoMsQgtALgsACg");
	this.shape_40.setTransform(31.3,122.3,0.401,0.401);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C6C6C6").s().p("AAQDIIgNhtIAAgBIgckdIAAgCIADgCQAGgBAAAFIArGLg");
	this.shape_41.setTransform(30,130.8,0.401,0.401);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#ADADAD").s().p("AALDLIgLhuQgWjKgJhTQAAgEACgDQAEgDADAAQAKgBABAKIARCxIAZDbg");
	this.shape_42.setTransform(30,130.7,0.401,0.401);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8A8A8A").s().p("Agji9QgBgOAOgBQAPgBABAOIArGMIgfAAIgpmKg");
	this.shape_43.setTransform(30,130.6,0.401,0.401);

	// sparks
	this.instance = new lib.Rocket1_sparks();
	this.instance.setTransform(36.7,147.1,1,1,-6,0,0,16.1,16.5);

	this.addChild(this.instance,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,54.4,198.1);


(lib.freestarburst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dontforget();
	this.instance.setTransform(4.6,-17.2,0.649,0.649,15.8,0,0,33,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.7,scaleY:0.7},9).to({scaleX:0.65,scaleY:0.65},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-57.1,119,116.9);


(lib.fireworks1NEW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_29 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_30 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_31 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_32 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_33 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_34 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_35 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_36 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_37 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_38 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_39 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_40 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_41 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_42 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_43 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_44 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_45 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_46 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_47 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_48 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_49 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_50 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_79 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_80 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_81 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_82 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_83 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_84 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_85 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_86 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_87 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_88 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_89 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_90 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_91 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_92 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_93 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_94 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_95 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_96 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_97 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_98 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_99 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_100 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_129 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_130 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_131 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_132 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_133 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_134 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_135 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_136 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_137 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_138 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_139 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_140 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_141 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_142 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_143 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_144 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_145 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_146 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_147 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_148 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_149 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnUhbmjgACQigIACgBQHKIdCDP3Qipvammo5gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhogmQkGGsg9HGQAlnsEemGgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DIQpAierTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxvQDIgfCuArQiqghjMAVgAs377QEyAxDBC3QjEiakvhOg");
	var mask_graphics_150 = new cjs.Graphics().p("AAliVIACAAQhqO1ApPcQhExuCDsjgAD0KaQB+GdgYHaQgLnVhbmigACQifIACgBQHKIcCDP3Qipvammo4gAkMgtQn9HvkYHIQE7oZHamegAWlJVQBSCDAxCSQg4iUhLiBgAhognQkGGtg9HGQAlnsEemHgAI+CaQDnD2BoGwQiinmitjAgAEZjDQMkCsFoJsQlEoItIkQgAhMjqQufE+kaHlQFDpBN2jigAr6jPQn1A+kNEMQEdk2HlgUgAFTlEQLdhjG7DlQnzi/qlA9gA4nmPQJWibN6DYQs9ipqTBsgAsRxjQIYBoDEJ7QkUpxnIhygACrmiQKdpWJ4DJQpAifrTIuIgCgCgAlE4TQHCFkh+L5QAbsOlflPgANm3cQnVgOlMQlQEDw2IeAfgADM6mQhsIcgXH8QAPrcB0k8gA00sgQGZg+DMCLQiqhdm7AQgAn6zRQFUDqA3DwQg9i3lOkjgASLx/QjugXlbDvQFHkZECBBgAyHxwQDIgeCuArQiqghjMAUgAs377QEyAxDBC3QjEiakvhOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_graphics_29,x:-2.5,y:-9.1}).wait(1).to({graphics:mask_graphics_30,x:-2.5,y:-6.1}).wait(1).to({graphics:mask_graphics_31,x:-2.5,y:-3.3}).wait(1).to({graphics:mask_graphics_32,x:-2.5,y:-0.6}).wait(1).to({graphics:mask_graphics_33,x:-2.5,y:1.9}).wait(1).to({graphics:mask_graphics_34,x:-2.5,y:4.3}).wait(1).to({graphics:mask_graphics_35,x:-2.5,y:6.5}).wait(1).to({graphics:mask_graphics_36,x:-2.5,y:8.7}).wait(1).to({graphics:mask_graphics_37,x:-2.5,y:10.6}).wait(1).to({graphics:mask_graphics_38,x:-2.5,y:12.4}).wait(1).to({graphics:mask_graphics_39,x:-2.5,y:14.1}).wait(1).to({graphics:mask_graphics_40,x:-2.5,y:15.6}).wait(1).to({graphics:mask_graphics_41,x:-2.5,y:17}).wait(1).to({graphics:mask_graphics_42,x:-2.5,y:18.2}).wait(1).to({graphics:mask_graphics_43,x:-2.5,y:19.3}).wait(1).to({graphics:mask_graphics_44,x:-2.5,y:20.3}).wait(1).to({graphics:mask_graphics_45,x:-2.5,y:21.1}).wait(1).to({graphics:mask_graphics_46,x:-2.5,y:21.7}).wait(1).to({graphics:mask_graphics_47,x:-2.5,y:22.2}).wait(1).to({graphics:mask_graphics_48,x:-2.5,y:22.6}).wait(1).to({graphics:mask_graphics_49,x:-2.5,y:22.8}).wait(1).to({graphics:mask_graphics_50,x:-2.5,y:22.9}).wait(1).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_graphics_79,x:53.5,y:-9.1}).wait(1).to({graphics:mask_graphics_80,x:53.2,y:-6.1}).wait(1).to({graphics:mask_graphics_81,x:53,y:-3.3}).wait(1).to({graphics:mask_graphics_82,x:52.7,y:-0.6}).wait(1).to({graphics:mask_graphics_83,x:52.5,y:1.9}).wait(1).to({graphics:mask_graphics_84,x:52.3,y:4.3}).wait(1).to({graphics:mask_graphics_85,x:52,y:6.5}).wait(1).to({graphics:mask_graphics_86,x:51.8,y:8.7}).wait(1).to({graphics:mask_graphics_87,x:51.7,y:10.6}).wait(1).to({graphics:mask_graphics_88,x:51.5,y:12.4}).wait(1).to({graphics:mask_graphics_89,x:51.3,y:14.1}).wait(1).to({graphics:mask_graphics_90,x:51.2,y:15.6}).wait(1).to({graphics:mask_graphics_91,x:51.1,y:17}).wait(1).to({graphics:mask_graphics_92,x:50.9,y:18.2}).wait(1).to({graphics:mask_graphics_93,x:50.8,y:19.3}).wait(1).to({graphics:mask_graphics_94,x:50.8,y:20.3}).wait(1).to({graphics:mask_graphics_95,x:50.7,y:21.1}).wait(1).to({graphics:mask_graphics_96,x:50.6,y:21.7}).wait(1).to({graphics:mask_graphics_97,x:50.6,y:22.2}).wait(1).to({graphics:mask_graphics_98,x:50.5,y:22.6}).wait(1).to({graphics:mask_graphics_99,x:50.5,y:22.8}).wait(1).to({graphics:mask_graphics_100,x:50.5,y:22.9}).wait(1).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_graphics_129,x:-88.5,y:-9.1}).wait(1).to({graphics:mask_graphics_130,x:-88.4,y:-6.1}).wait(1).to({graphics:mask_graphics_131,x:-88.3,y:-3.3}).wait(1).to({graphics:mask_graphics_132,x:-88.2,y:-0.6}).wait(1).to({graphics:mask_graphics_133,x:-88.1,y:1.9}).wait(1).to({graphics:mask_graphics_134,x:-88.1,y:4.3}).wait(1).to({graphics:mask_graphics_135,x:-88,y:6.5}).wait(1).to({graphics:mask_graphics_136,x:-87.9,y:8.7}).wait(1).to({graphics:mask_graphics_137,x:-87.9,y:10.6}).wait(1).to({graphics:mask_graphics_138,x:-87.8,y:12.4}).wait(1).to({graphics:mask_graphics_139,x:-87.8,y:14.1}).wait(1).to({graphics:mask_graphics_140,x:-87.7,y:15.6}).wait(1).to({graphics:mask_graphics_141,x:-87.7,y:17}).wait(1).to({graphics:mask_graphics_142,x:-87.6,y:18.2}).wait(1).to({graphics:mask_graphics_143,x:-87.6,y:19.3}).wait(1).to({graphics:mask_graphics_144,x:-87.6,y:20.3}).wait(1).to({graphics:mask_graphics_145,x:-87.5,y:21.1}).wait(1).to({graphics:mask_graphics_146,x:-87.5,y:21.7}).wait(1).to({graphics:mask_graphics_147,x:-87.5,y:22.2}).wait(1).to({graphics:mask_graphics_148,x:-87.5,y:22.6}).wait(1).to({graphics:mask_graphics_149,x:-87.5,y:22.8}).wait(1).to({graphics:mask_graphics_150,x:-87.5,y:22.9}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// Layer 3
	this.instance = new lib.firecolorn("synched",0);
	this.instance.setTransform(2.7,-39.5);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({scaleX:19.86,scaleY:19.86,y:-9.5},21).to({_off:true},1).wait(28).to({_off:false,scaleX:1,scaleY:1,x:58.7,y:-39.5},0).to({scaleX:19.86,scaleY:19.86,x:55.7,y:-9.5},21).to({_off:true},1).wait(28).to({_off:false,scaleX:1,scaleY:1,x:-83.3,y:-39.5},0).to({scaleX:19.86,scaleY:19.86,x:-82.3,y:-9.5},21).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Cups3Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// FlashAICB
	this.instance = new lib.rocket_explosion3();
	this.instance.setTransform(163.7,-155,0.139,0.139);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({scaleX:35.85,scaleY:35.85,x:51.7,y:-50.9},10).wait(1));

	// rocket_flight
	this.instance_1 = new lib.rocket_flight3();
	this.instance_1.setTransform(135.7,33,1,1,0,0,0,27.7,64.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,x:148,y:-49.2},5,cjs.Ease.get(1)).to({regY:64.5,scaleX:0.25,scaleY:0.25,x:163.7,y:-155,alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(40));

	// rocket_static
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EBFD8C","#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.545,0.627,0.729,0.835,0.945,0.996],19,64.6,-27.3,-35).s().p("ABuBhIgchPQgXhAg/hGIgXgYQgMgMgigdQgegagPgSQgKgLgHgOIgLgTQgFgNAGgIQAIgNAQAFQAGACAVAMIAZAQQA6AsA3BdIARAeQAaAxAOAwIAVBNQAbBzAABxQgOh5gZhTg");
	this.shape.setTransform(114.9,70.6,0.404,0.404,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.188,0.408,0.647,0.89,1],16.7,-16.3,-19.1,15).s().p("ABoGFQgLgMgGgTIgThQQgThSgOgpQgLgggNgdQgbg/grgoQgwgugzgNIgQlLQBTAgBAA2QAbAZAWAZQAaAeAUAfQAYAmASAtQAMAcAHAWQAIAbAGAaQAaBvAGCGQAAAhgBAgQgDAlgHAXIAAAAQgGAfgXANQgDACgEAAIgCAAQgLAAgLgLg");
	this.shape_1.setTransform(115.6,72.4,0.404,0.404,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#319016","#2F8B15","#2B7D12","#23650D","#174506","#091B01","#000000"],[0,0.145,0.318,0.498,0.69,0.886,1],-13.1,-1.8,-38.6,-6.4).s().p("ABnGVQgTgOgHgbIgZhoQgPg+gMgmQgLgegNgdQgcg/gngmQgxgtg2gMIgRlkQBhAiBGA8QAaAYAYAaQAXAaAYAlQAZAnASAuIATAzQAIAZAHAcQAaBxAFCHQACAdgCAlQgDAlgHAZQgIAjgbAQQgHAEgIAAQgLAAgMgJg");
	this.shape_2.setTransform(115.6,72.3,0.404,0.404,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYi5IAkgBIANFtIghAIg");
	this.shape_3.setTransform(122.5,62.9,0.404,0.404,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EBFD8C","#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.545,0.627,0.729,0.835,0.945,0.996],-16.9,-25.2,20.9,31.1).s().p("AhqBYIAKhRQAHgyASgxIAMghQAshkAxg0QAMgMAKgHQASgPAHgDQAQgIAJAMQAHAIgDANQgCAHgGAOQgGAPgIAMQgMAUgaAdQgeAigKAOIgRAbQg2BOgNBDIgRBSQgNBWAEB6QgQhzAKhzg");
	this.shape_4.setTransform(158,73.7,0.404,0.404,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.188,0.408,0.647,0.89,1],-20.1,-20.7,10.7,8.4).s().p("AhMGgQgYgJgLgeIAAAAQgKgXgIgjQgGgfgEghQgOiHAKhyQACgdAEgXQAEgZAIgbQAKgvATgqQAQgjAVggQATgdAYgcQA2g/BOgrIAgFKQgzAVgnA0QgkAtgUBCQgHAfgGAhQgIAugHBSQgEAugEAjQgCATgKAOQgKAOgMABIgIgCg");
	this.shape_5.setTransform(157,75.2,0.404,0.404,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#319016","#2F8B15","#2B7D12","#23650D","#174506","#091B01","#000000"],[0,0.145,0.318,0.498,0.69,0.886,1],-5.6,-90.3,105.1,-6.8).s().p("AhQGuQgcgLgNgiQgMgYgHgkQgGgegEgjQgOiKAJhyQACgXAFgeIALg1QAMgyATgpQAQgiAVgiQATgcAageQA7hFBagwIAjFkQg0ASgpA2QgjAsgTBAQgJAegEAhQgHAmgGBAIgKBqQgDAcgRARQgMANgOAAQgFAAgGgDg");
	this.shape_6.setTransform(157,75.1,0.404,0.404,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AACC2IgmlpIAkgFIAlFxg");
	this.shape_7.setTransform(151.5,65,0.404,0.404,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.188,0.408,0.647,0.89,1],1.1,5,-2.6,-46.9).s().p("AAhG9QgDgDgBgEIhLtxIAtgDIAwNzQABAEgDADQgCACgEABIgBAAQgDAAgCgCg");
	this.shape_8.setTransform(136.8,75.2,0.404,0.404,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#319016","#2F8B15","#2B7D12","#23650D","#174506","#091B01","#000000"],[0,0.145,0.318,0.498,0.69,0.886,1],4.8,-32.6,7.6,-50.9).s().p("AAaHEQgFgFgBgHIhMt7IA+gEIAzN8QAAAHgFAGQgFAGgHAAIgCAAQgHAAgFgEg");
	this.shape_9.setTransform(136.8,75.2,0.404,0.404,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Agyi9IBTgGIASGCIg/AFg");
	this.shape_10.setTransform(137.6,64,0.404,0.404,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#76C2FB").s().p("AgJACQgYgCgfgEIAAgEQAWADAjACQAiACAlAAIABAKQgtgDgdgEg");
	this.shape_11.setTransform(145.3,82.9,0.404,0.404,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#EFEFEF","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#D3D3D3","#DBDBDB","#EFEFEF","#F6F6F6"],[0,0.039,0.122,0.318,0.557,0.812,0.878,0.976,1],-26.3,2.1,55.3,-3.8).s().p("AiIAIQgigCgfgDIALgDIA3ABQCEADCOgKIBAgHIhJAUQhHAHhEAAQhAAAg/gGg");
	this.shape_12.setTransform(141.9,73.4,0.404,0.404,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BCF87C").s().p("AgSACIhEgDIAAgDQBWAEBWgBIABAGQg2AAgzgDg");
	this.shape_13.setTransform(154.8,10.8,0.404,0.404,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BCF87C").s().p("AgTAFIhDgFIAAgBIABgDICsgDIgBAHIABAIQg2gBg0gCg");
	this.shape_14.setTransform(154.7,10.7,0.404,0.404,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#8CF239","#8EF439","#90F93A","#80D935","#73C031","#84E036"],[0,0.055,0.251,0.482,0.639,1],-52.8,5.1,51.8,-2.5).s().p("AlfArQhbgGg4gHICTACQCEAADcgUQCsgMC1gXQBZgMA4gKQg2APhaASQizAhitANQiGAMhyAAQg3AAgzgDg");
	this.shape_15.setTransform(141.3,9.2,0.404,0.404,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#BAFD6B","#A1F257","#91D253"],[0,0.408,1],-6.5,0.3,56.5,-2.6).s().p("AhJBrIgVjbQBXAEBVgBIARDeQhUAAhUgGg");
	this.shape_16.setTransform(154.4,15.2,0.404,0.404,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8BD944").s().p("AgrhpIA/gNQAOAgACAhIAIB0QACASgLAPQgLAOgRABIgiAIg");
	this.shape_17.setTransform(121.8,12.1,0.404,0.404,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#78E62B","#7AE92C","#7CEE2D","#6BCE26","#5BAE1E","#6ED227"],[0,0.067,0.251,0.459,0.639,1],-51.3,5.1,51.6,-2.4).s().p("AnQCQQgRACgNgNQgNgNgCgTIgIhzQgCgeAHggQHXAjIXhxQAOAgACAhIAIB0QACATgLAOQgLAPgRABQl0BPlPAAQh5AAh1gLg");
	this.shape_18.setTransform(141,13.5,0.404,0.404,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#BAFD6B","#A1F257","#91D253"],[0,0.408,1],-29.4,2.8,27.1,-1.3).s().p("AimIAIgBgFIEvvaQAJggAEgLQAKgGAJgCIgBAEIiiQMIADAVg");
	this.shape_19.setTransform(151.5,-9.9,0.404,0.404,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#80C542","#7DBF41","#76B33F","#73AC3E","#72AA3E","#7CBC40"],[0,0.039,0.149,0.298,0.655,1],26.4,15.5,-169.8,-95.8).s().p("AD6IXQgKgkgQguQg7ighzjeQiBj0g+h+IgqhTIhSimIgSgnQARAIANAVIH3OFQAWAnADAuIAJB2QABANgFALQgFALgKAHIgPg1g");
	this.shape_20.setTransform(131.5,-7.4,0.404,0.404,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#73DC29","#73DC29","#7AE92C","#7CEE2D","#6BCD26","#4D9318","#60B821"],[0,0.004,0.133,0.251,0.4,0.639,1],-54,3.3,46.9,-4).s().p("AnQJwQgRABgNgMQgNgNgCgUIgIh1QgDguAQgqIFyvEQAQgpAngDQAngCAVAmIH3OEQAXAoADAuIAIB1QACATgLAPQgLAOgRABQl0BPlPAAQh5AAh1gKg");
	this.shape_21.setTransform(141,-5.8,0.404,0.404,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFFFFF","#FFFFFF","#FFFFFF","#EBEBEB","#D6D6D6","#DEDEDE","#EBEBEB"],[0,0.047,0.318,0.541,0.812,0.906,1],-21.6,1.2,58.9,-4.6).s().p("AieATQgkgFgRgYIA/gTQCvANC5gRIjkBDQhGgDhIgMg");
	this.shape_22.setTransform(143.9,74.7,0.404,0.404,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E3E3E3").s().p("AhYgeICugMIADAjIipAyg");
	this.shape_23.setTransform(151.5,19.5,0.404,0.404,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AALLKIgHg9ICAgnIAHBnIgUAHQgygDg6gHgAgTGlICGgpIAHBnIiCAogAgrC9ICNgsIAHBoIiJAqgAhEgpICWguIAHBlIiSAtgAhdkSICegwIAHBoIiaAvgAh1n6IClgyIAHBnIihAygAiKrGICtgNIADAkIioA0g");
	this.shape_24.setTransform(149.4,46.9,0.404,0.404,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#137DD6").s().p("AhRA0IgJhbICugMIAHBlQg5ACg5AAIg6AAg");
	this.shape_25.setTransform(151.4,19.8,0.404,0.404,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D1D1D4").s().p("AgTgUIAlgMIACA6IglAHg");
	this.shape_26.setTransform(122.9,18.1,0.404,0.404,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EEEEEB").s().p("AAAIjIAjgMIADBpIgkALgAgHE1IAjgLIADBpIgiALgAgPBIIAlgLIADBoIgkAMgAgWijIAlgMIACBpIgjALgAgdmRIAkgLIADBoIglAMgAglp+IAmgMIADBoIgmAMg");
	this.shape_27.setTransform(122.1,43,0.404,0.404,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#C3C3C3","#CDCDCD","#DADADA","#E1E1E1","#E3E3E3","#D7D7D7","#A2A2A2","#8D8D8D","#949494","#A9A9A9","#CACACA","#D1D1D1"],[0,0.027,0.078,0.149,0.318,0.38,0.671,0.812,0.855,0.914,0.988,1],-42.9,3.2,43.3,-3.1).s().p("AnCA+IgJhQIG1ggIl+BxgAHLg/IABA9Qi/AfiwARg");
	this.shape_28.setTransform(140.6,19.3,0.404,0.404,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#DBDBDB","#EAEAEA","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#B3B3B3","#9E9E9E","#A6A6A6","#BABABA","#DBDBDB","#EBEBEB"],[0,0.035,0.086,0.153,0.318,0.42,0.686,0.812,0.851,0.906,0.973,1],-39.9,2.9,46.5,-3.4).s().p("AkCLSQgkgFgSgcIMUjvIADBpIpWC2QhCgEhJgLgAlYHLIMtj2IADBoIskD0gAlzDkINCj7IADBnIs5D6gAmOgBINWkDIADBoItND/gAmpjpINqkJIADBoIthEHgAnEnQIN+kPIADBoIt1EMgAneq1IG+ghImzCFg");
	this.shape_29.setTransform(139.9,46.5,0.404,0.404,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#1173C4","#1172C3","#0E66AF","#095490","#084D84"],[0,0.314,0.494,0.82,1],-45.7,4.4,45.9,-2.2).s().p("AnCBIIgJhQIOVhDIACBRQmGBGloAAQhRAAhPgEg");
	this.shape_30.setTransform(140.6,18.9,0.404,0.404,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1994FB").s().p("AAKLJIiV2QICugMIBpWnQhDgDg/gIg");
	this.shape_31.setTransform(149.4,46.9,0.404,0.404,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3B87C2").s().p("AgQgTIAhgIIAAAIIgBAHIAAAAIgBADIAAABIgBADIAAAAIgCAEIAAABIgCAAIAAABIgCADIAAABIgIAMIAAAAIgPALg");
	this.shape_32.setTransform(121.3,72,0.404,0.404,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#2B95E8","#2B96EA","#2D9EF7","#2DA1FC","#2B8FDC","#2A7FC1","#2984C9"],[0,0.016,0.141,0.251,0.569,0.808,1],-38.7,3.9,39,-1.7).s().p("AkSAhQgrgCgogFIgegEQArADBHABQCEADCOgMQCEgMCOgWQBGgMArgIQgqAMhFAPQiXAfh8ALQhLAGhJAAQhBAAg/gFg");
	this.shape_33.setTransform(136.4,72.4,0.404,0.404,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#1480DB","#1584E2","#178CEF","#188FF4","#137CD3","#0E66AE","#0F6BB7"],[0,0.043,0.153,0.251,0.525,0.808,1],-42.6,4.3,47.7,-2.2).s().p("AlRAyQgZgEgSgQQgRgPgCgTIAAgCQF5ApGmhkIAAADQAAAVgPARQgPASgZAGQjyBCjeAAQhvAAhrgQg");
	this.shape_34.setTransform(136.7,73.5,0.404,0.404,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3A84BB").s().p("AgmrCIAmgDIAnVVQAAAQgJAOQgJAOgQAKg");
	this.shape_35.setTransform(122.1,44.5,0.404,0.404,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#1480DB","#1480DB","#1688E8","#178AED","#1278CC","#0A5592","#0F6BB7"],[0,0.004,0.133,0.251,0.467,0.808,1],-41.6,4.7,51.3,-2).s().p("AkCLbQgZgDgSgQQgRgQgCgVIie1LIOVhDIAoVUQAAAVgPASQgPARgZAHQjyBEjfAAQhuAAhrgRg");
	this.shape_36.setTransform(139.9,46,0.404,0.404,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58A2DA").s().p("Ag+AhIgHhCICFgKIAHBXQhAgChFgJg");
	this.shape_37.setTransform(145.9,76.2,0.404,0.404,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4581AE").s().p("AgegfIA7gEIACAzQgLAIgMACIgiAKg");
	this.shape_38.setTransform(123.6,74.3,0.404,0.404,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#1071C0","#1278CC","#137AD0","#0F6DB9","#0B5A9A","#084F87","#074B80","#0C5FA2"],[0,0.125,0.251,0.369,0.549,0.702,0.808,1],-34.8,3.6,35.4,-1.4).s().p("Ak8AwQgQgCgNgIIgFgxIK8gzIABA1QgLAIgMABQjkA/jTAAQhoAAhlgPg");
	this.shape_39.setTransform(136.6,75.4,0.404,0.404,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#59B5FA").s().p("AAkAcIgBAAIgPgBIgCAAIgcgDIgCAAIgfgEIgCAAIgRgDIgEguQBDAJA+ACIAEAwg");
	this.shape_40.setTransform(145.3,83.8,0.404,0.404,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#479AD8").s().p("AgagNIAagHQANgEANgKIABAPQAAASgNANQgNAPgTAGIgGACg");
	this.shape_41.setTransform(123.3,81.4,0.404,0.404,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#60A8DD").s().p("AgYAEIAxgMQgSAIgeAJg");
	this.shape_42.setTransform(123.4,80.5,0.404,0.404,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#1990F4","#1E96F9","#2199FC","#2097F8","#1983D9","#1576C6","#1472BF","#1784E0"],[0,0.11,0.251,0.275,0.494,0.678,0.808,1],-33.6,3.5,34,-1.4).s().p("AjvAfQgogEgggIIgZgIIAaAGQAhAFAnACQBpAGCHgLQB9gKBygWQA8gNAkgMQgiAQg7AQQh1Afh8AKQg4AEg1AAQhHAAg+gIg");
	this.shape_43.setTransform(136,81.7,0.404,0.404,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#1685E5","#1689EA","#1891F7","#1994FB","#1689E9","#1276CA","#0F6BB7","#0E67B0","#137AD1"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-33.7,3.5,35.3,-1.5).s().p("AkfAxQgWgEgPgNQgOgNgDgSIgBgMQANAIAQACQEpAtFLhcQAOgEAOgKIAAAPQABASgNAPQgNAOgWAFQjPA6i+AAQhfAAhbgOg");
	this.shape_44.setTransform(136.1,82.5,0.404,0.404,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#59B0F1").s().p("AgyB3IgCgBIgYjvICGgKIATEHQhFgDg6gKg");
	this.shape_45.setTransform(145.7,79.7,0.404,0.404,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#468DC2").s().p("Aggh1IA7gFIAGC+QAAARgNAPQgNAQgTAGIgGABg");
	this.shape_46.setTransform(123.5,77.8,0.404,0.404,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#1480DB","#1480DB","#1688E8","#178AED","#1277CB","#0D65AC","#0B5999","#0A5592","#0F6BB7"],[0,0.004,0.133,0.251,0.404,0.569,0.71,0.808,1],-34.1,3.6,36.4,-1.5).s().p("AkVCJQgWgEgPgNQgOgNgDgSIgWi8IK9gzIAFC9QABASgNAPQgNAPgWAGQjPA6i+AAQhfAAhbgOg");
	this.shape_47.setTransform(136.5,79,0.404,0.404,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7CB7E2").s().p("AgdBtIgCgXIgIhHQgFgsAFgWQADgPAKgSQAKgSAKgJIAWgCQANANAEAxQACAbABAmIAHBkQgvgDgZgCg");
	this.shape_48.setTransform(142.3,82.1,0.404,0.404,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3979A9").s().p("AgNBYIgHhHQgEgtACgWQABgOAEgRQAFgSAFgJIALgBQAHANAEAyIAEBAIAFBTIgjAJg");
	this.shape_49.setTransform(127.7,80.9,0.404,0.404,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#1071C0","#1278CC","#137AD0","#0E68B2","#0A5896","#084F86","#074B80","#0C5FA2"],[0,0.125,0.251,0.396,0.557,0.702,0.808,1],-22.5,2.3,22.9,-1).s().p("AjWB3IgSjUIHEghIANDSQikAriZAAQhCAAhAgIg");
	this.shape_50.setTransform(136.1,81.5,0.404,0.404,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#95D1FC").s().p("AgiAAIAAgFQAgADAkABIABAHQglgCgggEg");
	this.shape_51.setTransform(141.4,94.5,0.404,0.404,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7DC6FC").s().p("AggAQIgDgmQAjAEAhACIADAng");
	this.shape_52.setTransform(141.3,95.2,0.404,0.404,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3C92D3").s().p("AgQgNIAQgEQAIgDAIgGIABAUQABAOgQAMQgEAEgJADIgBAAg");
	this.shape_53.setTransform(126.9,93.6,0.404,0.404,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#60A8DD").s().p("AgNABIAbgFIgbAJg");
	this.shape_54.setTransform(127,92.9,0.404,0.404,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#1A90F4","#1F97F9","#229AFC","#2299F9","#1B85DA","#1778C7","#1674C0","#1885E0"],[0,0.11,0.251,0.271,0.49,0.678,0.808,1],-21.7,2.2,21.9,-0.9).s().p("Ah6AZQg1gDgpgNQAwAIA8gBQAqgBBCgFIBygMIBCgOIAlgIIgjANQgZAJgXADIgSAEQgXAGhMAKIgpACQgqACgfAAIgZAAg");
	this.shape_55.setTransform(135.2,93.7,0.404,0.404,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#1685E5","#1689EA","#1891F7","#1994FB","#1689E9","#1276CA","#0F6BB7","#0E67B0","#137AD1"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-22.6,2.3,22.7,-0.9).s().p("Ai5AkQgOgCgKgJQgJgIgCgMIgBgNQAFADAGAAQDEAcDZg7QAKgDAIgGIABAUQAAAMgIAJQgIAIgOAEQiGAmh7AAQg9AAg7gKg");
	this.shape_56.setTransform(135.2,94.4,0.404,0.404,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7DC1F4").s().p("AgQDgIgYj+IgIhHQgFguAFgWQADgPAKgSQAKgSALgJIAVgCQANANAEAxQACAbABAoIAYFOQgigCghgGg");
	this.shape_57.setTransform(142,86.8,0.404,0.404,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3A85BE").s().p("AgTgaIgIhIQgEgvACgWQABgOAFgQQAEgTAGgJIAMAAQAFANAEAxIAEBCIASEgQABAMgJAKQgIAJgOAEIAAAAg");
	this.shape_58.setTransform(127.4,85.6,0.404,0.404,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#1480DB","#1480DB","#1688E8","#178AED","#1688E9","#1172C3","#0D63A8","#0B5998","#0A5592","#0F6BB7"],[0,0.004,0.133,0.251,0.267,0.427,0.576,0.71,0.808,1],-22.8,2.4,23.5,-1).s().p("AioDsQgOgCgKgJQgJgIgCgMIgjmgIHEghIAZGhQAAAMgIAJQgIAKgOAEQiGAlh7AAQg9AAg7gJg");
	this.shape_59.setTransform(135.9,86.3,0.404,0.404,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#73B2E0").s().p("AgKgYIARgBIAEAyIgRACg");
	this.shape_60.setTransform(135.5,96.3,0.404,0.404,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#053F6C","#09518B","#0D63A9","#1070BF","#1278CC","#137AD0","#1277CB","#106FBD","#0D62A6","#084F86","#074B80"],[0,0.082,0.184,0.286,0.38,0.467,0.576,0.702,0.835,0.976,1],-5.5,0.4,4.9,-0.3).s().p("Ag0jLIBLgFIAeGcQgpAFgiAAg");
	this.shape_61.setTransform(135.5,88.9,0.404,0.404,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CECECE").s().p("AAWDrIgFg+QgJhigYjLIAAgBIgNhoIAJgBIAKBPQAOCAAJBTIAEAlQAKBpADAlg");
	this.shape_62.setTransform(138.2,87.9,0.404,0.404,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#AFAFAF").s().p("AARDrIgEg9QgKhkgXjKIgNhpIARgBIAKBOQARCWAGA+IAEAkQAKBbADA0g");
	this.shape_63.setTransform(138.2,87.9,0.404,0.404,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#848484").s().p("AAJCuQgIhUgNh2IgZjMIAZgCIAEAeQAZDWAFAuQAOCNACAmIgZAAg");
	this.shape_64.setTransform(138.2,87.9,0.404,0.404,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},29).wait(61));

	// spark
	this.instance_2 = new lib.SparkAni();
	this.instance_2.setTransform(149.2,145.1,1,1,0,0,0,14,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({x:136,y:107.5},9).to({_off:true},1).wait(61));

	// fuse
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EBEBEB").s().p("AAzFXIgBgBQggglgWgvQgVgugMgyQgUhWAGh0QABgbAGg9IACgSIAMhtIAKhVQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIABABIAAABIgLBjQgLBfgFA7QgKB0AMBYQARBvA0BPQALARAPAQIAAABIgCACIAAAAg");
	this.shape_65.setTransform(142.1,103.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C7C7C7").s().p("AAxFXQghgmgVgvQgWgtgLgzQgUhXAGhzIAHhYIACgTIAMhsIAJhVQAAgBABgBQAAgBAAAAQABAAAAAAQABgBABABIACABIABACIgLBjIgRCbQgKBzANBYQAQBvA0BOQAMARAOAQQAAAAAAABQABAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgCgCgAgUlUIgKBVIgMBtIgCASQgGA9gBAbQgGB0AUBWQAMAyAVAuQAWAvAgAlIABABQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABgBIAAgBQgPgQgLgRQg0hPgRhvQgMhYAKh0QAFg7ALhfIALhjIAAgBIgBgBQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABg");
	this.shape_66.setTransform(142.1,103.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#969696").s().p("AAvFZQg+hLgZhrQgUhYAGhzIAJhrIAPiFIAGg9QABgFAFABQAFAAAAAFIgPB/IgNB/QgKBzANBYQAQBuAzBOQAMARAOAQQADADgEAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAgWlUIgJBVIgMBsIgCATIgHBYQgGBzAUBXQALAzAWAtQAVAvAhAmIACACQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgOgQgMgRQg0hOgQhvQgNhYAKhzIARibIALhjIgBgCIgCgBIgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBABAAABg");
	this.shape_67.setTransform(142.1,103.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#969696").s().p("AgJDTQgUhXAGh2IAJhoIAOiFIAGg9QAAgFAFAAQAFABAAAFIgOB+IgLB/QgLBzANBYQAIBFAYA4IgBABQgYg4gIhGQgNhYAKhzIAOibIALhjIAAgCIgDgBQgBAAAAAAQgBABAAAAQgBAAAAABQAAABAAAAIgIBWIgMBsIgCATIgHBVQgGB1AUBYQAIAsASApIgBACQgSgogJgvg");
	this.shape_68.setTransform(138.9,98.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C7C7C7").s().p("AgHDTQgUhYAGh1IAHhVIACgTIAMhsIAHhWQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAIACABIABACIgLBjIgPCbQgKBzANBYQAJBGAYA4IgBABQgXg5gLhFQgMhZAKhzQAFg8AJhfIALhjIAAgBIgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIgJBWIgLBsIgCATQgGA8gBAZQgGB2AUBWQAIAsASApIgBABQgSgpgIgsg");
	this.shape_69.setTransform(139,98.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EBEBEB").s().p("AgGDSQgUhWAGh2QABgZAGg9IACgSIALhtIAIhVQAAAAABgBQAAAAAAAAQAAAAABAAQAAgBAAAAIABABIABABIgLBjQgJBfgGA8QgKBzANBZQAKBFAXA5IgCADQgSgpgIgsg");
	this.shape_70.setTransform(139,98.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#969696").s().p("AgEDxQgUhYAGh1IAJhpIANiFIAGg9QABgFAFABQAFAAAAAFIgPB/IgLB/QgKBzANBYQADAlAKAhIgCABQgJgigEglQgNhYAKhzIAPibIALhjIgBgCIgCgBQgBgBgBABQAAAAgBAAQAAAAAAABQgBABAAABIgJBVIgKBsIgCATIgHBWQgGB1AUBXIAFAcIgCABIgFgcg");
	this.shape_71.setTransform(138.5,95.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C7C7C7").s().p("AgCDvQgUhXAGh1IAHhWIACgTIAKhsIAJhVQAAgBABgBQAAAAAAgBQABAAAAAAQABAAABAAIACABIABACIgLBjIgPCbQgKBzANBYQAEAlAJAiIgBABQgIgigGgmQgMhYAKh0QAFg7AJhfIALhjIAAgBIgBgBQgBAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIgKBVIgKBtIgCASQgGA7gBAbQgGB2AUBWIAFAcIgBAAIgFgcg");
	this.shape_72.setTransform(138.5,95.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EBEBEB").s().p("AgBDuQgUhWAGh2QABgbAGg6IACgTIAKhsIAKhWQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIABAAIAAABIgLBjQgJBfgFA8QgKBzAMBZQAGAlAIAiIgEABIgFgcg");
	this.shape_73.setTransform(138.5,95.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EBEBEB").s().p("AgHDuQgNhMAFhkQABgaAGg7IACgSIAKhtIAKhWQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIABAAIAAABIgDAaIgIBJQgJBfgFA6QgKB1AMBZIADAQIgEAAg");
	this.shape_74.setTransform(138.5,92.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C7C7C7").s().p("AgIDvQgNhOAFhiIAHhVIACgTIAKhsIAJhWQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAIACABIABACIgDAZIgIBKIgPCZQgKB1ANBYIADARIgCAAIgDgQQgMhZAKh1QAFg6AJhfIAIhKIADgZIAAgBIgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIgKBWIgKBsIgCATQgGA6gBAbQgFBjANBNIAAAAIgBAAIAAAAg");
	this.shape_75.setTransform(138.5,92.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#969696").s().p("AgKDwQgNhNAFhjIAJhoIANiFIAEgkIACgZQABgFAFAAQAFABAAAFIgDAYIgMBmIgLB9QgKB1ANBYIACARIgBAAIgDgRQgNhYAKh1IAPiZIAIhKIADgZIgBgCIgCgBQgBAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABIgJBWIgKBsIgCATIgHBVQgFBiANBOIgBAAIgBAAg");
	this.shape_76.setTransform(138.5,92.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#969696").s().p("AgSBhIAJhoIANiFIAGg9QABgFAFAAQAFABAAAFIgPB+IgLB9QgHBTAEBFIgBABQgFhFAHhUIAPiZIALhjIgBgCIgCgBQgBAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABIgJBWIgKBsIgCARIgHBXQgDA6ADAzIgCABQgDgzADg7g");
	this.shape_77.setTransform(138.5,89.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C7C7C7").s().p("AgQBhIAHhYIACgRIAKhsIAJhVQAAgBABgBQAAAAAAgBQABAAAAAAQABAAABAAIACABIABACIgLBjIgPCZQgHBTAFBFIgCAAQgEhFAHhUQAFg5AJhfIALhjIAAgBIgBgBQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIgKBVIgKBtIgCAQQgGA9gBAbQgDA6AEAyIgCAAQgDgyADg6g");
	this.shape_78.setTransform(138.5,89.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EBEBEB").s().p("AgPBgQABgbAGg8IACgRIAKhsIAKhWQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAIABAAIAAABIgLBjQgJBfgFA6QgHBUAEBFIgDABQgEgyADg6g");
	this.shape_79.setTransform(138.5,89.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EBEBEB").s().p("AgPCMQABgbAGg8IACgTIAKhqIAJhWQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIABAAIABABIgLBjQgJBdgGA8QgDAigBAgIgDAAIABgUg");
	this.shape_80.setTransform(138.5,84.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C7C7C7").s().p("AgRCNIAHhYIACgTIAKhqIAKhVQAAgBAAgBQABAAAAgBQAAAAABAAQABAAAAAAIADABIAAACIgLBjIgOCZQgDAigBAfIgCABQABggADgjQAGg7AJhdIALhjIgBgBIgBgBQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIgJBVIgKBrIgCASQgGA9gBAbIgBAUIgBAAIAAgUg");
	this.shape_81.setTransform(138.5,84.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#969696").s().p("AgTCOIAJhrIANiDIAHg9QAAgFAFABQAFAAAAAFIgOB/IgLB9QgDAigBAfIgCAAQABgfADgiIAOiZIALhjIAAgCIgDgBQAAAAgBAAQgBAAAAAAQAAABgBAAQAAABAAABIgKBVIgKBqIgCATIgHBYIAAAUIgCAAIAAgUg");
	this.shape_82.setTransform(138.5,84.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#969696").s().p("AgKAuIANiDIAHg9QAAgFAFAAQAFABAAAFIgPB+IgKB9IgEApIgBABIACgqIAPiZIALhjIgBgCIgCgBQgBAAAAAAQgBABAAAAQgBAAAAABQAAABAAAAIgKBWIgKBqIgCATIgHBWIgCABIAJhqg");
	this.shape_83.setTransform(138.6,83.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C7C7C7").s().p("AgKBAIACgTIAKhqIAKhVQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIACABIABACIgLBjIgPCZIgCApIgCABIADgrQAFg7AJhdIALhjIAAgBIgBgBQAAAAgBAAQAAAAgBABQAAAAAAAAQAAAAAAABIgJBVIgKBrIgDASQgFA6gBAcIgCAAIAHhWg");
	this.shape_84.setTransform(138.6,83.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EBEBEB").s().p("AgJBAIADgTIAKhqIAJhWQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIABAAIAAABIgLBjQgJBdgFA8IgDArIgDABQABgbAFg6g");
	this.shape_85.setTransform(138.6,83.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EBEBEB").s().p("AgNB0IACgUIACgSIAKhrIAJhVQAAgBABAAQAAAAAAAAQAAAAABgBQAAAAABAAIABABIAAABIgLBjIgNCEIgDgBg");
	this.shape_86.setTransform(138.8,80.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C7C7C7").s().p("AgKB1IANiDIALhjIgBgBIgBgBQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIgJBVIgKBrIgCASIgCAUIgBAAIABgUIACgTIALhqIAJhVQAAgBAAgBQABgBAAAAQAAAAABAAQABgBAAABIADABIAAACIgLBjIgMCEIgCgBg");
	this.shape_87.setTransform(138.8,80.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#969696").s().p("AgIB2IAMiEIALhjIAAgCIgDgBQAAAAgBAAQgBABAAAAQgBAAAAABQAAABAAAAIgJBWIgLBqIgCATIgCAUIgBgBIADgmIANiDIAHg9QAAgFAFAAQAFABAAAFIgOB8IgJBrIgCgBg");
	this.shape_88.setTransform(138.8,80.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},19).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_68},{t:this.shape_69},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},1).to({state:[]},1).wait(61));

	// stick
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#73BCF3").s().p("AhLuXIATgBICEcwIgTABg");
	this.shape_89.setTransform(132.9,131.8,0.404,0.404,0,0,180);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#07487B","#074B80","#0D62A7","#1174C5","#1480DB","#1688E8","#178AED","#1688E8","#1480DA","#1172C3","#0C5FA3","#0A5592"],[0,0.012,0.11,0.204,0.298,0.384,0.467,0.569,0.686,0.812,0.941,1],5,-0.3,-6.2,0.5).s().p("AiL2HIBMgFMADLAsUIhMAFg");
	this.shape_90.setTransform(133.9,111.7,0.404,0.404,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90},{t:this.shape_89}]}).wait(90));

	// Rockets_noMove
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#A7A7A7").s().p("AgTAvQgJglgHgsIA8gTIAKBLQABAGgDAFQgEAFgGACIgoAOg");
	this.shape_91.setTransform(13.4,-6.4,0.401,0.401);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#3B3638","#585556","#7E7C7D","#959595","#9E9E9E"],[0,0.227,0.565,0.835,1],-41.4,-4.7,35.2,4.7).s().p("ADNExQgGgYgQhgQgMhJgSgrQgMgbgKgPQgYgegYgcQgdgfgZgXQhshmi1h7QAagBAWANQDVB2CxDJQA6BCAMBbIANBmQABAGgEAFQgDAFgHACIgqANg");
	this.shape_92.setTransform(4.4,-16.7,0.401,0.401);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CBCBCB").s().p("AhWAsQgGgsgBgtQBZADBegEQABAqADAxIgvABIgSABQg1AAg+gDg");
	this.shape_93.setTransform(-15.6,-1.8,0.401,0.401);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.rf(["#E6EDF2","#E3EAEE","#C1C4C7","#ADADAE","#A5A5A5"],[0,0.035,0.459,0.796,1],36.7,3.7,0,36.7,3.7,77.4).s().p("AiSFoQgfjZBiiTQAQgdAig3ICgkJQALgGAMgDQgjBmgYBcIgVBWQghBkgIB3QgHBiAIB/IhGABQg3AAg3gDg");
	this.shape_94.setTransform(-13.2,-14.5,0.401,0.401);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#868686","#888888","#8C8C8C","#6B6B6B","#1F1F1F","#787878"],[0,0.035,0.251,0.38,0.639,1],-43.9,7.7,50.7,-4.6).s().p("AmtBmQgHgBgFgEQgEgEgBgGIgKhMQHCAbHFiQIAKBNQABAGgDAFQgEAFgGACQlwB2lnAAQhKAAhJgFg");
	this.shape_95.setTransform(-3.5,-4.2,0.401,0.401);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-40.9,4.1,37.5,-6.1).s().p("AmqFnQgHAAgFgEQgEgEgBgGIgOhmQgMhbAphNQB2jgCzi5QAXgXAhgFQAigFAcAQQDVB2CyDLQA5BAAMBbIANBmQABAGgDAFQgEAFgGACQlwB3lnAAQhKAAhJgFg");
	this.shape_96.setTransform(-3.6,-14.6,0.401,0.401);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D5CC31").s().p("AhQBYIgRhjQAOgJAPgBQAdgEAYASQAVAQAEAdQADAbgOAXIgVABIg6gBgABDg/QgOgKgIgPIAwABIAFAlQgRgCgOgLg");
	this.shape_97.setTransform(-13.4,-1.7,0.401,0.401);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D1A929").s().p("AhUBYIgbicICVgUIAyABIAYCrQhIAFhAAAIg8gBg");
	this.shape_98.setTransform(-13.2,-1.7,0.401,0.401);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#D4B12B","#D4AB29","#B36A1C"],[0,0.498,1],-43.1,6.5,32.7,-3.4).s().p("AmEB4QgJgNgDgSQgDgdARgXQASgXAdgEQAdgDAXARQAYASAEAdQADAcgQAXIgfAAQgtAAgogCgAgSBUQgEgdASgXQAQgXAdgEQAdgEAXASQAYASADAdQABAIgBAIQg/AMhGAKQgEgIgBgMgAhwBXQgLgIgCgNQgCgOAJgKQAIgLANgCQAOgCALAJQAKAIACANQACAOgIALQgJAKgNACIgFAAQgKAAgJgHgAEIAhQAIgIALgBQASgCAMAOIg6AQQABgLAIgIgAGRAGIAAAEIgNAEQAHgFAGgDgAjCgYQgUgLgKgUICFgRQgFAWgQAPQgRAQgWADIgKABQgRAAgQgJgACwgjQgXgSgEgdQgBgKABgMICGgRQAFAJABALQAEAdgSAYQgSAXgdAEIgKABQgXAAgTgPgAA8hMQgKgFgEgJIA9gIQgCAKgIAHQgHAHgLABIgEABQgIAAgHgEg");
	this.shape_99.setTransform(-2.5,-3,0.401,0.401);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#B76C1D").s().p("AglhJIA/gJIAMCSIg8ATg");
	this.shape_100.setTransform(12.1,-5.2,0.401,0.401);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.rf(["#AF571A","#A75319"],[0,1],-4,8.6,0,-4,8.6,46.1).s().p("AmUB8IgBAAIgaiNINUhvIAMCRQlfBwlXAAQhIAAhHgFg");
	this.shape_101.setTransform(-3.8,-3.3,0.401,0.401);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EEB329").s().p("ABHQmQANADAIAEIgBACIgCACIgBADIgCACIgFAHIgHAGgAA/POIgEgrQAIgLAOgCQAIgBAHACIAEA8QgEADgGABIgGAAQgMAAgJgJgAApLeQAhAMALAhIACAhQgFAhgdARgAAiKKIgGg9IAKgDQAKgBAJAEQAJAFAFAJIACAaQgGATgVADIgDAAIgJgBgAAMGYQAcASAEAhQAFAlgbAYgAAAD+QAKgBAKAIQAKAIABANQACANgIALQgIAKgNACgAgPBYQAPARABAWQAEAagNAVgAgehKQARAGADAUQABAJgEAJQgEAJgIAFgAgMlhQgDgVAKgVIAFBKQgJgOgDgSgAg7mLQAFAHABAIQABAJgEAJgAg3qtQgCgSAGgRQAGgQANgLIAJBwQgcgSgEgggAhRvUQgOgQgDgVQgDgYALgUQALgUAUgJIALCDQgUgGgNgPg");
	this.shape_102.setTransform(16,41,0.401,0.401);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#CE7822").s().p("AgRgYIADgCQAPgGAPgNIACAYIAAAMIgBABIAAAHIgBABIgDAJIgEALIgJAOIgDAFIgBACIgGAFg");
	this.shape_103.setTransform(19.4,82.9,0.401,0.401);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D7791E").s().p("Ah3yCIBBgIMACuAjPQADApghAdg");
	this.shape_104.setTransform(15.4,38.1,0.401,0.401);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FEF539").s().p("ADGSMQgLgNgCgTQgEgbAQgWQAPgXAbgGIAPBzQgZgBgfgEgABsQ1QANgBAKAIQAKAIACANQACAMgHALQgHAKgMADgABPODQAdASAFAhQAEAfgVAYgACmNNQgVgSgDgbQgEgaAPgXQAPgVAagIIATCLIgCABQgaAAgTgRgABAMqIgLg+IAKgDQAOgCALAIQAKAJACANQACAOgJAKQgIALgNACIgEAAIgEAAgAAWIwQATAGANAQQANAQADAUQACAUgHARQgIARgOAMgAB6IAQgUgRgEgbQgDgaAOgWQAPgWAZgHIASCLQgagBgTgRgAAHHZIgHgwQAIgLAMgBQANgCALAIQALAJACANQABAOgIAKQgIALgOACIgEAAQgKAAgHgFgAggDhQAXADAPARQARASADAXQADAXgKAUQgLATgSALgABNCzQgTgRgDgaQgEgaAPgVQANgWAYgIIATCLQgZgCgUgRgAglCLQgLgIgBgNQgCgOAIgLQAIgLAOgBQANgCAJAIQALAIABAOQACANgIALQgHALgNACIgFAAQgKAAgJgHgAhYhpQAbgBAVARQAVARAEAcQADAagOAUQgOAVgZAIgAAiiXQgTgSgDgZQgEgZAOgWQANgVAXgIIATCKQgZgCgSgRgAhQi/QgLgJgCgMQgCgOAJgLQAIgLANgBQAOgCALAJQAKAHACAOQACANgIALQgJALgNABIgFABQgKAAgJgHgAh4koIgYiMIAGgBQAegDAXARQAXASAEAdQAEAdgSAYQgSAXgdAEgAgInkQgSgSgEgYQgDgZANgVQANgVAUgIIATCIQgYgDgQgQgAh8oLQgKgJgCgNQgCgNAJgLQAIgLANgBQAOgCAKAJQALAHACAOQACANgJALQgIALgNABIgEABQgLAAgKgHgAjHr8QALgFAHAAQAdgEAXASQAYASADAdQAEAdgSAYQgSAXgdAEIgNAAgAg0sxQgSgRgDgZQgDgXAMgWQAMgUAWgJIATCIQgYgDgRgRgAintXQgKgJgCgNQgCgNAIgLQAIgLAOgCQANgBALAIQALAJABAMQACAOgIALQgIAKgOACIgEABQgLAAgJgHgAjovCIgViBQAOgIAPgCQAdgEAXASQAYASADAdQAEAdgSAXQgSAXgdAFIgJAAQgJAAgIgCgAhXx2QgOgKgIgPIAvAAIAFAmQgQgDgOgKg");
	this.shape_105.setTransform(-7.1,41.6,0.401,0.401);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FCD638").s().p("AgOAnIgBAAIglgGIgGgCIgOhNQBIANA+ABIAKBPQgugCgogGg");
	this.shape_106.setTransform(0.2,86.6,0.401,0.401);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#FDD332","#FBCA30","#F9C12E"],[0,0.4,1],-30,-11.5,94.9,28.5).s().p("ACNSDIgPgCMgGAgj9ICXgTIAyAAMAE8AkgQg+gDg4gLg");
	this.shape_107.setTransform(-7.3,41.6,0.401,0.401);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#FED232","#FEDB33","#FEE234","#FEE434","#EB9925","#D57A1E"],[0,0.059,0.157,0.384,0.631,1],-29.9,3.3,24.6,-3.8).s().p("AiIA7IglgDIgBAAQgKgOgDgTQgDgXANgVQA+AFA8gEQAHAOACALQAEAfgVAYIgOAAIgFABgAkZAbQgKgJgCgNQgCgLAJgLQAIgLANgCQAOgCAKAJQALAIACANQACAMgJALQgIAKgNACIgFABQgLAAgJgHgABjAVQgLgIgBgNQgCgMAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAMgIALQgIAKgOACIgFAAQgKAAgJgHgADSgkQASgUAagDQAWgDATAKIgBABIgCADIgCADIgJAKIgOAMIhEAcIgHADQABgYARgUg");
	this.shape_108.setTransform(7.9,86.1,0.401,0.401);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#FED232","#FED331","#EB9925","#D57A1E"],[0,0.384,0.631,1],-35.4,6.7,38.8,-2.9).s().p("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ANgCQAOgBALAIQAKAIACAOQACANgJALQgIAIgNACIgFAAQgLAAgIgGgAE9AAQgKgIgCgNQgCgOAIgKQAIgLAOgCQANgCALAJQALAIACANQABAOgIALQgIAIgOACIgFAAQgKAAgJgFgAiahyQgXgSgEgdQgDgdARgXQASgXAdgEQAegEAXASQAXASAEAdQAEAdgSAXQgSAYgdADIgLABQgXAAgTgPgADih3QgXgSgEgdQgEgdASgYQASgXAdgEQAdgDAXASQAYASADAdQAEAdgSAXQgSAXgdAEIgKAAQgYAAgSgOgAkTieQgKgIgCgNQgCgOAIgLQAJgKANgCQANgCALAJQALAIACANQABAOgIAKQgIALgOACIgFAAQgKAAgJgHgABpijQgLgIgCgOQgBgNAIgLQAIgKAOgCQANgCALAIQAKAJACANQACANgIALQgJALgNACIgFAAQgKAAgJgHgAlukVQgXgSgEgdQgEgdASgYQASgXAdgEQAdgDAXARQAYASADAdQAEAdgSAYQgSAXgdAEIgKAAQgXAAgTgOgAANkbQgVgRgEgeQgDgdAPgXQASgXAdgEQAdgEAYASQAXASAEAdQAEAdgSAXQgSAYgdADIgLABQgXAAgTgPgAFwlPQgDgVAKgUIAGBJQgLgOgCgSgAhqlGQgKgJgCgNQgCgNAJgLQAIgLANgCQANgCALAJQALAIACANQACAOgJALQgIAKgNACIgFAAQgLAAgJgGgAESlMQgLgIgBgNQgCgOAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAOgIALQgIAKgOACIgFAAQgKAAgJgHgAjFm+QgXgSgEgdQgEgdASgXQASgXAdgEQAdgEAXASQAYASADAdQAEAdgSAXQgSAXgdAEIgKABQgXAAgTgPgAC2nDQgXgSgEgdQgDgdASgYQASgXAdgEQAdgDAXARQAXASAEAdQAEAegSAXQgSAXgdAEIgLAAQgXAAgTgOgAk+nqQgLgIgCgOQgBgNAIgLQAIgKAOgCQANgCALAJQAKAIACANQACANgIALQgJALgNACIgEAAQgLAAgJgHgAA+nvQgLgIgCgOQgCgNAJgLQAIgLANgBQAOgCALAIQAKAIACAOQACANgJALQgIALgNABIgFAAQgLAAgIgGgAmaphQgXgSgEgdQgDgdARgYQASgXAdgEQAegDAXARQAXASAEAdQAEAdgSAYQgSAXgdAEIgLAAQgXAAgTgOgAgcpnQgXgSgEgdQgEgdASgXQASgXAbgEQAdgEAXASQAYASADAdQAEAdgSAXQgSAYgdADIgKABQgVAAgTgPgAFFqbQgDgRAHgRQAGgQANgMIAIBwQgcgSgDgggAiVqSQgLgJgBgNQgCgOAIgKQAIgLAOgCQANgCALAJQALAIABANQACAOgIALQgIAKgOACIgEAAQgLAAgJgGgADnqYQgLgIgCgNQgCgOAJgKQAIgLANgCQAOgCALAJQAKAIACANQACAOgJAKQgIALgNACIgFAAQgLAAgIgHgAjwsKQgXgSgEgdQgEgdASgXQASgYAdgEQAdgDAXASQAXASAEAdQAEAdgSAXQgSAXgdAEIgLAAQgXAAgSgOgACLsPQgXgSgEgdQgDgeARgXQASgXAdgEQAdgDAYARQAXASAEAdQAEAdgSAYQgSAXgdAEIgLAAQgXAAgTgOgAlps2QgLgIgCgOQgCgNAJgLQAIgKANgCQAOgCALAIQAKAJACANQACANgJALQgIALgNACIgFAAQgLAAgIgHgAASs7QgKgIgCgOQgCgNAIgLQAJgLANgBQANgCALAIQALAIACAOQABANgIALQgIALgOABIgFAAQgKAAgJgGgAnFutQgXgSgEgeQgDgdARgXQASgXAdgEQAdgEAYASQAXASAEAdQAEAdgSAXQgSAYgdAEIgLAAQgXAAgTgOgAhHuzQgXgSgEgdQgEgdASgXQASgXAdgEQAdgEAVASQAYASADAdQAEAdgSAXQgSAYgbADIgKABQgYAAgSgPgAEqvCQgOgQgDgVQgDgXAMgUQALgUAUgKIAKCEQgUgGgNgQgAjAvfQgLgIgCgNQgBgOAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAOgIALQgJAKgNACIgFAAQgLAAgIgHgAC7vkQgKgIgCgNQgCgOAJgLQAIgKANgCQANgCALAJQALAIACANQACANgJALQgIALgNACIgGAAQgKAAgJgHgAkSxQQgUgLgKgUICFgRQgFAWgQAPQgRAQgWADIgKAAQgSAAgPgIgABgxbQgXgSgEgdQgBgKABgMICGgRQAFAJABALQAEAegSAXQgSAXgdAEIgKAAQgXAAgTgOgAgSyEQgKgFgEgJIA7gIQgDAKgHAHQgHAHgKABIgEAAQgIAAgGgDg");
	this.shape_109.setTransform(0.7,40.3,0.401,0.401);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#F17724","#F87B27","#FD7E28","#DC6E22","#AE571A","#D1681F"],[0,0.106,0.251,0.498,0.808,1],-49.8,7.8,40.8,-4).s().p("AjmBPQgdgDgVgTQgUgTgFgbIgGggQAWARAbADQEYAyEFh5QARgHAOgNIACAZQACAagPAYQgPAWgbALQimBNisAAQhKAAhLgOg");
	this.shape_110.setTransform(7.6,84.8,0.401,0.401);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#F07120","#F87623","#FD7924","#DC691E","#AB5014","#CF621A"],[0,0.11,0.251,0.49,0.808,1],-52.6,10.2,46.5,-2.7).s().p("AgcSsQgdgEgVgTQgUgTgFgaMgGbgixINVhvMACvAjPQACAbgPAXQgPAYgbALQilBNivAAQhJAAhKgNg");
	this.shape_111.setTransform(-0.5,40,0.401,0.401);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#959595").s().p("AgaBCIgUiCIBJgKIAUCVQgegCgrgHg");
	this.shape_112.setTransform(0.1,87.6,0.401,0.401);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#504E4E").s().p("AgThDIAdgDIAKB8IAAAEIgZANg");
	this.shape_113.setTransform(18,85.1,0.401,0.401);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.rf(["#676767","#282828"],[0,1],4.8,102.5,0,4.8,102.5,36.1).s().p("AhGOkQgQgCgNgHIlI7uILKhdICNcOIgMAGQikBNiwAAQhJAAhJgNg");
	this.shape_114.setTransform(1.7,52.9,0.401,0.401);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#757576").s().p("AgMgHQAQgQAGgWIADAlQABAEgBADIAAABIgBAEIAAACIgBAGIgBABIgBAHIgBABQgCAGgFAGIAAABIgIAMg");
	this.shape_115.setTransform(18.6,91.2,0.401,0.401);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#595657").s().p("AgWiDIAcgCIARDTQACAhgYAXg");
	this.shape_116.setTransform(18.2,87.7,0.401,0.401);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#C0C0C0").s().p("AgFAcIgGgBIgBgBIgGgBIAAAAIgMgFIgIg1QAJAEALACIAzAHIAHA2IgtgGg");
	this.shape_117.setTransform(1,94.7,0.401,0.401);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B3B3B3").s().p("AAJCIQgMgCgMgGIgnkEIBJgKIAkEdIgugHg");
	this.shape_118.setTransform(0.4,90.4,0.401,0.401);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#848484","#868686","#8A8A8A","#696969","#1C1C1C","#777777"],[0,0.035,0.251,0.38,0.639,1],-27,5,48.9,-4.9).s().p("AjABLQgYgEgSgQQgRgPgEgWIgGgjQASAdAmAGQDYAoDLhdQAkgPAJgjIADAlQACAWgMAUQgNASgXAJQiKBBiRAAQg+AAg/gLg");
	this.shape_119.setTransform(8.6,92.8,0.401,0.401);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-25.4,6.1,58.4,-4.8).s().p("AgXPqQgZgDgRgQQgRgQgEgWIlY9IILKheICTdiQACAXgNAUQgNATgWAKQiLBBiTAAQg9AAg9gMg");
	this.shape_120.setTransform(1.8,55.6,0.401,0.401);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#828282").s().p("AgSAaIgJgyIAtgGIAKA9QgYgBgWgEg");
	this.shape_121.setTransform(3.2,96.7,0.401,0.401);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#514F50").s().p("AgNgcIAXgCIAEAyIgWALg");
	this.shape_122.setTransform(16.9,94.6,0.401,0.401);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.rf(["#6A6A6A","#272425"],[0,1],-1.5,57.3,0,-1.5,57.3,30.3).s().p("AheJrIgCAAIjaybIIYhGIBcSrIgBABQiKBBiTAAQg7AAg/gMg");
	this.shape_123.setTransform(4.9,72.7,0.401,0.401);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#6E6E70").s().p("AgJgMQALgIAGgJIACAZIgBABIAAADIAAAAIgBAFIAAABIgCAGIgCADIAAABIgDAFIgBAAIAAAEIgFAFg");
	this.shape_124.setTransform(17.8,104.7,0.401,0.401);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#5B5758").s().p("AgWiaIAXgCIAVEPQADAYgTASg");
	this.shape_125.setTransform(17.3,99.7,0.401,0.401);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#A8A8A8").s().p("AAaAbIgngGIgEgCIgBAAIgIguIAHABQAMADAaADIAIAvg");
	this.shape_126.setTransform(4.8,107.2,0.401,0.401);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#9A9A9A").s().p("AAMCaIgKgDIgxkvIAvgGIAwE9g");
	this.shape_127.setTransform(4,101.9,0.401,0.401);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#848484","#868686","#8A8A8A","#696969","#1C1C1C","#777777"],[0,0.035,0.251,0.38,0.639,1],-23,4.1,42.7,-6.2).s().p("AiPA0QgSgDgNgMQgNgMgDgQIgGgbQAPASAaACQCmAdCdhFQASgHAJgOIACATQABARgJAPQgKANgRAHQhoAwhrAAQgvAAgvgIg");
	this.shape_128.setTransform(10.3,106,0.401,0.401);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-19,4.6,43.8,-3.6).s().p("AgRLvQgSgCgNgMQgNgMgDgRIkC11IIXhGIBuWJQABAQgJAPQgKAPgRAHQhnAxhuAAQguAAgugJg");
	this.shape_129.setTransform(5.2,77.9,0.401,0.401);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#C2C2C2").s().p("AgRgzIAUgDIAPBqIgVADg");
	this.shape_130.setTransform(10.5,107.4,0.401,0.401);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#767678","#89898B","#959698","#999A9C","#939495","#818183","#636465","#4D4D4E"],[0,0.114,0.231,0.345,0.475,0.655,0.867,1],-4.4,0.6,4.5,-0.5).s().p("AhgmQIBZgMIBoMsQgtALgsACg");
	this.shape_131.setTransform(9.2,93.1,0.401,0.401);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C6C6C6").s().p("AAQDIIgNhtIAAgBIgckdIAAgCIADgCQAGgBAAAFIArGLg");
	this.shape_132.setTransform(7.9,101.6,0.401,0.401);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#ADADAD").s().p("AALDLIgLhuQgWjKgJhTQAAgEACgDQAEgDADAAQAKgBABAKIARCxIAZDbg");
	this.shape_133.setTransform(7.9,101.5,0.401,0.401);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#8A8A8A").s().p("Agji9QgBgOAOgBQAPgBABAOIArGMIgfAAIgpmKg");
	this.shape_134.setTransform(7.9,101.4,0.401,0.401);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EDEDED").s().p("AAkJCQALjBgUjpQgNiYgfklIAAgBIgfkfIAAgDIAEgBQAFAAAAAEIAcD4QAUC+AMB8IAFA0QAPCkAFBbQAHCfgICLIgJgIg");
	this.shape_135.setTransform(8.8,117.1,0.401,0.401);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E8E8E8").s().p("AiBuIIAXgCIDrcSIgVADg");
	this.shape_136.setTransform(15,141.6,0.401,0.401);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#262626","#2B2B2B","#3A3A3A","#525252","#737373","#9E9E9E","#B2B2B2","#AEAEAE","#9F9F9F","#888888","#676767","#3D3D3D","#0D0D0D"],[0,0.067,0.149,0.239,0.329,0.427,0.467,0.537,0.624,0.714,0.808,0.906,1],5.9,-0.7,-7.4,1).s().p("AjQzlIBZgMMAFIAnWIhZANg");
	this.shape_137.setTransform(13.7,127.3,0.401,0.401);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#CDCDCD").s().p("AAMDmQAEhNgHhcQgFg9gMh1IgMhzIAAgCQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAEAAAAAEIAIBHIADAcIAMB+IACAUQAHBCABAkQADBBgDA5IgIgHg");
	this.shape_138.setTransform(8.8,117.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#A2A2A2").s().p("AAUDtQADg5gDhBQgBglgHhBIgCgUIgMh+IgDgdIgIhHQAAgDgEAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABIAAACIAMBzQAMB1AFA9QAHBcgEBNIgCgCQAEhMgHhbQgFg5gIhYIgQiUQgBgGAGAAQAGAAAAAFIAIBHQAKBoAFAzIAGA8IAEA+QADBCgDA6IgCgCg");
	this.shape_139.setTransform(8.8,117.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EBEBEB").s().p("AjGNeQAAgBAAAAQAAAAAAgBQAAAAABgBQAAgBAAAAQAngjAmgqQCgi5BKkXQA8jeAJksQAEiFABkKIACkBIABgCIADgBQAFAAAAAEIgCCeIAAA/QAAC7gCBeIgBAwQgDCYgFBKQgUEqhODYQgsB9hDBuQhIBxhgBWIgCABQgDAAgCgDg");
	this.shape_140.setTransform(-166,104.9,0.408,0.408);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FB7476").s().p("AgJACQgagFgfgMIAAgFQAbAIAgAGQAeAGArAGIgBAPQgxgLgZgIg");
	this.shape_141.setTransform(-165,79.5,0.408,0.408);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#EFEFEF","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#D3D3D3","#DBDBDB","#EFEFEF","#F6F6F6"],[0,0.039,0.122,0.318,0.557,0.812,0.878,0.976,1],-27.5,-1.1,57.4,2.8).s().p("AiOgHQgqgKgZgHIAMgCIA5AJQCIAVCTAEIBDABIhOASQiMgEiGgeg");
	this.shape_142.setTransform(-160.2,67.6,0.408,0.408);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F87579").s().p("AgUAAIhEgHIAAgDQBjAKBPAGIgBAFIhtgLg");
	this.shape_143.setTransform(-165.4,-9.5,0.408,0.408);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F87579").s().p("AgVABIhEgHIAAgDIABgCICzANIgDAFIAAAFIhtgLg");
	this.shape_144.setTransform(-165.4,-9.5,0.408,0.408);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#F1232A","#F4232A","#F8232A","#D82328","#C02327","#DF2329"],[0,0.055,0.251,0.482,0.639,1],-55.1,-1.7,53.6,3.2).s().p("AAAAVQjTgIicgRQhegLg5gKICYAPQCIAKDmAIQEeANDpgDQg5AEhfACQhDAChDAAQh2AAhzgFg");
	this.shape_145.setTransform(-151.2,-9.3,0.408,0.408);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#FC636C","#F14C4F","#D24B4D"],[0,0.408,1],-6.8,-0.5,57.5,4.1).s().p("AhZA4IABiCQBgAKBRAHIgFCEQhngKhGgJg");
	this.shape_146.setTransform(-165.4,-6.9,0.408,0.408);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#D9383B").s().p("AgjhBIBDgCQAKAVAAATIgEBEQAAALgNAIQgNAIgPgBIgmABg");
	this.shape_147.setTransform(-131.2,-5.8,0.408,0.408);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#E50B18","#E90B18","#ED0C19","#CD0814","#AE060F","#D20915"],[0,0.067,0.251,0.459,0.639,1],-53.5,-1.6,53.5,3.2).s().p("AnuArQgRgBgMgJQgMgIAAgMIADhEQABgSAKgSQHjA/I0gSQAKAVAAATIgEBEQAAALgNAIQgNAIgRgBQh1AEhwAAQmQAAligxg");
	this.shape_148.setTransform(-151.3,-6.6,0.408,0.408);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#FC636C","#F14C4F","#D24B4D"],[0,0.408,1],-30.7,-1.7,28,0.9).s().p("AjhEXIAAgDIGdoqQAOgUAFgEQAIgCALgBIkQJXIAAAMg");
	this.shape_149.setTransform(-159.8,-21.2,0.408,0.408);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#C5383A","#BE383A","#B23739","#AB3739","#A93739","#BC373A"],[0,0.039,0.149,0.298,0.655,1],18.2,14.2,-120.2,-87.6).s().p("ADIFTIgTgzQgshjhgiOQhtibgzhQIh1i3QATAIAJAMIGrJBQATAZgBAcIgEBFQgBARgWAHg");
	this.shape_150.setTransform(-139.1,-18.3,0.408,0.408);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#CD0814","#92040B","#B80711"],[0,0.004,0.133,0.251,0.4,0.639,1],-51.2,-2.6,53.7,2.2).s().p("AnuFJQgRAAgMgJQgMgJAAgLIADhGQACgdAVgXIHgoWQAUgXAnACQApACASAYIGtJBQATAZgBAcIgEBFQAAAMgNAHQgNAIgRgBQh1AEhwAAQmQAAligxg");
	this.shape_151.setTransform(-151.3,-18.3,0.408,0.408);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#FFFFFF","#FFFFFF","#FFFFFF","#EBEBEB","#D6D6D6","#DEDEDE","#EBEBEB"],[0,0.047,0.318,0.541,0.812,0.906,1],-22.7,-0.6,61,3.2).s().p("AipAMQgjgMgPgiIBEgQQCyAqDBAEIj0A3QhHgOhKgZg");
	this.shape_152.setTransform(-162.4,68.6,0.408,0.408);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#E3E3E3").s().p("AhZgvIC1AIIgDAsIi0Asg");
	this.shape_153.setTransform(-162.8,-4.8,0.408,0.408);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AhsOaIABhQICHggIgFCHIgXAFQgxgLg7gRgAhkIZICPgiIgHCHIiLAhgAhfDoICYgkIgGCHIiVAjgAhZhHICggmIgHCFIibAmgAhTl3ICogoIgGCHIilAngAhNqoICwgqIgHCHIisApgAhIu1IC1AJIgDAuIi0Arg");
	this.shape_154.setTransform(-163.4,32,0.408,0.408);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D70915").s().p("AhbAxIACh4IC1AJIgGCGQhMgHhlgQg");
	this.shape_155.setTransform(-162.8,-3.8,0.408,0.408);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D4D3D1").s().p("AgQgdIAngKIgGBLIgnAEg");
	this.shape_156.setTransform(-132.9,-2.3,0.408,0.408);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EBECEE").s().p("AhLLFIAngJIgLCIIgmAJgAgzGQIAogJIgLCIIgnAJgAgbBbIAngJIgLCIIgmAJgAgDjYIAogKIgLCIIgnAKgAAToNIAqgKIgKCIIgqAKgAAstCIAqgKIgLCIIgqAKg");
	this.shape_157.setTransform(-135.4,30.5,0.408,0.408);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#C3C3C3","#CDCDCD","#DADADA","#E1E1E1","#E3E3E3","#D7D7D7","#A2A2A2","#8D8D8D","#949494","#A9A9A9","#CACACA","#D1D1D1"],[0,0.027,0.078,0.149,0.318,0.38,0.671,0.812,0.855,0.914,0.988,1],-44.9,-1.2,44.7,2.9).s().p("ABVBSIGIhaIgHBMQisAOifAAIg2AAgAncAZIAChqIHGAVImYBeg");
	this.shape_158.setTransform(-151.4,-3.6,0.408,0.408);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#DBDBDB","#EAEAEA","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#B3B3B3","#9E9E9E","#A6A6A6","#BABABA","#DBDBDB","#EBEBEB"],[0,0.035,0.086,0.153,0.318,0.42,0.686,0.812,0.851,0.906,0.973,1],-48.2,-0.5,41.6,3.6).s().p("AmuOUQglgNgOglINLjHIgLCIIqBCXQhJgPhDgXgAnkIzINnjOIgLCJItdDLgAngEDIN8jTIgLCIItzDQgAndgsIOSjXIgLCIIuJDTgAnalcIOnjcIgKCIIueDagAnWqMIO8jiIgLCIIuzDggAnTu5IHQAVInRBug");
	this.shape_159.setTransform(-151.7,31.9,0.408,0.408);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#C50813","#C40813","#B0060F","#90040B","#840309"],[0,0.314,0.494,0.82,1],-48,-1.2,47.3,3.2).s().p("AndAZIAChqIO5AsIgJBpQipAOiiAAQlBAAkmg5g");
	this.shape_160.setTransform(-151.4,-3.6,0.408,0.408);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FC0D1B").s().p("AhsOYIAk9PIC1AJIhXdmQhCgNhAgTg");
	this.shape_161.setTransform(-163.4,32.1,0.408,0.408);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#C2383A").s().p("AgPgcIAjgFIAAAIIgBABIAAAFIAAAAIgCAEIAAABIgBAFIAAAAIgCAEIAAABIgCAEIAAAAIgCACIAAABIgDAEIAAAAIgGAIIAAAAIgEAHIgQAMg");
	this.shape_162.setTransform(-138.5,68.6,0.408,0.408);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#E8252B","#EB252B","#F8262D","#FC272E","#DC262B","#C1262A","#CA2529"],[0,0.016,0.141,0.251,0.569,0.808,1],-40.5,-1.2,40.3,2.5).s().p("AgBAiQiSgEiNgfQhHgQgrgQQArALBKALQCIAVCVAEQCCAECagMIB3gIQgsAHhKALQiBASh4AAIglAAg");
	this.shape_163.setTransform(-154.3,67.4,0.408,0.408);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#DB0A16","#E30B17","#F00C19","#F40C1A","#D40915","#AE060F","#B80711"],[0,0.043,0.153,0.251,0.525,0.808,1],-44.9,-1.2,49,3).s().p("AlmAJQgagJgQgVQgPgWAAgcIAAgBQF/BqHAhHIAAAEQgCAbgSATQgSAVgbAFQiiAiiXAAQjPAAi9hAg");
	this.shape_164.setTransform(-154.6,68.8,0.408,0.408);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#BB373A").s().p("AAzuaIApACIiNbxQgCAVgLARQgLARgSAKg");
	this.shape_165.setTransform(-135.6,32.4,0.408,0.408);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#CD0814","#92040B","#B80711"],[0,0.004,0.133,0.251,0.467,0.808,1],-50,-1.1,46.6,3.3).s().p("AmuOFQgZgJgQgXQgQgXABgbIAU73IO5AsIiPbxQgCAbgSAUQgSAVgaAGQiiAiiWAAQjQAAi+hAg");
	this.shape_166.setTransform(-151.7,32.4,0.408,0.408);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#DA5557").s().p("AhGAbIAChXICLAGIgFBzQhGgNhCgVg");
	this.shape_167.setTransform(-164.7,70.9,0.408,0.408);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#AE4345").s().p("AgcgrIA+ADIgGBDQgLAHgNADIglAHg");
	this.shape_168.setTransform(-141.3,71.3,0.408,0.408);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#C10712","#CC0814","#D10915","#B90711","#9A040C","#870309","#800308","#A2050D"],[0,0.125,0.251,0.369,0.549,0.702,0.808,1],-36.7,-0.8,36.3,2.5).s().p("AlQALQgRgFgLgJIABhEILYAiIgGBDQgLAHgNADQiZAgiPAAQjEAAizg9g");
	this.shape_169.setTransform(-154.8,71.2,0.408,0.408);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FA5658").s().p("AAhAqIgBAAIgQgEIgQgEIAAAAIgOgEIgBgBIgPgEIgCgBIgPgEIgCgBIgSgGIADghIAAgcQBAAVBEANIgDA/g");
	this.shape_170.setTransform(-165.1,80.7,0.408,0.408);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#D94446").s().p("AgbAFIACgZIAagHQARgDANgKIgBATQgCAVgPARQgOATgWAEIgHACIADglg");
	this.shape_171.setTransform(-141.9,80.7,0.408,0.408);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#DD5E60").s().p("AgZACQAggEAUgFQgUAHghAIg");
	this.shape_172.setTransform(-141.9,79.5,0.408,0.408);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#F40E1B","#F9141F","#FC1722","#F91721","#DA111B","#C70E17","#C00C15","#E00D19"],[0,0.11,0.251,0.275,0.494,0.678,0.808,1],-35.3,-1,35,2.2).s().p("AgBAmQiIgEhzgiQgogKghgPIgZgNQAlARA/ANQBrAWCPAFQB8AEB8gPQBAgIAngJQglANhAANQhoAWhrAAIgogBg");
	this.shape_173.setTransform(-155.1,79.6,0.408,0.408);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#E50B18","#EB0B19","#F80D1B","#FC0D1B","#EA0B18","#CB0814","#B80711","#B10610","#D20915"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-35.6,-0.8,36.1,2.4).s().p("AkzAQQgWgHgNgSQgOgTABgYIAAgSQAMAMAQAGQEsBjFhhIQARgDAOgLIgCAUQgCAVgPARQgPASgXAFQiLAdiCAAQiwAAiig3g");
	this.shape_174.setTransform(-155.2,80.6,0.408,0.408);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#F15658").s().p("AhGCNIgDgBIACgjIAGkYICLAHIgQFXQg/gMhBgWg");
	this.shape_175.setTransform(-164.8,75.5,0.408,0.408);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#C24345").s().p("AgkB5IAOkWIA+ADIgUD3QgCAXgPASQgNASgWAEIgIACIAEglg");
	this.shape_176.setTransform(-141.5,75.9,0.408,0.408);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#CB0814","#AC060F","#99040C","#92040B","#B80711"],[0,0.004,0.133,0.251,0.404,0.569,0.71,0.808,1],-36.8,-0.8,36.5,2.5).s().p("Ak8CEQgXgHgNgUQgNgTAAgYIADj4ILYAiIgUD3QgCAXgPARQgQASgWAFQiLAdiCAAQixAAihg3g");
	this.shape_177.setTransform(-154.8,75.9,0.408,0.408);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#E27B7C").s().p("AgqCGIABgeIAAheQABg7AJgcQAFgSAMgVQANgXAKgKIAYABQAMASgCBBQgCAjgEAyIgGCCQgqgIgfgIg");
	this.shape_178.setTransform(-161.9,79,0.408,0.408);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#A93739").s().p("AgXBxIADhdQABg8AFgbQAEgTAHgVQAFgYAGgKIANABQAGASgDBBQgBAigEAzIgFBrIgmAHg");
	this.shape_179.setTransform(-146.5,79.3,0.408,0.408);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#C10712","#CC0814","#D10915","#B20610","#97040C","#860309","#800308","#A2050D"],[0,0.125,0.251,0.396,0.557,0.702,0.808,1],-23.7,-0.5,23.4,1.6).s().p("AjwB5IALkWIHVAVIgPETQhoAThiAAQiIAAh/glg");
	this.shape_180.setTransform(-155.1,79.2,0.408,0.408);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FC9495").s().p("AgigGIAAgGQAiAKAkACIgBANQgmgIgfgLg");
	this.shape_181.setTransform(-162.5,95.3,0.408,0.408);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FC7B7D").s().p("AADAdIgRgGIgVgHIACgyQAjAKAiAHIgCA1g");
	this.shape_182.setTransform(-162.6,96.3,0.408,0.408);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D4383B").s().p("AgQgUIAQgDQAKgCAIgHIgBAaQgCATgPANQgHAFgKABIgBABg");
	this.shape_183.setTransform(-147.3,96.3,0.408,0.408);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#DD5E60").s().p("AgNAAIAcgEIgdAIg");
	this.shape_184.setTransform(-147.4,95.2,0.408,0.408);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["#F4101C","#F91621","#FC1A23","#FA1923","#DB131C","#C81018","#C10F17","#E00F1A"],[0,0.11,0.251,0.271,0.49,0.678,0.808,1],-22.7,-0.8,22.6,1.3).s().p("AgdAVQg+gEgngHQg3gKgogXQAxARA9AGQAsAEBGADIAWABIBLgBIBbgIIAngGIgmAKQgZAHgbAFIgSADQgVADgfABIg0ACg");
	this.shape_185.setTransform(-156,95.4,0.408,0.408);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#E50B18","#EB0B19","#F80D1B","#FC0D1B","#EA0B18","#CB0814","#B80711","#B10610","#D20915"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-23.8,-0.9,23.3,1.3).s().p("AjGAOQgOgFgJgKQgJgNABgPIAAgUQAEAEAHABQDFBCDpgvQAKgCAJgHIgCAaQgBANgKALQgKAMgOADQhaAThUAAQhyAAhogkg");
	this.shape_186.setTransform(-155.9,96.3,0.408,0.408);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#F47B7C").s().p("AgvEdIALlOIAAhdQABg+AJgbQAFgTAMgUQALgXAMgKIAYAAQAMASgCBBQgCAjgEA1IgUG1QgjgJgigLg");
	this.shape_187.setTransform(-162.1,85.3,0.408,0.408);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#BE383A").s().p("AgRgmIADhdQABg+AFgbQAEgTAFgVQAHgYAGgKIANABQAGASgDBBQgBAigEA1IgUF4QgBAPgIAMQgKALgPADIgBABg");
	this.shape_188.setTransform(-146.8,85.6,0.408,0.408);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#EA0B18","#C40813","#A9050E","#98040C","#92040B","#B80711"],[0,0.004,0.133,0.251,0.267,0.427,0.576,0.71,0.808,1],-24.6,-0.6,23.6,1.6).s().p("AjVEXQgOgFgJgNQgJgMABgQIAToiIHWAVIgfIiQgBAPgKAMQgKALgOADQhaAThUAAQhxAAhpgjg");
	this.shape_189.setTransform(-155.3,85.5,0.408,0.408);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#E07172").s().p("AgKAhIADhCIASABIgDBDg");
	this.shape_190.setTransform(-156.6,98.5,0.408,0.408);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#6D0206","#8B040A","#A9060E","#BF0712","#CC0814","#D10915","#CC0814","#BE0712","#A6050E","#860309","#800308"],[0,0.082,0.184,0.286,0.38,0.467,0.576,0.702,0.835,0.976,1],-5.8,-0.2,5.1,0.3).s().p("AgzENIAZocIBOAEIgZIbIgPAAQggAAgfgDg");
	this.shape_191.setTransform(-155.7,88.8,0.408,0.408);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#F37173").s().p("Ag2PuIBa/bIATABIhafbg");
	this.shape_192.setTransform(-158.4,138.2,0.408,0.408);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#7B0308","#810308","#A7050E","#C60813","#DC0A16","#E90B18","#ED0C19","#E80B18","#DA0A16","#C30812","#A3050D","#92040B"],[0,0.012,0.11,0.204,0.298,0.384,0.467,0.569,0.686,0.812,0.941,1],5.2,0.3,-6.5,-0.2).s().p("AhsXxMACJgvlIBQADMgCJAvmg");
	this.shape_193.setTransform(-157,117.1,0.408,0.408);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#C7C7C7").s().p("AhRFgQgBgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQASgRANgOQA/hLAfhxQAYhaAEh6QABg2ABhtIABhoIAAgDIADgBQABABABAAQAAAAABABQAAAAAAABQABAAAAABIgBBbIgBByIAAATQgBA/gCAeQgJB5gfBYQgTA0gaAsQgeAvgmAjIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_194.setTransform(-166,104.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#969696").s().p("AhSFiQgDgEAEgDQAPgOAPgRQBAhLAehxQAWhTAFhtIABgTIAChuIAAhtIABgwQAAgGAFABQAGAAgBAFIAAAwIAAAQIgBCNIgBAzIAAAFIgBAVIgBASIgBARQgIB4ggBZQgnBthKBGIgEABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgABMlhIAAADIgBBoQgBBtgBA2QgEB6gYBZQgfByg/BLQgNAOgSARQgBABAAAAQAAAAAAABQgBAAAAABQABAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAAAAAIADgBQAmgjAeguQAagsATg0QAfhYAJh5QACgfABg+IAAgTIABhzIABhaQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAIgDABg");
	this.shape_195.setTransform(-166,104.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.5,-33.7,337.9,213.1);


(lib.Cups2Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// FlashAICB
	this.instance = new lib.rocket_explosion2();
	this.instance.setTransform(-35,-149.4,0.243,0.243,0,0,0,103.2,104.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({regX:103.3,scaleX:18.59,scaleY:18.59,x:-33.7,y:-109.5},10).wait(1));

	// rocketflight
	this.instance_1 = new lib.rocket_flight2();
	this.instance_1.setTransform(-0.9,40.3,1,1,0,0,0,21.2,69.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regY:69.4,scaleX:0.68,scaleY:0.68,x:-15.8,y:-42.7},5,cjs.Ease.get(1)).to({regX:21.1,regY:69.5,scaleX:0.28,scaleY:0.28,x:-35,y:-149.4,alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(40));

	// rocket static
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7A7A7").s().p("AgTAvQgJglgHgsIA8gTIAKBLQABAGgDAFQgEAFgGACIgoAOg");
	this.shape.setTransform(13.4,-6.4,0.401,0.401);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3B3638","#585556","#7E7C7D","#959595","#9E9E9E"],[0,0.227,0.565,0.835,1],-41.4,-4.7,35.2,4.7).s().p("ADNExQgGgYgQhgQgMhJgSgrQgMgbgKgPQgYgegYgcQgdgfgZgXQhshmi1h7QAagBAWANQDVB2CxDJQA6BCAMBbIANBmQABAGgEAFQgDAFgHACIgqANg");
	this.shape_1.setTransform(4.4,-16.7,0.401,0.401);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBCBCB").s().p("AhWAsQgGgsgBgtQBZADBegEQABAqADAxIgvABIgSABQg1AAg+gDg");
	this.shape_2.setTransform(-15.6,-1.8,0.401,0.401);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#E6EDF2","#E3EAEE","#C1C4C7","#ADADAE","#A5A5A5"],[0,0.035,0.459,0.796,1],36.7,3.7,0,36.7,3.7,77.4).s().p("AiSFoQgfjZBiiTQAQgdAig3ICgkJQALgGAMgDQgjBmgYBcIgVBWQghBkgIB3QgHBiAIB/IhGABQg3AAg3gDg");
	this.shape_3.setTransform(-13.2,-14.5,0.401,0.401);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#868686","#888888","#8C8C8C","#6B6B6B","#1F1F1F","#787878"],[0,0.035,0.251,0.38,0.639,1],-43.9,7.7,50.7,-4.6).s().p("AmtBmQgHgBgFgEQgEgEgBgGIgKhMQHCAbHFiQIAKBNQABAGgDAFQgEAFgGACQlwB2lnAAQhKAAhJgFg");
	this.shape_4.setTransform(-3.5,-4.2,0.401,0.401);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-40.9,4.1,37.5,-6.1).s().p("AmqFnQgHAAgFgEQgEgEgBgGIgOhmQgMhbAphNQB2jgCzi5QAXgXAhgFQAigFAcAQQDVB2CyDLQA5BAAMBbIANBmQABAGgDAFQgEAFgGACQlwB3lnAAQhKAAhJgFg");
	this.shape_5.setTransform(-3.6,-14.6,0.401,0.401);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D5CC31").s().p("AhQBYIgRhjQAOgJAPgBQAdgEAYASQAVAQAEAdQADAbgOAXIgVABIg6gBgABDg/QgOgKgIgPIAwABIAFAlQgRgCgOgLg");
	this.shape_6.setTransform(-13.4,-1.7,0.401,0.401);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1A929").s().p("AhUBYIgbicICVgUIAyABIAYCrQhIAFhAAAIg8gBg");
	this.shape_7.setTransform(-13.2,-1.7,0.401,0.401);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#D4B12B","#D4AB29","#B36A1C"],[0,0.498,1],-43.1,6.5,32.7,-3.4).s().p("AmEB4QgJgNgDgSQgDgdARgXQASgXAdgEQAdgDAXARQAYASAEAdQADAcgQAXIgfAAQgtAAgogCgAgSBUQgEgdASgXQAQgXAdgEQAdgEAXASQAYASADAdQABAIgBAIQg/AMhGAKQgEgIgBgMgAhwBXQgLgIgCgNQgCgOAJgKQAIgLANgCQAOgCALAJQAKAIACANQACAOgIALQgJAKgNACIgFAAQgKAAgJgHgAEIAhQAIgIALgBQASgCAMAOIg6AQQABgLAIgIgAGRAGIAAAEIgNAEQAHgFAGgDgAjCgYQgUgLgKgUICFgRQgFAWgQAPQgRAQgWADIgKABQgRAAgQgJgACwgjQgXgSgEgdQgBgKABgMICGgRQAFAJABALQAEAdgSAYQgSAXgdAEIgKABQgXAAgTgPgAA8hMQgKgFgEgJIA9gIQgCAKgIAHQgHAHgLABIgEABQgIAAgHgEg");
	this.shape_8.setTransform(-2.5,-3,0.401,0.401);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B76C1D").s().p("AglhJIA/gJIAMCSIg8ATg");
	this.shape_9.setTransform(12.1,-5.2,0.401,0.401);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#AF571A","#A75319"],[0,1],-4,8.6,0,-4,8.6,46.1).s().p("AmUB8IgBAAIgaiNINUhvIAMCRQlfBwlXAAQhIAAhHgFg");
	this.shape_10.setTransform(-3.8,-3.3,0.401,0.401);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EEB329").s().p("ABHQmQANADAIAEIgBACIgCACIgBADIgCACIgFAHIgHAGgAA/POIgEgrQAIgLAOgCQAIgBAHACIAEA8QgEADgGABIgGAAQgMAAgJgJgAApLeQAhAMALAhIACAhQgFAhgdARgAAiKKIgGg9IAKgDQAKgBAJAEQAJAFAFAJIACAaQgGATgVADIgDAAIgJgBgAAMGYQAcASAEAhQAFAlgbAYgAAAD+QAKgBAKAIQAKAIABANQACANgIALQgIAKgNACgAgPBYQAPARABAWQAEAagNAVgAgehKQARAGADAUQABAJgEAJQgEAJgIAFgAgMlhQgDgVAKgVIAFBKQgJgOgDgSgAg7mLQAFAHABAIQABAJgEAJgAg3qtQgCgSAGgRQAGgQANgLIAJBwQgcgSgEgggAhRvUQgOgQgDgVQgDgYALgUQALgUAUgJIALCDQgUgGgNgPg");
	this.shape_11.setTransform(16,41,0.401,0.401);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CE7822").s().p("AgRgYIADgCQAPgGAPgNIACAYIAAAMIgBABIAAAHIgBABIgDAJIgEALIgJAOIgDAFIgBACIgGAFg");
	this.shape_12.setTransform(19.4,82.9,0.401,0.401);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D7791E").s().p("Ah3yCIBBgIMACuAjPQADApghAdg");
	this.shape_13.setTransform(15.4,38.1,0.401,0.401);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEF539").s().p("ADGSMQgLgNgCgTQgEgbAQgWQAPgXAbgGIAPBzQgZgBgfgEgABsQ1QANgBAKAIQAKAIACANQACAMgHALQgHAKgMADgABPODQAdASAFAhQAEAfgVAYgACmNNQgVgSgDgbQgEgaAPgXQAPgVAagIIATCLIgCABQgaAAgTgRgABAMqIgLg+IAKgDQAOgCALAIQAKAJACANQACAOgJAKQgIALgNACIgEAAIgEAAgAAWIwQATAGANAQQANAQADAUQACAUgHARQgIARgOAMgAB6IAQgUgRgEgbQgDgaAOgWQAPgWAZgHIASCLQgagBgTgRgAAHHZIgHgwQAIgLAMgBQANgCALAIQALAJACANQABAOgIAKQgIALgOACIgEAAQgKAAgHgFgAggDhQAXADAPARQARASADAXQADAXgKAUQgLATgSALgABNCzQgTgRgDgaQgEgaAPgVQANgWAYgIIATCLQgZgCgUgRgAglCLQgLgIgBgNQgCgOAIgLQAIgLAOgBQANgCAJAIQALAIABAOQACANgIALQgHALgNACIgFAAQgKAAgJgHgAhYhpQAbgBAVARQAVARAEAcQADAagOAUQgOAVgZAIgAAiiXQgTgSgDgZQgEgZAOgWQANgVAXgIIATCKQgZgCgSgRgAhQi/QgLgJgCgMQgCgOAJgLQAIgLANgBQAOgCALAJQAKAHACAOQACANgIALQgJALgNABIgFABQgKAAgJgHgAh4koIgYiMIAGgBQAegDAXARQAXASAEAdQAEAdgSAYQgSAXgdAEgAgInkQgSgSgEgYQgDgZANgVQANgVAUgIIATCIQgYgDgQgQgAh8oLQgKgJgCgNQgCgNAJgLQAIgLANgBQAOgCAKAJQALAHACAOQACANgJALQgIALgNABIgEABQgLAAgKgHgAjHr8QALgFAHAAQAdgEAXASQAYASADAdQAEAdgSAYQgSAXgdAEIgNAAgAg0sxQgSgRgDgZQgDgXAMgWQAMgUAWgJIATCIQgYgDgRgRgAintXQgKgJgCgNQgCgNAIgLQAIgLAOgCQANgBALAIQALAJABAMQACAOgIALQgIAKgOACIgEABQgLAAgJgHgAjovCIgViBQAOgIAPgCQAdgEAXASQAYASADAdQAEAdgSAXQgSAXgdAFIgJAAQgJAAgIgCgAhXx2QgOgKgIgPIAvAAIAFAmQgQgDgOgKg");
	this.shape_14.setTransform(-7.1,41.6,0.401,0.401);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FCD638").s().p("AgOAnIgBAAIglgGIgGgCIgOhNQBIANA+ABIAKBPQgugCgogGg");
	this.shape_15.setTransform(0.2,86.6,0.401,0.401);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FDD332","#FBCA30","#F9C12E"],[0,0.4,1],-30,-11.5,94.9,28.5).s().p("ACNSDIgPgCMgGAgj9ICXgTIAyAAMAE8AkgQg+gDg4gLg");
	this.shape_16.setTransform(-7.3,41.6,0.401,0.401);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FED232","#FEDB33","#FEE234","#FEE434","#EB9925","#D57A1E"],[0,0.059,0.157,0.384,0.631,1],-29.9,3.3,24.6,-3.8).s().p("AiIA7IglgDIgBAAQgKgOgDgTQgDgXANgVQA+AFA8gEQAHAOACALQAEAfgVAYIgOAAIgFABgAkZAbQgKgJgCgNQgCgLAJgLQAIgLANgCQAOgCAKAJQALAIACANQACAMgJALQgIAKgNACIgFABQgLAAgJgHgABjAVQgLgIgBgNQgCgMAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAMgIALQgIAKgOACIgFAAQgKAAgJgHgADSgkQASgUAagDQAWgDATAKIgBABIgCADIgCADIgJAKIgOAMIhEAcIgHADQABgYARgUg");
	this.shape_17.setTransform(7.9,86.1,0.401,0.401);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FED232","#FED331","#EB9925","#D57A1E"],[0,0.384,0.631,1],-35.4,6.7,38.8,-2.9).s().p("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ANgCQAOgBALAIQAKAIACAOQACANgJALQgIAIgNACIgFAAQgLAAgIgGgAE9AAQgKgIgCgNQgCgOAIgKQAIgLAOgCQANgCALAJQALAIACANQABAOgIALQgIAIgOACIgFAAQgKAAgJgFgAiahyQgXgSgEgdQgDgdARgXQASgXAdgEQAegEAXASQAXASAEAdQAEAdgSAXQgSAYgdADIgLABQgXAAgTgPgADih3QgXgSgEgdQgEgdASgYQASgXAdgEQAdgDAXASQAYASADAdQAEAdgSAXQgSAXgdAEIgKAAQgYAAgSgOgAkTieQgKgIgCgNQgCgOAIgLQAJgKANgCQANgCALAJQALAIACANQABAOgIAKQgIALgOACIgFAAQgKAAgJgHgABpijQgLgIgCgOQgBgNAIgLQAIgKAOgCQANgCALAIQAKAJACANQACANgIALQgJALgNACIgFAAQgKAAgJgHgAlukVQgXgSgEgdQgEgdASgYQASgXAdgEQAdgDAXARQAYASADAdQAEAdgSAYQgSAXgdAEIgKAAQgXAAgTgOgAANkbQgVgRgEgeQgDgdAPgXQASgXAdgEQAdgEAYASQAXASAEAdQAEAdgSAXQgSAYgdADIgLABQgXAAgTgPgAFwlPQgDgVAKgUIAGBJQgLgOgCgSgAhqlGQgKgJgCgNQgCgNAJgLQAIgLANgCQANgCALAJQALAIACANQACAOgJALQgIAKgNACIgFAAQgLAAgJgGgAESlMQgLgIgBgNQgCgOAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAOgIALQgIAKgOACIgFAAQgKAAgJgHgAjFm+QgXgSgEgdQgEgdASgXQASgXAdgEQAdgEAXASQAYASADAdQAEAdgSAXQgSAXgdAEIgKABQgXAAgTgPgAC2nDQgXgSgEgdQgDgdASgYQASgXAdgEQAdgDAXARQAXASAEAdQAEAegSAXQgSAXgdAEIgLAAQgXAAgTgOgAk+nqQgLgIgCgOQgBgNAIgLQAIgKAOgCQANgCALAJQAKAIACANQACANgIALQgJALgNACIgEAAQgLAAgJgHgAA+nvQgLgIgCgOQgCgNAJgLQAIgLANgBQAOgCALAIQAKAIACAOQACANgJALQgIALgNABIgFAAQgLAAgIgGgAmaphQgXgSgEgdQgDgdARgYQASgXAdgEQAegDAXARQAXASAEAdQAEAdgSAYQgSAXgdAEIgLAAQgXAAgTgOgAgcpnQgXgSgEgdQgEgdASgXQASgXAbgEQAdgEAXASQAYASADAdQAEAdgSAXQgSAYgdADIgKABQgVAAgTgPgAFFqbQgDgRAHgRQAGgQANgMIAIBwQgcgSgDgggAiVqSQgLgJgBgNQgCgOAIgKQAIgLAOgCQANgCALAJQALAIABANQACAOgIALQgIAKgOACIgEAAQgLAAgJgGgADnqYQgLgIgCgNQgCgOAJgKQAIgLANgCQAOgCALAJQAKAIACANQACAOgJAKQgIALgNACIgFAAQgLAAgIgHgAjwsKQgXgSgEgdQgEgdASgXQASgYAdgEQAdgDAXASQAXASAEAdQAEAdgSAXQgSAXgdAEIgLAAQgXAAgSgOgACLsPQgXgSgEgdQgDgeARgXQASgXAdgEQAdgDAYARQAXASAEAdQAEAdgSAYQgSAXgdAEIgLAAQgXAAgTgOgAlps2QgLgIgCgOQgCgNAJgLQAIgKANgCQAOgCALAIQAKAJACANQACANgJALQgIALgNACIgFAAQgLAAgIgHgAASs7QgKgIgCgOQgCgNAIgLQAJgLANgBQANgCALAIQALAIACAOQABANgIALQgIALgOABIgFAAQgKAAgJgGgAnFutQgXgSgEgeQgDgdARgXQASgXAdgEQAdgEAYASQAXASAEAdQAEAdgSAXQgSAYgdAEIgLAAQgXAAgTgOgAhHuzQgXgSgEgdQgEgdASgXQASgXAdgEQAdgEAVASQAYASADAdQAEAdgSAXQgSAYgbADIgKABQgYAAgSgPgAEqvCQgOgQgDgVQgDgXAMgUQALgUAUgKIAKCEQgUgGgNgQgAjAvfQgLgIgCgNQgBgOAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAOgIALQgJAKgNACIgFAAQgLAAgIgHgAC7vkQgKgIgCgNQgCgOAJgLQAIgKANgCQANgCALAJQALAIACANQACANgJALQgIALgNACIgGAAQgKAAgJgHgAkSxQQgUgLgKgUICFgRQgFAWgQAPQgRAQgWADIgKAAQgSAAgPgIgABgxbQgXgSgEgdQgBgKABgMICGgRQAFAJABALQAEAegSAXQgSAXgdAEIgKAAQgXAAgTgOgAgSyEQgKgFgEgJIA7gIQgDAKgHAHQgHAHgKABIgEAAQgIAAgGgDg");
	this.shape_18.setTransform(0.7,40.3,0.401,0.401);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#F17724","#F87B27","#FD7E28","#DC6E22","#AE571A","#D1681F"],[0,0.106,0.251,0.498,0.808,1],-49.8,7.8,40.8,-4).s().p("AjmBPQgdgDgVgTQgUgTgFgbIgGggQAWARAbADQEYAyEFh5QARgHAOgNIACAZQACAagPAYQgPAWgbALQimBNisAAQhKAAhLgOg");
	this.shape_19.setTransform(7.6,84.8,0.401,0.401);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#F07120","#F87623","#FD7924","#DC691E","#AB5014","#CF621A"],[0,0.11,0.251,0.49,0.808,1],-52.6,10.2,46.5,-2.7).s().p("AgcSsQgdgEgVgTQgUgTgFgaMgGbgixINVhvMACvAjPQACAbgPAXQgPAYgbALQilBNivAAQhJAAhKgNg");
	this.shape_20.setTransform(-0.5,40,0.401,0.401);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#959595").s().p("AgaBCIgUiCIBJgKIAUCVQgegCgrgHg");
	this.shape_21.setTransform(0.1,87.6,0.401,0.401);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#504E4E").s().p("AgThDIAdgDIAKB8IAAAEIgZANg");
	this.shape_22.setTransform(18,85.1,0.401,0.401);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#676767","#282828"],[0,1],4.8,102.5,0,4.8,102.5,36.1).s().p("AhGOkQgQgCgNgHIlI7uILKhdICNcOIgMAGQikBNiwAAQhJAAhJgNg");
	this.shape_23.setTransform(1.7,52.9,0.401,0.401);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#757576").s().p("AgMgHQAQgQAGgWIADAlQABAEgBADIAAABIgBAEIAAACIgBAGIgBABIgBAHIgBABQgCAGgFAGIAAABIgIAMg");
	this.shape_24.setTransform(18.6,91.2,0.401,0.401);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#595657").s().p("AgWiDIAcgCIARDTQACAhgYAXg");
	this.shape_25.setTransform(18.2,87.7,0.401,0.401);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C0C0C0").s().p("AgFAcIgGgBIgBgBIgGgBIAAAAIgMgFIgIg1QAJAEALACIAzAHIAHA2IgtgGg");
	this.shape_26.setTransform(1,94.7,0.401,0.401);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B3B3B3").s().p("AAJCIQgMgCgMgGIgnkEIBJgKIAkEdIgugHg");
	this.shape_27.setTransform(0.4,90.4,0.401,0.401);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#848484","#868686","#8A8A8A","#696969","#1C1C1C","#777777"],[0,0.035,0.251,0.38,0.639,1],-27,5,48.9,-4.9).s().p("AjABLQgYgEgSgQQgRgPgEgWIgGgjQASAdAmAGQDYAoDLhdQAkgPAJgjIADAlQACAWgMAUQgNASgXAJQiKBBiRAAQg+AAg/gLg");
	this.shape_28.setTransform(8.6,92.8,0.401,0.401);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-25.4,6.1,58.4,-4.8).s().p("AgXPqQgZgDgRgQQgRgQgEgWIlY9IILKheICTdiQACAXgNAUQgNATgWAKQiLBBiTAAQg9AAg9gMg");
	this.shape_29.setTransform(1.8,55.6,0.401,0.401);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#828282").s().p("AgSAaIgJgyIAtgGIAKA9QgYgBgWgEg");
	this.shape_30.setTransform(3.2,96.7,0.401,0.401);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#514F50").s().p("AgNgcIAXgCIAEAyIgWALg");
	this.shape_31.setTransform(16.9,94.6,0.401,0.401);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#6A6A6A","#272425"],[0,1],-1.5,57.3,0,-1.5,57.3,30.3).s().p("AheJrIgCAAIjaybIIYhGIBcSrIgBABQiKBBiTAAQg7AAg/gMg");
	this.shape_32.setTransform(4.9,72.7,0.401,0.401);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6E6E70").s().p("AgJgMQALgIAGgJIACAZIgBABIAAADIAAAAIgBAFIAAABIgCAGIgCADIAAABIgDAFIgBAAIAAAEIgFAFg");
	this.shape_33.setTransform(17.8,104.7,0.401,0.401);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5B5758").s().p("AgWiaIAXgCIAVEPQADAYgTASg");
	this.shape_34.setTransform(17.3,99.7,0.401,0.401);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A8A8A8").s().p("AAaAbIgngGIgEgCIgBAAIgIguIAHABQAMADAaADIAIAvg");
	this.shape_35.setTransform(4.8,107.2,0.401,0.401);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9A9A9A").s().p("AAMCaIgKgDIgxkvIAvgGIAwE9g");
	this.shape_36.setTransform(4,101.9,0.401,0.401);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#848484","#868686","#8A8A8A","#696969","#1C1C1C","#777777"],[0,0.035,0.251,0.38,0.639,1],-23,4.1,42.7,-6.2).s().p("AiPA0QgSgDgNgMQgNgMgDgQIgGgbQAPASAaACQCmAdCdhFQASgHAJgOIACATQABARgJAPQgKANgRAHQhoAwhrAAQgvAAgvgIg");
	this.shape_37.setTransform(10.3,106,0.401,0.401);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-19,4.6,43.8,-3.6).s().p("AgRLvQgSgCgNgMQgNgMgDgRIkC11IIXhGIBuWJQABAQgJAPQgKAPgRAHQhnAxhuAAQguAAgugJg");
	this.shape_38.setTransform(5.2,77.9,0.401,0.401);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C2C2C2").s().p("AgRgzIAUgDIAPBqIgVADg");
	this.shape_39.setTransform(10.5,107.4,0.401,0.401);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#767678","#89898B","#959698","#999A9C","#939495","#818183","#636465","#4D4D4E"],[0,0.114,0.231,0.345,0.475,0.655,0.867,1],-4.4,0.6,4.5,-0.5).s().p("AhgmQIBZgMIBoMsQgtALgsACg");
	this.shape_40.setTransform(9.2,93.1,0.401,0.401);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C6C6C6").s().p("AAQDIIgNhtIAAgBIgckdIAAgCIADgCQAGgBAAAFIArGLg");
	this.shape_41.setTransform(7.9,101.6,0.401,0.401);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#ADADAD").s().p("AALDLIgLhuQgWjKgJhTQAAgEACgDQAEgDADAAQAKgBABAKIARCxIAZDbg");
	this.shape_42.setTransform(7.9,101.5,0.401,0.401);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8A8A8A").s().p("Agji9QgBgOAOgBQAPgBABAOIArGMIgfAAIgpmKg");
	this.shape_43.setTransform(7.9,101.4,0.401,0.401);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},29).wait(61));

	// spark
	this.instance_2 = new lib.SparkAni();
	this.instance_2.setTransform(-10.9,145.1,1,1,0,0,0,14,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({x:5.1,y:107.5},8).to({_off:true},1).wait(61));

	// Fuse
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EBEBEB").s().p("AhOFhIgCgBIABgCQAQgOAPgSQBAhLAfhyQAYhbADh5QACg2AAhtIABhoIABgBIABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIgBBBIAAAaIgBByIAAAUQgBA9gCAfQgIB4ggBYQgSAzgaAtQgeAugnAkIgBAAg");
	this.shape_44.setTransform(2.9,108.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C7C7C7").s().p("AhRFgQgBgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQASgSANgOQA/hKAfhzQAYhZAEh6QABg2ABhtIABhoIAAgDIADgBQABABABAAQAAAAABABQAAAAAAABQABAAAAABIgBBbIgBByIAAAUQgBA9gCAfQgJB5gfBYQgTA0gaAsQgeAvgmAiIgDABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBgABOlfIgBABIgBBoQAABtgCA2QgDB5gYBbQgfByhABLQgPASgQAOIgBACIACABIABAAQAngkAeguQAagtASgzQAghYAIh4QACgfABg9IAAgUIABhyIAAgaIABhBQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_45.setTransform(2.9,108.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#969696").s().p("AhSFiQgDgEAEgDQAPgOAPgRQBAhLAehxQAWhTAFhtIABgTIAChuIAAhtIABgwQAAgGAFABQAGAAgBAFIAAAwIAAAQIgBCNIgBAzIAAAFIgBAVIgBASIgBARQgIB4ggBZQgnBthKBGIgEABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgABMlhIAAADIgBBoQgBBtgBA2QgEB6gYBZQgfByg/BLQgNAOgSARQgBABAAAAQAAAAAAABQgBAAAAABQABAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAAAAAIADgBQAmgjAeguQAagsATg0QAfhYAJh5QACgfABg+IAAgTIABhzIABhaQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAIgDABg");
	this.shape_46.setTransform(2.9,108.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EBEBEB").s().p("AidM0QCdi4BJkTQA8jeAJksQAEiFABkKIACkAIABgDIADgBQAFAAAAAFIgCCdIAABAQAAC6gCBeIgBAwQgDCYgFBKQgUEqhODZQgsB9hDBtQgmA8gtA0g");
	this.shape_47.setTransform(4.6,106.9,0.408,0.408);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C7C7C7").s().p("AhBFPQBBhLAchxQAYhZAEh6QABg2ABhtIABhoIAAgDIADgBQABAAABABQAAAAABAAQAAABABAAQAAABAAABIgBBaIgBBzIAAATQgBA+gCAfQgJB5gfBYQgTA0gaAsQgPAYgSAVg");
	this.shape_48.setTransform(4.6,106.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#969696").s().p("Ag4FRQARgVAQgYQAagsASg0QAfhYAJh5QACgfABg+IABgTIABhzIAAhaQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIgDABIgBADIgBBoQAABtgCA2QgEB6gYBZQgcBxhABLIgCgBIgBAAQBBhKAdhxQAWhTAFhtIAAgTIAChuIABhtIAAgwQAAgGAGABQAFAAAAAFIAAAwIAAAQIgBCNIgCAzIAAAFIAAAVIgBASIgBARQgIB4ggBZQgbBSgyA7g");
	this.shape_49.setTransform(4.6,106.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EBEBEB").s().p("AhqLsQBTiMAuizQA7jeAJksQAEiFABkKIACkBIABgCIADgBQAFAAAAAEIgBCeIAAA/QAAC7gDBeIgBAwQgDCYgFBIQgUEshLDYQgnBwg8BjIgGgFg");
	this.shape_50.setTransform(6.7,104.1,0.408,0.408);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C7C7C7").s().p("AgsEwQAhg5AShJQAYhZAEh6QABg2ABhtIABhoIABgDIACgBQABAAABABQABAAAAAAQABABAAAAQAAABAAABIgBBaIgBBzIAAATQgBA+gCAdQgJB7gfBYQgOAugYApQgDgEgDgBg");
	this.shape_51.setTransform(6.7,104.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#969696").s().p("AgmE1QAYgpAOguQAfhYAJh7QACgdABg+IABgTIABhzIAAhaQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgDABIgBADIgBBoQAABtgCA2QgEB6gYBZQgRBJgiA5IgCgBQAig4AShJQAWhTAFhtIAAgTIAChuIABhtIAAgwQAAgGAGABQAFAAAAAFIAAAwIAAAQIgBCNIgCAzIAAAFIAAAVIgBASIgBAPQgIB6ggBZQgPAwgYAoIgBgBg");
	this.shape_52.setTransform(6.7,104.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EBEBEB").s().p("AhGKkQAihRAYhbQA6jeAJksQAEiFABkKIACkBIABgCIADgBQAFAAAAAEIgCCeIAAA/QAAC7gCBeIgBAwQgDCWgFBKQgUEshMDYQgLAfgMAeIgJgCg");
	this.shape_53.setTransform(8.2,101.1,0.408,0.408);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C7C7C7").s().p("AgdETQANghAKglQAWhZAEh6QACg2AAhtIABhoIABgDIADgBQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAABaIgBBzIgBATQgBA8gCAfQgJB7gdBYIgJAZIgHgDg");
	this.shape_54.setTransform(8.2,101);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#969696").s().p("AgWEWIAJgZQAdhYAJh7QACgeABg8IABgUIABhyIAAhbQAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgDABIgBACIgBBpQAABsgCA2QgEB6gWBaQgKAlgNAhIgCgBQAOggAKglQAUhUAFhvIAAgRIAChtIABhuIAAgwQAAgFAGAAQAFAAAAAFIAAAxIAAAQIgBCMIgCA0IAAAEIAAATIgBATIgBAQQgIB7geBZIgKAZIgBgBg");
	this.shape_55.setTransform(8.2,101);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EBEBEB").s().p("AgrJVIAFgUQA5jeAJkuQAEiDACkKIACkBIABgCIACgBQAGAAAAAEIgCCeIAAA/QAAC7gDBeIgBAwQgCCWgGBKQgQDzg0C8IgGgIg");
	this.shape_56.setTransform(9.2,98.1,0.408,0.408);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C7C7C7").s().p("AgOD3IgEgFIACgIQAWhZAEh8QABg0AAhtIABhoIABgDIADgBQABABABAAQAAAAABABQAAAAAAABQAAAAABABIgBBbIgBByIAAAUQgBA7gDAfQgHBlgUBNIgBgCg");
	this.shape_57.setTransform(9.3,98.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#969696").s().p("AgND4QAUhNAHhkQACgfABg8IABgTIABhzIAAhaQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgDABIgBADIgBBoQAABtgCA0QgEB8gWBZIgCAIIgBgBIACgHQAUhTAFhvIAAgTIAChsIABhtIAAgwQAAgGAGABQAFAAAAAFIAAAwIAAAQIgBCNIgCAxIAAAFIAAAVIgBASIgBARQgHBlgVBOIgBgCg");
	this.shape_58.setTransform(9.3,98.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EBEBEB").s().p("AgrJVIAFgUIALgrIAIAFIgSBCIgGgIgAgMHRQAii3AGjlQAEiDACkKIACkBIABgCIACgBQAGAAAAAEIgCCeIAAA/QAAC7gDBeIgBAwQgCCWgGBKQgKCegZCHIgIgCg");
	this.shape_59.setTransform(9.2,98.1,0.408,0.408);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C7C7C7").s().p("AgOD3IgEgFIACgIIAEgSIABABIAGAEIgIAcIgBgCgAgGC9QANhKADheQABg0AAhtIABhoIABgDIADgBQABABABAAQAAAAABABQAAAAAAABQAAAAABABIgBBbIgBByIAAAUQgBA7gDAfQgEBAgKA3IgGgBg");
	this.shape_60.setTransform(9.3,98.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#969696").s().p("AgND4IAHgcIACABIgIAdIgBgCgAgUDxIACgHIAFgSIABAAIgFASIgCAIIgBgBgAAAC+QAKg3AEhAQACgfABg8IABgTIABhzIAAhaQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgDABIgBADIgBBoQAABtgCA0QgDBegMBKIgCAAQALhDAEhSIAAgTIAChsIABhtIAAgwQAAgGAGABQAFAAAAAFIAAAwIAAAQIgBCNIgCAxIAAAFIAAAVIgBASIgBARQgEBAgLA4IgBgBg");
	this.shape_61.setTransform(9.3,98.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EBEBEB").s().p("AgUHvIgBAAQAViYAGi0QAEiFABkIIACkBIABgCIADgBQAFAAAAAEIgCCeIAAA/QAAC7gCBcIgBAwQgDCYgFBKQgIBvgNBkIgIAAg");
	this.shape_62.setTransform(10.2,93.6,0.408,0.408);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C7C7C7").s().p("AgHDKIgCAAQAJg+AAhJQACg3AAhqIABhpIABgCIADgBQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAIAABbIgBBwIgBAUQgBA+gCAeQgDAugEApIgFgBg");
	this.shape_63.setTransform(10.2,93.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#969696").s().p("AgCDMQAEgpADguQACgeABg+IABgUIABhwIAAhbQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIgDABIgBACIgBBpQAABqgCA2QAABKgJA+IgCAAQAIg2ADg/IAAgTIAAhrIABhuIAAgwQAAgFAGAAQAFAAAAAFIAAAxIAAAQIgBCKIgCA0IAAAEIAAAVIgBATIgBAQQgDAugEApIgCAAg");
	this.shape_64.setTransform(10.2,93.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EBEBEB").s().p("AgMGpQAIhcADhlQACiFABkIIACkBIABgCIADgBQAFAAAAAEIgBCeIAAA/QAAC7gDBcIgBAwQgDCYgFBKIgDBJIgJgBg");
	this.shape_65.setTransform(10.5,90.8,0.408,0.408);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C7C7C7").s().p("AgJDKIAAAAIABAAIgBAAgAgCCSQACglAAgqQACg2AAhrIABhoIABgDIADgBQABABAAAAQABAAAAABQABAAAAABQAAAAAAABIAABbIgBBwIgBAUQgBA9gCAfIgCAeIgFgBg");
	this.shape_66.setTransform(10.2,93.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#969696").s().p("AgLDJIACACIAAAAIgCABIAAgDgAADCUIACgeQACgfABg+IABgTIABhxIAAhaQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAgBAAIgDABIgBADIgBBoQAABrgCA2QAAApgCAmIgCgBIAEg7IAAgTIAAhsIABhtIAAgwQAAgGAGABQAFAAAAAFIAAAwIAAAQIgBCLIgCAzIAAAFIAAAVIgBASIgBARIgDAeIgBAAg");
	this.shape_67.setTransform(10.2,93.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EBEBEB").s().p("AgFGCIgEAAQAEg4ABg6QAEiEAAkJIABkAIABgDIADgBQAFAAAAAFIgBCdIAABAQAAC4gDBeIgBAwQgDCRgCBKIgFAAg");
	this.shape_68.setTransform(10.6,89.2,0.408,0.408);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C7C7C7").s().p("AgJDKIAAAAIABAAIgBAAgAABByIgBAAIAAgvQACg2AAhrIABhoIABgDIADgBQABABAAAAQABAAAAABQABAAAAABQAAAAAAABIAABbIgBBwIgBAUIgCBZIgFAAg");
	this.shape_69.setTransform(10.2,93.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#969696").s().p("AgLDJIACACIAAAAIgCABIAAgDgAAGBzIAChaIABgTIABhxIAAhaQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAgBAAIgDABIgBADIgBBoQAABrgCA2IAAAvIgCAAIACgcIAAgTIAAhsIABhtIAAgwQAAgGAGABQAFAAAAAFIAAAwIAAAQIgBCLIgCAzIAAAFIAAAVIgBASIgBAOIgBAAg");
	this.shape_70.setTransform(10.2,93.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},20).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[]},1).wait(61));

	// stick
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E8E8E8").s().p("AiBuIIAXgCIDrcSIgVADg");
	this.shape_71.setTransform(15,141.6,0.401,0.401);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#262626","#2B2B2B","#3A3A3A","#525252","#737373","#9E9E9E","#B2B2B2","#AEAEAE","#9F9F9F","#888888","#676767","#3D3D3D","#0D0D0D"],[0,0.067,0.149,0.239,0.329,0.427,0.467,0.537,0.624,0.714,0.808,0.906,1],5.9,-0.7,-7.4,1).s().p("AjQzlIBZgMMAFIAnWIhZANg");
	this.shape_72.setTransform(13.7,127.3,0.401,0.401);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71}]}).wait(90));

	// Rockets_noMove
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#EBFD8C","#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.545,0.627,0.729,0.835,0.945,0.996],19,64.6,-27.3,-35).s().p("ABuBhIgchPQgXhAg/hGIgXgYQgMgMgigdQgegagPgSQgKgLgHgOIgLgTQgFgNAGgIQAIgNAQAFQAGACAVAMIAZAQQA6AsA3BdIARAeQAaAxAOAwIAVBNQAbBzAABxQgOh5gZhTg");
	this.shape_73.setTransform(114.9,70.6,0.404,0.404,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.188,0.408,0.647,0.89,1],16.7,-16.3,-19.1,15).s().p("ABoGFQgLgMgGgTIgThQQgThSgOgpQgLgggNgdQgbg/grgoQgwgugzgNIgQlLQBTAgBAA2QAbAZAWAZQAaAeAUAfQAYAmASAtQAMAcAHAWQAIAbAGAaQAaBvAGCGQAAAhgBAgQgDAlgHAXIAAAAQgGAfgXANQgDACgEAAIgCAAQgLAAgLgLg");
	this.shape_74.setTransform(115.6,72.4,0.404,0.404,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#319016","#2F8B15","#2B7D12","#23650D","#174506","#091B01","#000000"],[0,0.145,0.318,0.498,0.69,0.886,1],-13.1,-1.8,-38.6,-6.4).s().p("ABnGVQgTgOgHgbIgZhoQgPg+gMgmQgLgegNgdQgcg/gngmQgxgtg2gMIgRlkQBhAiBGA8QAaAYAYAaQAXAaAYAlQAZAnASAuIATAzQAIAZAHAcQAaBxAFCHQACAdgCAlQgDAlgHAZQgIAjgbAQQgHAEgIAAQgLAAgMgJg");
	this.shape_75.setTransform(115.6,72.3,0.404,0.404,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgYi5IAkgBIANFtIghAIg");
	this.shape_76.setTransform(122.5,62.9,0.404,0.404,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#EBFD8C","#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.545,0.627,0.729,0.835,0.945,0.996],-16.9,-25.2,20.9,31.1).s().p("AhqBYIAKhRQAHgyASgxIAMghQAshkAxg0QAMgMAKgHQASgPAHgDQAQgIAJAMQAHAIgDANQgCAHgGAOQgGAPgIAMQgMAUgaAdQgeAigKAOIgRAbQg2BOgNBDIgRBSQgNBWAEB6QgQhzAKhzg");
	this.shape_77.setTransform(158,73.7,0.404,0.404,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.188,0.408,0.647,0.89,1],-20.1,-20.7,10.7,8.4).s().p("AhMGgQgYgJgLgeIAAAAQgKgXgIgjQgGgfgEghQgOiHAKhyQACgdAEgXQAEgZAIgbQAKgvATgqQAQgjAVggQATgdAYgcQA2g/BOgrIAgFKQgzAVgnA0QgkAtgUBCQgHAfgGAhQgIAugHBSQgEAugEAjQgCATgKAOQgKAOgMABIgIgCg");
	this.shape_78.setTransform(157,75.2,0.404,0.404,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#319016","#2F8B15","#2B7D12","#23650D","#174506","#091B01","#000000"],[0,0.145,0.318,0.498,0.69,0.886,1],-5.6,-90.3,105.1,-6.8).s().p("AhQGuQgcgLgNgiQgMgYgHgkQgGgegEgjQgOiKAJhyQACgXAFgeIALg1QAMgyATgpQAQgiAVgiQATgcAageQA7hFBagwIAjFkQg0ASgpA2QgjAsgTBAQgJAegEAhQgHAmgGBAIgKBqQgDAcgRARQgMANgOAAQgFAAgGgDg");
	this.shape_79.setTransform(157,75.1,0.404,0.404,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AACC2IgmlpIAkgFIAlFxg");
	this.shape_80.setTransform(151.5,65,0.404,0.404,0,0,180);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.188,0.408,0.647,0.89,1],1.1,5,-2.6,-46.9).s().p("AAhG9QgDgDgBgEIhLtxIAtgDIAwNzQABAEgDADQgCACgEABIgBAAQgDAAgCgCg");
	this.shape_81.setTransform(136.8,75.2,0.404,0.404,0,0,180);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#319016","#2F8B15","#2B7D12","#23650D","#174506","#091B01","#000000"],[0,0.145,0.318,0.498,0.69,0.886,1],4.8,-32.6,7.6,-50.9).s().p("AAaHEQgFgFgBgHIhMt7IA+gEIAzN8QAAAHgFAGQgFAGgHAAIgCAAQgHAAgFgEg");
	this.shape_82.setTransform(136.8,75.2,0.404,0.404,0,0,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("Agyi9IBTgGIASGCIg/AFg");
	this.shape_83.setTransform(137.6,64,0.404,0.404,0,0,180);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#76C2FB").s().p("AgJACQgYgCgfgEIAAgEQAWADAjACQAiACAlAAIABAKQgtgDgdgEg");
	this.shape_84.setTransform(145.3,82.9,0.404,0.404,0,0,180);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#EFEFEF","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#D3D3D3","#DBDBDB","#EFEFEF","#F6F6F6"],[0,0.039,0.122,0.318,0.557,0.812,0.878,0.976,1],-26.3,2.1,55.3,-3.8).s().p("AiIAIQgigCgfgDIALgDIA3ABQCEADCOgKIBAgHIhJAUQhHAHhEAAQhAAAg/gGg");
	this.shape_85.setTransform(141.9,73.4,0.404,0.404,0,0,180);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BCF87C").s().p("AgSACIhEgDIAAgDQBWAEBWgBIABAGQg2AAgzgDg");
	this.shape_86.setTransform(154.8,10.8,0.404,0.404,0,0,180);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#BCF87C").s().p("AgTAFIhDgFIAAgBIABgDICsgDIgBAHIABAIQg2gBg0gCg");
	this.shape_87.setTransform(154.7,10.7,0.404,0.404,0,0,180);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#8CF239","#8EF439","#90F93A","#80D935","#73C031","#84E036"],[0,0.055,0.251,0.482,0.639,1],-52.8,5.1,51.8,-2.5).s().p("AlfArQhbgGg4gHICTACQCEAADcgUQCsgMC1gXQBZgMA4gKQg2APhaASQizAhitANQiGAMhyAAQg3AAgzgDg");
	this.shape_88.setTransform(141.3,9.2,0.404,0.404,0,0,180);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#BAFD6B","#A1F257","#91D253"],[0,0.408,1],-6.5,0.3,56.5,-2.6).s().p("AhJBrIgVjbQBXAEBVgBIARDeQhUAAhUgGg");
	this.shape_89.setTransform(154.4,15.2,0.404,0.404,0,0,180);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#8BD944").s().p("AgrhpIA/gNQAOAgACAhIAIB0QACASgLAPQgLAOgRABIgiAIg");
	this.shape_90.setTransform(121.8,12.1,0.404,0.404,0,0,180);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#78E62B","#7AE92C","#7CEE2D","#6BCE26","#5BAE1E","#6ED227"],[0,0.067,0.251,0.459,0.639,1],-51.3,5.1,51.6,-2.4).s().p("AnQCQQgRACgNgNQgNgNgCgTIgIhzQgCgeAHggQHXAjIXhxQAOAgACAhIAIB0QACATgLAOQgLAPgRABQl0BPlPAAQh5AAh1gLg");
	this.shape_91.setTransform(141,13.5,0.404,0.404,0,0,180);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#BAFD6B","#A1F257","#91D253"],[0,0.408,1],-29.4,2.8,27.1,-1.3).s().p("AimIAIgBgFIEvvaQAJggAEgLQAKgGAJgCIgBAEIiiQMIADAVg");
	this.shape_92.setTransform(151.5,-9.9,0.404,0.404,0,0,180);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#80C542","#7DBF41","#76B33F","#73AC3E","#72AA3E","#7CBC40"],[0,0.039,0.149,0.298,0.655,1],26.4,15.5,-169.8,-95.8).s().p("AD6IXQgKgkgQguQg7ighzjeQiBj0g+h+IgqhTIhSimIgSgnQARAIANAVIH3OFQAWAnADAuIAJB2QABANgFALQgFALgKAHIgPg1g");
	this.shape_93.setTransform(131.5,-7.4,0.404,0.404,0,0,180);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#73DC29","#73DC29","#7AE92C","#7CEE2D","#6BCD26","#4D9318","#60B821"],[0,0.004,0.133,0.251,0.4,0.639,1],-54,3.3,46.9,-4).s().p("AnQJwQgRABgNgMQgNgNgCgUIgIh1QgDguAQgqIFyvEQAQgpAngDQAngCAVAmIH3OEQAXAoADAuIAIB1QACATgLAPQgLAOgRABQl0BPlPAAQh5AAh1gKg");
	this.shape_94.setTransform(141,-5.8,0.404,0.404,0,0,180);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#FFFFFF","#FFFFFF","#FFFFFF","#EBEBEB","#D6D6D6","#DEDEDE","#EBEBEB"],[0,0.047,0.318,0.541,0.812,0.906,1],-21.6,1.2,58.9,-4.6).s().p("AieATQgkgFgRgYIA/gTQCvANC5gRIjkBDQhGgDhIgMg");
	this.shape_95.setTransform(143.9,74.7,0.404,0.404,0,0,180);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E3E3E3").s().p("AhYgeICugMIADAjIipAyg");
	this.shape_96.setTransform(151.5,19.5,0.404,0.404,0,0,180);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AALLKIgHg9ICAgnIAHBnIgUAHQgygDg6gHgAgTGlICGgpIAHBnIiCAogAgrC9ICNgsIAHBoIiJAqgAhEgpICWguIAHBlIiSAtgAhdkSICegwIAHBoIiaAvgAh1n6IClgyIAHBnIihAygAiKrGICtgNIADAkIioA0g");
	this.shape_97.setTransform(149.4,46.9,0.404,0.404,0,0,180);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#137DD6").s().p("AhRA0IgJhbICugMIAHBlQg5ACg5AAIg6AAg");
	this.shape_98.setTransform(151.4,19.8,0.404,0.404,0,0,180);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D1D1D4").s().p("AgTgUIAlgMIACA6IglAHg");
	this.shape_99.setTransform(122.9,18.1,0.404,0.404,0,0,180);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EEEEEB").s().p("AAAIjIAjgMIADBpIgkALgAgHE1IAjgLIADBpIgiALgAgPBIIAlgLIADBoIgkAMgAgWijIAlgMIACBpIgjALgAgdmRIAkgLIADBoIglAMgAglp+IAmgMIADBoIgmAMg");
	this.shape_100.setTransform(122.1,43,0.404,0.404,0,0,180);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#C3C3C3","#CDCDCD","#DADADA","#E1E1E1","#E3E3E3","#D7D7D7","#A2A2A2","#8D8D8D","#949494","#A9A9A9","#CACACA","#D1D1D1"],[0,0.027,0.078,0.149,0.318,0.38,0.671,0.812,0.855,0.914,0.988,1],-42.9,3.2,43.3,-3.1).s().p("AnCA+IgJhQIG1ggIl+BxgAHLg/IABA9Qi/AfiwARg");
	this.shape_101.setTransform(140.6,19.3,0.404,0.404,0,0,180);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#DBDBDB","#EAEAEA","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#B3B3B3","#9E9E9E","#A6A6A6","#BABABA","#DBDBDB","#EBEBEB"],[0,0.035,0.086,0.153,0.318,0.42,0.686,0.812,0.851,0.906,0.973,1],-39.9,2.9,46.5,-3.4).s().p("AkCLSQgkgFgSgcIMUjvIADBpIpWC2QhCgEhJgLgAlYHLIMtj2IADBoIskD0gAlzDkINCj7IADBnIs5D6gAmOgBINWkDIADBoItND/gAmpjpINqkJIADBoIthEHgAnEnQIN+kPIADBoIt1EMgAneq1IG+ghImzCFg");
	this.shape_102.setTransform(139.9,46.5,0.404,0.404,0,0,180);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#1173C4","#1172C3","#0E66AF","#095490","#084D84"],[0,0.314,0.494,0.82,1],-45.7,4.4,45.9,-2.2).s().p("AnCBIIgJhQIOVhDIACBRQmGBGloAAQhRAAhPgEg");
	this.shape_103.setTransform(140.6,18.9,0.404,0.404,0,0,180);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#1994FB").s().p("AAKLJIiV2QICugMIBpWnQhDgDg/gIg");
	this.shape_104.setTransform(149.4,46.9,0.404,0.404,0,0,180);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3B87C2").s().p("AgQgTIAhgIIAAAIIgBAHIAAAAIgBADIAAABIgBADIAAAAIgCAEIAAABIgCAAIAAABIgCADIAAABIgIAMIAAAAIgPALg");
	this.shape_105.setTransform(121.3,72,0.404,0.404,0,0,180);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#2B95E8","#2B96EA","#2D9EF7","#2DA1FC","#2B8FDC","#2A7FC1","#2984C9"],[0,0.016,0.141,0.251,0.569,0.808,1],-38.7,3.9,39,-1.7).s().p("AkSAhQgrgCgogFIgegEQArADBHABQCEADCOgMQCEgMCOgWQBGgMArgIQgqAMhFAPQiXAfh8ALQhLAGhJAAQhBAAg/gFg");
	this.shape_106.setTransform(136.4,72.4,0.404,0.404,0,0,180);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#1480DB","#1584E2","#178CEF","#188FF4","#137CD3","#0E66AE","#0F6BB7"],[0,0.043,0.153,0.251,0.525,0.808,1],-42.6,4.3,47.7,-2.2).s().p("AlRAyQgZgEgSgQQgRgPgCgTIAAgCQF5ApGmhkIAAADQAAAVgPARQgPASgZAGQjyBCjeAAQhvAAhrgQg");
	this.shape_107.setTransform(136.7,73.5,0.404,0.404,0,0,180);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3A84BB").s().p("AgmrCIAmgDIAnVVQAAAQgJAOQgJAOgQAKg");
	this.shape_108.setTransform(122.1,44.5,0.404,0.404,0,0,180);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#1480DB","#1480DB","#1688E8","#178AED","#1278CC","#0A5592","#0F6BB7"],[0,0.004,0.133,0.251,0.467,0.808,1],-41.6,4.7,51.3,-2).s().p("AkCLbQgZgDgSgQQgRgQgCgVIie1LIOVhDIAoVUQAAAVgPASQgPARgZAHQjyBEjfAAQhuAAhrgRg");
	this.shape_109.setTransform(139.9,46,0.404,0.404,0,0,180);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#58A2DA").s().p("Ag+AhIgHhCICFgKIAHBXQhAgChFgJg");
	this.shape_110.setTransform(145.9,76.2,0.404,0.404,0,0,180);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#4581AE").s().p("AgegfIA7gEIACAzQgLAIgMACIgiAKg");
	this.shape_111.setTransform(123.6,74.3,0.404,0.404,0,0,180);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#1071C0","#1278CC","#137AD0","#0F6DB9","#0B5A9A","#084F87","#074B80","#0C5FA2"],[0,0.125,0.251,0.369,0.549,0.702,0.808,1],-34.8,3.6,35.4,-1.4).s().p("Ak8AwQgQgCgNgIIgFgxIK8gzIABA1QgLAIgMABQjkA/jTAAQhoAAhlgPg");
	this.shape_112.setTransform(136.6,75.4,0.404,0.404,0,0,180);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#59B5FA").s().p("AAkAcIgBAAIgPgBIgCAAIgcgDIgCAAIgfgEIgCAAIgRgDIgEguQBDAJA+ACIAEAwg");
	this.shape_113.setTransform(145.3,83.8,0.404,0.404,0,0,180);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#479AD8").s().p("AgagNIAagHQANgEANgKIABAPQAAASgNANQgNAPgTAGIgGACg");
	this.shape_114.setTransform(123.3,81.4,0.404,0.404,0,0,180);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#60A8DD").s().p("AgYAEIAxgMQgSAIgeAJg");
	this.shape_115.setTransform(123.4,80.5,0.404,0.404,0,0,180);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#1990F4","#1E96F9","#2199FC","#2097F8","#1983D9","#1576C6","#1472BF","#1784E0"],[0,0.11,0.251,0.275,0.494,0.678,0.808,1],-33.6,3.5,34,-1.4).s().p("AjvAfQgogEgggIIgZgIIAaAGQAhAFAnACQBpAGCHgLQB9gKBygWQA8gNAkgMQgiAQg7AQQh1Afh8AKQg4AEg1AAQhHAAg+gIg");
	this.shape_116.setTransform(136,81.7,0.404,0.404,0,0,180);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#1685E5","#1689EA","#1891F7","#1994FB","#1689E9","#1276CA","#0F6BB7","#0E67B0","#137AD1"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-33.7,3.5,35.3,-1.5).s().p("AkfAxQgWgEgPgNQgOgNgDgSIgBgMQANAIAQACQEpAtFLhcQAOgEAOgKIAAAPQABASgNAPQgNAOgWAFQjPA6i+AAQhfAAhbgOg");
	this.shape_117.setTransform(136.1,82.5,0.404,0.404,0,0,180);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#59B0F1").s().p("AgyB3IgCgBIgYjvICGgKIATEHQhFgDg6gKg");
	this.shape_118.setTransform(145.7,79.7,0.404,0.404,0,0,180);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#468DC2").s().p("Aggh1IA7gFIAGC+QAAARgNAPQgNAQgTAGIgGABg");
	this.shape_119.setTransform(123.5,77.8,0.404,0.404,0,0,180);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#1480DB","#1480DB","#1688E8","#178AED","#1277CB","#0D65AC","#0B5999","#0A5592","#0F6BB7"],[0,0.004,0.133,0.251,0.404,0.569,0.71,0.808,1],-34.1,3.6,36.4,-1.5).s().p("AkVCJQgWgEgPgNQgOgNgDgSIgWi8IK9gzIAFC9QABASgNAPQgNAPgWAGQjPA6i+AAQhfAAhbgOg");
	this.shape_120.setTransform(136.5,79,0.404,0.404,0,0,180);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#7CB7E2").s().p("AgdBtIgCgXIgIhHQgFgsAFgWQADgPAKgSQAKgSAKgJIAWgCQANANAEAxQACAbABAmIAHBkQgvgDgZgCg");
	this.shape_121.setTransform(142.3,82.1,0.404,0.404,0,0,180);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3979A9").s().p("AgNBYIgHhHQgEgtACgWQABgOAEgRQAFgSAFgJIALgBQAHANAEAyIAEBAIAFBTIgjAJg");
	this.shape_122.setTransform(127.7,80.9,0.404,0.404,0,0,180);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#1071C0","#1278CC","#137AD0","#0E68B2","#0A5896","#084F86","#074B80","#0C5FA2"],[0,0.125,0.251,0.396,0.557,0.702,0.808,1],-22.5,2.3,22.9,-1).s().p("AjWB3IgSjUIHEghIANDSQikAriZAAQhCAAhAgIg");
	this.shape_123.setTransform(136.1,81.5,0.404,0.404,0,0,180);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#95D1FC").s().p("AgiAAIAAgFQAgADAkABIABAHQglgCgggEg");
	this.shape_124.setTransform(141.4,94.5,0.404,0.404,0,0,180);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#7DC6FC").s().p("AggAQIgDgmQAjAEAhACIADAng");
	this.shape_125.setTransform(141.3,95.2,0.404,0.404,0,0,180);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#3C92D3").s().p("AgQgNIAQgEQAIgDAIgGIABAUQABAOgQAMQgEAEgJADIgBAAg");
	this.shape_126.setTransform(126.9,93.6,0.404,0.404,0,0,180);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#60A8DD").s().p("AgNABIAbgFIgbAJg");
	this.shape_127.setTransform(127,92.9,0.404,0.404,0,0,180);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#1A90F4","#1F97F9","#229AFC","#2299F9","#1B85DA","#1778C7","#1674C0","#1885E0"],[0,0.11,0.251,0.271,0.49,0.678,0.808,1],-21.7,2.2,21.9,-0.9).s().p("Ah6AZQg1gDgpgNQAwAIA8gBQAqgBBCgFIBygMIBCgOIAlgIIgjANQgZAJgXADIgSAEQgXAGhMAKIgpACQgqACgfAAIgZAAg");
	this.shape_128.setTransform(135.2,93.7,0.404,0.404,0,0,180);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#1685E5","#1689EA","#1891F7","#1994FB","#1689E9","#1276CA","#0F6BB7","#0E67B0","#137AD1"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-22.6,2.3,22.7,-0.9).s().p("Ai5AkQgOgCgKgJQgJgIgCgMIgBgNQAFADAGAAQDEAcDZg7QAKgDAIgGIABAUQAAAMgIAJQgIAIgOAEQiGAmh7AAQg9AAg7gKg");
	this.shape_129.setTransform(135.2,94.4,0.404,0.404,0,0,180);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#7DC1F4").s().p("AgQDgIgYj+IgIhHQgFguAFgWQADgPAKgSQAKgSALgJIAVgCQANANAEAxQACAbABAoIAYFOQgigCghgGg");
	this.shape_130.setTransform(142,86.8,0.404,0.404,0,0,180);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#3A85BE").s().p("AgTgaIgIhIQgEgvACgWQABgOAFgQQAEgTAGgJIAMAAQAFANAEAxIAEBCIASEgQABAMgJAKQgIAJgOAEIAAAAg");
	this.shape_131.setTransform(127.4,85.6,0.404,0.404,0,0,180);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#1480DB","#1480DB","#1688E8","#178AED","#1688E9","#1172C3","#0D63A8","#0B5998","#0A5592","#0F6BB7"],[0,0.004,0.133,0.251,0.267,0.427,0.576,0.71,0.808,1],-22.8,2.4,23.5,-1).s().p("AioDsQgOgCgKgJQgJgIgCgMIgjmgIHEghIAZGhQAAAMgIAJQgIAKgOAEQiGAlh7AAQg9AAg7gJg");
	this.shape_132.setTransform(135.9,86.3,0.404,0.404,0,0,180);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#73B2E0").s().p("AgKgYIARgBIAEAyIgRACg");
	this.shape_133.setTransform(135.5,96.3,0.404,0.404,0,0,180);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#053F6C","#09518B","#0D63A9","#1070BF","#1278CC","#137AD0","#1277CB","#106FBD","#0D62A6","#084F86","#074B80"],[0,0.082,0.184,0.286,0.38,0.467,0.576,0.702,0.835,0.976,1],-5.5,0.4,4.9,-0.3).s().p("Ag0jLIBLgFIAeGcQgpAFgiAAg");
	this.shape_134.setTransform(135.5,88.9,0.404,0.404,0,0,180);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#CECECE").s().p("AAWDrIgFg+QgJhigYjLIAAgBIgNhoIAJgBIAKBPQAOCAAJBTIAEAlQAKBpADAlg");
	this.shape_135.setTransform(138.2,87.9,0.404,0.404,0,0,180);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#AFAFAF").s().p("AARDrIgEg9QgKhkgXjKIgNhpIARgBIAKBOQARCWAGA+IAEAkQAKBbADA0g");
	this.shape_136.setTransform(138.2,87.9,0.404,0.404,0,0,180);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#848484").s().p("AAJCuQgIhUgNh2IgZjMIAZgCIAEAeQAZDWAFAuQAOCNACAmIgZAAg");
	this.shape_137.setTransform(138.2,87.9,0.404,0.404,0,0,180);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#73BCF3").s().p("AhLuXIATgBICEcwIgTABg");
	this.shape_138.setTransform(132.9,131.8,0.404,0.404,0,0,180);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#07487B","#074B80","#0D62A7","#1174C5","#1480DB","#1688E8","#178AED","#1688E8","#1480DA","#1172C3","#0C5FA3","#0A5592"],[0,0.012,0.11,0.204,0.298,0.384,0.467,0.569,0.686,0.812,0.941,1],5,-0.3,-6.2,0.5).s().p("AiL2HIBMgFMADLAsUIhMAFg");
	this.shape_139.setTransform(133.9,111.7,0.404,0.404,0,0,180);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EBEBEB").s().p("AAzFXIgBgBQggglgWgvQgVgugMgyQgUhWAGh0QABgbAGg9IACgSIAMhtIAKhVQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIABABIAAABIgLBjQgLBfgFA7QgKB0AMBYQARBvA0BPQALARAPAQIAAABIgCACIAAAAg");
	this.shape_140.setTransform(142.1,103.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#C7C7C7").s().p("AAxFXQghgmgVgvQgWgtgLgzQgUhXAGhzIAHhYIACgTIAMhsIAJhVQAAgBABgBQAAgBAAAAQABAAAAAAQABgBABABIACABIABACIgLBjIgRCbQgKBzANBYQAQBvA0BOQAMARAOAQQAAAAAAABQABAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgCgCgAgUlUIgKBVIgMBtIgCASQgGA9gBAbQgGB0AUBWQAMAyAVAuQAWAvAgAlIABABQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABgBIAAgBQgPgQgLgRQg0hPgRhvQgMhYAKh0QAFg7ALhfIALhjIAAgBIgBgBQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABg");
	this.shape_141.setTransform(142.1,103.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#969696").s().p("AAvFZQg+hLgZhrQgUhYAGhzIAJhrIAPiFIAGg9QABgFAFABQAFAAAAAFIgPB/IgNB/QgKBzANBYQAQBuAzBOQAMARAOAQQADADgEAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAgWlUIgJBVIgMBsIgCATIgHBYQgGBzAUBXQALAzAWAtQAVAvAhAmIACACQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgOgQgMgRQg0hOgQhvQgNhYAKhzIARibIALhjIgBgCIgCgBIgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBABAAABg");
	this.shape_142.setTransform(142.1,103.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EBEBEB").s().p("AjGNeQAAgBAAAAQAAAAAAgBQAAAAABgBQAAgBAAAAQAngjAmgqQCgi5BKkXQA8jeAJksQAEiFABkKIACkBIABgCIADgBQAFAAAAAEIgCCeIAAA/QAAC7gCBeIgBAwQgDCYgFBKQgUEqhODYQgsB9hDBuQhIBxhgBWIgCABQgDAAgCgDg");
	this.shape_143.setTransform(-166,104.9,0.408,0.408);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FB7476").s().p("AgJACQgagFgfgMIAAgFQAbAIAgAGQAeAGArAGIgBAPQgxgLgZgIg");
	this.shape_144.setTransform(-165,79.5,0.408,0.408);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#EFEFEF","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#D3D3D3","#DBDBDB","#EFEFEF","#F6F6F6"],[0,0.039,0.122,0.318,0.557,0.812,0.878,0.976,1],-27.5,-1.1,57.4,2.8).s().p("AiOgHQgqgKgZgHIAMgCIA5AJQCIAVCTAEIBDABIhOASQiMgEiGgeg");
	this.shape_145.setTransform(-160.2,67.6,0.408,0.408);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#F87579").s().p("AgUAAIhEgHIAAgDQBjAKBPAGIgBAFIhtgLg");
	this.shape_146.setTransform(-165.4,-9.5,0.408,0.408);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F87579").s().p("AgVABIhEgHIAAgDIABgCICzANIgDAFIAAAFIhtgLg");
	this.shape_147.setTransform(-165.4,-9.5,0.408,0.408);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#F1232A","#F4232A","#F8232A","#D82328","#C02327","#DF2329"],[0,0.055,0.251,0.482,0.639,1],-55.1,-1.7,53.6,3.2).s().p("AAAAVQjTgIicgRQhegLg5gKICYAPQCIAKDmAIQEeANDpgDQg5AEhfACQhDAChDAAQh2AAhzgFg");
	this.shape_148.setTransform(-151.2,-9.3,0.408,0.408);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#FC636C","#F14C4F","#D24B4D"],[0,0.408,1],-6.8,-0.5,57.5,4.1).s().p("AhZA4IABiCQBgAKBRAHIgFCEQhngKhGgJg");
	this.shape_149.setTransform(-165.4,-6.9,0.408,0.408);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#D9383B").s().p("AgjhBIBDgCQAKAVAAATIgEBEQAAALgNAIQgNAIgPgBIgmABg");
	this.shape_150.setTransform(-131.2,-5.8,0.408,0.408);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#E50B18","#E90B18","#ED0C19","#CD0814","#AE060F","#D20915"],[0,0.067,0.251,0.459,0.639,1],-53.5,-1.6,53.5,3.2).s().p("AnuArQgRgBgMgJQgMgIAAgMIADhEQABgSAKgSQHjA/I0gSQAKAVAAATIgEBEQAAALgNAIQgNAIgRgBQh1AEhwAAQmQAAligxg");
	this.shape_151.setTransform(-151.3,-6.6,0.408,0.408);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#FC636C","#F14C4F","#D24B4D"],[0,0.408,1],-30.7,-1.7,28,0.9).s().p("AjhEXIAAgDIGdoqQAOgUAFgEQAIgCALgBIkQJXIAAAMg");
	this.shape_152.setTransform(-159.8,-21.2,0.408,0.408);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#C5383A","#BE383A","#B23739","#AB3739","#A93739","#BC373A"],[0,0.039,0.149,0.298,0.655,1],18.2,14.2,-120.2,-87.6).s().p("ADIFTIgTgzQgshjhgiOQhtibgzhQIh1i3QATAIAJAMIGrJBQATAZgBAcIgEBFQgBARgWAHg");
	this.shape_153.setTransform(-139.1,-18.3,0.408,0.408);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#CD0814","#92040B","#B80711"],[0,0.004,0.133,0.251,0.4,0.639,1],-51.2,-2.6,53.7,2.2).s().p("AnuFJQgRAAgMgJQgMgJAAgLIADhGQACgdAVgXIHgoWQAUgXAnACQApACASAYIGtJBQATAZgBAcIgEBFQAAAMgNAHQgNAIgRgBQh1AEhwAAQmQAAligxg");
	this.shape_154.setTransform(-151.3,-18.3,0.408,0.408);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#FFFFFF","#FFFFFF","#FFFFFF","#EBEBEB","#D6D6D6","#DEDEDE","#EBEBEB"],[0,0.047,0.318,0.541,0.812,0.906,1],-22.7,-0.6,61,3.2).s().p("AipAMQgjgMgPgiIBEgQQCyAqDBAEIj0A3QhHgOhKgZg");
	this.shape_155.setTransform(-162.4,68.6,0.408,0.408);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#E3E3E3").s().p("AhZgvIC1AIIgDAsIi0Asg");
	this.shape_156.setTransform(-162.8,-4.8,0.408,0.408);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AhsOaIABhQICHggIgFCHIgXAFQgxgLg7gRgAhkIZICPgiIgHCHIiLAhgAhfDoICYgkIgGCHIiVAjgAhZhHICggmIgHCFIibAmgAhTl3ICogoIgGCHIilAngAhNqoICwgqIgHCHIisApgAhIu1IC1AJIgDAuIi0Arg");
	this.shape_157.setTransform(-163.4,32,0.408,0.408);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#D70915").s().p("AhbAxIACh4IC1AJIgGCGQhMgHhlgQg");
	this.shape_158.setTransform(-162.8,-3.8,0.408,0.408);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#D4D3D1").s().p("AgQgdIAngKIgGBLIgnAEg");
	this.shape_159.setTransform(-132.9,-2.3,0.408,0.408);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EBECEE").s().p("AhLLFIAngJIgLCIIgmAJgAgzGQIAogJIgLCIIgnAJgAgbBbIAngJIgLCIIgmAJgAgDjYIAogKIgLCIIgnAKgAAToNIAqgKIgKCIIgqAKgAAstCIAqgKIgLCIIgqAKg");
	this.shape_160.setTransform(-135.4,30.5,0.408,0.408);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#C3C3C3","#CDCDCD","#DADADA","#E1E1E1","#E3E3E3","#D7D7D7","#A2A2A2","#8D8D8D","#949494","#A9A9A9","#CACACA","#D1D1D1"],[0,0.027,0.078,0.149,0.318,0.38,0.671,0.812,0.855,0.914,0.988,1],-44.9,-1.2,44.7,2.9).s().p("ABVBSIGIhaIgHBMQisAOifAAIg2AAgAncAZIAChqIHGAVImYBeg");
	this.shape_161.setTransform(-151.4,-3.6,0.408,0.408);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#DBDBDB","#EAEAEA","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#B3B3B3","#9E9E9E","#A6A6A6","#BABABA","#DBDBDB","#EBEBEB"],[0,0.035,0.086,0.153,0.318,0.42,0.686,0.812,0.851,0.906,0.973,1],-48.2,-0.5,41.6,3.6).s().p("AmuOUQglgNgOglINLjHIgLCIIqBCXQhJgPhDgXgAnkIzINnjOIgLCJItdDLgAngEDIN8jTIgLCIItzDQgAndgsIOSjXIgLCIIuJDTgAnalcIOnjcIgKCIIueDagAnWqMIO8jiIgLCIIuzDggAnTu5IHQAVInRBug");
	this.shape_162.setTransform(-151.7,31.9,0.408,0.408);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#C50813","#C40813","#B0060F","#90040B","#840309"],[0,0.314,0.494,0.82,1],-48,-1.2,47.3,3.2).s().p("AndAZIAChqIO5AsIgJBpQipAOiiAAQlBAAkmg5g");
	this.shape_163.setTransform(-151.4,-3.6,0.408,0.408);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FC0D1B").s().p("AhsOYIAk9PIC1AJIhXdmQhCgNhAgTg");
	this.shape_164.setTransform(-163.4,32.1,0.408,0.408);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#C2383A").s().p("AgPgcIAjgFIAAAIIgBABIAAAFIAAAAIgCAEIAAABIgBAFIAAAAIgCAEIAAABIgCAEIAAAAIgCACIAAABIgDAEIAAAAIgGAIIAAAAIgEAHIgQAMg");
	this.shape_165.setTransform(-138.5,68.6,0.408,0.408);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#E8252B","#EB252B","#F8262D","#FC272E","#DC262B","#C1262A","#CA2529"],[0,0.016,0.141,0.251,0.569,0.808,1],-40.5,-1.2,40.3,2.5).s().p("AgBAiQiSgEiNgfQhHgQgrgQQArALBKALQCIAVCVAEQCCAECagMIB3gIQgsAHhKALQiBASh4AAIglAAg");
	this.shape_166.setTransform(-154.3,67.4,0.408,0.408);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#DB0A16","#E30B17","#F00C19","#F40C1A","#D40915","#AE060F","#B80711"],[0,0.043,0.153,0.251,0.525,0.808,1],-44.9,-1.2,49,3).s().p("AlmAJQgagJgQgVQgPgWAAgcIAAgBQF/BqHAhHIAAAEQgCAbgSATQgSAVgbAFQiiAiiXAAQjPAAi9hAg");
	this.shape_167.setTransform(-154.6,68.8,0.408,0.408);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#BB373A").s().p("AAzuaIApACIiNbxQgCAVgLARQgLARgSAKg");
	this.shape_168.setTransform(-135.6,32.4,0.408,0.408);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#CD0814","#92040B","#B80711"],[0,0.004,0.133,0.251,0.467,0.808,1],-50,-1.1,46.6,3.3).s().p("AmuOFQgZgJgQgXQgQgXABgbIAU73IO5AsIiPbxQgCAbgSAUQgSAVgaAGQiiAiiWAAQjQAAi+hAg");
	this.shape_169.setTransform(-151.7,32.4,0.408,0.408);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#DA5557").s().p("AhGAbIAChXICLAGIgFBzQhGgNhCgVg");
	this.shape_170.setTransform(-164.7,70.9,0.408,0.408);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#AE4345").s().p("AgcgrIA+ADIgGBDQgLAHgNADIglAHg");
	this.shape_171.setTransform(-141.3,71.3,0.408,0.408);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#C10712","#CC0814","#D10915","#B90711","#9A040C","#870309","#800308","#A2050D"],[0,0.125,0.251,0.369,0.549,0.702,0.808,1],-36.7,-0.8,36.3,2.5).s().p("AlQALQgRgFgLgJIABhEILYAiIgGBDQgLAHgNADQiZAgiPAAQjEAAizg9g");
	this.shape_172.setTransform(-154.8,71.2,0.408,0.408);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FA5658").s().p("AAhAqIgBAAIgQgEIgQgEIAAAAIgOgEIgBgBIgPgEIgCgBIgPgEIgCgBIgSgGIADghIAAgcQBAAVBEANIgDA/g");
	this.shape_173.setTransform(-165.1,80.7,0.408,0.408);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#D94446").s().p("AgbAFIACgZIAagHQARgDANgKIgBATQgCAVgPARQgOATgWAEIgHACIADglg");
	this.shape_174.setTransform(-141.9,80.7,0.408,0.408);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#DD5E60").s().p("AgZACQAggEAUgFQgUAHghAIg");
	this.shape_175.setTransform(-141.9,79.5,0.408,0.408);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#F40E1B","#F9141F","#FC1722","#F91721","#DA111B","#C70E17","#C00C15","#E00D19"],[0,0.11,0.251,0.275,0.494,0.678,0.808,1],-35.3,-1,35,2.2).s().p("AgBAmQiIgEhzgiQgogKghgPIgZgNQAlARA/ANQBrAWCPAFQB8AEB8gPQBAgIAngJQglANhAANQhoAWhrAAIgogBg");
	this.shape_176.setTransform(-155.1,79.6,0.408,0.408);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#E50B18","#EB0B19","#F80D1B","#FC0D1B","#EA0B18","#CB0814","#B80711","#B10610","#D20915"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-35.6,-0.8,36.1,2.4).s().p("AkzAQQgWgHgNgSQgOgTABgYIAAgSQAMAMAQAGQEsBjFhhIQARgDAOgLIgCAUQgCAVgPARQgPASgXAFQiLAdiCAAQiwAAiig3g");
	this.shape_177.setTransform(-155.2,80.6,0.408,0.408);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F15658").s().p("AhGCNIgDgBIACgjIAGkYICLAHIgQFXQg/gMhBgWg");
	this.shape_178.setTransform(-164.8,75.5,0.408,0.408);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#C24345").s().p("AgkB5IAOkWIA+ADIgUD3QgCAXgPASQgNASgWAEIgIACIAEglg");
	this.shape_179.setTransform(-141.5,75.9,0.408,0.408);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#CB0814","#AC060F","#99040C","#92040B","#B80711"],[0,0.004,0.133,0.251,0.404,0.569,0.71,0.808,1],-36.8,-0.8,36.5,2.5).s().p("Ak8CEQgXgHgNgUQgNgTAAgYIADj4ILYAiIgUD3QgCAXgPARQgQASgWAFQiLAdiCAAQixAAihg3g");
	this.shape_180.setTransform(-154.8,75.9,0.408,0.408);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#E27B7C").s().p("AgqCGIABgeIAAheQABg7AJgcQAFgSAMgVQANgXAKgKIAYABQAMASgCBBQgCAjgEAyIgGCCQgqgIgfgIg");
	this.shape_181.setTransform(-161.9,79,0.408,0.408);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#A93739").s().p("AgXBxIADhdQABg8AFgbQAEgTAHgVQAFgYAGgKIANABQAGASgDBBQgBAigEAzIgFBrIgmAHg");
	this.shape_182.setTransform(-146.5,79.3,0.408,0.408);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#C10712","#CC0814","#D10915","#B20610","#97040C","#860309","#800308","#A2050D"],[0,0.125,0.251,0.396,0.557,0.702,0.808,1],-23.7,-0.5,23.4,1.6).s().p("AjwB5IALkWIHVAVIgPETQhoAThiAAQiIAAh/glg");
	this.shape_183.setTransform(-155.1,79.2,0.408,0.408);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FC9495").s().p("AgigGIAAgGQAiAKAkACIgBANQgmgIgfgLg");
	this.shape_184.setTransform(-162.5,95.3,0.408,0.408);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FC7B7D").s().p("AADAdIgRgGIgVgHIACgyQAjAKAiAHIgCA1g");
	this.shape_185.setTransform(-162.6,96.3,0.408,0.408);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#D4383B").s().p("AgQgUIAQgDQAKgCAIgHIgBAaQgCATgPANQgHAFgKABIgBABg");
	this.shape_186.setTransform(-147.3,96.3,0.408,0.408);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#DD5E60").s().p("AgNAAIAcgEIgdAIg");
	this.shape_187.setTransform(-147.4,95.2,0.408,0.408);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#F4101C","#F91621","#FC1A23","#FA1923","#DB131C","#C81018","#C10F17","#E00F1A"],[0,0.11,0.251,0.271,0.49,0.678,0.808,1],-22.7,-0.8,22.6,1.3).s().p("AgdAVQg+gEgngHQg3gKgogXQAxARA9AGQAsAEBGADIAWABIBLgBIBbgIIAngGIgmAKQgZAHgbAFIgSADQgVADgfABIg0ACg");
	this.shape_188.setTransform(-156,95.4,0.408,0.408);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#E50B18","#EB0B19","#F80D1B","#FC0D1B","#EA0B18","#CB0814","#B80711","#B10610","#D20915"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-23.8,-0.9,23.3,1.3).s().p("AjGAOQgOgFgJgKQgJgNABgPIAAgUQAEAEAHABQDFBCDpgvQAKgCAJgHIgCAaQgBANgKALQgKAMgOADQhaAThUAAQhyAAhogkg");
	this.shape_189.setTransform(-155.9,96.3,0.408,0.408);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F47B7C").s().p("AgvEdIALlOIAAhdQABg+AJgbQAFgTAMgUQALgXAMgKIAYAAQAMASgCBBQgCAjgEA1IgUG1QgjgJgigLg");
	this.shape_190.setTransform(-162.1,85.3,0.408,0.408);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#BE383A").s().p("AgRgmIADhdQABg+AFgbQAEgTAFgVQAHgYAGgKIANABQAGASgDBBQgBAigEA1IgUF4QgBAPgIAMQgKALgPADIgBABg");
	this.shape_191.setTransform(-146.8,85.6,0.408,0.408);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#EA0B18","#C40813","#A9050E","#98040C","#92040B","#B80711"],[0,0.004,0.133,0.251,0.267,0.427,0.576,0.71,0.808,1],-24.6,-0.6,23.6,1.6).s().p("AjVEXQgOgFgJgNQgJgMABgQIAToiIHWAVIgfIiQgBAPgKAMQgKALgOADQhaAThUAAQhxAAhpgjg");
	this.shape_192.setTransform(-155.3,85.5,0.408,0.408);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#E07172").s().p("AgKAhIADhCIASABIgDBDg");
	this.shape_193.setTransform(-156.6,98.5,0.408,0.408);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#6D0206","#8B040A","#A9060E","#BF0712","#CC0814","#D10915","#CC0814","#BE0712","#A6050E","#860309","#800308"],[0,0.082,0.184,0.286,0.38,0.467,0.576,0.702,0.835,0.976,1],-5.8,-0.2,5.1,0.3).s().p("AgzENIAZocIBOAEIgZIbIgPAAQggAAgfgDg");
	this.shape_194.setTransform(-155.7,88.8,0.408,0.408);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#F37173").s().p("Ag2PuIBa/bIATABIhafbg");
	this.shape_195.setTransform(-158.4,138.2,0.408,0.408);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#7B0308","#810308","#A7050E","#C60813","#DC0A16","#E90B18","#ED0C19","#E80B18","#DA0A16","#C30812","#A3050D","#92040B"],[0,0.012,0.11,0.204,0.298,0.384,0.467,0.569,0.686,0.812,0.941,1],5.2,0.3,-6.5,-0.2).s().p("AhsXxMACJgvlIBQADMgCJAvmg");
	this.shape_196.setTransform(-157,117.1,0.408,0.408);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#C7C7C7").s().p("AhRFgQgBgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQASgRANgOQA/hLAfhxQAYhaAEh6QABg2ABhtIABhoIAAgDIADgBQABABABAAQAAAAABABQAAAAAAABQABAAAAABIgBBbIgBByIAAATQgBA/gCAeQgJB5gfBYQgTA0gaAsQgeAvgmAjIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_197.setTransform(-166,104.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#969696").s().p("AhSFiQgDgEAEgDQAPgOAPgRQBAhLAehxQAWhTAFhtIABgTIAChuIAAhtIABgwQAAgGAFABQAGAAgBAFIAAAwIAAAQIgBCNIgBAzIAAAFIgBAVIgBASIgBARQgIB4ggBZQgnBthKBGIgEABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgABMlhIAAADIgBBoQgBBtgBA2QgEB6gYBZQgfByg/BLQgNAOgSARQgBABAAAAQAAAAAAABQgBAAAAABQABAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAAAAAIADgBQAmgjAeguQAagsATg0QAfhYAJh5QACgfABg+IAAgTIABhzIABhaQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAIgDABg");
	this.shape_198.setTransform(-166,104.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.5,-33.7,337.9,213.1);


(lib.Cups1Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// FlashAICB
	this.instance = new lib.rocket_explosion3();
	this.instance.setTransform(-131.7,-155,0.139,0.139);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({scaleX:35.85,scaleY:35.85,x:51.7,y:-50.9},10).wait(1));

	// Rocket_flight
	this.instance_1 = new lib.rocket1_flight();
	this.instance_1.setTransform(-151.2,32.3,1,1,0,0,0,21.9,66);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:21.8,scaleX:0.43,scaleY:0.43,rotation:11.1,x:-123.7,y:-103.7},5,cjs.Ease.get(1)).to({scaleX:0.24,scaleY:0.24,rotation:15,x:-114.5,y:-149,alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(40));

	// Rocket_Static
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FB7476").s().p("AgJACQgagFgfgMIAAgFQAbAIAgAGQAeAGArAGIgBAPQgxgLgZgIg");
	this.shape.setTransform(-165,79.5,0.408,0.408);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EFEFEF","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#D3D3D3","#DBDBDB","#EFEFEF","#F6F6F6"],[0,0.039,0.122,0.318,0.557,0.812,0.878,0.976,1],-27.5,-1.1,57.4,2.8).s().p("AiOgHQgqgKgZgHIAMgCIA5AJQCIAVCTAEIBDABIhOASQiMgEiGgeg");
	this.shape_1.setTransform(-160.2,67.6,0.408,0.408);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F87579").s().p("AgUAAIhEgHIAAgDQBjAKBPAGIgBAFIhtgLg");
	this.shape_2.setTransform(-165.4,-9.5,0.408,0.408);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F87579").s().p("AgVABIhEgHIAAgDIABgCICzANIgDAFIAAAFIhtgLg");
	this.shape_3.setTransform(-165.4,-9.5,0.408,0.408);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F1232A","#F4232A","#F8232A","#D82328","#C02327","#DF2329"],[0,0.055,0.251,0.482,0.639,1],-55.1,-1.7,53.6,3.2).s().p("AAAAVQjTgIicgRQhegLg5gKICYAPQCIAKDmAIQEeANDpgDQg5AEhfACQhDAChDAAQh2AAhzgFg");
	this.shape_4.setTransform(-151.2,-9.3,0.408,0.408);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FC636C","#F14C4F","#D24B4D"],[0,0.408,1],-6.8,-0.5,57.5,4.1).s().p("AhZA4IABiCQBgAKBRAHIgFCEQhngKhGgJg");
	this.shape_5.setTransform(-165.4,-6.9,0.408,0.408);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9383B").s().p("AgjhBIBDgCQAKAVAAATIgEBEQAAALgNAIQgNAIgPgBIgmABg");
	this.shape_6.setTransform(-131.2,-5.8,0.408,0.408);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E50B18","#E90B18","#ED0C19","#CD0814","#AE060F","#D20915"],[0,0.067,0.251,0.459,0.639,1],-53.5,-1.6,53.5,3.2).s().p("AnuArQgRgBgMgJQgMgIAAgMIADhEQABgSAKgSQHjA/I0gSQAKAVAAATIgEBEQAAALgNAIQgNAIgRgBQh1AEhwAAQmQAAligxg");
	this.shape_7.setTransform(-151.3,-6.6,0.408,0.408);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FC636C","#F14C4F","#D24B4D"],[0,0.408,1],-30.7,-1.7,28,0.9).s().p("AjhEXIAAgDIGdoqQAOgUAFgEQAIgCALgBIkQJXIAAAMg");
	this.shape_8.setTransform(-159.8,-21.2,0.408,0.408);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#C5383A","#BE383A","#B23739","#AB3739","#A93739","#BC373A"],[0,0.039,0.149,0.298,0.655,1],18.2,14.2,-120.2,-87.6).s().p("ADIFTIgTgzQgshjhgiOQhtibgzhQIh1i3QATAIAJAMIGrJBQATAZgBAcIgEBFQgBARgWAHg");
	this.shape_9.setTransform(-139.1,-18.3,0.408,0.408);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#CD0814","#92040B","#B80711"],[0,0.004,0.133,0.251,0.4,0.639,1],-51.2,-2.6,53.7,2.2).s().p("AnuFJQgRAAgMgJQgMgJAAgLIADhGQACgdAVgXIHgoWQAUgXAnACQApACASAYIGtJBQATAZgBAcIgEBFQAAAMgNAHQgNAIgRgBQh1AEhwAAQmQAAligxg");
	this.shape_10.setTransform(-151.3,-18.3,0.408,0.408);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFFFF","#FFFFFF","#FFFFFF","#EBEBEB","#D6D6D6","#DEDEDE","#EBEBEB"],[0,0.047,0.318,0.541,0.812,0.906,1],-22.7,-0.6,61,3.2).s().p("AipAMQgjgMgPgiIBEgQQCyAqDBAEIj0A3QhHgOhKgZg");
	this.shape_11.setTransform(-162.4,68.6,0.408,0.408);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E3E3E3").s().p("AhZgvIC1AIIgDAsIi0Asg");
	this.shape_12.setTransform(-162.8,-4.8,0.408,0.408);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhsOaIABhQICHggIgFCHIgXAFQgxgLg7gRgAhkIZICPgiIgHCHIiLAhgAhfDoICYgkIgGCHIiVAjgAhZhHICggmIgHCFIibAmgAhTl3ICogoIgGCHIilAngAhNqoICwgqIgHCHIisApgAhIu1IC1AJIgDAuIi0Arg");
	this.shape_13.setTransform(-163.4,32,0.408,0.408);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D70915").s().p("AhbAxIACh4IC1AJIgGCGQhMgHhlgQg");
	this.shape_14.setTransform(-162.8,-3.8,0.408,0.408);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D4D3D1").s().p("AgQgdIAngKIgGBLIgnAEg");
	this.shape_15.setTransform(-132.9,-2.3,0.408,0.408);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EBECEE").s().p("AhLLFIAngJIgLCIIgmAJgAgzGQIAogJIgLCIIgnAJgAgbBbIAngJIgLCIIgmAJgAgDjYIAogKIgLCIIgnAKgAAToNIAqgKIgKCIIgqAKgAAstCIAqgKIgLCIIgqAKg");
	this.shape_16.setTransform(-135.4,30.5,0.408,0.408);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#C3C3C3","#CDCDCD","#DADADA","#E1E1E1","#E3E3E3","#D7D7D7","#A2A2A2","#8D8D8D","#949494","#A9A9A9","#CACACA","#D1D1D1"],[0,0.027,0.078,0.149,0.318,0.38,0.671,0.812,0.855,0.914,0.988,1],-44.9,-1.2,44.7,2.9).s().p("ABVBSIGIhaIgHBMQisAOifAAIg2AAgAncAZIAChqIHGAVImYBeg");
	this.shape_17.setTransform(-151.4,-3.6,0.408,0.408);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#DBDBDB","#EAEAEA","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#B3B3B3","#9E9E9E","#A6A6A6","#BABABA","#DBDBDB","#EBEBEB"],[0,0.035,0.086,0.153,0.318,0.42,0.686,0.812,0.851,0.906,0.973,1],-48.2,-0.5,41.6,3.6).s().p("AmuOUQglgNgOglINLjHIgLCIIqBCXQhJgPhDgXgAnkIzINnjOIgLCJItdDLgAngEDIN8jTIgLCIItzDQgAndgsIOSjXIgLCIIuJDTgAnalcIOnjcIgKCIIueDagAnWqMIO8jiIgLCIIuzDggAnTu5IHQAVInRBug");
	this.shape_18.setTransform(-151.7,31.9,0.408,0.408);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#C50813","#C40813","#B0060F","#90040B","#840309"],[0,0.314,0.494,0.82,1],-48,-1.2,47.3,3.2).s().p("AndAZIAChqIO5AsIgJBpQipAOiiAAQlBAAkmg5g");
	this.shape_19.setTransform(-151.4,-3.6,0.408,0.408);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FC0D1B").s().p("AhsOYIAk9PIC1AJIhXdmQhCgNhAgTg");
	this.shape_20.setTransform(-163.4,32.1,0.408,0.408);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C2383A").s().p("AgPgcIAjgFIAAAIIgBABIAAAFIAAAAIgCAEIAAABIgBAFIAAAAIgCAEIAAABIgCAEIAAAAIgCACIAAABIgDAEIAAAAIgGAIIAAAAIgEAHIgQAMg");
	this.shape_21.setTransform(-138.5,68.6,0.408,0.408);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#E8252B","#EB252B","#F8262D","#FC272E","#DC262B","#C1262A","#CA2529"],[0,0.016,0.141,0.251,0.569,0.808,1],-40.5,-1.2,40.3,2.5).s().p("AgBAiQiSgEiNgfQhHgQgrgQQArALBKALQCIAVCVAEQCCAECagMIB3gIQgsAHhKALQiBASh4AAIglAAg");
	this.shape_22.setTransform(-154.3,67.4,0.408,0.408);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#DB0A16","#E30B17","#F00C19","#F40C1A","#D40915","#AE060F","#B80711"],[0,0.043,0.153,0.251,0.525,0.808,1],-44.9,-1.2,49,3).s().p("AlmAJQgagJgQgVQgPgWAAgcIAAgBQF/BqHAhHIAAAEQgCAbgSATQgSAVgbAFQiiAiiXAAQjPAAi9hAg");
	this.shape_23.setTransform(-154.6,68.8,0.408,0.408);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BB373A").s().p("AAzuaIApACIiNbxQgCAVgLARQgLARgSAKg");
	this.shape_24.setTransform(-135.6,32.4,0.408,0.408);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#CD0814","#92040B","#B80711"],[0,0.004,0.133,0.251,0.467,0.808,1],-50,-1.1,46.6,3.3).s().p("AmuOFQgZgJgQgXQgQgXABgbIAU73IO5AsIiPbxQgCAbgSAUQgSAVgaAGQiiAiiWAAQjQAAi+hAg");
	this.shape_25.setTransform(-151.7,32.4,0.408,0.408);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DA5557").s().p("AhGAbIAChXICLAGIgFBzQhGgNhCgVg");
	this.shape_26.setTransform(-164.7,70.9,0.408,0.408);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AE4345").s().p("AgcgrIA+ADIgGBDQgLAHgNADIglAHg");
	this.shape_27.setTransform(-141.3,71.3,0.408,0.408);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#C10712","#CC0814","#D10915","#B90711","#9A040C","#870309","#800308","#A2050D"],[0,0.125,0.251,0.369,0.549,0.702,0.808,1],-36.7,-0.8,36.3,2.5).s().p("AlQALQgRgFgLgJIABhEILYAiIgGBDQgLAHgNADQiZAgiPAAQjEAAizg9g");
	this.shape_28.setTransform(-154.8,71.2,0.408,0.408);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FA5658").s().p("AAhAqIgBAAIgQgEIgQgEIAAAAIgOgEIgBgBIgPgEIgCgBIgPgEIgCgBIgSgGIADghIAAgcQBAAVBEANIgDA/g");
	this.shape_29.setTransform(-165.1,80.7,0.408,0.408);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D94446").s().p("AgbAFIACgZIAagHQARgDANgKIgBATQgCAVgPARQgOATgWAEIgHACIADglg");
	this.shape_30.setTransform(-141.9,80.7,0.408,0.408);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DD5E60").s().p("AgZACQAggEAUgFQgUAHghAIg");
	this.shape_31.setTransform(-141.9,79.5,0.408,0.408);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#F40E1B","#F9141F","#FC1722","#F91721","#DA111B","#C70E17","#C00C15","#E00D19"],[0,0.11,0.251,0.275,0.494,0.678,0.808,1],-35.3,-1,35,2.2).s().p("AgBAmQiIgEhzgiQgogKghgPIgZgNQAlARA/ANQBrAWCPAFQB8AEB8gPQBAgIAngJQglANhAANQhoAWhrAAIgogBg");
	this.shape_32.setTransform(-155.1,79.6,0.408,0.408);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#E50B18","#EB0B19","#F80D1B","#FC0D1B","#EA0B18","#CB0814","#B80711","#B10610","#D20915"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-35.6,-0.8,36.1,2.4).s().p("AkzAQQgWgHgNgSQgOgTABgYIAAgSQAMAMAQAGQEsBjFhhIQARgDAOgLIgCAUQgCAVgPARQgPASgXAFQiLAdiCAAQiwAAiig3g");
	this.shape_33.setTransform(-155.2,80.6,0.408,0.408);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F15658").s().p("AhGCNIgDgBIACgjIAGkYICLAHIgQFXQg/gMhBgWg");
	this.shape_34.setTransform(-164.8,75.5,0.408,0.408);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C24345").s().p("AgkB5IAOkWIA+ADIgUD3QgCAXgPASQgNASgWAEIgIACIAEglg");
	this.shape_35.setTransform(-141.5,75.9,0.408,0.408);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#CB0814","#AC060F","#99040C","#92040B","#B80711"],[0,0.004,0.133,0.251,0.404,0.569,0.71,0.808,1],-36.8,-0.8,36.5,2.5).s().p("Ak8CEQgXgHgNgUQgNgTAAgYIADj4ILYAiIgUD3QgCAXgPARQgQASgWAFQiLAdiCAAQixAAihg3g");
	this.shape_36.setTransform(-154.8,75.9,0.408,0.408);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E27B7C").s().p("AgqCGIABgeIAAheQABg7AJgcQAFgSAMgVQANgXAKgKIAYABQAMASgCBBQgCAjgEAyIgGCCQgqgIgfgIg");
	this.shape_37.setTransform(-161.9,79,0.408,0.408);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A93739").s().p("AgXBxIADhdQABg8AFgbQAEgTAHgVQAFgYAGgKIANABQAGASgDBBQgBAigEAzIgFBrIgmAHg");
	this.shape_38.setTransform(-146.5,79.3,0.408,0.408);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#C10712","#CC0814","#D10915","#B20610","#97040C","#860309","#800308","#A2050D"],[0,0.125,0.251,0.396,0.557,0.702,0.808,1],-23.7,-0.5,23.4,1.6).s().p("AjwB5IALkWIHVAVIgPETQhoAThiAAQiIAAh/glg");
	this.shape_39.setTransform(-155.1,79.2,0.408,0.408);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FC9495").s().p("AgigGIAAgGQAiAKAkACIgBANQgmgIgfgLg");
	this.shape_40.setTransform(-162.5,95.3,0.408,0.408);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FC7B7D").s().p("AADAdIgRgGIgVgHIACgyQAjAKAiAHIgCA1g");
	this.shape_41.setTransform(-162.6,96.3,0.408,0.408);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D4383B").s().p("AgQgUIAQgDQAKgCAIgHIgBAaQgCATgPANQgHAFgKABIgBABg");
	this.shape_42.setTransform(-147.3,96.3,0.408,0.408);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DD5E60").s().p("AgNAAIAcgEIgdAIg");
	this.shape_43.setTransform(-147.4,95.2,0.408,0.408);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#F4101C","#F91621","#FC1A23","#FA1923","#DB131C","#C81018","#C10F17","#E00F1A"],[0,0.11,0.251,0.271,0.49,0.678,0.808,1],-22.7,-0.8,22.6,1.3).s().p("AgdAVQg+gEgngHQg3gKgogXQAxARA9AGQAsAEBGADIAWABIBLgBIBbgIIAngGIgmAKQgZAHgbAFIgSADQgVADgfABIg0ACg");
	this.shape_44.setTransform(-156,95.4,0.408,0.408);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#E50B18","#EB0B19","#F80D1B","#FC0D1B","#EA0B18","#CB0814","#B80711","#B10610","#D20915"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-23.8,-0.9,23.3,1.3).s().p("AjGAOQgOgFgJgKQgJgNABgPIAAgUQAEAEAHABQDFBCDpgvQAKgCAJgHIgCAaQgBANgKALQgKAMgOADQhaAThUAAQhyAAhogkg");
	this.shape_45.setTransform(-155.9,96.3,0.408,0.408);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F47B7C").s().p("AgvEdIALlOIAAhdQABg+AJgbQAFgTAMgUQALgXAMgKIAYAAQAMASgCBBQgCAjgEA1IgUG1QgjgJgigLg");
	this.shape_46.setTransform(-162.1,85.3,0.408,0.408);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BE383A").s().p("AgRgmIADhdQABg+AFgbQAEgTAFgVQAHgYAGgKIANABQAGASgDBBQgBAigEA1IgUF4QgBAPgIAMQgKALgPADIgBABg");
	this.shape_47.setTransform(-146.8,85.6,0.408,0.408);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#DB0A16","#DC0A16","#E90B18","#ED0C19","#EA0B18","#C40813","#A9050E","#98040C","#92040B","#B80711"],[0,0.004,0.133,0.251,0.267,0.427,0.576,0.71,0.808,1],-24.6,-0.6,23.6,1.6).s().p("AjVEXQgOgFgJgNQgJgMABgQIAToiIHWAVIgfIiQgBAPgKAMQgKALgOADQhaAThUAAQhxAAhpgjg");
	this.shape_48.setTransform(-155.3,85.5,0.408,0.408);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},29).wait(61));

	// spark
	this.instance_2 = new lib.SparkAni();
	this.instance_2.setTransform(-179.8,141.3,1,1,0,0,0,14,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({x:-163.8,y:103.7},8).to({_off:true},1).wait(61));

	// Fuse
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EBEBEB").s().p("AhOFhIgCgBIABgDQAQgNAPgSQBAhLAfhyQAYhaADh6QACg2AAhtIABhoIABgBIABgBQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAAAIgBBBIAAAaIgBByIAAATQgBA/gCAeQgIB4ggBYQgSAzgaAtQgeAugnAkIgBAAg");
	this.shape_49.setTransform(-166,104.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C7C7C7").s().p("AhRFgQgBgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQASgRANgOQA/hLAfhxQAYhaAEh6QABg2ABhtIABhoIAAgDIADgBQABABABAAQAAAAABABQAAAAAAABQABAAAAABIgBBbIgBByIAAATQgBA/gCAeQgJB5gfBYQgTA0gaAsQgeAvgmAjIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBgABOlfIgBABIgBBoQAABtgCA2QgDB6gYBaQgfByhABLQgPASgQANIgBADIACABIABAAQAngkAeguQAagtASgzQAghYAIh4QACgeABg/IAAgTIABhyIAAgaIABhBQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_50.setTransform(-166,104.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#969696").s().p("AhSFiQgDgEAEgDQAPgOAPgRQBAhLAehxQAWhTAFhuIABgSIAChuIAAhtIABgwQAAgGAFABQAGAAgBAFIAAAwIAAAQIgBCNIgBAzIAAAFIgBAUIgBATIgBARQgIB4ggBZQgnBthKBGIgEABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgABMlhIAAADIgBBoQgBBtgBA2QgEB6gYBZQgfByg/BLQgNAOgSARQgBABAAAAQAAAAAAABQgBAAAAABQABAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAAAAAIADgBQAmgjAeguQAagsATg0QAfhYAJh5QACgfABg+IAAgTIABhzIABhaQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAIgDABg");
	this.shape_51.setTransform(-166,104.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EBEBEB").s().p("AidM0QCdi4BJkTQA8jeAJksQAEiFABkKIACkAIABgDIADgBQAFAAAAAFIgCCdIAABAQAAC6gCBeIgBAwQgDCYgFBKQgUEqhODZQgsB9hDBtQgmA8gtA0g");
	this.shape_52.setTransform(-164.3,103.1,0.408,0.408);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C7C7C7").s().p("AhBFPQBBhLAchxQAYhZAEh6QABg2ABhtIABhoIAAgDIADgBQABAAABABQABAAAAABQAAAAABABQAAAAAAABIgBBaIgBBzIAAATQgBA+gCAfQgJB5gfBYQgTA0gaAsQgPAYgSAVg");
	this.shape_53.setTransform(-164.3,103);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#969696").s().p("Ag5FQQASgVAQgXQAagsASg0QAfhYAJh5QACgfABg+IABgTIABhzIAAhaQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIgDABIgBADIgBBoQAABtgCA2QgEB6gYBZQgcBxhBBKIgBAAIgBAAQBBhKAdhxQAWhTAEhuIABgSIAChuIABhtIAAgwQAAgGAGABQAFAAAAAFIAAAwIAAAQIgBCNIgCAzIAAAFIgBAUIAAATIgBARQgIB4ggBZQgbBRgyA8g");
	this.shape_54.setTransform(-164.4,102.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EBEBEB").s().p("AhqLsQBTiMAuizQA7jeAJksQAEiFABkKIACkBIABgCIADgBQAFAAAAAEIgBCeIAAA/QAAC7gDBeIgBAwQgDCYgFBIQgUEshLDYQgnBwg8BjIgGgFg");
	this.shape_55.setTransform(-162.3,100.3,0.408,0.408);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C7C7C7").s().p("AgsEwQAig5ARhJQAYhZAEh6QACg2AAhtIABhoIABgDIADgBQABAAAAABQABAAAAABQABAAAAABQAAAAAAABIAABaIgBBzIgBATQgBA+gCAdQgJB7gfBYQgOAugZApQgCgEgDgBg");
	this.shape_56.setTransform(-162.3,100.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#969696").s().p("AgnE1QAZgoAOgvQAfhYAJh7QACgdABg+IABgTIABhzIAAhaQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBIgDABIgBADIgBBoQAABtgCA2QgEB6gYBZQgRBJgiA5IgCgBQAig4AShJQAWhTAEhtIABgTIAChuIABhtIAAgwQAAgGAGABQAFAAAAAFIAAAwIAAAQIgBCNIgCAzIAAAFIgBAVIAAASIgBAPQgIB6ggBZQgPAwgZAoIgBgBg");
	this.shape_57.setTransform(-162.3,100.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EBEBEB").s().p("AhGKkQAihRAYhbQA6jeAJksQAEiFABkKIACkBIABgCIADgBQAFAAAAAEIgCCeIAAA/QAAC7gCBeIgBAwQgDCWgFBKQgUEshMDYQgLAfgMAeIgJgCg");
	this.shape_58.setTransform(-160.8,97.3,0.408,0.408);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C7C7C7").s().p("AgdETQANghAKglQAWhZAEh6QACg2AAhtIABhoIABgDIADgBQABAAAAABQABAAAAABQABAAAAABQAAAAAAABIAABaIgBBzIgBATQgBA8gCAfQgJB7gdBYIgJAZIgHgDg");
	this.shape_59.setTransform(-160.8,97.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#969696").s().p("AgWEWIAJgZQAdhYAJh7QACgeABg8IABgUIABhyIAAhbQAAAAAAgBQAAgBgBAAQAAAAgBgBQAAAAgBAAIgDABIgBACIgBBpQAABsgCA2QgEB6gWBaQgKAlgNAhIgCgBQAOggAKglQAUhUAEhvIABgRIAChtIABhuIAAgwQAAgFAGAAQAFAAAAAFIAAAxIAAAQIgBCMIgCA0IAAAEIgBATIAAATIgBAQQgIB7geBZIgKAZIgBgBg");
	this.shape_60.setTransform(-160.8,97.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EBEBEB").s().p("AgrJVIAFgUQA5jeAJkuQAEiDACkKIACkBIABgCIACgBQAGAAAAAEIgCCeIAAA/QAAC7gDBeIgBAwQgCCWgGBKQgQDzg0C8IgGgIg");
	this.shape_61.setTransform(-159.7,94.3,0.408,0.408);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C7C7C7").s().p("AgOD3IgFgFIADgHQAVhaAFh8QABg0ABhtIAAhoIABgDIADgBQABABABAAQAAAAABABQAAAAAAABQABAAAAABIgBBbIgBByIAAATQgCA9gCAeQgHBkgUBNIgBgBg");
	this.shape_62.setTransform(-159.7,94.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#969696").s().p("AgND4QAUhNAHhkQACgfABg8IABgTIABhzIAAhaQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgDABIgBADIgBBoQAABtgCA0QgEB8gWBZIgCAIIgBgBIACgHQAUhTAFhvIAAgTIAChsIABhtIAAgwQAAgGAGABQAFAAAAAFIAAAwIAAAQIgBCNIgCAxIAAAFIAAAVIgBASIgBARQgHBlgVBOIgBgCg");
	this.shape_63.setTransform(-159.7,94.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EBEBEB").s().p("AgrJVIAFgUIALgrIAIAFIgSBCIgGgIgAgMHRQAii3AGjlQAEiDACkKIACkBIABgCIACgBQAGAAAAAEIgCCeIAAA/QAAC7gDBeIgBAwQgCCWgGBKQgKCegZCHIgIgCg");
	this.shape_64.setTransform(-159.7,94.3,0.408,0.408);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C7C7C7").s().p("AgOD3IgFgFIADgHIAEgSIABAAIAGADIgIAcIgBgBgAgGC9QAMhKAEheQABg0ABhtIAAhoIABgDIADgBQABABABAAQAAAAABABQAAAAAAABQABAAAAABIgBBbIgBByIAAATQgCA9gCAeQgEBAgKA3IgGgBg");
	this.shape_65.setTransform(-159.7,94.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#969696").s().p("AgND4IAHgcIACABIgIAdIgBgCgAgUDxIACgHIAFgSIABAAIgFASIgCAIIgBgBgAAAC+QAKg3AEhAQACgfABg8IABgTIABhzIAAhaQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgDABIgBADIgBBoQAABtgCA0QgDBegMBKIgCAAQALhDAEhSIAAgTIAChsIABhtIAAgwQAAgGAGABQAFAAAAAFIAAAwIAAAQIgBCNIgCAxIAAAFIAAAVIgBASIgBARQgEBAgLA4IgBgBg");
	this.shape_66.setTransform(-159.7,94.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EBEBEB").s().p("AgUHvIgBAAQAViYAGi0QAEiFABkIIACkBIABgCIADgBQAFAAAAAEIgCCeIAAA/QAAC7gCBcIgBAwQgDCYgFBKQgIBvgNBkIgIAAg");
	this.shape_67.setTransform(-158.8,89.8,0.408,0.408);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C7C7C7").s().p("AgHDKIgCAAQAJg9AAhKQACg2AAhrIABhoIABgDIADgBQABAAAAABQABAAABAAQAAABAAAAQAAABAAABIAABaIgBBxIgBATQgBA+gCAfQgDAtgEApIgFgBg");
	this.shape_68.setTransform(-158.8,89.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#969696").s().p("AgCDLQAEgoAEguQACgeABg+IAAgUIABhwIABhbQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIgDABIAAACIgBBpQgBBqgBA2QgBBKgJA+IgCAAQAIg2ADg/IAAgTIABhrIAAhuIABgwQAAgFAFAAQAGAAgBAFIAAAxIAAAQIgBCKIgBAzIAAAFIgBAVIgBATIgBAQQgDAugEApIgCgBg");
	this.shape_69.setTransform(-158.8,89.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EBEBEB").s().p("AgMGpQAIhcADhlQACiFABkIIACkBIABgCIADgBQAFAAAAAEIgBCeIAAA/QAAC7gDBcIgBAwQgDCYgFBKIgDBJIgJgBg");
	this.shape_70.setTransform(-158.4,87,0.408,0.408);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C7C7C7").s().p("AgJDKIAAAAIABAAIgBAAgAgCCSQACgmAAgpQACg2AAhrIABhoIABgDIADgBQABABAAAAQABAAABABQAAAAAAABQAAAAAAABIAABbIgBBwIgBATQgBA/gCAeIgCAeIgFgBg");
	this.shape_71.setTransform(-158.8,89.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#969696").s().p("AgLDJIACABIAAABIgCAAIAAgCgAADCUIADgeQACgfABg+IAAgTIABhxIABhaQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBgBAAIgDABIAAADIgBBoQgBBrgBA2QgBApgCAlIgCAAQADgdABgfIAAgSIABhsIAAhtIABgwQAAgGAFABQAGAAgBAFIAAAwIAAAQIgBCLIgBAzIAAAFIgBAUIgBATIgBARIgCAeIgCAAg");
	this.shape_72.setTransform(-158.8,89.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EBEBEB").s().p("AgFGCIgEAAQAEg4ABg6QAEiEAAkJIABkAIABgDIADgBQAFAAAAAFIgBCdIAABAQAAC4gDBeIgBAwQgDCRgCBKIgFAAg");
	this.shape_73.setTransform(-158.3,85.4,0.408,0.408);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C7C7C7").s().p("AgJDKIAAAAIABAAIgBAAgAABBxIgBABIAAgvQACg2AAhrIABhoIABgDIADgBQABABAAAAQABAAABABQAAAAAAABQAAAAAAABIAABbIgBBwIgBATQgBA8gBAeIgFgBg");
	this.shape_74.setTransform(-158.8,89.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#969696").s().p("AgLDJIACABIAAABIgCAAIAAgCgAAGBzQACgfABg7IAAgTIABhxIABhaQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBgBAAIgDABIAAADIgBBoQgBBrgBA2IgBAuIgCABIACgdIAAgSIABhsIAAhtIABgwQAAgGAFABQAGAAgBAFIAAAwIAAAQIgBCLIgBAzIAAAFIgBAUIgBATIgBAOIgBAAg");
	this.shape_75.setTransform(-158.8,89.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},20).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},1).to({state:[]},1).wait(61));

	// Stick
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E07172").s().p("AgKAhIADhCIASABIgDBDg");
	this.shape_76.setTransform(-156.6,98.5,0.408,0.408);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#6D0206","#8B040A","#A9060E","#BF0712","#CC0814","#D10915","#CC0814","#BE0712","#A6050E","#860309","#800308"],[0,0.082,0.184,0.286,0.38,0.467,0.576,0.702,0.835,0.976,1],-5.8,-0.2,5.1,0.3).s().p("AgzENIAZocIBOAEIgZIbIgPAAQggAAgfgDg");
	this.shape_77.setTransform(-155.7,88.8,0.408,0.408);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F37173").s().p("Ag2PuIBa/bIATABIhafbg");
	this.shape_78.setTransform(-158.4,138.2,0.408,0.408);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#7B0308","#810308","#A7050E","#C60813","#DC0A16","#E90B18","#ED0C19","#E80B18","#DA0A16","#C30812","#A3050D","#92040B"],[0,0.012,0.11,0.204,0.298,0.384,0.467,0.569,0.686,0.812,0.941,1],5.2,0.3,-6.5,-0.2).s().p("AhsXxMACJgvlIBQADMgCJAvmg");
	this.shape_79.setTransform(-157,117.1,0.408,0.408);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]}).wait(90));

	// Rockets_noMove
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#A7A7A7").s().p("AgTAvQgJglgHgsIA8gTIAKBLQABAGgDAFQgEAFgGACIgoAOg");
	this.shape_80.setTransform(13.4,-6.4,0.401,0.401);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#3B3638","#585556","#7E7C7D","#959595","#9E9E9E"],[0,0.227,0.565,0.835,1],-41.4,-4.7,35.2,4.7).s().p("ADNExQgGgYgQhgQgMhJgSgrQgMgbgKgPQgYgegYgcQgdgfgZgXQhshmi1h7QAagBAWANQDVB2CxDJQA6BCAMBbIANBmQABAGgEAFQgDAFgHACIgqANg");
	this.shape_81.setTransform(4.4,-16.7,0.401,0.401);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CBCBCB").s().p("AhWAsQgGgsgBgtQBZADBegEQABAqADAxIgvABIgSABQg1AAg+gDg");
	this.shape_82.setTransform(-15.6,-1.8,0.401,0.401);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.rf(["#E6EDF2","#E3EAEE","#C1C4C7","#ADADAE","#A5A5A5"],[0,0.035,0.459,0.796,1],36.7,3.7,0,36.7,3.7,77.4).s().p("AiSFoQgfjZBiiTQAQgdAig3ICgkJQALgGAMgDQgjBmgYBcIgVBWQghBkgIB3QgHBiAIB/IhGABQg3AAg3gDg");
	this.shape_83.setTransform(-13.2,-14.5,0.401,0.401);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#868686","#888888","#8C8C8C","#6B6B6B","#1F1F1F","#787878"],[0,0.035,0.251,0.38,0.639,1],-43.9,7.7,50.7,-4.6).s().p("AmtBmQgHgBgFgEQgEgEgBgGIgKhMQHCAbHFiQIAKBNQABAGgDAFQgEAFgGACQlwB2lnAAQhKAAhJgFg");
	this.shape_84.setTransform(-3.5,-4.2,0.401,0.401);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-40.9,4.1,37.5,-6.1).s().p("AmqFnQgHAAgFgEQgEgEgBgGIgOhmQgMhbAphNQB2jgCzi5QAXgXAhgFQAigFAcAQQDVB2CyDLQA5BAAMBbIANBmQABAGgDAFQgEAFgGACQlwB3lnAAQhKAAhJgFg");
	this.shape_85.setTransform(-3.6,-14.6,0.401,0.401);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D5CC31").s().p("AhQBYIgRhjQAOgJAPgBQAdgEAYASQAVAQAEAdQADAbgOAXIgVABIg6gBgABDg/QgOgKgIgPIAwABIAFAlQgRgCgOgLg");
	this.shape_86.setTransform(-13.4,-1.7,0.401,0.401);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D1A929").s().p("AhUBYIgbicICVgUIAyABIAYCrQhIAFhAAAIg8gBg");
	this.shape_87.setTransform(-13.2,-1.7,0.401,0.401);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#D4B12B","#D4AB29","#B36A1C"],[0,0.498,1],-43.1,6.5,32.7,-3.4).s().p("AmEB4QgJgNgDgSQgDgdARgXQASgXAdgEQAdgDAXARQAYASAEAdQADAcgQAXIgfAAQgtAAgogCgAgSBUQgEgdASgXQAQgXAdgEQAdgEAXASQAYASADAdQABAIgBAIQg/AMhGAKQgEgIgBgMgAhwBXQgLgIgCgNQgCgOAJgKQAIgLANgCQAOgCALAJQAKAIACANQACAOgIALQgJAKgNACIgFAAQgKAAgJgHgAEIAhQAIgIALgBQASgCAMAOIg6AQQABgLAIgIgAGRAGIAAAEIgNAEQAHgFAGgDgAjCgYQgUgLgKgUICFgRQgFAWgQAPQgRAQgWADIgKABQgRAAgQgJgACwgjQgXgSgEgdQgBgKABgMICGgRQAFAJABALQAEAdgSAYQgSAXgdAEIgKABQgXAAgTgPgAA8hMQgKgFgEgJIA9gIQgCAKgIAHQgHAHgLABIgEABQgIAAgHgEg");
	this.shape_88.setTransform(-2.5,-3,0.401,0.401);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B76C1D").s().p("AglhJIA/gJIAMCSIg8ATg");
	this.shape_89.setTransform(12.1,-5.2,0.401,0.401);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.rf(["#AF571A","#A75319"],[0,1],-4,8.6,0,-4,8.6,46.1).s().p("AmUB8IgBAAIgaiNINUhvIAMCRQlfBwlXAAQhIAAhHgFg");
	this.shape_90.setTransform(-3.8,-3.3,0.401,0.401);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EEB329").s().p("ABHQmQANADAIAEIgBACIgCACIgBADIgCACIgFAHIgHAGgAA/POIgEgrQAIgLAOgCQAIgBAHACIAEA8QgEADgGABIgGAAQgMAAgJgJgAApLeQAhAMALAhIACAhQgFAhgdARgAAiKKIgGg9IAKgDQAKgBAJAEQAJAFAFAJIACAaQgGATgVADIgDAAIgJgBgAAMGYQAcASAEAhQAFAlgbAYgAAAD+QAKgBAKAIQAKAIABANQACANgIALQgIAKgNACgAgPBYQAPARABAWQAEAagNAVgAgehKQARAGADAUQABAJgEAJQgEAJgIAFgAgMlhQgDgVAKgVIAFBKQgJgOgDgSgAg7mLQAFAHABAIQABAJgEAJgAg3qtQgCgSAGgRQAGgQANgLIAJBwQgcgSgEgggAhRvUQgOgQgDgVQgDgYALgUQALgUAUgJIALCDQgUgGgNgPg");
	this.shape_91.setTransform(16,41,0.401,0.401);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CE7822").s().p("AgRgYIADgCQAPgGAPgNIACAYIAAAMIgBABIAAAHIgBABIgDAJIgEALIgJAOIgDAFIgBACIgGAFg");
	this.shape_92.setTransform(19.4,82.9,0.401,0.401);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D7791E").s().p("Ah3yCIBBgIMACuAjPQADApghAdg");
	this.shape_93.setTransform(15.4,38.1,0.401,0.401);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FEF539").s().p("ADGSMQgLgNgCgTQgEgbAQgWQAPgXAbgGIAPBzQgZgBgfgEgABsQ1QANgBAKAIQAKAIACANQACAMgHALQgHAKgMADgABPODQAdASAFAhQAEAfgVAYgACmNNQgVgSgDgbQgEgaAPgXQAPgVAagIIATCLIgCABQgaAAgTgRgABAMqIgLg+IAKgDQAOgCALAIQAKAJACANQACAOgJAKQgIALgNACIgEAAIgEAAgAAWIwQATAGANAQQANAQADAUQACAUgHARQgIARgOAMgAB6IAQgUgRgEgbQgDgaAOgWQAPgWAZgHIASCLQgagBgTgRgAAHHZIgHgwQAIgLAMgBQANgCALAIQALAJACANQABAOgIAKQgIALgOACIgEAAQgKAAgHgFgAggDhQAXADAPARQARASADAXQADAXgKAUQgLATgSALgABNCzQgTgRgDgaQgEgaAPgVQANgWAYgIIATCLQgZgCgUgRgAglCLQgLgIgBgNQgCgOAIgLQAIgLAOgBQANgCAJAIQALAIABAOQACANgIALQgHALgNACIgFAAQgKAAgJgHgAhYhpQAbgBAVARQAVARAEAcQADAagOAUQgOAVgZAIgAAiiXQgTgSgDgZQgEgZAOgWQANgVAXgIIATCKQgZgCgSgRgAhQi/QgLgJgCgMQgCgOAJgLQAIgLANgBQAOgCALAJQAKAHACAOQACANgIALQgJALgNABIgFABQgKAAgJgHgAh4koIgYiMIAGgBQAegDAXARQAXASAEAdQAEAdgSAYQgSAXgdAEgAgInkQgSgSgEgYQgDgZANgVQANgVAUgIIATCIQgYgDgQgQgAh8oLQgKgJgCgNQgCgNAJgLQAIgLANgBQAOgCAKAJQALAHACAOQACANgJALQgIALgNABIgEABQgLAAgKgHgAjHr8QALgFAHAAQAdgEAXASQAYASADAdQAEAdgSAYQgSAXgdAEIgNAAgAg0sxQgSgRgDgZQgDgXAMgWQAMgUAWgJIATCIQgYgDgRgRgAintXQgKgJgCgNQgCgNAIgLQAIgLAOgCQANgBALAIQALAJABAMQACAOgIALQgIAKgOACIgEABQgLAAgJgHgAjovCIgViBQAOgIAPgCQAdgEAXASQAYASADAdQAEAdgSAXQgSAXgdAFIgJAAQgJAAgIgCgAhXx2QgOgKgIgPIAvAAIAFAmQgQgDgOgKg");
	this.shape_94.setTransform(-7.1,41.6,0.401,0.401);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FCD638").s().p("AgOAnIgBAAIglgGIgGgCIgOhNQBIANA+ABIAKBPQgugCgogGg");
	this.shape_95.setTransform(0.2,86.6,0.401,0.401);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#FDD332","#FBCA30","#F9C12E"],[0,0.4,1],-30,-11.5,94.9,28.5).s().p("ACNSDIgPgCMgGAgj9ICXgTIAyAAMAE8AkgQg+gDg4gLg");
	this.shape_96.setTransform(-7.3,41.6,0.401,0.401);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#FED232","#FEDB33","#FEE234","#FEE434","#EB9925","#D57A1E"],[0,0.059,0.157,0.384,0.631,1],-29.9,3.3,24.6,-3.8).s().p("AiIA7IglgDIgBAAQgKgOgDgTQgDgXANgVQA+AFA8gEQAHAOACALQAEAfgVAYIgOAAIgFABgAkZAbQgKgJgCgNQgCgLAJgLQAIgLANgCQAOgCAKAJQALAIACANQACAMgJALQgIAKgNACIgFABQgLAAgJgHgABjAVQgLgIgBgNQgCgMAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAMgIALQgIAKgOACIgFAAQgKAAgJgHgADSgkQASgUAagDQAWgDATAKIgBABIgCADIgCADIgJAKIgOAMIhEAcIgHADQABgYARgUg");
	this.shape_97.setTransform(7.9,86.1,0.401,0.401);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#FED232","#FED331","#EB9925","#D57A1E"],[0,0.384,0.631,1],-35.4,6.7,38.8,-2.9).s().p("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ANgCQAOgBALAIQAKAIACAOQACANgJALQgIAIgNACIgFAAQgLAAgIgGgAE9AAQgKgIgCgNQgCgOAIgKQAIgLAOgCQANgCALAJQALAIACANQABAOgIALQgIAIgOACIgFAAQgKAAgJgFgAiahyQgXgSgEgdQgDgdARgXQASgXAdgEQAegEAXASQAXASAEAdQAEAdgSAXQgSAYgdADIgLABQgXAAgTgPgADih3QgXgSgEgdQgEgdASgYQASgXAdgEQAdgDAXASQAYASADAdQAEAdgSAXQgSAXgdAEIgKAAQgYAAgSgOgAkTieQgKgIgCgNQgCgOAIgLQAJgKANgCQANgCALAJQALAIACANQABAOgIAKQgIALgOACIgFAAQgKAAgJgHgABpijQgLgIgCgOQgBgNAIgLQAIgKAOgCQANgCALAIQAKAJACANQACANgIALQgJALgNACIgFAAQgKAAgJgHgAlukVQgXgSgEgdQgEgdASgYQASgXAdgEQAdgDAXARQAYASADAdQAEAdgSAYQgSAXgdAEIgKAAQgXAAgTgOgAANkbQgVgRgEgeQgDgdAPgXQASgXAdgEQAdgEAYASQAXASAEAdQAEAdgSAXQgSAYgdADIgLABQgXAAgTgPgAFwlPQgDgVAKgUIAGBJQgLgOgCgSgAhqlGQgKgJgCgNQgCgNAJgLQAIgLANgCQANgCALAJQALAIACANQACAOgJALQgIAKgNACIgFAAQgLAAgJgGgAESlMQgLgIgBgNQgCgOAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAOgIALQgIAKgOACIgFAAQgKAAgJgHgAjFm+QgXgSgEgdQgEgdASgXQASgXAdgEQAdgEAXASQAYASADAdQAEAdgSAXQgSAXgdAEIgKABQgXAAgTgPgAC2nDQgXgSgEgdQgDgdASgYQASgXAdgEQAdgDAXARQAXASAEAdQAEAegSAXQgSAXgdAEIgLAAQgXAAgTgOgAk+nqQgLgIgCgOQgBgNAIgLQAIgKAOgCQANgCALAJQAKAIACANQACANgIALQgJALgNACIgEAAQgLAAgJgHgAA+nvQgLgIgCgOQgCgNAJgLQAIgLANgBQAOgCALAIQAKAIACAOQACANgJALQgIALgNABIgFAAQgLAAgIgGgAmaphQgXgSgEgdQgDgdARgYQASgXAdgEQAegDAXARQAXASAEAdQAEAdgSAYQgSAXgdAEIgLAAQgXAAgTgOgAgcpnQgXgSgEgdQgEgdASgXQASgXAbgEQAdgEAXASQAYASADAdQAEAdgSAXQgSAYgdADIgKABQgVAAgTgPgAFFqbQgDgRAHgRQAGgQANgMIAIBwQgcgSgDgggAiVqSQgLgJgBgNQgCgOAIgKQAIgLAOgCQANgCALAJQALAIABANQACAOgIALQgIAKgOACIgEAAQgLAAgJgGgADnqYQgLgIgCgNQgCgOAJgKQAIgLANgCQAOgCALAJQAKAIACANQACAOgJAKQgIALgNACIgFAAQgLAAgIgHgAjwsKQgXgSgEgdQgEgdASgXQASgYAdgEQAdgDAXASQAXASAEAdQAEAdgSAXQgSAXgdAEIgLAAQgXAAgSgOgACLsPQgXgSgEgdQgDgeARgXQASgXAdgEQAdgDAYARQAXASAEAdQAEAdgSAYQgSAXgdAEIgLAAQgXAAgTgOgAlps2QgLgIgCgOQgCgNAJgLQAIgKANgCQAOgCALAIQAKAJACANQACANgJALQgIALgNACIgFAAQgLAAgIgHgAASs7QgKgIgCgOQgCgNAIgLQAJgLANgBQANgCALAIQALAIACAOQABANgIALQgIALgOABIgFAAQgKAAgJgGgAnFutQgXgSgEgeQgDgdARgXQASgXAdgEQAdgEAYASQAXASAEAdQAEAdgSAXQgSAYgdAEIgLAAQgXAAgTgOgAhHuzQgXgSgEgdQgEgdASgXQASgXAdgEQAdgEAVASQAYASADAdQAEAdgSAXQgSAYgbADIgKABQgYAAgSgPgAEqvCQgOgQgDgVQgDgXAMgUQALgUAUgKIAKCEQgUgGgNgQgAjAvfQgLgIgCgNQgBgOAIgKQAIgLAOgCQANgCALAJQAKAIACANQACAOgIALQgJAKgNACIgFAAQgLAAgIgHgAC7vkQgKgIgCgNQgCgOAJgLQAIgKANgCQANgCALAJQALAIACANQACANgJALQgIALgNACIgGAAQgKAAgJgHgAkSxQQgUgLgKgUICFgRQgFAWgQAPQgRAQgWADIgKAAQgSAAgPgIgABgxbQgXgSgEgdQgBgKABgMICGgRQAFAJABALQAEAegSAXQgSAXgdAEIgKAAQgXAAgTgOgAgSyEQgKgFgEgJIA7gIQgDAKgHAHQgHAHgKABIgEAAQgIAAgGgDg");
	this.shape_98.setTransform(0.7,40.3,0.401,0.401);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#F17724","#F87B27","#FD7E28","#DC6E22","#AE571A","#D1681F"],[0,0.106,0.251,0.498,0.808,1],-49.8,7.8,40.8,-4).s().p("AjmBPQgdgDgVgTQgUgTgFgbIgGggQAWARAbADQEYAyEFh5QARgHAOgNIACAZQACAagPAYQgPAWgbALQimBNisAAQhKAAhLgOg");
	this.shape_99.setTransform(7.6,84.8,0.401,0.401);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#F07120","#F87623","#FD7924","#DC691E","#AB5014","#CF621A"],[0,0.11,0.251,0.49,0.808,1],-52.6,10.2,46.5,-2.7).s().p("AgcSsQgdgEgVgTQgUgTgFgaMgGbgixINVhvMACvAjPQACAbgPAXQgPAYgbALQilBNivAAQhJAAhKgNg");
	this.shape_100.setTransform(-0.5,40,0.401,0.401);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#959595").s().p("AgaBCIgUiCIBJgKIAUCVQgegCgrgHg");
	this.shape_101.setTransform(0.1,87.6,0.401,0.401);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#504E4E").s().p("AgThDIAdgDIAKB8IAAAEIgZANg");
	this.shape_102.setTransform(18,85.1,0.401,0.401);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.rf(["#676767","#282828"],[0,1],4.8,102.5,0,4.8,102.5,36.1).s().p("AhGOkQgQgCgNgHIlI7uILKhdICNcOIgMAGQikBNiwAAQhJAAhJgNg");
	this.shape_103.setTransform(1.7,52.9,0.401,0.401);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#757576").s().p("AgMgHQAQgQAGgWIADAlQABAEgBADIAAABIgBAEIAAACIgBAGIgBABIgBAHIgBABQgCAGgFAGIAAABIgIAMg");
	this.shape_104.setTransform(18.6,91.2,0.401,0.401);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#595657").s().p("AgWiDIAcgCIARDTQACAhgYAXg");
	this.shape_105.setTransform(18.2,87.7,0.401,0.401);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C0C0C0").s().p("AgFAcIgGgBIgBgBIgGgBIAAAAIgMgFIgIg1QAJAEALACIAzAHIAHA2IgtgGg");
	this.shape_106.setTransform(1,94.7,0.401,0.401);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#B3B3B3").s().p("AAJCIQgMgCgMgGIgnkEIBJgKIAkEdIgugHg");
	this.shape_107.setTransform(0.4,90.4,0.401,0.401);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#848484","#868686","#8A8A8A","#696969","#1C1C1C","#777777"],[0,0.035,0.251,0.38,0.639,1],-27,5,48.9,-4.9).s().p("AjABLQgYgEgSgQQgRgPgEgWIgGgjQASAdAmAGQDYAoDLhdQAkgPAJgjIADAlQACAWgMAUQgNASgXAJQiKBBiRAAQg+AAg/gLg");
	this.shape_108.setTransform(8.6,92.8,0.401,0.401);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-25.4,6.1,58.4,-4.8).s().p("AgXPqQgZgDgRgQQgRgQgEgWIlY9IILKheICTdiQACAXgNAUQgNATgWAKQiLBBiTAAQg9AAg9gMg");
	this.shape_109.setTransform(1.8,55.6,0.401,0.401);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#828282").s().p("AgSAaIgJgyIAtgGIAKA9QgYgBgWgEg");
	this.shape_110.setTransform(3.2,96.7,0.401,0.401);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#514F50").s().p("AgNgcIAXgCIAEAyIgWALg");
	this.shape_111.setTransform(16.9,94.6,0.401,0.401);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.rf(["#6A6A6A","#272425"],[0,1],-1.5,57.3,0,-1.5,57.3,30.3).s().p("AheJrIgCAAIjaybIIYhGIBcSrIgBABQiKBBiTAAQg7AAg/gMg");
	this.shape_112.setTransform(4.9,72.7,0.401,0.401);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6E6E70").s().p("AgJgMQALgIAGgJIACAZIgBABIAAADIAAAAIgBAFIAAABIgCAGIgCADIAAABIgDAFIgBAAIAAAEIgFAFg");
	this.shape_113.setTransform(17.8,104.7,0.401,0.401);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#5B5758").s().p("AgWiaIAXgCIAVEPQADAYgTASg");
	this.shape_114.setTransform(17.3,99.7,0.401,0.401);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#A8A8A8").s().p("AAaAbIgngGIgEgCIgBAAIgIguIAHABQAMADAaADIAIAvg");
	this.shape_115.setTransform(4.8,107.2,0.401,0.401);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#9A9A9A").s().p("AAMCaIgKgDIgxkvIAvgGIAwE9g");
	this.shape_116.setTransform(4,101.9,0.401,0.401);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#848484","#868686","#8A8A8A","#696969","#1C1C1C","#777777"],[0,0.035,0.251,0.38,0.639,1],-23,4.1,42.7,-6.2).s().p("AiPA0QgSgDgNgMQgNgMgDgQIgGgbQAPASAaACQCmAdCdhFQASgHAJgOIACATQABARgJAPQgKANgRAHQhoAwhrAAQgvAAgvgIg");
	this.shape_117.setTransform(10.3,106,0.401,0.401);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#757575","#787878","#7C7C7C","#5B5B5B","#090909","#000000","#666666"],[0,0.055,0.251,0.365,0.612,0.639,1],-19,4.6,43.8,-3.6).s().p("AgRLvQgSgCgNgMQgNgMgDgRIkC11IIXhGIBuWJQABAQgJAPQgKAPgRAHQhnAxhuAAQguAAgugJg");
	this.shape_118.setTransform(5.2,77.9,0.401,0.401);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#C2C2C2").s().p("AgRgzIAUgDIAPBqIgVADg");
	this.shape_119.setTransform(10.5,107.4,0.401,0.401);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#767678","#89898B","#959698","#999A9C","#939495","#818183","#636465","#4D4D4E"],[0,0.114,0.231,0.345,0.475,0.655,0.867,1],-4.4,0.6,4.5,-0.5).s().p("AhgmQIBZgMIBoMsQgtALgsACg");
	this.shape_120.setTransform(9.2,93.1,0.401,0.401);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#C6C6C6").s().p("AAQDIIgNhtIAAgBIgckdIAAgCIADgCQAGgBAAAFIArGLg");
	this.shape_121.setTransform(7.9,101.6,0.401,0.401);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#ADADAD").s().p("AALDLIgLhuQgWjKgJhTQAAgEACgDQAEgDADAAQAKgBABAKIARCxIAZDbg");
	this.shape_122.setTransform(7.9,101.5,0.401,0.401);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#8A8A8A").s().p("Agji9QgBgOAOgBQAPgBABAOIArGMIgfAAIgpmKg");
	this.shape_123.setTransform(7.9,101.4,0.401,0.401);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EDEDED").s().p("AAkJCQALjBgUjpQgNiYgfklIAAgBIgfkfIAAgDIAEgBQAFAAAAAEIAcD4QAUC+AMB8IAFA0QAPCkAFBbQAHCfgICLIgJgIg");
	this.shape_124.setTransform(8.8,117.1,0.401,0.401);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E8E8E8").s().p("AiBuIIAXgCIDrcSIgVADg");
	this.shape_125.setTransform(15,141.6,0.401,0.401);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#262626","#2B2B2B","#3A3A3A","#525252","#737373","#9E9E9E","#B2B2B2","#AEAEAE","#9F9F9F","#888888","#676767","#3D3D3D","#0D0D0D"],[0,0.067,0.149,0.239,0.329,0.427,0.467,0.537,0.624,0.714,0.808,0.906,1],5.9,-0.7,-7.4,1).s().p("AjQzlIBZgMMAFIAnWIhZANg");
	this.shape_126.setTransform(13.7,127.3,0.401,0.401);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#CDCDCD").s().p("AAMDmQAEhNgHhcQgFg9gMh1IgMhzIAAgCQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAEAAAAAEIAIBHIADAcIAMB+IACAUQAHBCABAkQADBBgDA5IgIgHg");
	this.shape_127.setTransform(8.8,117.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#A2A2A2").s().p("AAUDtQADg5gDhBQgBglgHhBIgCgUIgMh+IgDgdIgIhHQAAgDgEAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABIAAACIAMBzQAMB1AFA9QAHBcgEBNIgCgCQAEhMgHhbQgFg5gIhYIgQiUQgBgGAGAAQAGAAAAAFIAIBHQAKBoAFAzIAGA8IAEA+QADBCgDA6IgCgCg");
	this.shape_128.setTransform(8.8,117.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#EBFD8C","#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.545,0.627,0.729,0.835,0.945,0.996],19,64.6,-27.3,-35).s().p("ABuBhIgchPQgXhAg/hGIgXgYQgMgMgigdQgegagPgSQgKgLgHgOIgLgTQgFgNAGgIQAIgNAQAFQAGACAVAMIAZAQQA6AsA3BdIARAeQAaAxAOAwIAVBNQAbBzAABxQgOh5gZhTg");
	this.shape_129.setTransform(114.9,70.6,0.404,0.404,0,0,180);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.188,0.408,0.647,0.89,1],16.7,-16.3,-19.1,15).s().p("ABoGFQgLgMgGgTIgThQQgThSgOgpQgLgggNgdQgbg/grgoQgwgugzgNIgQlLQBTAgBAA2QAbAZAWAZQAaAeAUAfQAYAmASAtQAMAcAHAWQAIAbAGAaQAaBvAGCGQAAAhgBAgQgDAlgHAXIAAAAQgGAfgXANQgDACgEAAIgCAAQgLAAgLgLg");
	this.shape_130.setTransform(115.6,72.4,0.404,0.404,0,0,180);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#319016","#2F8B15","#2B7D12","#23650D","#174506","#091B01","#000000"],[0,0.145,0.318,0.498,0.69,0.886,1],-13.1,-1.8,-38.6,-6.4).s().p("ABnGVQgTgOgHgbIgZhoQgPg+gMgmQgLgegNgdQgcg/gngmQgxgtg2gMIgRlkQBhAiBGA8QAaAYAYAaQAXAaAYAlQAZAnASAuIATAzQAIAZAHAcQAaBxAFCHQACAdgCAlQgDAlgHAZQgIAjgbAQQgHAEgIAAQgLAAgMgJg");
	this.shape_131.setTransform(115.6,72.3,0.404,0.404,0,0,180);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgYi5IAkgBIANFtIghAIg");
	this.shape_132.setTransform(122.5,62.9,0.404,0.404,0,0,180);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#EBFD8C","#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.545,0.627,0.729,0.835,0.945,0.996],-16.9,-25.2,20.9,31.1).s().p("AhqBYIAKhRQAHgyASgxIAMghQAshkAxg0QAMgMAKgHQASgPAHgDQAQgIAJAMQAHAIgDANQgCAHgGAOQgGAPgIAMQgMAUgaAdQgeAigKAOIgRAbQg2BOgNBDIgRBSQgNBWAEB6QgQhzAKhzg");
	this.shape_133.setTransform(158,73.7,0.404,0.404,0,0,180);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.188,0.408,0.647,0.89,1],-20.1,-20.7,10.7,8.4).s().p("AhMGgQgYgJgLgeIAAAAQgKgXgIgjQgGgfgEghQgOiHAKhyQACgdAEgXQAEgZAIgbQAKgvATgqQAQgjAVggQATgdAYgcQA2g/BOgrIAgFKQgzAVgnA0QgkAtgUBCQgHAfgGAhQgIAugHBSQgEAugEAjQgCATgKAOQgKAOgMABIgIgCg");
	this.shape_134.setTransform(157,75.2,0.404,0.404,0,0,180);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#319016","#2F8B15","#2B7D12","#23650D","#174506","#091B01","#000000"],[0,0.145,0.318,0.498,0.69,0.886,1],-5.6,-90.3,105.1,-6.8).s().p("AhQGuQgcgLgNgiQgMgYgHgkQgGgegEgjQgOiKAJhyQACgXAFgeIALg1QAMgyATgpQAQgiAVgiQATgcAageQA7hFBagwIAjFkQg0ASgpA2QgjAsgTBAQgJAegEAhQgHAmgGBAIgKBqQgDAcgRARQgMANgOAAQgFAAgGgDg");
	this.shape_135.setTransform(157,75.1,0.404,0.404,0,0,180);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AACC2IgmlpIAkgFIAlFxg");
	this.shape_136.setTransform(151.5,65,0.404,0.404,0,0,180);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#80EE2D","#7DE92C","#76DB29","#69C423","#57A31C","#4E9318"],[0,0.188,0.408,0.647,0.89,1],1.1,5,-2.6,-46.9).s().p("AAhG9QgDgDgBgEIhLtxIAtgDIAwNzQABAEgDADQgCACgEABIgBAAQgDAAgCgCg");
	this.shape_137.setTransform(136.8,75.2,0.404,0.404,0,0,180);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#319016","#2F8B15","#2B7D12","#23650D","#174506","#091B01","#000000"],[0,0.145,0.318,0.498,0.69,0.886,1],4.8,-32.6,7.6,-50.9).s().p("AAaHEQgFgFgBgHIhMt7IA+gEIAzN8QAAAHgFAGQgFAGgHAAIgCAAQgHAAgFgEg");
	this.shape_138.setTransform(136.8,75.2,0.404,0.404,0,0,180);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("Agyi9IBTgGIASGCIg/AFg");
	this.shape_139.setTransform(137.6,64,0.404,0.404,0,0,180);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#76C2FB").s().p("AgJACQgYgCgfgEIAAgEQAWADAjACQAiACAlAAIABAKQgtgDgdgEg");
	this.shape_140.setTransform(145.3,82.9,0.404,0.404,0,0,180);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#EFEFEF","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#D3D3D3","#DBDBDB","#EFEFEF","#F6F6F6"],[0,0.039,0.122,0.318,0.557,0.812,0.878,0.976,1],-26.3,2.1,55.3,-3.8).s().p("AiIAIQgigCgfgDIALgDIA3ABQCEADCOgKIBAgHIhJAUQhHAHhEAAQhAAAg/gGg");
	this.shape_141.setTransform(141.9,73.4,0.404,0.404,0,0,180);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#BCF87C").s().p("AgSACIhEgDIAAgDQBWAEBWgBIABAGQg2AAgzgDg");
	this.shape_142.setTransform(154.8,10.8,0.404,0.404,0,0,180);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#BCF87C").s().p("AgTAFIhDgFIAAgBIABgDICsgDIgBAHIABAIQg2gBg0gCg");
	this.shape_143.setTransform(154.7,10.7,0.404,0.404,0,0,180);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#8CF239","#8EF439","#90F93A","#80D935","#73C031","#84E036"],[0,0.055,0.251,0.482,0.639,1],-52.8,5.1,51.8,-2.5).s().p("AlfArQhbgGg4gHICTACQCEAADcgUQCsgMC1gXQBZgMA4gKQg2APhaASQizAhitANQiGAMhyAAQg3AAgzgDg");
	this.shape_144.setTransform(141.3,9.2,0.404,0.404,0,0,180);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#BAFD6B","#A1F257","#91D253"],[0,0.408,1],-6.5,0.3,56.5,-2.6).s().p("AhJBrIgVjbQBXAEBVgBIARDeQhUAAhUgGg");
	this.shape_145.setTransform(154.4,15.2,0.404,0.404,0,0,180);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#8BD944").s().p("AgrhpIA/gNQAOAgACAhIAIB0QACASgLAPQgLAOgRABIgiAIg");
	this.shape_146.setTransform(121.8,12.1,0.404,0.404,0,0,180);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#78E62B","#7AE92C","#7CEE2D","#6BCE26","#5BAE1E","#6ED227"],[0,0.067,0.251,0.459,0.639,1],-51.3,5.1,51.6,-2.4).s().p("AnQCQQgRACgNgNQgNgNgCgTIgIhzQgCgeAHggQHXAjIXhxQAOAgACAhIAIB0QACATgLAOQgLAPgRABQl0BPlPAAQh5AAh1gLg");
	this.shape_147.setTransform(141,13.5,0.404,0.404,0,0,180);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#BAFD6B","#A1F257","#91D253"],[0,0.408,1],-29.4,2.8,27.1,-1.3).s().p("AimIAIgBgFIEvvaQAJggAEgLQAKgGAJgCIgBAEIiiQMIADAVg");
	this.shape_148.setTransform(151.5,-9.9,0.404,0.404,0,0,180);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#80C542","#7DBF41","#76B33F","#73AC3E","#72AA3E","#7CBC40"],[0,0.039,0.149,0.298,0.655,1],26.4,15.5,-169.8,-95.8).s().p("AD6IXQgKgkgQguQg7ighzjeQiBj0g+h+IgqhTIhSimIgSgnQARAIANAVIH3OFQAWAnADAuIAJB2QABANgFALQgFALgKAHIgPg1g");
	this.shape_149.setTransform(131.5,-7.4,0.404,0.404,0,0,180);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#73DC29","#73DC29","#7AE92C","#7CEE2D","#6BCD26","#4D9318","#60B821"],[0,0.004,0.133,0.251,0.4,0.639,1],-54,3.3,46.9,-4).s().p("AnQJwQgRABgNgMQgNgNgCgUIgIh1QgDguAQgqIFyvEQAQgpAngDQAngCAVAmIH3OEQAXAoADAuIAIB1QACATgLAPQgLAOgRABQl0BPlPAAQh5AAh1gKg");
	this.shape_150.setTransform(141,-5.8,0.404,0.404,0,0,180);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#FFFFFF","#FFFFFF","#FFFFFF","#EBEBEB","#D6D6D6","#DEDEDE","#EBEBEB"],[0,0.047,0.318,0.541,0.812,0.906,1],-21.6,1.2,58.9,-4.6).s().p("AieATQgkgFgRgYIA/gTQCvANC5gRIjkBDQhGgDhIgMg");
	this.shape_151.setTransform(143.9,74.7,0.404,0.404,0,0,180);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#E3E3E3").s().p("AhYgeICugMIADAjIipAyg");
	this.shape_152.setTransform(151.5,19.5,0.404,0.404,0,0,180);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AALLKIgHg9ICAgnIAHBnIgUAHQgygDg6gHgAgTGlICGgpIAHBnIiCAogAgrC9ICNgsIAHBoIiJAqgAhEgpICWguIAHBlIiSAtgAhdkSICegwIAHBoIiaAvgAh1n6IClgyIAHBnIihAygAiKrGICtgNIADAkIioA0g");
	this.shape_153.setTransform(149.4,46.9,0.404,0.404,0,0,180);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#137DD6").s().p("AhRA0IgJhbICugMIAHBlQg5ACg5AAIg6AAg");
	this.shape_154.setTransform(151.4,19.8,0.404,0.404,0,0,180);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D1D1D4").s().p("AgTgUIAlgMIACA6IglAHg");
	this.shape_155.setTransform(122.9,18.1,0.404,0.404,0,0,180);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EEEEEB").s().p("AAAIjIAjgMIADBpIgkALgAgHE1IAjgLIADBpIgiALgAgPBIIAlgLIADBoIgkAMgAgWijIAlgMIACBpIgjALgAgdmRIAkgLIADBoIglAMgAglp+IAmgMIADBoIgmAMg");
	this.shape_156.setTransform(122.1,43,0.404,0.404,0,0,180);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#C3C3C3","#CDCDCD","#DADADA","#E1E1E1","#E3E3E3","#D7D7D7","#A2A2A2","#8D8D8D","#949494","#A9A9A9","#CACACA","#D1D1D1"],[0,0.027,0.078,0.149,0.318,0.38,0.671,0.812,0.855,0.914,0.988,1],-42.9,3.2,43.3,-3.1).s().p("AnCA+IgJhQIG1ggIl+BxgAHLg/IABA9Qi/AfiwARg");
	this.shape_157.setTransform(140.6,19.3,0.404,0.404,0,0,180);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#DBDBDB","#EAEAEA","#F6F6F6","#FDFDFD","#FFFFFF","#E8E8E8","#B3B3B3","#9E9E9E","#A6A6A6","#BABABA","#DBDBDB","#EBEBEB"],[0,0.035,0.086,0.153,0.318,0.42,0.686,0.812,0.851,0.906,0.973,1],-39.9,2.9,46.5,-3.4).s().p("AkCLSQgkgFgSgcIMUjvIADBpIpWC2QhCgEhJgLgAlYHLIMtj2IADBoIskD0gAlzDkINCj7IADBnIs5D6gAmOgBINWkDIADBoItND/gAmpjpINqkJIADBoIthEHgAnEnQIN+kPIADBoIt1EMgAneq1IG+ghImzCFg");
	this.shape_158.setTransform(139.9,46.5,0.404,0.404,0,0,180);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#1173C4","#1172C3","#0E66AF","#095490","#084D84"],[0,0.314,0.494,0.82,1],-45.7,4.4,45.9,-2.2).s().p("AnCBIIgJhQIOVhDIACBRQmGBGloAAQhRAAhPgEg");
	this.shape_159.setTransform(140.6,18.9,0.404,0.404,0,0,180);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#1994FB").s().p("AAKLJIiV2QICugMIBpWnQhDgDg/gIg");
	this.shape_160.setTransform(149.4,46.9,0.404,0.404,0,0,180);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#3B87C2").s().p("AgQgTIAhgIIAAAIIgBAHIAAAAIgBADIAAABIgBADIAAAAIgCAEIAAABIgCAAIAAABIgCADIAAABIgIAMIAAAAIgPALg");
	this.shape_161.setTransform(121.3,72,0.404,0.404,0,0,180);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#2B95E8","#2B96EA","#2D9EF7","#2DA1FC","#2B8FDC","#2A7FC1","#2984C9"],[0,0.016,0.141,0.251,0.569,0.808,1],-38.7,3.9,39,-1.7).s().p("AkSAhQgrgCgogFIgegEQArADBHABQCEADCOgMQCEgMCOgWQBGgMArgIQgqAMhFAPQiXAfh8ALQhLAGhJAAQhBAAg/gFg");
	this.shape_162.setTransform(136.4,72.4,0.404,0.404,0,0,180);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#1480DB","#1584E2","#178CEF","#188FF4","#137CD3","#0E66AE","#0F6BB7"],[0,0.043,0.153,0.251,0.525,0.808,1],-42.6,4.3,47.7,-2.2).s().p("AlRAyQgZgEgSgQQgRgPgCgTIAAgCQF5ApGmhkIAAADQAAAVgPARQgPASgZAGQjyBCjeAAQhvAAhrgQg");
	this.shape_163.setTransform(136.7,73.5,0.404,0.404,0,0,180);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#3A84BB").s().p("AgmrCIAmgDIAnVVQAAAQgJAOQgJAOgQAKg");
	this.shape_164.setTransform(122.1,44.5,0.404,0.404,0,0,180);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#1480DB","#1480DB","#1688E8","#178AED","#1278CC","#0A5592","#0F6BB7"],[0,0.004,0.133,0.251,0.467,0.808,1],-41.6,4.7,51.3,-2).s().p("AkCLbQgZgDgSgQQgRgQgCgVIie1LIOVhDIAoVUQAAAVgPASQgPARgZAHQjyBEjfAAQhuAAhrgRg");
	this.shape_165.setTransform(139.9,46,0.404,0.404,0,0,180);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#58A2DA").s().p("Ag+AhIgHhCICFgKIAHBXQhAgChFgJg");
	this.shape_166.setTransform(145.9,76.2,0.404,0.404,0,0,180);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#4581AE").s().p("AgegfIA7gEIACAzQgLAIgMACIgiAKg");
	this.shape_167.setTransform(123.6,74.3,0.404,0.404,0,0,180);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#1071C0","#1278CC","#137AD0","#0F6DB9","#0B5A9A","#084F87","#074B80","#0C5FA2"],[0,0.125,0.251,0.369,0.549,0.702,0.808,1],-34.8,3.6,35.4,-1.4).s().p("Ak8AwQgQgCgNgIIgFgxIK8gzIABA1QgLAIgMABQjkA/jTAAQhoAAhlgPg");
	this.shape_168.setTransform(136.6,75.4,0.404,0.404,0,0,180);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#59B5FA").s().p("AAkAcIgBAAIgPgBIgCAAIgcgDIgCAAIgfgEIgCAAIgRgDIgEguQBDAJA+ACIAEAwg");
	this.shape_169.setTransform(145.3,83.8,0.404,0.404,0,0,180);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#479AD8").s().p("AgagNIAagHQANgEANgKIABAPQAAASgNANQgNAPgTAGIgGACg");
	this.shape_170.setTransform(123.3,81.4,0.404,0.404,0,0,180);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#60A8DD").s().p("AgYAEIAxgMQgSAIgeAJg");
	this.shape_171.setTransform(123.4,80.5,0.404,0.404,0,0,180);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#1990F4","#1E96F9","#2199FC","#2097F8","#1983D9","#1576C6","#1472BF","#1784E0"],[0,0.11,0.251,0.275,0.494,0.678,0.808,1],-33.6,3.5,34,-1.4).s().p("AjvAfQgogEgggIIgZgIIAaAGQAhAFAnACQBpAGCHgLQB9gKBygWQA8gNAkgMQgiAQg7AQQh1Afh8AKQg4AEg1AAQhHAAg+gIg");
	this.shape_172.setTransform(136,81.7,0.404,0.404,0,0,180);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#1685E5","#1689EA","#1891F7","#1994FB","#1689E9","#1276CA","#0F6BB7","#0E67B0","#137AD1"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-33.7,3.5,35.3,-1.5).s().p("AkfAxQgWgEgPgNQgOgNgDgSIgBgMQANAIAQACQEpAtFLhcQAOgEAOgKIAAAPQABASgNAPQgNAOgWAFQjPA6i+AAQhfAAhbgOg");
	this.shape_173.setTransform(136.1,82.5,0.404,0.404,0,0,180);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#59B0F1").s().p("AgyB3IgCgBIgYjvICGgKIATEHQhFgDg6gKg");
	this.shape_174.setTransform(145.7,79.7,0.404,0.404,0,0,180);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#468DC2").s().p("Aggh1IA7gFIAGC+QAAARgNAPQgNAQgTAGIgGABg");
	this.shape_175.setTransform(123.5,77.8,0.404,0.404,0,0,180);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#1480DB","#1480DB","#1688E8","#178AED","#1277CB","#0D65AC","#0B5999","#0A5592","#0F6BB7"],[0,0.004,0.133,0.251,0.404,0.569,0.71,0.808,1],-34.1,3.6,36.4,-1.5).s().p("AkVCJQgWgEgPgNQgOgNgDgSIgWi8IK9gzIAFC9QABASgNAPQgNAPgWAGQjPA6i+AAQhfAAhbgOg");
	this.shape_176.setTransform(136.5,79,0.404,0.404,0,0,180);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#7CB7E2").s().p("AgdBtIgCgXIgIhHQgFgsAFgWQADgPAKgSQAKgSAKgJIAWgCQANANAEAxQACAbABAmIAHBkQgvgDgZgCg");
	this.shape_177.setTransform(142.3,82.1,0.404,0.404,0,0,180);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#3979A9").s().p("AgNBYIgHhHQgEgtACgWQABgOAEgRQAFgSAFgJIALgBQAHANAEAyIAEBAIAFBTIgjAJg");
	this.shape_178.setTransform(127.7,80.9,0.404,0.404,0,0,180);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#1071C0","#1278CC","#137AD0","#0E68B2","#0A5896","#084F86","#074B80","#0C5FA2"],[0,0.125,0.251,0.396,0.557,0.702,0.808,1],-22.5,2.3,22.9,-1).s().p("AjWB3IgSjUIHEghIANDSQikAriZAAQhCAAhAgIg");
	this.shape_179.setTransform(136.1,81.5,0.404,0.404,0,0,180);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#95D1FC").s().p("AgiAAIAAgFQAgADAkABIABAHQglgCgggEg");
	this.shape_180.setTransform(141.4,94.5,0.404,0.404,0,0,180);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#7DC6FC").s().p("AggAQIgDgmQAjAEAhACIADAng");
	this.shape_181.setTransform(141.3,95.2,0.404,0.404,0,0,180);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#3C92D3").s().p("AgQgNIAQgEQAIgDAIgGIABAUQABAOgQAMQgEAEgJADIgBAAg");
	this.shape_182.setTransform(126.9,93.6,0.404,0.404,0,0,180);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#60A8DD").s().p("AgNABIAbgFIgbAJg");
	this.shape_183.setTransform(127,92.9,0.404,0.404,0,0,180);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#1A90F4","#1F97F9","#229AFC","#2299F9","#1B85DA","#1778C7","#1674C0","#1885E0"],[0,0.11,0.251,0.271,0.49,0.678,0.808,1],-21.7,2.2,21.9,-0.9).s().p("Ah6AZQg1gDgpgNQAwAIA8gBQAqgBBCgFIBygMIBCgOIAlgIIgjANQgZAJgXADIgSAEQgXAGhMAKIgpACQgqACgfAAIgZAAg");
	this.shape_184.setTransform(135.2,93.7,0.404,0.404,0,0,180);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["#1685E5","#1689EA","#1891F7","#1994FB","#1689E9","#1276CA","#0F6BB7","#0E67B0","#137AD1"],[0,0.035,0.149,0.251,0.349,0.537,0.698,0.808,1],-22.6,2.3,22.7,-0.9).s().p("Ai5AkQgOgCgKgJQgJgIgCgMIgBgNQAFADAGAAQDEAcDZg7QAKgDAIgGIABAUQAAAMgIAJQgIAIgOAEQiGAmh7AAQg9AAg7gKg");
	this.shape_185.setTransform(135.2,94.4,0.404,0.404,0,0,180);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#7DC1F4").s().p("AgQDgIgYj+IgIhHQgFguAFgWQADgPAKgSQAKgSALgJIAVgCQANANAEAxQACAbABAoIAYFOQgigCghgGg");
	this.shape_186.setTransform(142,86.8,0.404,0.404,0,0,180);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#3A85BE").s().p("AgTgaIgIhIQgEgvACgWQABgOAFgQQAEgTAGgJIAMAAQAFANAEAxIAEBCIASEgQABAMgJAKQgIAJgOAEIAAAAg");
	this.shape_187.setTransform(127.4,85.6,0.404,0.404,0,0,180);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#1480DB","#1480DB","#1688E8","#178AED","#1688E9","#1172C3","#0D63A8","#0B5998","#0A5592","#0F6BB7"],[0,0.004,0.133,0.251,0.267,0.427,0.576,0.71,0.808,1],-22.8,2.4,23.5,-1).s().p("AioDsQgOgCgKgJQgJgIgCgMIgjmgIHEghIAZGhQAAAMgIAJQgIAKgOAEQiGAlh7AAQg9AAg7gJg");
	this.shape_188.setTransform(135.9,86.3,0.404,0.404,0,0,180);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#73B2E0").s().p("AgKgYIARgBIAEAyIgRACg");
	this.shape_189.setTransform(135.5,96.3,0.404,0.404,0,0,180);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#053F6C","#09518B","#0D63A9","#1070BF","#1278CC","#137AD0","#1277CB","#106FBD","#0D62A6","#084F86","#074B80"],[0,0.082,0.184,0.286,0.38,0.467,0.576,0.702,0.835,0.976,1],-5.5,0.4,4.9,-0.3).s().p("Ag0jLIBLgFIAeGcQgpAFgiAAg");
	this.shape_190.setTransform(135.5,88.9,0.404,0.404,0,0,180);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#CECECE").s().p("AAWDrIgFg+QgJhigYjLIAAgBIgNhoIAJgBIAKBPQAOCAAJBTIAEAlQAKBpADAlg");
	this.shape_191.setTransform(138.2,87.9,0.404,0.404,0,0,180);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#AFAFAF").s().p("AARDrIgEg9QgKhkgXjKIgNhpIARgBIAKBOQARCWAGA+IAEAkQAKBbADA0g");
	this.shape_192.setTransform(138.2,87.9,0.404,0.404,0,0,180);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#848484").s().p("AAJCuQgIhUgNh2IgZjMIAZgCIAEAeQAZDWAFAuQAOCNACAmIgZAAg");
	this.shape_193.setTransform(138.2,87.9,0.404,0.404,0,0,180);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#73BCF3").s().p("AhLuXIATgBICEcwIgTABg");
	this.shape_194.setTransform(132.9,131.8,0.404,0.404,0,0,180);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#07487B","#074B80","#0D62A7","#1174C5","#1480DB","#1688E8","#178AED","#1688E8","#1480DA","#1172C3","#0C5FA3","#0A5592"],[0,0.012,0.11,0.204,0.298,0.384,0.467,0.569,0.686,0.812,0.941,1],5,-0.3,-6.2,0.5).s().p("AiL2HIBMgFMADLAsUIhMAFg");
	this.shape_195.setTransform(133.9,111.7,0.404,0.404,0,0,180);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#EBEBEB").s().p("AAzFXIgBgBQggglgWgvQgVgugMgyQgUhWAGh0QABgbAGg9IACgSIAMhtIAKhVQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIABABIAAABIgLBjQgLBfgFA7QgKB0AMBYQARBvA0BPQALARAPAQIAAABIgCACIAAAAg");
	this.shape_196.setTransform(142.1,103.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#C7C7C7").s().p("AAxFXQghgmgVgvQgWgtgLgzQgUhXAGhzIAHhYIACgTIAMhsIAJhVQAAgBABgBQAAgBAAAAQABAAAAAAQABgBABABIACABIABACIgLBjIgRCbQgKBzANBYQAQBvA0BOQAMARAOAQQAAAAAAABQABAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgCgCgAgUlUIgKBVIgMBtIgCASQgGA9gBAbQgGB0AUBWQAMAyAVAuQAWAvAgAlIABABQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABgBIAAgBQgPgQgLgRQg0hPgRhvQgMhYAKh0QAFg7ALhfIALhjIAAgBIgBgBQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABg");
	this.shape_197.setTransform(142.1,103.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#969696").s().p("AAvFZQg+hLgZhrQgUhYAGhzIAJhrIAPiFIAGg9QABgFAFABQAFAAAAAFIgPB/IgNB/QgKBzANBYQAQBuAzBOQAMARAOAQQADADgEAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAgWlUIgJBVIgMBsIgCATIgHBYQgGBzAUBXQALAzAWAtQAVAvAhAmIACACQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgOgQgMgRQg0hOgQhvQgNhYAKhzIARibIALhjIgBgCIgCgBIgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBABAAABg");
	this.shape_198.setTransform(142.1,103.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.8,-33.7,357.3,213.1);


(lib.button_rocket3_ = function() {
	this.initialize();

	// Rockets_noMove
	this.instance = new lib.RocketStill3();
	this.instance.setTransform(-43.2,19,1,1,0,0,0,27.7,100.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.9,-81.3,55.4,200.5);


(lib.button_rocket2_ = function() {
	this.initialize();

	// Rockets_noMove
	this.instance = new lib.RocketStill2();
	this.instance.setTransform(0,24.5,1,1,0,0,0,22.1,103.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.1,-79.1,44.2,207.3);


// stage content:
(lib.JS_RocketToRiches = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_81 = function() {
		this.stop();
		this.rocket1anim.stop();
		this.rocket2anim.stop();
		this.rocket3anim.stop();
		eventFromFlash("game");
	}
	this.frame_170 = function() {
		this.stop();
		eventFromFlash("show_win");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(81).call(this.frame_81).wait(89).call(this.frame_170).wait(1));

	// StarBurst
	this.instance = new lib.freestarburst();
	this.instance.setTransform(642.5,342.4,1.867,1.867,-4.8,0,0,-0.3,0.2);

	this.door1_btn = new lib.button_rocket1_();
	this.door1_btn.setTransform(149.7,685,1.437,1.437,0,0,0,0,-67.5);
	this.door1_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({x:1142.5},10).to({_off:true},1).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.door1_btn).wait(45).to({_off:false},0).to({regY:-67.6,y:149},11,cjs.Ease.get(1)).to({regY:-67.5,y:243.1},4,cjs.Ease.get(1)).to({_off:true},21).wait(90));

	// logo
	this.instance_1 = new lib.LogoLetters();
	this.instance_1.setTransform(401.4,247.2,2.798,2.388,0,0,0,70,32.3);

	this.door2_btn = new lib.button_rocket2_();
	this.door2_btn.setTransform(406.9,685,1.437,1.437,0,0,0,0,-67.5);
	this.door2_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({y:-134.8},10,cjs.Ease.get(1)).to({_off:true},1).wait(140));
	this.timeline.addTween(cjs.Tween.get(this.door2_btn).wait(51).to({_off:false},0).to({regY:-67.6,y:149},11,cjs.Ease.get(1)).to({regY:-67.5,y:243.1},4,cjs.Ease.get(1)).to({_off:true},15).wait(90));

	// rocket
	this.instance_2 = new lib.rocket();
	this.instance_2.setTransform(413.2,255.7,2,2,0,0,0,104.4,101.7);

	this.instance_3 = new lib.button_rocket3_();
	this.instance_3.setTransform(666.9,685,1.437,1.437,0,0,0,0,-67.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({x:957.2,y:-288.3},10,cjs.Ease.get(1)).to({_off:true},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(57).to({_off:false},0).to({regY:-67.6,y:149},11,cjs.Ease.get(1)).to({regY:-67.5,y:243.1},4,cjs.Ease.get(1)).to({_off:true},9).wait(90));

	// Fireworks
	this.instance_4 = new lib.fireworksBg();
	this.instance_4.setTransform(390,238.4,2,2,0,0,0,151.1,105.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(140));

	// game
	this.instance_5 = new lib.click();
	this.instance_5.setTransform(405.9,-278.2,2,2,0,0,0,-49.2,-40);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({_off:false},0).to({y:-50.3,alpha:1},12).wait(1).to({y:-36.3,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// Rocket1
	this.rocket1anim = new lib.Cups1Animation();
	this.rocket1anim.setTransform(406.9,340.1,1.437,1.437,0,0,0,0,49.9);

	this.instance_6 = new lib.fireworks1NEW();
	this.instance_6.setTransform(396,264.1,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.rocket1anim}]},81).to({state:[{t:this.instance_6}]},89).wait(1));

	// Rocket2
	this.rocket2anim = new lib.Cups2Animation();
	this.rocket2anim.setTransform(406.9,340.1,1.437,1.437,0,0,0,0,49.9);
	this.rocket2anim._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rocket2anim).wait(81).to({_off:false},0).to({_off:true},89).wait(1));

	// Rocket3
	this.rocket3anim = new lib.Cups3Animation();
	this.rocket3anim.setTransform(406.9,340.1,1.437,1.437,0,0,0,0,49.9);
	this.rocket3anim._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rocket3anim).wait(81).to({_off:false},0).to({_off:true},89).wait(1));

	// Stars
	this.instance_7 = new lib.Stars();
	this.instance_7.setTransform(481.3,209.9,2,2,0,0,0,151.3,51.4);

	this.instance_8 = new lib.Stars();
	this.instance_8.setTransform(635.2,283.9,2,2,0,0,0,151.3,51.4);

	this.instance_9 = new lib.Stars();
	this.instance_9.setTransform(21.3,271.9,2,2,0,0,0,151.3,51.4);

	this.instance_10 = new lib.Stars();
	this.instance_10.setTransform(391.3,117.9,2,2,0,0,0,151.3,51.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(171));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgoNAJFIAAqdIAZgYIgZANIAAgcIBCgdIAegiIgVhcIgQAVQgcAmgcAxIgDAUIAAiBIABgDIgBABIAAgMIAFgEIAMgpIgRAfIAAgaIAdgrIANgoIgFgWIAHASIAVg6IgQBIIAAABIAQgWIgOAaIAbBUIAhgjIgEhwIALBoIAvgvIASgQIg+BTIALBrIAvg8IAziaIgDAZQgEAigHAlIAMgkIgIAnIAXgdIgbAzIgLA8IALgIQAQg4ASgxIAPgnIgdCAIATgPIgUAUIgBAGIAsglIguArIgNA8IBRgdIABiJIAHAlQAIAuAFAzIABgBIAahdIABg2IAEAkIACgGIgCAKIAFAmIAIgaIgGAoIAAADIAKgkIgLgxIAOAnIAKggIgIAmIAKAcIAVgUIgTAaQARAzAIAeIAXgxIAVh1IAABMIAWgoIgYBKIgFA4IBAhgIgRAjQgXAsgcAvIgEAgIAEgDQAag7Abg3IAVgrIg7CUIABAAQAtg1AngoIARggIgBgTIADAQIAagtIgYA6IAAAAIAQgPIgPATQAFAcAGAuIAggZIANheIgGBZIA/gsIhAA9IgFBaIAvgrIBAh5IgGAVQgIAbgLAeIAPgcIgMAfIAXgUIgdAmIgSAwIAKgGQAVgrAWgnIASgeIgqBmIASgJIgUANIgCAFIAqgYIgsAdIgUAwQA0gKAUgCIAUhyIABAfQAAAogDArIABgBIAjhJIAIgtIgCAfIACgFIgCAIIgCAgIALgUIgLAgIAAACIANgcIgCgqIAGAjIANgaIgMAfIAEAYIAUgNIgTASIAHAyIACgHIgCAKIABAIIAFgVIgEAdIAAACQAagmAagiIAVgbIgeA7IgEAXIAAAAIAIgMIgHAPIATAtIARgVIgHg+IAKA6IAhgmIgfAxIAJAuQAMg5AUhEIgSB3IALgRIAWhXIAAAOIgEAnIAGgUIgDAWIAIgLIgFgqIAIAlIAAgBIAAACIABAHIADgJIgEgDIAEADIAHgYIgEAaIANAJIABAAQgHgxgWgoQAWAjALAsIAHgPIAAgBIAJgVIgIAVIADASIAKgrQgCAdgFAhIABADIAFAFQAKgoALgiIgHAjIADAQIABgDIgBAFIAEAUIADgNIAAAEIABgFIgBABIABgFIgGgTIAGAOQACgQgBgWQACATABAYIAEgQIgDAWIAGAPIADgDIgGgiIgHgfQAJAbAJAgIADgDIgCAEIAJAmQAAhBgUgyIAIAVIATAcIgCgLIABAFQgBgPAAgPQAEAZAIAaIAGALIAJgSIgGAXIAIANIAAggQgCgeACgfQgBAXACARIADgkQgCAeACAhIADAXIACgMQAAgtAIglQgDAeABAdQAKggARgbQgTAogGAwIAFAkQAJghAEgdIgGgUIAGAQIACgNIgBAPIAOAoQAFgNADgPIAAgFIABgDIgWgrIAYAkIAGgkIgBAZIABgEIAEgdQACAOgGAPIAAAIIgBAPIALASIADgJIgNgYIAOAUQALghAUgaQgRAagMAjIAVAgQANgcAOgUIALgOIAAgNIgGAOIAGgOIgBgIIABAHIAEgHIgEAHIACAMIAKgLIgKAMQAGA7ANA+IADADIAHgQIAAgOIgVgyIAUApIgGh2QANA2AGA8IAOgeIgNAsIACATIABACIAOghIAFhnQAFAvACAaIABgCIADgOIAAgIIABAFQALgnAPgkQgIAXgHAeIAFgLIgFANIgHAmIAGAeIAAgVIADAWIAGgTIgEAfIAGAfIADgEIABgDIgCg7IAAgWIAJBAIACgGQgGgtgLguQALAnAFAjIgHhbIAOBcIADgIQgCgvgDgtQAJAjAFAhIAPglIgEgKIAFAIIAIgUIgBgRIACAPIAHgPIgHARIABAVIABgDIAAgBIAFgTIAAgBIAEgTQgBAQgCAQIADAwIABACIAQhFIgKBKIAAAEIALANIAFgKIgPgPIAPAOIACgEIgBAFIAKAKIACgaIgPgYIAPATIAAgFIgHgJIAHAIQABgjAAgkIAIBTIADAFIABgjIgDgcIAEAQIAAgUIABAaIADAHIAAg6QABAiADAnIAOAmIAQg4IgRgvIAUAmIANg2IgMA6IALAWIARgmIgEgRIAFAQIAAgtIADAmIAFgJIgFAKIACAXIASBAIACACIAAhfQAEBFAAAiIADADIAFgaIgIhQIALBCIACgHQABgxACgnIADA9IASg9QgKApgGArQADA0AFAmIABgCIAJgfQgGgxAAgzQADAoAHAsIAThOQgGgfgLgZQAMAVAIAXIABgGIAAAJIABAEIgBgeIAFAuIABABQABgfgFgdQAHAmAAAkIADAPQADgugCgqQACASACAjIABgZQABAXgCAYIAAAPIATgcIAKgyQAAAUgDATIASgbIAFgNIABgDIAAACIACgGIgCAIIgBAGIABgCIgBACIgDAYQgJBGgEBMIABAVQAMgpAJgmIgJhEIALA7IACgKIAAgJIgJg9IAKAhIACgpQgBAcACAZIAIAlIACgGQgDgqgIgqQAIAbAJAsIARgnIgFgLIAGAJIAHgQIAAgSIABAQIAHgQIgHASIACAgIABgEIAAgZIACASIALgrIgFAUIACA5IACAFIARhGQgIAvgDAjQAMAaAJAWIAJgKIABgRIgcgcIAcAUIABgdIgRgcIARAWIAAgBIgIgNIAIAMQAAgagCgdIAEA7IAFAIIABgdIgIghIAIAXIAAgbIABAJIAEgqQABAqAIA3IAFAMIAOgTIAHgWIgTgvIAVApIABgDIgGhQIAEANIALAkIAHgYIgGAdIAGAaIAIgKIAGgMIgCgIIADAHIADgFIAAgBIACgFIgCAIIAAAFIAPgRIgJgRIALAOIAMgNIACgWIABATIARgSIgRAYIABAUIABgBIADgWIAAAPIAHgMIAAgEIAAADIAEgGIAAgFIABADIAJgSIgJAcIABAvIAPgwIgGAnIATgiIgFgNIAHALIAJgPIgHAVQAIAOAGAQIABgEIgBAFIACAGIAAgQIAAAAIgEgFIAEAEIAAgMIABANIACACQAAgQgDgUQAEASADAXIAGAGIAAgFIgDgDIADADIAAgRIgFgQIAFALIAAgLIACAPQADANABAKIACADIADhIIAEAXQADAdABAgIAFAFIACgCIADgfIgKgfIALATIACgVIACAUIAFgnIACgOIAGBFIAGgHIADgGIAAgCIAAACIAGgLIgFAMIAAADIABgDIgBAEQAEANAGAjIADgfQAAAWABAdIAXgrIgDgIIADAGIAFgJIgdg2IAiAsIAcg1IgWA2IAAAIIABABIANgSIgMAUIAFAHIAFgLIABgFIAAADIAIgSIgIAdIAAAKIACADIAjgnIgFgRIAHAOIAAAAIACgpIAEAiIAIgIIgHALIACAXIAGAOIACgiIADAuIAIASIABgHIgHgfIAIATIACgWIABAUIAHg1IAEBaIAFhUIACAdQABAkgBAnIAEAKIAHgQQgFgkgCghIgCgZIARBLIAJgTIgSguIAWAmIAYguIABgCIAAACIAQgaIgfBbIAIAQIAbgoIgDgRIAFAOIAAAAIACgpIADAiIAGgIIgGALIABAXIAXBNIABABIAHhnIABAgQAAAogCApIACADIAGgTQgDgjAAghIgBgaIAJA/IADAKQANgmAQghIgCgZIAGARIAJgTIgHAaQAHAZAEAVIAdgiIgHgOIAJAMIALgLIABgTIABAQIAPgQIgPAVIABASIABgBIACgTIABAMIAJgQIABgFIAAADIAIgQIgIAZIABAvIAAAAQAMgWAMgUIAKgQIgVA/IAVALIADgQIABASIAUAMIABgJIgBgBIABABIABgUIgWgbIAWAXIAAgCIgJgMIAJAJIADg/IADAUQADAZABAcIAFAGIADgdIgIgbIAJAQIACgTIABASIAFgiIACgMIAHBOIAHAOIACgEIgBAEIAJAVIAYgvIgZgwIAJAKIAVAdIAYguIgVAyIAPAVIAUgXIAHgVIgBgEIACADIADgJIgDAKIAEAIIABAAIABgkIAEAeIAHgHIgHAJIACAVIAAAAIgBgMIADAPIAJAVIAHAIIABgBQgCgYgEgTQAEASAEATIAHgRIABgBIAAABIgBAAIgHATIACAKIAEAEIAAgCIABgeIABgBIABATIADgKIACgmIACAWIACgKIgCAQIAAArIAFgSIgDgyIAIAjIAHgaIgGAeIAFAbIADgHQADgVAAgSQABARgBARIAEgKIgEgcIAGAYIAGgMIgGgXIAHAWQAKgTAKgQIAIgMIgOApIAAAAIgGASIAHAWIACAEQgDgYAAgUQACAaAGAaIAJAOIACgSQgBgeADgaQgBAWABATIAFgZQgEAQAAARIACAcQABgpAMgpQgIAgAAAjQAHghAOgdQgQAwgDAyIAAABIAQg2IgBgIIACAGIAEgQIgEATIAMAjIAAgnIAGAXIABgFIAAgDIgRglIASAhIAGgkQgCAMAAAMIABgFIgBAJIAAAPIAJAPIADgHIgJgTIAJASQAMgaARgXQgRAZgKAcIAKASIAJgJIgGgPIAJANIAKgKIABgBIADgQIgBAOIADgEQAEgNAIgRIgHAXIAIgKIgBgNIABANIAKgLIgJANIACANIAGgJIgGANIAHAkIASgaIgGg2IAKAwIADgCIgDAFIAFAbIAQAVIABgDIgGgKIAHAJIADgGIACgXQAAgcgCgaIAFAkIABgMIACAiIAEgJIAAgEIABACIARhBIgFAnIABABIAFgLIgFANIADAJIAEgP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");
	this.shape.setTransform(392,496.6,1.604,3.143);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJgjIACgBIABACIAAACIAAABIAQBQIgCAAgAgIgwIABAAIgBAAg");
	this.shape_1.setTransform(392.1,516.4,2.428,2.428);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF6C1").s().p("AgCAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAACADAAQgDAAAAADQAAgDgCAAg");
	this.shape_2.setTransform(392.1,341.9,2.428,2.428);

	this.instance_11 = new lib.Mesh();
	this.instance_11.setTransform(0,-224.9,1.516,2.428);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(171));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(93.7,50.1,1219,904.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;