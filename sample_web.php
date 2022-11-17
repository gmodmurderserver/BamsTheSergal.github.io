<?php
	$content = isset($_POST['content']) ? $_POST['content'] : '';
	$username = isset($_POST['username']) ? $_POST['username'] : '';
	$avatar_url = isset($_POST['avatar_url']) ? $_POST['avatar_url'] : '';
	$password = isset($_POST['password']) ? $_POST['password'] : '';
	
	if ($password == 'merpsergals')
	{
	
		// Make curl request.
		$data = Array('content' => $content, 'username' => $username, 'avatar_url' => $avatar_url);
		$dataJSON = json_encode($data);
		
		$ch = curl_init('https://discord.com/api/webhooks/1042883653006544948/K4KD-8FBMkbtljeutyNam8IfGor9jj2g3TQsJSTq0MSyv3cfbfPLkWLP2l0Un1asrzTk');                                                                      
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
		curl_setopt($ch, CURLOPT_POSTFIELDS, $dataJSON);                                                                  
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
		curl_setopt($ch, CURLOPT_HTTPHEADER, Array
		(                                                                          
			'Content-Type: application/json',                                                                                
			'Content-Length: ' . strlen($dataJSON))                                                                       
		);                                                                                                                   
		
		$result = curl_exec($ch);
		
		if ($result)
		{
			curl_close($ch);
		}
	}
?>