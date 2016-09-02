#pragma strict
var flipped : boolean;
var color : String;
var Tex : tk2dSprite;
var colored : boolean;
var board : Board;

private var FaceUp;

board = GameObject.Find("Board").GetComponent(Board);

function Start () 
{
	flipped = false;
	FaceUp = false;
	
	if(Variables.Theme == "Doc")
	{
		Tex.spriteId = Tex.GetSpriteIdByName("DocBack");
	}
	if(Variables.Theme == "Princesses")
	{
		Tex.spriteId = Tex.GetSpriteIdByName("PrincessesBack");
	}
	if(Variables.Theme == "Sofia")
	{
		Tex.spriteId = Tex.GetSpriteIdByName("SofiaBack");
	}
	if(Variables.Theme == "Jake")
	{
		Tex.spriteId = Tex.GetSpriteIdByName("JakeBack");
	}
	if(Variables.Theme == "Mickey")
	{
		Tex.spriteId = Tex.GetSpriteIdByName("MickeyBack");
	}
	if(Variables.Theme == "Thomas")
	{
		Tex.spriteId = Tex.GetSpriteIdByName("ThomasBack");
	}
}

function Update () 
{
	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    var hit : RaycastHit;
    
    
    if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetButtonDown("Fire1") && !Variables.waiting)
       	{
       		if(!flipped)
       		{
       			board.Clicked(this);
       		}
       	}
    }
    
    if(!flipped)
	{
		if(FaceUp)
		{
			FlipDown();
		}
	}
	if(flipped)
	{
		if(!FaceUp)
		{
			FlipUp();
		}
	}
}

function FlipUp()
{
	while (Tex.scale.x > 0 && !FaceUp)
	{
		Tex.scale -= Vector3(0.1,0,0);
		yield WaitForSeconds(0.1);
	}
	Tex.scale = Vector3(0,1,1);
	FaceUp = true;
	Tex.spriteId = Tex.GetSpriteIdByName(color);
//	switch(color)
//	{
	//Default
//	case "Blue":
//		Tex.spriteId = Tex.GetSpriteIdByName("Blue");
//		break;
//	case "Green":
//		Tex.spriteId = Tex.GetSpriteIdByName("Green");
//		break;
//	case "Red":
//		Tex.spriteId = Tex.GetSpriteIdByName("Red");
//		break;
//	case "Yellow":
//		Tex.spriteId = Tex.GetSpriteIdByName("Yellow");
//		break;
	//Sofia		
//	default:
//		break;
//	}
	while (Tex.scale.x < 1.0f)
	{
		Tex.scale.x += 0.1f;
		yield WaitForSeconds(0.1);
	}
}

function FlipDown()
{
	while (Tex.scale.x > 0 && FaceUp)
	{
		Tex.scale -= Vector3(0.1,0,0);
		yield WaitForSeconds(0.1);
	}
	Tex.scale = Vector3(0,1,1);
	FaceUp = false;
	if(Variables.Theme == "Doc")
	{
		Tex.spriteId = Tex.GetSpriteIdByName("DocBack");
	}
	if(Variables.Theme== "Princesses")
	{
		Tex.spriteId = Tex.GetSpriteIdByName("PrincessesBack");
	}
	if(Variables.Theme == "Sofia")
	{
		Tex.spriteId = Tex.GetSpriteIdByName("SofiaBack");
	}
	if(Variables.Theme == "Jake")
	{
		Tex.spriteId = Tex.GetSpriteIdByName("JakeBack");
	}
	if(Variables.Theme == "Mickey")
	{
		Tex.spriteId = Tex.GetSpriteIdByName("MickeyBack");
	}
	if(Variables.Theme == "Thomas")
	{
		Tex.spriteId = Tex.GetSpriteIdByName("ThomasBack");
	}
	while (Tex.scale.x < 1.0f)
	{
		Tex.scale.x += 0.1f;
		yield WaitForSeconds(0.1);
	}
}