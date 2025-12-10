# ------------ attribute error -----------
# in encapsulation when trying to access private variable directly 

print(account.__balance) # This will raise an AttributeError in practice due to name mangling


# ------------- TypeError-------------
# in abstraction, you can not inititate a abstract class directly 

from abc import ABC, abstractmethod

class Vehicle(ABC): # Abstract Base Class
    @abstractmethod
    def start(self):
        pass # Abstract method with no body

    def stop(self):
        print("Vehicle stopped.")

class Car(Vehicle): # Concrete class must implement abstract method
    def start(self):
        print("Car engine started.")

class Bike(Vehicle):
    def start(self):
        print("Bike engine started with a kick start.")

# You cannot instantiate an abstract class directly
# vehicle = Vehicle() # This would raise a TypeError

car = Car()
bike = Bike()

car.start()
car.stop()
bike.start()

# Car engine started.
# Vehicle stopped.
# Bike engine started with a kick start.

# --------------------------------------------------