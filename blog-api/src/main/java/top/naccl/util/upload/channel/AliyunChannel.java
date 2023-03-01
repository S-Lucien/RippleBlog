package top.naccl.util.upload.channel;

import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import org.springframework.beans.factory.annotation.Value;
import top.naccl.util.upload.UploadUtils;

import java.io.ByteArrayInputStream;
import java.util.UUID;

public class AliyunChannel implements FileUploadChannel{
    @Value("${aliyun.accessKeyId}")
    private String accessKeyId;

    @Value("${aliyun.secretAccessKey}")
    private String secretAccessKey;

    @Value("${aliyun.oss.endPoint}")
    private String endPoint;

    @Value("${aliyun.oss.bucketName}")
    private String bucketName;

    @Override
    public String upload(UploadUtils.ImageResource image) throws Exception {
        // 创建OSSClient实例。
        OSS ossClient = new OSSClientBuilder().build(endPoint, accessKeyId, secretAccessKey);
        try {
            String extName = UUID.randomUUID() + "." + image.getType();
            ossClient.putObject(bucketName, extName, new ByteArrayInputStream(image.getData()));
            return "http://" + bucketName + "." + endPoint + "/" + extName;
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
        return null;
    }
}
