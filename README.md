# jQuery_basic

Repository with small examples introducing the use of the jQuery library, part of the JavaScript programming language for web development, at a basic level.

## How to Run  

### Termux (Android):  
1. **Open the Termux app**.  
2. **Update and install required packages** using the following commands:  
   ```bash  
   apt update && apt upgrade  
   pkg install busybox  
   pkg install git  
   git clone https://github.com/Hatoridev/Jquery_basico.git  
   cd Jquery_basico  
   ```  

3. **Navigate to the desired directory**:  
   ```bash  
   cd aula01  # or aula02, aula03, etc.  
   ```  

4. **Start the web server**:  
   - For **Aulas 01 to 04** (you can use `busybox` since they don’t require PHP):
     ```bash  
     busybox httpd -p 8000 -h .  
     ```  

5. **If port 8000 is already in use**:  
   - Identify the process using the port:  
     ```bash  
     lsof -i :8000  
     ```  
     **Example Output**:  
     ```bash  
     COMMAND   PID    USER    FD   TYPE DEVICE SIZE/OFF NODE NAME  
     busybox  12345  username  7u  IPv4  123456  0t0    TCP *:8000 (LISTEN)  
     ```  
   - Kill the process (replace `12345` with the actual PID):  
     ```bash  
     kill -9 12345  
     ```  
   - **As a last resort**, stop all `busybox` processes:  
     ```bash  
     pkill busybox  
     ```  

6. **Open the page in your browser**:  
   - **For specific files** (e.g., `file.html`):  
     ```
     http://localhost:8000/file.html
     ```  
   - **For `index.html` files** (no need to specify the file):  
     ```
     http://localhost:8000
     ```  
   - To access from another device, replace `localhost` with the device IP:  
     ```
     http://<your-device-ip>:8000/file.html
     ```  

### For **Aula 05 and beyond** (requires PHP):  
1. **Install PHP**:  
   ```bash  
   pkg install php  
   ```  

2. **Navigate to the directory where your PHP files are**:  
   ```bash  
   cd aula05  # or aula06, aula07, etc.  
   ```  

3. **Start the PHP built-in server**:  
   ```bash  
   php -S localhost:8000  
   ```  

4. **If port 8000 is already in use**:  
   - Identify the process using the port:  
     ```bash  
     lsof -i :8000  
     ```  
     **Example Output**:  
     ```bash  
     COMMAND   PID    USER    FD   TYPE DEVICE SIZE/OFF NODE NAME  
     php      6789  username  7u  IPv4  987654  0t0    TCP *:8000 (LISTEN)  
     ```  
   - Kill the process (replace `6789` with the actual PID):  
     ```bash  
     kill -9 6789  
     ```  
   - **As a last resort**, stop all PHP processes:  
     ```bash  
     pkill php  
     ```  
     This command will terminate all running PHP processes, including the one serving your files.

5. **Open the page in your browser**:  
   - **For specific files** (e.g., `file.php`):  
     ```
     http://localhost:8000/file.php
     ```  
   - **For `index.php` files** (no need to specify the file):  
     ```
     http://localhost:8000
     ```  

