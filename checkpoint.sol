pragma solidity ^0.4.24;

contract fileCheck {

    struct FileDetails {
        uint timestamp;
        address uploader;
        string fileHash;
    }

    mapping (string => FileDetails) files;

    function set(string fileHash) public {
        files[fileHash].uploader = msg.sender;
        files[fileHash].timestamp = now;
    }

    function get(string fileHash, address _toVerify) public view returns (bool, uint) {
        if(files[fileHash].uploader == _toVerify) {
            return (true, files[fileHash].timestamp);
        }
        else if (files[fileHash].uploader != _toVerify) {
            return (false,0);
        }
    }
}
