import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class EncryptPassword {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String rawPassword = "123456"; // A senha que deseja criptografar
        String encodedPassword = encoder.encode(rawPassword);
        System.out.println("Senha criptografada: " + encodedPassword);
    }
}