### Windows:  
1. **Install Git**:  
   Download and install [Git for Windows](https://gitforwindows.org/).  

2. **Install BusyBox**:  
   - Download and install [BusyBox for Windows](https://frippery.org/busybox/).  
   - Make sure to add `busybox.exe` to your system's PATH so you can run it directly from the command prompt.

3. **Clone the repository and navigate to the directory**:  
   ```bash  
   git clone https://github.com/Hatoridev/Jquery_basico.git  
   cd Jquery_basico  
   ```  

4. **For Aulas 01 to 04**:  
   - **Start the web server using BusyBox**:  
     ```bash  
     busybox httpd -p 8000 -h .  
     ```  

5. **If port 8000 is already in use**:  
   - Identify the process using the port:  
     ```bash  
     netstat -ano | findstr :8000  
     ```  
     **Example Output**:  
     ```bash  
     COMMAND   PID    USER    FD   TYPE DEVICE SIZE/OFF NODE NAME  
     busybox  12345  username  7u  IPv4  123456  0t0    TCP *:8000 (LISTEN)  
     ```  
   - Kill the process (replace `12345` with the actual PID):  
     ```bash  
     taskkill /PID 12345 /F  
     ```  
   - **As a last resort**, stop all `busybox` processes:  
     ```bash  
     pkill busybox  
     ```  

6. **Open the page in your browser**:  
   - **For specific files** (e.g., `file.html`):  
     ```
     http://localhost:8000/file.html
     ```  
   - **For `index.html` files** (no need to specify the file):  
     ```
     http://localhost:8000
     ```  

7. **For Aula 05 and beyond** (requires PHP):  
   - **Start the PHP built-in server**:  
     - In the desired folder where PHP files are located, open a command prompt and run:  
       ```bash  
       php -S localhost:8000  
       ```  

8. **If port 8000 is already in use**:  
   - Identify the process using the port:  
     ```bash  
     netstat -ano | findstr :8000  
     ```  
     **Example Output**:  
     ```bash  
     COMMAND   PID    USER    FD   TYPE DEVICE SIZE/OFF NODE NAME  
     php      6789  username  7u  IPv4  987654  0t0    TCP *:8000 (LISTEN)  
     ```  
   - Kill the process (replace `6789` with the actual PID):  
     ```bash  
     taskkill /PID 6789 /F  
     ```  
   - **As a last resort**, stop all PHP processes:  
     ```bash  
     pkill php  
     ```  

9. **Open the page in your browser**:  
   - **For specific files** (e.g., `file.php`):  
     ```
     http://localhost:8000/file.php
     ```  
   - **For `index.php` files** (no need to specify the file):  
     ```
     http://localhost:8000
     ```

### **Debian/Linux**

1. **Install required packages**:  
   Update and upgrade your system first:  
   ```bash  
   sudo apt update && sudo apt upgrade  
   ```  

   Then install the necessary packages:  
   ```bash  
   sudo apt install busybox  
   sudo apt install git  
   ```  

2. **Clone the repository and navigate to the directory**:  
   ```bash  
   git clone https://github.com/Hatoridev/Jquery_basico.git  
   cd Jquery_basico  
   ```  

3. **Navigate to the desired directory**:  
   ```bash  
   cd aula01  # or aula02, aula03, etc.  
   ```  

4. **Start the web server**:  
   For **Aulas 01 to 04** (since they don’t require PHP):
   ```bash  
   busybox httpd -p 8000 -h .  
   ```  

5. **If port 8000 is already in use**:  
   - Identify the process using the port:  
     ```bash  
     lsof -i :8000  
     ```  
     **Example Output**:  
     ```bash  
     COMMAND   PID    USER    FD   TYPE DEVICE SIZE/OFF NODE NAME  
     busybox  12345  username  7u  IPv4  123456  0t0    TCP *:8000 (LISTEN)  
     ```  
   - Kill the process (replace `12345` with the actual PID):  
     ```bash  
     kill -9 12345  
     ```  
   - **As a last resort**, stop all `busybox` processes:  
     ```bash  
     pkill busybox  
     ```  

6. **Open the page in your browser**:  
   - **For specific files** (e.g., `file.html`):  
     ```
     http://localhost:8000/file.html
     ```  
   - **For `index.html` files** (no need to specify the file):  
     ```
     http://localhost:8000
     ```  
   - To access from another device, replace `localhost` with the device IP:  
     ```
     http://<your-device-ip>:8000/file.html
     ```
     
### **For Aula 05 and beyond** (requires PHP):

1. **Install PHP**:  
   In **Aula 05 and beyond**, PHP is required. If you haven’t installed it yet, use the following command to install PHP:  
   ```bash  
   sudo apt install php  
   ```  

2. **Navigate to the directory with PHP files**:  
   ```bash  
   cd aula05  # or aula06, aula07, etc.  
   ```  

3. **Start the PHP built-in server**:  
   To run PHP files, use the built-in PHP server:  
   ```bash  
   php -S localhost:8000  
   ```  

4. **If port 8000 is already in use**:  
   - Identify the process using the port:  
     ```bash  
     lsof -i :8000  
     ```  
     **Example Output**:  
     ```bash  
     COMMAND   PID    USER    FD   TYPE DEVICE SIZE/OFF NODE NAME  
     php      6789  username  7u  IPv4  987654  0t0    TCP *:8000 (LISTEN)  
     ```  
   - Kill the process (replace `6789` with the actual PID):  
     ```bash  
     kill -9 6789  
     ```  
   - **As a last resort**, stop all PHP processes:  
     ```bash  
     pkill php  
     ```  
     This will stop all PHP processes, including the one serving your files.

5. **Open the page in your browser**:  
   - **For specific files** (e.g., `file.php`):  
     ```
     http://localhost:8000/file.php
     ```  
   - **For `index.php` files** (no need to specify the file):  
     ```
     http://localhost:8000
     ```
     
### **Languages** 
<div align="left">  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="60" alt="HTML logo" />  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="60" alt="CSS logo" />  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="60" alt="JavaScript logo" />  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" height="60" alt="PHP logo" />  
</div>

### **Library**  
<div align="left">  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" height="60" alt="jQuery logo" />  
</div>
