# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # This software needs to run on RHEL 6 in future, probably.
  # So we choose this "esoteric" os and version...
  config.vm.box = "centos/6"

  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network :private_network, ip: "10.0.210.201"

  # Using NFS is better, even if it requires you to install nfs server on 
  # host! It just is, believe me. 
  config.vm.synced_folder ".", "/vagrant", type: "nfs"

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "1024"
  end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  config.vm.provision "shell", inline: <<-SHELL
    yum update -y
    curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
    yum install nodejs
    yum install libselinux-python -y
  SHELL
end
