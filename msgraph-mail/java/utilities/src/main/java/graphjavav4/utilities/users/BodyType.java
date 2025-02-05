package graphjavav4.utilities.users;

import com.microsoft.kiota.serialization.ValuedEnum;
import java.util.Objects;

public enum BodyType implements ValuedEnum {
    Text("text"),
    Html("html");
    public final String value;
    BodyType(final String value) {
        this.value = value;
    }
    @javax.annotation.Nonnull
    public String getValue() { return this.value; }
    @javax.annotation.Nullable
    public static BodyType forValue(@javax.annotation.Nonnull final String searchValue) {
        Objects.requireNonNull(searchValue);
        switch(searchValue) {
            case "text": return Text;
            case "html": return Html;
            default: return null;
        }
    }
}
