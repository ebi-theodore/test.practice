const quizData = [
    {
        "question": "Which hardware component would you check first if a computer does not power on?",
        "options": ["CPU","SMPS","RAM","Hard Disk"],
        "correct": "SMPS"
    },
    {
        "question": "When installing a printer, what is the first step to ensure proper functionality?",
        "options": ["Connect USB cable","Install device driver","Turn on the printer","Restart the system"],
        "correct": "Install device driver"
    },
    {
        "question": "Which command displays network configuration of a system in Windows?",
        "options": ["PING","IPCONFIG","TRACERT","NETSTAT"],
        "correct": "IPCONFIG"
    },
    {
        "question": "For hosting multiple web applications securely on the same server, which Windows Server component is essential?",
        "options": ["DHCP","Active Directory","IIS Web Server","FTP Server"],
        "correct": "IIS Web Server"
    },
    {
        "question": "To allow clients to automatically receive IP addresses in a LAN, which service must be installed?",
        "options": ["DNS","DHCP","FTP","SMTP"],
        "correct": "DHCP"
    },
    {
        "question": "When configuring a VPN, what is the main goal?",
        "options": ["Encrypt communication","Assign static IPs","Increase bandwidth","Format hard drives"],
        "correct": "Encrypt communication"
    },
    {
        "question": "When planning a backup strategy, which method ensures minimal data loss?",
        "options": ["Manual daily backups","Automated scheduled backups","Copy files to USB once a month","Rely on RAID alone"],
        "correct": "Automated scheduled backups"
    },
    {
        "question": "When configuring DNS for a domain, which of the following is mandatory?",
        "options": ["Subnet mask","Domain name and IP mapping","FTP access","Static routing"],
        "correct": "Domain name and IP mapping"
    },
    {
        "question": "If a scanner is not detected after installation, what is the first troubleshooting step?",
        "options": ["Replace the scanner","Check and update device driver","Reinstall Windows","Check firewall settings"],
        "correct": "Check and update device driver"
    },
    {
        "question": "When creating network topologies in a simulation software, which factor is most critical?",
        "options": ["Cable length","Logical arrangement and IP addressing","CPU speed","Hard disk capacity"],
        "correct": "Logical arrangement and IP addressing"
    },
    {
        "question": "Which network device forwards traffic only to the intended device based on MAC address?",
        "options": ["Hub","Switch","Router","Repeater"],
        "correct": "Switch"
    },
    {
        "question": "Which Windows Server feature allows centralized authentication of users in a domain?",
        "options": ["DHCP","Active Directory","IIS","Firewall"],
        "correct": "Active Directory"
    },
    {
        "question": "In a LAN, which device is essential to interconnect multiple networks and provide internet access?",
        "options": ["Hub","Switch","Router","Modem"],
        "correct": "Router"
    },
    {
        "question": "When performing disk defragmentation, what is the primary benefit?",
        "options": ["Reduce file size","Improve file access speed","Increase disk storage","Encrypt data"],
        "correct": "Improve file access speed"
    },
    {
        "question": "If you want to enforce policies on users’ password strength and login times, which Windows feature is used?",
        "options": ["Active Directory","DHCP","DNS","IIS"],
        "correct": "Active Directory"
    },
    {
        "question": "Which cabling type should be used for connecting a PC to a switch in a corporate network?",
        "options": ["Cross-over","Straight-through","Coaxial","Fiber optic"],
        "correct": "Straight-through"
    },
    {
        "question": "To allow clients to send emails via a server in a secure manner, which service is configured?",
        "options": ["HTTP","FTP","SMTP","DHCP"],
        "correct": "SMTP"
    },
    {
        "question": "Which scenario requires configuring subnetting in a network?",
        "options": ["Multiple departments with limited IPs","Connecting a single PC","Installing printer drivers","Installing Windows updates"],
        "correct": "Multiple departments with limited IPs"
    },
    {
        "question": "Which subnet mask corresponds to a Class C IP address?",
        "options": ["255.0.0.0","255.255.0.0","255.255.255.0","255.255.255.255"],
        "correct": "255.255.255.0"
    },
    {
        "question": "In IP addressing, why is subnet mask important?",
        "options": ["To increase CPU speed","To determine network and host portions of an IP","To compress packets","To assign MAC addresses"],
        "correct": "To determine network and host portions of an IP"
    },
    {
        "question": "Which scenario requires configuring firewall rules?",
        "options": ["Allowing specific service ports for clients","Formatting hard disks","Installing Active Directory","Performing disk cleanup"],
        "correct": "Allowing specific service ports for clients"
    },
    {
        "question": "Which of the following is firmware?",
        "options": ["BIOS","MS Word","Windows OS","SSD"],
        "correct": "BIOS"
    },
    {
        "question": "What is the main function of a motherboard?",
        "options": ["Store data permanently","Connect and allow communication between all components","Process instructions","Provide power to peripherals"],
        "correct": "Connect and allow communication between all components"
    },
    {
        "question": "What does SMPS stand for?",
        "options": ["Standard Memory Power Supply","Switching Mode Power Supply","Single Motherboard Power Source","System Main Power Storage"],
        "correct": "Switching Mode Power Supply"
    },
    {
        "question": "Which memory is fastest in a computer system?",
        "options": ["Main memory","Cache memory","SSD","Hard disk"],
        "correct": "Cache memory"
    },
    {
        "question": "Which printer type uses heat to transfer ink to paper?",
        "options": ["Laser","Dot Matrix","Inkjet","Thermal"],
        "correct": "Thermal"
    },
    {
        "question": "What is the correct sequence to format and partition a hard disk?",
        "options": ["Partition → Format","Format → Partition","Scan → Partition","Defrag → Partition"],
        "correct": "Partition → Format"
    },
    {
        "question": "Which utility is used to check disk errors in Windows?",
        "options": ["Disk Cleanup","Scan Disk","Defragmenter","Backup"],
        "correct": "Scan Disk"
    },
    {
        "question": "Which service is responsible for translating domain names to IP addresses?",
        "options": ["DHCP","DNS","FTP","SMTP"],
        "correct": "DNS"
    },
    {
        "question": "Which cabling type is used for connecting a computer to a switch?",
        "options": ["Straight-through","Cross-over","HDMI","RJ45"],
        "correct": "Straight-through"
    }
];
